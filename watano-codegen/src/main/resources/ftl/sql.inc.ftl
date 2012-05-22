<#if !queryMode??>
<#--
1-动态生成
2-全静态ql,使用条件判断e.g:
($P{customer_id}=-1 or so.customer.id=$P{customer_id})
-->
	<#global queryMode=1/>
</#if>
<#if !paramMode??>
<#--
1-参数直接写到sql;
2-参数使用?占位符;
3-参数使用jasper report类的{paramName}占位符
-->
	<#global paramMode=1/>
</#if>
<#if !debug??>
	<#global debug=false/>
</#if>
<#if !params??>
	<#assign query_params={}/>
</#if>

<#function indent>
	<#return debug?string('\r\n    ','')>
</#function>

<#function name n>
	<#return n?replace('.', '_')?trim>
</#function>

<#function select fields>
	<#assign sql="select "/>
	<#list fields?split(',') as field>
		<#if !(field?contains(' as ')) && field?contains('.')>
			<#assign sql=sql+indent()+ field?trim+" as "+field?replace('.', '_')?trim + ',' />
		<#else>
			<#assign sql=sql+indent()+ field?trim + ',' />
		</#if>
	</#list>
	<#assign sql=sql?trim />
	<#return ((sql?ends_with(','))?string(sql?substring(0, sql?length-1), sql))>
</#function>

<#function timeSeriesField field>
	<#return 
	indent()+"(hour(${field}) || '-00~' || hour(${field})+1 || '-00') as ${name(field)}_Series,"+ 
	indent()+"(day(${field})+month(${field})*100+year(${field})*10000) as ${name(field)}_daynum,"+ 
	indent()+"(month(${field})||'.'||day(${field})) as ${name(field)}_month_day,"+ 
	indent()+"month(${field}) as ${name(field)}_month,"+ 
	indent()+"year(${field}) as ${name(field)}_year,"+ 
	indent()+"day(${field}) as ${name(field)}_day,"+ 
	indent()+"${field} as ${name(field)}" >
</#function>

<#function param name default>
	<#if paramMode=1>
		<#return query_params[name]!default>
	<#elseif paramMode=2>
		<#return '?'>
	<#elseif paramMode=3>
		<#return "$P{${name}}" />
	</#if>
</#function>

<#function num cond field paramname=name(field) default=-1>
	<#if cond='in'>
		<#if queryMode=1>
			<#return "${field} in (${param(paramname, default)})" />
		<#elseif queryMode=2>
			<#return "(-1 in (${param(paramname, default)}) or ${field} in (${param(paramname, default)}))" />
		</#if>
	<#else>
		<#if queryMode=1>
			<#return "${field} ${cond} ${param(paramname, default)}" />
		<#elseif queryMode=2>
			<#return "(-1 = ${param(paramname, default)} or ${field} ${cond} ${param(paramname, default)})" />
		</#if>
	</#if>
</#function>

<#function text cond field paramname=name(field) default=-1>
	<#if cond='xlikex'>
		<#if queryMode=1>
			<#return "${field} like '%${param(paramname, default)}%'" />
		<#elseif queryMode=2>
			<#return "('' = '${param(paramname, default)}' or ${field} like '%${param(paramname, default)}%')" />
		</#if>
	<#elseif cond='xlike'>
		<#if queryMode=1>
			<#return "${field} like '%${param(paramname, default)}'" />
		<#elseif queryMode=2>
			<#return "('' = '${param(paramname, default)}' or ${field} like '%${param(paramname, default)}')" />
		</#if>
	<#elseif cond='likex'>
		<#if queryMode=1>
			<#return "${field} like '${param(paramname, default)}%'" />
		<#elseif queryMode=2>
			<#return "('' = '${param(paramname, default)}' or ${field} like '${param(paramname, default)}%')" />
		</#if>
	<#else>
		<#if queryMode=1>
			<#return "${field} = '${param(paramname, default)}'" />
		<#elseif queryMode=2>
			<#return "('' = '${param(paramname, default)}' or ${field} = '${param(paramname, default)}')" />
		</#if>
	</#if>	
</#function>

<#function period field param_start='2011-01-01' param_end='2111-01-01' start='startDate' end='endDate'>
	<#return "(${field} >= '${param(start, param_start)}' and ${field} <= '${param(end, param_end)}')" />
</#function>

