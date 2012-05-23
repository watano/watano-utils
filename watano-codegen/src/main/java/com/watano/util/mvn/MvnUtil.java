package com.watano.util.mvn;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.io.StringReader;
import java.io.Writer;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.text.StrBuilder;
import org.apache.maven.model.Build;
import org.apache.maven.model.Dependency;
import org.apache.maven.model.Exclusion;
import org.apache.maven.model.Model;
import org.apache.maven.model.Plugin;
import org.apache.maven.model.PluginExecution;
import org.apache.maven.model.Repository;
import org.apache.maven.model.io.xpp3.MavenXpp3Reader;
import org.apache.maven.model.io.xpp3.MavenXpp3Writer;
import org.codehaus.plexus.util.xml.Xpp3Dom;
import org.codehaus.plexus.util.xml.Xpp3DomBuilder;
import org.codehaus.plexus.util.xml.pull.XmlPullParserException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.watano.util.ProcessUtil;
import com.watano.util.collection.IniPlus;
import com.watano.util.collection.StringMap;
import com.watano.util.collection.WArrays;

public class MvnUtil {
	private static final Logger LOG = LoggerFactory.getLogger(MvnUtil.class);
	private static String m2Dir = "e:\\documents\\.m2";
	private static String mvnHome = "e:\\work\\devtools\\maven3";

	public static void main(String[] args) throws IOException, XmlPullParserException {
		String encoding = "utf-8";
		String outDir = ".\\";
		String srcDir = ".\\templates\\";
		//parse args
		String method = "pomxml";
		if (args.length > 0 && StringUtils.isNotBlank(args[0])) {
			method = args[0].trim();
		}
		int i = 0;
		for (String arg : args) {
			if ("-encoding".equalsIgnoreCase(arg.trim()) && i + 1 < args.length) {
				encoding = args[i + 1].trim();
			} else if ("-outDir".equalsIgnoreCase(arg.trim()) && i + 1 < args.length) {
				outDir = args[i + 1].trim();
			} else if ("-srcDir".equalsIgnoreCase(arg.trim()) && i + 1 < args.length) {
				srcDir = args[i + 1].trim();
			} else if ("-m2Dir".equalsIgnoreCase(arg.trim()) && i + 1 < args.length) {
				m2Dir = args[i + 1].trim();
			} else if ("-mvnHome".equalsIgnoreCase(arg.trim()) && i + 1 < args.length) {
				mvnHome = args[i + 1].trim();
			}
			i++;
		}

		//invoke method
		if ("pomxml".equalsIgnoreCase(method.trim())) {
			Model model = buildPomXmlByIni(srcDir + "pom.ini");
			//			writingFile(outDir + ".classpath", genClasspath(model), encoding);
			writingFile(outDir + "pomlink.bat", genPomlinkBat(model), encoding);
			writePomXml(model, outDir + "pom.xml");
		} else if ("pomini".equalsIgnoreCase(method.trim())) {
			Model model = parsePomXml(srcDir + "pom.xml");
			writingFile(outDir + "pom.ini", genPomIni(model), encoding);
		} else if ("pom_baseIni".equalsIgnoreCase(method.trim())) {
			writingFile(m2Dir + "\\pom_base.ini", genPom_baseIni(m2Dir + "\\pom_base.ini"), encoding);
		} else if ("upversions".equalsIgnoreCase(method.trim())) {
			upversions(m2Dir + "\\pom_base.ini", encoding);
		} else {
			System.err.println("RepositoryUtil method [options]...");
			System.err.println("method:");
			System.err.println("pomxml	use pom.ini gen pom.xml");
			System.err.println("pomini	use pom.xml gen pom.ini");
			System.err.println("pom_baseIni	[TODO]use pom.xml gen the pom_base.ini");
			System.err.println("options:");
			System.err.println("-encoding encoding");
			System.err.println("-outdir outDir");
			System.err.println("-srcDir srcDir");
			System.err.println("-m2Dir m2Dir");
			System.err.println("-mvnHome mvnHome");
		}
	}

	private static void writingFile(String filePath, String text, String encoding) {
		try {
			LOG.info("writingFile:" + filePath);
			FileUtils.writeStringToFile(new File(filePath), text, encoding, false);
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		}

	}

	public static String genPom_baseIni(String baseini) throws IOException {
		return new IniPlus(baseini).toIniText();
	}

