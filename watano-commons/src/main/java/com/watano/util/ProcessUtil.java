package com.watano.util;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ProcessUtil {
	private static final Logger LOG = LoggerFactory.getLogger(ProcessUtil.class);

	public static void exec(String dir, OutputStream output, String... cmds) {
		Process process = null;
		try {
			Runtime rt = Runtime.getRuntime();
			for (String cmd : cmds) {
				process = rt.exec(cmd, null, new File(dir));
				IOUtils.copy(process.getInputStream(), output);
			}
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		} finally {
			if (process != null) {
				process.destroy();
			}
		}
	}
}
