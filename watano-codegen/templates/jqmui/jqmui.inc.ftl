<#function id name params>
	<#assign idtext=cpf.id(name, params) />
	<#return 'id="'+idtext+'"'+cpf.attributes(idtext)>
</#function>

<#macro view params={} id=cpf.id('_view', params)>
<!DOCTYPE html>
<html>
	<head>
	<title>${cpf.getValue(id+'.title', '')}</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="/jqmui/jquery.mobile-1.0.css">
	<link rel="stylesheet" href="/jqmui/demos/docs/_assets/css/jqm-docs.css">
	<script type="text/javascript" src="/jqmui/jquery-1.6.4.js"></script>
	<script type="text/javascript" src="/jqmui/jquery.mobile-1.0.min.js"></script>
	<script type="text/javascript" src="/jqmui/demos/docs/_assets/js/jqm-docs.js"></script>
	<script type="text/javascript" src="/jqmui/demos/experiments/themeswitcher/jquery.mobile.themeswitcher.js"></script>
</head>
<body>
<div data-role="page">
	<div data-role="header" >
		<div class="ui-bar ui-grid-c">
			<div class="ui-block-a"><a href="/jqmui/" data-icon="home" data-iconpos="notext" data-direction="reverse" class="ui-btn-right jqm-home">首页</a></div>
			<div class="ui-block-b"><h1>${cpf.getValue(id+'.header', '')}</h1></div>
			<div class="ui-block-c">
				<input type="search" name="search" id="searc-basic" value="" />
				<select data-theme="b" data-overlay-theme="d" data-native-menu="false">
					<option value="t">Tall</option>
					<option value="g">Grande</option>
					<option value="v">Vente</option>
				</select>
			</div>
		</div>
		<div data-role="navbar" data-theme="a">
			<ul>
				<li><a href="#" class="ui-btn-active">1</a></li>
				<li><a href="#">2</a></li>
				<li><a href="#">3</a></li>
				<li><a href="#">4</a></li>
				<li><a href="#">5</a></li>
			</ul>
		</div><!-- /navbar -->
	</div><!-- /header -->

	<div data-role="content">
		<#nested>
	</div><!-- /content -->
	<div data-role="footer" class="footer-docs">
		<p>&copy; 2011 The Watano Project</p>
	</div><!-- /footer -->
</div><!-- /page -->
</body>
</html>
</#macro>

<#macro listview params={} id=cpf.id('listview1', params) items=[]>
<ul data-role="listview" ${cpf.attributes(id)}>
<#list items as item>
	<li>${item?string}</li>
</#list>
</ul>
</#macro>

<#macro slider params={} id=cpf.id('slider1', params)>
<input type="range" ${cpf.attributes(id)}/>
</#macro>

<#macro button text href='#' params={} id=cpf.id('button1', params)>
<a href="${href}" ${cpf.attributes(id)}>${text}</a>
</#macro>

<#assign uigrids=['a','b','c','d'] />
<#assign ui_block_count=0 />
<#assign ui_block_index=0 />
<#macro uigrid count=2 params={} id=cpf.id('', params)>
<#assign ui_block_count=count />
<div class="ui-grid-${(uigrids[count+2])!'a'}" ${cpf.attributes(id)}>
<#nested>
</div>
</#macro>

<#macro uiblock params={} id=cpf.id('', params)>
<div class="ui-block-${(uigrids[ui_block_index%ui_block_count])!'a'}" ${cpf.attributes(id)}>
<#assign ui_block_index=ui_block_index+1 />
<#nested>
</div>
</#macro>


