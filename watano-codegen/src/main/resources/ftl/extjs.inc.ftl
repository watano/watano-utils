<#macro onReady>
Ext.onReady(function(){
<#nested>
});
</#macro>

<#macro viewport id='viewport' layout='border'>
var ${id} = new Ext.Viewport({
	layout: '${layout}',
    items: [<#nested>]
});
</#macro>

<#macro TagBoxComponent  region height tag='div' >
<#assign nestedHTML><#nested></#assign>
new Ext.BoxComponent({
	region: '${region}',
	height: ${height},
	autoEl: {
		tag: '${div}',
		html:'${nestedHTML?js_string}'
	}
})
</#macro>

<#macro click target>
<@on target=target event='click'><#nested></@on>
</#macro>

<#macro on target event>
Ext.get("${target}").on('${event}', function(){
<#nested>
});
</#macro>

<#macro TabPanel region='center' deferredRender=false activeTab=0 titles=[] contentELs=[]>
new Ext.TabPanel({
	region: '${region}',
    deferredRender: ${deferredRender?string('true','false')},
    activeTab: ${activeTab},
    items: [
    <#list titles as title>
	    {
			contentEl: '${(contentELs[title_index])!(region+'_tab_'+title_index)}',
	        title: '${title}',
	        autoScroll: true
		}${(title_index+1<titles?size)?string(',','')}
    </#list>]
})
</#macro>