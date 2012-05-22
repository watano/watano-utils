package com.watano.util;

import org.junit.Assert;
import org.junit.Test;

public class I18nTextUtilTest {
	@Test
	public void testGetText() {
		Assert.assertEquals(I18nTextUtil.getText("LeftPaneTitle"), "系统功能菜单");
		Assert.assertEquals(I18nTextUtil.getText("SaleRule_10001", 100), "固定价格:100元");
		Assert.assertEquals(I18nTextUtil.getText("SaleRule_10002", 7.5), "固定折扣:7.5折");
		Assert.assertEquals(I18nTextUtil.getText("SaleRule_30001", 100, 500, 7), "总价在100到500之间打7折");
	}

}
