package com.watano.util.data;

import java.util.Date;

import org.apache.commons.lang3.time.DateFormatUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SqlBuilder {
	private static final Logger LOG = LoggerFactory.getLogger(SqlBuilder.class);
	private char newLine = (LOG.isDebugEnabled()) ? '\n' : ' ';
	private StringBuffer sbSQL = new StringBuffer();
	private int countSet = 0;
	private boolean needprefix = true;

	public static SqlBuilder c(boolean needprefix) {
		SqlBuilder sb = new SqlBuilder();
		sb.needprefix = needprefix;
		return sb;
	}

	public static SqlBuilder c() {
		SqlBuilder sb = new SqlBuilder();
		return sb;
	}

	public SqlBuilder select(boolean withAlias, String... fields) {
		sbSQL.append("select");
		sbSQL.append(newLine);
		fields(withAlias, fields);
		return this;
	}

	public SqlBuilder insert(String table, String... fields) {
		sbSQL.append("insert into ");
		sbSQL.append(table);
		sbSQL.append(newLine);
		sbSQL.append("(");
		fields(false, fields);
		sbSQL.append(")");
		return this;
	}

	public SqlBuilder update(String table) {
		sbSQL.append("update ");
		sbSQL.append(table);
		sbSQL.append(" set");
		sbSQL.append(newLine);
		return this;
	}

	public SqlBuilder delete(String table) {
		sbSQL.append("delete from `");
		sbSQL.append(table);
		sbSQL.append("`");
		sbSQL.append(newLine);
		return this;
	}

	private String field(boolean needprefix, String oldfield) {
		String field = oldfield.trim();
		String out = "";
		if (field.startsWith("distinct ")) {
			field = field.substring("distinct ".length()).trim();
		}
		if (field.startsWith("max(") || field.startsWith("count(")
				|| field.startsWith("min(")) {
			out += field;
		} else {
			if (field.indexOf('.') > 0) {
				out += field.substring(0, field.indexOf('.'));
				out += '.';
				field = field.substring(field.indexOf('.') + 1).trim();
			}
			if (needprefix) {
				out += '`';
			}
			out += field;
			if (needprefix) {
				out += '`';
			}
		}
		return out;
	}

	private SqlBuilder fields(boolean withAlias, String... fields) {
		if (fields != null && fields.length > 0 && (!withAlias || fields.length % 2 == 0)) {
			for (int i = 0; i < fields.length; i += (withAlias ? 2 : 1)) {
				String field = fields[i].trim();
				if (field.startsWith("distinct ")) {
					sbSQL.append("distinct ");
					field = field.substring("distinct ".length()).trim();
				}
				sbSQL.append(field(needprefix, field));
				if (withAlias) {
					sbSQL.append(" as ");
					sbSQL.append(fields[i + 1]);
				}
				if (i < fields.length - (withAlias ? 2 : 1)) {
					sbSQL.append(",");
					sbSQL.append(newLine);
				}
			}
		} else {
			throw new IllegalArgumentException();
		}
		return this;
	}

	public SqlBuilder where() {
		sbSQL.append(" where ");
		sbSQL.append(newLine);
		return this;
	}

	public SqlBuilder and() {
		sbSQL.append(" and ");
		sbSQL.append(newLine);
		return this;
	}

	public SqlBuilder or() {
		sbSQL.append(" or ");
		sbSQL.append(newLine);
		return this;
	}

	private String value(Object value, String format) {
		if (value == null) {
			return "null";
		} else if (value instanceof Boolean) {
			return ((Boolean) value) ? "true" : "false";
		} else if (value instanceof Number) {
			return value.toString();
		} else if (value instanceof Date) {
			return "to_date('" + DateFormatUtils.format((Date) value, format) + "', '" + format + "')";
		} else if (value instanceof SqlBuilder) {
			return "(" + ((SqlBuilder) value).toSql(false) + ")";
		} else if (value instanceof String) {
			String v = (String) value;
			v = v.trim();
			if (v.startsWith("```")) {
				return field(true, v.substring(3));
			}
			return "'" + value + "'";
		} else {
			throw new IllegalArgumentException();
		}
	}

	public SqlBuilder set(String field, Object value, String format) {
		if (countSet > 0) {
			sbSQL.append(',');
			sbSQL.append(newLine);
		}
		sbSQL.append(field(true, field));
		sbSQL.append('=');
		sbSQL.append(value(value, format));
		countSet++;
		return this;
	}

	public SqlBuilder set(String field, Object value) {
		return set(field, value, null);
	}

	public SqlBuilder noteq(String field, Object value, String format) {
		sbSQL.append(field(true, field));
		if (value == null) {
			sbSQL.append(" is not null ");
		} else {
			sbSQL.append("!=");
			sbSQL.append(value(value, format));
		}
		return this;
	}

	public SqlBuilder eq(String field, Object value, String format) {
		sbSQL.append(field(true, field));
		if (value == null) {
			sbSQL.append(" is null ");
		} else {
			sbSQL.append('=');
			sbSQL.append(value(value, format));
		}
		return this;
	}

	public SqlBuilder gte(String field, Object value, String format) {
		sbSQL.append(field(true, field));
		sbSQL.append(">=");
		sbSQL.append(value(value, format));
		return this;
	}

	public SqlBuilder lte(String field, Object value, String format) {
		sbSQL.append(field(true, field));
		sbSQL.append("<=");
		sbSQL.append(value(value, format));
		return this;
	}

	public SqlBuilder gt(String field, Object value, String format) {
		sbSQL.append(field(true, field));
		sbSQL.append('>');
		sbSQL.append(value(value, format));
		return this;
	}

	public SqlBuilder lt(String field, Object value, String format) {
		sbSQL.append(field(true, field));
		sbSQL.append('<');
		sbSQL.append(value(value, format));
		return this;
	}

	public SqlBuilder in(String field, String format, Object... values) {
		if (values == null || values.length < 1) {
			throw new IllegalArgumentException();
		}
		sbSQL.append(field(true, field));
		sbSQL.append(" in");
		if (values != null && values.length == 1 && values[0] instanceof SqlBuilder) {
			sbSQL.append(value(values[0], format));
		} else {
			sbSQL.append("(");
			for (int i = 0; i < values.length; i++) {
				sbSQL.append(value(values[i], format));
				if (i < values.length - 1) {
					sbSQL.append(",");
				}
			}
			sbSQL.append(")");
		}
		return this;
	}

	public SqlBuilder noteq(String field, Object value) {
		noteq(field, value, null);
		return this;
	}

	public SqlBuilder eq(String field, Object value) {
		eq(field, value, null);
		return this;
	}

	public SqlBuilder gte(String field, Object value) {
		gte(field, value, null);
		return this;
	}

	public SqlBuilder lte(String field, Object value) {
		lte(field, value, null);
		return this;
	}

	public SqlBuilder gt(String field, Object value) {
		gt(field, value, null);
		return this;
	}

	public SqlBuilder lt(String field, Object value) {
		lt(field, value, null);
		return this;
	}

	public SqlBuilder in(String field, Object... value) {
		in(field, null, value);
		return this;
	}

	public SqlBuilder from(String... tables) {
		sbSQL.append(" from ");
		sbSQL.append(newLine);
		if (tables != null && tables.length > 0) {
			for (int i = 0; i < tables.length; i++) {
				sbSQL.append(tables[i]);
				if (i < tables.length - 1) {
					sbSQL.append(",");
				}
			}
			sbSQL.append(newLine);
		} else {
			throw new IllegalArgumentException();
		}
		return this;
	}

	public SqlBuilder fromWithAlias(String... tables) {
		sbSQL.append(" from ");
		if (tables != null && tables.length > 0 && tables.length % 2 == 0) {
			for (int i = 0; i < tables.length; i = i + 2) {
				sbSQL.append(tables[i]);
				sbSQL.append(" as ");
				sbSQL.append(tables[i + 1]);
				if (i < tables.length - 2) {
					sbSQL.append(",");
				}
			}
			sbSQL.append(newLine);
		} else {
			throw new IllegalArgumentException();
		}
		return this;
	}

	public SqlBuilder groupby(String... fields) {
		sbSQL.append(" group by ");
		fields(false, fields);
		return this;
	}

	public SqlBuilder append(String c) {
		sbSQL.append(c);
		return this;
	}

	public SqlBuilder limit(int c) {
		sbSQL.append(" limit ");
		sbSQL.append(c);
		return this;
	}

	public SqlBuilder debug(boolean debug) {
		newLine = debug ? '\n' : ' ';
		return this;
	}

	public String toSql(boolean print) {
		String sql = sbSQL.toString().trim();
		if (print) {
			LOG.info(sql);
		}
		return sql;
	}

	public String toSql() {
		return toSql(true);
	}
}
