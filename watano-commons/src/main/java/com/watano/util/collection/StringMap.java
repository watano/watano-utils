package com.watano.util.collection;

import java.util.Hashtable;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.text.StrBuilder;

import com.watano.util.lang.SimpleValue;

public class StringMap extends Hashtable<String, String> {
	private static final long serialVersionUID = -3784178615779605335L;

	public StringMap strMap(Object key) {
		return SimpleValue.strMap(get(key));
	}

	public void addIntoArrayValue(Object key, Object value) {
		String v = SimpleValue.strValue(key);
		if (StringUtils.isBlank(v)) {
			put(key.toString(), value.toString());
		} else {
			put(key.toString(), v + "," + value.toString());
		}
	}

	public String toIniText() {
		StrBuilder sb = new StrBuilder();
		String[] itemNames = WArrays.getSortedKeys(this, new String[] {});
		for (String item : itemNames) {
			sb.append(item).append("=");
			String value = get(item);
			value = StringUtils.replace(value, "\r\n", "\n");
			String[] lines = StringUtils.split(value, "\n");
			if (lines != null && lines.length > 0) {
				int i = 0;
				for (String line : StringUtils.split(value, "\n")) {
					if (i != 0) {
						sb.append("\\");
					}
					sb.appendln(line);
					i++;
				}
			} else {
				sb.appendln(value);
			}
		}
		return sb.toString();
	}

	@Override
	public synchronized String get(Object key) {
		return (key == null) ? null : super.get(key);
	}

	private synchronized String getValue(String... keys) {
		if (keys != null) {
			for (String key : keys) {
				String value = get(key);
				if (StringUtils.isNotBlank(value)) {
					return value;
				}
			}
		}
		return null;
	}

	//--------------------------------------------
	public Boolean boolValue(String... keys) {
		return SimpleValue.boolValue(getValue(keys));
	}

	public Boolean boolDefaultValue(Boolean defaultValue, String... keys) {
		return (Boolean) SimpleValue.defaultValue(defaultValue, boolValue(keys));
	}

	public boolean[] boolValues(String... keys) {
		return SimpleValue.boolValues(boolValue(keys));
	}

	public Byte byteValue(String... keys) {
		return SimpleValue.byteValue(getValue(keys));
	}

	public Byte byteDefaultValue(Byte defaultValue, String... keys) {
		return (Byte) SimpleValue.defaultValue(defaultValue, byteValue(keys));
	}

	public byte[] byteValues(String... keys) {
		return SimpleValue.byteValues(byteValue(keys));
	}

	public Character charValue(String... keys) {
		return SimpleValue.charValue(getValue(keys));
	}

	public Character charDefaultValue(Character defaultValue, String... keys) {
		return (Character) SimpleValue.defaultValue(defaultValue, charValue(keys));
	}

	public char[] charValues(String... keys) {
		return SimpleValue.charValues(charValue(keys));
	}

	public Double doubleValue(String... keys) {
		return SimpleValue.doubleValue(getValue(keys));
	}

	public Double doubleDefaultValue(Double defaultValue, String... keys) {
		return (Double) SimpleValue.defaultValue(defaultValue, doubleValue(keys));
	}

	public double[] doubleValues(String... keys) {
		return SimpleValue.doubleValues(doubleValue(keys));
	}

	public Float floatValue(String... keys) {
		return SimpleValue.floatValue(getValue(keys));
	}

	public Float floatDefaultValue(Float defaultValue, String... keys) {
		return (Float) SimpleValue.defaultValue(defaultValue, floatValue(keys));
	}

	public float[] floatValues(String... keys) {
		return SimpleValue.floatValues(floatValue(keys));
	}

	public Integer intValue(String... keys) {
		return SimpleValue.intValue(getValue(keys));
	}

	public Integer intDefaultValue(Integer defaultValue, String... keys) {
		return (Integer) SimpleValue.defaultValue(defaultValue, intValue(keys));
	}

	public int[] intValues(String... keys) {
		return SimpleValue.intValues(intValue(keys));
	}

	public Long longValue(String... keys) {
		return SimpleValue.longValue(getValue(keys));
	}

	public Long longDefaultValue(Long defaultValue, String... keys) {
		return (Long) SimpleValue.defaultValue(defaultValue, longValue(keys));
	}

	public long[] longValues(String... keys) {
		return SimpleValue.longValues(longValue(keys));
	}

	public Short shortValue(String... keys) {
		return SimpleValue.shortValue(getValue(keys));
	}

	public Short shortDefaultValue(Short defaultValue, String... keys) {
		return (Short) SimpleValue.defaultValue(defaultValue, shortValue(keys));
	}

	public short[] shortValues(String... keys) {
		return SimpleValue.shortValues(shortValue(keys));
	}

	public String strValue(String... keys) {
		return SimpleValue.strValue(getValue(keys));
	}

	public String strDefaultValue(String defaultValue, String... keys) {
		return (String) SimpleValue.defaultValue(defaultValue, strValue(keys));
	}

	public String[] strValues(String... keys) {
		return SimpleValue.strValues(strValue(keys));
	}
}
