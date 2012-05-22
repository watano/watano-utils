










































































function extendEx(ah,ads,auT)
{
for(var i in ads)
{
if(auT||typeof(ah[i])=="undefined"||ah[i]==null)
{
ah[i]=ads[i];
}
}
return ah;
}


function QMTreeView(ah)
{
var ad=this;
ad.dH=ah;
ad.ej();
}

QMTreeView.prototype={
ej:function()
{
var ad=this,
aS=ad.dH,
bA=aS.oContainer,
bhE=aS.oDefaultItem;
ad.bkJ={};
ad.pO=bA.ownerDocument;
ad.cGh=1;

addEvent(bA,"click",function(ag){

stopPropagation(ag);
preventDefault(ag);
if(callBack.call(ad,ad.dH.onclick,[ag]))
{
ad.aIj(ag);
}
});

ad.bNe(bhE).bOh(bA,bhE).bPO(bhE);

callBack.call(ad,ad.dH.onload);

return ad;
},





bNe:function(aaA)
{
var ad=this,
hw=now(),
nV;
for(var aE=aaA.length-1;aE>=0;aE--)
{
nV=extendEx(aaA[aE],{
nTime:hw,
sDisplay:"",
sHashCode:ad.cGh++
}
);
ad.bkJ[nV.sHashCode]=nV;
}
return ad;
},

bOh:function(nD,aaA)
{
var cRJ=QMTreeView.bX.ZU,
bo=[],
nV;
for(var aE=0,aT=aaA.length;aE<aT;aE++)
{
var nV=aaA[aE];
bo.push(cRJ.replace(extend({sClass:'groupclose',sub:0},nV)));
if(nV.sType!="item")
{
bo.push(cRJ.replace(extendEx({sClass:'groupsub',sDisplay:'none',sub:1},nV)));
}
}
nD.innerHTML=bo.join("");
return this;
},

bgM:function(nD,aD,bh)
{
if(typeof bh=="undefined")
{
return nD.getAttribute(aD);
}
else
{
nD.setAttribute(aD,bh);
return nD;
}
},




aEB:function(Sw,bRQ,nD)
{
var ad=this,
dxG=bRQ||0,
dg=nD||ad.dH.oContainer,
aRw=GelTags("div",dg),
ax=[];
if(typeof Sw!="undefined")
{
for(var aE=0,aT=aRw.length;aE<aT;aE++)
{
var ape=aRw[aE];
if((Sw==null^ad.bgM(ape,'key')==Sw)&&ad.bgM(ape,'sub')==dxG)
{
ax.push(ape);
}
}
}
return ax;
},

cIj:function(nD)
{
var ad=this,
ape=nD.parentNode.firstChild,
ax=[];
while(ape)
{
if(ad.bgM(ape,'key')!=null)
{
ax.push(ape);
}
ape=ape.nextSibling;
}
return ax;
},

baD:function(nD)
{
var ad=this;
while(nD)
{
if(ad.bgM(nD,'sub')=='1')
{
return nD;
}
nD=nD.nextSibling;
}
},





aCN:function(ce)
{
var ad=this;

return ad.bkJ[typeof ce=="string"?ce:ad.bgM(ce,'key')];
},

addNodeData:function(ao)
{
var ad=this,
nV=ad.bkJ,
aA=ao||[];
for(var i=0,len=aA.length;i<len;i++)
{
var dJ=aA[i];
!nV[dJ.sHashCode]&&(nV[dJ.sHashCode]=dJ);
}
},

aIj:function(ag)
{
var az=getEventTarget(ag),
ad=this;
while(!ad.bgM(az,'key'))
{
az=az.parentNode;
}
if(ad.bgM(az,'sub')=='0')
{
var nV=ad.aCN(az);
if(nV.sType=='group'||nV.sType=='moreItem')
{
nV.nStatus&2?
ad.aTw(az):
ad.HE(az);
}

callBack.call(ad,ad.dH.onselect,[nV]);
}
},

aTw:function(nD)
{
var ad=this,
nV=ad.aCN(nD);
if(nV.sType=='item'||!(nV.nStatus&2))
{
return;
}
var bxO=ad.baD(nD),
aws=ad.aEB(null,0,bxO),
lm,dcA;
for(var fA=aws.length-1;fA>=0;fA--)
{

bsw=ad.aCN(lm=aws[fA]);
if(bsw.sType=="moreItem")
{
dcA=ad.baD(lm);
show(lm,1);
show(dcA,0);
bsw.nStatus&=13;
}
}
if(nV.sType=="moreItem")
{
show(nD,1);
}
else
{
setClass(nD,'groupclose');
}
show(bxO,0);
nV.nStatus&=13;
},







collapse:function(Sw)
{
for(var ad=this,oI=ad.aEB(Sw),aE=0,ZO=oI.length;aE<ZO;aE++)
{
ad.aTw(oI[aE]);
}
},

bPO:function(aaA)
{
var ad=this;
for(var aE=0,ZO=aaA.length;aE<ZO;aE++)
{
var aA=aaA[aE];
if(aA.bExpanded)
{
ad.expand(aA.sHashCode);
}
}
return ad;
},

HE:function(nD,afV)
{
var ad=this,
nV=ad.aCN(nD);
if(nV.sType=='item'||(nV.nStatus&2)&&!afV)
{
return;
}
var bxO=ad.baD(nD),
aEY=callBack.call(ad,ad.dH.ongetdata,[nV]);

if(nV.sType=="moreItem")
{
show(nD,0);
}
else
{
if(ad.dH.bUnique&&nV.sType=="group")
{
var vQ=ad.cIj(nD);
for(var aE=0,ZO=vQ.length;aE<ZO;aE++)
{
if(vQ[aE]!=nD)
{
ad.aTw(vQ[aE]);
}
}
}
setClass(nD,'groupopen');
}
if(aEY!=null)
{
ad.bNe(aEY).bOh(bxO,aEY).bPO(aEY);

}
show(bxO,1);
nV.nStatus|=3;
},




expand:function(Sw,afV)
{
for(var ad=this,oI=ad.aEB(Sw),aE=0,ZO=oI.length;aE<ZO;aE++)
{
ad.HE(oI[aE],afV);
}
},

toggle:function(Sw)
{
var ad=this,
nV=ad.aCN(Sw);
ad[nV.nStatus&2?'collapse':'expand'](nV.sHashCode);
return ad;
},

showItem:function(Sw,fh)
{
for(var ad=this,oI=ad.aEB(Sw),aE=0,ZO=oI.length;aE<ZO;aE++)
{
show(oI[aE],fh);
}
}












};

