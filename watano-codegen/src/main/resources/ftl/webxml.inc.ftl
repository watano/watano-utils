<#macro webapp encoding="utf-8" display_name="" description=display_name>
<?xml version="1.0" encoding="${encoding}"?>
<web-app version="2.4" xmlns="http://java.sun.com/xml/ns/j2ee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee http://java.sun.com/xml/ns/j2ee/web-app_2_4.xsd">
	<display-name>${display_name}</display-name>
	<description>${description}</description>
	<#nested>
</web-app>
</#macro>

<#macro param key value="" type="context-param" >
	<@xml.nvp type=type nvps={"param-name":key,"param-value":value} />
</#macro>

<#macro config key value="" type="session-config" >
	<@xml.nvp type=type nvps={key:value} />
</#macro>

<#macro filter id class url_pattern="" init={} dispatchers=[] loadonstartup=''>
	<filter>
		<filter-name>${id}</filter-name>
		<filter-class>${class}</filter-class>
		<#list init?keys as key>
		<init-param>
			<param-name>${key}</param-name>
			<param-value>${init[key]}</param-value>
		</init-param>
		</#list>
		<#if loadonstartup!=''><load-on-startup>${loadonstartup}</load-on-startup></#if>
	</filter>

	<filter-mapping>
		<filter-name>${id}</filter-name>
		<url-pattern>${url_pattern}</url-pattern>
		<#list dispatchers as dispatcher>
		<dispatcher>${dispatcher}</dispatcher>
		</#list>
	</filter-mapping>
</#macro>

<#macro listener class="">
	<@xml.nvp type="listener" nvps={"listener-class":class} />
</#macro>

<#macro mapping class name=class url_pattern="" servlet_name="" init={} params={} type="servlet">
	<@xml.nvp type=type nvps={type+"-name":name, type+"-class":class}+params >
		<#list init?keys as key>
			<@param type="init-param" key=key value=init[key] />
		</#list>
		<#nested>
	</@xml.nvp>
	<@xml.nvp type=type+"-mapping" nvps={type+"-name":name}>
		<#if url_pattern!=""><url-pattern>${url_pattern}</url-pattern>
		<#elseif servlet_name!=""><servlet-name>${servlet_name}</servlet-name></#if>
	</@xml.nvp>
</#macro>

<#macro error_page exceptions={} codes={}>
	<#list exceptions?keys as exception>
	<error-page>
		<exception-type>${exception}</exception-type>
		<location>${exceptions[exception]}</location>
	</error-page>
	</#list>
	<#list codes?keys as code>
	<error-page>
		<error-code>${code}</exception-type>
		<location>${codes[code]}</location>
	</error-page>
	</#list>
</#macro>

<#macro welcome_file files>
	<welcome-file-list>
		<#list files as file>
		<welcome-file>${file}</welcome-file>
		</#list>
	</welcome-file-list>
</#macro>

<#macro mime_mapping types>
	<mime-mapping> 
		<#list types?keys as type>
		<extension>${type}</extension>
		<mime-type>${types[type]}</mime-type>
		</#list>
	</mime-mapping>
</#macro>
