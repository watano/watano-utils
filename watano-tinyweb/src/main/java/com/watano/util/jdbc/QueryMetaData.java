package com.watano.util.jdbc;

import java.io.IOException;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.text.StrBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.jdbc.support.rowset.SqlRowSetMetaData;

import com.watano.util.collection.IniPlus;

public class QueryMetaData {
	private static final Logger LOG = LoggerFactory.getLogger(QueryMetaData.class);
	protected JdbcTemplateEx jdbcTemplateEx;
	protected IniPlus queryConfig;

	public QueryMetaData(JdbcTemplateEx jdbcTemplateEx) throws IOException {
		super();
		this.jdbcTemplateEx = jdbcTemplateEx;
	}

	public String paseMetaData(String queryId, String sql, String extConfigs) {
		StrBuilder sb = new StrBuilder(1000);
		try {
			//section
			sb.append("[query.").append(queryId).append(']').append('\n');
			//query
			String query = sql;
			String sqlText = StringUtils.replace(query, "\n", "\n\\");
			sb.append("query=").append(sqlText).append('\n');

			//load common configs
			queryConfig = new IniPlus("classpath:querycommons.ini");
			queryConfig.addLines(extConfigs);

			//replace all black
			List<String> blackNams = queryConfig.getMatchKeys("black.");
			for (String black : blackNams) {
				black = black.substring("black.".length() + 1);
				String blackValue = queryConfig.value(black, "");
				StringUtils.replace(query, "{" + black + "}", blackValue);
			}

			SqlRowSet sqlRowSet = jdbcTemplateEx.queryForRowSet(sql);
			SqlRowSetMetaData metaData = sqlRowSet.getMetaData();

			//			int i = 0;
			//			for (Object arg : args) {
			//				sb.append("params." + i + "=").append(arg.toString()).append('\n');
			//				i++;
			//			}

			String columns = "";
			for (int i = 1; i <= metaData.getColumnCount(); i++) {
				String key = metaData.getColumnName(i);
				columns += key + ",";
				sb.append("col.").append(key).append(".catalogName=").append(metaData.getCatalogName(i)).append('\n');
				sb.append("col.").append(key).append(".schemaName=").append(metaData.getSchemaName(i)).append('\n');
				sb.append("col.").append(key).append(".name=").append(metaData.getColumnName(i)).append('\n');
				sb.append("col.").append(key).append(".label=").append(metaData.getColumnLabel(i)).append('\n');
				sb.append("col.").append(key).append(".class=").append(metaData.getColumnClassName(i)).append('\n');
				sb.append("col.").append(key).append(".type=").append(metaData.getColumnTypeName(i)).append('\n');
				sb.append("col.").append(key).append(".displaySize=").append(metaData.getColumnDisplaySize(i)).append('\n');
				sb.append("col.").append(key).append(".precision=").append(metaData.getPrecision(i)).append('\n');
				sb.append("col.").append(key).append(".scale=").append(metaData.getScale(i)).append('\n');
				sb.append("col.").append(key).append(".isCaseSensitive=").append(metaData.isCaseSensitive(i)).append('\n');
				sb.append("col.").append(key).append(".isCurrency=").append(metaData.isCurrency(i)).append('\n');
				sb.append("col.").append(key).append(".isSigned=").append(metaData.isSigned(i)).append('\n');
			}
			if (columns.length() > 1) {
				columns = columns.substring(0, columns.length() - 1);
			}
			sb.append("columns=").append(columns);
		} catch (Throwable e) {
			LOG.error(e.getMessage(), e);
		}
		return sb.toString();
	}
}
