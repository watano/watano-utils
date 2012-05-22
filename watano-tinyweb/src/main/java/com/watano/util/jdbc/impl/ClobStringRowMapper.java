package com.watano.util.jdbc.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.lob.DefaultLobHandler;
import org.springframework.jdbc.support.lob.LobHandler;

public class ClobStringRowMapper implements RowMapper<String> {
	private static final Logger LOG = LoggerFactory.getLogger(ClobStringRowMapper.class);
	private LobHandler lobHandler = new DefaultLobHandler();

	@Override
	public String mapRow(ResultSet rs, int rowNum) throws SQLException {
		try {
			return lobHandler.getClobAsString(rs, 1);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			return null;
		}
	}
}
