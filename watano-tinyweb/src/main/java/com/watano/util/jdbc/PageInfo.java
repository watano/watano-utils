package com.watano.util.jdbc;

import java.util.ArrayList;
import java.util.List;

import org.springframework.util.CollectionUtils;

public class PageInfo {
	public final static int PAGESIZE = 20;

	private int totalCount;

	private int startIndex = 0;

	private int pi; // current page number
	private int pt; // total page number
	private int ps; // page size

	public PageInfo() {
		ps = PAGESIZE;
		totalCount = 0;
	}

	public PageInfo(int pi) {
		this.pi = pi;
	}

	public PageInfo(int pi, int pageSize) {
		this.pi = pi;
		ps = pageSize;
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		if (totalCount >= 0) {
			this.totalCount = totalCount;
			int count = totalCount / ps;
			if (totalCount % ps > 0) {
				count++;
			}
			pt = count;
		} else {
			this.totalCount = 0;
			pt = 0;
		}
	}

	public int getStartIndex() {
		return startIndex;
	}

	public void setStartIndex(int startIndex) {
		this.startIndex = startIndex;
		pi = (startIndex / ps) + 1;
	}

	public int getPi() {
		return pi;
	}

	public void setPi(int pi) {
		this.pi = pi;
	}

	public int getPs() {
		return ps;
	}

	public void setPs(int ps) {
		this.ps = ps;
	}

	public int getPt() {
		return pt;
	}

	public void count() {
		if (totalCount > 0) {
			pt = totalCount / ps;
			if (totalCount % ps > 0) {
				pt++;
			}
		} else {
			pt = 0;
		}
		if (pi <= 0) {
			pi = 1;
		}
		if (pi > pt) {
			pi = pt;
		}
		startIndex = (pi - 1) * ps;
		if (startIndex <= 0 || startIndex > totalCount) {
			startIndex = 0;
		}
	}

	public <O extends Object> List<O> fetchResult(List<O> totalResults) {
		if (CollectionUtils.isEmpty(totalResults)) {
			updateByResultSize(0);
		} else {
			updateByResultSize(totalResults.size());
		}
		List<O> results = new ArrayList<O>();
		if (totalResults != null) {
			for (int i = 0; i < totalResults.size(); i++) {
				if (i >= getStartIndex() && (i - getStartIndex()) < getPs()) {
					results.add(totalResults.get(i));
				}
			}
		}
		return results;
	}

	public void updateByResultSize(int resultSize) {
		if (resultSize > 0) {
			setTotalCount(resultSize);
		} else {
			setTotalCount(0);
		}
		count();
	}

	public boolean isValidPi() {
		return pi <= pt;
	}

	public boolean hasNextPage() {
		return pi < pt;
	}

	@Override
	public String toString() {
		return "Page{" + pi + "/" + pt + ", [" + totalCount + ", " + ps + "]}";
	}

	public static int parseStart(String start) {
		int s = 0;
		try {
			s = Integer.parseInt(start);
		} catch (Throwable e) {
			// LOG.debug(e.getMessage(), e);
		}
		if (s < 0) {
			s = 0;
		}
		return s;
	}

	public static int parseLimit(String limit) {
		int l = PAGESIZE;
		try {
			l = Integer.parseInt(limit);
		} catch (Throwable e) {
			// LOG.debug(e.getMessage(), e);
		}
		if (l != -1 && l < 0) {
			l = PAGESIZE;
		}
		return l;
	}
}
