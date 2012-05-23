package com.watano.util.collection;

import static org.junit.Assert.*;

import java.io.IOException;

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class IniPlusTest {
	private static final Logger LOG = LoggerFactory.getLogger(IniPlusTest.class);

	@Test
	public void testValue() {
		try {
			IniPlus iniplus = new IniPlus("classpath:IniPlusTest.ini");
			assertEquals(iniplus.value("amount.width", null, "report.RptSalesGoodsDef", "salesOrderItem"), "200");
			assertEquals(iniplus.value("finalPrice.width", null, "salesOrderItem"), "180");
			assertEquals(iniplus.value("finalPrice.width", null), "100");
			assertEquals(iniplus.value("Category", null, "report.RptSalesGoodsDef", "salesOrderItem"), "3");
			assertEquals(iniplus.value("Category", null, "salesOrderItem"), "3");
			assertEquals(iniplus.value("Category", null), "1");
			assertSame(iniplus.getData().intValue("Category"), 1);
			assertSame(iniplus.getData().intDefaultValue(2, "Category"), 1);
			assertNull(iniplus.getData().intValue("CategoryXXX"));
			assertSame(iniplus.getData().intDefaultValue(2, "CategoryXXX"), 2);
			assertNull(iniplus.value("CategoryXXX", null));
			iniplus.getData().put("CategoryXXX", "abc");
			assertEquals(iniplus.value("CategoryXXX", null), "abc");

			assertEquals(iniplus.value("salesOrderItemGroup.Category", ""), "3");
			assertSame(iniplus.getSection("salesOrderItemGroup").intValue("Category"), 3);
			assertSame(iniplus.getSection("salesOrderItemGroup").intValue("Category", null), 3);
			iniplus.getData().put("salesOrderItemGroup.Category", "4");
			assertEquals(iniplus.value("salesOrderItemGroup.Category", ""), "4");
			assertSame(iniplus.getSection("salesOrderItemGroup").intValue("Category"), 4);

			assertEquals(iniplus.value("Query", null, "report.RptSalesGoodsDef", "salesOrderItem"), "salesOrderItem");
			assertEquals(iniplus.value("sale_time.Title", null, "report.RptSalesGoodsDef", "salesOrderItem"), "销售时间");
			assertEquals(iniplus.value("productInfo_no.Title", null, "report.RptSalesGoodsDef", "salesOrderItem"), "商品款号");
			assertEquals(iniplus.value("salesOrder_id.width", null, "report.RptSalesGoodsDef", "salesOrderItem"), "50");
			assertEquals(iniplus.value("amount.Title", null, "report.RptSalesGoodsDef", "salesOrderItem"), "金额");
			assertEquals(iniplus.value("sum_quantity.Title", null, "report.RptSalesGoodsDef", "salesOrderItem"), "数量");
			assertEquals(iniplus.value("dep_name.Title", null, "report.RptCTSalesDep", "salesOrderItemGroup"), "门店");

			iniplus = new IniPlus("classpath:pom_base.ini");
			assertEquals(iniplus.value("repositories.repo1", ""), "http://repo1.maven.org/maven2");
			assertEquals(iniplus.getData().strValue("plugin-configurations.maven-surefire-plugin"),
					"<includes>\n<include>**/*Test.java</include>\n</includes>");
			iniplus.fill(".\\templates\\pom.ini");
			assertEquals(iniplus.value("groupId", ""), "com.watano");
			LOG.debug(iniplus.getData().toIniText());
			assertEquals(iniplus.value("plugin-exclusions.maven-source-plugin.goals", ""), "jar");
			assertArrayEquals(iniplus.getValues("plugin-exclusions.xtend-maven-plugin.goals", ""), new String[] { "compile", "testCompile" });
			LOG.info(iniplus.toIniText());
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		}
	}
}
