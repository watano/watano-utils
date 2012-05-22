package com.watano.util.jdbc;

import org.junit.Before;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.watano.util.SpringTestBase;

public class QueryMetaDataTest extends SpringTestBase {
	private static final Logger LOG = LoggerFactory.getLogger(QueryMetaDataTest.class);

	private QueryMetaData queryMetaData = null;

	@Override
	@Before
	public void setUp() throws Exception {
		super.setUp();
		queryMetaData = new QueryMetaData(jdbcTemplateEx);
	}

	@Test
	public void test() {
		LOG.info("\n"
				+ queryMetaData.paseMetaData("query1", "select * from states limit 1", "")
				+ "\n\n"
				+ queryMetaData.paseMetaData("query2", "select u.*, ul.* from users u \n left join userlevel ul on (u.level_id = ul.level_id)", ""));
	}
}
