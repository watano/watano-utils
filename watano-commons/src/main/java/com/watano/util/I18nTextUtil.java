package com.watano.util;

import java.util.Hashtable;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.apache.commons.lang3.StringUtils;

public class I18nTextUtil {
	public static boolean DEBUG = false;
	private static ThreadLocal<String> langs = new ThreadLocal<String>();
	private static Map<String, Properties> i18ns = new Hashtable<String, Properties>();

	public static Properties getProperties(){
		String lang = langs.get();
		if(StringUtils.isBlank(lang)){
			lang = "zh";
			langs.set(lang);
		}
		Properties i18n = i18ns.get(lang);
		if(DEBUG || i18n == null || i18n.size()<1){
			i18n = ResourceHelper.loadProperties("classpath:i18n/"+lang+".txt");
			i18ns.put(lang, i18n);
		}
		return i18n;
	}

	public static String getText(String key, Object... params){
		String text = getProperties().getProperty(key, key);
		int i = 0;
		for (Object object : params) {
			if(object instanceof Object[]){
				text = text.replaceAll("\\$\\{"+i+"\\}", StringUtil.toText((Object[])object, ","));
			}else{
				text = text.replaceAll("\\$\\{"+i+"\\}", object.toString());
			}
			i++;
		}
		return text;
	}

	public static String getText(String key, List<Object> params){
		String text = getProperties().getProperty(key, key);
		int i = 0;
		for (Object object : params) {
			text = text.replaceAll("\\$\\{"+i+"\\}", object.toString());
			i++;
		}
		return text;
	}
}
