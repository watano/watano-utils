package com.watano.util.codegen;

import java.io.File;
import java.io.IOException;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.text.StrSubstitutor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.watano.util.collection.IniPlus;
import com.watano.util.collection.StringMap;
import com.watano.util.freemarker.FreemarkerServices;
import com.watano.util.freemarker.LogMethodModel;
import com.watano.util.freemarker.PinYinMethodModel;
import com.watano.util.freemarker.XMLDataMethodModel;
import com.watano.util.freemarker.jdbc.DataSourceMethodModel;
import com.watano.util.freemarker.jdbc.ExecSqlMethodModel;
import com.watano.util.freemarker.jdbc.QueryMethodModel;

import freemarker.template.TemplateException;

public class BaseCodeGen {
	private static final Logger LOG = LoggerFactory.getLogger(ModeCodeGen.class);

	protected FreemarkerServices fmServices;
	protected IniPlus codegenini;
	private StringMap encoding;
	private File codegenBase;
	private String codegenBasePath;
	private String templateBasePath;
	protected Map<String, Object> params;

	public IniPlus init(String iniFile) throws IOException, TemplateException {
		init(new IniPlus(iniFile));
		return codegenini;
	}

	public void init(IniPlus ini) throws IOException, TemplateException {
		codegenini = ini;
		fmServices = new FreemarkerServices();
		fmServices.init(codegenini);
		fmServices.getFMcfg().setSharedVariable("log", new LogMethodModel());
		fmServices.getFMcfg().setSharedVariable("DataSource", new DataSourceMethodModel());
		fmServices.getFMcfg().setSharedVariable("ExecSql", new ExecSqlMethodModel());
		fmServices.getFMcfg().setSharedVariable("QuerySql", new QueryMethodModel());
		fmServices.getFMcfg().setSharedVariable("PinYin", new PinYinMethodModel());
		fmServices.getFMcfg().setSharedVariable("XMLData", new XMLDataMethodModel());
		// encoding
		encoding = codegenini.getSection("encoding");

		// outut files
		codegenBase = new File(codegenini.value("codegen.base", "./output/"));
		codegenBasePath = FilenameUtils.normalize(codegenBase.getCanonicalPath()) + File.separator;
		// templateBasePath
		templateBasePath = codegenini.value(FreemarkerServices.cfg_DirectoryForTemplateLoading, ".");
		File directory = new File(templateBasePath);
		templateBasePath = FilenameUtils.normalize(directory.getCanonicalPath()) + File.separator;
	}

	public IniPlus getCodegenini() {
		return codegenini;
	}

	public void setCodegenini(IniPlus codegenini) {
		this.codegenini = codegenini;
	}

	public void buildParams() throws IOException {
		params = new Hashtable<String, Object>();
		// common params
		StringMap commonparams = codegenini.getSection("common-params");
		if (commonparams != null && commonparams.size() > 0) {
			params.putAll(commonparams);
		}
		String[] inifiles = codegenini.getValues("inifiles");
		if (inifiles != null && inifiles.length > 0) {
			addIniFiles(inifiles);
		}
	}

	public void addIniFiles(String... inifiles) throws IOException {
		Map<String, List<String>> sectionItemNames = new Hashtable<String, List<String>>();
		IniPlus inis = new IniPlus();
		for (String inifile : inifiles) {
			inifile = inifile.trim();
			if (inifile.startsWith("file://")) {
				inifile = inifile.substring(7);
				inis.fill(inifile);
			} else {
				inis.fill(templateBasePath + inifile);
			}
			List<String> sections = inis.getSections();
			for (String section : sections) {
				params.put(section, inis.getSection(section));
			}
			sectionItemNames.putAll(inis.getSectionItemNames());
		}
		params.put("__section_item_names__", sectionItemNames);
		params.putAll(inis.getData());
	}

	public void gen(String tpl) {
		// tpl file encoding
		for (String reg : encoding.keySet()) {
			if ((reg.startsWith("*") && tpl.endsWith(reg.substring(1))) || tpl.equalsIgnoreCase(reg)) {
				fmServices.setEncoding(encoding.get(reg));
				break;
			}
		}
		//
		StrSubstitutor sub = new StrSubstitutor(params);
		String outFile = tpl.endsWith(".ftl") ? tpl.substring(0, tpl.length() - 4) : tpl;
		outFile = codegenBasePath + sub.replace(outFile);
		outFile = outFile.replace('/', File.separatorChar);
		LOG.info("codege@" + fmServices.getEncoding() + "[" + tpl + "-->" + outFile + "]");
		fmServices.process(outFile, tpl, params);
	}

	public void genCode(String file) {
		try {
			String f = file;
			if (StringUtils.isNotBlank(f)) {
				f = file.trim();
			}
			if (file.endsWith("ini") || file.endsWith("ftl")) {
				// if it's the include file then skip
				if (f.endsWith(".inc.ftl")) {
					return;
				}

				if (f.startsWith(templateBasePath)) {
					f = f.substring(templateBasePath.length());
				}
				f = f.substring(0, f.length() - 4);
				// build param form ini data file
				buildParams();
				addIniFiles(f + ".ini");
				// gen ftl file
				LOG.info("autoCodeGen:" + f + ".ftl");
				gen(f + ".ftl");
			}
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		}
	}

	public String getTemplateBasePath() {
		return templateBasePath;
	}

	public String getCodegenBasePath() {
		return codegenBasePath;
	}
}
