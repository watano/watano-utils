package com.watano.util.freemarker;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.watano.util.PinyinUtil;

import freemarker.template.TemplateMethodModel;
import freemarker.template.TemplateModelException;

public class PinYinMethodModel implements TemplateMethodModel {
	private static final Logger LOG = LoggerFactory.getLogger(PinYinMethodModel.class);

	@Override
	public Object exec(List arguments) throws TemplateModelException {
		try {
			if (arguments != null && arguments.size() > 0) {
				if (arguments.size() > 1 && arguments.get(1) != null && "1".equals(arguments.get(1).toString())) {
					return PinyinUtil.getFirstLetterPinyin(arguments.get(0).toString());
				} else {
					return PinyinUtil.getFullPinyin(arguments.get(0).toString());
				}
			}
		} catch (Throwable t) {
			LOG.error(t.getMessage(), t);
		}
		return "[null]";
	}
}
