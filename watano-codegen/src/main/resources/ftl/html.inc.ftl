<#--------------------function-------------------->
<#function attr name value=''>
<#return f.isNull(value)?string('', name+'="'+value+'"')>
</#function>

<#function tag name text="">
	<#assign returntext><#compress><${name}${isNull(text)?string('/', '>'+text+'</'+name)}></#compress></#assign>
	<#return returntext>
</#function>

<#function a text href='' class='' target=''>
<#assign ahtml><a ${attr('class', class)} ${attr('target', target)} ${attr('href', href)}>${text}</a></#assign>
<#return ahtml>
</#function>

<#function nbsp count=1>
	<#assign v='' />
	<#list 1..count as i>
		<#assign v=v+'&#160;' />
	</#list>
		<#return v />
</#function>

<#--------------------macro-------------------->
<#macro html title='' encoding='utf-8' type='html', standard='strict' description='' keywords='' robots=false
httpequivs={
	"cache-control":"no-cache",
	<#-- "expires":"mon, 22 jul 2002 11:12:01 GMT", -->
	"pragma":"no-cache"}
	>
<#if type='html'>
<#switch standard>
<#case 'strict'><#--HTML 4.01 Strict-->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
	<#break>
<#case 'transitional'><#--HTML 4.01 Transitional-->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
	<#break>
<#case 'frameset'><#--HTML 4.01 Frameset-->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
	<#break>
<#default>
</#switch>
<#elseif type='xhtml'>
<#switch standard>
<#case 'strict'><#--XHTML 1.0  Strict-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
	<#break>
<#case 'transitional'><#--XHTML 1.0  Transitional-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<#break>
<#case 'frameset'><#--XHTML 1.0 Frameset-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
	<#break>
<#case '1.1'><#--XHTML 1.1-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
	<#break>
<#case 'Basic'><#--XHTML Basic 1.1-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">
	<#break>
<#case 'Mobile'><#--XHTML Mobile 1.2-->
<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">
	<#break>
<#case 'RDFa'><#--XHTML+RDFa 1.0-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN" "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
	<#break>
<#default>
</#switch>
<#else><#--XHTML 5-->
<!DOCTYPE HTML>
</#if>
<html ${(type='xhtml')?string('lang="zh-CN" xml:lang="zh-CN" xmlns="http://www.w3.org/1999/xhtml"', '')}>
<head>
	<@meta http_equiv="content-type" content="text/html; charset="+encoding />
	<title>${title}</title>
	<@meta name="description" content=description />
	<@meta name="keywords" content=keywords />
	<#if robots><@meta name="robots" content="noindex, nofollow" /></#if>
	<#list httpequivs?keys as key>
	<@meta http_equiv=key content=httpequivs[key] />
	</#list>
<#nested>
</html>
</#macro>

<#macro meta name='' content='' http_equiv=''>
	<#if http_equiv != ''>
	<meta http-equiv="${http_equiv}" content="${content}" />
	<#else>
	<meta name="${name}" content="${content}" />
	</#if>
</#macro>

<#macro link href rel="stylesheet" type="text/css" onload='' media="">
	<link ${attr('rel', rel)} ${attr('type', type)} ${attr('href', href)} ${attr('onload', onload)} ${attr('media', media)} />
</#macro>

<#macro script src='' type="text/javascript">
	<script ${attr('type', type)} ${attr('src', src)}>
		<#nested>
	</script>
</#macro>

<#macro style type="text/css">
	<style ${attr('type', type)}><#nested></style>
</#macro>

<#macro body class='' onbeforeunload='' style=''>
</head>
<body ${attr('class', class)} ${attr('onbeforeunload', onbeforeunload)}>
<#nested>
</body>
</#macro>

<#--------------------Blueprint CSS Framework-------------------->
<#macro blueprint_init root='css/blueprint'>
	<link rel="stylesheet" href="${root}/screen.css" type="text/css" media="screen, projection" />
	<link rel="stylesheet" href="${root}/print.css" type="text/css" media="print" />
	<!--[if lt IE 8]>
		<link rel="stylesheet" href="${root}/ie.css" type="text/css" media="screen, projection" />
	<![endif]-->
</#macro>

<#macro blueprint width=950 showgrid=true>
<div class="container${showgrid?string(' showgrid','')}"${(width!=950)?string(' style="width:'+width+'px;"','')}>
<#nested>
</div>
</#macro>

<#macro blueprint_row ext=''>
<div class="span-24 last ${ext}">
<#nested>
</div>
</#macro>

<#macro blueprint_col col last=false ext=''>
<div class="span-${col}${last?string(' last','')} ${ext}">
<#nested>
</div>
</#macro>

<#--------------------使用CSS完美实现垂直居中-------------------->
<#macro divmid height=100>
<#--
.divmidouter {
	display:table;
	#position:relative;
	overflow:hidden;
}
.divmidmiddle {
	display:table-cell;
	vertical-align:middle;
	#position:absolute;
	#top:50%;
}
.divmidinner {
	#position:relative;
	#top:-50%;
}
-->
<div class=”divmidouter” style="height:${height}px;">
	<div class=”divmidmiddle”>
		<div class=”divmidinner”>
		<#nested>
		</div>
	</div>
</div>
</#macro>

<#--------------------macro table-------------------->
<#macro table col=4>
	<#assign Table_CellIndex=0 />
	<#assign Table_ColSpan=col />
<table width="100%" border="0" cellpadding="0" cellspacing="0">
	<#nested>
	<#if Table_CellIndex%col != 0><@table_cell col=Table_CellIndex%col /></#if>
</table>
</#macro>

<#macro table_cell col=1 ext=''>
<#t>${(Table_CellIndex%Table_ColSpan = 0)?string('<tr>','')}
	<td${(col=1)?string('',' colspan="'+col+'"')} ${ext}><#nested></td>
<#t><#assign Table_CellIndex=Table_CellIndex+col />${(Table_CellIndex%Table_ColSpan = 0 && Table_CellIndex != 0)?string('</tr>','')}
</#macro>

<#--------------------960 GS-------------------->
<#macro AdaptInit width="960" debug=false><#--width:[mobile,720,960,1200,1560,fluid]-->
<@link href="960gs/code/css/${debug?string('','min/')}reset.css" />
<@link href="960gs/code/css/${debug?string('','min/')}text.css" />
<@link href="960gs/code/css/${debug?string('','min/')}${width}.css" />
<#if debug><@link href="960gs/code/css/demo.css" /></#if>
<@link href="css/common.css" />
<#--
<@script>
var ADAPT_CONFIG = {
dynamic: true,
callback:function(i, width){},
range: [
	'0px    to 760px  = mobile.${debug?string('','mini.')}css',
	'760px  to 980px  = 720.${debug?string('','mini.')}css',
	'980px  to 1280px = 960.${debug?string('','mini.')}css',
	'1280px to 1600px = 1200.${debug?string('','mini.')}css',
	'1600px to 1920px = 1560.${debug?string('','mini.')}css',
	'1920px           = fluid.${debug?string('','mini.')}css'
]
};
</@script>
<@script src='960gs/assets/js/adapt.'+debug?string('','')+'js' />
-->
</#macro>

<#macro maintabs class="" items={} active="">
	<ul id="main-tabs" ${attr('class', class)}>
	<#list items?keys as item>
	<#if item==active>
		<li class="active">
			<a href="#">${item}</a>
		</li>
	<#else>
		<li>
			<a href="${items[item]}">${item}</a>
		</li>
	</#if>
	</#list>
	</ul>
</#macro>