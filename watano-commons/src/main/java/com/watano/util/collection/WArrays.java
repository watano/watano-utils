package com.watano.util.collection;

import java.util.Arrays;
import java.util.Map;
import java.util.Set;

public class WArrays {
	public static <T> T[] sortSet(Set<T> set, T[] a) {
		T[] results = set.toArray(a);
		Arrays.sort(results);
		return results;
	}

	public static <T> T[] getSortedKeys(Map<T, ?> maps, T[] a) {
		if (maps == null || maps.size() < 0) {
			return a;
		}
		return sortSet(maps.keySet(), a);
	}

}
