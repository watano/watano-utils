(function(xf){
var dVc=T("/cgi-bin/reader_article_list?sid=$sid$&t=rss_list&s=personal&classtype=onefeed&feed=3_$uin$");
function cCX(bi)
{
bi=bi||"";
if(bi.length>25)
{
bi=[bi.substr(0,25)+"<wbr/>"+cCX(bi.substr(25))].join("");
}
return bi;
}

function ddQ(Uw)
{
return Uw==getTop().g_admuin;
}

function ddR(vL)
{
return vL==(getTop().g_admuin+"@qq.com")||(vL.toLowerCase().indexOf("postmaster@")==0);
}

var jv,ld;
var ld=function(al)
{
this.bp=al;

this.KF;
this.bkX;
this.bjD;
this.aQh;
this.aqJ;
this.DS;
this.dly;

this.bpw;

this.brj;

this.aFo;

bX={}
}

jv=ld.prototype;
ld.bX={};

ld.bX.edD="_QmProfileTipsInst_";

ld.bX.eaa=TE([
'<div class="profile_wraper $@$if($role$=="xy" || $role$=="dr" || $role$=="qz")$@$ profile_min $@$endif$@$">',
'<div class="left" style="width:43px; padding-right:5px; $@$if($role$=="ml"||$role$=="qz")$@$padding:0 6px 9px 10px;$@$endif$@$">',
'<div class="icon_user" style="background:#fff; float:none; width:40px; height:40px; overflow:hidden; display:block; margin-left:0px;">',
'<img src="$icon$" title="$title.DATA$" width="40" >',
'</div>',
'</div>',











'<div class="left gray" style="width:230px; padding-top:2px; *margin-left:-2px;" >',
'<div class="green bold b_size">$dispname$',
'$@$if($role$=="qz"||$qqfriend$)$@$',
'<a href="http://user.qzone.qq.com/$qqfriend$" ck="iconHandle" class="others_home" title="访问“$dispname$”的QQ空间个人主页" target="_blank">',
'<span class="ico_qz"></span>',
'</a>',
'$@$endif$@$',
'$@$if(($role$=="xy"||$role$=="dr")&&$home$)$@$',
'<a target="_blank" href="$home$" class="others_home" title="访问$dispname$的',
'$@$if( $role$=="xy")$@$腾讯朋友$@$else$@$城市达人$@$endif$@$',
'个人主页"><span class="ico_$role$"></span></a>',
'$@$else$@$',
'<span class="others_home"><span class="ico_$role$"></span></span>',
'$@$endif$@$',
'</div>',
'<div style="margin:5px 0;" class="graytext">',
'$@$if($role$=="ml"||$role$=="qz")$@$',
'<span>$dispemail$</span>',
'$@$else if($role$=="xy")$@$',
'<span>来自腾讯朋友</span>',
'$@$else if($role$=="dr")$@$',
'<span>来自城市达人</span>',
'$@$endif$@$',
'<a  style="margin-left:18px;" href="javascript:;" onclick=\'getTop().QMProfileTips.refuse("$dispname$", "$mailid$")\'>拒收</a></div>',
'</div>',
'$@$if($role$=="ml" || $role$=="qz")$@$',
'<div class="personOperate">',
'<a $@$if(!$bmail$)$@$class="graytext"$@$else$@$ href="javascript:;" onclick=\'getTop().QMProfileTips.oper("mailTo","$_id$","$email$", "$showinfo$", "$jsname$")\' $@$endif$@$ $@$if($showinfo$==2)$@$ style="border-left:none;"$@$endif$@$ $@$if($btnnum$==2||$btnnum$==0)$@$ style="width:159px; border-left:none;" $@$endif$@$>发邮件</a>',
'<a $@$if(!$bsms$||$bansms$)$@$class="graytext"$@$else$@$ href="javascript:;" onclick=\'getTop().QMProfileTips.oper("smsTo","$_id$","$email$", "$showinfo$", "$jsname$")\' $@$endif$@$ $@$if($bansms$)$@$title="只能向关注者发送短消息"$@$endif$@$ style="$@$if($showinfo$==2)$@$ border-right:none; $@$endif$@$ $@$if($btnnum$==2||$btnnum$==0)$@$ width:159px;border-right:none; $@$endif$@$ _padding-top:6px; _padding-bottom:5px; "><img src="$images_path$spacer.gif" class="icon_sms"/>发短消息</a>',
'</div>',
'$@$else$@$',
'<div class="clr"></div>',
'$@$endif$@$',
'<div>'

]);
ld.bX.edm=TE([
'<div class="left" style="width:43px;  padding:15px 5px 0 10px;">',
'<div class="icon_user" style="background:#fff url($icon$); float:none; width:40px; height:40px; overflow:hidden; display:block; margin-left:0px;">',
'<a><img src="$images_path$spacer.gif" title="$title.DATA$" class="iconMask_gray" ></a>',

'<img src="$images_path$spacer.gif" class="icon_getblogW" uin="$uin$" name="qqicon" id="icon_getblogW" style="position: absolute;$@$if($ownfeedcount$>0)$@$display:inline;$@$endif$@$" title="已认领博客" />',
'</div>',
'</div>',
'<div class="left gray" style="padding:17px 0 5px 0; width:230px; *margin-left:-2px;" >',
'<div class="b_size"><a class="green bold b_size">$dispname$</a>&nbsp;',

'$@$if($btnnum$!=0)$@$',
'$@$if($bcfriendtype$==1||$bcfriendtype$==2)$@$<span class="graytext" style="font-size:12px;">($@$if($bcfriendtype$==1)$@$QQ好友$@$else if($bcfriendtype$==2)$@$QQ群$@$endif$@$ - $bcclassname$)</span> $@$endif$@$',
'$@$endif$@$',
'$@$if($btnnum$==3)$@$',
'<a href="$rssdomain$/cgi-bin/reader_article_list?sid=$sid$&t=rss_list&s=photos&classtype=onefeed&classid=1&feed=2_$uin$" title="$dispname$的相册" style="margin-left:4px;"><img src="$images_path$spacer.gif" class="icon_getphoto"/></a>',
'$@$endif$@$',
'</div>',
'$@$if($showinfo$==1)$@$',
'<div style="margin:5px 0;" class="graytext">$dispemail$</div>',
'$@$else$@$',
'<div style="margin:5px 0;" class="graytext">$follower$人关注 | $sharecount$条广播</div>',
'$@$endif$@$',
'$@$if($profile.introduction$)$@$',
'<div style="margin:5px 0; line-height:1.5; overflow:hidden; zoom:1;"><div class="left addrtitle">个人介绍：</div><div style="margin-left:65px; zoom:1; *margin-top:-1px;  width:160px;overflow:hidden;">$profile.introduction$</div></div>',
'$@$endif$@$',
'$@$if($profile.country$)$@$',
'<div style="margin:5px 0; line-height:1.5; overflow:hidden; zoom:1;" ><div class="left addrtitle">来　　自：</div><div style="margin-left:65px; zoom:1; *margin-top:-1px; width:160px; overflow:hidden;">$@$if($profile.country$!="中国")$@$ $profile.country$ $@$endif$@$$@$if($profile.country$!="中国" && $profile.province$)$@$-$@$endif$@$ $profile.province$ $@$if($profile.city$)$@$-$@$endif$@$ $profile.city$ </div></div>',
'$@$endif$@$',
'$@$if($profile.tags$)$@$',
'<div style="margin:5px 0; line-height:1.5; overflow:hidden; zoom:1;" ><div class="left addrtitle">标　　签：</div><div style="margin-left:65px; zoom:1;   width:160px; *margin-top:-1px; overflow:hidden;">',
'$@$for($profile.tags$)$@$ <a href="$_root_.rssdomain$/cgi-bin/reader_billboard?sid=$_root_.sid$&t=rss_userboard&func=list&classtype=oneboard&tagid=$tagid$&filter=local" style="white-space:nowrap;">$name$</a> $@$endfor$@$',
'</div></div>',
'$@$endif$@$',
'$@$if($ownfeedcount$>0)$@$',
'<div>',
'<div class="left addrtitle" style="*padding-top:2px;">博　　客：</div>',
'<div style="margin-left:65px; zoom:1;">',
'$@$for($ownfeeds$)$@$',
'<div class="txtflow" style="margin-bottom:3px; width:160px;"><a href="$rssdomain$/cgi-bin/reader_article_list?sid=$_parent_.sid$&t=rss_list&s=feed&classtype=onefeed&feed=$feedtype$_$feedid$" title="$title$">$@$eval  htmlEncode(subAsiiStr(htmlDecode($title$),16,"..."))$@$</a> $@$if($subscribecount$>0)$@$<span class="graytext">($subscribecount$人订阅)</span>$@$endif$@$</div>',
'$@$endfor$@$',
'</div>',
'<div class="clr"></div>',
'</div>',
'$@$endif$@$',
'</div>',
'<div class="clr"></div>',
'$@$if($btnnum$!=0)$@$',
'<div class="personOperate" $@$if($mycard$==1)$@$style="display:none;"$@$endif$@$>',
'$@$if($showinfo$==2)$@$',
'<form name="addFollow$uin$" style="$@$if($followed$==1)$@$display:none;$@$endif$@$">',
'<a style="border-left:none" onclick="(window.QMRss||window.moAppRssBroadcast).optFollow(\'add\',$uin$, \'\', \'tips\');">添加关注</a>',
'</form>',
'<form name="delFollow$uin$" style="$@$if($followed$!=1)$@$display:none;$@$endif$@$;" class="gray">',
'<a style="border-left:none" onclick="(window.QMRss||window.moAppRssBroadcast).optFollow(\'del\',$uin$);">取消关注</a>',
'</form>',
'<span class="graytext waitFollow" style="display:none;" id="waitFollow$uin$" name="waitFollow$uin$">等待对方确认</span>',
'$@$endif$@$',
'<a $@$if(!$bmail$)$@$class="graytext"$@$else$@$ href="javascript:;" onclick=\'getTop().QMProfileTips.oper("mailTo","$_id$","$email$", "$showinfo$", "$jsname$")\' $@$endif$@$ $@$if($showinfo$==2)$@$ style="border-left:none;"$@$endif$@$ $@$if($btnnum$==2)$@$ style="width:159px; border-left:none;" $@$endif$@$>发邮件</a>',
'<a $@$if(!$bsms$||$bansms$)$@$class="graytext"$@$else$@$ href="javascript:;" onclick=\'getTop().QMProfileTips.oper("smsTo","$_id$","$email$", "$showinfo$", "$jsname$")\' $@$endif$@$ $@$if($bansms$)$@$title="只能向关注者发送短消息"$@$endif$@$ style="$@$if($showinfo$==2)$@$ border-right:none; $@$endif$@$ $@$if($btnnum$==2)$@$ width:159px;border-right:none; $@$endif$@$ _padding-top:6px; _padding-bottom:5px; "><img src="$images_path$spacer.gif" class="icon_sms"/>发短消息</a>',
'$@$if($btnnum$==3&&$showinfo$==1)$@$',
'<a href="javascript:;" onclick=\'getTop().QMProfileTips.oper("rssTo","$uin$","","$showinfo$")\' style="border-right:none;">查看广播</a>',
'$@$endif$@$',
'</div>',
'$@$endif$@$'
]);

ld.bX.edl=TE([
'<div class="profileTip" id="infocard_$_id$" style="display:none;">',
'<div class="infoArrowUp" id="infoarrowup_$_id$" style="display:none;"></div>',
'<div class="tipInner">',
'$@$if($bSmsApp$)$@$',
ld.bX.eaa,
'$@$else$@$',
ld.bX.edm,
'$@$endif$@$',
'</div>',
'<div class="infoArrowDown" id="infoarrowdown_$_id$" style="display:none;"></div>',
'</div>'
]);



jv.Ea=function(PE)
{
var ad=this;
ad.KF=PE;
switch(PE)
{
case 0:
ad.cZh(false);
break;

case 1:
ad.bjD=setTimeout(function(){
if(ad.KF==1)
{
if(!ad.aQh)
{
ad.dWO();
}
else
{
ad.Ea(2);
}
}
},ad.dLY);
break;

case 2:
ad.cZh(true);

ad.ecT();
break;

case 3:
ad.bjD=setTimeout(function(){
if(ad.KF==3)
{
ad.Ea(0);
if(ad.bpw)
{
ad.bXP(ad.bpw);
}
}
},100);
break;

case 4:
break;
}
}

jv.cZh=function(fj)
{
var ad=this,
MT=ad.aQh;

if(!MT)return;

if(fj&&!isShow(MT)||!fj&&isShow(MT))
{
qmAnimation.play(MT,{
from:fj?0.5:1,
to:fj?1:0.5,
speed:'fast',
onaction:function(cp)
{
show(MT,true);
setOpacity(MT,cp);
},
oncomplete:function()
{
if(fj&&ad.brj==3)
{
ossLog("delay","all","stat=nothing&locval=,,logotips,1");
}
setOpacity(MT,fj?1:0.5);
show(MT,fj&&ad.KF==2);
gbIsIE&&(MT.style.filter='');
}
});
}
}


jv.ecT=function()
{
var ad=this,
aSg=ad.bkX,
MT=ad.aQh,
tN=ad.DS,
au=ad.bp,
VP=au.document,
kS=aSg.getAttribute('beside'),
az=kS?S(kS,ad.bp):aSg,
apZ=calcPos(az),
bUf=calcPos(MT),
cJk=S('infoarrowup_'+tN,au),
cJn=S('infoarrowdown_'+tN,au),
NZ=VP.body.clientWidth;
if((apZ[1]+bUf[4])<NZ)
{
if((az.tagName=='IMG'||apZ[3]<50)&&az.id!="imglogo")
{
show(cJk,false);
show(cJn,false);
MT.style.top=apZ[0]+'px';
MT.style.left=apZ[1]+5+'px';
}
else 
{

var dirc=(apZ[0]-bUf[5])>bodyScroll(au,'scrollTop');

show(cJk,!dirc);
show(cJn,dirc);

MT.style.top=dirc?(apZ[0]-bUf[5]-5+'px')
:(apZ[0]+apZ[5]+8+'px');
MT.style.left=apZ[1]-apZ[4]/2-65+'px';
}
}
else
{
show(cJk,false);
show(cJn,false);
MT.style.top=apZ[0]+'px';
MT.style.left=(apZ[3]-bUf[4])+'px';
}
}

jv.dWO=function()
{
var ad=this,
eL=ad.aqJ,
avB=ad.brj,
tN=ad.DS,
hf=ad.dly,
bUS=ad.dFs,
bWV=ad.dFD,
sU=ad.sU,
cKT=ad.dFB,
cMS=ad.dFl,
cqd=function(pA,dEr)
{
var aSg=ad.bkX,
JZ=ad.dEU,
bXh=0,

dbX=ddQ(eL),
cHZ=ddR(hf),

cQb=hf&&!cHZ,
ccA=hf&&!cHZ&&!dbX,
dbt=eL&&!dbX&&!cHZ,
ebz=ccA&&pA.followedby!="1"&&avB=="2",
pA=pA||{};

if(eL==getUin()||eL==getTop().g_encryptuin||
(!cQb&&!ccA&&!dbt))
{
bXh=0;
}
else if(avB=="2")
{
bXh=3;
}
else
{
bXh=(avB=="1"&&pA.follower&&pA.sharecount)?3:2;
}


if(JZ)
{
pA.name=JZ;
}

var eaz=htmlEncode(encodeNick(pA.name)),
eay=cCX(htmlEncode(pA.name));

extend(pA,
{
'_id':tN,
'uin':eL,
'email':hf,
'dispname':eay,
'jsname':eaz,
'dispemail':cCX(hf),
'showinfo':avB,
'sid':getSid(),
'images_path':getPath('image'),
'btnnum':bXh,
'arrow':aSg.tagName=="IMG"?0:1,
'bmail':cQb,
'bsms':ccA,
'bansms':ebz,
'brss':dbt,
'rssdomain':typeof(gsRssDomain)=="undefined"?"":gsRssDomain,
'bSmsApp':dEr,
'role':bUS,
"mailid":sU,
"qqfriend":cMS,
'home':cKT
});

insertHTML(ad.bp.document.body,'afterBegin',ld.bX.edl.replace(pA));
ad.aQh=MT=S('infocard_'+tN,ad.bp);


addEvents(MT,
{
mouseover:function(ag)
{
ad.Ea(4);
},

mouseout:function(ag)
{
ad.Ea(3);
}
});
ad.Ea(2);
};
if(bUS)
{
var dq={};
if(bWV)
{
dq.icon=bWV;
}
else
{
dq.icon="/cgi-bin/getqqicon?uin="+eL;
}
cqd(dq,true);
}
else if(eL&&!ddQ(eL))
{
var	dH=ad.aFo=new QMAjax();

dH.method="post",

dH.url="/cgi-bin/"+(ad.brj=="2"?"reader_account_info":"readtemplate");

if(ad.brj!=2)
{
dH.send(T("func=infocard&uin=$uin$&sid=$sid$&t=rss_mgr&s=infocard").replace(
{
sid:getSid(),
uin:eL
}));
}
dH.onComplete=function(hH)
{
var gc=null;
if(hH&&ad.KF==1)
{
if(hH.responseText.indexOf("new_rss_success")!=-1)
{
gc=evalValue(hH.responseText);
if(gc)
{
if(avB=="1")
{
gc.feed.icon="/cgi-bin/getqqicon?uin="+eL;
}
cqd(gc.feed,false);
}
}
}
}
dH.onError=function()
{
}


}
else
{
if(avB=="3")
{
ad.dWM();
}
else
{
cqd({
icon:[getPath("image"),"rss/",(ddR(hf)?"face_admin.gif":"male.gif")].join("")
});
}
}
}


ld.bX.dQJ=TE([
'<span id="infocard_$_id$" style="display:none;position:absolute;cursor:default;z-index:888;margin:-12px 0 0 -15px;">',
'<div unselectable="on" id="imglogonewtips" class="newtips" >',
'<div style="opacity: 1;" unselectable="on" id="imglogotipcontainer" class="tipcontainer">',
'<img id="imglogoup" class="arrowup" style="margin-left:18px;*position:relative;*top:6px;*left:18px;" src="$images_path$spacer.gif">',
'<div unselectable="on" class="container">',
'<div unselectable="on" class="contentcontainer">',
'<a class="btnClose" name="closecard" href="javascript:\'\'" style="margin-top:6px;*right:0;"></a>',
'<div unselectable="on" class="content" nowrap>',
'$tipsword$',
'&nbsp; &nbsp; &nbsp;',
'<div unselectable="on" class="tipsrightpanel" style="font-size: 12px; color: rgb(0, 0, 0); font-weight: normal;">',
'<div unselectable="on" class="opertbar">',
'$@$for($links$)$@$',
'&nbsp;&nbsp;<a name="_tipslink_" style="text-decoration: underline;" target="$target$" href="$href$">$linkname$</a>',
'$@$endfor$@$',
'</div>',
'</div>',
'<div unselectable="on" class="clr"></div>',
'</div>',
'</div>',
'</div>',
'<img id="imglogodown" class="arrowdown" style="display: none; margin-left: -5px;" src="$images_path$spacer.gif">',
'</div>',
'<div unselectable="on" class="tipbackground"></div>',
'<div unselectable="on" class="oneheight"></div>',
'</div>',
'</span>'
]);

jv.dWM=function()
{
var ad=this,
tN=ad.DS,
aSg=ad.bkX;
dAz=aSg.getAttribute("stylenum"),
cYh=aSg.getAttribute("logotitle"),
cAF,cJW,chZ;


if(!cYh)
{
chZ=true;
}
else
{
var ade=cYh.split("aboutlogo="),
cAF=ade[0],
cJW=ade[1],
chZ=cAF=="nothing"||!dAz;
}

if(chZ)
{
aSg.title="邮箱首页";
}
else
{
var xe=[],
ia=eval(["(",cJW,")"].join(""));

for(var i=0;i<ia.length;i++)
{
if(i%3==0)
{
xe.push(
{
linkname:ia[i],
href:TE(ia[i+1]).replace(
{
sid:getSid(),
uin:getUin()
}
),
target:ia[i+2]
}
);
}
}

insertHTML(ad.bp.document.body,'afterBegin',ld.bX.dQJ.replace(
{
'_id':tN,
images_path:getPath("image"),
tipsword:cAF,
links:xe
}
));
ad.aQh=S('infocard_'+tN,ad.bp);


addEvents(ad.aQh,
{
mouseover:function(ag)
{
ad.Ea(4);
},

mouseout:function(ag)
{
ad.Ea(3);
},

click:function(ag)
{
var az=getEventTarget(ag);
if(az.name=="closecard")
{
ad.Ea(3);
ad.bkX.setAttribute("t","");
}
else if(az.name=="_tipslink_")
{
var cYi=location.getParams(az.href)["logostatid"];
if(cYi)
{
ossLog("delay","all","stat=nothing&locval=,,logotips,"+cYi);
}
}
}
});
ad.Ea(2);
}
}



jv.dfP=function()
{
var ad=this,
MT=ad.aQh;

if(MT)
{
qmAnimation.stop(MT);
show(MT,false);
}
clearTimeout(ad.bjD);
ad.aFo&&ad.aFo.abort();
}

jv.bXP=function(acY)
{
var ad=this;
if(ad.bkX!=acY)
{
if(ad.KF==3)
{
ad.bpw=acY;
return;
}

var eL=acY.getAttribute('u'),
JZ=acY.getAttribute('n'),
avB=acY.getAttribute("t"),
hf=acY.getAttribute('e'),
bWV=acY.getAttribute('i'),
bUS=acY.getAttribute("r"),
cMS=acY.getAttribute("f"),
sU=acY.getAttribute("mailid"),
cKT=acY.getAttribute("h");
if(eL=="0"||!eL||eL==getTop().g_encryptzero)
{
eL="";
}

ad.dfP();

ad.bpw=null;
ad.bkX=acY;
ad.aqJ=eL;
ad.DS=[eL,hf?hf.replace(/\W/gi,""):""].join("");
ad.KF=0;
ad.aQh=S('infocard_'+ad.DS,ad.bp);
ad.dEU=JZ;
ad.dly=hf||(eL?eL+"@qq.com":"");
ad.brj=avB;
ad.dFD=bWV;
ad.dFs=bUS;
ad.dFB=cKT;
ad.dFl=cMS;
ad.sU=sU;
ad.dLY=avB==3?800:500;

}
ad.Ea(ad.KF==0?1:2);
}

jv.cfW=function(acY)
{


var ad=this,
aoN=ad.KF;

ad.bpw=null;

ad.Ea((aoN==2||aoN==3)?3:0);
}



ld.aDO=function(al)
{
if(al)
{
var cZD=ld.bX.edD,
ctW=al[cZD];

if(!ctW)
{
ctW=al[cZD]=new ld(al);
addEvent(al,"unload",function(ag)
{
var cZq=ld.aDO(al);
cZq&&cZq.dfP();
});
}
return ctW;
}
}


ld.doMouseEvent=function(ap,al,acY)
{
if(ap=="over")
{
ld.aDO(al).bXP(acY);
}
else if(ap=="out")
{
ld.aDO(al).cfW(acY);
}
}

ld.oper=function(apI,Uw,vL,avB,cUo)
{
function cTn(dwA,dxI,eix)
{
return T('"$name$" <$email$>').replace({
name:encodeNick(dwA)||dxI,
email:vL||(Uw+"@qq.com")
});
}
switch(apI)
{
case"mailTo":
openComposeDlg("normal",{
sDefAddrs:cTn(cUo,Uw,vL),
bUinEncrypt:true,
bAddrEdit:false
});
break;
case"smsTo":
openComposeDlg("sms",{
sDefAddrs:cTn(cUo,Uw,vL),
bUinEncrypt:true,
bAddrEdit:false
});
break;
case"rssTo":
if(!Uw)
{
return;
}
var aQ=dVc.replace({
sid:getSid(),
uin:Uw
});
if(avB=="1")
{
goNewWin(aQ,false,true);
}
else
{
goUrlMainFrm(gsRssDomain+aQ);
}
break;
}
}













ld.refuse=function(aD,Lq)
{


var ad=this,
aA=
{
sid:getSid(),
folderid:9,
Fun:"Del",
mailaction:"sms_black",
s:"readmail_reject_newwin",
r:(Math.random()+"").replace(/^.*\./,""),
t:"sms_mgr.json",
mailid:Lq
};

confirm("系统会把此发件人地址放入“黑名单”中，\n您将不再收到来自此地址的短消息。\n确定要拒收“"+aD+"”的短消息吗？")
&&QMAjax.send(
"/cgi-bin/mail_mgr",
{
method:"POST",
content:T(["r=$r$&resp_charset=UTF8&sid=$sid$&folderid=$folderid$&srcfolderid=$folderid$&s=$s$&Fun=$Fun$&mailaction=$mailaction$&mailid=$mailid$&reporttype=8&isspam=true&t=$t$"]).replace(aA),
onload:function(ba,cv)
{
var rH="拒收失败，请稍后再试",
jm=5000;
try
{
var aA=eval(cv);
window[ba?"showInfo":"showError"](ba?aA.msg:aA.errmsg,jm);
}
catch(e)
{
debug(cv);
showError(rH,jm);
}
}
}
);




































}

xf.QMProfileTips=ld;

})(window);
