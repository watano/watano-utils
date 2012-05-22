package com.watano.util.codegen;

import java.io.FileReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.watano.util.web.ABaseServlet;

public class CodeGenServlet extends ABaseServlet {
	private static final long serialVersionUID = 5782030831328491168L;
	private static final Logger LOG = LoggerFactory.getLogger(CodeGenServlet.class);
	public BaseCodeGen fileCodeGen = null;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			if (fileCodeGen == null) {
				fileCodeGen = new BaseCodeGen();
				fileCodeGen.init(".\\codegen.ini");
			}

			String ftl = request.getPathInfo();
			fileCodeGen.genCode(ftl);
			String ftlPath = getServletContext().getRealPath("WEB-INF/templates/" + ftl);
			IOUtils.copy(new FileReader(ftlPath), response.getWriter());
		} catch (Throwable t) {
			LOG.error(t.getMessage(), t);
		}
	}
}