QMTreeView.bX={
ZU:T(['<div class="$sClass$" style="display:$sDisplay$" key="$sHashCode$" sub="$sub$">$sItemValue$</div>'])
};






















function QMLinkman(ah)
{
var ad=this;
ad.dH=ah;
ad.pO=ah.oContainer.ownerDocument;
ad.Oj=unikey("lm");

ad.Of={};
ad.ej();
}

QMLinkman.prototype={
ej:function()
{
var ad=this;
if(ad.dH.nType==1)
{
ad.cys();
}
ad.gk();
},

cys:function()
{
var ad=this,
arz=100000,
ja=getTop().QMAddress,
aWR=ad.dH.oExitAddress;


ad.aoj={};

ad.YV=[];


if(!aWR)
{
return;
}

for(var aE=0,bn=aWR.length;aE<bn;aE++)
{
var hf=aWR[aE].addr,
aX=aWR[aE].nick,
eI=ja.getAddress(hf);

if(eI)
{
ad.Of[hf]=1;
ad.YV.push(eI.id);
}
else
{
while(ja.getAddress(arz))
{
arz++;
}
ad.YV.push(arz);
eI=ad.aoj[arz]={
id:arz,
pinyin:aX,
email:hf,
name:hf,
qq:-1
};
arz++;
}
ad.bcp(eI,1);
}
},

cwr:function(ao)
{
var ad=this,
aS=ad.dH,
ae=getTop(),
jr=ao.nTime,
cN=QMLinkman.bX,
bm=ao.gQ.id,
oz=ae.QMAddress,
pI=oz.getGroup(bm),
aqZ=pI.addressesId,
bK=[];
if(oz.getTime()<=jr&&(ao.nStatus&1))
{

return null;
}


if(ao.sType=="title")
{

var Oh=oz.getGroup(bm),
aKI=Oh.groupsId;
if(aKI)
{
for(var fA=0,aT=aKI.length;fA<aT;fA++)
{
var pI=oz.getGroup(aKI[fA]),
bqH=pI.addressesId.length,
aTl=aS.bSupportGroup&&bqH>0&&bqH<21&&aKI[fA]>9&&oz.getAncestor(pI)==1;
bK.push(
{
sType:'group',
sItemValue:cN.bPQ.replace({
other:aTl?cN.bQg.replace({
disp:'none',


name:'全选',
fun:'g'+pI.id
}):'',
cac:aTl?'lm_cac':'',
name:pI.name
}),
sHashCode:'g'+pI.id,
nTime:oz.getTime(),
gQ:pI

}
);
}
}
}
else
{



















for(var aE=0,bn=aqZ.length;aE<bn;aE++)
{
var rN=ae.QMAddress.getAddress(aqZ[aE]);
rN&&bK.push(
{
sType:'item',
sItemValue:cN.bIc.replace({
beforeImage:(rN.qq==getTop().g_admuin)?cN.caJ:'',
title:rN.email,
name:rN.name
}),
sHashCode:rN.id,
nTime:oz.getTime(),
sDisplay:ad.Of[rN.email]?'none':''
}
);
}


if(bn==0)
{
bK.push(
{
sType:'title',
sHashCode:"-1",
sItemValue:cN.bDQ.replace({
message:{
"常用联系人":"常用联系人",
"不常用联系人":"不常用联系人"
}[pI.name]||"联系人"
})
}
);
}

if(typeof pI.moreChildId!="undefined")
{
var aBW=oz.getGroup(pI.moreChildId);
bK.push(
{
sType:'moreItem',
sItemValue:cN.bIc.replace({

title:aBW.name,
name:"<b>显示更多↓</b>"
}),
sHashCode:'m'+aBW.id,
nTime:oz.getTime(),
gQ:aBW
}
);
}
}
return bK;
},

gk:function()
{
var ad=this,
aS=ad.dH,
bA=aS.oContainer,

oz=getTop().QMAddress,
cN=QMLinkman.bX,
aRb=aS.oMainGroup,
bxy=[];

bA.innerHTML=cN.bqC.replace(
{
pid:ad.Oj
}
);

for(var aE=0,bn=aRb.length;aE<bn;aE++)
{
var Oh=oz.getGroup(aRb[aE]);
if(!Oh.groupsId)
{
continue;
}
bxy.push(
{
sType:'title',
bExpanded:true,
sHashCode:'t'+Oh.id,
gQ:Oh,
sItemValue:cN.ada.replace({
title:Oh.name,

other:(aS.nType==0&&Oh.name=="QQ好友"?
cN.bQg.replace({name:'同步',fun:'qq'}):"")
})
}
);
}








var aLI;
ad.bUN=new QMTreeView({
oContainer:S(ad.Oj+'tree',ad.pO),
oDefaultItem:bxy,


ongetdata:function(ao)
{
return ad.cwr(ao);
},
onload:function()
{
this.expand(aLI='g3');
},

onclick:function(ag)
{
var az=getEventTarget(ag);
while(az&&az.nodeType==3)
{
az=az.parentNode;
}
var adc=az.getAttribute("fun");

if(!adc)
{
return true;
}
if(adc=="qq")
{

oz.importqq();
}
else if(adc.charAt(0)=='g')
{

var boc=adc.substr(1),
gQ=oz.getGroup(boc),
bsv=gQ.addressesId,
aT=bsv.length,
aE;
for(aE=0;aE<aT;aE++)
{
ad.bUE(1,bsv[aE]);
}
}
return false;
},

onselect:function(ao)
{

if(ao.sType=="group"&&ao.sHashCode!=aLI)
{
this.collapse(aLI);
aLI=ao.sHashCode;
}
if(ao.sType=="item")
{
callBack.call(ad,ad.bUE,[true,ao.sHashCode]);
}
}

});

ad.nZ();

},

showHint:function(ao)
{
var ad=this,
eed=S(ad.Oj+'tree',ad.pO),
bvv=S(ad.Oj+'hint',ad.pO),
cN=QMLinkman.bX;

if(!ao||!ao.length)
{
HE(bvv,false);
return;
}

if(!bvv)
{
insertHTML(eed,"afterBegin","<div id='"+ad.Oj+"hint' style='display:none;'>"+cN.dmf.replace(ao.slice(0,5))+"</div>");
bvv=S(ad.Oj+'hint',ad.pO);
}
else
{
bvv.innerHTML=cN.dmf.replace(ao.slice(0,5));
}
HE(bvv,true);

var nV=[];
for(var i=0,len=ao.length;i<len;i++)
{
nV.push({sHashCode:ao[i].oAddress.id,sType:"item"});
}
ad.bUN&&ad.bUN.addNodeData(nV);

function HE(ak,CH)
{
if(!ak)return;

var la=getTop().qmAnimation;
la?la[CH?'expand':'fold'](ak,
{
durlimit:300,
type:'wait',
speed:'fast',
onready:function()
{
return{
from:ak.clientHeight||0
};
},
oncomplete:function()
{
show(ak,CH);
}
}):show(ak,CH);
}
},

nZ:function()
{



var ad=this,
aAv=function(ag,ap)
{
var az=getEventTarget(ag),
ajC=[ad.Oj,ap,""].join("_");
while(az)
{
if((az.id||"").indexOf(ajC)==0)
{
return az.id.substr(ajC.length);
}
az=az.parentNode;
}
return null;
},
drV=S(ad.Oj+'search',ad.pO),
ayP=S(ad.Oj+'searchtext',ad.pO),
bYc=S(ad.Oj+'cancel',ad.pO),
bCg="rgb(160, 160, 160)",
aIM="查找联系人...";

addEvent(drV,"click",function(ag)
{
var bm=aAv(ag,'s');
if(bm)
{
ad.bUE(1,bm);
}
drV.blur();
stopPropagation(ag);
preventDefault(ag);
}
);

addEvent(bYc,"click",function()
{
ad.QD(false);
ayP.value=aIM;
ayP.style.color=bCg;
bYc.blur();
}
);

var djd;

addEvents(ayP,
{
blur:function()
{
if(ayP.value=="")
{
ayP.value=aIM;
ayP.style.color=bCg;
}
},
focus:function()
{
if(ayP.value==aIM)
{
ayP.value="";
ayP.style.color="#000000";
}
},
keyup:function()
{
clearTimeout(djd);
djd=setTimeout(function()
{
ad.wu(ayP);
ad.QD(!!ayP.value);
},300);
}
}
);

addEvent(ad.dH.oContainerRight,"click",function(ag)
{
var bm=aAv(ag,'r');
if(bm)
{
ad.bUE(0,bm);
}
stopPropagation(ag);
preventDefault(ag);
}
);
},

wu:function(aM)
{
function cOx(mF)
{
return!mF.nShortcutGroupId;
}
var ad=this,
oz=getAddrACData(aM,null,ad.dH.bSupportGroup||cOx),
bo=['<div style="padding:5px">查找到：</div>'],
cN=QMLinkman.bX,
rq=/\"(.*)\" &lt;(.*)&gt;$/,
dvM=S(ad.Oj+'search',ad.pO);

ad.bVN=0;

for(var aE=0,aT=oz.length;aE<aT;aE++)
{
var eI=oz[aE],
hf=eI.oAddress.email,
dNO=ad.Of[hf];

if(eI.oAddress.nShortcutGroupId)
{
bo.push(cN.bRG.replace(
{
pid:ad.Oj,
id:eI.oAddress.id,
title:[eI.oAddress.name,' (',eI.oAddress.email,')'].join(""),
disp:ad.Of[hf]?"none":"",
name:eI.sItemValue,
email:eI.oAddress.email
})
);
}
else
{
rq.test(eI.sItemValue);
bo.push(cN.bRG.replace(
{
pid:ad.Oj,
id:eI.oAddress.id,
title:hf,
disp:ad.Of[hf]?"none":"",
name:RegExp.$1,
email:RegExp.$2
})
);
}

ad.bVN+=dNO?0:1
}
bo.push(cN.cuC.replace(
{
pid:ad.Oj,
disp:ad.bVN?'none':''
})
);
dvM.innerHTML=bo.join("");
},

QD:function(bTH)
{
var ad=this,
eeb=S(ad.Oj+'tree',ad.pO),
dWe=S(ad.Oj+'hint',ad.pO),
dJK=S(ad.Oj+'search',ad.pO),
bYc=S(ad.Oj+'cancel',ad.pO);
show(eeb,!bTH);
show(dWe,!bTH);
show(dJK,bTH);


setClass(bYc,bTH?"lm_sclose":"lm_sopen");
},





bUE:function(dRq,aO)
{
var ad=this,
ja=getTop().QMAddress,
eI=ja.getAddress(aO),
aS=ad.dH,
eH=[];
if(aS.nType==0)
{
eH=[eI];
}
else
{
var bTa=S(ad.Oj+"_s_"+aO,ad.pO);
if(dRq)
{
if(!ad.Of[eI.email])
{
ad.bUN.showItem(aO,false);
if(bTa)
{
show(ad.Oj+'noaddress',!--ad.bVN,ad.pO);
show(bTa,0);
}

ad.Of[eI.email]=1;
ad.YV.push(aO);
ad.bcp(eI,1);
}
}
else
{
eI=eI||ad.aoj[aO];
if(ad.Of[eI.email]==1)
{
ad.bUN.showItem(aO,true);
if(bTa)
{
show(ad.Oj+'noaddress',!++ad.bVN,ad.pO);
show(bTa,1);
}
ad.Of[eI.email]=0;
ad.bcp(eI,0);

for(var aE=0,aT=ad.YV.length;aE<aT;aE++)
{
if(ad.YV[aE]==aO)
{
ad.YV.splice(aE,1);
break;
}
}
}
}
for(var aE=0,aT=ad.YV.length;aE<aT;aE++)
{
var gX=ad.YV[aE];
eH.push(ja.getAddress(gX)||ad.aoj[gX]);
}
}
callBack.call(ad,aS.onselect,[eH]);

},

bcp:function(mF,fh)
{
var ad=this,
aAZ=[ad.Oj,'r',mF.id].join('_');
if(fh)
{
insertHTML(ad.dH.oContainerRight,'beforeEnd',
QMLinkman.bX.cgy.replace(extend(
{
rid:aAZ
},mF)
)
);
}
else
{
removeSelf(S(aAZ,ad.pO));
}
},




show:function(aI)
{
var ad=this;
if(typeof aI=="string")
{
ad.dH.oContainer.innerHTML=aI;
}
else
{
ad.mh=aI;
ad.aCU=now();
ad.gk();
}
}















};

