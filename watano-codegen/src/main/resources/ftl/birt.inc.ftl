<#assign REPORT_ID=100 />

<#function rpt_id>
	<#assign REPORT_ID=REPORT_ID+1 />
	<#return REPORT_ID />
</#function>

<#assign DataTypes={'string':'12', 'date':'91','decimal':'-5'} />
<#macro reportxml version="3.2.15" id=rpt_id()
	createdBy="Eclipse BIRT Designer Version 2.5.0.v20090603 Build &lt;2.5.0.v20090617-0630>"
	units="in"
	comments="Copyright (c) 2007 &lt;&lt;Your Company Name here>>"
	description="Creates a blank report with no predefined content."
	displayName="Blank Report"
	iconFile="/templates/blank_report.gif"
	layoutPreference="auto layout"
>
<?xml version="1.0" encoding="UTF-8"?>
<report xmlns="http://www.eclipse.org/birt/2005/design" version="${version}" id="${id}">
	<property name="createdBy">${createdBy}</property>
    <property name="units">${units}</property>
    <property name="comments">${comments}</property>
    <html-property name="description">${description}</html-property>
    <text-property name="displayName">${displayName}</text-property>
    <property name="iconFile">${iconFile}</property>
    <property name="layoutPreference">${layoutPreference}</property>
	<#nested>
</report>
</#macro>

<#--
<#assign report={
'version':'report[@version]',
'id':'report[@id]',
'createdBy':"report/property[@name='createdBy']",
'units':"report/property[@name='units']",
'comments':"report/property[@name='comments']",
'description':"report/html-property[@name='description']",
'displayName':"report/text-property[@name='displayName']",
'iconFile':"report/property[@name='iconFile']",
'layoutPreference':"report/property[@name='layoutPreference']",
'iconFile':"report/property[@name='iconFile']"
} />
-->

<#macro datasource  name="Data Source" id=rpt_id() beforeOpen=''
	odaDriverClass='org.postgresql.Driver'
	odaURL='jdbc:postgresql://localhost/cgytest' odaUser='postgres' odaPassword='eyjlhy3lx'>
		<oda-data-source extensionID="org.eclipse.birt.report.data.oda.jdbc" name="${name?xml}" id="${id}">
        	<#if (beforeOpen!'') != ''><method name="beforeOpen"><![CDATA[${beforeOpen}]]></method></#if>
            <property name="odaDriverClass">${odaDriverClass}</property>
            <property name="odaURL">${odaURL}</property>
            <property name="odaUser">${odaUser}</property>
            <encrypted-property name="odaPassword" encryptionID="base64">${odaPassword}</encrypted-property>
        </oda-data-source>
</#macro>

