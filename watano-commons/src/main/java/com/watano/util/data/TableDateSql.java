package com.watano.util.data;

import org.apache.commons.lang3.ArrayUtils;
import org.junit.Assert;

public class TableDateSql {
	public static String[] deleteTables(String idField, SqlBuilder cnd, String... relations) {
		String[] sqls = new String[] {};
		Assert.assertTrue(relations.length % 2 == 0);
		for (int i = 0; i < relations.length; i += 2) {
			String sql = "";
			if (i + 2 < relations.length - 1) {
				String[] newrelations = ArrayUtils.subarray(relations, i + 2, relations.length);
				sql = SqlBuilder.c().delete(relations[i]).where()
						.in(relations[i + 1], nestselect(idField, cnd, newrelations))
						.toSql();
			} else {
				sql = SqlBuilder.c().delete(relations[i]).where()
						.append(cnd.toSql(false))
						.toSql();
			}
			sqls = ArrayUtils.add(sqls, sql);
		}
		return sqls;
	}

	public static SqlBuilder nestselect(String idField, SqlBuilder cnd, String... relations) {
		SqlBuilder sb = SqlBuilder.c();
		Assert.assertTrue(relations.length % 2 == 0);
		if (relations.length > 2) {
			sb.select(false, idField).from(relations[0]).where().in(relations[1],
					nestselect(idField, cnd, ArrayUtils.subarray(relations, 2, relations.length)));
		} else {
			sb.select(false, relations[1]).from(relations[0]).where().append(cnd.toSql(false));
		}
		return sb;
	}
}
