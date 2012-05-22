package com.watano.util.freemarker.jdbc;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import freemarker.template.TemplateMethodModel;
import freemarker.template.TemplateModelException;

public class ExecSqlMethodModel implements TemplateMethodModel {
	private static final Logger LOG = LoggerFactory.getLogger(ExecSqlMethodModel.class);

	@Override
	public Object exec(List arguments) throws TemplateModelException {
		Connection con = null;
		Statement stmt = null;
		try {
			if (arguments != null && arguments.size() == 2) {
				String id = (String) arguments.get(0);
				String sql = (String) arguments.get(1);
				Map<String, DataSource> map = DataSourceMethodModel.ConnectionPool.get();
				DataSource connectionPool = map.get(id);

				if (connectionPool != null) {
					con = connectionPool.getConnection();
					stmt = con.createStatement();
					return stmt.executeUpdate(sql);
				}
			}
		} catch (Throwable t) {
			LOG.error(t.getMessage(), t);
		} finally {
			if (stmt != null) {
				try {
					stmt.close();
				} catch (SQLException e) {
					LOG.error(e.getMessage(), e);
				}
			}
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					LOG.error(e.getMessage(), e);
				}
			}
		}
		return 0;
	}
}