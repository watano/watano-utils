package com.watano.util.lang;

import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.StringUtils;

import com.watano.annotation.NonNull;
import com.watano.annotation.Nullable;
import com.watano.util.collection.StringMap;

public class SimpleValue {
	@Nullable
	public static Object defaultValue(@Nullable Object defaultValue, @Nullable Object... values) {
		if (values != null) {
			for (Object value : values) {
				if (value != null) {
					return value;
				}
			}
		}
		return defaultValue;
	}

	@Nullable
	public static Boolean boolValue(@Nullable Object value) {
		if (value == null) {
			return null;
		}
		if (value instanceof Boolean) {
			return ((Boolean) value).booleanValue();
		} else if (value instanceof String) {
			String v = (String) value;
			if ("1".equals(v) || "true".equalsIgnoreCase(v) || "yes".equalsIgnoreCase(v) || "on".equalsIgnoreCase(v)) {
				return true;
			}
			if ("0".equals(v) || "false".equalsIgnoreCase(v) || "no".equalsIgnoreCase(v) || "off".equalsIgnoreCase(v)) {
				return false;
			}
		}
		return null;
	}

	@Nullable
	public static Integer intValue(@Nullable Object value) {
		if (value == null) {
			return null;
		}
		if (value instanceof Number) {
			return ((Number) value).intValue();
		} else if (value instanceof String) {
			return Integer.parseInt((String) value);
		}
		return null;
	}

	@Nullable
	public static Long longValue(@Nullable Object value) {
		if (value == null) {
			return null;
		}
		if (value instanceof Number) {
			return ((Number) value).longValue();
		} else if (value instanceof String) {
			return Long.parseLong((String) value);
		}
		return null;
	}

	@Nullable
	public static Short shortValue(@Nullable Object value) {
		if (value == null) {
			return null;
		}
		if (value instanceof Number) {
			return ((Number) value).shortValue();
		} else if (value instanceof String) {
			return Short.parseShort((String) value);
		}
		return null;
	}

	@Nullable
	public static Float floatValue(@Nullable Object value) {
		if (value == null) {
			return null;
		}
		if (value instanceof Number) {
			return ((Number) value).floatValue();
		} else if (value instanceof String) {
			return Float.parseFloat((String) value);
		}
		return null;
	}

	@Nullable
	public static Double doubleValue(@Nullable Object value) {
		if (value == null) {
			return null;
		}
		if (value instanceof Number) {
			return ((Number) value).doubleValue();
		} else if (value instanceof String) {
			return Double.parseDouble((String) value);
		}
		return null;
	}

	@Nullable
	public static Byte byteValue(@Nullable Object value) {
		if (value == null) {
			return null;
		}
		if (value instanceof Number) {
			return ((Number) value).byteValue();
		} else if (value instanceof String) {
			return Byte.parseByte((String) value);
		}
		return null;
	}

	@Nullable
	public static Character charValue(@Nullable Object value) {
		if (value == null) {
			return null;
		}
		if (value instanceof String && ((String) value).trim().length() > 0) {
			return ((String) value).trim().charAt(0);
		} else if (value instanceof Character) {
			return (Character) value;
		}
		return null;
	}

	@Nullable
	public static String strValue(@Nullable Object value) {
		if (value == null) {
			return null;
		}
		if (value.toString() != null) {
			return value.toString().trim();
		}
		return null;
	}

	@NonNull
	public static StringMap strMap(@Nullable Object value) {
		StringMap map = new StringMap();
		if (value == null) {
			return map;
		}
		for (String nvp : StringUtils.split(value.toString(), ',')) {
			String[] kv = StringUtils.split(nvp, ':');
			if (kv != null && kv.length > 0) {
				if (kv.length == 1) {
					map.put(kv[0], "");
				} else {
					map.put(kv[0], kv[1]);
				}
			}
		}
		return map;
	}

