<@html.html title="watano app">
	<@html.link href="css/comm2010044c43.css" />
	<@html.link href="css/setting03dfdf.css" />
	<@html.link href="css/skin16.css" />
	<@html.body class="tbody">
		<div class="txt_title">设置</div>
		<@tabs selected='换肤' 
			actions=[
				html.a('首页','#', 'toptitle'), 
				'换肤',
				html.a('采购','#', 'toptitle'), 
				html.a('配货','#', 'toptitle'), 
				html.a('调拨','#', 'toptitle')
			] />
		<@tabContainer title='给 watano@qq.com 的帐户设置皮肤：'>
			<#assign skininfo={
				'0':'默认皮肤 ',
				'1':'藤蔓绿',
				'2':'枫叶秋',
				'3':'粉红猪',
				'4':'甜蜜橙',
				'5':'梦幻紫',
				'6':'梦星海',
				'7':'淡雅灰',
				'8':'贺新年',
				'10':'蜘蛛侠3',
				'13':'清风竹',
				'14':'水墨情',
				'15':'桃花红',
				'16':'绿野 ',
				'17':'墨影 ',
				'18':'木纹',
				'19':'天台 ',
				'20':'远古',
				'21':'星空',
				'22':'iSkin ',
				'23':'蓝色高原',
				'24':'极简',
				'210':'深蓝',
				'211':'夕阳'
			} />
			<#list skininfo?keys as skin>
				<#if skin='210'>
				<fieldset style="border-width:1px 0 0 0;height:15px;*height:25px;background:none;" class="clr graytext bd">
                        <legend style="margin-left:6px;padding:0 2px;"><span class="black">Foxmail皮肤</span></legend>
                </fieldset>
				</#if>
                <div id="divlayer_${skin}"<#if skin='0'> style="margin:1px 0px;" class="bd attbg"</#if>>
                    <table cellspacing="0" cellpadding="0" border="0" class="pointer clr" onclick="chooseStyle('${skin}');">
                        <tbody>
                            <tr>
                                <td>
                                    <img class="face${skin}" src="image/spacer02340f.gif">
                                </td>
                            </tr>
                            <tr>
                                <td style="font-weight:bold" id="label_${skin}">${skininfo[skin]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
			</#list>
		</@tabContainer>
		<@tabMsg >点击图片即可直接切换皮肤，切换后，设置自动保存。</@tabMsg>
	</@html.body>
</@html.html>

<#macro tabs actions=[] selected=''>
	<div class="settingTitle">
		<div style="margin:0 5px;">
		<#list actions as action>
			<div class="settingSub${(selected=action)?string(' selected','')}" >
				${action}
			</div>
		</#list>
		</div>
	</div>
	<div style="clear:both;height:0;_overflow:hidden;"></div>
</#macro>

<#macro tabContainer title="" actions=[] selected=''>
<div class="settingtable">
	<div style="height:16px;overflow:hidden"></div>
	<#if title!=''><div style="margin-left:31px;height:26px;">
		 <span class="addrtitle">${title}</span>
	</div></#if>
	<div class="skinsetting">
		<#nested>		                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                	</div>
		<div class="clr">&nbsp;</div>
	</div>				        				
</div>
</#macro>

<#macro tabMsg>
<div style="border-top:1px solid #fff; line-height:22px;" class="toolbg toolbgline barspace4">
	<#nested>
</div>
</#macro>