QMLinkman.bX={
ada:T('<div class="settingtable qqshowbd" style="padding:4px 0 2px 8px;" >$other$$title$</div>'),



bPQ:T('$other$<div class="$cac$" onmouseover="this.style.background=\'#ffeec2\'" onmouseout="this.style.background=\'#fff\'" style="padding:2px 0 1px;"><div title="$name$" class="lm_ca"><a nocheck="true"><input type="button" class="lm_ico"/>$name$</a></div></div>'),

bQg:T('<a nocheck="true" href="javascript:\'\'" class="lm_rt" fun="$fun$">$name$</a>'),

bqC:T([
'<div class="lm_sbar">',
'<input type="button" id="$pid$cancel" class="lm_sopen"/>',
'<div>',
'<input id="$pid$searchtext" type="text" class="txt" value="查找联系人..." autocomplete="off"/>',
'</div>',
'</div>',
'<div id="$pid$tree" class="lm_panel"></div>',
'<div id="$pid$search" class="lm_panel" style="display:none;"></div>'
]),

dmf:TE([
'<div class="settingtable qqshowbd" style="padding:4px 0 2px 8px;border-width:0 0 1px 0;" >您是否还要找...</div>',
'$@$for($_this_$)$@$',
'<div class="groupclose" key="$oAddress.id$" sub="0">',
'<a unselectable="on" nocheck="true" onmousedown="return false;" href="javascript:\'\'" title="$oAddress.email$" class="lm_addr">$oAddress.name$</a>',
'</div>',
'$@$endfor$@$',
]),

bIc:T('<a unselectable="on" nocheck="true" onmousedown="return false;" href="javascript:\'\'" title="$title$" class="lm_addr">$beforeImage$$name$</a>'),

cgy:T([
'<a id="$rid$" title="$email$" nocheck="true" class="lm_addr lm_raddr" href="javascript:\'\'">',
'<input type="button" class="mov"/>',
'<div style="overflow:hidden;height:100%;*float:right;">',
'<div style="overflow:hidden;width:100%;">$name$</div>',
'</div>',
'</a>'
]),

bRG:T([
'<a nocheck="true" id="$pid$_s_$id$" title="$title$" style="display:$disp$" class="lm_saddr" href="javascript:\'\'">',
'<div class="lm_name">$name$</div>',
'<div class="lm_email">$email$</div>',
'</a>'
]),

caJ:T(['<img class="lm_groupAutoIcon" src="',
getPath("image"),'spacer.gif" title="群组帐号"/>']),

bDQ:T('<div style="margin:4px 0 6px 17px;color:#797979">(暂无$message$)</div>'),

cuC:T('<div id="$pid$noaddress" style="padding:5px;display:$disp$">没有符合条件的联系人。</div>')

};










