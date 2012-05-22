package com.watano.util.mvn;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.jar.JarFile;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;

import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;

public class MavenVersion {
	private static final Logger LOG = Logger.getLogger(MavenVersion.class);

	/**
	 * Print the version of all the maven library found in the class path.
	 */
	public static void printVersionInfo() {
		for (MavenInfo mi : getVersionInfo().values()) {
			String name = mi.artifactId.equals(mi.groupId) ? mi.artifactId
					: (mi.groupId + '/' + mi.artifactId);
			LOG.info("Maven library " + name + " v" + mi.version + " on "
					+ mi.buildDate + ", size=" + formatNumber("#,##0", mi.size));
		}
	}

	private static final NumberFormat DEFAULT_DECIMAL_FORMAT = new DecimalFormat();
	private static final ConcurrentMap<String, NumberFormat> NUMBER_FORMATS = new ConcurrentHashMap<String, NumberFormat>();

	public static NumberFormat getNumberFormat(String format) {
		NumberFormat df = format == null ? DEFAULT_DECIMAL_FORMAT
				: NUMBER_FORMATS.get(format);
		if (df == null) {
			assert format != null;
			NUMBER_FORMATS.putIfAbsent(format, new DecimalFormat(format));
			df = NUMBER_FORMATS.get(format);
		}
		return df;
	}

	public static String formatNumber(String format, Number number) {
		NumberFormat df = getNumberFormat(format);
		synchronized (df) {
			return df.format(number);
		}
	}

	/**
	 * @return a Map of the maven version information for libraries found in the
	 *         class path.
	 */
	public static Map<String, MavenInfo> getVersionInfo() {
		Map<String, MavenInfo> ret = new HashMap<String, MavenInfo>();
		String[] parts = System.getProperty("java.class.path").split(
				File.pathSeparator);
		for (String part : parts) {
			ZipFile zipFile = null;
			try {
				File file = new File(part);
				if (!file.isFile()) {
					continue;
				}
				zipFile = new JarFile(file);
				for (final Enumeration<? extends ZipEntry> enumeration = zipFile
						.entries(); enumeration.hasMoreElements();) {
					ZipEntry zipEntry = enumeration.nextElement();
					final String name = zipEntry.getName();
					if (!name.endsWith("pom.properties")) {
						continue;
					}
					// only the first version is used. (except if classes have
					// been deleted/renamed, urgh!)
					if (ret.containsKey(name)) {
						continue;
					}
					final InputStream in = zipFile.getInputStream(zipEntry);
					ret.put(name, parsePomProperties(file.length(), in));
				}
			} catch (IOException e) {
				e.printStackTrace();
			} finally {
				IOUtils.closeQuietly(zipFile);
			}
		}
		if (ret.isEmpty()) {
			LOG.warn("Unable to find Maven library info in class path= "
					+ System.getProperty("java.class.path"));
		}
		return ret;
	}

	public static void main(String[] args) {
		printVersionInfo();
	}

	/**
	 * Class to hold the maven info for a library.
	 */
	public static class MavenInfo {
		/**
		 * artifactId of build
		 */
		public final String artifactId;
		/**
		 * groupId of build.
		 */
		public final String groupId;
		/**
		 * version of build.
		 */
		public final String version;
		/**
		 * date built.
		 */
		public final String buildDate;
		/**
		 * size of the jar.
		 */
		public final long size;

		MavenInfo(String artifactId, String groupId, String version,
				String buildDate, long size) {
			this.artifactId = artifactId;
			this.groupId = groupId;
			this.version = version;
			this.buildDate = buildDate;
			this.size = size;
		}
	}

	static MavenInfo parsePomProperties(long length, InputStream in)
			throws IOException {
		final BufferedReader br = new BufferedReader(new InputStreamReader(in,
				Charset.forName("UTF-8")));
		String version = "unknown";
		String buildDate = "unknown";
		String groupId = "unknown";
		String artifactId = "unknown";
		for (String line; (line = br.readLine()) != null;) {
			// #.*:.*:.*
			if (line.startsWith("#")
					&& line.indexOf(':') != line.lastIndexOf(':')) {
				buildDate = line.substring(1);
				continue;
			}
			if (line.startsWith("version=")) {
				version = line.substring(8);
			}
			if (line.startsWith("groupId=")) {
				groupId = line.substring(8);
			}
			if (line.startsWith("artifactId=")) {
				artifactId = line.substring(11);
			}
		}
		return new MavenInfo(artifactId, groupId, version, buildDate, length);
	}
}