	@Nullable
	private static String[] values(@Nullable Object value) {
		String values = strValue(value);
		if (StringUtils.isNotBlank(values)) {
			String[] strvalues = StringUtils.split(values, ",");
			if (strvalues != null) {
				return strvalues;
			}
		}
		return new String[] {};
	}

	public static void main(String[] args) {
		String[] types = new String[] {
				"boolean", "Boolean", "bool",
				"byte", "Byte", "byte",
				"char", "Character", "char",
				"double", "Double", "double",
				"float", "Float", "float",
				"int", "Integer", "int",
				"long", "Long", "long",
				"short", "Short", "short",
				"String", "String", "str"
		};
		for (int i = 0; i < types.length; i += 3) {
			int indent = 0;
			//			PrintUtil.println(indent, "@NonNull");
			//			PrintUtil.println(indent, "public static ", types[i], "[] ", types[i + 2], "Values(@Nullable Object... values) {");
			//			PrintUtil.println(++indent, "if (values != null) {");
			//			PrintUtil.println(++indent, "for (Object value : values) {");
			//			PrintUtil.println(++indent, types[i], "[] vs = new ", types[i], "[] {};");
			//			PrintUtil.println(indent, "String[] strvalues = values(value);");
			//			PrintUtil.println(indent, "if (strvalues != null) {");
			//			PrintUtil.println(++indent, "for (String sv : strvalues) {");
			//			PrintUtil.println(++indent, "", types[i + 1], " v = ", types[i + 2], "Value(sv);");
			//			PrintUtil.println(indent, "if (v != null) {");
			//			PrintUtil.println(++indent, "vs = ArrayUtils.add(vs, v);");
			//			PrintUtil.println(--indent, "}");
			//			PrintUtil.println(--indent, "}");
			//			PrintUtil.println(--indent, "}");
			//			PrintUtil.println(indent, "if (vs != null && vs.length > 0) {");
			//			PrintUtil.println(++indent, "return vs;");
			//			PrintUtil.println(--indent, "}");
			//			PrintUtil.println(--indent, "}");
			//			PrintUtil.println(--indent, "}");
			//			PrintUtil.println(indent, "return new ", types[i], "[] {};");
			//			PrintUtil.println(--indent, "}");
			//			PrintUtil.println(indent, "");

			PrintUtil.println(indent, "public ", types[i + 1], " ", types[i + 2], "Value(String... keys) {");
			PrintUtil.println(++indent, "return SimpleValue.", types[i + 2], "Value(getValue(keys));");
			PrintUtil.println(--indent, "}");
			PrintUtil.println(indent, "");
			PrintUtil.println(indent, "public ", types[i + 1], " ", types[i + 2], "DefaultValue(", types[i + 1], " defaultValue, String... keys) {");
			PrintUtil.println(++indent, "return (", types[i + 1], ") SimpleValue.defaultValue(defaultValue, ", types[i + 2], "Value(keys));");
			PrintUtil.println(--indent, "}");
			PrintUtil.println(indent, "");
			PrintUtil.println(indent, "public ", types[i], "[] ", types[i + 2], "Values(String... keys) {");
			PrintUtil.println(++indent, "return SimpleValue.", types[i + 2], "Values(", types[i + 2], "Value(keys));");
			PrintUtil.println(--indent, "}");
			PrintUtil.println(indent, "");
		}
	}

	//--------------------------------------------
	@NonNull
	public static boolean[] boolValues(@Nullable Object... values) {
		if (values != null) {
			for (Object value : values) {
				boolean[] vs = new boolean[] {};
				String[] strvalues = values(value);
				if (strvalues != null) {
					for (String sv : strvalues) {
						Boolean v = boolValue(sv);
						if (v != null) {
							vs = ArrayUtils.add(vs, v);
						}
					}
				}
				if (vs != null && vs.length > 0) {
					return vs;
				}
			}
		}
		return new boolean[] {};
	}

