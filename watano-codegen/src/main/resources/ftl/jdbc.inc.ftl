<#macro execsql>
	<#assign sql><#nested></#assign>
	${ExecSql(sql)}
</#macro>

<#macro renderSql2Table ds>
	<#assign sql><#nested></#assign>
	<#if (debug!false)>
	<pre>${sql}</pre>
	<#return>
	</#if>
	<#assign results=QuerySql(ds, sql) />
<table border="1">
<#list results as row>
	<tr>
		<#if row_index==0>
		<#list row as column>
			<td>${((column[0])!"&nbsp;")?string}</td>
		</#list>
		<#else>
		<#list row as column>
			<td>${(column!"<null>")?string}</td>
		</#list>
		</#if>
	</tr>
</#list>
</table>
</#macro>

