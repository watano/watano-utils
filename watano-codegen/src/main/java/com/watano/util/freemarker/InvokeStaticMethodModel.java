package com.watano.util.freemarker;

import java.lang.reflect.Method;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import freemarker.template.TemplateMethodModel;
import freemarker.template.TemplateModelException;

public class InvokeStaticMethodModel implements TemplateMethodModel {
	private static final Logger LOG = LoggerFactory.getLogger(InvokeStaticMethodModel.class);

	@Override
	public Object exec(List arguments) throws TemplateModelException {
		try {
			Class<?> cls = Class.forName((String) arguments.get(0));
			Method staticMethod = null;
			if (arguments != null && arguments.size() == 2) {
				staticMethod = cls.getDeclaredMethod((String) arguments.get(1));
				return staticMethod.invoke(cls);
			} else if (arguments != null && arguments.size() >= 3) {
				switch (arguments.size()) {
				case 3:
					staticMethod = cls.getDeclaredMethod((String) arguments.get(1), arguments.get(2).getClass());
					return staticMethod.invoke(cls, arguments.get(2));
				case 4:
					staticMethod = cls.getDeclaredMethod((String) arguments.get(1), arguments.get(2).getClass(),
							arguments.get(3).getClass());
					return staticMethod.invoke(cls, arguments.get(2), arguments.get(3));
				case 5:
					staticMethod = cls.getDeclaredMethod((String) arguments.get(1), arguments.get(2).getClass(),
							arguments.get(3).getClass(), arguments.get(4).getClass());
					return staticMethod.invoke(cls, arguments.get(2), arguments.get(3), arguments.get(4));
				}
			}
		} catch (Throwable e) {
			LOG.error(e.getMessage(), e);
		}
		return null;
	}

}