	@NonNull
	public static byte[] byteValues(@Nullable Object... values) {
		if (values != null) {
			for (Object value : values) {
				byte[] vs = new byte[] {};
				String[] strvalues = values(value);
				if (strvalues != null) {
					for (String sv : strvalues) {
						Byte v = byteValue(sv);
						if (v != null) {
							vs = ArrayUtils.add(vs, v);
						}
					}
				}
				if (vs != null && vs.length > 0) {
					return vs;
				}
			}
		}
		return new byte[] {};
	}

	@NonNull
	public static char[] charValues(@Nullable Object... values) {
		if (values != null) {
			for (Object value : values) {
				char[] vs = new char[] {};
				String[] strvalues = values(value);
				if (strvalues != null) {
					for (String sv : strvalues) {
						Character v = charValue(sv);
						if (v != null) {
							vs = ArrayUtils.add(vs, v);
						}
					}
				}
				if (vs != null && vs.length > 0) {
					return vs;
				}
			}
		}
		return new char[] {};
	}

	@NonNull
	public static double[] doubleValues(@Nullable Object... values) {
		if (values != null) {
			for (Object value : values) {
				double[] vs = new double[] {};
				String[] strvalues = values(value);
				if (strvalues != null) {
					for (String sv : strvalues) {
						Double v = doubleValue(sv);
						if (v != null) {
							vs = ArrayUtils.add(vs, v);
						}
					}
				}
				if (vs != null && vs.length > 0) {
					return vs;
				}
			}
		}
		return new double[] {};
	}

	@NonNull
	public static float[] floatValues(@Nullable Object... values) {
		if (values != null) {
			for (Object value : values) {
				float[] vs = new float[] {};
				String[] strvalues = values(value);
				if (strvalues != null) {
					for (String sv : strvalues) {
						Float v = floatValue(sv);
						if (v != null) {
							vs = ArrayUtils.add(vs, v);
						}
					}
				}
				if (vs != null && vs.length > 0) {
					return vs;
				}
			}
		}
		return new float[] {};
	}

	@NonNull
	public static int[] intValues(@Nullable Object... values) {
		if (values != null) {
			for (Object value : values) {
				int[] vs = new int[] {};
				String[] strvalues = values(value);
				if (strvalues != null) {
					for (String sv : strvalues) {
						Integer v = intValue(sv);
						if (v != null) {
							vs = ArrayUtils.add(vs, v);
						}
					}
				}
				if (vs != null && vs.length > 0) {
					return vs;
				}
			}
		}
		return new int[] {};
	}

	@NonNull
	public static long[] longValues(@Nullable Object... values) {
		if (values != null) {
			for (Object value : values) {
				long[] vs = new long[] {};
				String[] strvalues = values(value);
				if (strvalues != null) {
					for (String sv : strvalues) {
						Long v = longValue(sv);
						if (v != null) {
							vs = ArrayUtils.add(vs, v);
						}
					}
				}
				if (vs != null && vs.length > 0) {
					return vs;
				}
			}
		}
		return new long[] {};
	}

	@NonNull
	public static short[] shortValues(@Nullable Object... values) {
		if (values != null) {
			for (Object value : values) {
				short[] vs = new short[] {};
				String[] strvalues = values(value);
				if (strvalues != null) {
					for (String sv : strvalues) {
						Short v = shortValue(sv);
						if (v != null) {
							vs = ArrayUtils.add(vs, v);
						}
					}
				}
				if (vs != null && vs.length > 0) {
					return vs;
				}
			}
		}
		return new short[] {};
	}

	@NonNull
	public static String[] strValues(@Nullable Object... values) {
		if (values != null) {
			for (Object value : values) {
				String[] vs = new String[] {};
				String[] strvalues = values(value);
				if (strvalues != null) {
					for (String sv : strvalues) {
						String v = strValue(sv);
						if (v != null) {
							vs = ArrayUtils.add(vs, v);
						}
					}
				}
				if (vs != null && vs.length > 0) {
					return vs;
				}
			}
		}
		return new String[] {};
	}

}
