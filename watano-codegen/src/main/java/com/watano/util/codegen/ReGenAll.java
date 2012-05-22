package com.watano.util.codegen;

import java.io.File;

import org.nutz.lang.Files;

public class ReGenAll {
	public static void main(String[] args) throws Exception {
		AutoCodeGen autoCodeGen = new AutoCodeGen();
		autoCodeGen.init();
		for (File f : Files.dirs(new File(autoCodeGen.getTemplateBasePath()))) {
			if (f.getName().endsWith(".ftl") && !f.getName().endsWith(".inc.ftl")) {
				autoCodeGen.fileChange(f);
			}
		}
	}
}
