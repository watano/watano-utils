package com.watano.util.jdbc.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapper;

public class PageResultSetExtractor<T> implements ResultSetExtractor<List<T>> {
	private static final Logger LOG = LoggerFactory.getLogger(PageResultSetExtractor.class);
	private RowMapper<T> rowMapper = null;
	private int start = 0;
	private int limit = 0;

	public PageResultSetExtractor(RowMapper<T> rowMapper, int start, int limit) {
		super();
		this.rowMapper = rowMapper;
		this.start = start;
		this.limit = limit;
		if (start < 0) {
			LOG.error("start[" + start + "] < 0");
			this.start = 0;
		}
		if (limit <= 0) {
			LOG.error("limit[" + limit + "] < 0");
			this.limit = 25;
		}
	}

	@Override
	public List<T> extractData(ResultSet rs) throws SQLException, DataAccessException {
		final List<T> results = new ArrayList<T>();
		int currentRow = 0;
		while (rs.next() && currentRow < start + limit) {
			if (currentRow >= start) {
				results.add(rowMapper.mapRow(rs, currentRow));
			}
			currentRow++;
		}
		return results;
	}
}
