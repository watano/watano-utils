<#--
{block:Posts}						<@tr.Posts>
{block:Tags}						<@tr.Tags>
{block:Lines}						<@tr.Lines>
{block:([a-zA-Z0-9]+)}			<@tr.block name='\1'>
{/block:([a-zA-Z0-9]+)}		</@tr.block>
{([a-zA-Z0-9 \t-:]+)}			${tr.var('\1')}
<a 									<@tr.a
</a>									</@tr.a>

-->
<#assign debug=false >
<#assign tumblr_vars=[] >
<#assign tumblr_blocks=[] >
<#assign myglobal_vars={
		"Title":"Untitled",
		"MetaDescription":"Description",
		"Favicon":"http://assets.tumblr.com/images/default_avatar_16.gif",
		"PortraitURL-128":"http://assets.tumblr.com/images/default_avatar_128.gif",
		"RSS":"http://demo.tumblr.com/rss",
		"color:Background":"#3b627e",
		"image:Background":"http://assets.tumblr.com/images/x.gif",
		"font:Body":"Arial, 'Helvetica Neue', Helvetica, sans-serif",
		"font:Title":"Arial, 'Helvetica Neue', Helvetica, sans-serif",
		"font:Accent":"'Lucida Sans', 'Lucida Grande', 'Lucida Sans Unicode', sans-serif",
		"color:Body":"",
		"CustomCSS":"",
		"CopyrightYears":"2007–2011",
		'NextPage':'/page/2',
		"Description":"Description",
		'Name':'demo'} />
<#assign myglobal_langs={} />
<#assign mylocal_vars={} />
<#assign mylocal_langs={} />
<#assign Tag_defs={
	'wisdom':'http://demo.tumblr.com/tagged/wisdom',
	'Mareen Fischinger':'http://demo.tumblr.com/tagged/Mareen_Fischinger',
	'New York City':'http://demo.tumblr.com/tagged/New_York_City',
	'Times Square':'http://demo.tumblr.com/tagged/Times_Square',
	'funny':'http://demo.tumblr.com/tagged/funny'
	} />
<#assign Chat_Lines=[
	'Hey, you know what sucks?',
	'vaccuums',
	'Hey, you know what sucks in a metaphorical sense?',
	'black holes',
	'Hey, you know what just isn&#039;t cool?',
	'lava?'
] />
<#assign common_blocks=['IfNotHeaderImage','HasTags','NoteCount','Caption','Description','Label','Pagination','AlbumArt','NextPage'
	,'IfShowAlbumArtOnAudioPosts','AlbumArt','Artist','TrackName'] />
<#assign Post_blocks=common_blocks />

<#function var name>
	<#if !tumblr_vars?seq_contains(name)><#assign tumblr_vars=tumblr_vars+[name]></#if>
		<#if debug>
			<#if name?starts_with("lang:")><#return (mylocal_langs[name?substring(5)])!((myglobal_langs[name?substring(5)])!(name?substring(5)))></#if>
			<#return (mylocal_vars[name])!((myglobal_vars[name])!"")>
		<#else>
			<#return "{"+name+"}">
		</#if>
</#function>

<#macro block name ext=''>
<#if !tumblr_blocks?seq_contains(name)><#assign tumblr_blocks=tumblr_blocks+[name]></#if>
<#if debug>
	<#switch name>
		<#case "German">
		<#case "Japanese">
		<#case "Italian">
		<#case "French">
		<#case "AskEnabled">
		<#case "SubmissionsEnabled">
		<#case "SearchPage">
		<#case "PostSummary">
		<#case "IfDisqusShortname">
		<#case "IfHeaderImage">
			<#break>
		<#default><#if Post_blocks?seq_contains(name)><#nested [],{},{}></#if><#break>
	</#switch>
<#else>
{block:${name}${(ext='')?string('', ' '+ext)}}<#nested>{/block:${name}}</#if></#macro>

<#macro a href target='' class='' style=''>
<#if debug><a href="#" title="${href}"${(target='')?string('', ' '+target)}${(class='')?string('', ' class="'+class+'"')}${(style='')?string('', ' style="'+style+'"')}><#nested></a><#else><a href="${href}" ${(target='')?string('', ' '+target)}${(class='')?string('', ' class="'+class+'"')}${(style='')?string('', ' style="'+style+'"')}><#nested></a></#if></#macro>

