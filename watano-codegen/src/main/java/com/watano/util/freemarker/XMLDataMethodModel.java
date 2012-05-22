package com.watano.util.freemarker;

import java.io.File;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import freemarker.core.Environment;
import freemarker.template.TemplateMethodModel;
import freemarker.template.TemplateModelException;

public class XMLDataMethodModel implements TemplateMethodModel {
	private static final Logger LOG = LoggerFactory.getLogger(LogMethodModel.class);

	@Override
	public Object exec(List arguments) throws TemplateModelException {
		try {
			if (arguments != null && arguments.size() == 2) {
				Environment env = Environment.getCurrentEnvironment();
				env.setVariable(arguments.get(0).toString(),
						freemarker.ext.dom.NodeModel.parse(new File(arguments.get(1).toString()))
						);
				LOG.error(env.getVariable(arguments.get(0).toString()).toString());
			}
		} catch (Throwable t) {
			LOG.error(t.getMessage(), t);
		}
		return "";
	}
}
