
var dYY=new Date().getTime(),
jg,kT;


















var qmAnimation=function(Ld)
{
this.bKG=null;
this.bbF=[];
this.dIK={};
this.aBk(Ld,true);
};

kT=qmAnimation;
jg=kT.prototype;








jg.play=function(Ld)
{
if(typeof Ld=="function")
{
if(this.bKG)
{
this.bbF.push(Ld);
}
else
{
this.AX(Ld(),true);
}
}
else
{
this.stop();
this.AX(Ld);
}
};

jg.stop=function()
{
var cq=this;
var dKb=this.bbF;
this.bbF=[];

this.Pr();

E(dKb,function(dVK)
{
var bjF=dVK();
if(bjF)
{
cq.aBk(bjF);
if(typeof(cq.bJZ)=="function")
{
cq.bJZ.call(cq,cq.bYs,true);
}
}
}
);
};













jg.updateStyle=function(od,aF,bjn)
{
var dqV=this.dnC||(this.dnC={}),
cE=aF.style;

if(bjn)
{
dqV[od]=cE.cssText;
for(var i in bjn)
{
cE[i]=bjn[i];
}
}
else
{
cE.cssText=dqV[od];
}
};



jg.aBc=function(cWx)
{
var dit=true,
dpi=now();

if(cWx||(dpi>this.djK))
{
this.cAg.clearInterval(this.bKG);

this.djK=0;
this.bKG=null;

if(typeof(this.bJZ)=="function")
{
this.bJZ.call(this,this.dIG,cWx);
}

if(this.bbF.length>0)
{
this.AX(this.bbF.shift()(),true);
}

dit=false;
}
else
{
var cSp=dpi-this.dcQ;
if(typeof(this.cBP)=="function")
{
this.cBP.call(this,this.ddU(cSp,this.czV,this.dJr,this.bZI),
cSp/this.bZI);
}
}
return dit;
};

jg.AX=function(Ld,dWA)
{
if(dWA&&!Ld)
{
if(this.bbF.length>0)
{
this.AX(this.bbF.shift()(),true);
}
return;
}

this.aBk(Ld);

this.dcQ=now();
this.djK=this.dcQ+this.bZI;

if(this.aBc())
{
var cq=this;
this.bKG=this.cAg.setInterval(function()
{
cq.aBc();
},
13
);
}
};

jg.aBk=function(Ld,dWc)
{
if(Ld)
{
var aQZ=this.dIK;
var aqZ=dWc?aQZ:this;
var djc=this.constructor;

aqZ.cAg=Ld.win||aQZ.cAg||window;

aqZ.czV=typeof(Ld.from)=="number"?Ld.from:aQZ.czV;
aqZ.bYs=typeof(Ld.to)=="number"?Ld.to:aQZ.bYs;
aqZ.dIG=typeof(Ld.completeto)=="number"?Ld.completeto:aqZ.bYs;
aqZ.dJr=aqZ.bYs-aqZ.czV;

aqZ.bZI={fast:200,slow:600}[Ld.speed]||Ld.speed||aQZ.bZI;

var bUT=djc.cSE[Ld.tween]||aQZ.ddU||djc.cSE.Linear;
aqZ.ddU=typeof(bUT)=="function"?bUT:(bUT[Ld.easing]||bUT.easeIn);

aqZ.cBP=Ld.onaction||aQZ.cBP;
aqZ.bJZ=Ld.oncomplete||aQZ.bJZ;
}
};

jg.Pr=function()
{
if(!this.bKG)
return false;

return this.aBc(true);
};





















kT.play=function(am,ah)
{
var ad=this,
cw=ad.eJ,
dM=cw.cRI,
aRj=now()+Math.random(),
aN=extend({},dM,ah),
aL,at,bD,lm;

try
{
aL=am.ownerDocument;
at=aL.defaultView||aL.parentWindow;
bD=at[cw.bXg];
}
catch(aX)
{
return am;
}
try
{
var ad=this,
cw=ad.eJ,
dM=cw.cRI,
aRj=now()+Math.random(),
aN=extend({},dM,ah),
aL=am.ownerDocument,
at=aL.defaultView||aL.parentWindow,
bD=at[cw.bXg],
lm;

}
catch(e)
{
callBack.call(am,ah.oncomplete,[ah.to,false,false]);
return am;
}

if(!bD)
{
bD=at[cw.bXg]={};
}

function cYy(bLr,bMV)
{
am.setAttribute(cw.bEI,bLr+"|"+bMV);
}

function dmq(bLr)
{
return(am.getAttribute(cw.bEI)||"").split("|")[0];
}

function cYz(dRc)
{
am.setAttribute(cw.cOw,dRc);
}

function drG()
{
return am.getAttribute(cw.cOw)||"";
}

function AX(bLr,aCs)
{
var dqy=bD[bLr],
bwX=dqy[cw.das],
aex;

cYy(bLr,bwX.actiontype);

if(typeof bwX.onready=="function")
{
aex=bwX.onready.call(am,aCs);
}


if(aCs||aex==false)
{
var eq=aex&&aex.to;
bwX.oncomplete(
typeof eq=="number"?eq:bwX.to,
aCs,
aex==false
);
}
else
{

if(aex)
{
aex.onaction=aex.oncomplete=null;
}

dqy.play(aex||{});
}
}

aN.onaction=function(cd,jK)
{
ah.onaction.call(am,cd,jK);
};

aN.oncomplete=function(cd,aCs,cdp)
{
cYy("",ah.actiontype);
delete bD[aRj];

ah.oncomplete.call(am,cd,aCs,cdp);

var coL=drG().split("|"),
cxX=coL.shift();


if(cxX)
{
cYz(coL.join("|"));

if(coL.length==0)
{
AX(cxX);
}
else
{
AX(cxX,aCs);
}
}
};

aN.win=at;
lm=bD[aRj]=new ad(aN);
lm[cw.das]=aN;

if(dmq())
{
var cXY=drG();
cYz(cXY+(cXY?"|":"")+aRj);

if(aN.type!="wait")
{

var bgO=bD[dmq()];
bgO&&bgO.stop();
}
}
else
{
AX(aRj);
}

return am;
};






kT.stop=function(am)
{
var ad=this,
cw=ad.eJ,
aL,at,bD,czk;

try
{
aL=am&&am.ownerDocument;
at=aL.defaultView||aL.parentWindow;
bD=at[cw.bXg];
czk=(am.getAttribute(cw.bEI)||"").split("|")[0];

if(czk)
{
am.setAttribute(cw.cOw,"");
bD[czk].stop();
}
}
catch(aX)
{
}

return am;
};






kT.isPlaying=function(am)
{
return!!am.getAttribute(this.eJ.bEI);
};






kT.getActionType=function(am)
{
return(am.getAttribute(this.eJ.bEI)||"").split("|").pop();
};






















kT.diw=function(am,bMV,ah)
{
var nr=gbIsIE?1:0,
aN=ah||{},
lK=aN.speed,
eB=aN.from,
eq=aN.to,
bZA=aN.durlimit||0,
dAl=aN.basespeed||1.8,
dTm=aN.unilimit,
deQ=typeof lK=="undefined"||lK=="uniform",
crc=false;

function cod()
{
var nV=arguments,
oq=aN["on"+nV[0]];
if(typeof oq=="function")
{
return oq.call(nV[1],nV[2]);
}
}

function dpc(ak)
{
return ak.scrollHeight-(gbIsIE
?0:parseInt(getStyle(ak,"paddingTop"))
+parseInt(getStyle(ak,"paddingBottom")));
}

return qmAnimation.play(am,extend({},aN,
{
actiontype:bMV,
speed:deQ?"fast":lK,
to:nr,
onready:function(aCs)
{
if(!aCs)
{
var cE=this.style,
aeP,afv,bCq,akZ;

crc=false;
akZ=cod("ready",this)||{};
bCq=akZ.speed;
aeP=typeof akZ.from=="number"
?akZ.from:eB;
afv=typeof akZ.to=="number"
?akZ.to:eq;

if(bMV=="expand")
{
if(typeof aeP!="number"||isNaN(aeP))
{
var dg=parseInt(cE.height);
if(isNaN(dg))
{
aeP=cE.height=nr;
}
else
{
aeP=dg;
}
}
else
{
cE.height=aeP;
}
}
else
{
if(typeof afv!="number"||isNaN(afv)||afv<nr)
{
afv=nr;
}
}
cE.overflow="hidden";
cE.visibility="visible";
if(cE.display=="none")
{
cE.display="";
}


if(gbIsIE)
{
var yf=this.scrollHeight;
}

if(bMV=="expand")
{
if(typeof afv!="number"||isNaN(afv))
{
afv=dpc(this);
crc=true;
}
}
else
{
if(typeof aeP!="number"||isNaN(aeP))
{
var dg=parseInt(cE.height);
aeP=isNaN(dg)
?dpc(this):dg;
}
}

var gC=afv-aeP,
dHY=afv;
if(bZA>0&&Math.abs(gC)>bZA)
{
if(gC>0)
{
afv=aeP+bZA;
}
else
{
aeP=afv+bZA;
}
}

if(!bCq)
{
if(deQ)
{
var dfh=Math.abs(aeP-afv),
csc=akZ.unilimit||dTm;
bCq=(akZ.basespeed||dAl)
*(csc
?Math.min(Math.max(dfh,csc[0]),csc[1])
:dfh);
}
else
{
bCq=lK;
}
}

return afv==aeP
?false
:{
from:Math.max(aeP,nr),
to:Math.max(afv,nr),
completeto:dHY,
speed:bCq
};
}
},
onaction:function(cd,jK)
{
this.style.height=cd+"px";
cod("action",this,jK);
},
oncomplete:function(cd,aCs,cdp)
{
if(!aCs)
{
if(cd==nr)
{
show(this,false);
}


this.style.height=crc?"auto":(cd+"px");
cod("complete",this,cd,cdp);
}
}
}
));
};






kT.expand=function(am,ah)
{
return this.diw(am,"expand",ah);
};







kT.fold=function(am,ah)
{
return this.diw(am,"fold",ah);
};

kT.eJ={
bXg:"QMaNiMatiON_CachE",
das:"sTatiC_Play_Conf",
bEI:"QMaNiMatiON_PlaY",
cOw:"QMaNiMatiON_WaiT",
cRI:{
from:1,
to:100,
speed:"fast"
}
};

kT.cSE=
{


Linear:function(t,b,c,d)
{
return c*t/d+b;
},
Sine:
{
easeIn:function(t,b,c,d)
{
return-c*Math.cos(t/d*(Math.PI/2))+c+b;
},
easeOut:function(t,b,c,d)
{
return c*Math.sin(t/d*(Math.PI/2))+b;
},
easeInOut:function(t,b,c,d){
return-c/2*(Math.cos(Math.PI*t/d)-1)+b;
}
},
Cubic:
{
easeIn:function(t,b,c,d)
{
return c*(t/=d)*t*t+b;
},
easeOut:function(t,b,c,d)
{
return c*((t=t/d-1)*t*t+1)+b;
},
easeInOut:function(t,b,c,d)
{
if((t/=d/2)<1)return c/2*t*t*t+b;
return c/2*((t-=2)*t*t+2)+b;
}
},
none:false
};





























var qmTab=function(ks)
{
this.aVr(ks);
this.bul();
};

kT=qmTab;
jg=kT.prototype;



jg.change=function(anU)
{
var aSO=this.cBJ,
tU=this.FK,
aOU=tU.bNf,
Zv=aSO[anU];

if(!Zv||!Zv.PG)
return false;

if(aOU==anU)
return true;

if(aOU)
{
var aTQ=aSO[aOU].pH;
var bMX=Zv.pH;

setClass(aSO[aOU].ga,this.aBn.normal);

if(this.aNJ)
{
this.aNJ.stop();

function ahY(cd)
{
var jy=cd/100;
setOpacity(aTQ,jy);
setOpacity(bMX,1-jy);
}

var cvv={
display:"",
position:"absolute",
width:getStyle(aTQ,"width"),
height:getStyle(aTQ,"height"),
zIndex:1
};

this.aNJ.updateStyle("pre",aTQ,cvv);
this.aNJ.updateStyle("cur",bMX,(cvv.zIndex=2)&&cvv);

var ehH=[];
var dhC=this.ach.dKq;
this.aNJ.play(
{
onaction:function(wQ,dXG)
{
ahY(wQ);
},
oncomplete:function(wQ,biG)
{
ahY(wQ);

this.updateStyle("pre",aTQ);
this.updateStyle("cur",bMX);

show(aTQ,false);
show(bMX,true);

if(typeof(dhC)=="function")
dhC(anU,aOU);

}
}
);
}
else
{
show(aTQ,false);
show(bMX,true);
}
}
else{
show(Zv.pH,true);
}

setClass(Zv.ga,this.aBn.select);

tU.bNf=anU;

if(typeof(this.ach.me)=="function")
this.ach.me(anU,aOU);

return true;
};

jg.enable=function(anU,cWD){
var Zv=this.cBJ[anU];
if(!Zv)
return false;

setClass(Zv.ga,this.aBn[
(Zv.PG=cWD||typeof(cWD)=="undefined"?true:false)?
"normal":"disable"]);

return true;
};

jg.getSelectedTabId=function(){
return this.FK.bNf;
};



jg.aVr=function(ks){
var aSO=this.cBJ={};
for(var i in ks.tab)
aSO[i]={
zh:i,
ga:ks.tab[i].obj,
pH:ks.tab[i].container,
PG:true
};

this.aBn=ks.style;
this.ach={
me:ks.onchange,
dKq:ks.onchangeend
};
this.FK={
bNf:null
};

if(ks.isEnableAnimation!=false)
{
this.aNJ=new qmAnimation({
win:ks.win,
from:100,
to:0,
speed:400,
tween:"Sine",
easing:"easeOut"
});
}
};

jg.bul=function(){
var cq=this;
var aSO=this.cBJ

for(var i in aSO){
(function(){
var kS=aSO[i];
show(kS.pH,false);

addEvent(kS.ga,"click",function(){
cq.change(kS.zh);
});
addEvent(kS.ga,"mouseover",function(iP){
if(kS.PG&&cq.FK.bNf!=kS.zh)
setClass(kS.ga,cq.aBn.over);
});
addEvent(kS.ga,"mouseout",function(iP){
if(kS.PG&&cq.FK.bNf!=kS.zh&&
!isObjContainTarget(kS.ga,iP.relatedTarget||iP.toElement))
setClass(kS.ga,cq.aBn.normal);
});
})();
}
};









































var qmSimpleThumb=function(ks){
this.aVr(ks);
this.bul();
};

kT=qmSimpleThumb;
jg=kT.prototype;



jg.enable=function(){
var tU=this.FK;
if(tU.PG==true)
return;

tU.PG=true;
if(tU.On==-1)
return this.goPage(1);

this.cgv();
};

jg.disable=function(){
var tU=this.FK;
if(tU.PG==false)
return;

tU.PG=false;
this.cgv();
};

jg.getDataLength=function(){
return this.aZz.length;
};

jg.getId=function(){
return this.adJ;
};

jg.getSelectedData=function(){
var aPm=this.FK.aPm;

return aPm<0?null:this.aZz[aPm];
};

jg.goPage=function(aMp){
var tU=this.FK,
qg=tU.On;
if(tU.PG&&aMp>=1&&aMp<=tU.aSZ){
tU.On=aMp;

this.cgv();
if(this.ecO())
this.cWs();
this.dDY();

callBack.call(this,this.ach.dKr,[aMp,qg]);


return true;
}
return false;
};

jg.select=function(adt){
var qb=this.aZz,
tU=this.FK;

adt=parseInt(adt);

if(adt<0)
{

}
else if(isNaN(adt)||((adt=adt%qb.length)==tU.aPm))
{
this.ach.TQ.call(this,adt,tU.bYY);
return false;
}

tU.bYY=tU.aPm;
tU.aPm=adt;

this.cWs();

if(typeof(this.ach.TQ)=="function")
{
this.ach.TQ.call(this,adt,tU.bYY);
}

return true;
};

jg.onmouseover=function(am)
{
if(typeof(this.ach.aNO)=="function")
{
this.ach.aNO.call(this,am);
}
return true;
},

jg.onmouseout=function(am)
{
if(typeof(this.ach.aNP)=="function")
{
this.ach.aNP.call(this,am);
}
return true;
},

jg.setExternInfo=function(SU,dQc)
{
var gK=parseInt(SU),
ay=this.aZz,
aTC=this.bGz.aUj,
fD=ay.length-1;

if(!isNaN(gK)&&gK>=0&&gK<=fD)
{
var cws=Math.floor((fD-gK)/aTC),
bU=fD-gK-cws*aTC,
bz=this.aAZ.bkl[cws].firstChild.childNodes;

if(bU<0||bU>=bz.length)
{
return;
}

bz[bU].lastChild.innerHTML=dQc;
}
};

jg.update=function(bFy){
this.dDm(bFy);
this.ecP();
this.goPage(this.FK.On=Math.min(this.FK.On,this.FK.aSZ));
};



jg.eab=function(){
var Da=[];
var XC=qmSimpleThumb.bP.dDG;
var tU=this.FK;
var dPc=this.aBn.thumb.container;

for(var i=0,be=Math.max(tU.aSZ,1);i<be;i++)
Da.push(XC.replace({border:dPc}));

return qmSimpleThumb.bP.dAN.replace({
container:Da.join("")
});
};

jg.cLx=function(aqY,dWr){
return qmSimpleThumb.bP.Xe.replace({
images_path:getPath("image"),
msg:aqY,
dispload:dWr?"":"none"
});
};

jg.dZt=function(aMp){
var aQS=this.aZz;
var aWG=aQS.length;

if(aWG==0)
return this.cLx("暂无数据");

var dqh=this.bGz.aUj;
var dfw=aMp*dqh;
var bca=dfw-dqh;
var ebF=dfw-1;



if(aQS[bca].indexOf)
{
if(aQS[bca].indexOf("loading")==0)
{
return this.cLx(aQS[bca].substr(7)||"数据加载中...",true);
}
else if(aQS[bca].indexOf("custom")==0)
{
return this.cLx(aQS[bca].substr(6));
}
}

var Da=[];
var XC=qmSimpleThumb.bP.bNe;
var AB=this.aBn.thumb;
var aqQ={
img:AB.img,
normal:AB.normal,
over:AB.over,
images_path:this.bGz.duv
};

if(aQS[bca].thumb.indexOf("http")==0)
{

aqQ.images_path="";
}

for(var i=bca,be=Math.min(aWG--,ebF+1);i<be;i++){
var drW=aWG-i;
aqQ.value=drW;
aqQ.url=aQS[drW].thumb;
Da.push(XC.replace(aqQ));
}

return Da.join("");
};

jg.aVr=function(ks){
this.adJ=ks.id||T("qmSimpleThumb_$date$").replace({
date:now()
});
this.bGz={
duv:ks.imgpath,
aUj:ks.numperpage||8
};
this.aAZ=ks.dom;
this.aBn=ks.style;
this.ach={
dKr:ks.onchangepage,
TQ:ks.onselect,
aNO:ks.onmouseover,
aNP:ks.onmouseout
};
this.FK={
On:-1,
aSZ:0,
aPm:-1,
bYY:-1,
PG:null
};

var pH=this.aAZ.container;
this.aNJ=new qmAnimation({
win:ks.win,
speed:"slow",
tween:"Cubic",
easing:"easeOut",
onaction:function(wQ){
pH.scrollLeft=wQ;
},
oncomplete:function(wQ,biG){
if(!biG)
pH.scrollLeft=wQ;
}
});

this.update(ks.data);
this[ks.enabled?"enable":"disable"]();
};

jg.ecP=function(){
var pH=this.aAZ.container;
pH.innerHTML=this.eab();
this.aAZ.bkl=GelTags("td",pH);
};

jg.cgv=function(){
var acD=this.aAZ;
var tU=this.FK;
var AB=this.aBn.btn;
var PG=tU.PG;
var On=tU.On;
var aSZ=tU.aSZ;

if(acD.pagetxt&&PG)
acD.pagetxt.innerHTML=qmSimpleThumb.bP.bfP.replace({
page:On,
total:aSZ
});

if(acD.prevbtn)
{



setClass(acD.prevbtn,!PG||On==1?
AB.disable:AB.normal);

}

if(acD.nextbtn)
{
setClass(acD.nextbtn,!PG||On==aSZ?
AB.disable:AB.normal);


}
};

jg.ecO=function(){
var On=this.FK.On;
if(On>0){
var caH=this.aAZ.bkl[On-1].firstChild;
if(!caH.innerHTML){
caH.innerHTML=this.dZt(On);
return true;
}
}
return false;
};

jg.cWs=function(){
var AB=this.aBn.thumb;
var tU=this.FK;

var aWG=this.aZz.length-1;
var aUj=this.bGz.aUj;
var bkl=this.aAZ.bkl;

function dcZ(bVP,cWo){
if(bVP<0||bVP>aWG)
return;

var cTJ=Math.floor((aWG-bVP)/aUj);
var apc=aWG-bVP-cTJ*aUj;

var JM=bkl[cTJ].firstChild.childNodes;
if(apc<0||apc>=JM.length)
return;

var ga=JM[apc];
ga.setAttribute("select",cWo&&AB.select&&AB.select!=AB.over
&&AB.select!=AB.normal?"true":"false");
setClass(ga,cWo?AB.select:AB.normal);
};

dcZ(tU.aPm,true);
dcZ(tU.bYY,false);
};

jg.bul=function(){
var cq=this;
var acD=this.aAZ;
var tU=this.FK;

addEvent(acD.prevbtn,"click",function(ag){
preventDefault(ag);
cq.goPage(tU.On-1);
});

addEvent(acD.nextbtn,"click",function(ag){
preventDefault(ag);
cq.goPage(tU.On+1);
});

addEvent(acD.container,"drag",preventDefault);

addEvent(acD.container,"click",function(iP){
preventDefault(iP);
var mT=iP.srcElement||iP.target;
var aqQ=mT.getAttribute("param");
if(aqQ)
cq.select(aqQ);
});

addEvent(acD.container,"mouseover",function(ag)
{

cq.onmouseover(ag);
});
addEvent(acD.container,"mouseout",function(ag)
{

cq.onmouseout(ag);
});
};

jg.dDY=function(){
var On=this.FK.On;
if(On>0){
var pH=this.aAZ.container;
var caH=this.aAZ.bkl[On-1];


this.aNJ.stop();
this.aNJ.play({
from:pH.scrollLeft,
to:caH.offsetLeft
});










}
};

jg.dDm=function(bFy){
this.aZz=bFy;
this.FK.aSZ=1+parseInt((this.aZz.length-1)/this.bGz.aUj);
};


kT.bP={};

kT.bP.dAN=T([
'<table cellpadding="0" cellspacing="0" border="0">',
'<tr>$container$</tr>',
'</table>'
]);

