package com.watano.util.freemarker.jdbc;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import freemarker.template.TemplateMethodModel;
import freemarker.template.TemplateModelException;

public class QueryMethodModel implements TemplateMethodModel {
	private static final Logger LOG = LoggerFactory.getLogger(QueryMethodModel.class);

	@Override
	public Object exec(List arguments) throws TemplateModelException {
		List<List<Object>> result = new ArrayList<List<Object>>();
		Connection con = null;
		Statement stmt = null;
		try {
			if (arguments != null && arguments.size() >= 2) {
				String id = (String) arguments.get(0);
				String sql = (String) arguments.get(1);
				Map<String, DataSource> map = DataSourceMethodModel.ConnectionPool.get();
				DataSource connectionPool = map.get(id);

				if (connectionPool != null) {
					con = connectionPool.getConnection();
					stmt = con.createStatement();
					if (arguments.size() >= 3) {
						stmt.setFetchSize(Integer.parseInt(arguments.get(2).toString()));
					}
					if (arguments.size() >= 4) {
						stmt.setMaxRows(Integer.parseInt(arguments.get(3).toString()));
					}
					ResultSet rs = stmt.executeQuery(sql);
					ResultSetMetaData rsmd = rs.getMetaData();
					int columns = rsmd.getColumnCount();
					List<Object> row = new ArrayList<Object>();
					for (int i = 1; i <= columns; i++) {
						row.add(new Object[] { rsmd.getColumnName(i), rsmd.getColumnType(i), rsmd.getColumnLabel(i), rsmd.getColumnClassName(i) });
					}
					result.add(row);
					while (rs.next()) {
						row = new ArrayList<Object>();
						for (int i = 1; i <= columns; i++) {
							row.add(rs.getObject(i));
						}
						result.add(row);
					}
					return result;
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
		result.clear();
		result.add(new ArrayList<Object>());
		return result;
	}
}