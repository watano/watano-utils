package com.watano.util.data;

import java.math.BigInteger;
import java.text.ParseException;
import java.util.Date;

import com.watano.util.CommonUtil;

public class ResultGetter {
	private Object[] result;

	private ResultGetter() {
	}


	public static ResultGetter getInstance( Object result) {
		if (result == null) {
			return null;
		}
		ResultGetter rg = new ResultGetter();
		if (result instanceof Object[]) {
			if (((Object[]) result).length < 1) {
				return null;
			}
			rg.result = (Object[]) result;
		} else {
			rg.result = new Object[] { result };
		}
		return rg;
	}


	public Long getLongId(int index) {
		if (result[index] != null) {
			if (result[index] instanceof BigInteger) {
				return ((BigInteger) result[index]).longValue();
			} else if (result[index] instanceof Number) {
				return ((Number) result[index]).longValue();
			} else if (result[index] instanceof String) {
				return Long.parseLong((String) result[index]);
			}
		}
		return null;
	}


	public String getString(int index) {
		if (result[index] != null) {
			return (String) result[index];
		}
		return null;
	}


	public Integer getInteger(int index) {
		if (result[index] != null) {
			return (Integer) result[index];
		}
		return null;
	}


	public Double getDouble(int index) {
		if (result[index] != null) {
			return (Double) result[index];
		}
		return null;
	}


	public Float getFloat(int index) {
		if (result[index] != null) {
			return (Float) result[index];
		}
		return null;
	}


	public Boolean getBoolean(int index) {
		if (result[index] != null) {
			return (Boolean) result[index];
		}
		return null;
	}


	public Date getDate(int index) throws ParseException {
		return getTime(index, CommonUtil.dateFormat);
	}


	public Date getTime(int index) throws ParseException {
		return getTime(index, CommonUtil.timeFormat);
	}


	public Date getTime(int index,  String format) throws ParseException {
		if (result[index] != null) {
			if (result[index] instanceof Date) {
				return (Date) result[index];
			} else if (result[index] instanceof String) {
				return CommonUtil.parseDate((String) result[index], format);
			} else if (result[index] instanceof java.sql.Date) {
				return new Date(((java.sql.Date) result[index]).getTime());
			}
		}
		return null;
	}
}
