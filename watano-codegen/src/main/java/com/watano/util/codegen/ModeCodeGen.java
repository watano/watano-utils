package com.watano.util.codegen;

import java.io.IOException;
import java.util.Arrays;
import java.util.Map;

import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.watano.util.lang.ArgCheck;

public class ModeCodeGen extends BaseCodeGen {
	private static final Logger LOG = LoggerFactory.getLogger(ModeCodeGen.class);

	public void gen(String mode, String... args) throws IOException {
		buildParams();
		// inifiles
		String[] inifiles = codegenini.getValues("inifiles", mode);
		if (inifiles != null && inifiles.length > 0) {
			addIniFiles(inifiles);
		}
		// params
		String[] extparams = codegenini.getValues("params", mode);
		if (extparams != null && extparams.length > 0 && extparams.length % 2 == 0) {
			for (int i = 0; i < extparams.length; i = i + 2) {
				params.put(extparams[i], extparams[i + 1]);
			}
		}
		// args: put cmd line args into params by names
		String[] extargs = codegenini.getValues("args", mode);
		if (extargs != null && extargs.length > 0) {
			for (int i = 0; i < extargs.length; i++) {
				params.put(extargs[i], args[i]);
			}
		}
		// preprocess
		String[] asserts = codegenini.getValues("preprocess", mode);
		if (asserts != null && asserts.length > 0) {
			for (String a : asserts) {
				if ("assertPom".equalsIgnoreCase(a.trim())) {
					assertPom(params);
				}
				if ("javaNames".equalsIgnoreCase(a.trim())) {
					javaNames(params);
				}
			}
		}
		// encoding
		String[] tpls = codegenini.getValues("tpls", mode);
		if (tpls != null && tpls.length > 0) {
			for (String tpl : tpls) {
				gen(tpl);
			}
		}
	}

	public static void main(String[] args) {
		try {
			ArgCheck.checkState(args != null && args.length > 0, "codegen need more than one arg!");
			ModeCodeGen codegen = new ModeCodeGen();
			codegen.init(".\\codegen.ini");
			codegen.gen(args[0], Arrays.copyOfRange(args, 1, args.length));
		} catch (Throwable e) {
			LOG.error(e.getMessage(), e);
		}
	}

	private void assertPom(Map<String, Object> p) {
		// artifacts
		Map<String, Object> artifacts = (Map<String, Object>) p.get("artifacts");
		ArgCheck.checkNotNull(artifacts);
		for (String key : artifacts.keySet()) {
			String[] artifactInfo = ((String) artifacts.get(key)).split(",", 3);
			ArgCheck.checkNotNull(artifactInfo);
			ArgCheck.checkState(artifactInfo.length > 0);
			if (artifactInfo.length == 1) {
				artifactInfo = new String[] { artifactInfo[0], "", "" };
			} else if (artifactInfo.length == 2) {
				artifactInfo = new String[] { artifactInfo[0], artifactInfo[1], "" };
			} else if (artifactInfo.length > 3) {
				artifactInfo = new String[] { artifactInfo[0], artifactInfo[1], artifactInfo[2] };
			}
			ArgCheck.checkState(ArrayUtils.contains(new String[] { "", "test", "provided", "runtime" }, artifactInfo[1]), artifactInfo[0]
					+ ":" + artifactInfo[1]);
			artifacts.put(key, artifactInfo);
		}
		// dependencies
		Map<String, String> dependencies = (Map<String, String>) p.get("dependencies");
		ArgCheck.checkNotNull(dependencies);
		for (String key : dependencies.keySet()) {
			ArgCheck.checkNotNull(artifacts.get(key), "dependencies[" + key + "] not find!");
		}
		// plugins
		Map<String, String> plugins = (Map<String, String>) p.get("plugins");
		ArgCheck.checkNotNull(plugins);
		for (String key : plugins.keySet()) {
			ArgCheck.checkNotNull(artifacts.get(key), "plugins[" + key + "] not find!");
		}
		// exclusions
		Map<String, Object> exclusions = (Map<String, Object>) p.get("exclusions");
		if (exclusions != null && exclusions.size() > 0) {
			for (String exclusion : exclusions.keySet()) {
				ArgCheck.checkNotNull(artifacts.get(exclusion), "exclusion[" + exclusion + "] not find!");
				String[] exclusioninfo = StringUtils.split(exclusions.get(exclusion).toString(), ',');
				if (exclusioninfo != null && exclusioninfo.length > 0) {
					for (String item : exclusioninfo) {
						ArgCheck.checkNotNull(artifacts.get(item), item + " for exclusion[" + exclusion + "] not find!");
					}
				}
				exclusions.put(exclusion, exclusioninfo);
			}
		}
		// configurations
		Map<String, String> configurations = (Map<String, String>) p.get("configurations");
		ArgCheck.checkNotNull(configurations);
		for (String key : configurations.keySet()) {
			ArgCheck.checkNotNull(artifacts.get(key), "configuration[" + key + "] not find!");
		}

		ArgCheck.checkNotNull("groupId");
		ArgCheck.checkNotNull("artifactId");
		ArgCheck.checkNotNull("packaging");
		ArgCheck.checkNotNull("version");
	}

	private void javaNames(Map<String, Object> p) {
		for (String t : new String[] { "base_package", "package" }) {
			String t_value = (String) p.get(t);
			if (t_value != null) {
				p.put("j" + t, t_value);
				p.put(t, t_value.replace('.', '\\'));
			}
		}
		for (String t : new String[] { "url" }) {
			String t_value = (String) p.get(t);
			if (t_value != null) {
				p.put(t, t_value);
				p.put("j" + t, t_value.replace('/', '.'));
			}
		}
	}
}
