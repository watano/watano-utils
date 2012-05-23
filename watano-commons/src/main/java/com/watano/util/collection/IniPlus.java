package com.watano.util.collection;

import static com.watano.util.lang.SimpleValue.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.text.StrBuilder;
import org.apache.commons.lang3.text.StrSubstitutor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.watano.util.ResourceHelper;
import com.watano.util.StringUtil;
import com.watano.util.lang.KeyValue;
import com.watano.util.lang.SimpleValue;

public class IniPlus {
	private static final Logger LOG = LoggerFactory.getLogger(IniPlus.class);

	private StringMap data = new StringMap();
	private final List<String> sections = new ArrayList<String>();
	private Map<String, List<String>> sectionItemNames = new Hashtable<String, List<String>>();
	private String parent = "";
	private String current = "";

	public IniPlus(String... locations) throws IOException {
		super();
		for (String location : locations) {
			fill(location);
		}
	}

	public IniPlus addLines(String text) {
		String content = StringUtils.replace(text, "\r\n", "\n");
		String[] lines = StringUtils.split(content, "\n");
		if (lines != null) {
			parent = "";
			current = "";
			for (String line : lines) {
				addLine(line);
			}
		}
		return this;
	}

	public IniPlus addLines(List<String> lines) {
		if (lines != null) {
			parent = "";
			current = "";
			for (String line : lines) {
				addLine(line);
			}
		}
		return this;
	}

	public IniPlus addLine(String line) {
		line = line.trim();
		if (line.startsWith("[") && line.endsWith("]")) {
			parent = line.substring(1, line.length() - 1);
			if (!sections.contains(parent)) {
				sections.add(parent);
			}
			parent += ".";
		} else if (line.startsWith("\\")) {
			String v = data.get(current);
			v += "\n" + line.substring(1);
			data.put(current, v);
			addSectionItem(parent, current);
		} else if (!line.startsWith("#") && line.indexOf("=") > 0) {
			String k = parent + line.substring(0, line.indexOf("="));
			String v = line.substring(line.indexOf("=") + 1);
			v = v.trim();
			current = k;
			data.put(k, v);
			addSectionItem(parent, current);
		}
		return this;
	}

	public IniPlus fill(String location) throws IOException {
		List<String> lines = ResourceHelper.readResourceLines(location);
		addLines(lines);
		return this;
	}

	private void addSectionItem(String section, String item) {
		section = section.trim();
		if (section.endsWith(".")) {
			section = section.substring(0, section.length() - 1);
		}
		List<String> items = getSectionItemNames().get(section);
		if (items == null) {
			items = new ArrayList<String>();
		}
		item = item.trim();
		if (item.startsWith(section + ".")) {
			item = item.substring((section + ".").length());
		}
		if (!items.contains(item)) {
			LOG.debug("section[" + section + "] add '" + item + "'");
			items.add(item);
		}
		sectionItemNames.put(section, items);
	}

	public void eval() {
		StrSubstitutor sub = new StrSubstitutor(data);
		for (String key : data.keySet()) {
			if (data.get(key) instanceof String) {
				String value = data.get(key);
				if (StringUtils.isNotBlank(key)) {
					value = sub.replace(value);
					data.put(key, value);
				}
			}
		}
	}

	private Object v(String name, String... prefixs) {
		KeyValue<String, String> match = new KeyValue<String, String>();
		if (prefixs != null && prefixs.length > 0) {
			for (String prefix : prefixs) {
				if (StringUtils.isNotBlank(prefix)) {
					match = matched(prefix + "." + name, match.getKey());
				}
			}
		}
		match = matched(name, match.getKey());
		return match.getValue() != null ? match.getValue() : null;

	}

	public String value(String name, String defaultValue, String... prefixs) {
		return (String) defaultValue(defaultValue, strValue(v(name, prefixs)));
	}

	private KeyValue<String, String> matched(String name, String match) {
		name = name.trim();
		KeyValue<String, String> matchKV = new KeyValue<String, String>(name, data.get(name));
		if (matchKV.getValue() == null) {
			matchKV.setKey(null);
			for (String k : data.keySet()) {
				if (StringUtil.match(name, (k.indexOf(".") < 0) ? ("*." + k) : k)
						&& (matchKV.getKey() == null
								|| StringUtils.countMatches(matchKV.getKey(), ".") < StringUtils.countMatches(k, ".") || (StringUtils.countMatches(matchKV.getKey(), ".") == StringUtils.countMatches(k, ".") && matchKV.getKey().length() < k.length()))) {
					matchKV.set(k, data.get(k));
				}
			}
		}
		if (match != null
				&& (StringUtils.countMatches(match, ".") > StringUtils.countMatches(matchKV.getKey(), ".") || (StringUtils.countMatches(match, ".") == StringUtils.countMatches(matchKV.getKey(), ".") && match.length() > matchKV.getKey().length()))) {
			matchKV.set(match, data.get(match));
		}
		return matchKV;
	}

	public String[] getValues(String name, String... prefixs) {
		return SimpleValue.strValues(value(name, "", prefixs));
	}

	public StringMap getMap(String name, String... prefixs) {
		String values = value(name, "", prefixs);
		String[] kvs = StringUtils.isNotBlank(values) ? StringUtils.split(values, ",") : new String[] {};
		StringMap map = new StringMap();
		for (String kv : kvs) {
			String[] kv1 = StringUtils.isNotBlank(kv) ? StringUtils.split(kv, ":") : new String[] {};
			if (kv1 != null && kv1.length == 2) {
				map.put(kv1[0], kv1[1]);
			}
		}
		return map;
	}

	public StringMap getSection(String section) {
		StringMap mapsection = new StringMap();
		for (String k : data.keySet()) {
			if (k.startsWith(section + ".")) {
				mapsection.put(k.substring((section + ".").length()), data.get(k));
			}
		}
		return mapsection;
	}

	public List<String> getSections() {
		return sections;
	}

	public Map<String, List<String>> getSectionItemNames() {
		if (sectionItemNames == null) {
			sectionItemNames = new Hashtable<String, List<String>>();
		}
		return sectionItemNames;
	}

	public List<String> getMatchKeys(String search) {
		List<String> matchKeys = new ArrayList<String>();
		for (String key : data.keySet()) {
			if (StringUtils.contains(key, search)) {
				matchKeys.add(key);
			}
		}
		return matchKeys;
	}

	public StringMap getData() {
		return data;
	}

	public String toIniText() {
		StrBuilder sb = new StrBuilder();
		for (String section : getSections()) {
			sb.append("[").append(section).appendln("]");
			sb.appendln(getSection(section).toIniText());
		}
		return sb.toString();
	}
}
