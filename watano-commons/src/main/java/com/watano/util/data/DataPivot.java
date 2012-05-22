package com.watano.util.data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.lang3.ArrayUtils;

public class DataPivot {

	public static List<Object[]> getExpandedData(List<Object[]> olddata, int start, int end, String[] keys) {
		List<Object[]> newdata = new ArrayList<Object[]>();
		for (Object[] olditem : olddata) {
			if (start < 0 && end >= olditem.length && (end - start + 1) != keys.length) {
				throw new IllegalArgumentException();
			}
			int index = 0;
			for (String key : keys) {
				Object[] newItem = Arrays.copyOfRange(olditem, 0, start);
				newItem = ArrayUtils.add(newItem, key);
				newItem = ArrayUtils.add(newItem, olditem[start + index]);
				if (end > olditem.length) {
					newItem = ArrayUtils.addAll(newItem, Arrays.copyOfRange(olditem, end, olditem.length));
				}
				newdata.add(newItem);
				index++;
			}
		}
		return newdata;
	}
}
