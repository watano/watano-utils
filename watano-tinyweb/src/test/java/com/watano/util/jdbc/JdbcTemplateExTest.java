package com.watano.util.jdbc;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.watano.util.SpringTestBase;

public class JdbcTemplateExTest extends SpringTestBase {
	private static final Logger LOG = LoggerFactory.getLogger(JdbcTemplateExTest.class);

	List<Object[]> results = null;

	private void printResult(Object[] result) {
		StringBuffer sb = new StringBuffer();
		for (Object d : result) {
			sb.append(d == null ? "null" : d);
			sb.append(',');
		}
		LOG.info(sb.toString());
	}

	private void printResults(List<Object[]> results) {
		for (Object[] result : results) {
			printResult(result);
		}
	}

	@Test
	public void testQueryPageDataStringStringStringObjectArray() {
		results = jdbcTemplateEx.queryPageData("0", "25", "select * from states");
		assertNotNull(results);
		assertTrue(results.size() == 25);
		printResults(results);

		results = jdbcTemplateEx.queryPageData("225", "25", "select * from states");
		assertNotNull(results);
		assertTrue(results.size() == 11);
		printResults(results);
	}

	@Test
	public void testQueryPageDataIntIntStringObjectArray() {
		results = jdbcTemplateEx.queryPageData(0, 25, "select * from states");
		assertNotNull(results);
		assertTrue(results.size() == 25);
		printResults(results);

		results = jdbcTemplateEx.queryPageData(225, 25, "select * from states");
		assertNotNull(results);
		assertTrue(results.size() == 11);
		printResults(results);
	}

	@Test
	public void testQueryData() {
		results = jdbcTemplateEx.queryData("select * from userlevel");
		assertNotNull(results);
		assertTrue(results.size() > 0);
		assertNotNull(results.get(0));
		assertTrue(results.get(0).length > 0);
		printResults(results);
	}

	@Test
	public void testQuery1RowData() {
		Object[] results = jdbcTemplateEx.query1RowData("select * from states limit 1");
		assertNotNull(results);
		assertTrue(results.length > 0);
		printResult(results);

		results = jdbcTemplateEx.query1RowData("select * from states limit ?", 1);
		assertNotNull(results);
		assertTrue(results.length > 0);
		printResult(results);
	}

	@Test
	public void testQueryUniqueData() {
		Object results = jdbcTemplateEx.queryUniqueData("select count(*) from states");
		assertNotNull(results);
		assertTrue(results instanceof Long);

		results = jdbcTemplateEx.queryUniqueData("select name, deleted from states");
		assertNotNull(results);
		assertTrue(results instanceof String);
	}

	@Test
	public void testQueryLong() {
		Long count = jdbcTemplateEx.queryLong("select count(*) from states");
		assertNotNull(count);
		assertTrue(count > 0);
	}

	@Test
	public void testQueryBlobAsString() {
		//		fail("Not yet implemented");
	}

	@Test
	public void testQueryClobAsString() {
		//		fail("Not yet implemented");
	}
}
