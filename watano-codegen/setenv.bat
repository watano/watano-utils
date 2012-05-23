@for /F "delims=" %%I in ("%~dp0") do set projectHome=%%~fI
echo %projectHome%
cd %projectHome%
set classpath=%projectHome%target\classes;%projectHome%target\lib\*;%classpath%