QMLinkman.showDlg=function(sL,Su,cX)
{
if(!(Su&&QMAddress.isInit()))
{

return false;
}

cX=cX||{};
var drq=[];
if(!Su.get&&Su.value!=""&&QMAddrParser)
{
drq=QMAddrParser.parseAddr(Su.value);
}
var hq=null,
chj=Su.get?Su.get("json"):drq;
var aOw=new QMDialog({
sId:"add_address",
sTitle:"从联系人中添加",
sBodyHtml:T([
'<div class="lm_dlg">',
'<div style="text-align:left; margin:0 0 6px 0;height:$height$px;">',
'<table width="93%" border="0" align="center" cellpadding="0" cellspacing="0" style=" table-layout:fixed">',
'<tr>',
'<td width="190" style="font-size:14px;font-weight:bold;padding:12px 0 3px 0;">联系人<span id="totleNum"></span></td>',
'<td width="20">&nbsp;</td>',
'<td width="190" style="font-size:14px;font-weight:bold;padding:12px 0 3px 0;"><span id="text_name">$who$</span><span id="selectNum"></span>&nbsp;</td>',
'</tr>',
'<tr>',
'<td><div class="bd_upload lm_cnt" id="left"></div></td>',
'<td align="center"><img src="/zh_CN/htmledition/images/arrow_left.gif"/></td>',
'<td><div id="right" class="bd_upload lm_cnt" style="overflow-y:auto;"></div></td>',
'</tr>',
'</table>',
'</div>',
'<div class="attbg" style="margin:0px;padding:5px;text-align:right;">',
'<input type="button" class="btn wd2" id="ok" value="确定"/><input type="button" class="btn wd2" id="cancel" value="取消" />',
'</div>',
'</div>'
]).replace({
who:{"to":"收件人","cc":"抄送","bcc":"密送","sc":"分别发送","sms":"接收人"}[sL],
height:(cX.sDlgHeight||447)-72
}),
nWidth:cX.sDlgWidth||480,
bClose:true,
nHeight:cX.sDlgHeight||447,
onshow:function()
{
var cy=this;
new QMLinkman({
nType:1,
bSupportGroup:cX.bSupportGroup,
oMainGroup:["mailgroup","domaingroup","qqgroup"],
oContainer:cy.S("left"),
oContainerRight:cy.S("right"),
oExitAddress:chj,
onselect:function(bIu)
{
hq=bIu;
cy.S("selectNum").innerHTML=hq.length?['(',hq.length,')'].join(""):'';
}
});
cy.S("totleNum").innerHTML="("+getTop().QMAddress.countAddress()+")";
cy.S("selectNum").innerHTML=chj.length?['(',chj.length,')'].join(""):'';
},
onload:function()
{
var cy=this;
addEvent(cy.S("ok"),"click",function()
{
cX&&cX.onselect&&cX.onselect(hq);
QMLinkman.addAddrEx(hq,0,Su);
cy.close();
}
);
addEvent(cy.S("cancel"),"click",function()
{
cy.close();
}
);
}

});
return true;
};







QMLinkman.addAddrEx=function(Wc,dPJ,Su,bKx)
{
var ae=getTop(),
cN=T('"$nick$"<$addr$>; '),
dgF,
eI,
hq;

if(Wc&&Su)
{
!dPJ&&(Su.clear?Su.clear():Su.value="");
dgF=Su.add?
function(eh)
{
Su.add(eh);
}:
function(eh)
{
Su.value+=eh;
};

for(var aE=0,ZO=Wc.length;aE<ZO;aE++)
{
eI=Wc[aE];
if(eI.nShortcutGroupId)
{
hq=[];
var gQ=ae.QMAddress.getGroup(eI.nShortcutGroupId);
for(var ddA=gQ.addressesId,fA=0,XC=ddA.length;fA<XC;fA++)
{
hq.push(ae.QMAddress.getAddress(ddA[fA]));
}
}
else
{
hq=[eI];
}
for(var fA=0,XC=hq.length;fA<XC;fA++)
{
dgF(cN.replace(
{
nick:encodeNick(htmlDecode(hq[fA].name)),
addr:hq[fA].email
}
)
)
}
}
if(!bKx)
{
Su.focus("end");
}
}
};

