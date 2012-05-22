package com.watano.util.codegen;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.monitor.FileAlterationListener;
import org.apache.commons.io.monitor.FileAlterationMonitor;
import org.apache.commons.io.monitor.FileAlterationObserver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import freemarker.template.TemplateException;

public class AutoCodeGen extends BaseCodeGen {
	private static final Logger LOG = LoggerFactory.getLogger(AutoCodeGen.class);

	public void init() throws IOException, TemplateException {
		init(".\\codegen.ini");
	}

	public void fileChange(File file) {
		try {
			String f = file.getAbsolutePath();
			f = FilenameUtils.normalize(f);
			genCode(f);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
		}
	}

	public void run() throws Exception {
		FileAlterationMonitor faMonitor = new FileAlterationMonitor(3000);
		FileAlterationObserver observer = new FileAlterationObserver(new File(getTemplateBasePath()));
		observer.addListener(new FileAlterationListener() {
			@Override
			public void onStart(FileAlterationObserver observer) {
			}

			@Override
			public void onDirectoryCreate(File directory) {
			}

			@Override
			public void onDirectoryChange(File directory) {
			}

			@Override
			public void onDirectoryDelete(File directory) {
			}

			@Override
			public void onFileCreate(File file) {
				LOG.debug("onFileCreate:" + file.getPath());
				fileChange(file);
			}

			@Override
			public void onFileChange(File file) {
				LOG.debug("onFileChange:" + file.getPath());
				fileChange(file);
			}

			@Override
			public void onFileDelete(File file) {
				LOG.debug("onFileDelete:" + file.getPath());
				fileChange(file);
			}

			@Override
			public void onStop(FileAlterationObserver observer) {
			}
		});
		faMonitor.addObserver(observer);
		faMonitor.start();
	}

	public static void main(String[] args) throws Exception {
		AutoCodeGen autoCodeGen = new AutoCodeGen();
		autoCodeGen.init();
		autoCodeGen.run();
	}
}