<#macro posts>
<#if debug>
			<#--  Post1  -->
			<#assign Post_blocks=common_blocks+['Quote','Date','IfShowTags','NotReblog','Source']>
			<#assign mylocal_vars={
				'Length':'short',
				'Quote':'It does not matter how slow you go so long as you do not stop.',
				'Source':'Wisdom of <a href="#" title="http://en.wikipedia.org/wiki/Confucius">Confucius</a>',
				'Permalink':'http://demo.tumblr.com/post/236/it-does-not-matter-how-slow-you-go-so-long-as-you',
				'Tags':['wisdom'],
				'NoteCountWithLabel':'7,201 notes'}>
			<#assign mylocal_langs={
				'Posted TimeAgo from source':'Posted 4 years ago'}>
			<#nested Post_blocks, mylocal_vars, mylocal_langs>
			<#--  Post2  -->
			<#assign Post_blocks=common_blocks+['Photo','Date','IfShowTags','NotReblog']>
			<#assign mylocal_vars={
				'LinkOpenTag':'<a href="#" title="http://www.tumblr.com/photo/1280/459265350/1/tumblr_kzjlfiTnfe1qz4rgh">',
				'PhotoURL-500':'http://26.media.tumblr.com/tumblr_kzjlfiTnfe1qz4rgho1_500.jpg',
				'PhotoAlt':'Passing through Times Square by&nbsp;Mareen Fischinger',
				'LinkCloseTag':'</a>',
				'Caption':'<p>Passing through Times Square by <a href="#" title="http://www.mareenfischinger.com/">Mareen Fischinger</a></p>',
				'Permalink':'http://demo.tumblr.com/post/459265350/passing-through-times-square-by-mareen-fischinger',
				'Tags':['Mareen Fischinger','New York City','Times Square'],
				'NoteCountWithLabel':'3,945 notes'}>
			<#assign mylocal_langs={
				'Posted TimeAgo from source':'Posted 4 years ago'}>
			<#nested Post_blocks, mylocal_vars, mylocal_langs>
			<#--  Post3  -->
			<#assign Post_blocks=common_blocks+['Link','Date','NotReblog']>
			<#assign mylocal_vars={
				'URL':'http://',
				'Name':'My favorite web site',
				'Description':'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>',
				'Permalink':'http://demo.tumblr.com/post/234/my-favorite-web-site',
				'NoteCountWithLabel':'1,598 notes'}>
			<#assign mylocal_langs={
				'Posted TimeAgo from source':'Posted 4 years ago'}>
			<#nested Post_blocks, mylocal_vars, mylocal_langs>
			<#--  Post4  -->
			<#assign Post_blocks=common_blocks+['Chat','Date','IfShowTags','NotReblog']>
			<#assign mylocal_vars={
				'Permalink':'http://demo.tumblr.com/post/233/jack-hey-you-know-what-sucks-lindsey',
				'Tags':['funny'],
				'NoteCountWithLabel':'3,433 notes'}>
			<#assign mylocal_langs={
				'Posted TimeAgo from source':'Posted 4 years ago'}>
			<#nested Post_blocks, mylocal_vars, mylocal_langs>
			<#--  Post5  -->
			<#assign Post_blocks=common_blocks+['Audio','Date','Reblog','ContentSource','NoSourceLogo']>
			<#assign mylocal_vars={
				'AlbumArtURL':'http://28.media.tumblr.com/tumblr_ksc4i2SkVU1qz8ouqo1_r2_cover.jpg',
				'Artist':'Allison Weiss',
				'TrackName':'Fingers Crossed',
				'AudioPlayerWhite':'<script type="text/javascript" language="javascript" src="http://assets.tumblr.com/javascript/tumblelog.js?619"></script><span id="audio_player_459260683">[<a href="#" title="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" target="_blank">Flash 9</a> is required to listen to audio.]</span><script type="text/javascript">replaceIfFlash(9,"audio_player_459260683","\\x3cdiv class=\\x22audio_player\\x22\\x3e<embed type=\\"application/x-shockwave-flash\\" src=\\"http://assets.tumblr.com/swf/audio_player.swf?audio_file=http://www.tumblr.com/audio_file/459260683/tumblr_ksc4i2SkVU1qz8ouq&color=FFFFFF\\" height=\\"27\\" width=\\"207\\" quality=\\"best\\"></embed>\\x3c/div\\x3e")</script>',
				'PlayCountWithLabel':'1,451,088 plays',
				'Caption':'<p><strong><a href="#" title="http://allisonweiss.tumblr.com/">Allison Weiss</a> —</strong> Fingers Crossed</p>',
				'Permalink':'http://demo.tumblr.com/post/459260683/allison-weiss-fingers-crossed',
				'SourceURL':'http://allisonweiss.tumblr.com/post/228022847/allison-weiss-fingers-crossed-from-upcoming',
				'SourceTitle':'allisonweiss',
				'NoteCountWithLabel':'951 notes'}>
			<#assign mylocal_langs={
				'Reblogged TimeAgo from ReblogParentName':'Reblogged 4 years ago from allisonweiss'}>
			<#nested Post_blocks, mylocal_vars, mylocal_langs>
			<#--  Post6  -->
			<#assign Post_blocks=common_blocks+['Text','Date','NotReblog','Title']>
			<#assign mylocal_vars={
				'Title':'An example post',
				'Body':'<p>Lorem ipsum dolor sit amet, consectetuer <a href="#" title="/">adipiscing elit</a>. Aliquam nisi lorem, pulvinar id, commodo feugiat, vehicula et, mauris. Aliquam mattis porta urna. Maecenas dui neque, rhoncus sed, vehicula vitae, auctor at, nisi. Aenean id massa ut lacus molestie porta. Curabitur sit amet quam id libero suscipit venenatis.</p>
