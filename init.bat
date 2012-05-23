@call jset
cd .\watano-codegen
@call pomlink.bat
@call setenv.bat
call :pomxml watano-commons
call :pomxml watano-codegen
call :pomxml watano-tinyweb
cd ..
@call mvn clean install -Dmaven.test.skip=true eclipse:eclipse -DdownloadJavadocs=false -DdownloadSources=true -Declipse.useProjectReferences=true
goto :end

:pomxml
cd ..\%1
java com.watano.util.mvn.MvnUtil pomxml
goto :eof

:end
pause
