package com.watano.util;

import net.sourceforge.pinyin4j.PinyinHelper;
import net.sourceforge.pinyin4j.format.HanyuPinyinCaseType;
import net.sourceforge.pinyin4j.format.HanyuPinyinOutputFormat;
import net.sourceforge.pinyin4j.format.HanyuPinyinToneType;
import net.sourceforge.pinyin4j.format.HanyuPinyinVCharType;
import net.sourceforge.pinyin4j.format.exception.BadHanyuPinyinOutputFormatCombination;

import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.CharUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PinyinUtil {
	private static final Logger LOG = LoggerFactory.getLogger(PinyinUtil.class);
	private static HanyuPinyinOutputFormat format = new HanyuPinyinOutputFormat();

	static {
		format.setToneType(HanyuPinyinToneType.WITHOUT_TONE);
		format.setVCharType(HanyuPinyinVCharType.WITH_V);
	}

	public static String getFullPinyin(String word) {
		return getPinyin(word, false);
	}

	public static String getFirstLetterPinyin(String word) {
		return getPinyin(word, true);
	}

	private static String getPinyin(String word, boolean isFirstLetter) {
		if (StringUtils.isBlank(word)) {
			return null;
		}
		if (isFirstLetter) {
			format.setCaseType(HanyuPinyinCaseType.UPPERCASE);
		} else {
			format.setCaseType(HanyuPinyinCaseType.LOWERCASE);
		}
		StringBuffer buf = new StringBuffer();
		char[] chs = word.toCharArray();
		for (char c : chs) {
			if (CharUtils.isAsciiAlphanumeric(c)) {
				buf.append(c);
			} else {
				try {
					String[] result = PinyinHelper.toHanyuPinyinStringArray(c, format);
					if (!ArrayUtils.isEmpty(result)) {
						String pinyin = StringUtils.capitalize(result[0]);
						if (!StringUtils.isEmpty(pinyin)) {
							buf.append(isFirstLetter ? pinyin.charAt(0) : pinyin);
						}
					}
				} catch (BadHanyuPinyinOutputFormatCombination e) {
					LOG.debug("生成(" + word + ")拼音时产生错误", e);
				}
			}
		}
		return buf.toString();
	}
}
