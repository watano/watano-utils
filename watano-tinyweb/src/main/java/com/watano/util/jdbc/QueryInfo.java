package com.watano.util.jdbc;

import com.watano.util.collection.StringMap;

public class QueryInfo extends StringMap {
	private static final long serialVersionUID = -7719891530947904489L;

	public String getQueryText() {
		return strValue("query");
	}
}
