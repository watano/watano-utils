set M2_REPO=e:\documents\.m2\repository
set liblinkdir=${(packaging=='war')?string('WebRoot\\WEB-INF\\lib', 'target\\lib')}
rmdir /s /q %liblinkdir%
mkdir %liblinkdir%
mkdir %liblinkdir%\sources
<#list __section_item_names__['dependencies'] as artifactId>
<#if artifacts[artifactId][1] != "runtime" && artifacts[artifactId][1] != "provided" >
	<#assign artifactVersion=f.value(dependencies[artifactId],artifacts[artifactId][2]) />
	<#assign artifactDir=(artifacts[artifactId][0])?replace('.',"\\")+'\\'+artifactId+'\\'+artifactVersion />
mklink /h %liblinkdir%\${artifactId}-${artifactVersion}.jar %M2_REPO%\${artifactDir}\${artifactId}-${artifactVersion}.jar
mklink /h %liblinkdir%\sources\${artifactId}-${artifactVersion}-sources.jar %M2_REPO%\${artifactDir}\${artifactId}-${artifactVersion}-sources.jar
</#if>
</#list>
pause
