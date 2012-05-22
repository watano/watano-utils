package com.watano.util.lang;

import junit.framework.Assert;

import org.junit.Test;

import com.watano.util.lang.MoneyUtil;

public class MoneyUtilTest {
	@Test()
	public void testGetWeightedAverage1() {
		Double d1 = 150d;
		Double d2 = 149d;
		Long q1 = 0L;
		Long q2 = 1L;
		Double result = MoneyUtil.getWeightedAverage(d1, q1, d2, q2);
		Assert.assertEquals(149d, result);
	}

	@Test()
	public void testGetWeightedAverage2() {

	}
}
