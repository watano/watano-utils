call jset.bat
set codegen=e:\work\projects\myprojects\watano-codegen
set classpath=%codegen%\target\classes;%codegen%\target\lib\*;%classpath%
cd %codegen%
rem call mvn install
java com.watano.util.codegen.AutoCodeGen
pause
