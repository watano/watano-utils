package com.watano.util.data;

import java.sql.Time;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.Validate;
import org.apache.commons.lang3.text.StrBuilder;
import org.joda.time.DateTime;

import com.watano.annotation.NonNull;
import com.watano.util.CommonUtil;

public class SqlQueryBuilder {
	public static boolean DEBUG = false;
	private int mode = 1;// 1-?+param array, 2-query string
	private StrBuilder sb = new StrBuilder("SELECT ");
	private List<Object> params = new ArrayList<Object>();

	public SqlQueryBuilder setParamMode(int mode) {
		this.mode = mode;
		checkMode();
		return this;
	}

	public SqlQueryBuilder select(String tableAlias, @NonNull String... fields) {
		if (DEBUG) {
			Validate.isTrue(fields != null);
			Validate.noNullElements(fields);
		}
		newline();
		for (String f : fields) {
			tab();
			if (StringUtils.isNotBlank(tableAlias)) {
				sb.append(tableAlias).append('.');
			}
			sb.append(f).append(',').append(' ');
		}
		return this;
	}

	private SqlQueryBuilder removeEnd(String... keys) {
		sb.trim();
		for (String key : keys) {
			if (sb.endsWith(key)) {
				sb.deleteCharAt(sb.length() - key.length());
			}
		}
		return this;
	}

	private SqlQueryBuilder newline() {
		if (DEBUG) {
			sb.append('\n');
		}
		return this;
	}

	private SqlQueryBuilder tab() {
		if (DEBUG) {
			sb.append('\t');
		}
		return this;
	}

	private SqlQueryBuilder table(String key, String table) {
		removeEnd(",");
		newline();
		sb.append(' ').append(key).append(' ');
		if (table != null) {
			sb.append(table).append(' ');
		}
		newline();
		return this;
	}

	private void checkMode() {
		Validate.isTrue(mode == 1 || mode == 2);
	}

	private void v(Object p) {
		String value = null;
		if (p instanceof Enum<?>) {
			value = ((Enum<?>) p).name();
		} else if (p instanceof Time) {
			value = CommonUtil.formatTime((Date) p);
		} else if (p instanceof Date) {
			value = CommonUtil.formatDate((Date) p);
		} else if (p instanceof DateTime) {
			value = CommonUtil.formatDate(((DateTime) p).toDate());
		} else {
			value = p.toString();
		}

		checkMode();
		if (mode == 1) {
			append("?");
			params.add(p);
		} else if (mode == 2) {
			if (p instanceof Number) {
				append(value);
			} else {
				append("'" + value + "'");
			}
		}
	}

	public SqlQueryBuilder from(String table) {
		return table("FROM", table);
	}

	public SqlQueryBuilder join(String table) {
		return table("JOIN", table);
	}

	public SqlQueryBuilder innerJoin(String table) {
		return table("INNER JOIN", table);
	}

	public SqlQueryBuilder outerJoin(String table) {
		return table("OUTER JOIN", table);
	}

	public SqlQueryBuilder leftOuterJoin(String table) {
		return table("LEFT OUTER JOIN", table);
	}

	public SqlQueryBuilder rightOuterJoin(String table) {
		return table("RIGHT OUTER JOIN", table);
	}

	public SqlQueryBuilder where(String... conditions) {
		if (conditions != null && conditions.length > 0) {
			removeEnd(",");
			sb.append(" WHERE ");
			for (String cnd : conditions) {
				sb.append(cnd);
				sb.append(" AND ");
			}
		} else {
			table("WHERE", "1==1");
		}
		return this;
	}

	public SqlQueryBuilder having(String conditions) {
		return table("HAVING", conditions);
	}

	public SqlQueryBuilder groupBy(@NonNull String... fields) {
		if (DEBUG) {
			Validate.isTrue(fields != null);
			Validate.noNullElements(fields);
		}
		sb.append(" GROUP BY ");
		for (String f : fields) {
			sb.append(f).append(',');
		}
		removeEnd(",");
		return this;
	}

	public SqlQueryBuilder orderBy(@NonNull String... fields) {
		if (DEBUG) {
			Validate.isTrue(fields != null);
			Validate.noNullElements(fields);
		}
		sb.append(" ORDER BY ");
		for (String f : fields) {
			sb.append(f).append(',');
		}
		removeEnd(",");
		return this;
	}

	public SqlQueryBuilder append(char ch) {
		sb.append(ch);
		return this;
	}

	public SqlQueryBuilder append(String text) {
		sb.append(text);
		return this;
	}

	public SqlQueryBuilder and() {
		removeEnd(",", "OR");
		if (!sb.endsWith("AND")) {
			append(" AND ");
		}
		return this;
	}

	public SqlQueryBuilder or() {
		removeEnd(",", "AND");
		if (!sb.endsWith("OR")) {
			append(" OR ");
		}
		return this;
	}

	public SqlQueryBuilder in(String field, Object... ps) {
		if (ps != null && ps.length > 0) {
			append(field + " in (");
			for (Object p : ps) {
				v(p);
				append(",");
			}
			removeEnd(",");
			append(")");
		}
		return this;
	}

	public SqlQueryBuilder eq(String field, Object p) {
		if (p != null) {
			append(field + "=");
			v(p);
		}
		return this;
	}

	public SqlQueryBuilder like(String field, Object p) {
		if (p != null && !(p.toString().trim().equals("-1"))) {
			append(field + " like ");
			v(p);
		}
		return this;
	}

	public SqlQueryBuilder date(String field, Date startDate, Date endDate) {
		if (startDate != null && endDate != null) {
			append("(" + field + ">=");
			v(startDate);
			append("and " + field + "<=");
			v(endDate);
			append(")");
		} else if (startDate != null && endDate == null) {
			append(field + ">=");
			v(startDate);
		} else if (startDate == null && endDate != null) {
			append(field + "<=");
			v(endDate);
		}
		return this;
	}

	public SqlQueryBuilder Search(String searchText, int mode, String... fields) {
		findtext(searchText, 1, fields);
		return this;
	}

	public SqlQueryBuilder lSearch(String searchText, int mode, String... fields) {
		findtext(searchText, 2, fields);
		return this;
	}

	public SqlQueryBuilder rSearch(String searchText, int mode, String... fields) {
		findtext(searchText, 3, fields);
		return this;
	}

	private SqlQueryBuilder findtext(String searchText, int mode, String... fields) {
		if (fields != null && fields.length > 0) {
			append("(");
			String search = "";
			if (searchText != null) {
				search = searchText.trim();
			}
			switch (mode) {
			case 1:
				search = "%" + search + "%";
				break;
			case 2:
				search = "%" + search;
				break;
			case 3:
				search = search + "%";
				break;
			case 4:
			default:
				break;
			}
			for (String f : fields) {
				like(f, search);
				or();
			}
			removeEnd(",", "OR");
			append(")");
		}
		return this;
	}

	public String toSql() {
		removeEnd(",", "OR", "AND");
		return sb.toString();
	}

	public Object[] getParams() {
		return params.toArray(new Object[] {});
	}
}
