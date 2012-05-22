<#macro properties nvp={}>
	<properties>
	<#list nvp?keys	as key>
		${f.tag(key,nvp[key])}
	</#list>
	</properties>
</#macro>

<#macro project	groupId	artifactId modelVersion="4.0.0"	name=artifactId	packaging="jar"	version="1.0.0"	>
<?xml version="1.0"	encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>${modelVersion}</modelVersion>
	<groupId>${groupId}</groupId>
	<artifactId>${artifactId}</artifactId>
	<name>${name}</name>
	<#if packaging != ""><packaging>${packaging}</packaging></#if>
	<version>${(version)!"1.0.0"}</version>
	<#nested>
</project>
</#macro>

<#macro repositories repos=[] repositories={}>
	<#if repos?size	gt 0>
	<repositories>
	<#list repos as	repo>
		<repository>
		${f.tag("id",repo)}
		${f.tag("name",repo)}
		${f.tag("url",repositories[repo])}
		</repository>
	</#list>
		<#nested>
	</repositories>
	</#if>
</#macro>

<#macro properties nvp={}>
	<properties>
	<#list nvp?keys	as key>
		${f.tag(key,nvp[key])}
	</#list>
	</properties>
</#macro>

<#macro dependencies ids={}>
	<dependencies>
	<#-- <#list	ids?keys?sort as artifactId> -->
	<#list __section_item_names__['dependencies'] as artifactId>
		<dependency>
			${f.tag("groupId",artifacts[artifactId][0])}
			${f.tag("artifactId",artifactId)}
			${f.tag("version",f.value(ids[artifactId],artifacts[artifactId][2]))}
			<#t><#if artifacts[artifactId][1] != "">
			${f.tag("scope",artifacts[artifactId][1])}
			</#if>
			<#if exclusions?keys?seq_contains(artifactId)>
			<exclusions>
				<#list exclusions[artifactId] as exclusion>
				<exclusion>
					${f.tag("groupId",artifacts[exclusion][0])}
					${f.tag("artifactId",exclusion)}
				</exclusion>
				</#list>
			</exclusions>
			</#if>
		</dependency>
	</#list>
	</dependencies>
</#macro>

<#macro plugins ids={}>
	<plugins>
		<#-- <#list	ids?keys as	pluginId> -->
		<#list __section_item_names__['plugins'] as	pluginId>
		<plugin>
			${f.tag("groupId",artifacts[pluginId][0])}
			${f.tag("artifactId",pluginId)}
			${f.tag("version",artifacts[pluginId][2])}
			<#if configurations?keys?seq_contains(pluginId)>
			<configuration>
				${configurations[pluginId]}
			</configuration>
			</#if>
			<#if pluginId='maven-source-plugin'>
			<executions>
			  <execution>
				<id>attach-sources</id>
				<phase>verify</phase>
				<goals>
				  <goal>jar-no-fork</goal>
				</goals>
			  </execution>
			</executions>
			</#if>
		</plugin>
		</#list>
	</plugins>
</#macro>
