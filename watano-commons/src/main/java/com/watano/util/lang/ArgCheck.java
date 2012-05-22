package com.watano.util.lang;

public class ArgCheck {

	public static void checkState(boolean b, String msg) {
		if (!b) {
			throw new IllegalArgumentException(msg);
		}
	}

	public static void checkState(boolean b) {
		if (!b) {
			throw new IllegalArgumentException();
		}
	}

	public static void checkNotNull(Object object) {
		if (object == null) {
			throw new IllegalArgumentException();
		}
	}

	public static void checkNotNull(Object object, String msg) {
		if (object == null) {
			throw new IllegalArgumentException(msg);
		}
	}
}
