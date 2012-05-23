@echo off
@for /F "delims=" %%I in ("%~dp0") do @set projectHome=%%~fI
set liblinkdir=%projectHome%target\lib
rmdir /s /q %liblinkdir%
mkdir %liblinkdir%
mkdir %liblinkdir%\sources
call :wlink commons-io\commons-io\2.3 commons-io-2.3
call :wlink org\apache\commons\commons-lang3\3.1 commons-lang3-3.1
call :wlink commons-logging\commons-logging\1.1.1 commons-logging-1.1.1
call :wlink javax\el\el-api\2.2 el-api-2.2
call :wlink org\hamcrest\hamcrest-core\1.3.RC2 hamcrest-core-1.3.RC2
call :wlink joda-time\joda-time\2.1 joda-time-2.1
call :wlink junit\junit\4.10 junit-4.10
call :wlink log4j\log4j\1.2.16 log4j-1.2.16
call :wlink org\slf4j\slf4j-api\1.6.4 slf4j-api-1.6.4
call :wlink org\slf4j\slf4j-log4j12\1.6.4 slf4j-log4j12-1.6.4
goto :end

:wlink
echo mklink==%1\%2.jar
mklink /h %liblinkdir%\%2.jar %M2_REPO%\%1\%2.jar
mklink /h %liblinkdir%\sources\%2.jar %M2_REPO%\%1\%2-sources.jar
goto :eof

:end
echo pom mklink end!!!!!!!!!!!!!!!!!!!!!!!
