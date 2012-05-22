package com.watano.util.freemarker;

import java.util.ArrayList;
import java.util.List;

import com.watano.util.I18nTextUtil;

import freemarker.template.TemplateMethodModel;
import freemarker.template.TemplateModelException;

public class I18nTextMethodModel implements TemplateMethodModel{
	@Override
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Object exec(List arguments) throws TemplateModelException {
		if(arguments != null && arguments.size() > 0) {
			String key = (String)arguments.get(0);
			if(arguments.size() > 1){
				List params = new ArrayList();
				params.addAll(arguments);
				params.remove(0);
				return I18nTextUtil.getText(key, params);
			}else{
				return I18nTextUtil.getText(key);
			}
		}else {
			throw new TemplateModelException("Wrong arguments");
		}
	}
}
