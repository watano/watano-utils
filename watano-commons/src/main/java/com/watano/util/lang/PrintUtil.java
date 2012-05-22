package com.watano.util.lang;

import org.apache.commons.lang3.StringUtils;

public class PrintUtil {
	public static void println(String... msgs) {
		print(msgs);
		System.err.println();
	}

	public static void print(String... msgs) {
		if (msgs != null) {
			for (String msg : msgs) {
				System.err.print(msg);
			}
		}
	}

	public static void println(int indent, String... msgs) {
		print(indent, msgs);
		System.err.println();
	}

	public static void print(int indent, String... msgs) {
		if (indent > 0) {
			System.err.print(StringUtils.repeat('\t', indent));
		}
		if (msgs != null) {
			for (String msg : msgs) {
				System.err.print(msg);
			}
		}
	}
}