<#macro odaDataSet  name="Data Source" id=rpt_id() cols=[] dataSource='' beforeOpen='' designerValues=''>
		<oda-data-set extensionID="org.eclipse.birt.report.data.oda.jdbc.JdbcSelectDataSet" name="${name}" id="${id}">
            <list-property name="columnHints">
            <#assign ComputedColumns=[] />
            <#list cols as col>
            	<#if col[0]?starts_with('$')>
	            	<#assign ComputedColumn>
	                <structure>
	                    <property name="name">${(col[0]?substring(1))?xml}</property>
	                    <expression name="expression">${col[1]}</expression>
	                    <property name="dataType">${(col[2])?xml}</property>
	                </structure>
	            	</#assign>
	            	<#assign ComputedColumns=ComputedColumns+[ComputedColumn] />
            	<#else>
                <structure>
                    <property name="columnName">${(col[0])?xml}</property>
                    <property name="displayName">${(col[1])?xml}</property>
                </structure>
                </#if>
            </#list>
            </list-property>
            <#if ComputedColumns?size gt 0>
            <list-property name="computedColumns">
            <#list ComputedColumns as ComputedColumn>
            	${ComputedColumn}
            </#list>
            </list-property>
            </#if>
            <structure name="cachedMetaData">
                <list-property name="resultSet">
	            <#list cols as col>
	                <structure>
						<property name="position">${col_index+1}</property>
	                    <property name="name">${col[0]?starts_with('$')?string(col[0]?substring(1), col[0])}</property>
	                    <property name="dataType">${(col[2])?xml}</property>
	                </structure>
	            </#list>
				</list-property>
            </structure>
            <#if (beforeOpen!'') != ''><method name="beforeOpen"><![CDATA[${beforeOpen}]]></method></#if>
            <property name="dataSource">${dataSource?xml}</property>
            <list-property name="resultSet">
	            <#list cols as col>
	            <#if !col[0]?starts_with('$')>
	                <structure>
	                    <property name="position">${col_index+1}</property>
	                    <property name="name">${(col[0])?xml}</property>
	                    <property name="nativeName">${(col[1])?xml}</property>
	                    <property name="dataType">${(col[2])?xml}</property>
	                    <property name="nativeDataType">${(DataTypes[col[2]])?xml}</property>
	                </structure>
	            </#if>
	            </#list>
            </list-property>
            <xml-property name="queryText"><![CDATA[<#nested>]]></xml-property>
            <#if (designerValues!'') != ''><xml-property name="designerValues"><![CDATA[${designerValues}]]></xml-property></#if>
        </oda-data-set>
</#macro>

<#macro styles>
    <styles>
        <style name="crosstab" id="${rpt_id()}">
            <property name="borderBottomColor">#CCCCCC</property>
            <property name="borderBottomStyle">solid</property>
            <property name="borderBottomWidth">1pt</property>
            <property name="borderLeftColor">#CCCCCC</property>
            <property name="borderLeftStyle">solid</property>
            <property name="borderLeftWidth">1pt</property>
            <property name="borderRightColor">#CCCCCC</property>
            <property name="borderRightStyle">solid</property>
            <property name="borderRightWidth">1pt</property>
            <property name="borderTopColor">#CCCCCC</property>
            <property name="borderTopStyle">solid</property>
            <property name="borderTopWidth">1pt</property>
        </style>
        <style name="crosstab-cell" id="${rpt_id()}">
            <property name="borderBottomColor">#CCCCCC</property>
            <property name="borderBottomStyle">solid</property>
            <property name="borderBottomWidth">1pt</property>
            <property name="borderLeftColor">#CCCCCC</property>
            <property name="borderLeftStyle">solid</property>
            <property name="borderLeftWidth">1pt</property>
            <property name="borderRightColor">#CCCCCC</property>
            <property name="borderRightStyle">solid</property>
            <property name="borderRightWidth">1pt</property>
            <property name="borderTopColor">#CCCCCC</property>
            <property name="borderTopStyle">solid</property>
            <property name="borderTopWidth">1pt</property>
        </style>
        <style name="NewStyle" id="${rpt_id()}">
            <property name="borderBottomStyle">solid</property>
            <property name="borderBottomWidth">thin</property>
            <property name="borderLeftStyle">solid</property>
            <property name="borderLeftWidth">thin</property>
            <property name="borderRightStyle">solid</property>
            <property name="borderRightWidth">thin</property>
            <property name="borderTopStyle">solid</property>
            <property name="borderTopWidth">thin</property>
        </style>
    </styles>
    <page-setup>
        <simple-master-page name="Simple MasterPage" id="${rpt_id()}">
            <property name="topMargin">1in</property>
            <property name="leftMargin">1.25in</property>
            <property name="bottomMargin">1in</property>
            <property name="rightMargin">1.25in</property>
        </simple-master-page>
    </page-setup>
</#macro>

<#macro parameters params={
	'dbdriver':'org.postgresql.Driver',
	'url':'jdbc:postgresql://localhost/cgytest',
	'username':'postgres',
	'password':'ZXlqbGh5M2x4',
	'orgids':"'10131000','10221000','10321000','10331000','10341000','10361000','10371000','10381000','10401000','10451000','10481000','10491000','10501000','10351000','10241000','12561000','14271000','28591000','12541000','12551000','12531000','34161000','10271000','12381000','12401000','12391000','10281000','11751000','11761000','11781000','28201000','11771000','10411000','11481000','11491000','10521000','10731000','12201000','12211000','10681000','30221000','30231000','30241000','30251000','30261000','35151000','10721000','30271000','30281000','10691000','30701000','30711000','30721000','10701000','30311000','30331000','30321000','13271000','13351000','13361000','10531000','12951000','12961000','12971000','12941000','12981000','13001000','13011000','13021000','13031000','12931000','12921000','10581000','13461000','13471000','13451000','13481000','10591000','13301000','13311000','13291000','13321000','13281000','10421000','12271000','12351000','12301000','12361000','10431000','34631000','12261000','12251000','10571000','14411000','12891000','12861000','12871000','12881000','10541000','13491000','13501000','12371000','13221000','13251000','13261000','13241000','10231000','11301000','12131000','12141000','34701000','34711000','34721000','10251000','12461000','12471000','12481000','12491000','12501000','12511000','12521000','10461000','14131000','12311000','12321000','10301000','11871000','11891000','11881000','10311000','12411000','12421000','10511000','10651000','11341000','11331000','11351000','11361000','11321000','10661000','11451000','11441000','10671000','11461000','11471000','10551000','12611000','12621000','12631000','12651000','10631000','13991000','14001000','14011000','26581000','10391000','14391000','14401000','10261000','12161000','12171000','12151000','12191000','12181000','10561000','13941000','13971000','13981000','13951000','13961000','14321000','14331000','14351000','14291000','10291000','11401000','11411000','11421000','11431000','28571000','10441000','12571000','12591000','12581000','10611000','10781000','13211000','13201000','10771000','12901000','12911000','10791000','14051000','14041000','14091000','36881000','10471000','12451000','12441000','12431000','10601000','10741000','13821000','13811000','13801000','13791000','10761000','13881000','13891000','10751000','13841000','13831000','14371000','13901000','13861000','13911000','13871000','13921000','13931000','10621000','10811000','13391000','13401000','10821000','13411000','13421000','10831000','13431000','13441000','10841000','10801000','13371000','13381000','10641000','10891000','13711000','13721000','13731000','13741000','20381000','20391000','20401000','20411000','10871000','20421000','20431000','20441000','20451000','20461000','10851000','13531000','20501000','20511000','10901000','10861000','13591000','20471000','20481000','20491000'",
	'strYear':'2011',
	'orgname':'昆明供电局党委'}>
    <parameters>
    	<#list params?keys as key>
        <scalar-parameter name="${key}" id="${rpt_id()}">
            <property name="hidden">true</property>
            <property name="valueType">static</property>
            <property name="dataType">string</property>
            <property name="distinct">true</property>
            <simple-property-list name="defaultValue">
                <value type="constant">${params[key]}</value>
            </simple-property-list>
            <list-property name="selectionList"/>
            <property name="paramType">simple</property>
            <property name="concealValue">true</property>
            <property name="controlType">text-box</property>
            <structure name="format">
                <property name="category">Unformatted</property>
            </structure>
        </scalar-parameter>
        </#list>
    </parameters>
</#macro>

<#macro grid id=rpt_id() cols=1 dataSet='' boundDataColumns={} colwidths=[]>
<#assign grid_cols=cols />
<#assign grid_cell_index=0 />
<#assign grid_row_index=0 />
	<grid id="${rpt_id()}">
        <property name="dataSet">dy</property>
        <list-property name="boundDataColumns">
        <#list boundDataColumns as col>
        	<#if col[0]?starts_with('$')>
        	<structure>
            	<property name="name">${(col[0]?substring(1))}</property>
                <expression name="expression" type="javascript">${col[1]}</expression>
                <property name="dataType">${col[2]}</property>
            </structure>
        	<#else>
        	<structure>
            	<property name="name">${col[1]}</property>
                <text-property name="displayName">${col[0]}</text-property>
                <expression name="expression" type="javascript">dataSetRow["${col[0]}"]</expression>
                <property name="dataType">${col[2]}</property>
            </structure>
            </#if>
        </#list>
        </list-property>
        <structure name="toc"/>
        <property name="width">100%</property>
        <#list 0..cols-1 as col>
        <column id="${rpt_id()}" >
        	<property name="width">${colwidths[col]}</property>
        </column>
        </#list>
		<#nested>
	</grid>
</#macro>

<#macro cell colSpan=1 rowSpan=1 border=false>
<#assign nestedText><#nested></#assign>
<#if grid_cell_index==0><row id="${rpt_id()}"><#assign grid_row_index=grid_row_index+1 /></#if>
<#assign grid_cell_index=grid_cell_index+colSpan />
		<cell id="${rpt_id()}" ${(nestedText?length gt 0 || colSpan gt 1 || rowSpan gt 1 || border)?string('>','/>')}
		<#if colSpan gt 1><property name="colSpan">${colSpan}</property></#if>
		<#if rowSpan gt 1><property name="rowSpan">${rowSpan}</property></#if>
		<#if border>
		    <property name="borderBottomColor">#000000</property>
            <property name="borderBottomStyle">solid</property>
            <property name="borderBottomWidth">thin</property>
            <property name="borderLeftColor">#000000</property>
            <property name="borderLeftStyle">solid</property>
            <property name="borderLeftWidth">thin</property>
            <property name="borderRightColor">#000000</property>
            <property name="borderRightStyle">solid</property>
            <property name="borderRightWidth">thin</property>
            <property name="borderTopColor">#000000</property>
            <property name="borderTopStyle">solid</property>
            <property name="borderTopWidth">thin</property>
		</#if>
			${(nestedText?length gt 0)?string(nestedText,'')}
		${(nestedText?length gt 0 || colSpan gt 1 || rowSpan gt 1 || border)?string('</cell>','')}
<#if grid_cell_index gt grid_cols-1>
	<#assign grid_cell_index=0 />
	</row>
</#if>
</#macro>

<#macro text fontWeight='normal' textAlign='' contentType='auto' text=''>
<text id="${rpt_id()}">
	<property name="fontWeight">${fontWeight}</property>
	<property name="textAlign">${textAlign}</property>
	<property name="contentType">${contentType}</property>
	<text-property name="content"><![CDATA[${text?xml}]]></text-property>
</text>
</#macro>

<#macro data col>
	<data id="${rpt_id()}">
		<property name="resultSetColumn">${col}</property>
	</data>
</#macro>

<#macro printbtn>
<text id="${rpt_id()}">
	<list-property name="visibility">
		<structure>
			<property name="format">xls</property>
			<expression name="valueExpr">true</expression>
		</structure>
		<structure>
			<property name="format">postscript</property>
			<expression name="valueExpr">true</expression>
		</structure>
		<structure>
			<property name="format">pdf</property>
			<expression name="valueExpr">true</expression>
		</structure>
		<structure>
			<property name="format">doc</property>
			<expression name="valueExpr">true</expression>
		</structure>
	</list-property>
	<property name="contentType">html</property>
	<text-property name="content"><![CDATA[<style media=print>
  .Noprint{display:none;}
  .PageNext{page-break-after: always;}
</style>

<center class="Noprint">
<p>
 <OBJECT  id=WebBrowser classid=CLSID:8856F961-340A-11D0-A96B-00C04FD705A2 height=0 width=0>
 </OBJECT>
 <input type="button" value="打印" onclick="javascript:toggleVisibility(this)">
</p>
</center>

<script language="JavaScript">
 function toggleVisibility(me){
	if(me.style.visibility=="hidden"){
		me.style.visibility="visible";
	}else{
		me.style.visibility="hidden";
	}
	window.print();
 }
</script>]]></text-property>
</text>
</#macro>



