<#assign null='__null__' />

<#function toString value="" nullValue="" format="">
	<#if value?? && !compare(value, nullValue)>
		<#if format == "" && value?is_date>
			<#return value?string(DateFormat)/>
		<#elseif value?is_boolean>
			<#return value?string("true","false")/>
		<#else>
			<#if format==""><#return value?string />
			<#else><#return value?string(format) />
			</#if>
		</#if>
	<#else>
		<#return ""/>
	</#if>
</#function>

<#function isNull value='' null=''>
	<#return (value!null) == null>
</#function>

<#function isNotNull value='' null=''>
	<#return !isNull(value, null)>
</#function>

<#function tag name text="">
	<#assign returntext><#compress><${name}<#if text=="">/<#else>>${text}</${name}</#if>></#compress></#assign>
	<#return returntext>
</#function>

<#function value value default="" nullValue="">
	<#return (value?? && value != nullValue)?string(value, default)>
</#function>

<#function listText lst prefix="" postfix="" split=",">
	<#if lst?? && lst?size gt 0>
		<#assign outputText='' />
		<#list lst as item>
			<#if isNotNull(item)>
				<#assign outputText=outputText+item+split  />
			</#if>
		</#list>
		<#if outputText?ends_with(split)><#assign outputText=outputText?substring(0, outputText?length-split?length)  /></#if>
		<#if outputText?trim != ''><#return prefix+outputText+postfix></#if>
	</#if>
	<#return ''>
</#function>

<#function existing4SectionValue section item>
	<#return (.vars[section])?? && (.vars[section][item])??>
</#function>

<#function sectionItemText section item prefix="" postfix="" defalut=''>
	<#if existing4SectionValue(section, item)>
		<#assign outputText=.vars[section][item] />
		<#return (outputText='')?string('', prefix+outputText+postfix)>
	<#else>
		<#return defalut>
	</#if>
</#function>

<#function title name prefix="" options={} defalut=name>
	<#return vartext('title', name, prefix, options, defalut) />
</#function>

<#function vartext key name prefix="" options={} defalut=''>
	<#assign varkey=(prefix=='')?string('', prefix+'.')+name+'.'+key />
	<#return (options[varkey])!(.vars[varkey])!defalut />
</#function>

<#function jsoption key name prefix="" options={} defalut=''>
	<#assign value=vartext(key, name, prefix, options, defalut) />
	<#return (value=='')?string('', key+':'+value)>
</#function>

<#function jsoption1 key name prefix="" options={} defalut=''>
	<#assign value=vartext(key, name, prefix, options, defalut) />
	<#return (value=='')?string('', key+':"'+value+'"')>
</#function>

<#function jsmap lst>
	<#return listText(lst, '{','}\r\n', ',')>
</#function>

<#function jsarray lst>
	<#return listText(lst, '[',']\r\n')>
</#function>

<#-- unit test functions -->
<#function assert expected actual>
	<#if expected!=actual>${log('ERROR', '['+expected+' != '+actual+']')}</#if>
	<#return ''>
</#function>

<#function assertTrue actual>
	<#if !(actual?is_boolean && actual == true)>${log('ERROR', 'it is not true')}</#if>
	<#return ''>
</#function>

<#function assertFalse actual>
	<#if !(actual?is_boolean && actual == false)>${log('ERROR', 'it is not false')}</#if>
	<#return ''>
</#function>

<#function assertNull actual>
	<#return f.assertTrue(actual==null) />
</#function>

<#function assertNotNull actual>
	<#return f.assertTrue(actual!=null) />
</#function>

<#-- unit test functions end -->


