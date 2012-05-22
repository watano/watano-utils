package com.watano.util.freemarker;

import java.io.File;
import java.io.IOException;
import java.io.Writer;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.IOUtils;
import org.apache.commons.io.output.FileWriterWithEncoding;
import org.apache.commons.lang3.ArrayUtils;
import org.nutz.lang.Files;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.watano.util.collection.IniPlus;
import com.watano.util.collection.StringMap;
import com.watano.util.lang.ArgCheck;

import freemarker.cache.ClassTemplateLoader;
import freemarker.cache.FileTemplateLoader;
import freemarker.cache.MultiTemplateLoader;
import freemarker.cache.TemplateLoader;
import freemarker.template.Configuration;
import freemarker.template.DefaultObjectWrapper;
import freemarker.template.Template;
import freemarker.template.TemplateException;

public class FreemarkerServices {
	private static final Logger LOG = LoggerFactory.getLogger(FreemarkerServices.class);

	public static final String cfg_Deletebak = "Freemarker.deletebak";
	public static final String cfg_Backup = "Freemarker.backup";
	public static final String cfg_DirectoryForTemplateLoading = "Freemarker.DirectoryForTemplateLoading";
	public static final String cfg_AutoImports = "Freemarker.AutoImports";
	public static final String cfg_AutoInclude = "Freemarker.AutoInclude";
	public static final String cfg_Setting = "Freemarker.Setting";
	private Configuration cfg = null;
	private String encoding = "utf-8";

	public Configuration init(IniPlus iniplus) throws IOException, TemplateException {
		cfg = new Configuration();
		cfg.setObjectWrapper(new DefaultObjectWrapper());

		// DirectoryForTemplateLoading
		String[] dirs = iniplus.getValues(cfg_DirectoryForTemplateLoading);
		List<TemplateLoader> tls = new ArrayList<TemplateLoader>();
		tls.add(new FileTemplateLoader(new File(".")));
		tls.add(new ClassTemplateLoader(this.getClass(), "/"));
		for (String dir : dirs) {
			LOG.info("add FileTemplateLoader for dir:" + dir);
			tls.add(new FileTemplateLoader(new File(dir)));
		}
		MultiTemplateLoader mtl = new MultiTemplateLoader(tls.toArray(new TemplateLoader[] {}));
		cfg.setTemplateLoader(mtl);

		// AutoImport
		String[] autoImportText = iniplus.getValues(cfg_AutoImports);
		if (ArrayUtils.isNotEmpty(autoImportText) && autoImportText.length % 2 == 0) {
			for (int i = 0; i < autoImportText.length; i = i + 2) {
				LOG.info("add Auto Import:" + autoImportText[i] + "-->" + autoImportText[i + 1]);
				cfg.addAutoImport(autoImportText[i], autoImportText[i + 1]);
			}
		}
		// AutoInclude
		String[] autoIncludeText = iniplus.getValues(cfg_AutoInclude);
		if (ArrayUtils.isNotEmpty(autoIncludeText)) {
			for (String tpl : autoIncludeText) {
				LOG.info("add Auto Include:" + tpl);
				cfg.addAutoInclude(tpl);
			}
		}
		// Setting
		StringMap setting = iniplus.getMap(cfg_Setting);
		if (setting != null && setting.size() > 0) {
			for (String key : setting.keySet()) {
				LOG.info("Setting:[" + key + "=" + setting.get(key) + "]");
				cfg.setSetting(key, setting.get(key));
			}
		}
		return cfg;
	}

	public void process(Writer out, String template, Map<String, Object> params) {
		try {
			ArgCheck.checkNotNull(cfg, "pls init FreemarkerServices!");
			Template temp = cfg.getTemplate(template);
			temp.process(params, out);
		} catch (TemplateException e) {
			LOG.error(e.getMessage(), e);
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		} finally {
			IOUtils.closeQuietly(out);
		}
	}

	public void setEncoding(String encoding) {
		this.encoding = encoding;
		cfg.setDefaultEncoding(encoding);
		cfg.setOutputEncoding(encoding);
	}

	public String getEncoding() {
		return encoding;
	}

	public void process(String targetfile, String template, Map<String, Object> params) {
		Writer out = null;
		File fp = null;
		try {
			targetfile = targetfile.replace('\\', File.separatorChar);
			fp = new File(targetfile);
			if (!fp.exists()) {
				Files.createNewFile(fp);
			}
			out = new FileWriterWithEncoding(fp, Charset.forName(encoding));
			process(out, template, params);
			LOG.info("process file:" + targetfile);
		} catch (Exception ex) {
			LOG.error(ex.getMessage(), ex);
			if (fp != null && fp.exists()) {
				fp.delete();
			}
		} finally {
			IOUtils.closeQuietly(out);
		}
	}

	public Configuration getFMcfg() {
		return cfg;
	}
}
