package com.watano.util;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;
import java.util.Properties;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ResourceHelper {
	private static final Logger LOG = LoggerFactory.getLogger(ResourceHelper.class);
	public static final String DEFAULT_ENCODING = "utf-8";

	public static Properties loadProperties(String location) {
		return loadProperties(location, DEFAULT_ENCODING);
	}

	public static Properties loadProperties(String location, String encoding) {
		Properties properties = new Properties();
		InputStream is = null;
		try {
			is = readResource(location);
			properties.load( new InputStreamReader(is, encoding));
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		} finally {
			IOUtils.closeQuietly(is);

		}
		return properties;
	}

	public static List<String> readResourceLines(String location) throws IOException {
		return readResourceLines(location, DEFAULT_ENCODING);
	}

	public static InputStream readResource(String location) {
		try {
			if (location.startsWith("classpath:")) {
				return ResourceHelper.class.getClassLoader().getResourceAsStream(location.substring("classpath:".length()));
			} else{
				return new FileInputStream(FilenameUtils.normalize(location));
			}
		} catch (Throwable e) {
			LOG.error(e.getMessage(), e);
		}
		return null;
	}

	public static List<String> readResourceLines(String location, String encoding) throws IOException {
		return IOUtils.readLines(readResource(location), encoding);
	}
}
