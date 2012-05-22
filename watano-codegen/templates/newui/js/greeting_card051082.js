(function(wT){

if(wT.QMGrCard)
{
return;
}

var aHY=["sendbtn","savebtn","timeSendbtn"],

aDQ=T("stat=nothing&locval=,greetingcarddlg,$type$,$source$"),

aIo="GreetingCard",

aJw=T("/cgi-bin/cardlist?sid=$sid$&ListType=Cards&Cate1Idx=$idx$&t=cardsublist&s=cardjson&p=$page$"),

aDs=T([
'<div style="margin:20px;text-align:center;position:relative;z-index:10;">',
'$flashcode$',
'$dellcarddesc$',

'</div>',
'<div class="toolbg toolbgline" style="position:relative;z-index:100;text-align:right;padding:3px;">',
'<input type="button" class="btn wd2" id="btnPrevSend" value="发送"/>',
'<input type="button" class="btn wd2" id="btnCancel" value="取消"/>',
'</div>'
]),

aIq="",

aIl=T([

'<div class="bd" style="text-align:left;background:#fff;width:430px;padding:5px;margin:0 auto;margin-top:10px;',
'font-size:12px;line-height:160%;">',
'<div>DELL贺卡的秘密：</div>',
'<div>本贺卡随机附带DELL购机400元优惠券。赶紧来派礼啦！&nbsp;',
'<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&id=10000&no=1000651&from=send" ',
'style="color:#1d76c8; text-decoration:underline !important;" target="_blank">了解详情</a>',
'</div>',
'</div>'
]),

aKJ=TE([
'<center><div style="width:660px;background:#fcf5e2;">',
'<div style="padding:25px 0 0 0">',
'<span id="qqmail_cardname" style="height:27px;font-weight:bold;">&nbsp;',
'$@$sec subject$@$',
'$@$if($alias$)$@$$alias$ 寄来的贺卡$@$else$@$ 来自QQ邮箱的贺卡$@$endif$@$',
' 《$cardname$》',
'$@$endsec$@$',
'<a class="$linkclassname$_thanks" href="http://mail.qq.com" target=_blank  style="color:#d90700"  name="$addr$">',
'答谢好友',
'</a>',
'</span>',
'<div style="border:1px solid #e8c597;width:440px;padding:5px">',
'<embed id="qqmail_cardurl" parm="$cardsrc$" src="$cfurl$" quality=high wmode=opaque width=440 height=330 alt="如果您无法查看此贺卡，请点击下面的红色链接查看。"></embed>',
'</div>',
'<div id="qqmail_dellcard" style="display:none"></div>',
'<div style="margin-top:8px;width:450px;">',
'<img class="qqmail_card_thumb" src="$tfurl$" /><div>　</div>',
'<a class="$linkclassname$_thanksbtn" href="http://mail.qq.com" target=_blank  style="color:#ff9600;"  name="$addr$">',
'<img src="http://mail.qq.com/zh_CN/htmledition/images/btn_card.gif" border=0 />',
'</a>',
'<a class="$linkclassname$_btn" name="" href="http://mail.qq.com" target=_blank  style="color:#ff9600;"  >',
'<img src="http://mail.qq.com/zh_CN/htmledition/images/btn_onemorecard.gif" border=0 style="margin-left:6px;"unjubj />',
'</a>',
'</div>',
'<div style="margin:6px 0 10px 0;color:#a0a0a0;font-size:12px">',
'&nbsp;如果您无法查看贺卡，',
'<a href="http://mail.qq.com/viewfcard.html?link=$cfurl$&from=$alias$" target=_blank style=\"color:#87a6f5\">点击此处查看</a>。',
'</div>',
'<div id="qqmail_card" style="width:450px;margin:20px 0 0 2px;line-height:29px;text-align:left">',
'$content$',
'</div>',
'$@$if($birthday$)$@$',
'<div style="width:440px;padding:2px;margin-top:20px;text-align:left;font-size:12px;color:#999;" >',
'提示：<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=23&&no=336" style="text-decoration:underline;color:#999;" target="_blank">您的生日信息来自QQ邮箱设置或QQ空间个人档</a>。',
'</div>',
'$@$endif$@$',
'</div>',
'<div style="clear:both;height:30px"></div>',
'</div></center>'
]),

aHk=T([
'<div style="height:372px;_height:368px;text-align:left">',
'<div style="padding:20px 0 0 0;" >',
'<div class="greetRightpanel">',
'<div id="addr_cmd" class="bd cpslt" style="position:relative;padding-left:10px;width:170px;line-height:25px;border-bottom-width:0px;">',
'<a onFocus="this.blur();" >联系人</a>',
'</div>',
'<div id="AddrTab" class="addrtab bd" style="width:180px;height:302px;height:304px\\9;">',
'<div id="quickAddrArea" style=""></div>',
'</div>',
'</div>',
'<div class="greetMarinPanel">',
'<div class="sendto" style="height:32px;"><div class="left" style="width:40px;">收件人&nbsp;</div>',
'<div id="bccAreaCtrl" class="noime div_txt" style="margin: 0 0 10px 45px;margin: 0 0 10px 5px\9;_height:20px;height:auto;min-height:20px;width:306px;_width:306px;position:absolute;"></div>',
'</div>',
'<div style="margin:0px 0 0 45px;">',
'<div class="addrtitle">可填入多个收件人，将分别发送。</div>',
'<div class="cardprop settingtable" style="zoom:1;width:300px;">',
'<img id="preview" class="pointer" title="预览贺卡" align="left" style="margin-right:10px;" src="$tfurl$" />',
'<div class="cardInfo">',
'<p>$name$</p>',
'<p></p>',
'</div>',
'<div style="clear:left;"></div>',
'</div>',
'<div>',
'<div>祝福语</div>',
'<textarea id="content" class="text txt" style="height:160px;height:142px;width:300px">$cardword$</textarea>',
'</div>',
'</div>',
'</div>',
'</div>',
'</div>',
'<div class="toolbg toolbgline" style="text-align:right;padding:3px;">',
'<input type="button" class="wd1 btn btn_true" value="发送" tabindex="6" name="sendbtn" id="sendbtn"/><input id="timeSendbtn" name="timeSendbtn" type="button" class="wd2 btn" value="定时发送" tabindex="7" /><input id="savebtn" name="savebtn" type="button" class="wd1 btn" value="存草稿" tabindex="10" /><input type="button" class="wd1 btn btn_true" value="取消" tabindex="11" id="btnCancel"/>',
'</div>',
'<style>',
'.greetMarinPanel{ margin:0 200px 10px 20px;}',
'.greetRightpanel{float:right;margin:0 10px 0 0;}',
'.cardprop{margin:5px 0 18px;padding:10px 5px;;}',
'.cardprop p{margin:3px;}',
'.cardprop .cardInfo{margin-left:90px;}',
'.sendto a{}',
'.sendto{}',
'$quickaddrStyle$',
'</style>'
]),

aEx=TE('<a opercmd="gopage" page=$page$ class="$@$if($iscurrent$)$@$curren$@$else$@$normal$@$endif$@$">&bull;</a>'),

aIz=TE([
'<div class="cardList">',
'$@$for($cards$)$@$',
'<div class="box left">',
'<div class="content">',
'<div class="pic">',
'<a href="javascript:void(0);" id="preview_$cardid$" locval="3" opercmd="preview" cardid="$cardid$"><img src="$tfurl$" /></a>',
'</div>',
'<p title="$cardname$">$cardname$</p>',
'$@$if($popular$)$@$<p>人气:<span class="pop f_family">$popular$</span></p>$@$endif$@$',
'$@$if($createtime$)$@$<p class="graytext f_family">$createtime$发布</p>$@$endif$@$',
'<p><a href="javascript:void(0);" opercmd="preview" cardid=$cardid$>预览</a> <a href="javascript:void(0);" id="send_$cardid$" opercmd="send" cardid="$cardid$">发送</a>',
'</p>',
'</div>',
'</div>',
'$@$endfor$@$',
'<div class="clr"></div>',
'<div id="gopage" class="nav">',
'<div class="navbtn"><a href="javascript:;" $@$if($nextpage$<$totalpage$)$@$opercmd="gopage"$@$endif$@$ page="$nextpage$" class="normal bd next$@$if($nextpage$>=$totalpage$)$@$Dis$@$endif$@$"></a></div>',
'<div class="navbtn"><a href="javascript:;" opercmd="gopage" page="$prevpage$" class="normal bd pre$@$if($prevpage$<0)$@$Dis$@$endif$@$"></a></div>',
'<div class="navBull b_size">',
'$pagepoints$',
'</div>',
'<div class="clr"></div>',
'</div>',
'</div>'
]),

fC=
{
btns:aHY,
log:aDQ,
dialog:aIo,
cgi:aJw,
preview:aDs,
dellid:aIq,
dellintro:aIl,
mailcontent:aKJ,
send:aHk,
page:aEx,
list:aIz
};


var yV=
{
eg:function(ak,eB)
{
return ak&&ak.getAttribute?ak.getAttribute(eB):"";
},

dMa:function(ak,Ve)
{
var lg={};
for(var i=0;i<Ve.length;i++)
{
var aV=Ve[i];
lg[aV]=yV.eg(ak,aV);
}
return lg;
},

bdq:function(ag,al)
{
var ax=getEventTarget(ag);

while(ax&&ax!=al.document.body)
{
if(ax.getAttribute&&ax.getAttribute('opercmd'))
{
return ax;
}
ax=ax.parentNode;
}
return null;
},

ari:function()
{
!(wT.QMAddress&&QMAddress.isInit())&&initAddress();
loadJsFileToTop(getPath("js"),[getFullResSuffix("qmaddrinput.js")]);
}
};





var Ur={},
dEf=Ur.appGrCard=inheritEx("QMGrCard",Object,
function(as)
{
return{
$_constructor_:function(al)
{
if(al)
{
this.ec(al);
}
},

get:function(aB)
{
return fC[aB];
},

ec:function(al)
{
var ad=this;
ad.Cw(al);
ad.bND(al);
ad.kb();


ad.cqM(al);
switchFolder("folder_card");
},

Cw:function(al)
{
var ad=this;

ad.bj=al;
ad.aNS;
ad.buE;
ad.cwl=al.location.getParams()["select"]=="sr",
ad.boP={
"preview":ad.ace,
"send":ad.ace,
"gopage":ad.aKn
};
},

cqM:function(al)
{
var ad=this;
al.initCardListPage({},{
"GetSendContent":function()
{
return ad.cCh();
},
"ComposeCard":function(fD)
{
return ad.cAZ(fD);
},
"CheckHasSetCard":function(){
return true;
},
"disableAll":function(LY)
{
return ad.aRa(LY);
},
"doVerifySubmit":function()
{
ad.hN("frm").submit();
},
"ErrorCallBack":function(){
return ad.cBI();
}
});
},

bND:function(al)
{
var ad=this,
gv=ad.buE=al.oPageData,
clf=gv.oGrCard,
aKq=gv.sCurCate1,
alX=gv.sAuto,
bBC={};

gv.sCurCate1=aKq=aKq||"hot";

for(var i in clf)
{
if(i!=0)
{
bBC[i]={
obj:ad.hN("tab_"+i),
container:ad.hN("cardlist_"+i)
}
}
}

var ut=new qmTab({
win:al,
tab:bBC,
style:{},
isEnableAnimation:true,
onchange:function(Kj,adZ)
{
var xB=ad.hN("cardlist_"+adZ);
if(xB)
{
ad.hN("cardListContainer").style.height=(xB.scrollHeight)+"px";
}
ad.cCV(Kj,adZ);
if(!adZ&&alX&&aKq)
{
setTimeout(function(){
fireMouseEvent(ad.hN(alX),"click");
});
}
},
onchangeend:function(Kj,adZ)
{
ad.hN("cardListContainer").style.height="auto";
}

});


if(alX&&alX.indexOf(",")>0)
{
var bpq=alX.split("_"),
afL=bpq[1].split(","),
bV=parseInt(afL[0])+(Math.round(Math.random()*100)%(parseInt(afL[1]-afL[0])+1));

alX=[bpq[0],ad.biH()[bV].cardid].join("_");
}

ut.change(aKq);
},

kb:function()
{
var ad=this;
addEvent(ad.bj.document.body,"click",function(ag)
{
var ax=yV.bdq(ag,ad.bj);

if(ax)
{
var aOy=ad.boP[yV.eg(ax,"opercmd")];
callBack.call(ad,aOy,[ax]);
}
}
);
},

cCh:function()
{
return this.hN("content").value;
},

cBI:function()
{
this.aRa(false);
getTop().showProcess(0);
},

aRa:function(LY)
{
var ad=this,
Si=QMDialog(ad.get("dialog"));

for(var i in ad.get("btns"))
{
ad.hN(ad.get("btns")[i]).disable=LY;
Si&&(Si.S(ad.get("btns")[i]).disabled=LY);
}
},

cAZ:function(fD)
{
var ad=this,
jk=ad.bj.location,
bOf=jk.getParams()["s"],
aws=ad.aQk(),
AO=getUserInfoText("alias"),
adz=aws.cfurl,
amg=aws.tfurl,
bbq=adz.split("greetingcard/").pop();

ad.hN("subject").value=ad.get("mailcontent").replace({
alias:AO,
cardname:aws.cardname
},'subject');

ad.hN("cardid").value=bbq;
ad.hN("sendfrom").value=[
ad.bj.oPageData.sCurCate1,
bbq,
ad.afx().afm,
aws.rank
].join(":")+","+jk.getParams()["loc"];

if(bOf!="birthcard"&&bOf!="replybirthcard")
{
ad.hN("birthCard").value=ad.bj.oPageData.sCurCate1=="sr"?"3":"";
}

ad.hN("content").value=ad.get("mailcontent").replace({
alias:htmlEncode(AO),
cardname:aws.cardname,
addr:getUserInfo("addr")||getCookie("qqmail_alias"),
cardsrc:bbq,
cfurl:adz,
tfurl:amg,
content:fD,
linkclassname:ad.cwl?"qqmail_birthcard_reply":"qqmail_card_reply",
sid:getSid()
});
},

cCV:function(Kj,adZ)
{
var ad=this,

cLQ=ad.hN("cardlist_"+Kj),
cLH=ad.hN("tab_"+Kj),
dOT=ad.hN("cardlist_"+adZ),
bhi=ad.hN("tab_"+adZ),

gv=ad.bj.oPageData,
dxM=gv.oGrCard;

gv.sCurCate1=Kj;

if(bhi)
{
bhi.className=bhi.className.replace(/ curren/gi,"");
}
cLH.className+=" curren";
ad.ahf(cLQ,Kj);
},

aKn:function(am)
{
var ad=this,
bt=parseInt(yV.eg(am,"page")),
aQv=ad.bj.oPageData.sCurCate1,
Dz=ad.hN("cardlist_"+aQv);

if(bt>=0&&bt<parseInt(ad.afx().totalpage))
{
ad.ahf(Dz,aQv,bt);
}
},

akh:function(ag)
{


var ad=this;
xg=ag.ctrlKey,
wP=ag.altKey,
qP=ag.keyCode;

if(xg&&qP==13 
||wP&&qP==83)
{
fireMouseEvent(ad.cLa("sendbtn"),"click");
}




},

bNR:function(bKx,mE)
{
var ad=this,
bGK;

for(var i in bKx)
{
bGK=bKx[i];
mE.S(bGK).onclick=function()
{
ad.hN("content").value=htmlEncode(mE.S("content").value).replace(/\n/gi,"<br>");
ad.hN(this.name).click();
}
}
},



afx:function(FR)
{
var ad=this,
gv=ad.bj.oPageData;

FR=FR||gv.sCurCate1;
return gv.oGrCard[FR];
},


aQk:function(beT)
{
var ad=this,
beT=beT||ad.aNS,
Dd=ad.biH();

for(var i in Dd)
{
if(Dd[i].cardid==beT)
{
return Dd[i];
}
}
},
biH:function()
{
var ad=this,
az=ad.afx(),
qj=az.afm||0,
Dd=az["cards_"+qj];

return Dd;
},


ahf:function(WO,FR,bt,aCI)
{
var ad=this,
EH=ad.afx(FR),
qj=EH.afm||0,
bt=typeof(bt)=="undefined"?qj:bt;

if(!WO.innerHTML||bt!=qj)
{
var Dd=EH["cards_"+bt],
ku=parseInt(EH.totalpage);

if(Dd)
{
var XD=[];
for(var i=0;i<ku;i++)
{
XD.push(ad.get("page").replace({
iscurrent:i==bt,
page:i
}));
}
WO.innerHTML=ad.get("list").replace({
"cards":Dd,
"prevpage":bt-1,
"nextpage":bt+1,
"totalpage":ku,
"images_path":getPath("image"),
"pagepoints":XD.join("")
});
EH.afm=bt;
}
else if(aCI)
{
debug("get card json error");
}
else
{
var dB=new QMAjax();

dB.method="get";
dB.url=ad.get("cgi").replace({
sid:getSid(),
idx:FR,
page:bt
});
dB.onComplete=function(hG)
{
var fY=null;
if(hG)
{
if(hG.responseText.indexOf("totalpage")!=-1)
{
fY=evalValue(hG.responseText);
for(var i in fY)
{
extend(EH,fY[i]);
}
callBack.call(ad,ad.ahf,[WO,FR,bt,true]);
}
}
}
dB.onError=function()
{
}
dB.send();
}
}
},

ace:function(am,agq)
{
var ad=this,
uh=yV.eg(am,"opercmd")||agq;

if(am)
{
ad.aNS=yV.eg(am,"cardid");
ossLog("delay","all",ad.get("log").replace(
{
type:uh,
source:yV.eg(am,"locval")||"2"
}
));
}

var Ax=ad.aQk(),
aLB=Ax.cardword,
adz=Ax.cfurl,
amg=Ax.tfurl,
EO,hD;

if(uh=="preview")
{
var	ajp="",

aKd="["+Ax.cardid+"]";


if(ad.get("dellid").indexOf(aKd)!=-1)

ajp=ad.get("dellintro");



EO=ad.get("preview").replace(
{
dellcarddesc:ajp,

flashcode:generateFlashCode("cardFlash",adz,{
width:440,
height:330
},
{
wmode:"opaque"
})
}
);
}
else
{
yV.ari();
EO=ad.get("send").replace(
{
"tfurl":amg,
"name":Ax.cardname,
"cardword":aLB,
"quickaddrStyle":ad.bj.oPageData.quickaddrStyle
}
);
}

hD=[uh=="preview"?"预览":"发送","贺卡：",Ax.cardname].join("");

var Si=QMDialog(ad.get("dialog"));
if(Si)
{
Si.setHeader(hD).setBody(EO);
}
else
{
new QMDialog({
sId:ad.get("dialog"),
sTitle:hD,
sBodyHtml:EO,
nWidth:595,
nHeight:410,
ondragstart:function()
{
var bi=this.S("content");
if(bi)
{
bi.focus();
}
},
onbeforeclose:function()
{
var bi=this.S("content");
if(bi)
{
bi.focus();
}
return true;
},
onshow:function()
{
var wi=this.option("nY");
if(wi<70)
{
this.option("nY",70);
}
},
onload:function()
{
ad.aQm(this);
}
});
}
},

aQm:function(mE)
{
var ad=this,
agj=mE.S("btnPrevSend");

mE.S("btnCancel").onclick=function()
{
mE.close(!!agj);
}

if(agj)
{
agj.onclick=function()
{
ossLog("delay","all",ad.get("log").replace(
{
type:"send",
source:"1"
}
));
ad.ace(null,"send");
}
}
else
{

ad.bNR(ad.get("btns"),mE);

addEvent(mE.getPanelDom(),"keydown",function(ag)
{
ad.akh(ag);
});

addEvent(mE.S("preview"),"click",function(ag)
{
ossLog("delay","all",ad.get("log").replace(
{
type:"preview",
source:"1"
}
));
ad.ace(null,"preview");
});


waitFor(
function()
{
return wT.QMAddrInput;
},
function(aY)
{
if(aY)
{
var bm=new QMAddrInput(
{
id:"bcc",
win:mE.getDialogWin(),
dom:{container:mE.S("bccAreaCtrl")},
dispMode:"onlynick",
isEnableTip:false,
maxItemView:10
}
);

setTimeout(function()
{
bm.focus("end");
},
500
);

waitFor(
function()
{
return wT.QMLinkman
&&wT.QMAddress&&QMAddress.isInit();
},
function(aY)
{
new QMLinkman(
{
nType:0,
bSupportGroup:true,
oMainGroup:["mailgroup","domaingroup","qqgroup"],
oContainer:mE.S("quickAddrArea"),
onselect:function(nV)
{
QMLinkman.addAddrEx(nV,1,bm);
}
}
);













}
);

}
else
{
debug("load qmaddrinput error");
}
}
);
}
},

cLa:function(aK)
{
return QMDialog(ad.get("dialog")).S(aK);
},

hN:function(aK)
{
return S(aK,this.bj);
}
}
});

Ur.oGrCardTools=yV;
wT.QMGrCard=Ur;

})(window);
