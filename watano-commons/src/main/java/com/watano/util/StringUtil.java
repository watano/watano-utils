package com.watano.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.StringUtils;

public class StringUtil {
	public static String toString(String[] ss) {
		StringBuffer buf = new StringBuffer();
		if (ss != null) {
			for (String s : ss) {
				buf.append(s).append(' ');
			}
		}
		return buf.toString().trim();
	}

	public static String strLen(int num, int len) {
		return strLen(String.valueOf(num), len);
	}

	public static String strLen(long num, int len) {
		return strLen(String.valueOf(num), len);
	}

	public static String strLen(String s, int len) {
		if (s == null) {
			s = "";
		}
		int length = s.length();
		for (int i = 0; i < len - length; i++) {
			s = "0" + s;
		}
		return s;
	}

	public static String[] split(String str, String separator) {
		return split(str, separator, true);
	}

	/**
	 * Splits a string at the specified character.
	 */
	public static String[] split(String s, char c) {
		int i, b, e;
		int cnt;
		String res[];
		int ln = s.length();

		i = 0;
		cnt = 1;
		while ((i = s.indexOf(c, i)) != -1) {
			cnt++;
			i++;
		}
		res = new String[cnt];

		i = 0;
		b = 0;
		while (b <= ln) {
			e = s.indexOf(c, b);
			if (e == -1) {
				e = ln;
			}
			res[i++] = s.substring(b, e);
			b = e + 1;
		}
		return res;
	}

	/**
	 * Splits a string at the specified string.
	 */
	public static String[] split(String s, String sep, boolean caseInsensitive) {
		String splitString = caseInsensitive ? sep.toLowerCase() : sep;
		String input = caseInsensitive ? s.toLowerCase() : s;
		int i, b, e;
		int cnt;
		String res[];
		int ln = s.length();
		int sln = sep.length();

		if (sln == 0) {
			throw new IllegalArgumentException("The separator string has 0 length");
		}

		i = 0;
		cnt = 1;
		while ((i = input.indexOf(splitString, i)) != -1) {
			cnt++;
			i += sln;
		}
		res = new String[cnt];

		i = 0;
		b = 0;
		while (b <= ln) {
			e = input.indexOf(splitString, b);
			if (e == -1) {
				e = ln;
			}
			res[i++] = s.substring(b, e);
			b = e + sln;
		}
		return res;
	}

