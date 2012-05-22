package com.watano.util;

import java.io.UnsupportedEncodingException;

import org.junit.Assert;
import org.junit.Test;

public class StringUtilTest {
	@Test
	public void testRebuildArray() {
		String[] arr1 = new String[] { "aaa", "" };
		String[] arr2 = StringUtil.rebuildArray(arr1);

		Assert.assertArrayEquals(new String[] { "aaa" }, arr2);

		arr1 = new String[] { "aaa", null, "bb", "", null };
		arr2 = StringUtil.rebuildArray(arr1);

		Assert.assertArrayEquals(new String[] { "aaa", "bb" }, arr2);

	}

	@Test
	public void testEncodeURI() throws UnsupportedEncodingException {
		String[] arr1 = new String[] {
				"%E8%A5%BF%E9%97%A8%E5%AD%90",
				"SF6%E6%96%AD%E8%B7%AF%E5%99%A8" };

		String[] arr2 = new String[] {
				"西门子",
				"SF6断路器" };
		for (int i = 0; i < arr1.length; i++) {
			String v = java.net.URLDecoder.decode(arr1[i], "utf-8");
			Assert.assertEquals(v, arr2[i]);
		}
	}

	@Test
	public void testMatch() {
		Assert.assertTrue(StringUtil.match("aabbcc", "*cc"));
		Assert.assertTrue(StringUtil.match("aabbcc", "????cc"));
		Assert.assertTrue(StringUtil.match("aabb\\cc", "*\\cc"));
		Assert.assertTrue(StringUtil.match("aabb\\[cc", "*\\[cc"));
		Assert.assertTrue(StringUtil.match("aabb\\[]cc", "*\\[]cc"));
		Assert.assertTrue(StringUtil.match("aabb\\[](cc", "*\\[](cc"));
		Assert.assertTrue(StringUtil.match("aabb\\[]()cc", "*\\[]()cc"));
		Assert.assertTrue(StringUtil.match("aabb\\[]().cc", "*\\[]().cc"));
	}

	@Test
	public void testGetAbbreviation() {
		Assert.assertEquals(StringUtil.getAbbreviation("aabbcc"), "aabbcc");
		Assert.assertEquals(StringUtil.getAbbreviation("Aabbcc"), "A");
		Assert.assertEquals(StringUtil.getAbbreviation("AaBbCc"), "ABC");
		Assert.assertEquals(StringUtil.getAbbreviation("aabbCc"), "C");
	}

	@Test
	public void testGetIdsByFilters() {
		Assert.assertEquals(StringUtil.getIdTextByFilters("*", null), "-1");
		Assert.assertEquals(StringUtil.getIdTextByFilters("*", null, 8l), "8");
		Assert.assertEquals(StringUtil.getIdTextByFilters("*", null, -1l), "-1");
		Assert.assertEquals(StringUtil.getIdTextByFilters("*", -1l, 1l), "1");
		Assert.assertEquals(StringUtil.getIdTextByFilters("*", 1l, -1l), "-1");
		Assert.assertEquals(StringUtil.getIdTextByFilters("*", 8l, 1l), "1");

		Assert.assertEquals(StringUtil.getIdTextByFilters("-1", null), "-1");
		Assert.assertEquals(StringUtil.getIdTextByFilters("-1", null, 8l), "8");
		Assert.assertEquals(StringUtil.getIdTextByFilters("-1", -1l), "-1");

		Assert.assertEquals(StringUtil.getIdTextByFilters("-1|2", null), "-1");
		Assert.assertEquals(StringUtil.getIdTextByFilters("-1|2", null, 8l), "8");
		Assert.assertEquals(StringUtil.getIdTextByFilters("-1|2", -1l), "-1");
		Assert.assertEquals(StringUtil.getIdTextByFilters("-1|2", 8l), "-1");
		Assert.assertEquals(StringUtil.getIdTextByFilters("-1|2", -1l, 1l), "1");
		Assert.assertEquals(StringUtil.getIdTextByFilters("-1|2", 1l, -1l), "-1");

		Assert.assertEquals(StringUtil.getIdTextByFilters("1|2", null), "1,2");
		Assert.assertEquals(StringUtil.getIdTextByFilters("1|2", 8l), "1,2,8");
		Assert.assertEquals(StringUtil.getIdTextByFilters("1|2", null, 8l), "-99999");
		Assert.assertEquals(StringUtil.getIdTextByFilters("1|2", 1l), "1,2");
		Assert.assertEquals(StringUtil.getIdTextByFilters("1|2", -1l), "-1");
		Assert.assertEquals(StringUtil.getIdTextByFilters("1|2", null, 1l), "1");
		Assert.assertEquals(StringUtil.getIdTextByFilters("1|2", null, -1l), "1,2");

		Assert.assertEquals(StringUtil.getIdTextByFilters("|9|", null), "9");
		Assert.assertEquals(StringUtil.getIdTextByFilters("|9|", 8l), "9,8");
		Assert.assertEquals(StringUtil.getIdTextByFilters("|9|", -1l), "-1");
		Assert.assertEquals(StringUtil.getIdTextByFilters("|9|", null, 8l), "-99999");
		Assert.assertEquals(StringUtil.getIdTextByFilters("|9|", null, -1l), "9");

		Assert.assertEquals(StringUtil.getIdTextByFilters("", 30l, -1l), "30");
		Assert.assertEquals(StringUtil.getIdTextByFilters("", 30l, 8l), "-99999");
		Assert.assertEquals(StringUtil.getIdTextByFilters("", 30l, 30l), "30");

		Assert.assertEquals(StringUtil.getIdTextByFilters("|5||10||27||64||71||74||76||77||78|", null),
				"5,10,27,64,71,74,76,77,78");
		Assert.assertEquals(StringUtil.getIdTextByFilters("|5||10||27||64||71||74||76||77||78|", 8l),
				"5,10,27,64,71,74,76,77,78,8");
		Assert.assertEquals(StringUtil.getIdTextByFilters("|5||10||27||64||71||74||76||77||78|", -1l), "-1");
		Assert.assertEquals(StringUtil.getIdTextByFilters("|5||10||27||64||71||74||76||77||78|", null, 8l), "-99999");
		Assert.assertEquals(StringUtil.getIdTextByFilters("|5||10||27||64||71||74||76||77||78|", null, 78l), "78");
		Assert.assertEquals(StringUtil.getIdTextByFilters("|5||10||27||64||71||74||76||77||78|", null, -1l),
				"5,10,27,64,71,74,76,77,78");
	}

}
