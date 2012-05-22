package com.watano.util.jdbc.impl;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.JdbcUtils;

public class ObjsRowMapper implements RowMapper<Object[]> {
	@Override
	public Object[] mapRow(ResultSet rs, int rowNum) throws SQLException {
		ResultSetMetaData rsmd = rs.getMetaData();
		int columnCount = rsmd.getColumnCount();
		Object[] result = new Object[columnCount];
		for (int i = 1; i <= columnCount; i++) {
			result[i - 1] = JdbcUtils.getResultSetValue(rs, i);
		}
		return result;
	}
}