<ul><li>Lorem ipsum dolor sit amet.</li>
<li>Consectetuer adipiscing elit. </li>
<li>Nam at tortor quis ipsum tempor aliquet.</li>
</ul><p>Cum sociis <a href="#" title="/">natoque penatibus</a> et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed ligula. Sed volutpat odio non turpis gravida luctus. Praesent elit pede, iaculis facilisis, vehicula mattis, tempus non, arcu.</p>
<blockquote>Donec placerat mauris commodo dolor. Nulla tincidunt. Nulla vitae augue.</blockquote>
<p>Suspendisse ac pede. Cras <a href="#" title="/">tincidunt pretium</a> felis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque porttitor mi id felis. Maecenas nec augue. Praesent a quam pretium leo congue accumsan.</p>',
				'Permalink':'http://demo.tumblr.com/post/232/an-example-post',
				'NoteCountWithLabel':'2,280 notes'}>
			<#assign mylocal_langs={
				'Posted TimeAgo from source':'Posted 4 years ago'}>
			<#nested Post_blocks, mylocal_vars, mylocal_langs>
			<#assign Post_blocks=common_blocks>
<#else>{block:Posts}<#nested>{/block:Posts}</#if></#macro>

<#macro Tags>
<#if debug><#list mylocal_vars['Tags'] as tag><#assign mylocal_vars=mylocal_vars+{'TagURL':Tag_defs[tag], 'Tag':tag}><#nested></#list><#else>{block:Tags}<#nested>{/block:Tags}</#if></#macro>

<#macro Lines>
<#if debug><#list Chat_Lines as line><#assign mylocal_vars=mylocal_vars+{
	'Alt':(line_index%2==0)?string('odd','even'),
	'Label':(line_index%2==0)?string('Jack','Lindsey'),
	'Line':line}><#nested></#list><#else>{block:Lines}<#nested>{/block:Lines}</#if></#macro>

<#macro tumblrInfo>
${log('error', "--------------------tumblr_vars--------------------")}
<#list tumblr_vars?sort as var>
${log('error', var)}
</#list>
${log('error', "--------------------tumblr_blocks--------------------")}
<#list tumblr_blocks?sort as block>
${log('error', block)}
</#list>
</#macro>