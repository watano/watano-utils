<#macro imports base=''>
	<@html.link href=base+'/themes/redmond/jquery-ui-1.8.2.custom.css' media="screen" />
	<@html.link href=base+'/themes/ui.jqgrid.css' media="screen" />
	<@html.link href=base+'/themes/ui.multiselect.css' media="screen" />
	<@html.script src=base+'/js/jquery.min.js' />
	<@html.script src=base+'/js/jquery-ui-1.8.2.custom.min.js' />
	<@html.script src=base+'/js/i18n/grid.locale-en.js' />
	<@html.script>
		$.jgrid.no_legacy_api = true;
		$.jgrid.useJSON = true;
	</@html.script>
	<@html.script src=base+'/js/jquery.jqGrid.min.js' />
	<@html.script src=base+'/js/jquery.tablednd.js' />
	<@html.script src=base+'/js/jquery.contextmenu.js' />
	<@html.script src=base+'/js/ui.multiselect.js' />
</#macro>

<#macro init id datatype='local' height=''  caption='' coldefs=[]
	multiselect=false prefix='' options={}>
<#assign colNames=[] />
<#assign colModels=[] />
<#list coldefs as coldef>
	<#assign colNames = colNames + ['"'+f.title(coldef[2], prefix, options)+'"'] />
	<#assign colModels = colModels +[f.jsmap([
		"name:'${coldef[0]}'",
		"index:'${coldef[0]}'",
		f.jsoption('width', coldef[2], prefix, options, '60'),
		f.jsoption('sortable', coldef[2], prefix, options),
		f.jsoption1('sorttype', coldef[2], prefix, options, sorttype(coldef[3]))
		])
	] />
</#list>
jQuery("${id}").jqGrid({
	datatype: "${datatype}",
	height: '${height}',
	colNames:${f.jsarray(colNames)},
	colModel:${f.jsarray(colModels)},
	${multiselect?string('multiselect: true,','')}
	caption: "${caption}"
});
</#macro>

<#function sorttype columnClassName>
<#switch columnClassName>
<#case "java.lang.Integer">
<#case "java.lang.Long">
	<#return "int" />
<#case "java.lang.Double">
<#case "java.lang.Float">
	<#return "float" />
<#case "java.sql.Timestamp">
	<#return "date" />
<#default>
	<#return "" />
</#switch>
</#function>

<#function results2json results prefix='' options={}>
	<#assign resultsarray=[] />
	<#list results as result><#if result_index!=0>
		<#assign resultsmap=[] />
		<#list results[0] as coldef>
			<#switch coldef[3]>
			<#case "java.lang.Integer">
			<#case "java.lang.Long">
			<#case "java.lang.Double">
			<#case "java.lang.Float">
				<#assign resultsmap=resultsmap+['${coldef[0]}:${(result[coldef_index])!"(null)"}'] />
				<#break>
			<#case "java.sql.Timestamp">
				<#assign resultsmap=resultsmap+['${coldef[0]}:"${(result[coldef_index])!"(null)"}"'] />
				<#break>
			<#default>
				<#assign resultsmap=resultsmap+['${coldef[0]}:"${(result[coldef_index])!"(null)"}"'] />
				<#break>
			</#switch>
		</#list>
		<#assign resultsarray=resultsarray+[f.jsmap(resultsmap)] />
	</#if></#list>
	<#return f.jsarray(resultsarray) />
</#function>
