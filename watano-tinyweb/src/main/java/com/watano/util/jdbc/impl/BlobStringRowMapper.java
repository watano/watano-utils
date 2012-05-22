package com.watano.util.jdbc.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.lob.DefaultLobHandler;
import org.springframework.jdbc.support.lob.LobHandler;

public class BlobStringRowMapper implements RowMapper<String> {
	private static final Logger LOG = LoggerFactory.getLogger(BlobStringRowMapper.class);
	private LobHandler lobHandler = new DefaultLobHandler();
	private String encoding = "utf-8";

	public BlobStringRowMapper(String encoding) {
		super();
		this.encoding = encoding;
	}

	public void setEncoding(String encoding) {
		this.encoding = encoding;
	}

	@Override
	public String mapRow(ResultSet rs, int rowNum) throws SQLException {
		try {
			byte[] textbytes = lobHandler.getBlobAsBytes(rs, 1);
			if (textbytes != null) {
				return new String(textbytes, encoding);
			}
			return null;
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			return null;
		}
	}
}
