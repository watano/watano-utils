<@html.html title="登录">
	<@html.meta name="save" content="history" />
	<@html.link rel="shortcut icon" href="image/favicon.ico" type='' />
	<@html.link href="css/ptlogin090aa5.css" />
	<@html.body class="frame_class">
<div class="container">
	<div class="header">
		<div class="logo"><img src="https://res.mail.qq.com/zh_CN/htmledition/images/logo/logo_0_0.gif" alt="QQ邮箱" /></div>
		<ul class="header_link">
			<li><a href="#" target="_blank">反馈意见</a>|</li>
			<li><a href="#" target="_blank">帮助中心</a>|</li>
			<li><a href="#"  style="border:none" target="_blank">客服</a></li>
		</ul>
	</div>
	<div class="login_container" id="login">
		<div class="login_box">
			<div class="logo_title"><h1>登录QQ邮箱</h1></div>
			<div id="msgContainer" class="login_box_msg" style="display:none;"></div>
			<div class="login_box_msg noCookie" id="infobarNoCookie" style="display:none;">您的浏览器不支持或已经禁止使用Cookie，您无法正常登录。请<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&no=340&&id=7" title="了解Cookie的更多信息" target="_blank">启用Cookie<img src="https://res.mail.qq.com/zh_CN/htmledition/images/ico_help07bf39.gif" style="margin:0 2px;" align="absmiddle" /></a>，或改用<a href="http://m.mail.qq.com">基本版</a>。</div>
			<div style="display:none" id="qlogin" class="qlogin"></div>
			<div class="login_operate" style="display:block" id="web_login">
			<form id="loginform" onsubmit="return pt_check();" method="post" name="loginform" target="_self" autocomplete="on" >
			<div class="username">
				<label class="txt_default" for="uin" id="label_uin" default_txt="邮箱帐号或QQ号码">&nbsp;</label>
				<input onchange="pt_judge()" class="txt alias" id="uin" name="uin" type="text" tabindex="1" value="" autocomplete="on" />
				<input onchange="pt_judge()" readonly="true" class="login_domain" id="domain" name="u_domain" style="font-size:18px;" value="@qq.com" type="text" tabindex="-1"/>
				<input id="u" name="u" value="" type="hidden" />
			</div>
			<div class="password">
				<label class="txt_default" for="p" id="label_p" default_txt="QQ密码">&nbsp;</label>
				<input onchange="pt_judge()" class="txt password" id="p" name="p" type="password" tabindex="2"  />
				<div id="capTip" class="captips" style="display:none;">大写锁定已打开</div>
			</div>
			<div class="about_password">
				<input class="remerber_password" type="checkbox" id="remerber_password" tabindex="5" />
				<label for="remerber_password">记住登录状态</label>
				<a class="forgetPassword" href="/cgi-bin/loginpage?t=getpwdback" target="_blank">忘记密码？</a>
			</div>
			<div id="divSavePassWarning" class="red" style="display:none;">选择此项后，下次将自动登录邮箱（本机两周内有效）。为了您的信息安全，请不要在网吧或公用电脑上使用。</div>
			<div id="verifyinput" class="vfcode" style="display:none">
				<div class="vfcodeinput">
					<label class="txt_default" for="verifycode" id="label_verifycode" default_txt="验证码">&nbsp;</label>
					<input class="txt" id="verifycode" value="" name="verifycode" type="text" tabindex="4" placeholder="" maxlength="5"/>
					<div id="verifytip" class="verifytip">按右图填写，不区分大小写</div>
				</div>
				<div class="gray vfcode_img" style="">
					<img id="imgVerify" onclick="UI.changeImg();" onload="UI.onLoadVC();" alt="验证码"/>
					<div class="vfcode_change"><a id="verifyshow" id="changeimg_link" href="javascript:UI.changeImg();">看不清楚？换一个</a></div>
				</div>
			</div>
			<div class="login_submit" style="">
				<a class="login_btn_wrapper" href="javascript:;"><input class="login_btn" id="btlogin" name="btlogin" type="submit" value="登录" tabindex="5" /></a>
			</div>
			<input value="522005705" type="hidden" id="aid" name="aid"/>
			<input value="https://mail.qq.com/cgi-bin/login?vt=passport&vm=wpt&ft=ptlogin" type="hidden" name="u1" id="u1"/>
			<input value="&ss=1" type="hidden" name="remember" id="remember"/>
			<input value="1" type="hidden" name="from_ui"/>
			<input value="1" type="hidden" name="ptredirect"/>
			<input value="1" type="hidden" name="h"/>
			<input value="快速登录" name="wording" id="wording" type="hidden" />
			<input value="https://res.mail.qq.com/zh_CN/htmledition/style/fast_login08366d.css" type="hidden" id="css" />
			<input value="m_ptmail" type="hidden" name="mibao_css" />
		</form>
		</div>
		<div style="display:none;" id="switch" class="lineright" onmouseup="pt_switchMode()"></div>
		<div class="login_tips">
			<p><span class="gray">还没有QQ邮箱？</span><a href="/cgi-bin/loginpage?t=regist&loc=register,qq,click,0">立即注册</a></p>
			<p><span class="gray">网络太慢？使用</span><a href="http://w.mail.qq.com/cgi-bin/loginpage?f=xhtml">基本版</a></p>
		</div>
	</div>
</div>
<div class="mail_advert">
	<div class="advert_pic">
		<img style="width:160px;height:186px;background:url('https://res.mail.qq.com/zh_CN/htmledition/images/tg_qiyeyouxiang.png') no-repeat;" src="https://res.mail.qq.com/zh_CN/htmledition/images/spacer.gif" alt="企业邮箱"/>
	</div>
	<div class="advert_txt">
		<h1><a href="http://exmail.qq.com?referrer=index_left" target="_blank">腾讯企业邮箱</a></h1>
		<p>用邮箱彰显企业形象</p>
		<p>让邮件飞越五湖四海</p>

		<p>以协作凝聚您的团队</p>
		<p class="operate"><a href="http://exmail.qq.com?referrer=index_left" target="_blank">免费开通</a>专属于您的企业邮箱</p>
	</div>
</div>
<div class="mail_intro">
	<h1>QQ邮箱使用提示</h1>
	<ul class="gray">
		<li>您可以用您的QQ号和密码直接登录QQ邮箱。</li>
		<li>您还可以<a href="/cgi-bin/loginpage?t=regist&loc=register,qq,click,0">注册</a>一个邮箱帐号（例如：chen@qq.com），并以此登录。</li>
		<li>手机访问mail.qq.com或使用<a href="http://3g.mail.qq.com" target="_blank">手机客户端</a>也可随时随地收发邮件。</li>
	</ul>
</div>
<div class="footer gray">
	<ul class="footer_link">
		<li><a href="http://www.tencent.com/" target="_blank">关于腾讯</a>|</li>
		<li><a href="http://www.tencent.com/en-us/index.shtml" target="_blank">About Tencent</a>|</li>
		<li><a href="http://www.qq.com/contract.shtml" target="_blank">服务条款</a>|</li>
		<li><a href="http://service.qq.com/" target="_blank">客服中心</a></li>
	</ul>
	<p>&copy; 1998 - 2011 Tencent Inc. All Rights Reserved</p>
</div>
</div>
	</@html.body>
</@html.html>