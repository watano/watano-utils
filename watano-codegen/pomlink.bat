@echo off
@for /F "delims=" %%I in ("%~dp0") do @set projectHome=%%~fI
set liblinkdir=%projectHome%target\lib
rmdir /s /q %liblinkdir%
mkdir %liblinkdir%
mkdir %liblinkdir%\sources
call :wlink commons-beanutils\commons-beanutils\1.8.3 commons-beanutils-1.8.3
call :wlink commons-codec\commons-codec\1.6 commons-codec-1.6
call :wlink commons-collections\commons-collections\3.2.1 commons-collections-3.2.1
call :wlink commons-dbcp\commons-dbcp\1.4 commons-dbcp-1.4
call :wlink commons-io\commons-io\2.3 commons-io-2.3
call :wlink org\apache\commons\commons-lang3\3.1 commons-lang3-3.1
call :wlink commons-logging\commons-logging\1.1.1 commons-logging-1.1.1
call :wlink dom4j\dom4j\1.6.1 dom4j-1.6.1
call :wlink com\alibaba\druid\0.2.2 druid-0.2.2
call :wlink org\freemarker\freemarker\2.3.19 freemarker-2.3.19
call :wlink com\google\guava\guava\12.0 guava-12.0
call :wlink org\hamcrest\hamcrest-core\1.3.RC2 hamcrest-core-1.3.RC2
call :wlink org\slf4j\jcl-over-slf4j\1.6.4 jcl-over-slf4j-1.6.4
call :wlink joda-time\joda-time\2.1 joda-time-2.1
call :wlink com\google\code\findbugs\jsr305\2.0.0 jsr305-2.0.0
call :wlink junit\junit\4.10 junit-4.10
call :wlink log4j\log4j\1.2.16 log4j-1.2.16
call :wlink org\apache\maven\maven-model\3.0.4 maven-model-3.0.4
call :wlink mysql\mysql-connector-java\5.1.20 mysql-connector-java-5.1.20
call :wlink org\nutz\nutz\1.b.43 nutz-1.b.43
call :wlink net\sourceforge\pinyin4j\pinyin4j\2.5.0 pinyin4j-2.5.0
call :wlink org\codehaus\plexus\plexus-utils\3.0.1 plexus-utils-3.0.1
call :wlink org\slf4j\slf4j-api\1.6.4 slf4j-api-1.6.4
call :wlink org\slf4j\slf4j-log4j12\1.6.4 slf4j-log4j12-1.6.4
call :wlink com\watano\watano-commons\1.1 watano-commons-1.1
goto :end

:wlink
echo mklink==%1\%2.jar
mklink /h %liblinkdir%\%2.jar %M2_REPO%\%1\%2.jar
mklink /h %liblinkdir%\sources\%2.jar %M2_REPO%\%1\%2-sources.jar
goto :eof

:end
echo pom mklink end!!!!!!!!!!!!!!!!!!!!!!!
