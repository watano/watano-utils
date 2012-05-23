@echo off
@for /F "delims=" %%I in ("%~dp0") do @set projectHome=%%~fI
set liblinkdir=%projectHome%WebRoot\WEB-INF\lib
rmdir /s /q WebRoot
mklink /d %projectHome%WebRoot %projectHome%src\main\webapp\
rmdir /s /q %liblinkdir%
mkdir %liblinkdir%
mkdir %liblinkdir%\sources
call :wlink aopalliance\aopalliance\1.0 aopalliance-1.0
call :wlink commons-codec\commons-codec\1.6 commons-codec-1.6
call :wlink org\apache\commons\commons-lang3\3.1 commons-lang3-3.1
call :wlink commons-logging\commons-logging\1.1.1 commons-logging-1.1.1
call :wlink com\alibaba\druid\0.2.2 druid-0.2.2
call :wlink net\sf\ehcache\ehcache-core\2.5.2 ehcache-core-2.5.2
call :wlink com\google\guava\guava\12.0 guava-12.0
call :wlink org\hamcrest\hamcrest-core\1.3.RC2 hamcrest-core-1.3.RC2
call :wlink org\codehaus\jackson\jackson-core-asl\1.9.7 jackson-core-asl-1.9.7
call :wlink org\codehaus\jackson\jackson-jaxrs\1.9.7 jackson-jaxrs-1.9.7
call :wlink org\codehaus\jackson\jackson-mapper-asl\1.9.7 jackson-mapper-asl-1.9.7
call :wlink org\codehaus\jackson\jackson-xc\1.9.7 jackson-xc-1.9.7
call :wlink org\slf4j\jcl-over-slf4j\1.6.4 jcl-over-slf4j-1.6.4
call :wlink joda-time\joda-time\2.1 joda-time-2.1
call :wlink com\google\code\findbugs\jsr305\2.0.0 jsr305-2.0.0
call :wlink junit\junit\4.10 junit-4.10
call :wlink log4j\log4j\1.2.16 log4j-1.2.16
call :wlink mysql\mysql-connector-java\5.1.20 mysql-connector-java-5.1.20
call :wlink org\nutz\nutz\1.b.43 nutz-1.b.43
call :wlink net\sourceforge\pinyin4j\pinyin4j\2.5.0 pinyin4j-2.5.0
call :wlink org\apache\poi\poi\3.8 poi-3.8
call :wlink org\slf4j\slf4j-api\1.6.4 slf4j-api-1.6.4
call :wlink org\slf4j\slf4j-log4j12\1.6.4 slf4j-log4j12-1.6.4
call :wlink org\springframework\spring-aop\3.1.1.RELEASE spring-aop-3.1.1.RELEASE
call :wlink org\springframework\spring-asm\3.1.1.RELEASE spring-asm-3.1.1.RELEASE
call :wlink org\springframework\spring-aspects\3.1.1.RELEASE spring-aspects-3.1.1.RELEASE
call :wlink org\springframework\spring-beans\3.1.1.RELEASE spring-beans-3.1.1.RELEASE
call :wlink org\springframework\spring-context\3.1.1.RELEASE spring-context-3.1.1.RELEASE
call :wlink org\springframework\spring-context-support\3.1.1.RELEASE spring-context-support-3.1.1.RELEASE
call :wlink org\springframework\spring-core\3.1.1.RELEASE spring-core-3.1.1.RELEASE
call :wlink org\springframework\spring-expression\3.1.1.RELEASE spring-expression-3.1.1.RELEASE
call :wlink org\springframework\spring-jdbc\3.1.1.RELEASE spring-jdbc-3.1.1.RELEASE
call :wlink org\springframework\spring-test\3.1.1.RELEASE spring-test-3.1.1.RELEASE
call :wlink org\springframework\spring-tx\3.1.1.RELEASE spring-tx-3.1.1.RELEASE
call :wlink org\springframework\spring-web\3.1.1.RELEASE spring-web-3.1.1.RELEASE
call :wlink org\springframework\spring-webmvc\3.1.1.RELEASE spring-webmvc-3.1.1.RELEASE
call :wlink com\watano\watano-commons\1.1 watano-commons-1.1
goto :end

:wlink
echo mklink==%1\%2.jar
mklink /h %liblinkdir%\%2.jar %M2_REPO%\%1\%2.jar
mklink /h %liblinkdir%\sources\%2.jar %M2_REPO%\%1\%2-sources.jar
goto :eof

:end
echo pom mklink end!!!!!!!!!!!!!!!!!!!!!!!
