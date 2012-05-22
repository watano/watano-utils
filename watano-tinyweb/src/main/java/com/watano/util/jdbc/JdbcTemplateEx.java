package com.watano.util.jdbc;

import java.util.List;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;

import com.watano.util.jdbc.impl.BlobStringRowMapper;
import com.watano.util.jdbc.impl.ClobStringRowMapper;
import com.watano.util.jdbc.impl.ObjsRowMapper;
import com.watano.util.jdbc.impl.PageResultSetExtractor;

public class JdbcTemplateEx extends JdbcTemplate {
	private static final Logger LOG = LoggerFactory.getLogger(JdbcTemplateEx.class);

	public JdbcTemplateEx() {
		super();
	}

	public JdbcTemplateEx(DataSource dataSource, boolean lazyInit) {
		super(dataSource, lazyInit);
	}

	public JdbcTemplateEx(DataSource dataSource) {
		super(dataSource);
	}

	public List<Object[]> queryPageData(String start, String limit, String sql, Object... args)
			throws DataAccessException {
		return queryPageData(PageInfo.parseStart(start), PageInfo.parseLimit(limit), sql, args);
	}

	public List<Object[]> queryPageData(int start, int limit, String sql, Object... args) throws DataAccessException {
		return query(sql, args, new PageResultSetExtractor<Object[]>(
				new ObjsRowMapper(), start, limit));
	}

	public List<Object[]> queryData(String sql, Object... args) throws DataAccessException {
		return query(sql, args, new ObjsRowMapper());
	}

	public List<String> queryBlobAsString(final String encoding, String sql, Object... args) {
		return query(sql, args, new BlobStringRowMapper(encoding));
	}

	public List<String> queryClobAsString(String sql, Object... args) {
		return query(sql, args, new ClobStringRowMapper());
	}

	public Object[] query1RowData(String sql, Object... args) {
		List<Object[]> results = queryData(sql, args);
		if (results.size() > 0) {
			return results.get(0);
		}
		return null;
	}

	public Object queryUniqueData(String sql, Object... args) {
		Object[] data = query1RowData(sql, args);
		if (data != null && data.length > 0) {
			return data[0];
		}
		return null;
	}

	public Long queryLong(String sql, Object... args) {
		try {
			Object data = queryUniqueData(sql, args);
			if (data != null) {
				return new Long(data.toString()).longValue();
			}
		} catch (Throwable e) {
			LOG.error(e.getMessage(), e);
		}
		return null;
	}
}
