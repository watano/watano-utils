<#assign searchspan>
				<div class="txt_outdiv">
					<input type="text" style="color:#a0a0a0;" class="txt input_subject"
						onkeydown="QMFullTextSearch.onkeydown(event);"
						onblur="QMFullTextSearch.onblur();"
						onfocus="QMFullTextSearch.onfocus();"
						value="商品信息搜索..." maxlength="50" id="subject" autocomplete="off">
					<input type="button" onclick="QMFullTextSearch.search();" value="搜索" class="btn normal wd2 btn_true">
				</div>
				<div style="z-index:14;" id="allattch" class="f_size addrtitle normal">&nbsp;|&nbsp;<span
					onclick="alert('TODO:商品编号,商品款号,业务单号,用户编号');"
					class="arrow_fontsize_search pointer nounderline f_family black"
					style="visibility: visible;padding-right:4px;"
					id="arrowAdvancedSearch">▼</span>&nbsp;</div>
</#assign>

<#macro toppanel logoimg="" logolink="" rightactions=[] centeractions=[] rbottom="">
	<div id="topDataTd" class="getuserdata">
		<div class="topdata">
			<div style="height:66px" class="topbg">
				<div id="SetInfo" class="setinfo addrtitle">
					<div class="right">
						<#list rightactions as raction>
						${raction}<#if raction_index != rightactions?size-1><span class="addrtitle"> | </span></#if>
						</#list>
					</div>
				<div class="right" id="minimize_container"></div>
				<div class="right" id="gplayer_container"></div>
			</div>
			<div class="search_subject nowrap">
				${rbottom}
			</div>
		</div>
		<div id="logotips" class="lgoo">
			<a hidefocus="" target="mainFrame" href="${logolink}" style="width:215px; height:60px;" class="imglogo pointer skinlogo"><img height="60" src="${logoimg}" id="imglogo" stylenum="0" logotitle="" e="imglogo" t="3"></a>
			<div class="switch">
				<div style="margin-top:1px;" class="left">
					<span class="addrtitle"><br />
						<#list centeractions as caction>
						${caction}<#if caction_index != centeractions?size-1>&nbsp;|&nbsp;</#if>
						</#list>
					</span>
				</div>
			</div>
		</div>
	</div>
</div>
</#macro>

<#macro leftpanel tactions=[] cactions=[] bactions=[]>
<div id="leftPanel" class="newskinbody">
	<div id="navBarDiv">
		<ul id="navBarTd" class="navbar fdul">
			<#list tactions as taction>
				<li ${(taction_index=0)?string('id="composebtn_td" class="composepart fs"', 'class="checkpart fs"')}>${taction}<input type="button" disabled="" style="background: url('image/mail03423d.png") no-repeat scroll 0 -1px transparent;"></li>
			</#list>
		</ul>
	</div>
	<div class="listbg listflow" id="navMidBar">
		<div class="folderDiv" id="folder" style="overflow-x: hidden; overflow-y: auto;">
			<a id="detechFL"></a>
			<div>
				<div>
					<style>
						.max_width{width:110px;overflow:hidden;}
					</style>
					<div id="OutFolder">
						<div id="SysFolderList">
							<ul class="fdul">
							<#list cactions as caction>
								<#if caction='-----'>
								<li style="margin-top:4px;" class="sepline"></li><li class="sepline_height"></li>
								<#else>
								<li style="" class="fs" dr="${caction_index}" id="folder_${caction_index}_td">
									${caction}
								</li>
								</#if>
							</#list>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="navbottom" id="navBottomTd"></div>
</div>
</#macro>

<@html.html title="watano app">
	<@html.link href="css/comm2010044c43.css" />
	<@html.link href="css/skin16.css" />
	<@html.body class="frame_class">
	<@toppanel logoimg="image/logo_16_0023410.gif" logolink="#"
		rightactions=[
			"欢迎光临,watano!",
			html.a('反馈建议','#', 'toptitle'),
			html.a('帮助中心','http://g.cn', "toptitle", '_blank'),
			html.a('退出','#', 'toptitle')]
		rbottom=searchspan
		centeractions=[
			html.a('首页','#', 'toptitle'),
			html.a('采购','#', 'toptitle'),
			html.a('配货','#', 'toptitle'),
			html.a('调拨','#', 'toptitle'),
			html.a('销售','#', 'toptitle'),
			html.a('基础资料','#', 'toptitle'),
			html.a('系统配置','#', 'toptitle')] >
	</@toppanel>
	<div id="sepLineTd" class="topline_height"><div class="topline"><div id="imgLine" class="toplineimg left"></div></div></div>
	<@leftpanel
		tactions=[
			html.a('我的待办','#', 'toptitle'),
			html.a('库存','#', 'toptitle'),
			html.a('门店销售','#', 'toptitle')
		]
		cactions=[
			html.a('采购单','#', 'toptitle'),
			html.a('配货单','#', 'toptitle'),
			html.a('调拨单','#', 'toptitle'),
			html.a('退货单','#', 'toptitle'),
			html.a('盘点单','#', 'toptitle'),
			html.a('销售单','#', 'toptitle'),
			'-----',
			html.a('商品资料','#', 'toptitle'),
			html.a('款号资料','#', 'toptitle'),
			'-----',
			html.a('部门','#', 'toptitle'),
			html.a('品牌','#', 'toptitle'),
			'-----',
			html.a('数据导入','#', 'toptitle'),
			html.a('报表','#', 'toptitle')
		]
	>
	</@leftpanel>
	<div id="mainFrameContainer"><iframe scrolling="auto" frameborder="no" hidefocus="" id="mainFrame" name="mainFrame" src="changeskin.html"></iframe></div>
	</@html.body>
</@html.html>

