set M2_REPO=e:\documents\.m2\repository
set liblinkdir=target\lib
rmdir /s /q WebRoot
mklink /d WebRoot .\src\main\webapp\
rmdir /s /q %liblinkdir%
mkdir %liblinkdir%
mkdir %liblinkdir%\sources
mklink /h %liblinkdir%\commons-io-2.3.jar %M2_REPO%\commons-io\commons-io\2.3\commons-io-2.3.jar
mklink /h %liblinkdir%\sources\commons-io-2.3-sources.jar %M2_REPO%\commons-io\commons-io\2.3\commons-io-2.3-sources.jar
mklink /h %liblinkdir%\commons-lang3-3.1.jar %M2_REPO%\org\apache\commons\commons-lang3\3.1\commons-lang3-3.1.jar
mklink /h %liblinkdir%\sources\commons-lang3-3.1-sources.jar %M2_REPO%\org\apache\commons\commons-lang3\3.1\commons-lang3-3.1-sources.jar
mklink /h %liblinkdir%\commons-logging-1.1.1.jar %M2_REPO%\commons-logging\commons-logging\1.1.1\commons-logging-1.1.1.jar
mklink /h %liblinkdir%\sources\commons-logging-1.1.1-sources.jar %M2_REPO%\commons-logging\commons-logging\1.1.1\commons-logging-1.1.1-sources.jar
mklink /h %liblinkdir%\el-api-2.2.jar %M2_REPO%\javax\el\el-api\2.2\el-api-2.2.jar
mklink /h %liblinkdir%\sources\el-api-2.2-sources.jar %M2_REPO%\javax\el\el-api\2.2\el-api-2.2-sources.jar
mklink /h %liblinkdir%\hamcrest-core-1.3.RC2.jar %M2_REPO%\org\hamcrest\hamcrest-core\1.3.RC2\hamcrest-core-1.3.RC2.jar
mklink /h %liblinkdir%\sources\hamcrest-core-1.3.RC2-sources.jar %M2_REPO%\org\hamcrest\hamcrest-core\1.3.RC2\hamcrest-core-1.3.RC2-sources.jar
mklink /h %liblinkdir%\joda-time-2.1.jar %M2_REPO%\joda-time\joda-time\2.1\joda-time-2.1.jar
mklink /h %liblinkdir%\sources\joda-time-2.1-sources.jar %M2_REPO%\joda-time\joda-time\2.1\joda-time-2.1-sources.jar
mklink /h %liblinkdir%\junit-4.10.jar %M2_REPO%\junit\junit\4.10\junit-4.10.jar
mklink /h %liblinkdir%\sources\junit-4.10-sources.jar %M2_REPO%\junit\junit\4.10\junit-4.10-sources.jar
mklink /h %liblinkdir%\log4j-1.2.16.jar %M2_REPO%\log4j\log4j\1.2.16\log4j-1.2.16.jar
mklink /h %liblinkdir%\sources\log4j-1.2.16-sources.jar %M2_REPO%\log4j\log4j\1.2.16\log4j-1.2.16-sources.jar
mklink /h %liblinkdir%\slf4j-api-1.6.4.jar %M2_REPO%\org\slf4j\slf4j-api\1.6.4\slf4j-api-1.6.4.jar
mklink /h %liblinkdir%\sources\slf4j-api-1.6.4-sources.jar %M2_REPO%\org\slf4j\slf4j-api\1.6.4\slf4j-api-1.6.4-sources.jar
mklink /h %liblinkdir%\slf4j-log4j12-1.6.4.jar %M2_REPO%\org\slf4j\slf4j-log4j12\1.6.4\slf4j-log4j12-1.6.4.jar
mklink /h %liblinkdir%\sources\slf4j-log4j12-1.6.4-sources.jar %M2_REPO%\org\slf4j\slf4j-log4j12\1.6.4\slf4j-log4j12-1.6.4-sources.jar
pause
