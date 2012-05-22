<?xml version="1.0" encoding="UTF-8"?>
<classpath>
	<classpathentry excluding="**/.svn/" kind="src" output="target/test-classes" path="src/test/java"/>
	<classpathentry excluding="**/.svn/" kind="src" output="target/test-classes" path="src/test/resources"/>
	<classpathentry excluding="**/.svn/" kind="src" path="src/main/java"/>
	<classpathentry excluding="**/.svn/" kind="src" path="src/main/resources"/>
<#list __section_item_names__['dependencies'] as artifactId>
	<#assign artifactVersion=f.value(dependencies[artifactId],artifacts[artifactId][2]) />
	<#assign artifactDir=(artifacts[artifactId][0])?replace('.','/')+'/'+artifactId+'/'+artifactVersion />
	<classpathentry kind="var" path="M2_REPO/${artifactDir}/${artifactId}-${artifactVersion}.jar" sourcepath="M2_REPO/${artifactDir}/${artifactId}-${artifactVersion}-sources.jar"/>
</#list>
	<classpathentry kind="con" path="org.eclipse.jdt.launching.JRE_CONTAINER"/>
	<classpathentry kind="output" path="target/classes"/>
</classpath>
