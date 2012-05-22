<#import '/jqmui/jqmui.inc.ftl' as jqm>
${cpf.common({
	'_view': {'title':'jqmui', 'header':'MyTitle1'},
	'listview1':{'data-theme':'a'}
})}
<@jqm.view>
     	<ul data-role="controlgroup" data-type="horizontal" class="localnav">
			<li><a href="#" data-role="button" data-transition="fade" class="ui-btn-active">11111111111111111111111111</a></li>
			<li><a href="#" data-role="button" data-transition="fade">2222222222222222222222222222</a></li>
			<li><a href="#" data-role="button" data-transition="fade">3333333333333333333333333333</a></li>
			<li><a href="#" data-role="button" data-transition="fade">4444444444444444444444444444</a></li>
		</ul>
		<div data-role="collapsible-set">
			<div data-role="collapsible" data-collapsed="false">
				<h3>Section 1</h3>
				<p>I'm the collapsible content in a set so this feels like an accordion. I'm open by default because I have the <code>data-collapsed="false"</code> attribute.</p>
			</div>
			<div data-role="collapsible">
				<h3>Section 2</h3>
				<p>I'm the collapsible content in a set so this feels like an accordion. I'm hidden by default because I have the "collapsed" state; you need to expand the header to see me.</p>
			</div>
			<div data-role="collapsible">
				<h3>Section 3</h3>
				<p>I'm the collapsible content in a set so this feels like an accordion. I'm hidden by default because I have the "collapsed" state; you need to expand the header to see me.</p>
			</div>
			<div data-role="collapsible">
				<h3>Section 4</h3>
				<p>I'm the collapsible content in a set so this feels like an accordion. I'm hidden by default because I have the "collapsed" state; you need to expand the header to see me.</p>
			</div>
			<div data-role="collapsible">
				<h3>Section 5</h3>
				<p>I'm the collapsible content in a set so this feels like an accordion. I'm hidden by default because I have the "collapsed" state; you need to expand the header to see me.</p>
			</div>
		</div>
</@jqm.view>
