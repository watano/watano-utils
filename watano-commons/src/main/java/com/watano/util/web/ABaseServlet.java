package com.watano.util.web;

import java.io.IOException;
import java.util.Hashtable;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author watano
 * 
 */
public abstract class ABaseServlet extends HttpServlet {
	private static final long serialVersionUID = 3942496617100126616L;
	private static final Logger LOG = LoggerFactory.getLogger(ABaseServlet.class);

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		doGet(request, response);
	}

	public static String[] getPathVars(HttpServletRequest request) {
		String[] pathvars = StringUtils.split(request.getPathInfo(), "/");
		if (pathvars == null) {
			pathvars = new String[] {};
		}
		return pathvars;
	}

	public static Map<String, Object> parseParams(HttpServletRequest request) {
		Map<String, Object> params = new Hashtable<String, Object>();
		for (Object key : request.getParameterMap().keySet()) {
			try {
				String v = request.getParameter(key.toString());
				params.put(key.toString(), v);
			} catch (Exception e) {
				LOG.error(e.getMessage(), e);
			}
		}
		return params;
	}
}
