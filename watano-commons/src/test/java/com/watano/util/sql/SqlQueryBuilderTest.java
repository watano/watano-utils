package com.watano.util.sql;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import com.watano.util.data.SqlQueryBuilder;

public class SqlQueryBuilderTest {

	@Before
	public void setUp() throws Exception {
		SqlQueryBuilder.DEBUG = false;
	}

	private SqlQueryBuilder newSqlBuilder() {
		return new SqlQueryBuilder();
	}

	@Test
	public void testSelect() {
		String sql = newSqlBuilder().select(null, "a", "b", "c").toSql();
		Assert.assertEquals("SELECT a, b, c", sql);

		sql = newSqlBuilder().select(null, "a, b, c").toSql();
		Assert.assertEquals("SELECT a, b, c", sql);

		sql = newSqlBuilder().select("a", "id").select("b", "id").select(null, "c").toSql();
		Assert.assertEquals("SELECT a.id, b.id, c", sql);

		sql = newSqlBuilder().select(null, "a as A", "`b` as B, `c` as C").toSql();
		Assert.assertEquals("SELECT a as A, `b` as B, `c` as C", sql);

		sql = newSqlBuilder().select(null, "distinct a", "b", "c").toSql();
		Assert.assertEquals("SELECT distinct a, b, c", sql);

		sql = newSqlBuilder().select(null, "distinct a", "max(b)", "count(c)").toSql();
		Assert.assertEquals("SELECT distinct a, max(b), count(c)", sql);
	}
}
