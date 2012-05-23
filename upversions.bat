@call jset
cd .\watano-codegen
@call pomlink.bat
@call setenv.bat
java com.watano.util.mvn.MvnUtil upversions
pause