	public static String repeat(String s, int count) {
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < count; i++) {
			sb.append(s);
		}
		return sb.toString();
	}

	public static String repeatIds(Long[] ids, String s) {
		StringBuffer sb = new StringBuffer();
		for (Long id : ids) {
			sb.append(id + s);
		}
		if (sb.length() > 1) {
			return sb.substring(0, sb.length() - 1);
		} else {
			return "";
		}
	}

	public static boolean contains(Collection<String> mainCollection, String str) {
		String[] mainArr = new String[mainCollection.size()];
		return contains(mainCollection.toArray(mainArr), str);
	}

	public static boolean contains(Collection<String> mainCollection, Collection<String> subCollection) {
		String[] mainArr = new String[mainCollection.size()];
		String[] subArr = new String[subCollection.size()];
		return contains(mainCollection.toArray(mainArr), subCollection.toArray(subArr));
	}

	public static boolean contains(String[] mainArr, String[] subArr) {
		for (String s : subArr) {
			if (!contains(mainArr, s)) {
				return false;
			}
		}
		return true;
	}

	public static boolean contains(String[] strArr, String str) {
		for (String s : strArr) {
			if (s.equals(str)) {
				return true;
			}
		}
		return false;
	}

	public static String[] rebuildArray(String[] arr) {
		if (arr != null) {
			List<String> list = new ArrayList<String>(Arrays.asList(arr));
			for (Iterator<String> iter = list.iterator(); iter.hasNext();) {
				String s = iter.next();
				if (StringUtils.isEmpty(s)) {
					iter.remove();
				}
			}
			String[] newArr = new String[list.size()];
			return list.toArray(newArr);
		}
		return new String[0];
	}

	public static Long[] parseLongs(String text) {
		List<Long> randIds = new ArrayList<Long>();
		if (text != null) {
			for (String strBID : StringUtil.split(text, '|')) {
				if (strBID != null && !strBID.trim().equals("")) {
					randIds.add(Long.parseLong(strBID));
				}
			}
		}
		return randIds.toArray(new Long[] {});
	}

	public static String getIdsString(List<Long> ids) {
		if (ids != null && ids.size() > 0) {
			return "";
		} else {
			return getIdsString(new Long[] {});
		}
	}

	public static String getIdsString(Long[] ids) {
		String text = "";
		for (Long id : ids) {
			text += "|" + id.longValue() + "|";
		}
		return text;
	}

	public static Long[] parseIdsString(String text, Long... extIds) {
		return ArrayUtils.toObject(parseIdsString(text, ArrayUtils.toPrimitive(extIds)));
	}

	public static long[] parseIdsString(String text, long... extIds) {
		if (text != null && text.contains("*")) {
			return null;
		}
		return ArrayUtils.addAll(ArrayUtils.toPrimitive(parseLongs(text)), extIds);
	}

	public static String getIdTextByFilters(String text, Long extId, Long... filters) {
		return StringUtil.repeatIds(StringUtil.getIdsByFilters(text, extId, filters), ",");
	}

	public static Long[] getIdsByFilters(String text, Long extId, Long... filters) {
		try {
			Long[] deps;
			text = (text == null) ? "" : text.trim();
			if (text.indexOf('*') >= 0) {
				deps = new Long[] { -1l };
			} else {
				deps = StringUtil.parseLongs(text);
			}

			if (extId != null && !ArrayUtils.contains(deps, extId)) {
				deps = ArrayUtils.add(deps, extId);
			}
			if (ArrayUtils.contains(deps, -1l)) {
				deps = new Long[] { -1l };
			}
			if (filters != null && filters.length > 0) {
				if (ArrayUtils.contains(filters, -1l)) {
					return deps;
				}
				Long[] olddeps = new Long[] {};
				for (Long f : filters) {
					if (f != null
							&& (ArrayUtils.contains(deps, f) || ArrayUtils.contains(deps, -1l))
							&& !ArrayUtils.contains(olddeps, f)) {
						olddeps = ArrayUtils.add(olddeps, f);
					}
				}
				if (olddeps == null || olddeps.length <= 0) {
					return new Long[] { -99999l };
				}
				return olddeps;
			}
			return deps;
		} catch (Throwable t) {
			t.printStackTrace();
			return new Long[] { -99999l };
		}
	}

	public static String toText(Object[] objs, String ch) {
		StringBuffer text = new StringBuffer();
		for (Object o : objs) {
			text.append(o.toString());
			text.append(ch);
		}
		String t = text.toString().trim();
		if (t.endsWith(ch)) {
			t = t.substring(0, t.length() - 1);
		}
		return t;
	}

	public static Long parseId(Object id) {
		if (id == null) {
			return null;
		}
		if (id instanceof String && !StringUtils.isBlank((String) id)) {
			return Long.parseLong((String) id);
		} else if (id instanceof Number) {
			return ((Number) id).longValue();
		}
		return -1l;
	}

	public static boolean match(String text, String regex) {
		regex = StringUtils.replace(regex, "\\", "\\\\");
		regex = StringUtils.replace(regex, ".", "\\.");
		regex = StringUtils.replace(regex, "[", "\\[");
		regex = StringUtils.replace(regex, "]", "\\]");
		regex = StringUtils.replace(regex, "(", "\\(");
		regex = StringUtils.replace(regex, ")", "\\)");

		regex = StringUtils.replace(regex, "?", ".+");
		regex = StringUtils.replace(regex, "*", ".*");
		return text.matches(regex);
	}

	public static String getAbbreviation(String text) {
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < text.length(); i++) {
			char ch = text.charAt(i);
			if (ch >= 'A' && ch <= 'Z') {
				sb.append(ch);
			}
		}
		if (sb.length() > 0) {
			return sb.toString();
		}
		return text;
	}
}
