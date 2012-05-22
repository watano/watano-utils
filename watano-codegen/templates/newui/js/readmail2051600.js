(function(wT)
{
var
gw=
{

cYQ:"quickreply",
bgC:"source",
bpf:"sendbtn",
dxA:"qmQuickReplyTextContainer",
dxB:"qmQuickReplyButtonContainer",
dcL:"afterSendDiv",
dcK:"afterSendingDiv",
cej:"QuickReplyPart",

cYO:"QMEditorArea",
cYP:"QMEditorToolBarPlusArea",

dYy:"jumpToNewWin",

ehb:"replyfrm",

cWq:"submail_start_div",
bak:"contentDiv",
dYL:"img_star",
dtr:"starStatus",
dsY:'tagContainer',
cYA:"mailContentContainer",

dxn:"send_time_msg",

ddt:"attachment",
cXI:"pageEnd",

cYf:"nextmail_top",
cYe:"nextmail_bt",
dvT:"nextnewmail",
dvU:"nextnewDiv",

dxD:"QQMailBgMusicInfo",
ebV:"bgmusic",
cYl:"mp3player_container",
dvk:"mp3player_info",

bWt:"submail",
aQa:"fold",
dXW:"detail",
dtj:"sum",
cWc:"expand",
dXX:"detailBtn",

dyp:"referinfo",


bSP:"rmd",
bsk:"remarkContent",
brs:"remarkcontainer",
aKV:"remarktext",
brS:"remarkwrite",
bRC:"remarkread",
dyh:"remarksave",


cVs:"senderInfo",
dxk:"senderInfo2",
dxj:"senderInfo3",
dZs:"mainmail",


dyk:"rejectgroupy",
dyl:"rejectgroupn",

edE:"spam",
ckF:"cheatcode_greenbar",
cZS:"greenbar_text"
},

cJL=
{
dXb:"convreandfw",
dtF:"spam",
dvo:"moreoprContainer"
},

ayn="请在此输入备注...",

dId=T([
'<img src="$images_path$spacer.gif" class="icon_addMusic_d"/>',
'&nbsp;<a href="http://cgi.music.soso.com/fcgi-bin/m.q?w=$title$%20$author$&t=0" target="_blank">$title$ - $author$</a>']),

cPQ=TE([
"/cgi-bin/mail_list?sid=$sid$",
'$@$if($s$=="from_unread_list")$@$',
'&flag=new&folderid=$folderid$&s=unread',
'$@$else if($s$=="from_star_list")$@$',
'&flag=star&folderid=$folderid$&s=star',
'$@$endif$@$',
'$@$if($more$)$@$',
'$more$',
'$@$endif$@$'
]),

bSA="/cgi-bin/readmail?sid=$sid$&mailid=$mailid$",

dah=TE([bSA,
"&t=",
"$@$if($t$)$@$",
"$t$",
"$@$else$@$",
"compose",
"$@$endif$@$",
"&s=$s$&disptype=$disptype$"
]),

dFa=TE("/cgi-bin/grouplist?oper=reject&sid=$sid$&reject=$yn$&gid=$gid$@groupmail.qq.com&t=mail_mgr2&mailaction=reject_group"),

dHd=TE("/cgi-bin/reader_list?type=home&classtype=allfriend&uin=$mail.from.qq$&t=reader_personal&sid=$sid$&s=sidebar"),

dHe=TE("/cgi-bin/mail_list?sid=$sid$&t=mail_list_preview&sender=$mail.from.addr$&receiver=$mail.from.addr$&matchtype=include&folderid=all&page=0&name=$mail.from.name$&pagesize=5&mailidx=$mailid$&listmode=0&from=sidebar&s=$s$&record=n"),

dzB=TE([
'<form method="$sMethod$" id="$sFormId$" name="$sFormId$" target="$sTarget$" action="$sAction$" enctype="multipart/form-data">',
'$@$for($oInputs$)$@$',
'<input name="$name$" type="hidden" value="$value$"/>',
'$@$endfor$@$',
'</form>']),

cMT='"$name$"<$addr$>; ',

cPL=TE([
'$@$for($addrs$)$@$',
cMT,
'$@$endfor$@$'
]),

bV={
dFG:T(["<div style='padding:25px 10px 0 35px;text-align:left;'><b>您是密送的收件人，其他收件人不知道您收到了此邮件！<br>是否要回复全部收件人？</b></div>",
"<div style='padding:23px 10px 10px 10px;text-align:right;'>",
"<input type=button id='replyall' class='btn wd4' value='回复全部'>",
"<input type=button class='btn wd4' value='回复发件人' id='reply'>",
"<input type=button class='btn wd4' value='取消' id='cancel'>",
"</div>"]),

cIT:TE([
'<div style="font:Verdana normal 14px;color:#000;padding:8px 0px;">',
'<div>&nbsp;</div><div>&nbsp;</div>',
'<div style="FONT-SIZE: 12px;FONT-FAMILY: Arial Narrow;padding:2px 0 2px 0;">',
'------------------&nbsp;$REFER$&nbsp;------------------',
'</div>',
'<div style="FONT-SIZE: 12px;background:#efefef;padding:8px;">',
'<div><b>$FROM$</b> "$from.name$"<$from.addr$>; </div>',
'<div><b>$DATE$</b> $date$</div>',
'<div><b>$TO$</b> $@$for($to$)$@$',cMT,'$@$endfor$@$</div>',
'$@$if($cc.length$)$@$',
'<div><b >$CC$</b> $@$for($cc$)$@$',cMT,'$@$endfor$@$</div>',
'$@$endif$@$',
'<div><b>$SUBJECT$</b> $subject$</div>',
'</div><div>&nbsp;</div>',
'$orgcontent$',
'</div>'
]),

bBj:T([
'<div style="font-family:$fontName$;font-size:$fontSize$;color:$fontColor$;">',
'$content$',
'</div>'
])
},

bMG={
cHh:{
REFER:"原始邮件",
FROM:"发件人:",
DATE:"发送时间:",
TO:"收件人:",
CC:"抄送:",
SUBJECT:"主题:"
},
cIv:{
REFER:"Original",
FROM:"From:",
DATE:"Date:",
TO:"To:",
CC:"Cc:",
SUBJECT:"Subject:"
}
},


dBE=T("/cgi-bin/config_blackwhitelist?sid=$sid$&act=whitelist&Fun=submit&pagefrom=readmail&group=$fromaddr$&sloc=readmail_yellow_tip"),
bFN=T("/cgi-bin/report_cgi?r_type=$rtype$&r_result=$rresult$&r_msg=$rmsg$");
















function bSC(ah,bzX)
{
var cjY=ah.sFormId||unikey(),
fh=S(cjY,ah.oWin),
hI=[];

if(fh)
{
removeSelf(fh);
}
bzX=bzX||{};
bzX.sid=bzX.sid||getSid();
E(bzX,function(Zs,og)
{
hI.push({name:og,value:Zs});
}
);
ah.oInputs=hI;
insertHTML(ah.oWin.document.body,"beforeEnd",dzB.replace(
extend(
{
sFormId:cjY,
sTarget:"actionFrame",
sMethod:"POST"
},ah)
)
);
return S(cjY,ah.oWin);
}


function dQO(aT,al)
{
rdVer(aT,1);
if(!rdVer.check(al))
{

reloadFrm(al);
}
}

function dOx(boF,boI,btf,boW,boP)
{
var cBx=new Date();
var ciW=new Date(boF,boI,btf,boW,boP,0);
var cJY=cBx>ciW;
return["此邮件是定时邮件，",cJY?"已":"将","在",
'<span style="color:black;">'
,boF,"年",boI,"月",btf,"日",
boW,"时",boP,"分",'</span>',
"发出。"].join("");
}

function eew(fJ)
{
return filteScript(fJ.replace(
/<div id=\'?\"?QQMailBgMusicInfo\'?\"?.*?>.*?<\/div>/ig,""
).replace(/<player .*?><\/player>/ig,"").replace(/(^\s+)|(\s+$)/ig,""));
}

function dXB(gq)
{
var	bbz=true,
aMu;

try{
aMu=getDefalutAllMail();
}
catch(e)
{
return false;
}

function bdU(aJW)
{
for(var i=0;i<aJW.length;i++)
{
if(aJW[i])
{
var fE=aJW[i].addr||"",
cgG=aJW[i].qq;
if(cgG==g_admuin)
{
return true;
}
for(var j=0;j<aMu.length;j++)
{
if((aMu[j].email||"").toLowerCase()==fE.toLowerCase())
{
return true;
}
}
}
}
return false;
}

if(aMu.length)
{
bbz=!(bdU(gq.to)||bdU(gq.cc)||bdU([gq.from]));
}
else
{
bbz=false;
}
return bbz;
}

function diK(ag,XR)
{
return(ag.ctrlKey&&ag.keyCode==13||ag.altKey&&ag.keyCode==83);
}


var ya={};

var aeW=ya.aeW=inherit("_qmBaseDM",Object,function(at)
{
return{

$_constructor_:function()
{
var bq=arguments;

if(bq.length)
{
var ad=this;

ad.avw=bq[bq.length-1];
ad.bm=ad.avw.oWin;
ad.dtR=ad.avw.sModuleName;
ad.ef.apply(ad,arguments);
}
},

CG:function(){},

kf:function(){},

qg:function(){},

Ot:function(){},

ef:function()
{
var ad=this;

ad.CG.apply(ad,arguments);
ad.kf.apply(ad,arguments);
ad.qg.apply(ad,arguments);
},

attr:function(aG,eF,bo)
{
var lo=attr(aG,eF,bo);
if(!lo&&aG)
{
return bo===undefined?aG[eF]:(aG[eF]=bo);
}
return lo;
},

S:function(arp)
{
var ad=this;

return S(arp+(ad.avw.sAux||""),ad.bm);
},

SN:function(aC)
{
var ad=this;
return SN(aC+(ad.avw.sAux||""),ad.bm);
},

context:function(cto)
{
var ad=this;
cto=cto||"sContext";
return ad.avw[cto];
},

Xn:function(Zs,ag)
{
var ad=this,
aAv=getEventTarget(ag),
aP=aAv.ownerDocument,
dRj=ad.dtR,
yA,fQ,bVh,ay;

while(aAv&&aAv!=aP)
{
yA=attr(aAv,Zs);
if(yA)
{
fQ=yA;
ay=aAv;
}
yA=attr(aAv,aeW.dAk);
if(yA)
{
if(yA==dRj)
{
if(bVh)
{
var cRe=ad.Ot(bVh);
cRe&&cRe.Xn(Zs,ag);
}

if(fQ&&typeof(ad[fQ])=="function")
{
ad[fQ](ay,ad.context("sContext"),ag);
}
break;
}
else
{
if(attr(aAv,aeW.cQS)!="1")
{
bVh={
sModuleName:yA,
sContext:attr(aAv,aeW.dBW),
sAux:attr(aAv,aeW.dCG)
}
}
else
{
bVh=null;
}
fQ=null;
}
}
aAv=aAv.parentNode;
}
},


evt:function(Ie,bnQ)
{
var ad=this,
dpR=function(aRt)
{
aRt=typeof(aRt)=="string"?
ad.S(aRt):aRt;

attr(aRt,aeW.cQS,"1");
E(Ie,function(Zs)
{
var cWi=aeW.dGv[Zs];
cWi&&addEvent(aRt,cWi,function(ag)
{
ad.Xn(Zs,ag);
}
);
}
);
};

if(typeof(bnQ)=="string")
{
bnQ=ad.S(bnQ);
}

if(bnQ.nodeType)
{
dpR(bnQ);
}
else
{
E(bnQ,function(aRt)
{
dpR(aRt);
}
);
}
}

}
},
{
cQS:"_module_state_",
dAk:"module",
dBW:"context",
dCG:"aux",
dGv:{
ck:"click",
md:"mousedown",
dck:"dblclick"
}
});

ya.qmReadMail=inherit("qmReadMail",ya.aeW,
function(at)
{
return{







































qg:function()
{

var ad=this;

ad.edK.apply(ad,arguments);


setTimeout(function()
{
ad.cjf.apply(ad,arguments);
},50
);

},

dOe:function()
{
var ad=this,
aPL=ad.S(gw.cXI);

ad.bm.document.body.appendChild(aPL);
show(aPL,true);
},

cyV:function()
{
var ad=this,
aQ=ad.dD;

QMAjax.send(
T('/cgi-bin/readmail?sid=$sid$&mailid=$mailid$&t=readsubmail&mode=fake&s=r2&base=$base$&pf=$pf$').replace({
sid:getSid(),
mailid:ad.getMailId(),
pf:rdVer.isPre(aQ.folderid)?1:0,
base:rdVer("BaseVer",0)
}),{
method:"GET",
headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},
onload:function(ba,cs)
{
var gB=trim(cs);
if(ba&&gB.indexOf("(")==0)
{
var gc=evalValue(gB);
if(gc)
{










ad.dDN(gc);
}
}
else
{
var vE=getActionWin().document;
vE.open();
vE.write(cs);
}
}
}
);
},

czp:function()
{
var ad=this,
aQ=ad.dD,
sMailId=ad.getMailId();

if((aQ.bNewMail==1)&&(!QMMailCache.getData(sMailId)))
{
folderOpt({
bNewMail:aQ.bNewMail,
sFolderId:aQ.folderid,
sMailId:sMailId,
oMatchTag:aQ.oMatchTag,
bStar:aQ.bStar
});
}
else
{
getTop().recordCompareReadedMailId(sMailId);
}
},

kf:function()
{
var ad=this,
au=ad.bm;

ad.evt(["ck","md"],au.document.body);
addEvent(au,"resize",function()
{
ad.cXS();
}
);
},

edK:function()
{
var ad=this,
au=ad.bm;

au.QMReadMail=ad;

au.go=function(ag,bXP,dg,ejn,ddL)
{
var ay={opt:dg};

if(ddL)
{
ay.more=["&loc=",ad.dD.loc,ddL].join("");
}
ad.optMail(ay,ad.getMailId(),ag);
}

au.fw=function(ajo,oF)
{
callBack.call(ad,ad[ajo],oF);
}
au.goback=function()
{
ad.goback();
}
au.setRemindSpan=function(aT)
{
ad.S('remind_edit_'+aT).innerHTML=(reminddetail["mailid:"+aT]||"")
.replace(/linktitle=.*&sid=/g,function(bo)
{
return bo.replace(/\'/g,"&#039;");
}
);
}
au.setMoreOperation=function(ecU,ecR)
{
ad.cNp&&ad.cNp.switchPair(ecU,ecR);
},

au.fjGetFlvAttrUrl=function()
{
return T("/cgi-bin/readtemplate?sid=$sid$&t=video_ref.smil&vsrc=$vsrc$").replace({
sid:getSid(),
vsrc:encodeURIComponent(au.sFlvPlayUrl.substr(1))
});
}
},

CG:function(ah,Im)
{
var ad=this;
ad.dD=ah;
ad.WD=Im;
},





































dDN:function(an)
{
var ad=this,
aeU,
bJx=ad.S(gw.cYf),
bJz=ad.S(gw.cYe),
bKt=ad.S(gw.dvT);

if(bJz&&bJx&&bKt)
{
if(an.sPn.indexOf("上一封")!=-1&&an.sPn.indexOf("下一封")!=-1)
{
bJx.innerHTML=bJz.innerHTML=an.sPn;
}
if(aeU=trim(an.sPnNew))
{
bKt.innerHTML=aeU;
}
show(attr(ad.S(gw.dvU),"mailid",an.sPnNewMailId),aeU!="");
}
},

clearCache:function()
{
rdVer(this.getMailId(),1);
},

dMq:function(ij)
{
var ad=this,
bK=ad.getMailId();

switch(ij)
{
case"delremark":
case"addremark":
ad.dxY.toggle(bK);
break;
case"delremind":
case"addremind":
var nC=GelTags("a",S("remind_edit_"+bK,document));
if(nC&&nC[0])
{
if(bA.sId=="addremind")
{
fireMouseEvent(nC[0],"click");
}
else
{
var fI=location.getParams(S("remind_delete",document).href),
fL=document.remind_frm;
fL.ruleid.value=fI["ruleid"];
fL.from.value=fI["from"];
fL.submit();
}
}
break;
case"print":
ad.optMail2({opt:"print"});
break;
}
},

cbJ:function(vS)
{
if(bnewwin)
{
var clH=window.opener,
ad=this,
aQ=ad.dD;

try{
if(clH&&clH.readMailFinish)
{
clH.readMailFinish(
ad.getMailId(),
aQ.reandfw,
aQ.folderid
);
}
}
catch(e)
{
}
}
},

cXS:function()
{
var ad=this,
bER=ad.S(gw.cYA),
dHH=ad.bm.document.documentElement.clientWidth;

if(ad.dD.xqqstyle!="6"&&bER)
{
bER.style.marginRight=dHH>1000?"170px":"0px";
}
},

Ot:function(blK)
{
var ad=this,
acM,
eQ=ad.WD,
dj=extend({},ad.avw,blK),
aQ=ad.dD;

switch(dj.sModuleName)
{
case"qmRemark":
acM=ad.dxY=new ya.qmRemark(
function(ctv)
{
var coU=ad.cNp;
if(coU)
{
switch(ctv)
{
case"del":

coU.switchPair("addremark","delremark")
break;
case"save":
coU.switchPair("delremark","addremark")

}
}
QMMailCache.setExpire();
ad.clearCache();
},dj
);
break;
case"qmMoreOptSel":
acM=ad.cNp=new ya.qmMoreOptSel(
{
oMoreOpt:aQ.oMoreOpt,
fOnSelect:function(ij)
{
ad.dMq(ij);
}
},dj);
break;
case"qmQReply":

acM=ad.dgN=new ya.qmQReply(aQ,eQ,{
fCheckBcc:function()
{
callBack.call(ad,ad.checkBcc,arguments);
},
sSubTmp:""
},dj);
break;
case"qmAntiSpam":
acM=ad.dZD=new ya.qmAntiSpam(aQ,eQ,dj);
break;
case"qmSenderInfo":
acM=new ya.qmSenderInfo(aQ,eQ,dj);
break;
case"qmPlayerParser":
acM=new ya.qmPlayerParser(
{
oContentDom:ad.S(gw.bak),
bManuPlay:aQ.bMusicManuPlay
},dj);
break;
}
return acM;
},

cjf:function()
{
var ae=getTop(),
ad=this,
au=ad.bm,
eQ=ad.WD,
aQ=ad.dD,
ET=ad.S(gw.bak),
iQ=S("folder_"+aQ.folderid,ae),
bNk=au.document.body.background;


ad.cXS();


ad.dOe();

ad.cyV();


aQ.bBccToMe=dXB(eQ);


aQ.sMailContent=gw.cYA;

ad.cbJ();

if(bNk)
{
ET.style.backgroundImage="url("+bNk+")";
}

swapLink(ET,aQ.disptype,au);

initMailSelect(aQ.oMoveItems,true,aQ.bOpenTag=="1",
au,aQ.folderid,aQ.bAutoTag);



ad.Ot({sModuleName:"qmQReply"});


ad.Ot({sModuleName:"qmMoreOptSel"});


ad.Ot({sModuleName:"qmRemark"});


ad.Ot({sModuleName:"qmAntiSpam"});

ad.Ot({sModuleName:"qmSenderInfo"});

ad.Ot({sModuleName:"qmPlayerParser"});


var dh=au.document.body;
if(dh.scrollWidth>dh.clientWidth)
{
requestShowTip("tipRemindEdit",19,au);
}




if(iQ&&iQ.parentNode.parentNode.id=="folder_pop_td")
{
new QMSender(
{
oWin:au,
nCurFolderId:aQ.folderid,
sWidth:210,
sCurSaveFrom:aQ.saveFrom
}
);
}

aQ.bClearRDCache&&ad.clearCache();


ad.dFy();

if(aQ.flowid)
{
ossLog("realtime","all","flowid="+aQ.flowid);
}



ad.czp();
},

dFy:function()
{
var cnf=this.S(gw.dxn),
bU=[];

if(cnf)
{
E(["year","month","day","hour","min"],function(Zs)
{
bU.push(attr(cnf,Zs));
}
);
cnf.innerHTML=callBack(dOx,bU);
}
},



getMailInfo:function()
{
return this.WD;
},


getCBInfo:function()
{
var ad=this,
aQ=ad.dD,
eQ=ad.WD,
bya=eQ.from||{},
Xt=ad.S(gw.dYL);

return{
oWin:ad.bm,
sFid:aQ.folderid,
bML:false,
oMail:[{
sMid:ad.getMailId(),
bSys:aQ.bSys,
bUnr:false,
bSubUnr:false,
bStar:Xt.className=='qm_ico_flagon',
bTms:false,
oTagIds:aQ.oMatchTag,
sSName:bya.name,
sSEmail:bya.addr,
oStar:Xt,
oTCont:ad.S(gw.dsY)
}]
};
},

notify:function(ctv,aff)
{
var ad=this,
eQ=ad.WD;

switch(ctv)
{
case"delsubmail":
if(--eQ.nLen<=0)
{
ad.goback();
}
QMMailCache.setExpire();
break;
case"toRefer":
var aqI=ad.cMw[aff];
if(aqI)
{
aqI.seek();
}
break;
}
},

getMailId:function()
{
return this.context("sContext");
},

modifyTag:function(nM,aZB)
{
var apB=this.dD.oMatchTag;
if(!apB)
{
return;
}
for(var aD=apB.length-1;aD>=0;aD--)
{
if(apB[aD]==nM)
{
break;
}
}
if(aZB)
{
if(nM<0)
{
apB.length=0;
}
else
{
apB.splice(aD,1);
}
}
else
{
if(aD<0)
{
apB.push(nM);
}
}
},

toAttach:function(am)
{
var ad=this,
aDC=ad.S(gw.ddt+(ad.attr(am,"seq")||"")),
fK;

function dpH(times,isNotInit)
{
var Av=arguments.callee;

if(!isNotInit||!Av.time)
{
Av.orgclass=aDC.className;
Av.time=0;
}
aDC.className=(Av.time%2==0)?"toolbg":Av.orgclass;
aDC.style.height=(Av.time%2==0)?"auto":"auto";
if(++Av.time<times)
{
setTimeout(function(){
Av(times,true);
},70);
}
}

if(aDC)
{
fK=ad.bm.document.documentElement;
if(fK.scrollHeight<=fK.clientHeight)
{
dpH(6);
}
else
{
scrollIntoMidView(aDC,fK,false,0,true);
dpH(4);
}
}
},

prevandnext:function(am,aT,ag)
{
var ad=this,
bK=ad.attr(am,"mailid");

rdVer.log(bK,"hit");
goUrl(
ad.bm,
["/cgi-bin/readmail?",
rdVer.url(bK,ad.dD.folderid,"","",false,"",false,"",true),
bnewwin?"&newwin=true":""].join(""),
true
);
ag&&preventDefault(ag);
},

dhR:function()
{
var aQ=this.dD;

return cPQ.replace(
{
sid:getSid(),
folderid:aQ.folderid,
s:aQ.subtmpl
}
);
},

goback:function()
{
if(bnewwin)
{
goUrlTopWin("/cgi-bin/frame_html?sid="+getSid());
}
else
{
trace("history back","","start","mail_list");

if(!QMHistory.tryBackTo("mail_list"))
{
var ad=this;
ad.bm.location.href=QMHistory.getUrl("mail_list")||ad.dhR();
}
}
},


tag:function(am,aT,ag)
{
var ad=this;
QMTag.readclose(ag,ad.getCBInfo());
},

starMail:function(am)
{
var ad=this;
starMail(null,extend(ad.getCBInfo(),
{
oncomplete:function(ejc,ahh)
{
ad.clearCache();
show(ad.S(gw.dtr),ahh);
return true;
}
}
));
},

previewAttach:function(am,aT,ag)
{
var ad=this,
awV=T(bSA).replace(
{
sid:getSid(),
mailid:aT
}
);
window.open(awV+"&nocheckframe=true&t=attachments&select="+ad.attr(am,"select"),"_blank");
preventDefault(ag);
},

playAttach:function(am)
{
var ad=this,
ayM=GelTags("span",am.parentNode.parentNode),
ayO=ayM.length==0?{}:ayM[0],
bw=ad.S(gw.cYl);

if(ayO.getAttribute("player")){
show(bw,true);
audioPlay({
container:bw,
url:ayO.getAttribute("player"),
title:ayO.innerHTML,
autoplay:true,
global:true
});
return true;
}
return false;
},

checkBcc:function(am,aT,ag)
{
var ad=this;

if(ad.dD.bBccToMe)
{
new QMDialog({
sId:"reply_dlg",
sTitle:"回复提示:",
sBodyHtml:bV.dFG.toString(),
nWidth:405,
nHeight:160,
onshow:function(){
this.S("replyall").focus();
},
onload:function(){
var cu=this;
addEvent(cu.S("replyall"),"click",function(){
ad.dD.bBccToMe=false;
if(am.tagName=="TEXTAREA")
{
ad.dgN.focus();
}
else
{
ad.optMail({opt:"reply_all"},aT);
}
cu.close();
});
addEvent(cu.S("reply"),"click",function(bN){
ad.optMail({opt:"reply"},aT);
cu.close();
});
addEvent(cu.S("cancel"),"click",function(){cu.close()});
}

});
preventDefault(ag);
return true;
}
},

setAutoDel:function(am,aT)
{
var ad=this,
au=ad.bm,
aQ=ad.dD;

if(aQ.xqqstyle=="6")
{
bSC(
{
oWin:au,
sAction:"/cgi-bin/mail_mgr"
},
{
mailid:aT,
mailaction:"autodel",
reporttype:jv(am,"flag"),
s:"autodel"
}
).submit();
}
},

mailRecall:function(am,aT)
{

var cXz=attr(am,"loccnt"),
zI=attr(am,"mid"),
dZg=attr(am,"mdata"),
ccD=attr(am,"odd"),
bWZ=0;

if(cXz>0&&ccD!="0"){
bWZ=1;
new QMDialog({
sId:"mailrecall",
sTitle:"撤回邮件",
sUrl:T("/cgi-bin/readtemplate?sid=$sid$&t=mailrecall_confirm&mailid=$mailid$&localcount=$loccnt$&messageid=$mid$&date=$mdate$&odd=$odd$").replace(
{
sid:getSid(),
mailid:aT,
loccnt:cXz,
mid:zI,
mdate:dZg,
odd:ccD
}),
nWidth:461,
nHeight:263
});
}
else
{
var bT;
if(ccD=="0")
{
bWZ=2;
bT='此邮件距发送时已超过15天，无法撤回。';
}
else
{
bWZ=3;
bT='此邮件发往非QQ邮箱，不支持撤回操作，请谅解。<br/>仅支持撤回发往QQ邮箱，且对方未阅读的邮件。';
}
msgBox(T([
'<b class="b_size">此邮件不支持被撤回</b>',
'<div style="overflow:hidden;margin-top:5px;">',
'$m$',
'</div>'
]).replace({m:bT}),"dialog");

}
ossLog("realtime","all",T([
"stat=custom&type=MAILRECALL_STAT&info=",
"$actionid$,$mailid$,$messageid$,$attachlist$"]).replace({
actionid:bWZ,
mailid:encodeURIComponent(aT),
messageid:encodeURIComponent(zI)
}));
},

xfDl:function()
{
var aUh=this.WD.oXfLinkArray;
if(aUh.length<1)return;
var XD=new(getTop().clsXfBatchDownload)();
if(!XD.init())
{
return;
}
XD.makeGetUrlArray=function()
{
var azk=[];
for(var aD in aUh)
{
azk.push(
aUh[aD].replace("t=exs_ftn_download","t=exs_ftn_getfiledownload&s=email").replace(/^http:\/\/mail.qq.com/,"")
);
}
return azk;
}
XD.DoXfBatchDownload();

},

optMail2:function(am,aT,ag)
{
var ad=this,
au=ad.bm,
LE="_blank",
iv=ad.attr(am,"opt"),
awV=T(bSA).replace(
{
sid:getSid(),
mailid:aT
}
);

switch(iv)
{
case"print":
awV+=T("&t=readmail_print&s=$s$&filterflag=true").replace({s:ad.attr(am,"s")||"print"});
break;
case"mime":
awV+="&action=readmailmime";
break;
case"dleml":
awV+="&action=downloademl";
LE="actionFrame";
break;
case"code":
awV+="&action=readmailcode";
break;
case"fwgroup":
awV+="&t=compose_group&s=forward";
LE="mainFrame";
break;
case"note":
awV+="&notefmt=1&t=note_edit_show";
LE="mainFrame";
break;
case"fweml":
awV+="&t=compose&s=forward&action=readmaileml";
LE="mainFrame";
break;
case"addc":
awV+="&filterflag=false&t=addr_detail_edit&s=addfrommail";
LE="mainFrame";
}
au.open(awV,LE);
preventDefault(ag);
},

newWinRead:function(am,aT,ag)
{
goNewWin(this.bm.location,false);
preventDefault(ag);
},

delMail:function(am)
{
var ad=this,
au=ad.bm;

rmMail(ad.attr(am,"opt")||0,
extend(ad.getCBInfo(),
{
oncomplete:function(dVQ,aW)
{
var aO=aW.url||"";
if(aO.indexOf("/cgi-bin/readmail?")!=-1)
{
ad.prevandnext({mailid:au.location.getParams(aO)["mailid"]});
return true;
}
}
}
)
);
},

optMail:function(am,aT,ag)
{
var ad=this,
au=ad.bm,
aQ=ad.dD,
iv=ad.attr(am,"opt"),
mT=aQ.folderid,
cWC=dah.replace(
{
sid:getSid(),
t:ad.attr(am,"t"),
s:iv,
mailid:aT,
disptype:aQ.disptype=="text"?"":"html"
}
);

switch(iv)
{
case"reply_all":
case"reply":
case"forward":
case"draft":
var bXM=[ad.attr(am,"more")||""];
if(iv=="draft")
{
bXM.push("&backurl="+encodeURIComponent(au.location.href));
}
if(bnewwin)
{
bXM.push('&newwin=true&fwreplynewwin=true');
}
if(ag&&ag.shiftKey)
{
window.open(cWC+bXM.join(""));
}
else
{
goUrl(au,cWC+bXM.join(""),true);
}
break;
}
}

}});




ya.qmQReply=inherit("qmQReply",ya.aeW,
function(at)
{
return{

CG:function(ah,cqn,cqf)
{
var ad=this;
ad.dD=ah;
ad.bXR=cqn;
ad.bYz=cqf;
ad.aSf=ad.S(gw.bgC);
ad.cxN;
},

getSource:function()
{
var oR=this.aSf;
return(oR.className.indexOf('graytext')!=-1)?"":textToHtml(htmlEncode(oR.value));
},







dRh:function()
{
var ad=this,
aQ=ad.dD,
bER=ad.S(aQ.sMailContent),
cw=ad.bXR,
jw=[textToHtml(htmlEncode(ad.S(gw.bgC).value))];

try
{
var bpH=getSignature(
aQ.folderid,
aQ.saveFrom
);
if(bpH)
{
jw.push("<div>&nbsp;</div>"+bpH);
}
}
catch(aR)
{
}


if(!aQ.noIncludeArtcle)
{
cw.orgcontent=bER?
filteSignatureTag(eew(bER.innerHTML)):"";

var bpS=bV.cIT.replace(
extend({},cw,aQ.titlePrefix=="1"?bMG.cIv:bMG.cHh)
);





if(cw.orgcontent)
{

jw.push(bpS);
return{
content:bV.bBj.replace(
{
content:jw.join(""),
fontName:getGlobalVarValue("DEF_FONT_FAMILY")||"Verdana",
fontSize:getGlobalVarValue("DEF_FONT_SIZE")||"14px",
fontColor:getGlobalVarValue("DEF_FONT_COLOR")||"#000"
})
}
}
else
{
return{
citeprev:"yes",
rmref:bpS,
content:jw.join("")
};
}
}
else
{
return{content:jw.join("")};
}
},




send:function(am,aT)
{
var ad=this,
au=ad.bm,
aQ=ad.dD,
bVq=ad.bYz,
oR=ad.S(gw.bgC);

if(am.disabled)
{
return;
}

ad.stopFold();

if(!oR.value)
{
showError('请先输入回复内容');
oR.focus();
}
else
{
var aBP=ad.bXR,
Pt=extend(
{
ReAndFw:"reply",
contenttype:"html",
from_s:"comm_quick",
t:"compose.json",
s:bVq.s||"",
ReAndFwMailid:aT,
to:cPL.replace({addrs:aBP.replyTo}),
cc:cPL.replace({addrs:aBP.replyCc}),
subject:(ad.dD.titlePrefix=="1"?"Re:":"回复：")+aBP.reSubject,
savesendbox:1,
sendmailname:ad.dD.sendmailname
},ad.dRh()
);

waitFor(
function()
{
return!!(getTop().ComposeLib);
},
function(cum)
{
if(!cum)
{
debug("加载ComposeLib失败");
return;
}
ComposeLib.send(Pt,
{
onready:function()
{
ad.bhu(true);
show(gw.dcK,true,au);
},
oncomplete:function(ba,bY)
{
var cjF=S(gw.bgC,au);

if(ba)
{
ad.bhu(false);
cjF.value="";
cjF.blur();
showInfo("您的邮件已成功发送");
show(gw.dcL,true,au);
show(gw.cej,false,au);
callBack(bVq.fQReplyComplete,[bY]);
}
else
{
ad.bhu(false);
cjF.focus();
show(gw.cej,true,au);
}
show(ad.S(gw.dcK),false);
}
}
);
},
100);
}
},

readyToWrite:function(am,aT)
{
var ad=this;

show(ad.S(gw.cej),true);
show(ad.S(gw.dcL),false);
ad.S(gw.bgC).focus();

},

checkBcc:function()
{
callBack(this.bYz.fCheckBcc,arguments);
},

jump:function(am,aT,ag)
{
if(am.disabled)
{
return;
}

var ad=this,
da=ad.getSource(),
au=ad.bm,
aO=dah.replace(
{
sid:getSid(),
mailid:aT,
s:"reply_all",
disptype:"html"
});

setClass(ad.aSf,'graytext qm_txt');

bSC(
{
oWin:au,
sTarget:"_self",
sAction:aO+(getTop().bnewwin?"&newwin=true":"")
},
{
pluscontent:da
}
).submit();
preventDefault(ag);
},

bhu:function(bku)
{
var ad=this;

ad.S(gw.dYy).disabled=ad.S(gw.bpf).disabled=bku;
return this;
},

kf:function()
{
var ad=this,
au=ad.bm,
oR=ad.aSf,
aaj=ad.S(gw.bpf),
cLy=ad.S(gw.ehX),
dTv=ad.S(gw.dxA),
din=ad.S(gw.dxB);

function aFX()
{
setTimeout(function()
{
if(!ad.cxN&&!oR.value)
{
qmAnimation.fold(oR,
{
to:16,
onready:function()
{
show(din,false,au);
show(cLy,false,au);
dTv.style.cssText="width:99.5%";
oR.style.overflow="hidden";
},
oncomplete:function()
{
setClass(oR,'graytext qm_txt').value=oR.getAttribute('graytxt');
}
}
);
}
ad.cxN=false;
},50
);
}

addEvents(setClass(oR,'graytext qm_txt'),
{
focus:function()
{
if(oR.className.indexOf('graytext')!=-1)
{
oR.setAttribute('graytxt',oR.value);
setClass(oR,'qm_txt b_size').value='';

qmAnimation.expand(oR,
{
to:54,
oncomplete:function()
{
show(din,true);
show(cLy,true);
oR.style.overflow="auto";
bodyScroll(au,"scrollTop",bodyScroll(au,"scrollTop")+30);
}
}
);
if(!getTop().ComposeLib)
{
loadJsFileToTop(getPath("js"),[getFullResSuffix("libcompose.js")]);
}

}
},
keydown:function(ag)
{

if(diK(ag))
{
fireMouseEvent(aaj,"click");
}
},
blur:aFX
}
);

ad.evt(["ck","md"],gw.cYQ);


addEvent(au,"beforeunload",function(ag)
{

removeEvent(au,"beforeunload",arguments.callee);

try
{
ad.dSH(ag);
}
catch(bW)
{

}
}
);
},

focus:function()
{
this.aSf.focus();
},

stopFold:function()
{
this.cxN=true;
},

ejq:function()
{

},

dSH:function(ag)
{
var oR=this.aSf;
if(oR.className.indexOf('graytext')==-1&&oR.value)
{
ag.returnValue='您填写的内容没有发送，确定要离开吗？';
}




}
}});




ya.qmPlayerParser=inherit("qmPlayerParser",ya.aeW,
function(at)
{
return{

vj:function(dXg,eF)
{
return decodeURIComponent(attr(dXg,eF));
},

bfy:function(aCr)
{
var ad=this;

if(!aCr.auto&&!confirm("播放外部音乐有风险，确定播放？"))
{
return;
}

var bw=ad.S(gw.cYl),
diR=ad.S(gw.dvk);

if(aCr.sosoGet)
{
getMusicUrl(aCr.title,aCr.author,
function(jD,jB,aI)
{
ad.bfy({
auto:true,
url:aI||aCr.url,
title:jD,
author:jB,
sosoGet:false
});
}
);
return;
}

show(bw,true);
audioPlay({
container:bw,
url:aCr.url,
author:aCr.author,
title:aCr.title,
autoplay:true,
global:true
});
diR.innerHTML=dId.replace(
{
images_path:getPath('image'),
author:htmlEncode(aCr.author)||'未知',
title:htmlEncode(aCr.title)||'未知'
}
);
show(diR,true);
},

bQp:function(aI,aMW,cZs,oi)
{
var ad=this,
au=ad.bm,
dor=ad.S(gw.ebV),
aek={
auto:cZs,
url:aI,
sosoGet:aMW?true:false,
author:aMW&&aMW.author,
title:aMW&&aMW.title
};

if(oi=='bgmusic')
{
show(dor,true);
var cXq=GelTags("a",dor);
cXq[0].href=aI;
cXq[1].onclick=function()
{
ad.bfy(aek);
return false;
};
}

if(cZs)
{
ad.bfy(aek);
}
show(ad.S(gw.dxD),false);
},


qg:function(ah)
{
var WM=GelTags("player",ah.oContentDom);

if(!WM.length)
{
return;
}

var ad=this,
au=ad.bm,
bjC=ad.S(gw.ddt),
cTi=false;

for(var bZ=0;bZ<WM.length;bZ++)
{
var nK=WM[bZ],
clb=nK.id||"",
KA=clb.toLowerCase();

if(KA.indexOf("cmd:")==0){

KA=KA.split(":").pop();
switch(KA)
{
case"voice":
if(!bjC)return;

var pU=attr(nK,"param"),

dvD=attr(nK,"media")||"voice",
ank=GelTags("span",bjC),
did=ank.length,
bTH="";

for(var i=0,did;i<did;i++)
{
var Ho=ank[i],
bTH=attr(Ho,"player");

if(bTH&&(Ho.innerText||Ho.textContent)==pU)
{
var ckH=nK.parentNode;

if(dvD=="video")
{
if(!au.sFlvPlayUrl)
{
au.sFlvPlayUrl=bTH;
ckH.innerHTML=generateFlashCode(
unikey("flvplayer"),
"/zh_CN/htmledition/swf/WebFlvPlayer.swf",
{
width:400,
height:335
},
{
wmode:"opaque"
}
);
}
}
else
{
ckH.innerHTML='<div style="padding-left:10px;" ></div>';
var	djW=
{
id:pU,
container:ckH.firstChild,
url:bTH,
title:(nK.getAttribute('alias')||'您朋友')+'的语音',
dispInfo:{
title:(nK.getAttribute("alias")||"您朋友")+"的语音"
},
global:true,
autoplay:!cTi
};

cTi=true;
bZ--;
audioPlay(djW);
var cMa=GelTags("a",Ho.parentNode.parentNode);
cMa[0].onclick=cMa[cMa.length-1].onclick=function()
{
audioStop();
audioPlay(djW);
};
}
break;
}
}
break;
case"bgmusic":
var aO=attr(nK,"url"),
aBK=ad.vj(nK,"song"),
aBU=ad.vj(nK,"singer");

ad.bQp(aO,
aO&&!aBK&&!aBU?null:
{
author:aBU,
title:aBK
},
!ah.bManuPlay,KA
);
break;
case"pcbgmusic":

var aO=attr(nK,"url"),
aBK=ad.vj(nK,"song"),
aBU=ad.vj(nK,"singer"),
db=au.document.createElement('div');

db.innerHTML='播放器加载中...';
nK.parentNode.insertBefore(db,nK);

audioPlay({
skin:'Postcard',
container:db,
author:aBU,
title:aBK,
autoplay:WM.length==1,
url:aO
});
addEvent(au,"unload",function(){
audioStop();
});
break;
default:
break;
}
}
else if(clb){

ad.bQp(clb);
}
}
}

}});




ya.qmMoreOptSel=inherit("qmMoreOptSel",ya.aeW,
function(at)
{
return{

qg:function(ah)
{
var ad=this;
az=ad.mw={},
dja=ah.oMoreOpt,
oc=["删除邮件备注","添加邮件备注","取消提醒","设置提醒","打印"],
jw=["delremark","addremark","delremind","addremind","print"];

for(var aD=jw.length-1;aD>=0;aD--)
{
az[jw[aD]]=0;
}
for(var aD=dja.length-1;aD>=0;aD--)
{
az[dja[aD]]=1;
}
E(SN(cJL.dvo,ah.oWin),function(ak){
new QMSelect({
oContainer:ak,
nWidth:86,
sDefaultItemValue:"更多操作...",
oMenu:{
nWidth:"auto",
nMaxWidth:180,
nMaxItemView:10,
oItems:QMMenu.makeMenuItem(oc,jw)
},
onafteropenmenu:function(iV,aCo){
for(var aD=jw.length-1;aD>=0;aD--){
iV.itemOption(jw[aD],"bDisplay",az[jw[aD]]);
}
},
onselect:function(bA){
callBack(ah.fOnSelect,[bA.sId]);
}
})
});
},

switchPair:function(deH,efB)
{
var ad=this;
ad.mw[deH]=1;
ad.mw[deH]=0;
}
}});
















ya.qmRemark=inherit("qmRemark",ya.aeW,
function(at)
{
return{

CG:function(dYW)
{
var ad=this;

ad.dps=dYW;
},

kf:function()
{
var ad=this,
au=ad.bm;

ad.evt(["ck"],[
gw.brs,
gw.bSP 
]);

addEvents(ad.S(gw.aKV),
{
focus:function()
{
ad.onFocus();
},
keydown:function(ag)
{
ad.onKeydown(ag);
},
blur:function()
{
ad.onBlur();
}
}
);

addEvent(au,"beforeunload",function(ag)
{
var bT=ad.csE();
bT&&(ag.returnValue=bT);
}
);

return ad;
},

getMailId:function()
{
return this.avw.sContext;
},

toggle:function(am)
{
var ad=this,

UZ=ad.S(gw.bSP),
afJ=ad.S(gw.brs),
pi=ad.S(gw.aKV),
Xu=ad.S(gw.brS);

if(UZ.title.indexOf("删除")>=0)
{
ad.del();
}
else
{
am.blur();
show(afJ,true);
show(Xu,true);
pi.focus();
}
return false;
},






del:function(am)
{
var ad=this,
UZ=ad.S(gw.bSP),
PK=ad.S(gw.bsk),
afJ=ad.S(gw.brs),
pi=ad.S(gw.aKV),
Xu=ad.S(gw.brS),
afE=ad.S(gw.bRC);

if(!PK.innerHTML)
{
show(afJ,false);
return false;
}

var	bK=ad.getMailId(),
dF=new QMAjax("/cgi-bin/mail_mgr?mailaction=remarks&type=del");

dF.onError=function(hx)
{
showError("删除备注内容失败，请稍后再试");
ad.akH(false);
};
dF.onComplete=function(hx)
{
if(hx.responseText.indexOf("del successful")==-1)
{
return this.onError();
}
showInfo("删除成功");
if(UZ)
{
UZ.title="添加邮件备注";
UZ.className="qm_ico_remarkoff";
}

pi.value="";
PK.innerHTML="";
show(afJ,0);
show(Xu,0);
show(afE,0);
ad.akH(false);
callBack(ad.dps,["del"]);
}
confirmBox({
msg:"您确定要删除此邮件备注吗？<br/>&nbsp;",
title:'QQ邮箱提示',
cancelBtnTxt:"取消",
confirmBtnTxt:"确定",
onreturn:function(ba)
{
if(ba)
{
ad.akH(true);
dF.send(T("mailaction=remarks&sid=$sid$&type=del&mailid=$mailid$").replace({
sid:getSid(),
mailid:bK
}));
}
}
});
return false;
},

ccT:function(hb)
{
return htmlEncode(hb).replace(/\n/gi,"<br/>").replace(/\x20/gi,"&nbsp;");
},

bnc:function(dC)
{
return htmlDecode(dC.replace(/&nbsp;/gi," ").replace(/<br\/?>/gi,"\n"));
},





save:function()
{
var ad=this,
au=ad.bm,


PK=ad.S(gw.bsk),
pi=ad.S(gw.aKV),
Xu=ad.S(gw.brS),
afE=ad.S(gw.bRC),

dF=new QMAjax("/cgi-bin/mail_mgr?mailaction=remarks&type=mdy"),
gB=pi.value;

if(!gB||gB==ayn)
{
pi.focus();
return!!showError('请先输入备注内容');
}
if(gB.replace(/[^\x00-\xff]/g,"aa").length>=1000)
{
pi.focus();
return!!showError('邮件备注的字符不能超过1000个');
}

dF.onError=function(hx)
{
showError("保存备注内容失败，请稍后再试");
ad.akH(false);
}
dF.onComplete=function(hx)
{
if(hx.responseText.indexOf("mdy successful")==-1)
{
return this.onError();
}
showInfo("保存成功");

var UZ=ad.S(gw.bSP);
if(UZ)
{
UZ.title="删除邮件备注";
UZ.className="qm_ico_remarkon";
}

PK.innerHTML=ad.ccT(gB);
ad.akH(false);
ad.cancel();
callBack(ad.dps,["save"]);
};

if(PK.innerHTML==gB)
{
return dF.onComplete({responseText:"mdy successful"});
}

ad.akH(true);
dF.send(
T("mailaction=remarks&sid=$sid$&resp_charset=UTF8&type=mdy&mailid=$mailid$&content=$content$").replace({
sid:getSid(),
mailid:ad.context("sContext"),
content:encodeURI(gB)
}));
return false;
},

cancel:function()
{
var ad=this,

PK=ad.S(gw.bsk),
afJ=ad.S(gw.brs),
pi=ad.S(gw.aKV),
Xu=ad.S(gw.brS),
afE=ad.S(gw.bRC);

if(PK.innerHTML=="")
{

pi.value=ad.bnc(ayn);
show(afE,false);
show(Xu,false);
show(afJ,false);
}
else
{
pi.value=ad.bnc(PK.innerHTML);
show(afE,true);
show(Xu,false);
}
},

modify:function(am)
{
var ad=this,

PK=ad.S(gw.bsk),
afJ=ad.S(gw.brs),
pi=ad.S(gw.aKV),
Xu=ad.S(gw.brS),
afE=ad.S(gw.bRC);

pi.value=ad.bnc(PK.innerHTML);
show(afE,false);
show(Xu,true);
pi.focus();
},

onFocus:function()
{
var ad=this,
au=ad.bm,


pi=ad.S(gw.aKV);

if(pi.value==ayn)
{
pi.value="";
}
pi.style.color="#000";

pi.style.fontSize="14px";
return false;
},

onBlur:function()
{
var ad=this,


pi=ad.S(gw.aKV);

if(pi.value=="")
{
pi.value=ayn;
pi.style.color="#A0A0A0";
pi.style.fontSize="12px";
}
return false;
},

onKeydown:function(ag)
{
if(ag.ctrlKey&&ag.keyCode==13||ag.altKey&&ag.keyCode==83)
{
this.save();
preventDefault(ag);
}
},




akH:function(bdx)
{
this.S(gw.dyh).disabled=bdx;
},




csE:function()
{
var ad=this,
PK=ad.S(gw.bsk),
pi=ad.S(gw.aKV);
dLg=(pi.value.replace(/\r/gi,"")!=ad.bnc(PK.innerHTML).replace(/\r/gi,""));

return(pi&&pi.value&&dLg&&pi.value!=ayn)?
'您填写的备注没有保存，确定要离开吗？':'';
}
}});





ya.qmAntiSpam=inherit("qmAntiSpam",ya.aeW,
function(at)
{
return{

CG:function(ah,Im)
{
var ad=this;

ad.WD=Im;
ad.dD=ah;
ad.dvK=ad.S(gw.edE);
},

kf:function()
{
var ad=this,
au=ad.bm;

ad.evt(["ck"],ad.SN(cJL.dtF));
},

dkN:function(csR)
{
var jk=this.bm.location;

jk.replace(appendToUrl(
cookQueryString(jk.href,
{
ver:""
}
),csR));
},

cAP:function(aT,aCZ)
{
bSC(
{
oWin:this.bm,
sFormId:"mail_frm",
sAction:"/cgi-bin/mail_mgr"
},
extend({
s:"readmail_spam",
s_reject_what:"11",
isspam:'true',
mailid:aT,
reporttype:"",
location:"readmail",
srcfolderid:this.dD.folderid,
mailaction:"mail_spam"
},aCZ)
);
},

reject:function(am,aT)
{
var ad=this;
ad.cAP(aT);
ad.bm.QMReadMail.clearCache();
doReject(true,attr(am,"groupmail"),ad.bm,attr(am,"mimefrom"));
},

notSpam:function(am,aT)
{
var ad=this,
au=ad.bm;

ad.cAP(aT);
setSpamMail(false,ad.attr(am,"groupmail"),au);
},

reportSpam:function(am,aT)
{
var ad=this,
aQ=ad.dD;

ad.cAP(aT,aQ.folderid=="6"?{Fun:"PerDel"}:null);
var dTD=ad.attr(am,"noaddblack")=="1";
debug("test reportSpam new func2");




var abX=0;
var crb=new Array();
var cny=ad.attr(am,"mimefrom");
var cpo=ad.attr(am,"mailfrom");
if(cny&&cny.length>0)crb[abX++]=cny;
if(cpo&&cpo.length>0)crb[abX++]=cpo;
reportSpam(dTD,null,null,null,crb);
},

openSpam:function()
{
this.dkN("&disptype=html&dispimg=1&clickshowimage=1");
},

addWhiteSubmit:function(am,aT,ag)
{
var ad=this,
au=ad.bm,
aBR=ad.WD.from.addr;

if(!checkMail(trim(aBR)))
{
return false;
}
bSC(
{
oWin:au,
sMethod:"POST",
sAction:dBE.replace({
sid:getSid(),
fromaddr:aBR
})
}
).submit();
runUrlWithSid(bFN.replace(
{
rtype:1000006,
rmsg:aT
}
)
);
rdVer(aT,1);
ad.openSpam();
show(ad.dvK,false);
preventDefault(ag);
},

addSpamVote:function(am,aT)
{
var ad=this,
aK=ad.attr(am,"rtype");

runUrlWithSid(bFN.replace(
{
rtype:aK,
rmsg:aT
})+"&r_subtype=spamvote"
);

if(aK=="1")
{
ad.S(gw.ckF).innerHTML="您还可以将此发件人发来的邮件，自动归档到\"邮件归档\"文件夹";
ad.S(gw.cZS).innerHTML="自动归档";

}else if(aK=="2"){

ad.S(gw.ckF).innerHTML="如果不想再收到此发件人的邮件，您可以选择&nbsp;<a ck='reject' href='javascript:;'>拒收</a>";
show(ad.S(gw.cZS),false);
}else{
getTop().showInfo("已成功反馈情况");
var dVr=ad.S(gw.ckF).parentNode;
dVr.style.display="none";
}
rdVer(aT,1);

},

openHttpImage:function(am,aT,ag)
{
runUrlWithSid(bFN.replace(
{
rtype:"1000004",
rmsg:aT,
rresult:1
}
));
this.openSpam();
preventDefault(ag);
},

openHttpSecureImage:function(am,aT,ag)
{
runUrlWithSid(
bFN.replace(
{
rtype:1000005,
rresult:1,
rmsg:aT
}
)
);
this.dkN("&dispimg=1");
preventDefault(ag);
},

openUserEdu:function(am,aT)
{
runUrlWithSid(
bFN.replace(
{
rtype:1000007,
rresult:1,
rmsg:aT
}
)
);
},

exbookEmlMgr:function(am,aT)
{
var ad=this,
eeU=ad.attr(am,"book");

loadingBox(
{
model:"反垃圾",
js:["qmantispam.js"],
oncheck:function()
{
return!!getTop().QMAntiSpam;
},
onload:function()
{
var drr=new QMAntiSpam.qmExbookEmlMgr(
{
sMailId:aT,
from:ad.WD.from,
fOnReload:function()
{
dQO(aT,ad.bm);
}
}
);
if(eeU=="1")
{
drr.book1();
}
else
{
drr.book2();
}
}
}
);
}
}});



ya.qmSenderInfo=inherit("qmSenderInfo",ya.aeW,
function(at)
{
return{

CG:function(ah,Im)
{
this.dri=Im;
this.dD=ah;
},

kf:function()
{
var ad=this;

ad.evt(["ck"],[gw.cVs,gw.dxk,gw.dxj]);
},

ehY:function()
{
var ad=this;

createIframe(ad.bm,
dHd.replace(
{
sid:getSid(),
mail:ad.dri
}),
{
id:"iframeRss"
}
);
},

dKh:function()
{
var ad=this;

QMAjax.send(
dHe.replace(
{
sid:getSid(),
mailid:ad.avw.sContext,
mail:ad.dri
}),
{
method:"GET",
onload:function(ba,cs)
{
if(ba)
{
var gc=evalValue(cs);
ad.S("divMails_sidebar").innerHTML=gc.sHtml||"";
}
}
});
},

toggle:function()
{
var ad=this,
aQ=ad.dD,
bSN=ad.S(gw.cVs),
lw=!isShow(bSN);

bSN.style.zIndex=lw?"21":"20";
show(bSN,lw);
ad.S(gw.dZs).className=lw?"myleftbar":"";
ad.S(gw.cXI).className=lw?"myleftbar":"";
ad.S(gw.bak).className=lw?"body myleftbar_":"body";

if(bnewwin)
{
show(ad.S(gw.cYf),!lw);
show(ad.S(gw.cYe),!lw);
bSN.style.marginTop="40px";
}

if(aQ.logintype!="2")
{




ad.dKh();
}
}
}});




ya.qmConvMail=inherit("qmConvMail",ya.qmReadMail,
function(at)
{
return{

CG:function()
{
var ad=this;
at.CG.apply(ad,arguments);
ad.cMw={};
},

kf:function()
{
var ad=this;

ad.evt(["ck","dck"],ad.bm.document.body);
},

Ot:function(blK)
{
var ad=this,
acM,
eQ=ad.WD,
dj=extend({},ad.avw,blK);

switch(dj.sModuleName)
{
case"qmSubMail":
var aqI=eQ.oSubMails[dj.sAux]||[{},{}],
qp=dj.sContext||"";

aqI[0].cmailid=ad.getMailId();
acM=new ya.qmSubMail(aqI[0],aqI[1],dj);
qp&&(ad.cMw[qp]=acM);

break;

case"qmQReply":
var aqI=eQ.oSubMails["0"];
acM=ad.dgN=new ya.qmQReply(aqI[0],aqI[1],
{
fCheckBcc:function()
{
callBack.call(ad,ad.checkBcc,arguments);
},
fQReplyComplete:function(bY)
{
ad.cnA(bY);
},
s:"conv_send"
},dj);
break;
}
return acM;
},

cnA:function(bY)
{
var gc=evalValue(bY),
ceA=this.S(gw.cWq);

gc&&insertHTML(ceA,"afterEnd",gc.mailstr);
},

cjf:function()
{
var ad=this,
au=ad.bm,
aQ=ad.dD,
eQ=ad.WD;

ad.cyV();
ad.cbJ();
initMailSelect(aQ.oMoveItems,true,aQ.bOpenTag=="1",
au,aQ.folderid,aQ.bAutoTag);

E(eQ.oSubMails,function(bA)
{
if(bA&&!bA[1].bAsyn)
{
ad.Ot(bA[2]);
if(bA[2].sAux=="0")
{
ad.Ot(
{
sModuleName:"qmQReply",
sAux:"",
sContext:bA[2].sContext
}
);
}
}
}
);


if(aQ.nRet!=0&&aQ.bRetry=="")
{
var cpK=ad.bm.location.href+"";
cpK=cpK.replace(/#.*/gi,"")+"&retry=1";

ad.clearCache();

ad.bm.location=cpK;
}



ad.czp();
},

getSubMailFrom:function(aT)
{
var aqI=this.cMw[aT];
if(aqI)
{
return aqI.getMailInfo().from.name;
}
}
}});

ya.qmSubMail=inherit("qmSubMail",ya.qmReadMail,
function(at)
{
return{

kf:function()
{
var ad=this,
au=ad.bm;

if(ad.dD.sIndex=="0")
{
ad.evt(["ck"],SN(cJL.dXb,au));
}
ad.evt(["ck","dck"],gw.bWt);
},

qg:function(am)
{
var ad=this,
au=ad.bm,
aQ=ad.dD,
eQ=ad.WD,
ET=ad.S(gw.bak);

aQ.bMusicManuPlay=aQ.sIndex!="0";

if(!eQ.bAsyn)
{
swapLink(ET,eQ.disptype,au);
}

ad.Ot({sModuleName:"qmRemark"});
ad.Ot({sModuleName:"qmAntiSpam"});
ad.Ot({sModuleName:"qmPlayerParser"});
},

dLD:function()
{
return this.dD.cmailid;
},

clearCache:function()
{
rdVer(this.dD.cmailid,1);
},

dbR:function(ao,bD)
{
var ad=this;

QMAjax.send(
T("/cgi-bin/readmail?sid=$sid$&t=readsubmail&s=$s$&mailid=$mailid$&submailid=$submailid$&frid=$frid$&index=$index$").replace(
{
sid:getSid(),
mailid:ad.dLD(),
submailid:ad.getMailId(),
frid:ad.WD.frid,
s:ao,
index:ad.avw.sAux
}),
{
method:"GET",
headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},
onload:function(ba,cs)
{
var gB=trim(cs);

if(!ba||gB.indexOf("<!--cgi exception-->")==0)
{
bD();
}
else
{
bD(evalValue(gB));
}
}
}
);
},

ccz:function(Qa,bXi)
{
var ad=this,
aqz=bXi.innerHTML,
bZ=0,
afP=GelTags("form",ad.S(gw.bak));

for(bZ=0;bZ<afP.length;bZ++)
{
var fh=afP[bZ];
if(attr(fh,"_refer_")=="1")
{
if(Qa.length)
{
if(bZ>=Qa.length)
{
break;
}
try
{
fh.innerHTML=Qa[bZ];
}
catch(e)
{
debug("error:innerHTML readonly "+bZ);
}
}
fh.className=Qa?"":"qQmAIlcOnV";
}
}
if(Qa)
{
attr(bXi,"disp","0");
aqz=aqz.replace("显示","隐藏");
}
else
{
attr(bXi,"disp","1");
aqz=aqz.replace("隐藏","显示");
}
bXi.innerHTML=aqz;
},

seek:function()
{
var ad=this,
au=ad.bm;

scrollIntoMidView(ad.S(gw.bWt),au.document.body);
},

newWinRead:function(am,aT,ag)
{
goNewWin(T([bSA,'&t=readmail&folderid=$folderid$']).replace({
folderid:this.dD.folderid,
mailid:aT
}),false);
},

delMail:function(am)
{
var ad=this;
rmMail(ad.attr(am,"opt")||0,
extend(ad.getCBInfo(),
{
oncomplete:function(dVQ)
{
rdVer(ad.dD.cmailid,1);
ad.aNu("0",function()
{
removeSelf(ad.S(gw.bWt));
ad.bm.QMReadMail.notify("delsubmail");
});
return true;
}
}
)
);
},

getCBInfo:function()
{
var ad=this,
aQ=ad.dD,
eQ=ad.WD,
bya=eQ.from||{};

return{
oWin:ad.bm,
sFid:aQ.folderid,
bML:false,
oMail:[{
sMid:ad.getMailId(),
bSys:aQ.bSys,
bUnr:false,
bSubUnr:false,
bTms:false,
sSName:bya.name,
sSEmail:bya.addr
}]
};
},

moreOpt:function(am,aT)
{
var cU=calcPos(am),
ad=this;

new QMMenu(
{
oEmbedWin:ad.bm,
sId:"menu_"+aT,
oItems:
[
{sId:"reportSpam",sItemValue:"举报"},
{sId:"PerDel",sItemValue:"彻底删除"},
{sId:"fwgroup",sItemValue:"转发到群邮件"},
{sId:"note",sItemValue:"保存到记事本"},
{sId:"fweml",sItemValue:"作为附件转发"},
{sId:"dleml",sItemValue:"导出为eml文件"},
{sId:"mime",sItemValue:"显示邮件原文"},
{sId:"code",sItemValue:"邮件有乱码？"}
],
nX:cU[3],
nY:cU[2],
onitemclick:function(aL,bA)
{
if(aL=="reportSpam")
{
ad.dZD.reportSpam(am,aT);
ad.clearCache();
}
else if(aL=="PerDel")
{
ad.delMail({opt:"1"});
}
else
{
ad.optMail2({opt:aL},aT);
}
}
});
},

dispRef:function(am)
{
var ad=this,
sX=ad.attr(am,"disp");

if(!am||am.disabled)
{
return;
}

if(sX=="1")
{
ad.ccz(true,am);
}
else if(sX=="asyn")
{
am.disabled=true;
showProcess(1,true,"邮件读取中...",null,false);
ad.dbR("refer",function(cXe)
{
showProcess(0);
if(cXe)
{
ad.ccz(cXe,am);
}
else
{
showError("邮件读取失败");
}
am.disabled=false;
});
}
else if(sX=="0")
{
ad.ccz(false,am);
}
},

dispDetail:function(am)
{
var ad=this,
eQ=ad.WD,
sX=ad.attr(am,"disp"),
bTE=ad.S(gw.dXX),
ciU=ad.S(gw.dXW),
cdE=ad.S(gw.dtj),
fU=GelTags("img",bTE)[0],
lR=GelTags("a",bTE)[0],
bmZ=ad.S(gw.dyp);

if(sX=="1")
{
if(isShow(ciU))
{
return;
}
show(cdE,false);
qmAnimation.expand(ciU);
fU.title=lR.title="隐藏邮件详情";
fU.className="qm_conversation_input_hidemail";
lR.innerHTML="隐藏";
attr(bTE,"disp","0");

if(bmZ&&bmZ.innerHTML=="")
{
bmZ.innerHTML=ad.bm.QMReadMail.getSubMailFrom(eQ.refermailid)||"";
}
}
else
{
if(isShow(cdE))
{
return;
}
qmAnimation.fold(ciU,
{
oncomplete:function()
{
show(cdE,true);
}
}
);
fU.title=lR.title="显示邮件详情";
fU.className="qm_conversation_input_showmail";
lR.innerHTML="邮件详情";
attr(bTE,"disp","1");
}
},

aNu:function(ctc,bD)
{
var ad=this,
Ue=ad.S(gw.aQa),
ahR=ad.S(gw.cWc),
cQf=ad.S(gw.bWt);

if(ctc=="1")
{
if(isShow(ahR))
{
return;
}

var eN=Ue.scrollHeight;
show(Ue,false);
show(ahR,true);
setClass(cQf,"qm_con_expand");
qmAnimation.expand(ahR,
{
from:eN,
speed:"fast",
tween:"Sine"
}
);
}
else
{
if(isShow(Ue))
{
return;
}







show(Ue,true);
var eH=Ue.scrollHeight;
show(Ue,false);

qmAnimation.fold(ahR,
{
speed:"fast",
to:eH||48,
oncomplete:bD||function()
{
setClass(cQf,"qm_con_fold");
show(ahR,false);
show(Ue,true);
}
}
);
}
},

toReferMail:function(am)
{
var ad=this;
ad.bm.QMReadMail.notify("toRefer",ad.WD.refermailid);
},

dispSubMail:function(am)
{
var ad=this,
sX=ad.attr(am,"disp");

if(sX=="1")
{
ad.aNu(sX);
}
else if(sX=="asyn")
{
showProcess(1,true,"邮件读取中...",null,false);
ad.dbR("",function(iE)
{
if(iE)
{
showProcess(0);
ad.attr(am,"disp",1);
ad.S(gw.cWc).innerHTML=iE.mailstr;
swapLink(ad.S(gw.bak),ad.WD.disptype,ad.bm);
ad.dispSubMail({disp:1});
ad.aNu("1");
ad.Ot({sModuleName:"qmRemark"});
ad.Ot({sModuleName:"qmAntiSpam"});
ad.Ot({sModuleName:"qmPlayerParser"});
}
else
{
showError("邮件读取失败");
}
}
);
}
else
{
ad.aNu(sX);
}
}
}});


ya.qmGroupQReply=inherit("qmGroupQReply",ya.aeW,
function(at)
{
return{

CG:function(ah,cqn,cqf)
{
var ad=this;
ad.dD=ah;
ad.bXR=cqn;
ad.bYz=cqf;
ad.aSf=ad.S(gw.bgC);
},

kf:function()
{
var ad=this,
oR=ad.aSf,
aaj=ad.S(gw.bpf);

ad.evt(["ck"],ad.S(gw.cYQ));

addEvent(oR,"focus",function(ag)
{
if(!ad.aqE)
{
QMEditor.createEditor({
editorId:"readMailGroupQuickSend",
editorAreaWin:ad.bm,
funclist:{
tbExtern:"Mo"
},

onkeydown:function(ag)
{
if(diK(ag))
{
fireMouseEvent(aaj,"click");
}
},
onload:function()
{
ad.aqE=this;
ad.aNu(false);
}
}).initialize("",false);

if(!getTop().ComposeLib)
{
loadJsFileToTop(getPath("js"),[getFullResSuffix("libcompose.js")]);
}
}
else
{
ad.aNu(false);
}
}
);


},

aNu:function(bAO)
{
var ad=this,
oR=ad.aSf,
ep=ad.aqE,
aaj=ad.S(gw.bpf),
VF=isShow(oR);

if(VF==bAO)
{
return;
}

show(oR,bAO);
show(ad.S(gw.cYO).parentNode,!bAO);
show(ad.S(gw.cYP).parentNode,!bAO);

if(bAO)
{
setClass(aaj,"grptitle_tab bd right").style.cssText="height:42px;width:44px;cursor:pointer";
setClass(aaj.parentNode,"qm_right bd_ccc").style.cssText="";


aaj.focus();
aaj.blur();
ep.setContent(QMEditor.getBreakLine());
}
else
{
setClass(aaj,"right bd_upload grptitle_tab_ bold").style.cssText="height:26px;width:96px;cursor:pointer;"
setClass(aaj.parentNode,"").style.cssText="border:none;clear:left;height:26px;padding:3px 0;width:449px;text-align:right;margin-top:2px;";
show(ad.S(gw.cYO).parentNode,true);
show(ad.S(gw.cYP).parentNode,true);
ep.focus(0);
}
},

bhu:function(Nx)
{
var ad=this;

ad.S(gw.bpf).disabled=Nx;
return this;
},

send:function(am,aT)
{
var ad=this,
au=ad.bm,
ep=ad.aqE,
aQ=ad.dD,
bVq=ad.bYz,
oR=ad.S(gw.bgC);

if(am.disabled)
{
return;
}

if(!ep||!ep.getContent(false))
{
showError('请先输入回复内容');
oR.focus();
}
else
{
var aBP=ad.bXR,
Pt=
{
qqgroupid:aQ.gid+"groupmail.qq.com",
subject:aBP.subject||"无主题",
content__html:ep.getContent(),
t:"compose.json",
s:"group_send",
sendname:"alias",
fmailid:aT
};

waitFor(
function()
{
return!!(getTop().ComposeLib);
},
function(cum)
{
if(!cum)
{
debug("加载ComposeLib失败");
return;
}
ComposeLib.send(Pt,
{
sType:"group",
onready:function()
{
ad.bhu(true);
},
oncomplete:function(ba,bY)
{
if(ba)
{
ad.bhu(false);
showInfo("您的评论已成功发表");
ad.aNu(true);
callBack(bVq.fQReplyComplete,[bY]);
}
else
{
ad.bhu(false);
}
}
}
);
},
100);
}
}
};
});

ya.qmGroupMail=inherit("qmGroupMail",ya.qmReadMail,
function(at)
{
return{
cjf:function()
{
var ad=this;
ad=this,
au=ad.bm,
eQ=ad.WD,
aQ=ad.dD,
ET=ad.S(gw.bak),

ad.cyV();

swapLink(ET,eQ.disptype,au);
ad.cbJ();

initMailSelect(aQ.oMoveItems,true,aQ.bOpenTag=="1",
au,aQ.folderid,aQ.bAutoTag);
ad.Ot({sModuleName:"qmGroupQReply"});
ad.Ot({sModuleName:"qmAntiSpam"});



ad.czp();
},

Ot:function(blK)
{
var ad=this,
acM,
aQ=ad.dD,
eQ=ad.WD,
dj=extend({},ad.avw,blK);

switch(dj.sModuleName)
{
case"qmGroupQReply":
acM=ad.efN=new ya.qmGroupQReply(
aQ,eQ,{
fQReplyComplete:function(bY)
{
ad.cnA(bY);
}
},dj);

break;
default:
acM=at.Ot.call(ad,blK);
}
return acM;
},

cnA:function(bY)
{
var gc=evalValue(bY),
ceA=this.S(gw.cWq);

gc&&insertHTML(ceA,"afterEnd",gc.mailstr);
this.clearCache();
QMMailCache.setExpire();
},

dhR:function()
{
var aQ=this.dD;

return cPQ.replace(
{
sid:getSid(),
folderid:aQ.folderid,
s:aQ.subtmpl,
more:"&t=mail_list_group&groupid="+aQ.groupid
}
);
},

showSeqContent:function(am)
{
var ad=this,
cVB=ad.attr(am,"seq");

show(gw.efM+cVB,true);
show(gw.efJ+cVB,true);
},

rejectGroup:function(am,aT,ag)
{
var ad=this,
au=ad.bm,
iv=ad.attr(am,"opt");

QMAjax.send(dFa.replace(
{
sid:getSid(),
gid:ad.dD.gid,
yn:iv
}
),
{
method:"GET",
headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},
onload:function(ba,cs)
{
var gc=evalValue(cs);
if(!ba||cs.indexOf("<!--cgi exception-->")==0)
{
showError("操作失败");
}
else
{
toggle(gw.dyk,au);
toggle(gw.dyl,au);
showInfo((iv=="yes"?"成功拒收":"成功开启接收")+"该群的邮件");
au.QMReadMail.clearCache();
QMMailCache.setExpire();
}
}
});
},

showVoter:function(am,fi)
{
var ad=this,
dep;
if(!am)
{
return;
}
if(dep=am.getAttribute("vid"))
{
toggle("voter_"+dep,au);
}
else
{
var dTG=ad.S("voter_play_box"),
aKe=GelTags("tr",dTG),
czd=(fi==undefined||(typeof fi=="string"))?!am.getAttribute("opt"):fi;

for(var i=0,len=aKe.length;i<len;i++)
{
if(aKe[i].id)
{
qmAnimation[czd?"expand":"fold"](aKe[i],{speed:"fast"});
}
}
am[czd?"setAttribute":"removeAttribute"]("opt","1");
am.innerHTML=am.getAttribute(czd?"hideText":"showText");
}
}
};
});


wT.QMReadMail=ya;

})(window);
