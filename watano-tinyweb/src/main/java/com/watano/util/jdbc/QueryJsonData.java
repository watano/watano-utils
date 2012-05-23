package com.watano.util.jdbc;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.watano.util.collection.StringMap;

public class QueryJsonData {
	private static final Logger LOG = LoggerFactory.getLogger(QueryJsonData.class);
	protected JdbcTemplateEx jdbcTemplateEx;

	public QueryJsonData(JdbcTemplateEx jdbcTemplateEx) throws IOException {
		super();
		this.jdbcTemplateEx = jdbcTemplateEx;
	}

	public String jsonData(String iniFile, String queryName, StringMap params) {
		try {
			//			IniPlus queryConfig = new IniPlus(iniFile);

		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
		}
		return null;
	}
}
