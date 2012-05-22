package com.watano.util;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.watano.util.jdbc.JdbcTemplateEx;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class SpringTestBase {
	@Autowired
	protected JdbcTemplateEx jdbcTemplateEx;

	@Before
	public void setUp() throws Exception {
		assertNotNull(jdbcTemplateEx);
	}
}