	public static void upversions(String baseini, String encoding) throws IOException, XmlPullParserException {
		Model model = new Model();
		model.setArtifactId("com.watano.pom_base_ini");
		model.setName("com.watano.pom_base_ini");
		model.setGroupId("com.watano");
		model.setPackaging("jar");
		model.setVersion("1.0");
		model.setModelVersion("4.0.0");

		IniPlus pombaseini = new IniPlus(baseini);
		//Repositories
		StringMap repos = pombaseini.getSection("repositories");
		for (String id : repos.keySet()) {
			Repository r = new Repository();
			r.setId(id);
			r.setUrl(repos.strValue(id));
			model.addRepository(r);
		}
		//Dependency
		StringMap ds = pombaseini.getSection("artifacts");
		for (String id : ds.keySet()) {
			Dependency d = new Dependency();
			d.setArtifactId(id);
			String[] v = ds.strValues(id);
			if (v != null && v.length > 0) {
				d.setGroupId(v[0]);
				if (v != null && v.length > 1) {
					d.setVersion(v[1]);
				} else {
					d.setVersion("1.0");
				}
				model.addDependency(d);
			}
		}
		try {
			//backup the old pom_base.ini file
			writingFile(m2Dir + "\\pom_base.old.ini", pombaseini.toIniText(), encoding);

			String pomxml = ".\\target\\pom.xml";
			FileUtils.deleteQuietly(new File(pomxml + ".versionsBackup"));
			writePomXml(model, pomxml);
			//run mvn versions:use-latest-releases
			ProcessUtil.exec(".\\target", System.err,
					mvnHome + "\\bin\\mvn.bat versions:use-latest-releases");

			//parse pom.xml
			Model newModel = parsePomXml(pomxml);
			StringMap keep_versions = pombaseini.getSection("keep-versions");
			List<String> updates = new ArrayList<String>();
			for (Dependency d : newModel.getDependencies()) {
				String aid = d.getArtifactId();
				String oldVersion = getVersion(pombaseini, aid);
				if (!d.getVersion().equalsIgnoreCase(oldVersion)) {
					//update versions
					if (StringUtils.isBlank(keep_versions.strValue(aid))) {
						updates.add(d.getGroupId()
								+ ":" + d.getArtifactId() + ":" + oldVersion + "==>" + d.getVersion());
						pombaseini.getData().put("artifacts." + aid, d.getGroupId() + "," + d.getVersion());
					}
				}
			}

			//write a new pom_base.ini file
			if (updates.size() > 0) {
				Collections.sort(updates);
				for (String upmsg : updates) {
					LOG.info(upmsg);
				}
				writingFile(m2Dir + "\\pom_base.ini", pombaseini.toIniText(), encoding);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static Model parsePomXml(String pomxml) throws IOException, XmlPullParserException {
		LOG.info("parsePomXml:" + pomxml);
		File pomXmlFile = new File(pomxml);
		FileReader reader = new FileReader(pomXmlFile);
		try {
			MavenXpp3Reader xpp3Reader = new MavenXpp3Reader();
			return xpp3Reader.read(reader);
		} finally {
			reader.close();
		}
	}

	public static void writePomXml(Model model, OutputStream stream) throws IOException {
		new MavenXpp3Writer().write(stream, model);
	}

	public static void writePomXml(Model model, Writer writer) throws IOException {
		new MavenXpp3Writer().write(writer, model);
	}

	public static void writePomXml(Model model, String filePath) throws IOException {
		LOG.info("writePomXml:" + filePath);
		writePomXml(model, new FileWriter(filePath));
	}

	//build model by pom.ini
	public static Model buildPomXmlByIni(String iniFile) throws XmlPullParserException, IOException {
		LOG.info("buildPomXmlByIni:" + iniFile);
		Model model = new Model();
		IniPlus ini = new IniPlus(m2Dir + "\\pom_base.ini");
		ini.fill(iniFile);
		model.setArtifactId(ini.value("artifactId", ""));
		model.setGroupId(ini.value("groupId", ""));
		model.setVersion(ini.value("version", ""));
		model.setPackaging(ini.value("packaging", ""));
		model.setModelVersion("4.0.0");
		model.setName(model.getArtifactId());

		//properties
		model.getProperties().put("project.build.sourceEncoding", ini.value("encoding", "utf-8"));
		//repositories
		StringMap repositoriesInfo = ini.getSection("repositories");
		String[] repos = ini.getValues("repos");
		Arrays.sort(repos);
		for (String repo : repos) {
			Repository r = new Repository();
			r.setId(repo);
			r.setName(repo);
			r.setUrl(repositoriesInfo.get(repo));
			model.addRepository(r);
		}

		//dependencies
		StringMap dependencies = ini.getSection("dependencies");
		for (String dependency : WArrays.getSortedKeys(dependencies, new String[] {})) {
			Dependency d = createArtifact(ini, dependency, "dependencies").toDependency();
			//exclusions
			String[] exclusion = ini.getValues("dependencies-exclusions." + dependency);
			for (String eid : exclusion) {
				Exclusion e = createArtifact(ini, eid, "dependencies-exclusions").toExclusion();
				d.addExclusion(e);
			}
			model.addDependency(d);
		}

		//build
		model.setBuild(new Build());
		//plugins
		StringMap plugins = ini.getSection("plugins");
		for (String pid : plugins.keySet()) {
			Plugin plugin = createArtifact(ini, pid, "plugins").toPlugin();
			//configurations
			String config = ini.value("plugin-configurations." + pid, "");
			//update configuration
			if (StringUtils.isNotBlank(config)) {
				Xpp3Dom c = Xpp3DomBuilder.build(new StringReader("<configuration>" + config + "</configuration>"));
				plugin.setConfiguration(c);
			}
			//executions
			String ekey = "plugin-executions." + pid;
			String executions = ini.value(ekey + ".goals", "");
			//update executions
			if (StringUtils.isNotBlank(executions)) {
				PluginExecution pe = new PluginExecution();
				String peid = ini.value(ekey + ".id", null);
				if (StringUtils.isNotBlank(peid)) {
					pe.setId(peid);
				}//
				String pephase = ini.value(ekey + ".phase", null);
				if (StringUtils.isNotBlank(pephase)) {
					pe.setPhase(pephase);
				}
				Integer pepriority = ini.getData().intValue(ekey + ".priority", null);
				if (pepriority != null) {
					pe.setPriority(pepriority);
				}
				String[] goals = ini.getValues(ekey + ".goals");
				for (String goal : goals) {
					pe.addGoal(goal);
				}
				plugin.addExecution(pe);
			}
			model.getBuild().addPlugin(plugin);
		}
		return model;
	}

	public static Artifact createArtifact(IniPlus ini, String dependency, String prefix) {
		String groupId = "";
		String artifactId = "";
		String version = "";
		String scope = "";
		if (dependency.indexOf(":") > 0) {
			groupId = dependency.substring(0, dependency.indexOf(":"));
			artifactId = dependency.substring(dependency.indexOf(":") + 1);
		} else {
			artifactId = dependency;
			groupId = getGroupId(ini, dependency);
		}

		String[] artifact = ini.getValues(prefix + "." + dependency);
		if (artifact.length > 0) {
			version = artifact[0];
		} else {
			version = getVersion(ini, artifactId);
		}
		scope = ini.value("dependencies-scopes." + artifactId, "");
		return new Artifact(groupId, artifactId, version, scope);
	}

	public static String getGroupId(IniPlus ini, String artifactId) {
		String[] artifact = ini.getValues("artifacts." + artifactId);
		if (artifact.length > 0) {
			return artifact[0];
		} else {
			throw new IllegalArgumentException("can't find group id for " + artifactId);
		}
	}

	public static String getVersion(IniPlus ini, String artifactId) {
		String[] artifact = ini.getValues("artifacts." + artifactId);
		if (artifact.length > 1) {
			return artifact[1];
		} else {
			return null;
		}
	}

	public static String genPomlinkBat(Model model) {
		StrBuilder sb = new StrBuilder();
		sb.appendln("@echo off");
		sb.appendln("@for /F \"delims=\" %%I in (\"%~dp0\") do @set projectHome=%%~fI");
		if ("war".equalsIgnoreCase(model.getPackaging())) {
			sb.appendln("set liblinkdir=%projectHome%WebRoot\\WEB-INF\\lib");
			sb.appendln("rmdir /s /q WebRoot");
			sb.appendln("mklink /d %projectHome%WebRoot %projectHome%src\\main\\webapp\\");
		} else {
			sb.appendln("set liblinkdir=%projectHome%target\\lib");
		}
		sb.appendln("rmdir /s /q %liblinkdir%");
		sb.appendln("mkdir %liblinkdir%");
		sb.appendln("mkdir %liblinkdir%\\sources");

		for (Dependency dependency : model.getDependencies()) {
			if (dependency.getScope() == null || !dependency.getScope().equals("provided")) {
				sb.appendln("call :wlink " + getArtifactDir(dependency) + " " + getArtifactFile(dependency));
			}
		}
		sb.appendln("goto :end");
		sb.appendln("");
		sb.appendln(":wlink");
		sb.appendln("echo mklink==%1\\%2.jar");
		sb.appendln("mklink /h %liblinkdir%\\%2.jar %M2_REPO%\\%1\\%2.jar");
		sb.appendln("mklink /h %liblinkdir%\\sources\\%2.jar %M2_REPO%\\%1\\%2-sources.jar");
		sb.appendln("goto :eof");
		sb.appendln("");
		sb.appendln(":end");
		sb.appendln("echo pom mklink end!!!!!!!!!!!!!!!!!!!!!!!");
		return sb.toString();
	}

	public static String getArtifactDir(Dependency dependency) {
		return StringUtils.replace(dependency.getGroupId(), ".", "\\")
				+ '\\' + dependency.getArtifactId() + '\\' + dependency.getVersion();
	}

	public static String getArtifactFile(Dependency dependency) {
		return dependency.getArtifactId() + '-' + dependency.getVersion();
	}

	public static String genClasspath(Model model) {
		StrBuilder sb = new StrBuilder();
		sb.appendln("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
		sb.appendln("	<classpath>");
		sb.appendln("	<classpathentry excluding=\"**/.svn/\" kind=\"src\" output=\"target/test-classes\" path=\"src/test/java\"/>");
		sb.appendln("	<classpathentry excluding=\"**/.svn/\" kind=\"src\" output=\"target/test-classes\" path=\"src/test/resources\"/>");
		sb.appendln("	<classpathentry excluding=\"**/.svn/\" kind=\"src\" path=\"src/main/java\"/>");
		sb.appendln("	<classpathentry excluding=\"**/.svn/\" kind=\"src\" path=\"src/main/resources\"/>");
		for (Dependency dependency : model.getDependencies()) {
			String artifactDir = getArtifactDir(dependency);
			artifactDir = StringUtils.replace(artifactDir, "\\", "/");
			String artifactFile = getArtifactFile(dependency);
			sb.appendln("	<classpathentry kind=\"var\" " +
					"path=\"M2_REPO/" + artifactDir + "/" + artifactFile + ".jar\" " +
					"sourcepath=\"M2_REPO/" + artifactDir + "/" + artifactFile + "-sources.jar\"/>");
		}

		sb.appendln("	<classpathentry kind=\"con\" path=\"org.eclipse.jdt.launching.JRE_CONTAINER\"/>");
		sb.appendln("	<classpathentry kind=\"output\" path=\"target/classes\"/>");
		sb.appendln("	</classpath>");
		return sb.toString();
	}

	public static String genPomIni(Model model) {
		StrBuilder sb = new StrBuilder();
		sb.appendln("");
		sb.appendln("groupId=" + model.getGroupId());
		sb.appendln("artifactId=" + model.getArtifactId());
		sb.appendln("version=" + model.getVersion());
		sb.appendln("packaging=" + model.getPackaging());
		sb.appendln("encoding=utf-8");
		sb.appendln("repos=xtend");
		sb.appendln("");
		sb.appendln("[dependencies]");
		Properties scopes = new Properties();
		for (Dependency d : model.getDependencies()) {
			sb.appendln(d.getArtifactId() + "=" + d.getVersion());
			if (StringUtils.isNotBlank(d.getScope())) {
				scopes.put(d.getArtifactId(), d.getScope());
			}
		}
		sb.appendln("");
		sb.appendln("[scopes]");
		for (Object sid : scopes.keySet()) {
			sb.appendln(sid.toString() + "=" + scopes.get(sid).toString());
		}
		sb.appendln("");
		sb.appendln("[plugins]");
		for (Plugin p : model.getBuild().getPlugins()) {
			sb.appendln(p.getArtifactId() + "=" + p.getVersion());
		}
		return sb.toString();
	}
}
