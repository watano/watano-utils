package com.watano.util.freemarker.jdbc;

import java.util.Hashtable;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.apache.commons.dbcp.BasicDataSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import freemarker.template.TemplateMethodModel;
import freemarker.template.TemplateModelException;

public class DataSourceMethodModel implements TemplateMethodModel {
	private static final Logger LOG = LoggerFactory.getLogger(DataSourceMethodModel.class);

	public static final ThreadLocal<Map<String, DataSource>> ConnectionPool = new ThreadLocal<Map<String, DataSource>>();

	@Override
	public Object exec(List arguments) throws TemplateModelException {
		try {
			String id = "BoneCP";
			if (arguments != null && arguments.size() == 5) {
				id = (String) arguments.get(4);
			}
			if (ConnectionPool.get() == null) {
				ConnectionPool.set(new Hashtable<String, DataSource>());
			}

			DataSource connectionPool = ConnectionPool.get().get(id);
			if (connectionPool == null) {
				BasicDataSource ds = new BasicDataSource();
				Class.forName((String) arguments.get(0));
				ds.setUrl((String) arguments.get(1));
				ds.setUsername((String) arguments.get(2));
				ds.setPassword((String) arguments.get(3));
				connectionPool = ds;
				ConnectionPool.get().put(id, connectionPool);
			}
			return id;
		} catch (Throwable t) {
			LOG.error(t.getMessage(), t);
		}
		return null;
	}
}
