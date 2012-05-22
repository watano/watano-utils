set M2_REPO=e:\documents\.m2\repository
set liblinkdir=target\lib
rmdir /s /q WebRoot
mklink /d WebRoot .\src\main\webapp\
rmdir /s /q %liblinkdir%
mkdir %liblinkdir%
mkdir %liblinkdir%\sources
mklink /h %liblinkdir%\commons-beanutils-1.8.3.jar %M2_REPO%\commons-beanutils\commons-beanutils\1.8.3\commons-beanutils-1.8.3.jar
mklink /h %liblinkdir%\sources\commons-beanutils-1.8.3-sources.jar %M2_REPO%\commons-beanutils\commons-beanutils\1.8.3\commons-beanutils-1.8.3-sources.jar
mklink /h %liblinkdir%\commons-codec-1.6.jar %M2_REPO%\commons-codec\commons-codec\1.6\commons-codec-1.6.jar
mklink /h %liblinkdir%\sources\commons-codec-1.6-sources.jar %M2_REPO%\commons-codec\commons-codec\1.6\commons-codec-1.6-sources.jar
mklink /h %liblinkdir%\commons-collections-3.2.1.jar %M2_REPO%\commons-collections\commons-collections\3.2.1\commons-collections-3.2.1.jar
mklink /h %liblinkdir%\sources\commons-collections-3.2.1-sources.jar %M2_REPO%\commons-collections\commons-collections\3.2.1\commons-collections-3.2.1-sources.jar
mklink /h %liblinkdir%\commons-dbcp-1.4.jar %M2_REPO%\commons-dbcp\commons-dbcp\1.4\commons-dbcp-1.4.jar
mklink /h %liblinkdir%\sources\commons-dbcp-1.4-sources.jar %M2_REPO%\commons-dbcp\commons-dbcp\1.4\commons-dbcp-1.4-sources.jar
mklink /h %liblinkdir%\commons-io-2.3.jar %M2_REPO%\commons-io\commons-io\2.3\commons-io-2.3.jar
mklink /h %liblinkdir%\sources\commons-io-2.3-sources.jar %M2_REPO%\commons-io\commons-io\2.3\commons-io-2.3-sources.jar
mklink /h %liblinkdir%\commons-lang3-3.1.jar %M2_REPO%\org\apache\commons\commons-lang3\3.1\commons-lang3-3.1.jar
mklink /h %liblinkdir%\sources\commons-lang3-3.1-sources.jar %M2_REPO%\org\apache\commons\commons-lang3\3.1\commons-lang3-3.1-sources.jar
mklink /h %liblinkdir%\commons-logging-1.1.1.jar %M2_REPO%\commons-logging\commons-logging\1.1.1\commons-logging-1.1.1.jar
mklink /h %liblinkdir%\sources\commons-logging-1.1.1-sources.jar %M2_REPO%\commons-logging\commons-logging\1.1.1\commons-logging-1.1.1-sources.jar
mklink /h %liblinkdir%\dom4j-1.6.1.jar %M2_REPO%\dom4j\dom4j\1.6.1\dom4j-1.6.1.jar
mklink /h %liblinkdir%\sources\dom4j-1.6.1-sources.jar %M2_REPO%\dom4j\dom4j\1.6.1\dom4j-1.6.1-sources.jar
mklink /h %liblinkdir%\druid-0.2.2.jar %M2_REPO%\com\alibaba\druid\0.2.2\druid-0.2.2.jar
mklink /h %liblinkdir%\sources\druid-0.2.2-sources.jar %M2_REPO%\com\alibaba\druid\0.2.2\druid-0.2.2-sources.jar
mklink /h %liblinkdir%\freemarker-2.3.19.jar %M2_REPO%\org\freemarker\freemarker\2.3.19\freemarker-2.3.19.jar
mklink /h %liblinkdir%\sources\freemarker-2.3.19-sources.jar %M2_REPO%\org\freemarker\freemarker\2.3.19\freemarker-2.3.19-sources.jar
mklink /h %liblinkdir%\guava-12.0.jar %M2_REPO%\com\google\guava\guava\12.0\guava-12.0.jar
mklink /h %liblinkdir%\sources\guava-12.0-sources.jar %M2_REPO%\com\google\guava\guava\12.0\guava-12.0-sources.jar
mklink /h %liblinkdir%\hamcrest-core-1.3.RC2.jar %M2_REPO%\org\hamcrest\hamcrest-core\1.3.RC2\hamcrest-core-1.3.RC2.jar
mklink /h %liblinkdir%\sources\hamcrest-core-1.3.RC2-sources.jar %M2_REPO%\org\hamcrest\hamcrest-core\1.3.RC2\hamcrest-core-1.3.RC2-sources.jar
mklink /h %liblinkdir%\jcl-over-slf4j-1.6.4.jar %M2_REPO%\org\slf4j\jcl-over-slf4j\1.6.4\jcl-over-slf4j-1.6.4.jar
mklink /h %liblinkdir%\sources\jcl-over-slf4j-1.6.4-sources.jar %M2_REPO%\org\slf4j\jcl-over-slf4j\1.6.4\jcl-over-slf4j-1.6.4-sources.jar
mklink /h %liblinkdir%\joda-time-2.1.jar %M2_REPO%\joda-time\joda-time\2.1\joda-time-2.1.jar
mklink /h %liblinkdir%\sources\joda-time-2.1-sources.jar %M2_REPO%\joda-time\joda-time\2.1\joda-time-2.1-sources.jar
mklink /h %liblinkdir%\jsr305-2.0.0.jar %M2_REPO%\com\google\code\findbugs\jsr305\2.0.0\jsr305-2.0.0.jar
mklink /h %liblinkdir%\sources\jsr305-2.0.0-sources.jar %M2_REPO%\com\google\code\findbugs\jsr305\2.0.0\jsr305-2.0.0-sources.jar
mklink /h %liblinkdir%\junit-4.10.jar %M2_REPO%\junit\junit\4.10\junit-4.10.jar
mklink /h %liblinkdir%\sources\junit-4.10-sources.jar %M2_REPO%\junit\junit\4.10\junit-4.10-sources.jar
mklink /h %liblinkdir%\log4j-1.2.16.jar %M2_REPO%\log4j\log4j\1.2.16\log4j-1.2.16.jar
mklink /h %liblinkdir%\sources\log4j-1.2.16-sources.jar %M2_REPO%\log4j\log4j\1.2.16\log4j-1.2.16-sources.jar
mklink /h %liblinkdir%\maven-model-3.0.4.jar %M2_REPO%\org\apache\maven\maven-model\3.0.4\maven-model-3.0.4.jar
mklink /h %liblinkdir%\sources\maven-model-3.0.4-sources.jar %M2_REPO%\org\apache\maven\maven-model\3.0.4\maven-model-3.0.4-sources.jar
mklink /h %liblinkdir%\mysql-connector-java-5.1.20.jar %M2_REPO%\mysql\mysql-connector-java\5.1.20\mysql-connector-java-5.1.20.jar
mklink /h %liblinkdir%\sources\mysql-connector-java-5.1.20-sources.jar %M2_REPO%\mysql\mysql-connector-java\5.1.20\mysql-connector-java-5.1.20-sources.jar
mklink /h %liblinkdir%\nutz-1.b.43.jar %M2_REPO%\org\nutz\nutz\1.b.43\nutz-1.b.43.jar
mklink /h %liblinkdir%\sources\nutz-1.b.43-sources.jar %M2_REPO%\org\nutz\nutz\1.b.43\nutz-1.b.43-sources.jar
mklink /h %liblinkdir%\pinyin4j-2.5.0.jar %M2_REPO%\net\sourceforge\pinyin4j\pinyin4j\2.5.0\pinyin4j-2.5.0.jar
mklink /h %liblinkdir%\sources\pinyin4j-2.5.0-sources.jar %M2_REPO%\net\sourceforge\pinyin4j\pinyin4j\2.5.0\pinyin4j-2.5.0-sources.jar
mklink /h %liblinkdir%\plexus-utils-3.0.1.jar %M2_REPO%\org\codehaus\plexus\plexus-utils\3.0.1\plexus-utils-3.0.1.jar
mklink /h %liblinkdir%\sources\plexus-utils-3.0.1-sources.jar %M2_REPO%\org\codehaus\plexus\plexus-utils\3.0.1\plexus-utils-3.0.1-sources.jar
mklink /h %liblinkdir%\slf4j-api-1.6.4.jar %M2_REPO%\org\slf4j\slf4j-api\1.6.4\slf4j-api-1.6.4.jar
mklink /h %liblinkdir%\sources\slf4j-api-1.6.4-sources.jar %M2_REPO%\org\slf4j\slf4j-api\1.6.4\slf4j-api-1.6.4-sources.jar
mklink /h %liblinkdir%\slf4j-log4j12-1.6.4.jar %M2_REPO%\org\slf4j\slf4j-log4j12\1.6.4\slf4j-log4j12-1.6.4.jar
mklink /h %liblinkdir%\sources\slf4j-log4j12-1.6.4-sources.jar %M2_REPO%\org\slf4j\slf4j-log4j12\1.6.4\slf4j-log4j12-1.6.4-sources.jar
mklink /h %liblinkdir%\watano-commons-1.0.jar %M2_REPO%\com\watano\watano-commons\1.0\watano-commons-1.0.jar
mklink /h %liblinkdir%\sources\watano-commons-1.0-sources.jar %M2_REPO%\com\watano\watano-commons\1.0\watano-commons-1.0-sources.jar
pause
