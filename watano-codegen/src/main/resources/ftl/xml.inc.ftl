<#macro nvp type nvps>
	<${type}>
	<#list nvps?keys as key>
		<${key}>${nvps[key]}</${key}>
	</#list>
	<#nested>
	</${type}>
</#macro>

