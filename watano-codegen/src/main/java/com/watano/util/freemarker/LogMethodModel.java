package com.watano.util.freemarker;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import freemarker.template.TemplateMethodModel;
import freemarker.template.TemplateModelException;

public class LogMethodModel implements TemplateMethodModel {
	private static final Logger LOG = LoggerFactory.getLogger(LogMethodModel.class);

	@Override
	public Object exec(List arguments) throws TemplateModelException {
		try {
			if (arguments != null && arguments.size() > 1) {
				String level = arguments.get(0).toString();
				StringBuffer sbMsg = new StringBuffer();
				// FIXME print template name and current line number
				// Environment env = Environment.getCurrentEnvironment();
				// sbMsg.append('[').append(env.getGlobalVariable(".template_name")).append(']');
				for (int i = 1; i < arguments.size(); i++) {
					sbMsg.append(arguments.get(i).toString());
				}
				if ("debug".equalsIgnoreCase(level)) {
					LOG.debug(sbMsg.toString());
				} else if ("info".equalsIgnoreCase(level)) {
					LOG.info(sbMsg.toString());
				} else if ("error".equalsIgnoreCase(level)) {
					LOG.error(sbMsg.toString());
				} else if ("trace".equalsIgnoreCase(level)) {
					LOG.trace(sbMsg.toString());
				} else if ("warn".equalsIgnoreCase(level)) {
					LOG.warn(sbMsg.toString());
				} else {
					LOG.warn(sbMsg.toString());
				}
			}
		} catch (Throwable t) {
			LOG.error(t.getMessage(), t);
		}
		return "";
	}
}