kT.bP.dDG=T([
'<td><div class="$border$"></div></td>'
]);

kT.bP.efs=T([
'<div class="$border$">$content$</div>'
]);

kT.bP.bNe=T([
'<div class="$normal$" un="item" param="$value$"',
'onmouseover="',
'this.getAttribute(\x27select\x27)!=\x27true\x27&&getTop().setClass(this,\x27$over$\x27);',
'" onmouseout="',
'this.getAttribute(\x27select\x27)!=\x27true\x27&&getTop().setClass(this,\x27$normal$\x27);',
'">',
'<img class="$img$" src="$images_path$$url$" param="$value$"/>',

'</div>'
]);

kT.bP.Xe=T([
'<div style="text-align:center;">',
'<img src="$images_path$ico_loading1.gif" style="display:$dispload$;"/>',
'$msg$',
'</div>'
]);

kT.bP.bfP=T([
'$page$ / $total$'
]);
































































var qmGroupThumb=function(ks){
this.aVr(ks);
};

kT=qmGroupThumb;
jg=kT.prototype;



jg.changeGroup=function(acq){
this.bki.change(acq);
};

jg.enable=function(){
if(this.FK.PG==true)
return false;

this.FK.PG=true;

var aRL=this.bki.getSelectedTabId();
if(aRL)
this.aBO[aRL].enable();
};

jg.disable=function(){
if(this.FK.PG==false)
return false;

this.FK.PG=false;

var aRL=this.bki.getSelectedTabId();
if(aRL)
this.aBO[aRL].disable();
};

jg.getDataLength=function(acq){
return this.aBO[acq].getDataLength();
};

jg.getId=function(){
return this.adJ;
};

jg.getSelectedData=function(){
var aiK=this.FK.aiK;
return!aiK?null:this.aBO[aiK].getSelectedData();
};

jg.goPage=function(aMp){
var aCT=this.aBO[this.bki.getSelectedTabId()];
if(aCT)
aCT.goPage(aMp);
};

jg.select=function(adt,acq){
var aCT=this.aBO[acq||this.bki.getSelectedTabId()];
return aCT?aCT.select(adt):false;
};

jg.update=function(bFy,acq){
var aCT=this.aBO[acq];
aCT&&aCT.update(bFy);
};



jg.aVr=function(ks){
this.adJ=ks.id||T("qmSimpleThumb_$date$").replace({
date:now()
});

this.ach={
TQ:ks.onselect,
me:ks.onchange
};

this.FK={
aiK:null,
aOr:-1,
PG:null
};

var cq=this;
var bjx=this.aBO={};
var cSg={};
var doB=ks.group;
for(var bGK in doB){
var cxI=doB[bGK];
cSg[bGK]=cxI.dom;
bjx[bGK]=new qmSimpleThumb({
id:bGK,
win:ks.win,
imgpath:ks.imgpath,
numperPage:ks.numperpage||8,
enabled:false,
dom:{
container:cxI.dom.container,
prevbtn:ks.dom.prevbtn,
nextbtn:ks.dom.nextbtn,
pagetxt:ks.dom.pagetxt
},
style:{
thumb:ks.style.thumb,
btn:ks.style.btn
},
data:cxI.data,
onselect:function(aRb,bEK){
cq.dKW(this,aRb,bEK);
}
});
}

this.bki=new qmTab({
win:ks.win,
tab:cSg,
style:ks.style.group,
onchange:function(anU,aOU){
cq.dKJ(anU,aOU);
}
});

this.bki.change(ks.defgroupid||bGK);
this[ks.enabled==false?"disable":"enable"]();
};

jg.dKJ=function(acq,bVI){
var ad=this;
if(!ad.FK.PG)
return;


callBack.call(ad,ad.ach.me,[acq,bVI]);

if(bVI)
ad.aBO[bVI].disable();
ad.aBO[acq].enable();
};

jg.dKW=function(cIo,aRb,bEK){
var tU=this.FK;
var aiK=tU.aiK;
var aOr=tU.aOr;

if(aRb!=-1){
tU.aiK=cIo.getId();
tU.aOr=aRb;

var cXr=this.aBO[aiK];
if(aRb!=-1&&aiK!=cIo.getId()&&cXr)
cXr.select(-1);
}
else if(aiK==cIo.getId()){

tU.aOr=-1;
}

if((aiK!=tU.aiK||aOr!=tU.aOr)&&
typeof(this.ach.TQ)=="function")
this.ach.TQ.call(this,
{
groupid:tU.aiK,
thumbidx:tU.aOr
},
{
groupid:aiK,
thumbidx:aOr
});
};





qmActivex=function(){
this.adJ="qmActiveX_"+(new Date()).valueOf();
this.czF={};
this.aAP=null;
};

kT=qmActivex;
jg=kT.prototype;

jg.screenSnap=function(cUT){
var arh=this.biD("screensnap");
if(!arh)
return false;

try{
arh.efX=(getDomain()=="foxmail.com")?1:0;
}
catch(e){
}

var aSc=function(uu){
return function(){
if(typeof(cUT)=="function")
cUT(uu);
};
};

arh.OnCaptureFinished=aSc(true);
arh.OnCaptureCanceled=aSc(false);

arh.DoCapture();

return true;
};














jg.upload=function(cVx){
this.stopUpload();
this.aAP=cVx;

var xj=cVx.config;
if(!xj||!xj.url)
throw{message:"qmActivex:no upload cgi url"};


xj.mode=xj.mode||"download";
xj.from=xj.from||"";
xj.scale=xj.scale||"";
xj.widthlimit=xj.widthlimit||"";
xj.heightlimit=xj.heightlimit||"";

return this.dBN()?true:this.dBf();
};

jg.stopUpload=function(){
var wg=this.aAP;
if(!wg)
return;

this.aAP=null;
if(wg.cOh=="form"){
removeSelf(wg.bko);
}
else if(wg.cOh=="activex"){
if(wg.aua!=90)
this.biD("uploader").StopUpload();
}
};

jg.hasClipBoardImage=function(){
var arh=this.biD("screensnap");
return arh?arh.IsClipBoardImage:false;
};

jg.checkImageType=function(dZX,cUX){
var dKy=dZX.toLowerCase();
var caq="gif|jpg|jpeg|bmp|png".split("|");
for(var i=caq.length-1;i>=0;i--)
if(dKy.indexOf(caq[i])!=-1)
break;

if(-1==i){
var Af=T("只允许上传 <b>#type#</b> 格式的图片","#").replace({
type:caq
});
if(cUX=="showerr")
showError(Af);
return cUX=="returnerr"?Af:false;
}

return true;
};

jg.biD=function(aaw)
{
var cUf={
"screensnap":0,
"uploader":2
}[aaw];
if(!detectActiveX(cUf,1))
return null;

if(!this.czF[aaw])
this.czF[aaw]=createActiveX(cUf);

return this.czF[aaw];
};

jg.dZf=function()
{
var arh=this.biD("screensnap");
return arh&&arh.IsClipBoardImage?arh.SaveClipBoardBmpToFile(1):null;
};

jg.dBN=function()
{
var Bf=this.biD("uploader");


if(!Bf)
{
return false;
}

var wg=this.aAP;
if(wg.fileCtrl&&(getTop().gnIEVer>6||!getTop().gbIsIE))
{

return false;
}

wg.screenImg=this.dZf();
if(!wg.fileCtrl&&!wg.screenImg)
{
wg.config.url='';
return false;
}


wg.cOh="activex";
wg.aua=0;
wg.onupload.call(this,"start");

Bf.StopUpload();
Bf.ClearHeaders();
Bf.ClearFormItems();

var xj=wg.config;

if(xj.url.indexOf("http")!=0)
{
Bf.URL=[location.protocol,"//",location.host,xj.url].join("");
}
else
{
Bf.URL=xj.url;
}

var cq=this;
Bf.OnEvent=function(lU,bcJ,asi,aLK,cas){
cq.ecd(lU,bcJ,asi,aLK,cas);
}

Bf.AddHeader("Cookie",document.cookie);

Bf.AddFormItem("sid",0,0,getSid());
Bf.AddFormItem("mode",0,0,xj.mode);
Bf.AddFormItem("from",0,0,wg.fileCtrl?xj.from:"snapscreen");
Bf.AddFormItem("scale",0,0,xj.scale);
Bf.AddFormItem("widthlimit",0,0,xj.widthlimit||0);
Bf.AddFormItem("heightlimit",0,0,xj.heightlimit||0);


if(wg.fileCtrl){
Bf.AddFormItemObject(wg.fileCtrl);
}
else{
Bf.AddFormItem("UploadFile",1,4,wg.screenImg);
}

Bf.StartUpload();

return true;
};

jg.dBf=function(){
var wg=this.aAP;
if(!wg.fileCtrl)
return false;

for(var QA=wg.fileCtrl.parentNode;QA&&QA.tagName!="FORM"&&QA.tagName!="BODY";)
QA=QA.parentNode;

if(!QA||QA.tagName!="FORM")
return false;

wg.cOh="form";
wg.onupload.call(this,"start");

var aAT=wg.window||window;
var cGi=this.adJ;

aAT[cGi+"Instance"]=this;
aAT.qmActiveXDoUploadFinish=function(dWn){
var ga=aAT[dWn.id+"Instance"];
if(ga)
ga.eck();
};

if(wg.bko)
{
egu(wg.bko);
}

createBlankIframe(aAT,{
id:cGi,
onload:dKK
});
var dpg=false;
function dKK(al)
{
var Kn=this;

if(!dpg)
{
wg.bko=Kn;

var xj=wg.config||{};
QA.action=xj.url||["/cgi-bin/upload?sid=",getTop.getSid()].join("");
QA.target=cGi;

QA.sid.value=getSid();
QA.mode.value=xj.mode||"download";
QA.scale.value=xj.scale||"";
QA.widthlimit.value=xj.widthlimit||"";
QA.heightlimit.value=xj.heightlimit||"";
QA.submit();
return dpg=true;
}
al.qmActiveXDoUploadFinish(Kn);
}
};

jg.eck=function()
{
var wg=this.aAP;
if(!wg)
return debug("_doFormUploaderEvent: upload info not exist",null,61882714);
if(!wg.bko)
return;
try
{
var dhK=wg.bko.contentWindow.document;
var dJJ=dhK.body;
if(dJJ.className==wg.bko.id)
return;

var cWO=[];
var cXc=GelTags("script",dhK);
for(var i=0;i<cXc.length;i++)
cWO.push(cXc[i].innerHTML);
this.cSq(cWO.join(""));
}
catch(e)
{
debug(e.message,61882714);
this.bld(false);
}
};

jg.ecd=function(lU,bcJ,asi,aLK,cas){
var wg=this.aAP;
if(!wg)
return debug("_doActivexUploaderEvent: upload info not exist",null,61882714);
switch(bcJ){
case 1:

return this.bld(false,{
errCode:asi
});
case 2:

wg.aua=parseInt(asi*90/aLK);
return wg.onupload.call(this,"uploading",{
percent:wg.aua
});
case 3:

var Bf=this.biD("uploader");
if(Bf.ResponseCode!="200")
return this.bld(false,{
errCode:asi
});

this.cSq(Bf.Response);
}
};

jg.cSq=function(dXz){

var biB=dXz||"";
var Pe=biB.indexOf('On_upload("');
var bcL=biB.indexOf('");',Pe);
var bwP=(Pe!=-1&&bcL!=-1)?biB.substring(Pe+11,bcL):"err";

if(bwP!="err")
return this.bld(true,{
imgParam:bwP.replace(new RegExp("\"","ig"),"").split(",")
});

Pe=biB.indexOf('On_upload_Fail("');
bcL=biB.indexOf('");',Pe);

var dle=function(wQ){
wQ=parseInt(wQ);
return(isNaN(wQ)?"5":(parseInt(100*parseInt(wQ)/(1024*1024))/100));
};
if(Pe!=-1&&bcL!=-1){
bwP=biB.substring(Pe+16,bcL).replace(new RegExp("\"","ig"),"").split(",");
return this.bld(false,{
curSize:dle(bwP[0]),
allowSize:dle(bwP[1])
});
}

return this.bld(false);
};

jg.bld=function(uu,acu){
if(!this.aAP)
return;

try
{
this.aAP.onupload.call(this,uu?"ok":"fail",acu);
}
catch(aX)
{
doPageError(aX.message,this.aAP.window.location.href,"_uploadFinish callback");
}

this.stopUpload();
};














function qmFlash(ks)
{
if(!(this.adJ=ks.id))
{
throw Error(0,"config.id can't use null");
}

if(!(this.ddM=ks.win))
{
throw Error(0,"config.win win is null");
}

this.dDv=this.constructor;
this.QS=ks;
this.aoY();
}

kT=qmFlash;
jg=kT.prototype;

kT.get=function(bmx,aeF)
{
var Ma=aeF[this.eJ.cRL];
return Ma&&Ma[bmx];
};

kT.getFlashVer=function()
{
var kS="";
var bWo=-1;
var bSQ=-1;
var bSG=-1;
var bWL=navigator.plugins;
if(bWL&&bWL.length){

for(var i=0,dEd=bWL.length;i<dEd;i++){
var cUi=bWL[i];
if(cUi.name.indexOf('Shockwave Flash')!=-1){
kS=cUi.description.split('Shockwave Flash ')[1];
bWo=parseFloat(kS);
bSG=parseInt(kS.split("r")[1]);
bSQ=parseInt(kS.split("b")[1]);
break;
}
}
}
else{
try
{
var cPS=new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
if(cPS)
{
kS=cPS.GetVariable("$version").split(" ")[1];
var cyU=kS.split(",");
bWo=parseFloat(cyU.join("."));
bSG=parseInt(cyU[2]);
bSQ=parseInt(cyU[3]);
}
}
catch(e)
{
}
}

return{
version:(isNaN(bWo)?-1:bWo)||-1,
build:(isNaN(bSG)?-1:bSG)||-1,
beta:(isNaN(bSQ)?-1:bSQ)||-1,
desc:kS
};
};

kT.isSupported=function()
{
var aEv=this.getFlashVer();
return aEv.version>=10||aEv.version==9&&aEv.build>50;
};

kT.eJ={
cxt:5*1000 ,
cRL:"qmFlashCaches_ASDr431gGas",
cQR:"onFlashEvent_ASDr431gGas"
};

jg.getFlash=function(){
return getFlash(this.adJ,this.ddM);
};

jg.isDisabled=function(){
return this.dIg||false;
};

jg.disable=function(dWa){
this.dIg=dWa!=false;
return this;
};











jg.getLoadedPercent=function(dVO){
var cq=this;
function oq(wQ){
try{
dVO.call(cq,wQ);
}
catch(e){
}
}

var ga=this.getFlash();
if(!ga)
return oq("notfound");

var cZJ=0;
(function(){
var arp=arguments.callee;
if(!arp.cPd)
arp.cPd=getTop().now();

var aua=0;
var aZT=false;
try{
aua=ga.PercentLoaded();
}
catch(e){
aZT=true;
}

if(aua!=cZJ)
oq(cZJ=aua);

if(aua!=100){
if(getTop().now()-arp.cPd>qmFlash.eJ.cxt){
oq(aZT?"noflash":"timeout");
}
else{
setTimeout(arp,100);
}
}
})();
};












jg.setup=function(dVM){
var cq=this;
function oq(uu,aip){
try{
dVM.call(cq,uu,aip);
}
catch(e){
}
}

this.getLoadedPercent(function(wQ){
if(wQ==100){
setTimeout(function(){
try{
if(!cq.getFlash().setup(qmFlash.eJ.cQR,cq.adJ))
return oq(false,"setuperr");
}
catch(e){
return oq(false,"nosetup");
}

oq(true);
});
}
else if(typeof wQ!="number"){
oq(false,wQ);
}



});
};



jg.aoY=function(){
var aEN=this.ddM;
var djb=this.dDv.eJ;
var bSI=djb.cRL;
var ZR=djb.cQR;

if(!aEN[bSI])
aEN[bSI]=new aEN.Object;

aEN[bSI][this.adJ]=this;

if(!aEN[ZR]){
aEN[ZR]=function(){
var zh=arguments[0];
var diJ=arguments[1];
var bkn=aEN[bSI][zh];

if(bkn&&typeof(bkn.QS[diJ])=="function"){
var dqk=[];
for(var i=2,be=arguments.length;i<be;i++)
dqk.push(arguments[i]);
bkn.QS[diJ].apply(bkn,dqk);
}
};
}
};





function clsXfBatchDownload()
{
this.constructor=arguments.callee;
}

