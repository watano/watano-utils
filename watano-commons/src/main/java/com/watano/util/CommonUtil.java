package com.watano.util;

import java.text.ParseException;
import java.util.Date;

import org.apache.commons.lang3.time.DateFormatUtils;
import org.apache.commons.lang3.time.DateUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CommonUtil {
	private static final Logger LOG = LoggerFactory.getLogger(CommonUtil.class);

	public static String dateFormat = "yyyy-MM-dd";
	public static String timeFormat = "yyyy-MM-dd HH:mm:ss";

	public static String formatDate(Date d){
		return DateFormatUtils.format(d, dateFormat);
	}

	public static String formatTime(Date d){
		return DateFormatUtils.format(d, timeFormat);
	}

	public static Date parseDate(String text){
		return parseDate(text, dateFormat);
	}

	public static Date parseTime(String text){
		return parseDate(text, timeFormat);
	}

	public static Date parseDate(String text, String... formats){
		try {
			return DateUtils.parseDate(text, formats);
		} catch (ParseException e) {
			LOG.error(e.getMessage(), e);
		}
		return null;
	}
}