clsXfBatchDownload.prototype=
{
init:function()
{
if(!this.dOd())
{
return false;
}
var auq=new Date();
setCookie("qm_ftn_key","",auq,"/","qq.com");
return true;
},

DoXfBatchDownload:function(csj)
{
var cq=this;
waitFor(function(){
return typeof(BatchTask)!="undefined";
},function(bHK){
if(bHK){
cq.ccW(csj);
}
else{
showError("调用旋风失败，请刷新页面重试。");
}
});
},


makeGetUrlArray:function()
{
return 0;
},


dOd:function()
{
try
{
var aiU=new ActiveXObject("QQIEHelper.QQRightClick.2");
delete aiU;
loadJsFile(getPath("js")+"lib/xunfeng/"+getFullResSuffix("xflib_xw.js"),true);
return true;
}
catch(e)
{
if(confirm("您还没安装QQ旋风，现在去下载安装么？安装完后请刷新本页面。"))
{
window.open("http://xf.qq.com/xf2/index.html");
}
return false;
}
},

ccW:function(csj)
{
var cNa=csj||this.makeGetUrlArray();
if(cNa.length<=0)
{
return;
}
var aO=Math.min(50,cNa.length),
dq=new QMAjax,
av={},
ad=this;
showProcess(1,true,"正在获取下载链接...");
(function dZH(nL)
{
if(nL>=aO)
{
return ad.dMS(av,aO);
}
QMAjax.send([cNa[nL],"&nm=",nL,"&rn=",Math.random()].join(""),
{
method:"GET",
onload:function(aW,cg){
var aT="name"+nL;
if(aW&&cg.indexOf(aT)>0)
{
av[aT]=cg.split('"')[1];
}
dZH(nL+1);
}
},
dq);
})(0);
},

egG:function(){
showError("链接获取失败，请重试");
},

dMS:function(cYm,crq){

var bVH=0,
dhP=[];
for(var aC=0;aC<crq;aC++){
if(typeof cYm["name"+aC]!="undefined"){
var bTd=cYm["name"+aC].split("|");
if(bTd[0]!="error"&&bTd[0].indexOf("http://")==0){
dhP.push(bTd[0].replace(/#/g,"_"));
var Ih=bTd[1],
auq=new Date(now()+3600*1000),
edp=getCookie("qm_ftn_key");
setCookie("qm_ftn_key",[edp,Ih].join(","),auq,"/","qq.com");

bVH++;
}
}
}

if(bVH==crq){
showProcess(0);
}else{
showError((crq-bVH)+"个文件链接获取失败");
}

if(bVH>0){
this.dFO(dhP);
}
},

dFO:function(cWb)
{
var bqx=[];
for(var aC=0,be=cWb.length;aC<be;aC++)
{
{
bqx.push(cWb[aC]);
bqx.push("http://mail.qq.com/");
bqx.push("文件中转站");
}
}
BatchTask(bqx.length,bqx);
}
}





















var QMSender=function(Jf)
{
this.bh=Jf.oWin;
this.Dc=[];
this.cBq=false;
this.cAs=null;
this.dvX(Jf);
}

kT=QMSender;
jg=kT.prototype;

jg.dvX=function(Jf)
{
var bp=S("Senderdiv",this.bh);
if(!bp)
{
return;
}
try
{
var sr=getDefalutAllMail();
}
catch(e)
{
var zI=arguments.callee;
return setTimeout(function()
{
zI.apply(this.bh,arguments);
},500);
}

if(!sr.length)
{
return;
}

var aPl=Jf.nCurFolderId;
var aBI=Jf.sCurSaveFrom;
var bRp=Jf.bShowNode;
var cDy=typeof(Jf.sTitle)=="undefined"?
"可选择邮箱别名或POP文件夹的邮件地址&#10;作为发信帐号。":Jf.sTitle;

var cDD=typeof(Jf.sDesContent)=="undefined"?
"发件人":Jf.sDesContent;

this.cAs=function(an)
{

if(!S("sendmailname_val",this.bh))
{
return;
}
S("sendmailname_val",this.bh).lastChild.innerHTML=this.bP.bHf.replace(an);
this.bYR(an);


if(an.sms)
{
loadJsFileToTop(getPath("js"),[getFullResSuffix("qmtip.js")]);
var bmU=this.bh;

waitFor(function()
{
return QMTip;
},
function(aW)
{

if(aW&&S("sendmailname",bmU).value==an.email)
{
QMTip.show({
tipid:10001,
domid:'sendmailname_val',
win:bmU,
msg:['<span class="black">将使用手机号邮箱发信，这样对方回<br/>信您就会获得短信提醒。<a onclick="window.open(\'http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=8&&no=1000605\')">详情</a></span>'].join(''),
arrow_direction:'down',
arrow_offset:25,
height_offset:4,
tip_offset:-110,
width:305,
auto_hide:1,
notlog:true,
bForceShow:true
});
}
}
);
}
callBack.call(this,Jf.onclickItemCallBack,[an]);
}

var bxp=typeof(Jf.sAlignType)=="undefined"?
"left":bxp;

var bbt=300;
var cF=parseInt(Jf.sWidth)||bbt;
var aNK,bZF;
this.cBq=(cF<0);


if(this.cBq)
{
aNK=getStrDispLen(Jf.sCurSaveFrom)+60;
cF=aNK+(gbIsIE?50:50);
}
else
{
aNK=cF-(gbIsIE?50:50);
}
bZF=aNK-25;

var cJC=Math.floor(cF*23/bbt);
var cJD=Math.floor(cF*20/bbt);

var qk=[];
var abk=[];
var wA=null;
var auH=this.eJ;
var caU=this.bP.cwa;
var ccV=this.bP.bHf;
var ccx=this.bP.cvp;
var cHb=this.bP.cHL;

var cpa=this.Dc=[];

var cTk=this;



















for(var i=0;i<sr.length;i++)
{
(function()
{
var ay=sr[i];
var gS=ay.email;
var kF=gS.split("@").pop();
var bHm=auH.hasOwnProperty(kF);
var afq={
nick:ay.nickname&&"\""+ay.nickname+"\"",
email:gS,
phone:ay.phone,
emaildisp:this.cBq?gS:subAsiiStr(gS,bHm?cJD:cJC,"..."),
signid:ay.signid,
domain:ccx.replace({images_path:getPath("image"),margin_top:(ay.phone==1?416:(bHm?auH[kF]:321))}),
sms:ay.phone==1&&ay.smsleft>0


};

cpa.push(afq);
qk.push(caU.replace(extend({smtp:ay.smtp==2?'':''},afq)));

abk.push(function(e)
{
cTk.cAs(afq);
});

if(!aPl&&!aBI&&getDefaultSender()==gS)
{

wA=afq;
}
else if((aBI&&aBI.toLowerCase()==ay.email)
||(!aBI&&aPl&&aPl==ay.folderid)
||wA==null)
{
wA=afq;
}
})();
}

bp.innerHTML=cHb.replace({
title:cDy,
desContent:cDD,
email_width:bZF,
sel_width:aNK,
width:cF,
images_path:getPath("image"),
email:ccV.replace(wA)
});

var acd=0;
S("sendmailname_val",this.bh).onclick=function()
{
if(!acd)
{
for(var i=0;i<sr.length;i++)
{
var bzX=getStrDispLen(sr[i].email+(sr[i].smtp==2?'':''));
if(acd<bzX)
{
acd=bzX;
}
}
acd=Math.max(this.clientWidth,acd+42);
}
var bam=calcPos(this),
bz=[];
for(var i=0;i<qk.length;i++)
{
bz.push({
sId:i,
sItemValue:qk[i]
});
}
new(getTop().QMMenu)({
oEmbedWin:cTk.bh,
sId:"sendermenu",
nX:bxp=="left"?bam[3]:bam[3]-(acd-this.clientWidth),
nY:bam[2],
nWidth:acd,
nItemHeight:21,
oItems:bz,
onitemclick:function(aJ){
abk[aJ]();
}
});
};

if(S("sendmailname",this.bh))
{
S("sendmailname",this.bh).value=wA.email;
}
show(bRp?bp[bRp]:bp,true);
if(qk.length>1)
{
getTop().requestShowTip("sendmailname_val",17,this.bh);
}
}

jg.bYR=function(an)
{
var bmU=this.bh;
S("sendmailname",bmU).value=an.email;
if(bmU.setSignature)
{
bmU.setSignature("sign",an.signid==-2?getUserSignatureId():an.signid);
}
}


jg.setSenderSelected=function(vD)
{
var bz=this.Dc;
for(var i=bz.length-1;i>=0;i--)
{
if(bz[i].email==vD)
{
this.cAs(bz[i]);
return;
}
}
}

jg.eJ={

"hotmail.com":0,
"live.com":0,
"live.cn":0,
"msn.com":0,
"msn.cn":0,

"yahoo.com.cn":30,
"yahoo.cn":30,
"yahoo.com":30,
"ymail.com":30,
"rocketmail.com":30,

"gmail.com":61,
"vipgmail.com":61,

"sina.com":95,
"sina.com.cn":95,
"vip.sina.com":95,
"my3ia.sina.com":95,
"sina.cn":95,

"163.com":383,
"vip.163.com":383,
"126.com":352,
"vip.126.com":352,
"yeah.net":223,

"foxmail.com":159,

"sohu.com":193,
"vip.sohu.com":193,

"vip.qq.com":288,
"qq.com":288,

"21cn.com":256,
"21cn.net":256
};

jg.bP={
cHL:T([
'<div class="black" style="*width:auto;_width:$width$px;white-space:nowrap;text-align:left;margin-top:1px;">',
'<div title="$title$" style="margin-top:3px;*margin-top:5px;margin-right:5px;float:left;" class="textoftitle">$desContent$</div>',
'<div id="sendmailname_val" class="bd pointer" unselectable="on" onmousedown="return false" ',
'style="width:$sel_width$px;padding:1px 1px 1px 3px;background:#fff;float:right;*float:none;*position:relative;">',
'<div class="attbg" style="width:16px;height:16px;overflow:hidden;text-align:center;float:right;">',
'<img src="$images_path$webqqshow_on.gif" align="absmiddle" style="margin:3px 0 0 0;" />',
'</div>',
'<div style="width:$email_width$px;overflow:hidden;">$email$</div>',
'</div>',
'<div style="clear:both;"></div>',
'</div>',
]),
cwa:T([
'<div class="composeAccountIcon">',
'$domain$',
'</div>',
'<div class="composeAccount" style="">$email$$smtp$</div>'
]),
bHf:T([
'<div class="dispAccountIcon">',
'$domain$',
'</div>',
'$emaildisp$'
]),
cvp:T([
'<img src="$images_path$spacer.gif" style="background-position:0 -$margin_top$px;" valign="absmiddle" >'
])
};



var QMTimeLang={
dnA:new Date(1970,0,5,0,0,0,0)
};

kT=QMTimeLang;







kT.formatRefer=function(qW,cmA)
{
return T('$date$$time$').replace({
date:this.formatDate(qW,cmA),
time:this.formatTime(qW)
});
};







kT.formatDate=function(qW,cmA)
{
var ej=qW;
var dod=cmA||new Date();

var dbO=ej-this.dnA;
var dda=dod-this.dnA;
var cBd=24*3600000;
var ddC=Math.floor(dbO/cBd)
-Math.floor(dda/cBd);

if(Math.abs(ddC)<3)
{

return T('$day$').replace({
day:["前天","昨天","今天","明天","后天"][ddC+2]
});
}

var doG=7*cBd;
var ddE=Math.floor(dbO/doG)
-Math.floor(dda/doG);

if(Math.abs(ddE)<2)
{

return T('$weekpos$周$weekday$').replace({
weekpos:["上","本","下"][ddE+1],
weekday:this.formatWeek(ej)
});
}


return T([ej.getYear()==dod.getYear()?'':'$YY$年',
'$MM$月$DD$日']).replace({
YY:ej.getFullYear(),
MM:ej.getMonth()+1,
DD:ej.getDate()
});
};







kT.formatTime=function(qW)
{
var aoB=qW.getHours();
var Cp=qW.getMinutes();
var aeS;
if(aoB<6)
{
aeS="凌晨";
}else if(aoB<9)
{
aeS="早上";
}else if(aoB<12)
{
aeS="上午";
}else if(aoB<13)
{
aeS="中午";
}else if(aoB<18)
{
aeS="下午";
}else if(aoB<22)
{
aeS="晚上";
}else
{
aeS="深夜";
}
return T('$desc$$hour$:$min$').replace({
desc:aeS,
hour:aoB==12?aoB:aoB%12,
min:this.xD(Cp)
});
};






kT.formatWeek=function(qW)
{
return["日","一","二","三","四","五","六"][qW.getDay()];
};






kT.xD=function(wY)
{
return wY<10?"0"+wY:wY;
};




var QMDragDrop={
groups:{},
setGroup:function(aJ,cjb)
{
var ad=this;
if(!ad.bGt(aJ))
{
ad.groups[aJ]=cjb;
for(var i=0;i<cjb.length;i++)
{
cjb[i].setGroupId(aJ);
}
}
return ad;
},

addGroup:function(aJ,cYo)
{
var ad=this,
gE;
if(!(gE=ad.bGt(aJ)))
{
gE=[];
ad.setGroup(aJ,gE);
}

gE.push(cYo);
cYo.setGroupId(aJ);

return ad;
},

delGroup:function(aJ)
{
var ad=this,
gE;
if(gE=ad.bGt(aJ))
{
if(delete ad.groups[aJ])
{

}
else
{
debug('error delete dragdrop group:'+aJ);
}
}

return ad;
},

getDragFromGroup:function(aJ)
{
var ad=this,
gE,
dib=[];
if(gE=ad.bGt(aJ))
{
if(gE[i]instanceof QMDragDrop.Draggable)
{
dib.push(gE[i]);
}
}
return dib;
},

getDropFromGroup:function(aJ)
{
var ad=this,
gE,
bkz=[];
if(gE=ad.bGt(aJ))
{
for(var i=0;gE&&i<gE.length;i++)
{
if(gE[i]instanceof QMDragDrop.DropTarget)
{
bkz.push(gE[i]);
}
}
}
return bkz;
},

bGt:function(aJ)
{
var ad=this;
for(var groupid in ad.groups)
{
if(groupid==aJ)
{
return ad.groups[groupid];
}
}
}
};

kT=QMDragDrop;


























kT.Draggable=function(ak,by,VM)
{
this.gV=null;
this.bsR=[];
this.sF={};
this.jO={};
this.aWY=0;
this.aWX=0;
this.gv=2;

this.dR(ak,by,VM);
};

kT.Draggable.STATE={
cvg:0,
akl:1,
aTh:2
};

kT.Draggable.prototype={
setGroupId:function(aJ)
{
this.Oo=aJ;
return this;
},

addDropTarget:function(bJb)
{
if(bJb)
{
this.bsR.push(bJb);
}
return this;
},

moveTo:function(zH,xs,bu,aG)
{
var ad=this,
ar=ad.gV,
aFt=ar.offsetLeft,
aFO=ar.offsetTop;
qmAnimation.play(ar,{
from:0,
to:1,
speed:Math.max(Math.abs(zH-aFt),Math.abs(xs-aFO))*0.5||10,
onaction:function(cd){
cd=cd||0;
this.style.left=aFt+(zH-aFt)*cd;
this.style.top=aFO+(xs-aFO)*cd;
},
oncomplete:function(){
this.style.left=zH;
this.style.top=xs;

if(bu)
{
bu.call(ad,aG);
}
}
});
},


exchangePos:function(aDN)
{
if(aDN&&this.WY)
{
aDN.parentNode.insertBefore(this.gV,aDN);
this.WY.parentNode.insertBefore(aDN,this.WY);
this.gV.parentNode.insertBefore(this.WY,this.gV);
}
},

getElement:function()
{
return this.gV;
},

getPlaceHolder:function()
{
return this.WY;
},

lock:function(cWy)
{
this.sF.lockx=!!cWy;
this.sF.locky=!!cWy;
},

dR:function(ak,by,VM)
{
if(ak)
{
this.gV=ak;
this.wM=ak.ownerDocument;
this.kW=this.wM.parentWindow||this.wM.defaultView;
this.dyR=getStyle(ak,'position');
this.aBk(by).cAc(VM);
}
},

aBk:function(by)
{
var ad=this,
aZ=ad.sF;

aZ.handle=by.handle||ad.gV;
aZ.maxContainer=by.maxcontainer;
aZ.lockx=!!by.lockx;
aZ.locky=!!by.locky;
aZ.transparent=!!by.transparent;
aZ.placeholder=!!by.placeholder;
aZ.threshold=by.threshold||5;
aZ.holderhtml=by.holderhtml;


aZ.oTitle=by.oTitle;

if(aZ.transparent)
{
var cM=calcPos(ad.gV);
var cMw='<div style="display:none;background:#FFF;position:absolute;opacity:0.5;filter:alpha(opacity=50);width:100%;height:100%;z-index:999;cursor:move;"></div>';
insertHTML(ad.gV,'afterBegin',cMw);
ad.amf=ad.gV.firstChild;
ad.amf.style.height=cM[5]+'px';
}

return ad;
},

cAc:function(VM)
{
var ad=this;

ad.jO={
ondragstart:function(){},
ondrag:function(){},
ondragend:function(){}
};
extend(ad.jO,VM);

function aiM(ag)
{

var En=getEventTarget(ag).tagName;
if(!gbIsIE&&En&&En.toLowerCase()=='input')
{
return;
}


if(ad.sF.lockx&&ad.sF.locky)
{
return;
}

ad.aWY=ag.clientX-ad.gV.offsetLeft+(parseInt(getStyle(ad.gV,'marginLeft'))||0)+bodyScroll(ad.kW,'scrollLeft');
ad.aWX=ag.clientY-ad.gV.offsetTop+(parseInt(getStyle(ad.gV,'marginTop'))||0)+bodyScroll(ad.kW,'scrollTop');


if(ad.sF.oTitle)
{
var abY=gbIsIE?calcPos(ad.kW.frameElement):[0,0,0,0];
ad.aXm=abY[3]+ag.clientX;
ad.aXl=abY[0]+ag.clientY;
}
else
{
ad.aXm=ag.clientX;
ad.aXl=ag.clientY;
}

ad.gv=QMDragDrop.Draggable.STATE.aTh;

ad.aEe(ag);
}

addEvent(ad.sF.handle,'mousedown',aiM);
return ad;
},

aEe:function(ag)
{
var ad=this,
aZ=ad.sF,
aGU=QMDragDrop.DataTransfer;

if(!ad.aKG||!ad.Yr)
{
ad.aKG=function(ag)
{

if(gbIsIE&&aZ.oTitle)
{
}
else
{
ad.kW.getSelection?ad.kW.getSelection().removeAllRanges():ad.wM.selection.empty();
}


if(ad.gv==QMDragDrop.Draggable.STATE.aTh&&aZ.threshold)
{

var bCL=Math.abs(ad.aXm-ag.clientX),
bCM=Math.abs(ad.aXl-ag.clientY);
if(bCL>aZ.threshold||bCM>aZ.threshold)
{
callBack.call(ad,ad.jO['ondragstart'],[ag]);

ad.gv=QMDragDrop.Draggable.STATE.cvg;
ad.bJD();

if(!aZ.oTitle)
{

ad.gV.style.left=ad.aXm-ad.aWY+bodyScroll(ad.kW,'scrollLeft');
ad.gV.style.top=ad.aXl-ad.aWX+bodyScroll(ad.kW,'scrollTop');
}
}
return;
}

var aTJ=ag.clientX-ad.aWY+bodyScroll(ad.kW,'scrollLeft'),
aTH=ag.clientY-ad.aWX+bodyScroll(ad.kW,'scrollTop');

if(aZ.oTitle)
{
}
else
{

if(!aZ.lockx)
{
ad.gV.style.left=aTJ+'px';
}

if(!aZ.locky)
{
ad.gV.style.top=aTH+'px';
}
}

if(aZ.maxContainer)
{
var Hc=calcPos(aZ.maxContainer),
amu=calcPos(ad.gV);

if(amu[1]>Hc[1])
{
ad.gV.style.left=aTJ+Hc[1]-amu[1]+'px';
}
else if(amu[3]<Hc[3])
{
ad.gV.style.left=aTJ+Hc[3]-amu[3]+'px';
}

if(amu[2]>Hc[2])
{
ad.gV.style.top=aTH+Hc[2]-amu[2]+'px';
}
else if(amu[0]<Hc[0])
{
ad.gV.style.top=aTH+Hc[0]-amu[0]+'px';
}
}

ad.gv=QMDragDrop.Draggable.STATE.akl;
callBack.call(ad,ad.jO['ondrag'],[ag]);


var bck=new aGU(aGU.TYPE.DOWN,ad,ag.clientX,ag.clientY,ag);
ad.aek(bck);

preventDefault(ag);
};

ad.Yr=function(ag)
{

if(ad.gv==QMDragDrop.Draggable.STATE.aTh)
{
ad.Pr();
return;
}


ad.Pr();

var bck=new aGU(aGU.TYPE.UP,ad,ag.clientX,ag.clientY,ag);
ad.aek(bck);

ad.gv=QMDragDrop.Draggable.STATE.aTh;

callBack.call(ad,ad.jO['ondragend'],[ag]);

ad.bJD();
};
}

if(gbIsIE&&ad.gV.setCapture)
{
var Xu=aZ.oTitle||ad.gV;
Xu.setCapture(true);
addEvents(Xu,{
mousemove:ad.aKG,
mouseup:ad.Yr,
losecapture:ad.Yr
});



}
else
{
addEvents(ad.wM,{
mousemove:ad.aKG,
mouseup:ad.Yr
});



ad.kW.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
addEvent(ad.kW,'blur',ad.Yr);
}

return ad;
},

Pr:function()
{
var ad=this;

var aZ=ad.sF,
Xu=aZ.oTitle||ad.gV;

if(gbIsIE&&Xu.releaseCapture)
{
addEvents(Xu,{
mousemove:ad.aKG,
mouseup:ad.Yr,
losecapture:ad.Yr
},true);

Xu.releaseCapture();





}
else
{
addEvents(ad.wM,{
mousemove:ad.aKG,
mouseup:ad.Yr
},true);


ad.kW.releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP);
removeEvent(ad.kW,'blur',ad.Yr);
}

return ad;
},

bBK:function(aVd)
{

var ad=this;
if(aVd)
{
var jc=ad.gV.cloneNode(true),
cM=calcPos(ad.gV);

jc.style.position='static';
jc.style.width=cM[4]+'px';
jc.style.height=cM[5]+'px';
if(ad.sF.holderhtml)
{
jc.innerHTML=ad.sF.holderhtml;

}
jc.removeAttribute('id');
jc.removeAttribute('name');
ad.gV.parentNode.insertBefore(jc,ad.gV);
ad.WY=jc;
}
else
{
if(ad.WY)
{
ad.gV.parentNode.removeChild(ad.WY);
ad.WY=null;
}
ad.gV.style.position=ad.dyR;
}
},

bJD:function()
{
var ad=this,
aZ=ad.sF,
aie=ad.gv==QMDragDrop.Draggable.STATE.aTh;

if(aZ.oTitle)
{
return;
}

ad.gV.style.position=aie?'absolute':'absolute';

if(aZ.transparent)
{
show(ad.amf,!aie);
}
if(aZ.placeholder)
{
var aJr=ad.WY,
IP=aJr&&aJr.offsetLeft,
vC=aJr&&aJr.offsetTop;

!aie&&ad.bBK(true);
aie&&ad.moveTo(IP,vC,ad.bBK,false);
}

return ad;
},

aek:function(pS)
{
var ad=this,
bkz=QMDragDrop.getDropFromGroup(ad.Oo);

for(var i=0;i<bkz.length;i++)
{
if(ad!=bkz[i])
{
bkz[i].listen(pS);
}
}
return ad;
}
};














kT.DropTarget=function(cmV,VM,bYQ)
{
this.gV=null;
this.jO={};
this.bkA=null;
this.gv=-1;

this.dR(cmV,VM,bYQ);
};

kT.DropTarget.STATE={
aXw:0,
aWP:1,
bHp:2,
Yy:3
};

kT.DropTarget.prototype={
setGroupId:function(aJ)
{
this.Oo=aJ;
return this;
},

getDragTarget:function()
{
return this.bkA;
},

listen:function(pS)
{
var ad=this,
PA=QMDragDrop.DropTarget.STATE;

ad.bkA=pS.target;









var tB=ad.bkA.getElement(),
IP=tB.offsetLeft+tB.offsetWidth/2,
vC=tB.offsetTop+tB.offsetHeight/2;


if(ad.isOver(IP,vC,pS))
{
if(pS.type==QMDragDrop.DataTransfer.TYPE.DOWN)
{
ad.gv=(ad.gv==PA.aXw||ad.gv==PA.aWP)
?PA.aWP:PA.aXw;
}
else
{
ad.gv=PA.Yy;
}
}
else
{
ad.gv=PA.bHp;
}

switch(ad.gv)
{
case PA.aXw:
callBack.call(ad,ad.jO['ondragenter'],[pS]);

break;
case PA.aWP:
callBack.call(ad,ad.jO['ondragover'],[pS]);

break;
case PA.Yy:
callBack.call(ad,ad.jO['ondrop'],[pS]);

break;
case PA.bHp:
callBack.call(ad,ad.jO['ondragleave'],[pS]);

break;
default:
break;
}
},


isOver:function(zH,xs)
{
var fW=this.gV;

var aij=fW.offsetLeft;
var	asn=aij+fW.offsetWidth;
var	ais=fW.offsetTop;
var asw=ais+fW.offsetHeight;
return(zH>aij&&zH<asn&&xs>ais&&xs<asw);
},

dR:function(ak,VM,bYQ)
{
if(ak)
{
this.gV=ak;

this.jO={
ondragenter:function(){},
ondragover:function(){},
ondragleave:function(){},
ondrop:function(){}
};
extend(this.jO,VM);

if(bYQ)
{
this.isOver=bYQ;
}
}
}
};

kT.DataTransfer=function(dN,cmC,zH,xs,ag)
{
this.type=dN;
this.target=cmC;
this.x=zH;
this.y=xs;
this.event=ag;
};

kT.DataTransfer.TYPE={
DOWN:1,
UP:2
};




























































var QMPanel=inheritEx("QMPanel",Object,
function(as)
{
return{
$_constructor_:function(ah)
{
if(ah)
{
var Uc=this.constructor,
dkd=Uc.get(ah.sId);

dkd&&dkd.destroy();
this.cFe(ah);
Uc.$_add&&Uc.$_add(ah.sId,this);
this.dR(ah);
}
},

KY:function(ah,ada,awz)
{
for(var i in ada)
{
if(awz||typeof(ah[i])=="undefined"||ah[i]==null)
{
ah[i]=ada[i];
}
}
return ah;
},

dmi:function()
{
var ad=this,
aN=ad.dk,
oE=ad.AW,
ajl=aN.oEmbedWin||getTop(),
bRP=ajl.document.body;

if(!aN.nX)
{
var IP=(bRP.clientWidth-oE.offsetWidth)/2+bodyScroll(ajl,"scrollLeft");
aN.nX=IP;
oE.style.left=IP+"px";
}
if(!aN.nY)
{
var vC=Math.max(2,(bRP.clientHeight-oE.offsetHeight)/2
+bodyScroll(ajl,"scrollTop")-25);
aN.nY=vC;
oE.style.top=vC+"px";
}
},

avF:function(ah)
{

var ajl=ah.oEmbedWin||getTop(),
bRP=ajl.document.body;

this.KY(ah,
{
oEmbedWin:ajl,
oEmbedToDom:bRP,
sEmbedPos:"afterBegin",
oCallerWin:window,
nZIndex:1100,
nWidth:100,
nHeight:163,
bDisplay:true,
sBodyHtml:""
}
);



},

cFe:function(ah)
{
return this.ZJ=[
ah.sId||(ah.sId=["__QmDefPanelId","__"].join(unikey())),
this.constructor.name
].join("_");
},

aVy:function(dj)
{
var beG=this.ZJ;
return dj.toString().replace(/ (id|for)=[\"\']?(\w+)[\"\']?/gi,[' $1="',beG,'_$2"'].join(""));
},

azR:function(ah)
{
ah.sPanelId=this.ZJ;
ah.sBodyHtml=this.aVy(ah.sBodyHtml);
insertHTML(ah.oEmbedToDom,ah.sEmbedPos,QMPanel.bP.aay.replace(ah));
},

CK:function(ah)
{
this.dk=ah;
this.mJ="";
this.AW=S(this.ZJ,ah.oEmbedWin);
},

aVV:function(ah)
{
var ad=this;
ad.mJ="hide";
callBack.call(this,ah.onload);
ad.jW();
ah.bDisplay&&this.show();
},

jW:function()
{
},


aJd:function(amJ,bu)
{
var ad=this;
show(ad.AW,amJ);
if(amJ)
{
ad.dmi();
}
callBack.call(ad,bu);
},


cpv:function()
{
var ad=this;
removeSelf(ad.AW);
ad.AW=null;
},

cpx:function()
{
var ad=this,
bd=ad.dk.sId,
Uc=ad.constructor;

if(Uc.get(bd))
{
Uc.$_del(bd);
ad.cpv();
}
},

dR:function(ah)
{
this.avF(ah);
this.azR(ah);
this.CK(ah);
this.aVV(ah);
},


destroy:function()
{
var ad=this;
ad.aJd(false);
ad.cpx();
},



option:function(aih,akF)
{
var ad=this,
dUz=
{
nX:"left",
nY:"top",
nWidth:"width",
nHeight:"height",
nZIndex:"zIndex"
},
cOd=
{
nWidth:"scrollWidth",
nHeight:"scrollHeight"
},
Kd;

if(typeof akF!="undefined")
{
ad.dk[aih]=akF;
if(Kd=dUz[aih])
{
ad.AW.style[Kd]=typeof akF=="number"&&Kd!="zIndex"
?akF+"px":akF;
}
}

if(aih=="status")
{
return ad.mJ;
}

if(!akF&&ad.dk[aih]=="auto"&&cOd[aih])
{

var iA=ad.AW,
cUd,hi;
if(!isShow(iA))
{
cUd=getStyle(iA,"left");
iA.style.left="-9999px";
hi=show(iA,true)[cOd[aih]];
show(iA,false).style.left=cUd;
}
else
{
hi=iA[cOd[aih]];
}
return hi;
}

return akF?ad:ad.dk[aih];
},


S:function(bbA)
{
var ajl=this.dk.oEmbedWin||getTop();
return S([this.ZJ,bbA].join("_"),ajl);
},


isContain:function(aF)
{
return isObjContainTarget(this.AW,aF);
},


getPanelDom:function()
{
return this.AW;
},


show:function()
{
var ad=this;
if(ad.mJ!="showing"&&ad.mJ!="show")
{
ad.mJ="showing";

ad.aJd(true,function()
{
ad.mJ="show";
setTimeout(function()
{
try
{
callBack.call(ad,ad.dk.onshow);
}
catch(aX)
{
debug("onshow error : "+aX.message);
}
}
);
}
);
}
return ad;
},


hide:function(bu)
{
var ad=this;
if(ad.mJ!="hiding"||ad.mJ!="hide")
{
ad.mJ="hiding";
ad.aJd(false,function()
{
ad.mJ="hide";
setTimeout(function()
{
callBack.call(ad,ad.dk.onhide);
}
);
callBack.call(ad,bu);
}
);
}
else
{
callBack.call(ad,bu);
}
return ad;
},





dEn:function()
{
try
{
var oE=this.AW;




if(oE.parentNode==null)
{
return false;
}

if(gbIsIE)
{
return!!oE.ownerDocument;
}
else
{
var at=oE.ownerDocument.defaultView,
Kn=at.frameElement;
if(Kn)
{
return Kn.contentDocument==oE.ownerDocument;
}
else
{

return at==getTop();
}
}
}
catch(e)
{
return false;
}
},


close:function()
{
if(this.mJ!="close")
{
var ad=this;
if(ad.dEn())
{
this.hide(function()
{
ad.mJ="close";
ad.cpx();
callBack.call(ad,ad.dk.onclose);
}
);
}
else
{

ad.mJ="close";
ad.cpx();
}

}
return this;
},

setBody:function(dj)
{
this.AW.innerHTML=this.aVy(dj);
callBack.call(this,this.dk.onload);
return this;
},


isShow:function()
{
return this.mJ=="show"||this.mJ=="showing";
},


isClose:function()
{
return this.mJ=="close";
}
};
},
{
bP:
{
aay:TE([
'<div id="$sPanelId$" class="$sClassName$" $sAttr$ ',
'style="$sStyle$;display:none;z-index:$nZIndex$;position:absolute;left:$nX$px;top:$nY$px;',
'$@$if($nHeight$&&!isNaN($nHeight$))$@$ height:$nHeight$px; $@$endif$@$',
'$@$if($nWidth$&&!isNaN($nwidth$))$@$ width:$nWidth$px; $@$endif$@$"',
'>',
'$sBodyHtml$',
'</div>'])
}
}
);

















































var QMDialog=inheritEx("QMDialog",QMPanel,
function(as)
{
return{
CK:function(ah)
{
callBack.call(this,as.CK,[ah]);
this.amf=null;
this.cIP=null;
this.aYb=null;

var Uc=this.constructor;
this.dBk=ah.bModal?Uc.bCp:Uc.crz;

},


dic:function(bSu)
{
var ad=this,
ci=ad,
Uc=ad.constructor,
crB,
bXl=ad.dBk,
bzl=function(cZh,dMu,dMi)
{
for(var i=cZh.length-1;i>=0;i--)
{
ci=cZh[i];
ci.option("nZIndex",crB?dMi:dMu);
ci.dkc(crB);
crB=true;
}
};

if(bSu>0)
{
for(var i in bXl)
{
if(bXl[i]==ad)
{
ci=bXl.splice(i,1)[0];
break;
}
}
if(bSu==2)
{
bSu=0;
}
}
if(bSu==0)
{
bXl.push(ci);
}
bzl(Uc.bCp,1120,1106);
bzl(Uc.crz,1110,1105);
},

jW:function()
{
var aN=this.dk,
ad=this;

if(aN.bModal)
{
addEvent(this.amf,"mousedown",function()
{
var aBh=ad.constructor.bCp,
dbK=aBh[aBh.length-1];
dbK&&dbK.spark();
}
);
}
else
{
addEvent(this.AW,"mousedown",function()
{
if(!aN.bModal)
{
ad.dic(2);
}
}
);
}

var ajl=aN.oEmbedWin,
oE=this.AW;

if(aN.bMin)
{
this.S("_minbtn_").onclick=function()
{
ad.min();
}
}
if(aN.bClose)
{
this.S("_closebtn2_").onclick=function()
{
ad.close();
}
}

oE.tabindex="-1";
addEvent(oE,"keydown",function(ag){
if(ag&&ag.keyCode==27)
{
ad.close();
preventDefault(ag);
}
});

new(QMDragDrop.Draggable)(ad.AW,
{
handle:ad.S("_title_td_"),
maxcontainer:aN.oEmbedWin.document.body
},
{
ondragstart:function(){
callBack.call(ad,aN.ondragstart);
},
ondrag:function(){
callBack.call(ad,aN.ondrag);
},
ondragend:function()
{
ad.dk.nX=parseInt(ad.AW.style.left);
ad.dk.nY=parseInt(ad.AW.style.top);
}
}
).lock(!aN.bDraggable);
},

avF:function(ah)
{

this.KY(ah,{bModal:true});

var aRM=
{
bDraggable:true,
bClose:true,
bAnimation:true,
sEmbedPos:"beforeEnd",
nWidth:408,
nHeight:395,
sTitle:""
};

var Uc=this.constructor,
hO=ah.bModal?Uc.bCp:Uc.crz,
chm=hO[hO.length-1];

if(chm)
{
extend(aRM,
{
nX:chm.option("nX")+20,
nY:chm.option("nY")+20
}
);
}
this.KY(ah,aRM);

var bp=S("qmdialog_container",getTop());
if(!bp)
{
var aL=getTop().document;

insertHTML(aL.body,
aL.readyState=="complete"?"beforeEnd":"afterBegin",
'<span id="qmdialog_container"></span>');

bp=S("qmdialog_container",getTop());
}

this.KY(ah,
{
oEmbedWin:getTop(),
oEmbedToDom:bp,
nZIndex:ah.bModal?1110:1105
},
true
);

return callBack.call(this,as.avF,[ah]);
},

azR:function(ah)
{
var beG=this.ZJ;

ah.sBodyHtml=QMDialog.bP.aay.replace(
extend({},
ah,
{
tWidth:ah.nWidth-3,
imgpath:getPath("image"),
iwidth:ah.nWidth-5,
cHeight:ah.nHeight-32,
iheight:ah.nHeight-33
}
));
callBack.call(this,as.azR,[ah]);
},

aVV:function(ah)
{
var ad=this;
if(ah.bModal)
{
ad.amf=ad.dYv(ah.oEmbedWin);
}
if(ah.bMin)
{
insertHTML(ad.AW,"afterEnd",
ad.aVy(ad.constructor.bP.dEH.replace(ah))
);
this.cIP=this.S("_min_animation_");
}
callBack.call(this,as.aVV,[ah]);
},


dYv:function(al)
{
al=al||getTop();
var bd="qqmail_mask",
bCR=S(bd,al);

if(!bCR)
{
insertHTML(
al.document.body,

"beforeEnd",
T([
'<div id="$id$" class="$class$" style="z-index:1115;display:none;"',
' onkeypress="return false;" onkeydown="return false;"',
' tabindex="0"></div>'
]).replace(
{

'class':'editor_mask opa50Mask ',
id:bd
}
)
);
bCR=S(bd,al);
}
return bCR;
},





aJd:function(amJ,bu,bQD)
{

this.dic(amJ?0:1);

var	ad=this,
aN=ad.dk,
bQD=bQD||(aN.bAnimation?"ani1":"ani0"),
lm=getTop().qmAnimation,
dLb=this.constructor.bCp.length,
oE=ad.AW,
CW=ad.S("_content_");

if(this.dk.bModal&&dLb==(amJ?1:0))
{


callBack(getTop().iPadPrevent);
show(this.amf,amJ);
}

hideWindowsElement(!amJ);

if(bQD=="ani0")
{
callBack.call(this,as.aJd,[amJ,bu]);
}
else if(bQD=="ani2")
{
var bvC=ad.cIP,
dfd=ad.aYb,
Fy=calcPos(show(dfd,true)),
doa=aN.nWidth-Fy[4],
dkS=aN.nHeight-Fy[5],
dnn=aN.nX-Fy[3],
dos=aN.nY-Fy[0],
dcY=function(dQI)
{
E(["left","top","width","height"],function(dUV,oS)
{
bvC.style[dUV]=dQI[oS]+"px";
}
);
};

if(amJ)
{
lm.play(oE,
{
win:window,
speed:300,
onready:function()
{
show(bvC,true);
show(dfd,false);
},
onaction:function(cd,jK)
{
dcY(
[
Fy[3]+(dnn*jK),
Fy[0]+(dos*jK),
Fy[4]+(doa*jK),
Fy[5]+(dkS*jK)
]
);
},
oncomplete:function()
{
show(bvC,false);
show(oE,true);
callBack.call(ad,bu);
}
}
);
}
else
{
lm.play(oE,
{
win:window,
speed:300,
onready:function()
{
show(oE,false);
show(bvC,true);
},
onaction:function(cd,jK)
{
dcY(
[
aN.nX-(dnn*jK),
aN.nY-(dos*jK),
aN.nWidth-(doa*jK),
aN.nHeight-(dkS*jK)
]
);
},
oncomplete:function()
{
show(bvC,false);
callBack.call(ad,bu);
}
}
);
}
return;
}
else if(bQD=="ani1")
{
if(amJ)
{
lm.play(oE,
{
win:window,
speed:300,
easing:"easeOut",
tween:"Sina",
from:-30,
to:0,
onready:function()
{
show(setOpacity(oE,0),true);
ad.dmi();
CW.style.visibility="hidden";
},
onaction:function(cd,jK)
{
setOpacity(oE,jK).style.marginTop=cd+"px";
},
oncomplete:function()
{
setOpacity(oE,1).style.marginTop=0;
CW.style.visibility="visible";
callBack.call(ad,bu);
}
}
);
}
else
{
lm.play(oE,
{
win:window,
speed:300,
easing:"easeIn",
tween:"Sina",
from:0,
to:-30,
onaction:function(cd,jK)
{
setOpacity(oE,1-jK).style.marginTop=cd+"px";
},
oncomplete:function(cd)
{
show(oE,false);
callBack.call(ad,bu);
}
}
);
}
}
},


cpv:function()
{
var ad=this;
if(ad.dk.sUrl)
{

try
{
ad.S("_dlgiframe_").contentWindow.location.replace("javascript:'';");
}
catch(aX)
{
}
}
if(ad.dk.bAnimation)
{
qmAnimation.stop(ad.AW);
}
ad.aYb&&removeSelf(ad.aYb);
removeSelf(ad.AW);
removeSelf(ad.cIP);
ad.AW=null;
},

dkc:function(cVH)
{
var ad=this;
setClass(ad.S("_title_td_"),"editor_dialog_titlebar "+(cVH?"toolbg":"fdbody"));
setClass(ad.S("_title_div_"),cVH?"":"fdbody");
},






S:function(bbA)
{
var ad=this,
aN=ad.dk,
ar=callBack.call(ad,as.S,[bbA]);
if(aN.sUrl&&!ar)
{
ar=S(bbA,as.S("_dlgiframe_").contentWindow);
}
return ar;
},


close:function(ecw)
{
var bMc=this.dk.onbeforeclose;
if(bMc&&!bMc.call(this))
{
return;
}
if(ecw)
{
this.dk.bAnimation=false;
}
callBack.call(this,as.close);
callBack(getTop().iPadRemoveEvent);
return this;
},

min:function()
{
if(this.mJ!="show")
{
return;
}

var ad=this,
dLD=S("minimize_container",getTopWin()),
aN=ad.dk,
cTz=ad.ZJ+"_min",
bmR=ad.aYb,
dgP=ad.dk.onbeforemin;

if(dgP&&!dgP.call(ad))
{
return;
}

if(!bmR)
{
insertHTML(dLD,"beforeEnd",ad.constructor.bP.dEJ.replace(
{
dialogId:aN.sId,
id:cTz,
title:aN.sTitle
}
));
this.aYb=bmR=S(cTz,getTopWin());
}

ad.aJd(false,
function()
{
ad.mJ="min";
show(bmR,true);
callBack.call(ad,ad.dk.onmin);
},
"ani2"
);
return ad;
},

max:function()
{
if(this.mJ!="min")
{
return;
}
var ad=this,
bmR=ad.aYb,
Fy=calcPos(bmR),
aN=ad.dk;

ad.aJd(true,function(){
ad.mJ="show";
show(bmR,false);
callBack.call(ad,ad.dk.onmax);
},"ani2");
return this;
},

spark:function()
{
var ad=this,
ei=4,
cKv=function()
{
if(--ei>0)
{
setTimeout(arguments.callee,80);
}
var bTu=ei%2;
ad.dkc(bTu);
};
cKv();
return ad;
},

getMinDom:function()
{
return this.aYb;
},

getDialogWin:function()
{
var aN=this.dk;
return aN.sUrl?this.S("_dlgiframe_").contentWindow:aN.oEmbedWin;
},

setHeader:function(dj)
{
this.S("_title_").innerHTML=this.aVy(dj);
return this;
},

setBody:function(dj)
{
this.S("_content_").innerHTML=this.aVy(dj);
callBack.call(this,this.dk.onload);
return this;
}

};
},
{
bP:
{
aay:TE([
'<div class="tipbg" >',
'<div id="_opashow_" class="opashowOuter qmpanel_shadow" ',
'$@$if($sUrl$)$@$',
'$@$else$@$',
'$@$endif$@$',
'style="background:#DDD;"',
'>',
'<table class="bd_upload" cellspacing="0" cellpadding="0" style="$@$if($tWidth$&&!isNaN($tWidth$))$@$width:$tWidth$px;$@$endif$@$ $@$if($nHeight$&&!isNaN($nHeight$))$@$height:$nHeight$px;$@$endif$@$ background:white;" >',
'<tr><td id="_title_td_" class="fdbody" style="height:28px;border:none;background-image:none;cursor:$@$if($bDraggable$)$@$move$@$endif$@$;overflow:hidden;">',
'<div class="fdbody" style="cursor:default;float:right;width:40px;border:none;background-image:none;" id="_title_div_">',
'$@$if($bClose$)$@$',
'<div id="_closebtn2_" class="editor_close" onmouseover="this.className=\'editor_close_mover\';" onmouseout="this.className=\'editor_close\';">',
'<img src="$imgpath$ico_closetip.gif" width="12" height="12" ondragstart="return false;">',
'</div>',
'$@$endif$@$',
'$@$if($bMin$)$@$',
'<div onmouseout="this.className=\'editor_min\';" onmouseover="this.className=\'editor_min_mover\';" class="editor_min" id="_minbtn_">',
'<img width="12" height="12" ondragstart="return false;" title="最小化" src="$imgpath$ico_minimizetip.gif">',
'</div>',
'$@$endif$@$',
'</div>',
'<div class="editor_dialog_title" id="_title_">$sTitle$</div>',
'</td></tr>',
'<tr><td id="_content_" class="editor_dialog_content $@$if($sUrl$)$@$ toolbg $@$endif$@$" style="$@$if($cHeight$&&!isNaN($cHeight$))$@$height:$cHeight$px;$@$endif$@$border:none;" valign="top">',
'$@$if($sUrl$)$@$',
'<iframe id="_dlgiframe_" frameborder="0" scrolling="no" src="$sUrl$" style="$@$if($iwidth$&&!isNaN($iwidth$))$@$width:$iwidth$px;$@$endif$@$ $@$if($iheight$)$@$height:$iheight$px;$@$endif$@$"></iframe>',
'$@$else$@$',
'<div style="border:none;height:100%;display:inline;" class="mailinfo">',
'$sBodyHtml$',
'</div>',
'$@$endif$@$',
'</td></tr>',
'</table>',
'</div>',
'</div>']),

dEJ:T('<span id="$id$" style="display:none;"><a onclick="getTop().QMDialog(\'$dialogId$\',\'max\');" nocheck="true">$title$</a>&nbsp;|&nbsp;</span>'),

dEH:T('<div id="_min_animation_" style="display:none;position:absolute;z-index:$nZIndex$;border-width:2px;left:$nX$;top:$nY$;width:$nWidth$px;height:$nHeight$px;" class="bd_upload"></div>')
},

crz:[],
bCp:[]
}
);














































var QMMenu=inheritEx("QMMenu",QMPanel,
function(as)
{
return{
CK:function(ah)
{
var ad=this;
callBack.call(ad,as.CK,[ah]);
ad.aGz;
ad.efJ;

ad.atZ=null;
ad.aRd=null;
ad.aGI=null;
ad.aGY=null;


ad.baZ=null;

},

jW:function()
{
var ad=this,
aN=ad.dk,
eic=null,
Xi=ad.S("_menuall_"),
dkj=ad.S("_foot_"),
iA=ad.getPanelDom();






function asP(am,ecr)
{




while(am)
{
var bd=am.id||"";
if(bd.indexOf("_menuitem_")>-1)
{
return!ecr&&am.className.indexOf("menu_item_nofun")>-1?0:am;
}
else if(/_QMMenu$/.test(bd))
{

return 0;
}
am=am.parentNode;
}
return null;
}

function bJm(ag)
{
var ax=getEventTarget(ag),
mL=typeof(ag.wheelDelta)=="undefined"?
ag.detail/3:-ag.wheelDelta/120,
wB=Xi.scrollTop+mL*20;
Xi.scrollTop=Math.min(Math.max(wB,0),Xi.scrollHeight-Xi.offsetHeight);

while(ax)
{
if(ax.getAttribute&&ax.getAttribute('scroll')=='true')
{
return;
}
ax=ax.parentNode;
}

preventDefault(ag);
stopPropagation(ag);
}

function doE(aJ)
{
var bz=aN.oItems;
for(var i in bz)
{
if(bz[i].sId==aJ)
{
return bz[i];
}
}
}


addEvents(iA,
{
contextmenu:preventDefault,
mousewheel:bJm,
DOMMouseScroll:bJm,

mouseout:function(ag)
{
var bWB=ad.aGz,
aXI=asP(ag.relatedTarget||ag.toElement,1);

if(aXI==null&&aN.bAutoClose)
{
ad.dPr();
}
if(aXI===0||aXI==bWB)
{

return;
}
if(bWB)
{


var	bd=bWB.getAttribute("itemid"),
dug=['sub',bd,'_QMMenu'].join(''),
bRA=aXI;

while(bRA)
{
if(bRA.id==dug)
{
return;
}
bRA=bRA.parentNode;
}
if(ad.atZ&&aXI==null&&bWB==ad.atZ.blz)
{

return;
}
ad.bGE().djw();
ad.aGY=setTimeout(function(){

ad.cpk();
},100);
setClass(ad.aGz,"menu_item");
return ad.aGz=null;
}
},
mouseover:function(ag)
{
if(aN.bAutoClose)
{
ad.dPl();
}
var ax=asP(getEventTarget(ag));
if(ax)
{

ad.sC(ax);


var bd=ax.getAttribute("itemid"),
aV=doE(bd);
if(aV.oSubMenu)
{
ad.bYd(aV,ax);
}
if(ad.aRd)
{

ad.aRd.bGE().djw();
ad.aRd.selectItem(ad.blz);
}
}
},
click:function(ag)
{
var ax=asP(getEventTarget(ag));
if(ax)
{
var bd=ax.getAttribute("itemid"),
aV=doE(bd);
if(aV.oSubMenu)
{

return;
}
ad.bGE();
callBack.call(ad,aN.onitemclick,[bd,aV]);
setClass(ax,"menu_item");
ad.close();
ad.cpl();
}
}
}
);

addEvent(ad.AW,"mousedown",stopPropagation);
},

avF:function(ah)
{
this.KY(ah,
{
bAutoClose:true,
nZIndex:1121,
nWidth:"auto",
nMinWidth:100,
nMaxWidth:9999,
bAnimation:true,
nMaxItemView:1000000,
sClassName:"qmpanel_shadow"
}
);


this.KY(ah,
{
nHeight:"auto",
sStyle:"background:#fff"
},true);

return callBack.call(this,as.avF,[ah]);
},

azR:function(ah)
{
var ad=this,
bz=ah.oItems,
bkO=ah.oFootItems,
dfp=bz.length>ah.nMaxItemView,
dEr=dfp?ah.nMaxItemView:bz.length,
beG=ad.ZJ,
Ol=0;

for(var i=0;i<bz.length;i++)
{
var dEx=bz[i].nHeight=bz[i].nHeight||ah.nItemHeight||22;
if(i<dEr)
{
Ol+=dEx;
}
if(bz[i].sId===0)
{
bz[i].sId="0";
}
ad.KY(bz[i],{
bDisSelect:!(bz[i].sId)
});
}

if(bkO)
{
for(var i=0,be=bkO.length;i<be;i++)
{
if(bkO[i].sId===0)
{
bkO[i].sId="0";
}
ad.KY(bkO[i],{
nHeight:ah.nItemHeight||22,
bDisSelect:!(bkO[i].sId)
});
}
}

ah.sBodyHtml=QMMenu.bP.aay.replace({
mwidth:ah.nWidth-3,
mheight:dfp?Ol:"auto",
nMinWidth:ah.nMinWidth,
oItems:ah.oItems,
oFootItems:ah.oFootItems
});

callBack.call(this,as.azR,[ah]);
},

bZU:function()
{
var ad=this;
if(ad.dk.nWidth=="auto")
{
var iG=ad.S("_menuall_"),
dkj=ad.S("_foot_");
if(iG&&iG.offsetWidth>10)
{



dkj.style.width=iG.style.width=(Math.max(ad.dk.nMinWidth,Math.min(iG.scrollWidth,ad.dk.nMaxWidth))+15+(gbIsIE?0:iG.offsetWidth-iG.scrollWidth))+"px";

setClass(iG,"txtflow");

}
}
},

aJd:function(amJ,bu)
{
var	ad=this,
oE=ad.AW;

if(!this.dk.bAnimation)
{
callBack.call(this,as.aJd,[amJ,bu]);
return ad.bZU();
}

if(amJ)
{
var NA=true;
qmAnimation.expand(oE,
{
win:window,
from:0,
speed:200,
easing:"easeOut",
tween:"Cubic",
oncomplete:function()
{
callBack.call(ad,bu);
},
onaction:function()
{
if(NA)
{
ad.bZU();
NA=0;
}
}
}
);
}
else
{
qmAnimation.fold(oE,
{
win:window,
speed:200,
easing:"easeIn",
tween:"Cubic",
oncomplete:function()
{
callBack.call(ad,bu);
}
}
);
}
},


cpv:function()
{
var ad=this;
if(ad.dk.bAnimation)
{
qmAnimation.stop(ad.AW);
}
removeSelf(ad.AW);
ad.AW=null;
},


cNI:function(oS)
{
var ad=this;
return typeof(oS)=="number"?
ad.S("_menuall_").childNodes[oS]:
ad.S("_menuitem_"+oS);
},

sC:function(hV)
{
var NR=(typeof(hV)=="string"||typeof(hV)=="number")?this.S("_menuitem_"+hV):hV;

if(this.aGz==NR)
{
return this;
}

if(NR)
{
NR.className="menu_item_high";
}
if(this.aGz)
{
this.aGz.className="menu_item";
}
this.aGz=NR;
return this;
},

bGE:function()
{
var ad=this;
if(ad.aGI)
{
clearTimeout(ad.aGI);
ad.aGI=null;
}
return ad;
},

djw:function()
{
var ad=this;
if(ad.aGY)
{
clearTimeout(ad.aGY);
ad.aGY=null;
}
return ad;
},




dPl:function()
{
var ad=this,
iG=ad;
while(iG.aRd)
{
iG=iG.aRd;
}
while(iG)
{
if(iG.baZ)
{
clearTimeout(iG.baZ);
iG.baZ=null;
}
iG=iG.atZ;
}
return ad;
},

dPr:function()
{
var ad=this;
if(ad.baZ)
{
clearTimeout(ad.baZ);
}
ad.baZ=setTimeout(function(){

ad.cpl().close();
ad.baZ=null;
},500);
return ad;
},

bYd:function(cRD,cPj)
{
var ad=this,
aN=ad.dk,

akZ=ad.KY(cRD.oSubMenu,aN);
akZ.sId="sub"+cRD.sId;
akZ.nZIndex=aN.nZIndex+1;
if(ad.atZ)
{
if(ad.atZ.dk.sId==akZ.sId)
{

return ad;
}
}
ad.bGE();
ad.aGI=setTimeout(function(){

if(ad.atZ)
{


ad.cpk();
}
if(ad.isShow())
{
var cM=calcPos(cPj);
cM[0]-=5;
cM[1]-=1;
cM[2]+=7;
cM[3]+=2;
var	bVN=ad.atZ=new QMMenu(akZ),
cRd=calcAdjPos(cM,bVN.option('nWidth'),bVN.option('nHeight'),aN.oEmbedWin,1);
bVN.option('nY',Math.max(0,cRd[0])).option('nX',Math.max(0,cRd[3])).aRd=ad;
bVN.blz=cPj;
}
},100);
},

cpk:function()
{
var ad=this;
if(ad.atZ)
{

ad.atZ.close();
ad.atZ=null;
}
return ad;
},




cpl:function()
{
var ad=this,
ckj=ad.aRd;
if(ckj)
{
ckj.atZ=null;
ckj.cpl().close();
ad.aRd=null;
}
return ad;
},


toggle:function()
{
var ad=this;
ad.isShow()?ad.hide():ad.show();
return ad;
},

selectItem:function(hV)
{
var ad=this;
ad.sC(hV);
if(ad.aGz)
{

scrollIntoMidView(ad.aGz,ad.S("_menuall_"));
}
return ad;
},

addItem:function(oS,bq)
{
var ad=this,
NR=ad.cNI(oS);
ad.KY(bq,{
nHeight:22
});
if(NR)
{
insertHTML(NR,"beforeBegin",ad.constructor.bP.aay.replace(bq,"item"));
}
else
{

var zm=ad.S("_menuall_").childNodes;
insertHTML(ad.S("_menuall_"),"beforeEnd",ad.constructor.bP.aay.replace(bq,"item"));
}
},

delItem:function(oS)
{
var ad=this,
NR=ad.cNI(oS);
if(NR)
{
removeSelf(NR);
}
},

itemOption:function(oS,aB,bL)
{
var NR=this.cNI(oS);
if(NR)
{
switch(aB)
{
case"bDisSelect":
NR.className=(bL?"menu_item_nofun":"menu_item");
break;
case"bDisplay":
NR.style.display=bL?"":"none";
break;
}
}
},

close:function()
{
var ad=this,
bMc=ad.dk.onbeforeclose;
if(bMc&&!bMc.call(ad))
{
return;
}
ad.bGE();
ad.cpk();
return callBack.call(ad,as.close);
},

option:function(aih,akF)
{
var ad=this;
if(aih=="nHeight"&&typeof akF!="undefined")
{

var Xi=ad.S("_menuall_");
Xi.style.height=typeof akF=="number"?(akF-12+'px'):akF;

}
return callBack.call(ad,as.option,[aih,akF]);
}


};
},
{



makeMenuItem:function(chk,cai)
{
var bz=[];
for(var aC=0,aO=cai?Math.min(chk.length,cai.length):chk.length;aC<aO;aC++)
{
bz.push({
sId:cai?cai[aC]:aC,
sItemValue:chk[aC]
});
}
return bz;
},
bP:
{
aay:TE([
'<div style="margin:0pt;">',
'<div class="menu_base">',
'<div class="menu_bd bd">',

'<div id="_menuall_"',

'style="overflow-y:auto;$@$if(isNaN($mwidth$))$@$width:$@$if(gbIsIE)$@$$nMinWidth$px;$@$else$@$auto$@$endif$@$;$@$else$@$overflow-x:hidden;width:$mwidth$px;$@$endif$@$',
'$@$if($mheight$)$@$height:$mheight$$@$endif$@$$@$if(!isNaN($mheight$))$@$px$@$endif$@$;">',
'$@$for($oItems$)$@$',
'$@$sec item$@$',
'<div id="_menuitem_$sId$" itemid="$sId$" class="menu_item$@$if($bDisSelect$)$@$_nofun$@$endif$@$"',

'style="height:$nHeight$px;line-height:$nHeight$px;" onclick=";">$sItemValue$</div>',
'$@$endsec$@$',
'$@$endfor$@$',
'</div>',
'<div id="_foot_"',
'style="overflow-y:auto;$@$if(isNaN($mwidth$))$@$width:$@$if(gbIsIE)$@$$nMinWidth$px;$@$else$@$auto$@$endif$@$;$@$else$@$overflow-x:hidden;width:$mwidth$px;$@$endif$@$',
'padding-top:3px;border-top:1px solid #ccc;$@$if(!$oFootItems$)$@$display:none;$@$endif$@$height:auto;">',
'$@$for($oFootItems$)$@$',
'<div id="_menuitem_$sId$" itemid="$sId$" class="menu_item$@$if($bDisSelect$)$@$_nofun$@$endif$@$"',
'style="height:$nHeight$px;line-height:$nHeight$px;" onclick=";">$sItemValue$</div>',
'$@$endfor$@$',
'</div>',
'</div>',
'</div>',
'</div>'])
}
}
);







































function QMSelect(ah)
{
this.constructor=arguments.callee;
this.aGx(ah).Ik();
}



QMSelect.prototype=
{





get:function(dN)
{
var ad=this;
switch(dN=dN||1)
{
case 1:
case 2:
return ad.bnn[dN==1?"sItemValue":"sId"];
case 8:
return S(ad.egI,ad.bh);
case"menu":
return ad.OX;
}
},







set:function(bL,dN)
{
var ad=this,
aV=ad.blw(bL,dN);
if(!aV.edm)
{
S(ad.dk.sId,ad.bh).innerHTML=(ad.bnn=aV).sItemValue;
}
return ad;
},







update:function(ah)
{
var ad=this;
ad.KY(ah,ad.dk);





ad.KY(ah.oMenu,ad.dk.oMenu);

ad.dk=ah;
ad.bnn=ad.blw(ah.sDefaultId,2,1);
ad.Ik().set(ah.sDefaultId,2);
},




blw:function(bL,dN,NA)
{
var aI=(dN==2)?"sId":"sItemValue",
aN=this.dk,
aV,
bz=aN.oMenu.oItems;
if(aN.oMenu.oFootItems)
{
bz=bz.concat(aN.oMenu.oFootItems);
}
for(var aC=0,be=bz.length;aC<be;aC++)
{
if(bz[aC].sId||bz[aC].sId===0)
{
if(bz[aC][aI]==bL)
{
return bz[aC];
}
else if(NA&&!aV)
{
aV=bz[aC];
}
}
}
return aV||{sItemValue:aN.sDefaultItemValue,edm:1};
},


KY:function(ah,ada,awz)
{
for(var i in ada)
{
if(awz||typeof(ah[i])=="undefined"||ah[i]==null)
{
ah[i]=ada[i];
}
}
return ah;
},

aGx:function(ah)
{
var ad=this;
ad.bh=ah.oContainer.ownerDocument.parentWindow||ah.oContainer.ownerDocument.defaultView;

ad.KY(ah,{
sDefaultItemValue:"",
sId:QMSelect.bP.dHO+Math.random()
});
ad.dk=ah;
ad.bnn=ad.blw(ah.sDefaultId,2,!ah.sDefaultItemValue);

return this;
},

Ik:function()
{
var ae=getTop(),
ad=this,
aN=ad.dk,
pN=S(aN.sId,ad.bh);
if(!pN)
{
insertHTML(aN.oContainer,"beforeEnd",
QMSelect.bP.dCR.replace(
extend(aN,{
content:ad.bnn.sItemValue,
images_path:getPath("image")
})
)
);

if(aN.sName)
{
insertHTML(aN.oContainer,"beforeEnd",
QMSelect.bP.dCU.replace(aN)
);
}
}
if(!(pN=S(aN.sId+"_div",ad.bh)))
{

return;
}

ad.KY(aN.oMenu,
{
oEmbedWin:ad.bh,

sId:"select",

nWidth:pN.clientWidth+3,
nMinWidth:pN.clientWidth+3,
onitemclick:function(aJ)
{
if(aN.sName)
{
S(aN.sName,ad.bh).value=aJ;
}
if(!callBack.call(ad,aN.onselect,[ad.blw(aJ,2)]))
{
ad.bnn=ad.blw(aJ,2);
ad.set(aJ,2);
}
callBack.call(ad,aN.onchange,[ad.blw(aJ,2)])
},
onshow:function()
{
var bd=ad.bnn.sId;
if(bd||bd===0)
{
this.selectItem(bd);
}
},
onload:function()
{


var Lf=this,
cM=calcPos(pN),
awp=bodyScroll(ad.bh,'clientHeight'),
ack=bodyScroll(ad.bh,'scrollTop'),
NU=awp+ack;

callBack.call(ad,aN.onafteropenmenu,[Lf,pN]);

var dg=parseInt(Lf.option("nHeight")),
cA=cM[2],
cuN=pN.offsetHeight,
bCs=cA-dg-cuN;

if(aN.oMenu.bAutoItemView)
{
var dHK=awp/2+ack,
hQ;



if(cA<dHK)
{

hQ=Math.floor((NU-cA)*0.66);
}
else if(cA+dg<NU)
{

hQ=dg;
}
else
{

hQ=Math.floor((awp-(NU-cA+cuN))*0.66);
cA=cA-Math.min(dg,hQ)-cuN;

}
if(dg>hQ)
{
Lf.option("nHeight",hQ);

}

}
else if(bCs>0&&cA+dg>NU)
{
cA=bCs;
}
Lf.option("nX",cM[3]).option("nY",cA);
}
}
);

addEvent(ad.bh.document.body,(gbIsIE?"mousewheel":"DOMMouseScroll"),function()
{
ae.QMMenu("select","close");
}
);

pN.onclick=function()
{
callBack.call(ad,aN.onbeforeopenmenu,[aN.oMenu]);
ad.OX=new ae.QMMenu(aN.oMenu);
};

return ad;
}
};

QMSelect.bP=
{
dCR:T(
[
'<div id="$sId$_div" class="bd" unselectable="on" onmousedown="return false;" style="border-width:1px 2px 2px 1px;cursor:pointer;width:$nWidth$px;padding:1px 1px 1px 2px;background:#fff;float:left;$sStyle$">',
'<div class="attbg" style="width:16px;height:18px;overflow:hidden;text-align:center;float:right;"><img src="$images_path$webqqshow_on.gif" align="absmiddle" style="margin:3px 0 0 0;" /></div>',
'<div id="$sId$" class="txtflow" style="padding-left:3px;padding-left:3px!important;line-height:16px;height:18px;width:auto;">$content$</div>',
'</div>'
]
),
dCU:T(
'<input type="hidden" id="$sName$" name="$sName$" value="$content$"/>'
),
dHO:"QmCs_2_"
};








































var QMAutoComplete=inherit("QMAutoComplete",Object,
function(as)
{
return{

$_constructor_:function(ah)
{
this.aGx(ah);
},






show:function(an)
{
var ad=this;
ad.lZ=an;
return ad.fX();
},
close:function()
{
var ad=this;
ad.OX&&ad.OX.hide();
return ad;
},
isShow:function()
{
var iG=this.OX;
return iG&&iG.isShow();
},
getSelection:function()
{
return this.lZ[this.OX.getSelectItemId()];
},









setHeader:function(dj)
{
var iG=this.OX;
return iG&&iG.setHeader(dj);
},

aGx:function(ah)
{
var ad=this,
bi=ad.Fu=ah.oInput;

ad.cFN=ah.oPosObj||bi;
ad.bh=ad.cFN.ownerDocument.parentWindow
||ad.cFN.ownerDocument.defaultView;
ad.lZ=null;
ad.OX=null;
ad.czo=ah.defaultValue||"";
ad.dge=!(ah.notSupportKey||0);

ad.hM=ah.type||"";

bi.setAttribute("autocomplete","off");


ad.bkW=ah.sUrl;
ad.dKu=ah.ondata;

ad.aCM=ad.bkW?500:20;
ad.aCM=(typeof ah.nDelay=="number")?
ah.nDelay:ad.aCM;

ad.dKA=ah.ongetdata;
ad.TQ=ah.onselect;
ad.aIP=ah.onclick;
ad.bAc=ah.onkeydown;
ad.dOv=ah.ontouchstart;

addEvents(bi,
{
keydown:ad.ij(ad.aZq),
keypress:ad.ij(ad.bFz),
keyup:ad.ij(ad.bFO),
focus:ad.ij(ad.AO),
blur:ad.ij(ad.aBo)
}
);

ad.OX=new QMAutoComplete.duh(
{
sId:unikey(),
oItems:[],
supportKey:ad.dge,
oEmbedWin:ad.bh,
nWidth:ah.nWidth||"auto",
nMinWidth:ah.nMinWidth||100,
nItemHeight:ah.nItemHeight||21,
nMaxItemView:ah.nMaxItemView||0,
type:ah.type,
bDisplay:false,
onselect:function(aJ)
{
callBack.call(ad,ad.TQ,[ad.lZ[aJ]]);
},
onclick:function(ag,aJ)
{
callBack.call(ad,ad.aIP,[ag,ad.lZ[aJ]]);
},
ontouchstart:function(ag)
{
callBack.call(ad,ad.dOv,[ag]);
}
}
);
return ad.aZi();
},
ij:function(fZ)
{
var ad=this;
return function(ag)
{
return fZ.call(ad,ag);
};
},
bFz:function(ag)
{
if(gbIsOpera&&ag.keyCode==13)
{
preventDefault(ag);
}
},
bFO:function(ag)
{
if(!ag.ctrlKey)
{
var ez=ag.keyCode,
ad=this;
if(!(ez==38||ez==40||(ez==13&&ad.cup!=229)||ez==27))
{
ad.bRt&&clearTimeout(ad.bRt);
ad.bRt=setTimeout(function()
{

if(ad.bkW)
{
var bSE=trim(ad.Fu.value);
if(bSE=="")
{
ad.close();
}
else
{
bSE=encodeURIComponent(bSE);
QMAjax.send([ad.bkW,"&resp_charset=UTF8&q=",bSE].join(""),
{
method:"get",
onload:function(aW,cg)
{
if(aW)
{
ad.lZ=ad.dKu.call(ad,cg);
ad.fX().bRt=0;
}




}
}
);
}
}
else
{
ad.lZ=ad.dKA(ad.Fu,ez);
ad.fX().bRt=0;
}
},
ad.aCM
);
}
}
},
aZq:function(ag)
{
var ad=this,
ez=ag.keyCode;
callBack.call(ad,ad.bAc,[ag,1]);


ad.cup=ez;
if(ad.isShow()&&this.dge)
{
switch(ez)
{
case 13:
callBack.call(ad,ad.TQ,[ad.getSelection()]);
ad.close();
preventDefault(ag);
break;
case 38:
ad.OX.selectItem(-1);
preventDefault(ag);
break;
case 40:
ad.OX.selectItem(1);
preventDefault(ag);
break;
case 9:
callBack.call(ad,ad.TQ,[ad.getSelection()]);
ad.close();

break;
case 27:


ad.close();
preventDefault(ag);
break;
}
}
callBack.call(ad,ad.bAc,[ag,0]);
},
AO:function(ag,bfC)
{
var ad=this;
ad.afP=true;
bfC&&ad.Fu.focus();
return ad.aZi();
},
aBo:function(ag)
{
var ad=this;
ad.afP=false;
setTimeout(function()
{
!ad.afP&&
ad.close().aZi();
},
20
);
},
aZi:function()
{
var ad=this;
if(ad.czo)
{
var nG=ad.Fu,
cR=nG.value;
if(ad.afP)
{
if(cR==ad.czo)
{
var cu=nG.className.replace(/graytext/ig,"");
if(this.hM=="rss")
{
cu=cu.replace(/textInput/ig," textInput2");
}
nG.className=cu;
nG.value="";
}
}
else
{
if(cR=="")
{
var cu=(this.hM=="rss"?nG.className.replace(/textInput2/ig," textInput"):nG.className)+" graytext";
nG.className=cu;
nG.value=ad.czo;
}
}
}
return ad;
},
fX:function()
{
var ad=this;
if(!ad.lZ||ad.lZ.length==0)
{
ad.close();
}
else
{
var cM=calcPos(ad.cFN);
ad.OX.setContent(
{
oItems:ad.lZ
}
).option("nX",cM[3]).option("nY",cM[2]);
}
return ad;
}
}
}
);

QMAutoComplete.duh=inheritEx("QMAutoCompleteMenu",QMPanel,
function(as)
{
return{
aVy:function(dj)
{
return dj;
},

CK:function(ah)
{
callBack.call(this,as.CK,[ah]);

if(ah.supportKey)
{
this.cEb(this.afW=0);
}
},

jW:function()
{
var aN=this.dk,
ad=this,
Xi=this.S("_menuall_"),
KN=this.S("_title_"),
dcm=function(ag){
var ag=ag||aN.oEmbedWin.event,
ax=getEventTarget(ag);
while(ax&&ax!=Xi&&ax.parentNode!=Xi)
{
ax=ax.parentNode;
}
return ax;
};

if(aN.supportKey)
{
Xi.onmouseover=function(ag){
var ax=dcm(ag),
Ej=parseInt(ax.id.substr(ad.ZJ.length+1));
if(!isNaN(Ej))
{
ad.cEb(Ej);
}
};
KN.onclick=function(ag){
var ag=ag||aN.oEmbedWin.event;
callBack.call(ad,aN.onclick,[ag,""]);
};
Xi.onclick=function(ag){
var ax=dcm(ag),
cJ=ax.getAttribute("key");
callBack.call(ad,aN.onclick,[ag,cJ]);
if(cJ)
{
callBack.call(ad,aN.onselect,[cJ]);
setClass(ax,"menu_item");
if(aN.type!="rss")
{
ad.hide();
}
}
};
}

addEvents(this.AW,
{
mousedown:preventDefault,
touchstart:function(ag)
{
callBack.call(ad,aN.ontouchstart,[ag]);
}
}
);
},

avF:function(ah)
{
var bz=ah.oItems,
Ol=(ah.nItemHeight||21)*(ah.nMaxItemView||bz.length);

this.KY(ah,
{
mheight:Ol,
nWidth:"auto",
nHeight:Ol,
nZIndex:1121
}
);


this.KY(ah,{sStyle:"background:#fff"},true);
return callBack.call(this,as.avF,[ah]);
},







dfe:function(ah)
{
var bz=ah.oItems,
bf=[];
this.bVB=0;
for(var i=0,be=bz.length;i<be;i++)
{

bf.push('<div unselectable="on" style="height:',bz[i].nItemHeight||ah.nItemHeight,'px;" onclick=";" ');
var bd=bz[i].sId;
if(bd||bd===0)
{
bf.push('key="',i,'" id="',this.ZJ,'_',this.bVB++,'" class="menu_item" >');
}
else
{
bf.push('class="menu_item_onfun">');
}
bf.push(bz[i].sItemValue,'</div>');
}
return bf;
},


azR:function(ah)
{

var bz=ah.oItems,
bf=[
'<div style="margin:0px;">',
'<div class="menu_base">',
'<div class="menu_bd bd" style="padding:0;">',
'<div unselectable="on" id="',this.ZJ,'__title_" style="white-space:nowrap;width:',ah.nMinWidth,'px;line-height:',ah.nItemHeight,'px;',(ah.header?'':'display:none;'),'">',ah.header,'</div>',
'<div unselectable="on" id="',this.ZJ,'__menuall_" style="overflow-y:auto;height:auto;line-height:',ah.nItemHeight,'px;width:'];


if(ah.nWidth=="auto")
{

bf.push(!getTop().gbIsIE?ah.nMinWidth+"px":"auto");
}
else
{

bf.push(ah.nWidth-(getTop().gbIsIE?0:2),"px;overflow-x:hidden;");
}
bf.push('">');
bf=bf.concat(this.dfe(ah));
bf.push('</div></div></div></div>');
ah.sBodyHtml=bf.join("");

callBack.call(this,as.azR,[ah]);
},

bZU:function(aAR,bXO)
{
var dgX=this.dk.nMaxItemView||this.dk.oItems.length,
ub=this.bVB<=dgX?"auto":this.dk.nItemHeight*dgX;
this.option("nHeight",ub);
aAR.style.height=ub=="auto"?"auto":ub+"px";

if(this.dk.nWidth!="auto")
{
if(aAR.style.width!=this.dk.nWidth)
{
bXO.style.width=aAR.style.width=this.dk.nWidth-(getTop().gbIsIE?0:2)+"px";
}
}
else
{
if(gnIEVer>6&&aAR.ownerDocument.documentElement.clientHeight)
{
bXO.style.width=aAR.style.width="auto";
}

if(aAR.offsetWidth>10)
{
bXO.style.width=aAR.style.width=
(Math.max(aAR.offsetWidth,bXO.offsetWidth,this.dk.nMinWidth)
+(gbIsIE?(gnIEVer>6?18:0):aAR.offsetWidth-aAR.scrollWidth))+"px";
}

}
},

setHeader:function(dj)
{
if(dj)
{
this.S("_title_").innerHTML=this.aVy(dj);
show(this.S("_title_"),1);
}
else if(dj=="")
{
show(this.S("_title_"),0);
}
},

setContent:function(ah)
{
var ad=this,
Xi=ad.S("_menuall_"),
KN=ad.S("_title_");

this.KY(ad.dk,ah,true);
if(ad.dk.nWidth=="auto")
{
KN.style.width=Xi.style.width=gbIsIE&&gnIEVer!=7?ad.dk.nMinWidth+"px":"auto";
}
ad.setHeader(ah.oItems.header);

Xi.innerHTML=ad.dfe(ah).join("");
if(ad.dk.supportKey)
{
ad.selectItem(ad.afW=0);
}
ad.show();
ad.bZU(Xi,KN);
callBack.call(ad,ad.dk.onload,[ah]);
return ad;
},

selectItem:function(xP)
{
var ad=this,
NR=ad.cEb((ad.afW+xP+ad.bVB)%ad.bVB);

scrollIntoMidView(NR,ad.S("_menuall_"));



},

getSelectItemId:function()
{
var dpu=this.S(this.afW);
return dpu&&dpu.getAttribute("key");
},

cEb:function(cXz)
{
var NR=this.S(this.afW);
if(NR)
{
NR.className="menu_item";
}

if(NR=this.S(cXz))
{
NR.className="menu_item_high";
this.afW=cXz;
}
return NR;
}
};
}
);
















function aHs(ah)
{
ah.db.push('&t=mail_mgr2&resp_charset=UTF8&ef=js&sid=',getSid());
QMAjax.send(ah.aK||'/cgi-bin/mail_mgr',{
content:ah.db.join(""),
onload:function(aW,cg,hf){
var dLS=cg.indexOf(ah.aGZ)>=0,
drf=cg.indexOf("cgi exception")>=0;
if(aW&&(dLS||drf))
{
var av=evalValue(cg);
if(drf)
{
showError(filteScript(av.errmsg));
}
else
{
ah.Mg(av,cg,hf);
}
}
else if(ah.aCW)
{
showError(ah.aCW);
}
}
});
}


var QMMailList={};






































QMMailList.getCBInfo=function(al,aP)
{
var av={
oMail:[],
oWin:al,
sFid:al.location.getParams()['folderid'],
bML:true
};

E(GelTags("input",S('list',al)),function(aH)
{
if(aH.title=="选中/取消选中")
{

av.oACB=aH;
}
else if(aH.type=="checkbox"&&aH.name=="mailid"&&(aP&&aH.value==aP||!aP&&aH.checked))
{
var sJ=aH.value,
dQ=aH.parentNode;
while(dQ.tagName.toUpperCase()!="TABLE")
{
dQ=dQ.parentNode;
}

var XI=dQ.rows[0].cells,
nk=XI[XI.length-1],
bVG=GelTags("input",nk)[0],
caN=GelTags("td",GelTags('tr',nk)[0]),

cRs=caN[caN.length-1],
XQ=GelTags("table",nk),
aha,
Ju=[],
bQ={};
for(var aC=0,aO=XQ.length;aC<aO;aC++)
{
if(aha=XQ[aC].getAttribute("tagid"))
{
Ju.push(aha);
}
}

bQ.sMid=sJ;
bQ.bSys=bVG&&{"s1bg":1}[bVG.className];
bQ.bDft=bVG&&{"drifticon":1}[bVG.className];
bQ.bUnr=aH.getAttribute("unread")=="true";
bQ.bSubUnr=caN[1].className=="new_g"&&GelTags("b",caN[1]).length>0;
bQ.bStar=cRs.className=="fg fs1";
bQ.bTms=aH.getAttribute("isendtime")==1;
bQ.oTagIds=Ju;
bQ.sSName=aH.getAttribute("fn");
bQ.sSEmail=aH.getAttribute("fa");
var ejb=aH.getAttribute("rf");



bQ.oTable=dQ;
bQ.oStar=cRs;
bQ.oChk=aH;
av.oMail.push(bQ);

var cjR=GelTags('div',nk);
for(var aC=0,aO=cjR.length;aC<aO;aC++)
{
if(cjR[aC].className=='TagDiv')
{
bQ.oTCont=cjR[aC];
break;
}
}

}
});
return av;
};






QMMailList.selectedUI=function(ah)
{
var at=getMainWin(),
deC={},
cbc=false;
if(at.location.href.indexOf('/cgi-bin/mail_list')<0)
{
return;
}
for(var bQ=ah.oMail,i=bQ.length-1;i>=0;i--)
{
deC[bQ[i].sMid]=1;
}
ah=ah||this.getCBInfo(at);
E(SN("mailid",at),function(aH)
{
if(aH.type=="checkbox")
{
var uj=aH.value in deC,
amV=aH.getAttribute('unread')=='true'&&ah.sFid!=4,
dQ=aH;
while(dQ.tagName.toUpperCase()!="TABLE")
{
dQ=dQ.parentNode;
}


if(dQ.style.backgroundColor!="")
{
dQ.style.backgroundColor="";
}
setClass(dQ,[amV?"i F":"i M",uj?" B":""].join(""));

setClass(GelTags("table",dQ)[0],amV?"i bold":"i");


var bhC=aH.getAttribute("isendtime"),
bdl=aH.getAttribute("rf");

setClass(GelTags("div",dQ.rows[0].cells[1])[1],
'cir '+((amV?'Ru':'')||{0:'Rc',1:'Ti'}[bhC]||{r:'Rh',f:'Rz'}[bdl]||(amV?'':'Rr'))
);

aH.checked=uj;
cbc=cbc||uj;

}
});
if(!cbc&&ah.oACB)
{

ah.oACB.checked=cbc;
}
};







QMMailList.cQS=function(Ie)
{
for(var bUk=null,bUi=null,bQ=Ie.oMail,i=bQ.length-1;i>=0;i--)
{
var eE=bQ[i],
nM=eE.sSName,
gS=eE.sSEmail;
if(bUi!=nM)
{
bUi=bUi===null?nM:'';
}
if(bUk!=gS)
{
bUk=bUk===null?gS:'';
}
}
return[bUk,bUi];
};





























function BaseMailOper(ah)
{
var ad=this;
ad.dR(ad.dk=ah);
}




BaseMailOper.dMy=function(ah)
{
var aYU=BaseMailOper,
at=ah.oWin;
if(!aYU.getInstance(at))
{
new aYU(ah);
}
return aYU.getInstance(at);
};

BaseMailOper.getInstance=function(al)
{
return al["__gBmOi_"];
};

BaseMailOper.prototype={
dR:function(ah)
{
var ad=this,
at=ah.oWin,
ja=at.location,
iy=ja.href;
if(iy.indexOf("/cgi-bin/mail_list")>0)
{
ah.aWQ=0;
}
else if(iy.indexOf("t=readmail_conversation")>0)
{
ah.aWQ=2;
}
else if(iy.indexOf("readmail_group.html")>0)
{
ah.aWQ=3;
}
else
{

ah.aWQ=1;
}
ah.bAutoTag=ja.getParams()['folderid']==1||ah.sFolderid==1||ah.bAutoTag;
at["__gBmOi_"]=ad;

return ad;
},

getConfig:function()
{
return this.dk;
},

setMailInfo:function(Ie)
{
this.dk.cGT=Ie;
},

getMailInfo:function()
{
return this.dk.cGT;
},







apply:function(hV,dPx)
{


var ad=this,
aN=ad.dk,
XM=aN.cGT,
at=aN.oWin;







switch(hV)
{
case"mark":
case"move":
case"preview":
return false;

case"new":
configPreRmMail(XM,'moveMailJs');
moveMailJs('new','',XM.sFid,XM);
break;
case"delmail":

configPreRmMail(XM,'rmMail');
rmMail(0,XM);
break;
case'predelmail':
configPreRmMail(XM,'rmMail');
rmMail(1,XM);
break;
case'frwmail':


XM.oWin.FwMailML();
break;
case'spammail':
reportSpam(false,false,XM.oWin);
break;
case"read":
case"unread":
setMailRead(hV=="unread",XM);
break;
case"star":
case"unstar":
starMail(hV=="star",XM);
break;
case"rmalltag":
QMTag.rmTag('',XM);
break;
case"newtag":
QMTag.newMailTag(XM);
break;
case'autotag':
QMTag.setMailAutoTag(XM);
break;
default:
if(/fid_(.+)/.test(hV))
{
configPreRmMail(XM,'moveMailJs');

var dFB=RegExp.$1;
moveMailJs(dFB,dPx,XM.sFid,XM);
}
else if(/tid_(.+)/.test(hV))
{

var aha=RegExp.$1;
QMTag.setMailTag(aha,XM);
}
break;
}
return true;
}
};















var QMTag={
deH:"",
bsT:{},
cOI:[]
};






QMTag.set=function(yO,QC)
{
var ad=this;
if(!QC||QC>ad.deH)
{
QC&&(ad.deH=QC);
ad.cOI=[];
ad.bsT={};

for(var aC=0,aO=yO.length;aC<aO;aC++)
{
var rD=yO[aC],
aha=rD.id,
dDJ;
if(aha!=dDJ)
{
ad.cOI.push(aha);
ad.bsT[aha]=rD;
rD.egH=aC;
}
}
}
};

QMTag.get=function()
{
for(var en=[],ad=this,kf=ad.cOI,aC=0,aO=kf.length;aC<aO;aC++)
{
en.push(ad.bsT[kf[aC]]);
}
return en;
};





QMTag.setItem=function(nx,mr,bL)
{
var cRl=this.bsT;
if(cRl[nx])
{
cRl[nx][mr]=bL;
}
};

QMTag.getItem=function(nx,mr)
{
var rD=this.bsT[nx];

return rD&&mr?rD[mr]:rD;
};


QMTag.bTE=function(cg)
{
try
{
var av=eval(cg);
av.mailids.length--;
av.taglist.length--;

QMTag.set(av.taglist,av.timestamp);
}
catch(e)
{

}
return av;
};

QMTag.setMailTag=function(nx,ah)
{
var bQ=ah.oMail,
aO=bQ.length,
ei=0,

db=['mailaction=mail_tag&fun=add&tagid=',nx];

if(!aO)
{
return showError('未选中任何邮件');
}


for(var i=0;i<aO;i++)
{
var eE=bQ[i],
bF=eE.sMid;

if(QMTag.addTagUI(eE.oTCont,nx,ah.sFid,bF,!ah.bML))
{
ei++;
db.push('&mailid=',bF);
rdVer(bF,1);
QMMailCache.addData(bF,{addTagId:nx});
if(eE.bUnr)
{

var hX='tag_'+nx;
setTagUnread(hX,getFolderUnread(hX)+1);
if(!eE.oTagIds.length)
{
setTagUnread('tag',getFolderUnread('tag')+1);
}
}
}
}
QMMailList.selectedUI({oMail:[],oACB:ah.oACB});

if(ei)
{
aHs({
db:db,
aGZ:'mail_tag successful',
aCW:'设置标签失败，请重试',
Mg:function(av,cg,hf)
{
var av=QMTag.bTE(cg),
at=ah.oWin;


if(at.QMReadMail)
{
at.QMReadMail.modifyTag(nx,0);
}
return;
}
});
}
};







QMTag.newMailTag=function(ah)
{
promptFolder({
type:'tag',
onreturn:function(gP){
var bQ=ah&&ah.oMail,
aO=bQ&&bQ.length,
db=['&mailaction=mail_tag&fun=add&tagname=',encodeURI(gP)];


for(var i=0;i<aO;i++)
{
db.push('&mailid=',bQ[i].sMid);
}

aHs({
db:db,
aGZ:'mail_tag successful',
aCW:'创建标签失败，请重试',
Mg:function(av,cg,hf)
{
showInfo("标签创建成功");
var cTm=ah&&ah.oWin.QMReadMail;

if(cTm)
{

rdVer(cTm.getMailId(),1);
return reloadFrmLeftMain(true,true);
}
else if(!ah)
{

return reloadFrmLeftMain(true,true);
}

var av=QMTag.bTE(cg);
QMMailList.selectedUI({oMail:[],oACB:ah.oACB});

for(var i=0;i<aO;i++)
{
var eE=bQ[i];
QMTag.addTagUI(eE.oTCont,av.newtag.id,ah.sFid,eE.sMid,!ah.bML);
}

reloadFrmLeftMain(true,false);
}
});
}
});

};


QMTag.dVk=function(dRQ,edc)
{
confirmBox({
title:"收信规则",
msg:"对于收件箱中符合条件的已有邮件，您是否也要标上此标签？",
confirmBtnTxt:'是',
cancelBtnTxt:'否',
onreturn:function(aW)
{
if(aW)
{
aHs({
db:['&fun=AutoTag&mailaction=mail_filter&filterid=',dRQ],
aGZ:'mail_tag successful',
aCW:'操作失败，请重试',
Mg:function(av,cg,hf)
{
var av=eval(cg);
if(av.count)
{
reloadFrmLeftMain(1,1);
}
return showInfo(
T(av.count?"操作成功，标记了$count$封邮件。<a href='/cgi-bin/mail_list?sid=$sid$&folderid=all&tagid=$tagid$'  style='color:white' onclick='getTop().hiddenMsg();' target='mainFrame'>[查看]</a>":"操作成功，您没有需要移动或标记的邮件。").replace(av),
30000);
}
});
}
else
{
reloadFrmLeftMain(1,!edc);
}
}
});
};






QMTag.setMailAutoTag=function(ah)
{
var bQ=ah.oMail,
aOX=false,
ddA=/[~!#\$%\^&\*\(\)=\+|\\\[\]\{\};\':\",\?\/<>]/ig,
db=['&mailaction=mail_tag&Fun=AutoTag'];

for(var aC=bQ.length-1;aC>=0;aC--)
{
if(bQ[aC].bSys)
{
return showError('系统邮件不能新建自动标签');
}
db.push('&mailid=',bQ[aC].sMid);
}
confirmBox(
{
mode:"prompt",
height:160,
title:'新建自动标签',
msg:['<div style="width:100%;margin:10px;"><b>对于发件人</b><input type="text" id="addr" style="width:300px;margin-left:60px;"/></div>',
'<div style="margin:10px;"><b>来信自动标为标签</b><input type="text" id="name" style="width:300px;margin-left:15px;"/></div>',
'<div class="graytext" style="width:450px;margin:10px;">该发件地址的来信，会自动加上标签，便于您识别和管理邮件。</div>'].join(''),
onload:function()
{
var ad=this;
addEvents([ad.S("addr"),ad.S("name")],
{
keydown:function(ag)
{
if(ag.keyCode==13)
{
aOX=true;
ad.close();
}
}
}
);
},
onshow:function()
{
var ci=this,
eE=ah.cGT,
bqV=QMMailList.cQS(ah),
Kb=bqV[1],
gS=bqV[0];

if(!Kb||!gS)
{
ci.S('addr').focus();
}
else
{
ci.S('addr').value=gS.split(',')[0];
ci.S('name').value=trim(htmlDecode(Kb).split(/[,@]/)[0].replace(ddA,''))+"的来信";
}
},
onreturn:function(aW)
{

var ci=this,
fl=trim(ci.S('addr').value),
aT=trim(ci.S('name').value);
if(!aW&&!aOX)
{
return;
}
if(!fl)
{
return showError('请输入发件人名称或地址');
}
var aO=getAsiiStrLen(aT);
if(aO==0||aO>50)
{
return showError(aO?"标签名称太长，请使用少于50个字符(25个汉字)的名称":'请输入标签名称');
}
if(ddA.test(aT))
{
return showError('标签名称不能包含 ~!#$%^&*()=+|\\[]{};\':",?/<> 等字符');
}

db.push('&sender=',encodeURI(fl),'&tagname=',encodeURI(aT));
aHs({
aK:'/cgi-bin/setting2',
db:db,
aGZ:'mail_tag successful',
aCW:'设置自动标签失败，请重试',
Mg:function(av,cg,hf)
{
showInfo("设置自动标签成功，通过收信规则，来信将自动标上标签。");

var at=ah.oWin,
av=QMTag.bTE(cg);

if(!ah.bML&&at.QMReadMail)
{

rdVer(at.QMReadMail.getMailId(),1);

}
else
{
QMMailList.selectedUI({oMail:[],oACB:ah.oACB});
for(var i=bQ.length-1;i>=0;i--)
{
var eE=bQ[i];
QMTag.addTagUI(eE.oTCont,av.newtag.id,ah.sFid,eE.sMid,!ah.bML);
}
}

QMTag.dVk(av.filterid,ah.bML);
return;
}
});
}
}
);


};








QMTag.rmTag=function(nx,ah)
{
var bQ=ah.oMail,
aO=bQ.length,
ei=0,
db=['&mailaction=mail_tag&fun=del'];
if(!aO)
{
return showError('未选中任何邮件');
}
if(nx)
{
db.push('&tagid=',nx);
}

for(var i=bQ.length-1;i>=0;i--)
{
if(QMTag.rmTagUI(bQ[i].oTCont,nx))
{
ei++;
var eE=bQ[i],
bF=eE.sMid;
db.push('&mailid=',bF);
rdVer(bF,1);
QMMailCache.addData(bF,{removeTagId:nx});

if(eE.bUnr)
{

var Ju=nx?eE.oTagIds:[nx];

if(nx)
{
var hX='tag_'+nx;
setTagUnread(hX,getFolderUnread(hX)-1);
}
else
{
E(eE.oTagIds,function(ZA){
var hX='tag_'+ZA;
setTagUnread(hX,getFolderUnread(hX)-1);
});
}

if(eE.oTagIds.length==1||!nx)
{
setTagUnread('tag',getFolderUnread('tag')-1);
}
}
}
}
QMMailList.selectedUI({oMail:[],oACB:ah.oACB});

if(ei)
{
aHs({
db:db,
aGZ:"mail_tag successful",
aCW:T(['移除标签失败，请重试']),
Mg:function(av,cg,hf)
{
QMTag.bTE(cg);
























}
});
}
};










QMTag.rmTagUI=function(bQz,nx)
{
if(nx)
{
for(var XQ=GelTags("table",bQz),aC=XQ.length-1;aC>=0;aC--)
{
if(XQ[aC].getAttribute("tagid")==nx)
{
removeSelf(XQ[aC]);
return true;
}
}
}
else
{
bQz.innerHTML='';
return true;
}
return false;
};



QMTag.addTagUI=function(bQz,nx,hg,aP,eeF)
{
for(var LP=GelTags("table",bQz),aC=LP.length-1;aC>=0;aC--)
{
if(LP[aC].getAttribute('tagid')==nx)
{
return false;
}
}

var bw=
TE([
'<table cellspacing="0" cellpadding="0" border="0" class="tagleftDiv flagbg$flagbg$" tagid="$id$">',
'<tr>',
'<td class="falg_rounded">\n',
'</td>',
'<td colspan="2">\n',
'</td>',
'<td class="falg_rounded">\n',
'</td>',
'</tr>',
'<tr>',
'<td>\n',
'</td>',
'<td class="tagbgSpan" tid2="$id$">',
'<span>中a</span>$name$<span>中a</span>',
'$@$if($t$=="mail_list")$@$<div class="closeTagSideDiv flagbg$flagbg$" style="display:none" title="取消此标签" tid2="$id$">&nbsp;&nbsp;&nbsp;</div>$@$endif$@$',
'</td>',
'$@$if($t$!="mail_list")$@$<td title="取消此标签" class="closeTagDiv $disclose$" tid2="$id$">&nbsp;</td>$@$endif$@$',
'<td>\n',
'</td>',
'</tr>',
'<tr>',
'<td class="falg_rounded">\n',
'</td>',
'<td colspan="2">\n',
'</td>',
'<td class="falg_rounded">\n',
'</td>',
'</tr>',
'</table>'
]).replace(extend({
t:eeF?"readmail":"mail_list",
folderid:hg,
mailid:aP||""
},QMTag.getItem(nx)));

insertHTML(bQz,"beforeEnd",bw);
return true;
};






QMTag.showTagClose=function(awj,eP)
{
function fX(awj,eP)
{
try
{
for(var om=GelTags("div",awj),aC=om.length-1;aC>=0;aC--)
{
if(om[aC].className.indexOf("closeTagSideDiv")>-1)
{
show(om[aC],eP);
return;
}
}
}
catch(e)
{
}
}

var ad=arguments.callee;

if(ad.Cr)
{
clearTimeout(ad.Cr);
}
if(ad.Ky!=awj)
{
fX(ad.Ky,0);
}
ad.Ky=awj;
ad.Cr=setTimeout(function()
{
fX(awj,eP);
},
eP?500:100);
};

function colorTag(ag,nx,al)
{
ag=ag||al.event;
stopPropagation(ag);
preventDefault(ag);

var bd="tag"+nx,
dTu=QMMenu(bd,"isClose");
if(dTu===false)
{
return;
}

var am=getEventTarget(ag),
dkV=function(kk)
{
return/\bflagbg(\d+)\b/.test(kk)&&RegExp.$1;
},
dHg=dkV(am.className),

edJ=T(['<div class="flag_menu_item"><div id="flagbg$flagbg$" class="flagbg$flagbg$"></div></div>']),
cfS=[
['0','1','2','3','4'],
['5','6','7','8','9'],
['11','12','13','14','15'],
['16','17','18','19','20'],
['21','22','23','24','25'],
['26','27','28','29','30'],
['31','32','33','34','35']
],
cGK=
{
nHeight:5,
sItemValue:'<div style="height:1px; overflow:hidden;"></div>'
},
bz=[];

bz.push(cGK);

for(var aC=0,ZL=cfS.length;aC<ZL;aC++)
{
for(var om=[],fd=0,XE=cfS[aC].length;fd<XE;fd++)
{
om.push(edJ.replace({
flagbg:cfS[aC][fd]
}));
}
bz.push({
nHeight:24,
sItemValue:om.join("")
});
if(aC==1)
{
bz.push(cGK);
}
}

bz.push(cGK);

new QMMenu({
oEmbedWin:al,
sId:bd,
nWidth:148,
oItems:bz,

onshow:function()
{




},
onload:function()
{
var Lf=this,
cM=calcPos(am),
dg=parseInt(Lf.option("nHeight")),
cA=cM[2],

NU=bodyScroll(al,'clientHeight')+bodyScroll(al,'scrollTop'),
bCs=cA-dg-am.clientHeight;
if(bCs>0&&cA+dg>NU)
{
cA=bCs;
}
Lf.option("nX",cM[3]).option("nY",cA);

var Xi=Lf.S("_menuall_"),
cIX=null;
function asP(ag)
{
var ax=getEventTarget(ag);
while(ax&&ax!=Xi)
{
if(ax.id.indexOf("flagbg")>-1)
{
return ax;
}
ax=ax.parentNode;
}
return null;
}

addEvents(Xi,
{
mousemove:function(ag)
{
var ax=asP(ag);
if(cIX)
{
cIX.parentNode.style.borderColor="#fff";
}
if(cIX=ax)
{

ax.parentNode.style.borderColor="#aaa";
}
},
click:function(ag)
{
var ax=asP(ag);
if(ax)
{
colorTag.dRm(nx,dkV(ax.className),dHg,am,al);

Lf.close();
}
}
}
);
}
});
}


colorTag.dRm=function(nx,ctD,dLJ,am,al)
{
var fq='选择标签颜色成功';
if(ctD==dLJ)
{
return showInfo(fq);
}

QMAjax.send('/cgi-bin/foldermgr',{
content:['&fun=setcolor&sid=',getSid(),"&tagid=",nx,"&flagbg=",ctD].join(""),
onload:function(aW,cg,hf){
var aK=al.location.href,
dtH=getMainWin().location.href;

if(aW&&cg.indexOf(fq)>0)
{



setClass(am,am.className.replace(/\bflagbg\d+\b/i,"flagbg"+ctD));

if(aK.indexOf('t=folderlist_setting')>-1)
{
reloadLeftWin();
}
else
{

if(/cgi-bin\/(mail_list|readmail)|t=folderlist_setting/.test(dtH))
{
reloadFrmLeftMain(false,true);
}
}
return showInfo(fq);
}
var rJ=getErrMsg(hf,'msg_txt');
showError(rJ||"标签颜色设置失败，请重试");
}
});
};







QMTag.readclose=function(ag,ah)
{
var ax=getEventTarget(ag),
cu;
while(ax)
{
cu=ax.className;
if(/closeTag(Side)?Div/.test(cu))
{


QMTag.rmTag(ax.getAttribute('tid2'),ah);
return true;
}
else if(cu=='tagbgSpan')
{

readTag(ax.getAttribute('tid2'),ah.oWin,ah.sFid);
return true;
}
ax=ax.parentNode;
}
return false;
};


function readTag(nx,al,xf)
{
xf=xf>100?xf:"all";
goUrlMainFrm(T('/cgi-bin/mail_list?sid=$sid$&tagid=$tagid$&folderid=$folderid$&page=0').replace({
tagid:nx,
folderid:xf,
sid:getSid()
}));




}














function setMailRead(yw,ah)
{
var bQ=ah.oMail,
aO=bQ.length,
Sn=0,
bSm=yw?1:-1,
db=['mailaction=mail_flag&flag=new&status=',yw];
if(!aO)
{
return showError('未选中任何邮件');
}

for(var i=0;i<aO;i++)
{
var eE=bQ[i];
if(eE.bUnr!=yw)
{
if(eE.oChk)
{
eE.oChk.setAttribute('unread',yw?'true':'false');

var Pj=eE.oChk.getAttribute('gid');
setGroupUnread(Pj,getGroupUnread(Pj)+bSm);
}
Sn++;
db.push('&mailid=',eE.sMid);
if(eE.oTable&&!yw)
{

var dUi=GelTags("table",eE.oTable)[0],
nk=dUi.rows[0].cells[1];
if(nk.className=="new_g")
{
nk.innerHTML="";
}
}

for(var Ju=eE.oTagIds,dqg=Ju.length,j=0;j<dqg;j++)
{
var hX='tag_'+Ju[j];
setTagUnread(hX,getFolderUnread(hX)+bSm);
}
if(dqg)
{
setTagUnread('tag',getFolderUnread('tag')+bSm);
}
}
}
QMMailList.selectedUI({oMail:[],oACB:ah.oACB});
if(Sn)
{



Sn=bSm*Sn;
setFolderUnread(ah.sFid,getFolderUnread(ah.sFid)+Sn);
setMailListInfo(getMailListInfo().unread+Sn,null);

var at=ah.oWin;
if(ah.sFid==8)
{


setGroupUnread("gall",getGroupUnread("gall")+Sn);
}


aHs({
db:db,
aGZ:"new successful",
aCW:T(['设置',yw?'未读':'已读','邮件失败，请重试']),
Mg:function(av,cg,hf)
{


var deF=0,
dra=0;
for(var i=0;i<aO;i++)
{
var eE=bQ[i];
if(eE.bUnr!=yw&&eE.bStar)
{
deF++;
}
if(!yw)
{

QMMailCache.addData(eE.sMid);
}
else
{
dra=1;
}
}
if(dra)
{
QMMailCache.setExpire();
}

setFolderUnread("starred",getFolderUnread("starred")+(yw?1:-1)*deF);





if(at.goback)
{
at.goback();
}

}
});
}

}














function starMail(aiC,ah)
{
var bQ=ah.oMail,
aO=bQ.length,
dfC={
fg:0,
'fg fs1':1,
qm_ico_flagoff:2,
qm_ico_flagon:3
},
dXf=['fg','fg fs1','qm_ico_flagoff','qm_ico_flagon'],
db=['mailaction=mail_flag&flag=star'];

if(!aO)
{
return showError('未选中任何邮件');
}
for(var i=0;i<aO;i++)
{
var eE=bQ[i];
db.push('&mailid=',eE.sMid);
if(aiC==null)
{
aiC=!(dfC[eE.oStar.className]&1);
}
}

for(var i=0,jw=0;i<aO;i++)
{
var eE=bQ[i],
XF=eE.oStar;
if(eE.oChk)
{

eE.oChk.setAttribute('star',aiC?'1':'0');
}
if(eE.bStar!=aiC)
{
jw+=eE.bUnr?1:0;
QMMailCache.addData(eE.sMid,{star:aiC});
rdVer(eE.sMid,1);
}
setClass(XF,dXf[(dfC[XF.className]&2)+(aiC?1:0)]);
XF.title=(aiC?'取消':'标为')+'星标';
}
if(jw)
{
setFolderUnread("starred",getFolderUnread("starred")+(aiC?1:-1)*jw);
}

db.push('&status='+aiC);

aHs({
db:db,
aGZ:'star successful',
aCW:(aiC?'标记':'取消')+'星标邮件失败，请重试',
Mg:function(av,cg,hf)
{


QMMailList.selectedUI({oMail:[],oACB:ah.oACB});


if(!callBack(ah.oncomplete,[ah,aiC]))
{
var at=ah.oWin;
if(at.showMailFlag)
{
at.showMailFlag(aiC);

}
}
}
});
}









function moveMailJs(bbr,cnc,chS,ah)
{
if(chS==bbr)
{
return showError(gsMsgMoveMailSameFldErr);
}

var dLz=ah.bML,
bQ=ah.oMail,
aO=bQ.length,
aEi=unikey('mv'),
db=[ah.bML?'&location=mail_list':''],
bEB=bbr=="new",
blv=true,
aRF=false,
bqV=QMMailList.cQS(ah),
dZA=bqV[1],
cHm=bqV[0];

for(var i=aO-1;i>=0;i--)
{
var eE=bQ[i],
BF=eE.oChk;
if(eE.bTms)
{
return showError("请不要选择定时邮件，您不能移动定时邮件。");
}

if(BF&&/^[@C]/.test(BF.value))
{
blv=false;
}
aRF=aRF||eE.bUnr;
db.push('&mailid=',eE.sMid);
}



blv=blv&&chS==1&&aO>1&&cHm&&(bEB||parseInt(bbr)>128)&&
!/(10000|newsletter-noreply|postmaster)@qq.com/g.test(cHm)&&cnc&&cnc!="QQ邮件订阅";

if(blv)
{
db.push('&nick=',dZA,'&addr=',cHm,'&confirm=1&srcfolderid=',chS);
}

ah.oWin[aEi]=1;

var bPo=function()
{

!ah.bIsJump&&showInfo('邮件移动中...',-1);

var bTW=bEB?"已将邮件成功移动":T("已将邮件成功移动 <a href='/cgi-bin/mail_list?sid=$sid$&folderid=$folderid$&page=0' style='color:white' onclick='getTop().hiddenMsg();' target='mainFrame' >[查看]</a>").replace({
sid:getSid(),
folderid:bbr
}),
cjB=callBack(ah.onbeforesend,[{sucMsg:bTW}]);

aHs({
db:db,
aGZ:'mail_move successful',
aCW:'移动邮件失败，请重试',
Mg:function(av,cg,hf)
{
var bES=callBack(ah.oncomplete,[ah,av]);

!(cjB&&bES)&&av.msg&&showInfo(av.msg);

if(ah.oWin[aEi])
{

if(!bES)
{
if(av&&av.url&&!ah.bIsJump)
{
goUrlMainFrm(av.url,true,true);
}
else
{
reloadFrmLeftMain(true,true);
}
}
else
{
QMMailList.selectedUI({oMail:[],oACB:ah.oACB});
aRF&&reloadLeftWin();
}
}
else
{

aRF&&reloadLeftWin();
}
}
});
};


db.push('&mailaction=',dLz&&!aO&&bEB?"onlyaddfolder":"mail_move");
db.push('&destfolderid=',bEB?-1:bbr);
if(bEB)
{
promptFolder({
type:'folder',
onreturn:function(gP){
if(blv)
{
db.push('&destfolder=',gP);
}
db.push('&foldername=',gP);
bPo();
}
});
}
else if(aO)
{
if(blv)
{
db.push('&destfolder=',cnc);
}
bPo();
}
else
{
showError('未选中任何邮件');
}
}










function configPreRmMail(ah,jF)
{
var db=ah.oWin.location.getParams();
if(db['s']=='search'||!ah.bML)
{
return false;
}

var cmR={},
aN=ah,
dVE=aN.onbeforesend,
dVF=aN.oncomplete,
dpe=new QMAjax;
if(db['s']=='star'&&jF=='moveMailJs')
{
cmR.finished=true;
}
else
{
aN.onbeforesend=function(aSx)
{
configPreRmMail.dML(aN,cmR,dpe,aSx);
callBack(dVE,[aSx]);
return true;
};
}
aN.oncomplete=function(ah,aS)
{
callBack(dVF,[ah,aS]);
var drh=!!cmR.finished;
!drh&&dpe.abort();
return drh;
}
return true;
}

















configPreRmMail.dML=function(ah,aS,dSz,aSx)
{
var dts="toarea",
at=ah.oWin,
bQ=ah.oMail,
aO=bQ.length,
dpN=S('nextpage',at),
aK=null,
dbI=null,
bSb=null,
beY=null,
auk=null,
aEi=unikey('rm'),
dmZ=0;
E(SN("mailid",at),function(aH)
{
if(aH.type=="checkbox")
{
dmZ++;
}
}
);
if(dmZ==aO)
{
return false;
}

if(dpN)
{
aK=[dpN.href.replace(/(&|\?)(loc|r|t)=.*?(&|$)/gi,"$1"),'&record=n&t=mail_list_fragment&listcount=',aO,'&r=',Math.random()].join('');
}
at[aEi]=1;

function Xm()
{


var eQ=getMainWin();
if(!eQ[aEi])
{

aS&&(aS.error=true);
return;
}

var bEb=getMailListInfo(),
jw=0;

for(var i=0;i<aO;i++)
{
bEb.totle--;
bQ[i].bStar&&(bEb.star--);
bQ[i].bUnr&&jw++;

var cT=bQ[i].oTable.parentNode,
lF=cT.previousSibling;
if(!lF.tagName||lF.tagName.toLowerCase()!='a')
{
lF=lF.previousSibling;
}
if(!auk)
{
auk=cT;
while((auk=auk.nextSibling)&&auk.className!='list_btline');


beY=auk;
while((beY=beY.previousSibling)&&beY.className!=dts);
}
removeSelf(bQ[i].oTable);

dbI=lF;
bSb=cT;
var Hr=GelTags('span',lF)[0];
Hr.innerHTML=(parseInt(Hr.innerHTML)-1)+" 封";
if(GelTags('table',cT).length==0)
{
removeSelf(lF);
removeSelf(cT);
}


if(bQ[i].oChk&&bQ[i].bUnr)
{

var Pj=bQ[i].oChk.getAttribute('gid');
setGroupUnread(Pj,getGroupUnread(Pj)-1);
}
}
ah.oACB.checked=false;

setMailListInfo(ah.sFid==4?null:bEb.unread-jw,bEb.star,bEb.totle);

if(ah.sFid==8)
{
setGroupUnread("gall",getGroupUnread("gall")-jw);
}
aO&&(aSx||{}).sucMsg&&showInfo(aSx.sucMsg);

if(jw)
{
setFolderUnread(ah.sFid,getFolderUnread(ah.sFid)-jw);
}
}

function aSF(aW,cg)
{
if(aW&&/<!--mail_list_fragment_(\d+)-->\s*$/.test(cg))
{


var eQ=getMainWin(),
duM=parseInt(RegExp.$1)||0;
if(!eQ[aEi])
{

aS&&(aS.error=true);
return;
}
QMMailCache.setExpire();

if(!auk)
{
Xm();
}
if(auk)
{

if(beY==bSb)
{

auk.parentNode.insertBefore(bSb,auk);
auk.parentNode.insertBefore(dbI,bSb);

}

insertHTML(beY,'beforeEnd',cg);

var lF=beY.previousSibling;
if(!lF.tagName||lF.tagName.toLowerCase()!='a')
{
lF=lF.previousSibling;
}
var Hr=GelTags('span',lF)[0];
Hr.innerHTML=(parseInt(Hr.innerHTML)+duM)+" 封";


var bYx=SN("mailid",eQ);
for(var i=bYx.length-1;i>=0;i--)
{
if(bYx[i].getAttribute('init')!="true"&&bYx[i].type=='checkbox')
{
MLIUIEvent(bYx[i],at,ah.sFid);
}
}
aS&&(aS.finished=true);

}
}
else
{
aS&&(aS.error=true);
}
}

if(aK)
{


Xm();

QMAjax.send(aK,
{
method:'GET',
onload:aSF
},dSz
);
}
else
{
aSF(true,'<!--mail_list_fragment_0-->');
}

return true;
};










function rmMail(dN,ah)
{
var bTW="已将邮件成功删除",
bQ=ah.oMail,
aO=bQ.length,
mK=ah.sFid,
cwZ=0,
aEi=unikey('rm'),
db=['mailaction=mail_del',ah.bML?'&location=mail_list':''];

if(!aO)
{
showError(gsMsgNoMail);
return false;
}

if(dN==1)
{
var dTv=confirm("彻底删除后邮件将无法恢复，您确定要删除吗？");
if(!dTv)
{
return false;
}
db.push('&Fun=PerDel');
}





if(ah.bPop&&getGlobalVarValue("POP_PROPOSE"))
{
confirmBox({
title:"邮箱功能推荐",
mode:"prompt",
msg:T([
'<div style="margin-top:8px" class="bold">在$dn$邮箱中删除邮件，同时也删除原邮箱中的对应邮件?</div>',
'<div class="addrtitle" style="margin:4px 0 0 0;">',
'您也可以进入“修改设置”中设置。',
'<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=26&&no=326" target="_blank" >了解详请</a>',
'</div>'
]).replace(
{
dn:getDomain(true)
}
),
onreturn:function(aW)
{
if(aW)
{
runUrlWithSid(T("/cgi-bin/foldermgr?fun=updpop&updflag=22&folderid=$folderid$").replace({
folderid:mK
}
));
showInfo('设置成功！并将当前选中邮件删除。');

}
}
});
}


for(var i=0;i<aO;i++)
{
var eE=bQ[i];
db.push('&mailid=',eE.sMid);
cwZ=eE.bUnr||cwZ;
}
if(getMainWin().newwinflag==1)
{
db.push('&newwin=',"true");
}
showInfo('邮件删除中...',-1);
ah.oWin[aEi]=1;

var cjB=callBack(ah.onbeforesend,[{sucMsg:bTW}]);

aHs({
db:db,
aGZ:'mail_del successful',
aCW:'删除邮件失败，请重试',
Mg:function(av,cg,hf)
{
var aK=av.url,
bES=callBack(ah.oncomplete,[ah,av]);






!(cjB&&bES)&&showInfo(bTW);
if(!bES&&ah.oWin[aEi])
{
ah.oWin.location.href=aK;
}
if(cwZ)
{
reloadLeftWin();
}
}
});

return true;
}














function initMailSelect(ciD,cWJ,dNC,al,hg,dNP,dNO)
{
var aYU=BaseMailOper,
aN={
sFolderid:hg,
bReadMode:cWJ&&hg!=4,
bStarMode:cWJ,
bAutoTag:dNP||false,
bTagMode:dNC&&hg!=5&&hg!=6,
dCa:ciD,
bSpam:dNO||false,
oWin:al
},
Ob=aYU.dMy(aN);

aN=Ob.getConfig();


if(ciD)
{
E(SN("selmContainer",al),function(ak){
if(!ak.innerHTML)
{
new QMSelect({
oContainer:ak,
nWidth:80,
sDefaultItemValue:"移动到...",
oMenu:{
nWidth:"auto",
nMaxWidth:180,

bAutoItemView:true,
bAutoClose:true,
oItems:ciD
},
onafteropenmenu:function(iG,aCi){
var eE;
if(aN.aWQ==0)
{

eE=QMMailList.getCBInfo(aN.oWin);
}
else
{


eE=aN.oWin.QMReadMail.getCBInfo(aN.oWin);
}

Ob.setMailInfo(eE);
},
onselect:function(bq){


Ob.apply(bq.sId,bq.sItemValue);
return true;
}
});
}
});
}


function cFD()
{
var bz=[],
aaY={nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:5px; overflow:hidden;"></div>'},
chP=T([
'<div style="white-space:nowrap;zoom:1;">',
'<input type="button" class="item_square flagbg$flagbg$"/>',
'<span class="item_square_txt">$name$ &nbsp</span>',


'</div>']);

if(aN.bReadMode)
{
bz.push(
{sId:"read",sItemValue:"已读邮件"},
{sId:"unread",sItemValue:"未读邮件"},
aaY
);
}
if(aN.bStarMode)
{
bz.push(
{sId:"star",sItemValue:"星标邮件"},
{sId:"unstar",sItemValue:"取消星标"}
);
if(aN.bTagMode)
{
bz.push(aaY);
}
}
if(aN.bTagMode)
{
bz.push(
{
sId:'rmalltag',
sItemValue:'取消标签'
},
extend({bDisSelect:true,sId:'deltaghr'},aaY)
);
for(var bpY=QMTag.get(),i=0,aO=bpY.length;i<aO;i++)
{
var rD=bpY[i];
bz.push(
{
sId:'tid_'+rD.id,
sItemValue:chP.replace(rD)
}
);
}
if(aO)
{
bz.push(aaY);
}
bz.push({
sId:'newtag',
sItemValue:'新建标签'
});

if(aN.bAutoTag)
{
bz.push(aaY,{
sId:'autotag',
sItemValue:'新建自动标签'
});
}
}
return bz;
}


E(SN("markContainer",al),function(ak){
if(ak.innerHTML)
{
return;
}
if(!(aN.bReadMode||aN.bStarMode||aN.bTagMode))
{
show(ak,false);
return;
}
new QMSelect({
oContainer:ak,
nWidth:80,
sDefaultItemValue:"标记为...",
oMenu:{
nWidth:"auto",
nMaxWidth:180,

bAutoItemView:true,
bAutoClose:true,
oItems:[]
},
onselect:function(bq){
var iG=this.get("menu");

Ob.apply(bq.sId,bq.sItemValue);
iG.hide();

return true;
},

onbeforeopenmenu:function(cRa)
{
aN.egf=aN.bTagMode?QMTag.get():[];
cRa.sDefaultId="";
cRa.oItems=cFD();
},

onafteropenmenu:function(iG){
var eE;

if(aN.aWQ==0)
{

eE=QMMailList.getCBInfo(aN.oWin);
var bHv=eE.oMail.length;
iG.itemOption("rmalltag","bDisplay",bHv);
iG.itemOption("deltaghr","bDisplay",bHv);
}
else
{


eE=aN.oWin.QMReadMail.getCBInfo(aN.oWin);
}

Ob.setMailInfo(eE);
}
});
});
}

function navRightMenu(cy,ag)
{
var aL=cy.ownerDocument,
at=aL.defaultView||aL.parentWindow,
MJ=ag.clientX+bodyScroll(at,'scrollLeft'),
MK=ag.clientY+bodyScroll(at,'scrollTop'),
ax=getEventTarget(ag),
xv,
cWt,
ehI=false,
egD=false,
nD=
{
bTe:{sId:"open",sItemValue:'打开',oUrl:T("/cgi-bin/mail_list?sid=$sid$&s=unread&folderid=personal&flag=new&page=0&stype=myfolders&topmails=0")},
aju:{nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:5px; overflow:hidden;"></div>'},
eaH:{sId:"writegroupmail",sItemValue:'写群邮件'},
dwO:{sId:"readrecord",sItemValue:'翻阅所有记事'},
dwN:{sId:"readnew",sItemValue:'查看未读'},
eaF:{sId:"writemessage",sItemValue:'写短消息'},
dDS:{sId:"checkmailing",sItemValue:'查询投递状态'},
dyP:{sId:"emptydel",sItemValue:'清空已删除'},
aVq:{sId:"mark",sItemValue:'全部标为已读'},
cMr:{sId:"createtag",sItemValue:'新建标签'},
bSY:{sId:"setting",sItemValue:'设置'},
dHT:{sId:"hide",sItemValue:'隐藏此应用'},
duJ:{sId:"show",sItemValue:'显示此应用'},
dvL:{sId:"showhide",sItemValue:'应用管理'},
dCX:{sId:"createremind",sItemValue:'新建提醒'},
bTc:{sId:"upload",sItemValue:'上传文件'},
dCg:{sId:"addsubscription",sItemValue:'添加订阅'},
dIl:{sId:"managegroupmail",sItemValue:'群邮件管理'},
dDR:{sId:"checkunanswered",sItemValue:'查询未被回复状态'},
dzy:{sId:"delinquiry",sItemValue:'删信查询'},
dyN:{sId:"emptytrash",sItemValue:'清空垃圾箱'},
dIh:{sId:"managesubscription",sItemValue:'订阅管理'},
eaG:{sId:"writelog",sItemValue:'写记事'},
eaI:{sId:"writedaily",sItemValue:'写日志'},
dwW:{sId:"revievedinquiry",sItemValue:'收信查询'},
dxo:{sId:"report",sItemValue:'举报查询'},
dDa:{sId:"createfolder",sItemValue:'新建文件夹'},
dCY:{sId:"createmailbox",sItemValue:'新建其他邮箱'},
dIn:{sId:"managefolder",sItemValue:'文件夹管理'},
dIk:{sId:"managemailbox",sItemValue:'其他邮箱管理'},
dzA:{sId:"delfolder",sItemValue:'删除文件夹'},
cYZ:{sId:"managetag",sItemValue:'标签管理'},
dbz:{sId:"recieverecord",sItemValue:'收取记录'},
dzx:{sId:"delmailbox",sItemValue:'删除此邮箱'},
cAb:{sId:"mailboxsetting",sItemValue:'修改设置'}
},
tL=
{
TA:[nD.bTe,nD.aju],
dHL:[nD.eaH,nD.aVq,nD.aju],
dGc:[nD.bTe,nD.dwO,nD.aju],
aef:[nD.dwN,nD.aVq,nD.aju],
dvi:[nD.dDS,nD.dDR],
dzF:[nD.dyP,nD.dzy],
dYL:[nD.aVq,nD.dyN,nD.aju,nD.dxo],
dIo:[nD.aVq,nD.dIh],
duX:[nD.cMr,nD.cYZ],
efK:[nD.cMr,nD.aju],
bSY:[nD.bSY,nD.aju],
cAb:[nD.cAb,nD.aju],
dxR:[nD.dCX,nD.aju],
dGd:[nD.eaG,nD.aju],
bTc:[nD.bTc,nD.aju],
dtk:[nD.dCg,nD.eaI,nD.aVq,nD.aju],
cQd:[nD.dDa,nD.dIn],
cZb:[nD.dCY,nD.dIk,nD.aju]
},
ctG=
{
"1":{oMenu:tL.TA.concat(tL.aef).concat([nD.dwW]),sName:"recievebox"},
"starred":{oMenu:[nD.bTe],sName:"starred"},
"9":{oMenu:tL.TA.concat([nD.eaF]),sName:"message"},
"8":{oMenu:tL.TA.concat(tL.dHL).concat([nD.dIl]),sName:"groupmail"},
"4":{oMenu:[nD.bTe],sName:"draftbox"},
"3":{oMenu:tL.TA.concat(tL.dvi),sName:"sended"},
"5":{oMenu:tL.TA.concat(tL.dzF),sName:"deleted"},
"6":{oMenu:bz=tL.TA.concat(tL.dYL),sName:"trashbox"},
"personal":{oMenu:tL.TA.concat(tL.aef).concat(tL.cQd),sName:"personal"},
"pop":{oMenu:tL.TA.concat(tL.aef).concat(tL.cZb).concat([nD.dbz]),sName:"pop"},
"tag":{oMenu:tL.TA.concat(tL.duX),sName:"tag"},
"11":{oMenu:tL.TA.concat(tL.bSY),sName:"plp"},
"card":{oMenu:tL.TA,sName:"card"},
"postcard":{oMenu:tL.TA,sName:"postcard"},
"reminder":{oMenu:tL.TA.concat(tL.dxR),sName:"reminder"},
"note":{oMenu:tL.dGc.concat(tL.dGd),sName:"note"},
"ftn":{oMenu:tL.TA.concat(tL.bTc),sName:"ftn"},
"mydisk":{oMenu:tL.TA.concat(tL.bTc),sName:"mydisk"},
"reader":{oMenu:tL.TA.concat(tL.dtk).concat(tL.bSY),sName:"reader"},
"morefunction":{oMenu:[nD.dvL],sName:"morefunction"},
"bookfolders":{oMenu:tL.TA.concat(tL.dIo),sName:"bookfolders"},
"personalfolders":{oMenu:tL.TA.concat(tL.aef).concat(tL.cQd).concat([nD.dzA]),sName:"personalfolders"},
"popfolders":{oMenu:tL.TA.concat(tL.aef).concat(tL.cZb).concat([nD.dzx,nD.cAb,nD.dbz]),sName:"popfolders"},
"tagfolders":{oMenu:tL.TA.concat([nD.cMr,nD.aju,nD.cYZ]),sName:"tagfolders"}
},
biu=
{
"readnew":TE('/cgi-bin/mail_list?sid=$sid$&s=unread&folderid=$menuid$&flag=new&page=0&topmails=0&stype=$@$if($menuid$=="personal")$@$myfolders$@$else if($menuid$=="pop")$@$myotherinbox$@$endif$@$'),
"writegroupmail":T("/cgi-bin/grouplist?t=compose_group&sid=$sid$&newwin="),
"managegroupmail":T("/cgi-bin/grouplist?sid=$sid$&t=setting_group&oper=list"),
"checkmailing":T("/cgi-bin/help_static_send?sid=$sid$"),
"checkunanswered":T("/cgi-bin/mail_list?sid=$sid$&folderid=3&daterange=5&collolimit=0&combinetype=and&t=help_static_unreply"),
"revievedinquiry":T("/cgi-bin/help_static_receive?sid=$sid$"),
"delinquiry":T("/cgi-bin/help_static_delete?sid=$sid$"),
"report":T("/cgi-bin/help_report_spam?sid=$sid$"),
"managesubscription":T("/cgi-bin/setting10?action=list&t=setting10&sid=$sid$"),
"writelog":T("/cgi-bin/cataloglist?sid=$sid$&t=note_edit_show&catid="),
"writedaily":T("/cgi-bin/readtemplate?sid=$sid$&t=compose&s=SendToQZone&entrance=rss"),
"writemessage":T("/cgi-bin/readtemplate?sid=$sid$&t=sms_list_v2&go=compose"),
"createremind":T("/cgi-bin/reminder_list?t=remind&sid=$sid$&sorttype=create&filter=1&fn=1&loc=folderlist,,,39&pageaction=createremind"),
"readrecord":T("/cgi-bin/note_list?sid=$sid$&catid=0"),
"createmailbox":T("/cgi-bin/foldermgr?sid=$sid$&fun=detailpop&t=pop_detail&acctid=0"),
"folder":TE('/cgi-bin/folderlist?t=folderlist_setting&s=null&sid=$sid$&jump=myfolders&info=true$@$if($itemid$=="managetag")$@$#mytagdiv$@$endif$@$'),
"mailbox":T("/cgi-bin/folderlist?t=poplist_setting&s=null&sid=$sid$"),
"showhide":T("/cgi-bin/foldermgr?sid=$sid$&fun=showfldflags&t=setting_folder"),
"addsubscription":T("http://r.mail.qq.com/cgi-bin/reader_main?sid=$sid$&t=r_index&source=folderlist&hash=search%3Fkeyworkd%3D"),
"recieverecord":T("/cgi-bin/help_static_pop?sid=$sid$&domain=$etitle$"),
"mailboxsetting":T("/cgi-bin/foldermgr?sid=$sid$&fun=detailpop&t=pop_detail&folderid=$menuid$&acctid=$acctid$&s=maillist"),
"upload":
{
"ftn":T("/cgi-bin/ftnExs_files?sid=$sid$&t=exs_ftn_files&page=0&pagesize=20&filetype=0&listtype=self&autostart=1"),
"mydisk":T("/cgi-bin/ftnList?sid=$sid$&t=exs_ftn_mydisk&listtype=mydisk&bus=6&list=0&display=list&autostart=1")
},
"setting":
{
"reader":T("http://r.mail.qq.com/cgi-bin/reader_main?sid=$sid$&t=r_index&source=folderlist&hash=setting/general"),
"11":T("/cgi-bin/bottle_panel?sid=$sid$&t=bottle&loc=folderlist,,,33&func=setting")
}
},
bz=[];

while(ax.tagName!="LI"&&ax.tagName!="BODY")
{
var bqu=ax.id,
cI=ax.parentNode;
if(bqu.match(/folder_.*/))
{
var bCG;
cWt=ax.getAttribute("etitle");
xv=bqu.replace("folder_","").replace("_td","");
bCG=ctG[xv]?ctG[xv]:ctG[ax.getAttribute("name")+"folders"];
bz=bCG?bCG["oMenu"]:[];
cTu=bCG?bCG["sName"]:"";
ax=cI.tagName=="LI"?cI:ax;
break;
}
else
{
ax=cI;
}
}

if(bz&&bz.length>0)
{
var cI=ax.parentNode,
aCl=cI.id;

if(aCl=="morefunctionfolders")
{
bz=bz.concat([nD.duJ]);
}
else if(aCl=="my_note"||cI.tagName=="SPAN")
{
bz=bz.concat([nD.dHT]);
}

ossLog("delay","all","stat=right&menuid="+cTu);

var iG=new QMMenu({
sId:xv,
oEmbedWin:at,

nWidth:"auto",
nMaxWidth:180,
nMaxItemView:14,
sClassName:"qmpanel_shadow",
bAnimation:false,
bAutoClose:true,
oItems:bz,

onitemclick:function(aJ,cPX){
var bS,
aK="",
cUW="",
ja=getTop().getMainWin().location;

ossLog("delay","all","stat=right&menuid="+cTu+"&opr="+aJ);
switch(aJ)
{
case"open":
var aV=S("folder_"+xv);

fireMouseEvent(aV,"mousedown");
fireMouseEvent(aV,"click");
break;
case"mark":
if(xv=="reader")
{
var eS=aL.createElement("form");

eS.action=gsRssDomain+"/cgi-bin/reader_mgr?fun=setfeedread&type=all&sid="+getSid();
eS.method="post";
eS.target="actionFrame";
aL.body.appendChild(eS);
eS.submit();

setRssUnread(0,0);

getTop().showInfo("阅读空间标为已读操作成功");
if(S("folder_reader_td").className=="fn")
{
reloadFrm(getTop().getMainWin());
}
}
else
{
QMAjax.send("/cgi-bin/mail_mgr?mailaction=read_all&t=unreadmail_reg_data",
{
method:"POST",
content:T('sid=$sid$&folderid=$folderid$').replace(
{
sid:getSid(),
folderid:xv
}
),
onload:function(aW,cg)
{
if(aW)
{
var Qo=S("folder_"+xv+"_td"),
FI=Qo.parentNode;

reloadLeftWin();

if(Qo.className=="fn"||
(FI.id=="personalfolders"&&S("folder_personal_td").className=="fn")||
(FI.id=="popfolders"&&S("folder_pop_td").className=="fn"))
{
reloadFrm(getTop().getMainWin());
getTop().showInfo("文件夹标为已读操作成功");
}

if(xv=="personal"||xv=="pop")
{
var att=S(xv+"folders").getElementsByTagName("LI");

for(var i=0;i<att.length;i++)
{
if(att[i].className=="fn")
{
reloadFrm(getTop().getMainWin());
getTop().showInfo("文件夹标为已读操作成功");
break;
}
}
}

}
}
}
);
}
break;
case"emptydel":
case"emptytrash":
var lF=S("folder_"+xv).nextSibling;

lF=lF.tagName=="A"?lF:lF.nextSibling;
if(lF)
{
fireMouseEvent(lF,"click");
}
break;
case"createtag":
QMTag.newMailTag();
break;
case"createfolder":
moveMailJs('new','',"",{bML:true,oMail:[],oWin:[],bIsJump:true});
break;
case"managefolder":
case"managetag":
case"delfolder":
bS=biu["folder"];
break;
case"managemailbox":
case"delmailbox":
bS=biu["mailbox"];
break;
case"show":
case"hide":
case"morefunction":
bS=biu["showhide"];
break;
case"upload":
getTop().setUserCookie('ftAutoStart',1);
getTop().ftSendStatic('1106',getUin());
bS=biu["upload"][xv];
break;
case"setting":
bS=biu["setting"][xv];
break;
case"mailboxsetting":
cUW=S("folder_"+xv).getAttribute("acctid");
bS=biu[aJ];
break;
case"createremind":
getTop().setUserCookie('ftAutoStart',1);
getTop().ftSendStatic('1106',getUin());
default:
bS=biu[aJ];
}

if(bS)
{
aK=bS.replace(
{
sid:getSid(),
menuid:xv,
itemid:aJ,
etitle:cWt,
acctid:cUW
}
);
switchFolder("folder_"+xv);
ja.href=aK;
}
},

onload:function(){

var Lf=this;
if(Lf.option("sId")==xv)
{
var	dg=parseInt(Lf.option("nHeight")),
cF=parseInt(Lf.option("nWidth")),
cM=calcAdjPos([MK,MJ,MK,MJ],cF,dg,at,1);
Lf.option("nX",cM[3]).option("nY",cM[0]);
}
}
});


if(xv!="reader"&&!ax.getElementsByTagName("B").length)
{
iG.itemOption("readnew","bDisSelect",true);
iG.itemOption("mark","bDisSelect",true);
}
else if(xv=="reader")
{
var cu=S("folder_reader").className;

if(!cu.match(/bold/)||cu.match(/normal/))
{
iG.itemOption("mark","bDisSelect",true);
}
}

if(ax.getElementsByTagName("A").length<2)
{
iG.itemOption("emptydel","bDisSelect",true);
iG.itemOption("emptytrash","bDisSelect",true);
}

var djS=ax.getElementsByTagName("IMG");
if(djS.length>0&&djS[0].src.match(/ico_pwd/))
{
iG.itemOption("readnew","bDisSelect",true);
iG.itemOption("mark","bDisSelect",true);
iG.itemOption("createfolder","bDisSelect",true);
iG.itemOption("createmailbox","bDisSelect",true);
iG.itemOption("recieverecord","bDisSelect",true);
}
}
preventDefault(ag);
}

function mailRightMenu(cy,ag)
{
var aL=cy.ownerDocument,
at=aL.defaultView||aL.parentWindow,
MJ=ag.clientX+bodyScroll(at,'scrollLeft'),
MK=ag.clientY+bodyScroll(at,'scrollTop'),
aYU=BaseMailOper,
Ob=aYU.getInstance(at),
aDT=GelTags('input',cy)[0],
dsb=aDT.checked==true;

if(!Ob)
{
return;
}

if(!dsb)
{

QMMailList.selectedUI({oMail:[]});
}

ossLog("delay","all","stat=right");
aDT.checked=true;
var aN=Ob.dk;

function cFD(Ie)
{
var bz=[],
biE=[],
ehF=[],
jw=0,
bQ=Ie.oMail,
bTI=bQ.length,
aaY={nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:5px; overflow:hidden;"></div>'},
chP=T([
'<div style="white-space:nowrap;zoom:1;">',
'<input type="button" class="item_square flagbg$flagbg$"/>',
'<span class="item_square_txt">$name$ &nbsp</span>',


'</div>']);

if(bTI==1)
{

bz.push(
{
sId:"preview",
sItemValue:'<div class="right"><img src="/zh_CN/htmledition/images/spacer.gif" class="arrow_meunico" /></div>预览',
oSubMenu:{
sClassName:'rightpre qmpanel_shadow',
nWidth:450,

oItems:[{
nHeight:350,
sItemValue:T('<div scroll="true" id="pre" style="height:350px;width:430px;overflow-x:hidden;overflow-y:auto;"><div style="*margin:100px 0 0 0;height:64px;text-align:center;width:100%;"><center><img src="$images$ico_loading2.gif"/></center></div></div>').replace({
images:getPath("image")
})
}],

onload:function(){
var dQE=this,
bF=Ie.oMail[0].sMid;
QMAjax.send(T('/cgi-bin/readmail?sid=$sid$&folderid=$f$&t=quickreadmail&mailid=$m$&mode=preview&maxage=3600&ver=$v$').replace({
v:rdVer(bF,0),
sid:getSid(),
f:Ie.sFid,
m:bF
}),{
method:'GET',
onload:function(aW,cg,hf){
if(aW)
{
ossLog("delay","all","stat=right&opr=preview");
var aNM=dQE.S('pre');
if(aNM)
{
aNM.style.lineHeight=1;
aNM.innerHTML=filteScript(cg).replace(/<style ?.*>[\s\S]*?<\/style>/ig,"");
swapLink(aNM,"preview",aNM.ownerDocument);
}
}
}
});
}
}
},
aaY
);
}


for(var i=0;i<bTI;i++)
{
jw+=bQ[i].bUnr?1:0;
}
























if(Ie.sFid!=5&&Ie.sFid!=6)
{
bz.push({sId:"delmail",sItemValue:'删除'});
}
else
{
bz.push({sId:"predelmail",sItemValue:'彻底删除'});
}

if(aN.bSpam&&Ie.sFid!=6)
{
bz.push({sId:"spammail",sItemValue:"这是垃圾邮件"});
}

bz.push(aaY);
if(jw)
{
bz.push({sId:"read",sItemValue:"标记为已读"});
}
if(jw!=bTI)
{
bz.push({sId:"unread",sItemValue:"标记为未读"});
}
if(aN.bTagMode)
{
var dpR=0;
for(var i=0;i<bTI;i++)
{
if(bQ[i].oTagIds.length)
{
dpR=true;
break;
}
}
if(dpR)
{
biE.push(
{
sId:'rmalltag',
sItemValue:'取消标签'
},
extend({bDisSelect:true,sId:'deltaghr'},aaY)
);
}
for(var bpY=QMTag.get(),i=0,aO=bpY.length;i<aO;i++)
{
var rD=bpY[i];
biE.push(
{
sId:'tid_'+rD.id,
sItemValue:chP.replace(rD)
}
);
}
if(aO)
{
biE.push(aaY);
}
biE.push({
sId:'newtag',
sItemValue:'新建标签'
});

if(aN.bAutoTag)
{
biE.push(aaY,{
sId:'autotag',
sItemValue:'新建自动标签'
});
}
bz.push({
sId:"mark",
sItemValue:'<div class="right"><img src="/zh_CN/htmledition/images/spacer.gif" class="arrow_meunico" /></div>标签',
oSubMenu:{
oItems:biE
}
}
);
}

bz.push({
sId:"move",
sItemValue:'<div class="right"><img src="/zh_CN/htmledition/images/spacer.gif" class="arrow_meunico" /></div>移动到',
oSubMenu:{
oItems:aN.dCa
}
}
);

return bz;
}

var eE;


if(aN.aWQ==0)
{

eE=QMMailList.getCBInfo(aN.oWin);
QMMailList.selectedUI(eE);
}
else
{

eE=aN.oWin.QMReadMail.getTag();
}

Ob.setMailInfo(eE);

var bZE=null,
xv=unikey(),
iG=new QMMenu({
sId:xv,
oEmbedWin:at,

nWidth:"auto",
nMaxWidth:180,
nMaxItemView:14,
sClassName:"qmpanel_shadow",
bAnimation:false,
bAutoClose:true,
oItems:cFD(eE),

onitemclick:function(aJ,cPX){
ossLog("delay","all","stat=right&opr="+aJ);
Ob.apply(bZE=aJ,cPX.sItemValue);
},

onbeforeclose:function(){
if(this.dk.sId==xv)
{
if(!dsb&&(bZE==null||'|spammail|new|newtag|autotag|'.indexOf(bZE)<0))
{
try
{

aDT.checked=false;
var bEa=QMMailList.getCBInfo(at);
QMMailList.selectedUI(bEa);
}
catch(e)
{
}
}
bZE=null;
}
return true;
},

onload:function(){
var Lf=this;
if(Lf.option("sId")==xv)
{
var	dg=parseInt(Lf.option("nHeight")),
cF=parseInt(Lf.option("nWidth")),
cM=calcAdjPos([MK,MJ,MK,MJ],cF,dg,at,1);
Lf.option("nX",cM[3]).option("nY",cM[0]);
}
}
});

if(aN.aWQ==0)
{
var bHv=eE.oMail.length;
iG.itemOption("rmalltag","bDisplay",bHv);
iG.itemOption("deltaghr","bDisplay",bHv);
}
}













QMIme=
{


dHc:"//ime.qq.com/fcgi-bin/getjs ",
cLL:{"ime-cfg":"lt=102"},

aaM:function(pD)
{
return!!window.QQWebIME&&(pD?QQWebIME[pD]:false);
},

hP:function(ao)
{
var vG=S("imeIcon");
vG&&(setClass(vG,vG.getAttribute("css")+ao)
.title=vG.getAttribute(ao));
setUserCookieFlag("CCSHOW",4,{on:4,off:3}[ao]);
},

bjF:function(ao)
{
if(this.aaM("set"))
{
QQWebIME.set(ao);
this.dIj().hP(ao);
return true;
}
return false;
},

dIj:function()
{
var ad=this;
if(ad.aaM("event")&&!QQWebIME["_setevt_"])
{
QQWebIME["_setevt_"]=true;
QQWebIME.event("on",function(){ad.hP("on");});
QQWebIME.event("off",function(){ad.hP("off");});
}
return ad;
},



ison:function()
{
return this.aaM('get')&&QQWebIME.get('on');
},



load:function(aph)
{
var ad=this;
loadJsFile(ad.dHc,true,document,function()
{
callBack.call(ad,aph,[ad.bjF("on")]);
},
ad.cLL
);
},



panel:function(Ua,ebS,bkD)
{
var iA=S("imePanel"),
bHZ=Ua!==false,
dgm=bHZ?3:1;
bkD&&this.hP("off");
!bHZ&&this.off();
show(iA,bHZ);
if(!bkD&&getUserCookieFlag("CCSHOW")[4]!=dgm)
{
setUserCookieFlag("CCSHOW",4,dgm);
ossLog("realtime","all","loc=py,"+(bHZ?"on":"off")+",0");
}
bHZ&&ebS!==false&&this[bkD?"load":"on"]();
return!!iA;
},



off:function()
{
return this.bjF("off");
},



on:function()
{
var ad=this;
!ad.bjF("on")&&(showProcess(1,0,'正在加载云输入法模块...','',false)||ad.load(
function(aW)
{
(aW?showInfo:showError)(
["云输入法",aW?"成功启动"
:"启动失败 - <a href='http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=10000&&no=1000561' target='_blank'>帮助</a>"].join(""));
}
));
},



toggle:function()
{
this.ison()?this.off():this.on();
}
};

var gnQmToolLoad=new Date().getTime()-dYY;




function qmtool_js(){}
