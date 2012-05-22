(function(al)
{
if(al.QMSlideBox)
{
return;
}

al.QMSlideBox=
{



close:function()
{
var ad=this;
ad.cRt().bMH().kG().dPh();
},











setImages:function(cXh)
{
var ad=this;
if(cXh)
{
ad.dog=cXh;
}
return ad;
},






show:function(afL,clO,biF)
{
var ajE=parseInt(afL);
return this.dEk(clO)
.ye()
.btb(1)
.czT(isNaN(ajE)?0:ajE,biF)
.bMH().AO();
},


eJ:
{

dzI:2,

dEE:1
},



dog:{},

bVV:0,
bWv:[],
blV:{},

bjp:99999999,
bjr:-1,

dsa:{},
cHK:{},

dlZ:1,

doR:"",
aIe:-1,



ddL:function(daS)
{
var ad=this,
aTL=ad.bWv,
blV=ad.blV,
dOg=ad.dsa,
ecU=ad.cHK,
cKa=aTL[daS],
bt;
if(bt=ad.bMH().bSn(cKa))
{
(bt.error?ecU:dOg)[cKa]=bt;
delete blV[cKa];
aTL.splice(daS,1);
}

return ad;
},

ye:function()
{
var ad=this;
ad.bjp=99999999;
ad.bjr=-1;
ad.cHK={};
return ad;
},

bfe:function()
{
var ad=this;
return ad.dog[ad.doR];
},

bTJ:function()
{
var ad=this;
return ad.bSn(ad.cHh());
},

cHh:function()
{
var ad=this;
return ad.cNB(ad.aIe);
},

dpt:function()
{
var ad=this;
return{
cur:ad.aIe+1,
total:ad.bfe().length
};
},

cNB:function(afL)
{
var kH=this.bfe();
return kH&&kH[afL];
},

bSn:function(mx)
{
return this.dsa[mx]||this.cHK[mx];
},

dYQ:function()
{
var ad=this,
dG={};

dG.yC=function()
{
ad.close();
};
dG.dOs=function()
{
ad.btb(-1).czT(ad.aIe-1);
};
dG.dOq=function()
{
ad.btb(1).czT(ad.aIe+1);
};

return dG;
},

bMH:function()
{
var ad=this,
XK=ad.dYD;
if(!XK.dGp())
{
XK.dIB(ad.dYQ()).dHP().dGV();
}
return XK;
},

bUf:function()
{
var ad=this;
return ad.aIe<(ad.bfe()||[]).length-1;
},

bUe:function()
{
return this.aIe>0;
},

dGt:function(mx)
{
return this.blV[mx];
},

bTC:function()
{
return this.bVV>0;
},

dND:function()
{
var ad=this,
dij=ad.eJ.dzI||1,
ajE=ad.aIe,
dkb=ad.bfe().length,
cxs=ad.btb(),
dgO;

for(var i=1;i<=dij&&ajE>=0&&ajE<dkb;i++)
{
ad.bRJ(ajE);
ajE=(dgO=ajE)+cxs*i*(i%2?1:-1);
}
ajE=dgO+(cxs=ajE<0?1:-1);
for(var j=0,aO=dij-i;j<=aO&&ajE>=0&&ajE<dkb;j++)
{
ad.bRJ(ajE);
ajE+=cxs;
}

return ad;
},

bRJ:function(afL)
{
var ad=this,
aBU=ad.cNB(afL);

if(!ad.bTC())
{
ad.dAT();
}

if(afL<ad.bjp)
{
ad.bjp=afL;
}
if(afL>ad.bjr)
{
ad.bjr=afL;
}

if(aBU&&!ad.bSn(aBU)&&!ad.dGt(aBU))
{

var aTL=ad.bWv,
dwB=aTL.push(aBU)-1;

ad.blV[aBU]=now();
ad.ddL(dwB);
}

return ad;
},

cTU:function(wY)
{
var ad=this,
bU=ad.bjr+1,
awh=ad.bfe().length,
dif=bU+wY,
aZV=dif-awh;

for(var aZx=aZV>0?awh:dif;bU<aZx;bU++)
{
ad.bRJ(bU);
}

return aZV>0&&ad.bjp>0?ad.cSK(aZV):ad;
},

cSK:function(wY)
{
var ad=this,
bU=ad.bjp-1,
aZV=wY-bU-1;

for(var mj=aZV>0?-1:(bU-wY);bU>mj;bU--)
{
ad.bRJ(bU);
}

return aZV>0&&ad.bjr<ad.bfe().length
?ad.cTU(aZV):ad;
},

dEk:function(clO)
{
var ad=this;
ad.doR=clO;
return ad.aVW(-1);
},

aVW:function(afL)
{
var ad=this;
ad.aIe=afL;
return ad;
},

czT:function(afL,biF)
{
var ad=this;

if(ad.aIe!=afL&&ad.cNB(afL))
{
ad.aVW(afL)
.dND()
.bMH()
.ebH(ad.bUe())
.ebI(ad.bUf())
.fX(ad.cHh(),
ad.bTJ(),
ad.dpt(),
biF);
}

return ad;
},

dAT:function()
{
var ad=this;
if(!ad.bTC())
{
ad.bWv=[];
ad.blV={};
ad.bVV=setInterval(function()
{
var aTL=ad.bWv,
dyc=aTL.length,
dTc=!ad.bTJ(),
bt;

for(var i=dyc-1;i>=0;i--)
{
ad.ddL(i);
}

if(dTc&&ad.bTJ())
{
ad.dCJ();
}

var dhZ=aTL.length,
cEj=ad.eJ.dEE-dhZ;
if(dhZ==0
&&ad.bjp<=0
&&ad.bjr>=ad.bfe().length-1)
{
ad.cRt();
}
else if(cEj>0)
{
ad.btb()>0
?ad.cTU(cEj)
:ad.cSK(cEj);
}
},
500
);
}
return ad;
},

cRt:function()
{
var ad=this;
if(ad.bTC())
{
clearInterval(ad.bVV);
ad.bVV=0;
}
return ad;
},

btb:function(cXU)
{
var ad=this;
if(typeof cXU=="number")
{
ad.dlZ=cXU>0?1:-1;
return ad;
}
else
{
return ad.dlZ;
}
},

dCJ:function()
{
var ad=this,
uo=ad.bTJ();
if(uo&&ad.bTC())
{
ad.bMH().fX(
ad.cHh(),
uo,
ad.dpt());
}
return ad;
}
};

al.QMSlideBox.dYD=
{
eJ:
{
gg:"QmSLiDEboXV3",
dGQ:20,
dZO:50,

cxt:20*1000 
},

cFE:{},
jO:[],

doS:{},
cBs:true,

cxn:"",
aYW:null,

dDq:{left:1,top:1,width:1,height:1},



dPh:function()
{
var ad=this;
ad.cFE={};
ad.aQ("preloadArea").innerHTML="";
return ad;
},

ebI:function(bdi)
{
var ad=this;
ad.aQ("btnNext").disabled=!bdi;
return bdi?ad:ad.AO();
},

ebH:function(bdi)
{
var ad=this;
ad.aQ("btnPrev").disabled=!bdi;
return bdi?ad:ad.AO();
},

aSK:function()
{
var dPJ=
{
left:"px",
top:"px",
width:"px",
height:"px"
},
dSp=
{
bottom:true,
right:true
};

for(var bk=arguments,rE=bk[0],i=1,aO=bk.length;i<aO;i++)
{
var DM=bk[i];
for(var j in DM)
{
!dSp[j]&&(rE[j]=DM[j]+(dPJ[j]||""));
}
}
return this;
},

AO:function(aJ)
{
var ad=this,
ar=ad.aQ(aJ||"btnClose");
try
{
ar&&ar.focus();
}
catch(aX)
{
}
return ad;
},

bSn:function(mx)
{
var ad=this,
fG=ad.dof(mx),
cF=fG.width,
dg=fG.height;

if(fG.getAttribute("error")=="true")
{
return{error:"onerror"};
}
else if(fG.complete)
{
try
{
if((fG.mimeType||fG.naturalWidth)
&&(cF>=10||dg>=10)
&&cF>0&&dg>0)
{
return{width:cF,height:dg};
}
}
catch(aX)
{
}
return{error:"no mimeType and naturalWidth"};
}
else if(cF>100)
{
return{width:cF,height:dg};
}
else if(now()-parseInt(fG.getAttribute("time"))>ad.eJ.cxt)
{
return{error:"timeout"};
}
},

dof:function(mx)
{
var ad=this;
fG=ad.cFE[mx];

if(!fG)
{
fG=ad.cFE[mx]=
ad.aQ("preloadArea").appendChild(document.createElement("img"));
fG.onerror=function(){this.setAttribute("error","true");};
fG.setAttribute("time",now());
fG.src=mx;
}
return fG;
},

kG:function()
{
var ad=this;
if(!ad.cCq())
{
callBack(getTop().iPadRemoveEvent);;
ad.bqz(
{
from:ad.bPw(),
to:ad.dCm,
onready:function()
{
ad.cxn="";
ad.aYW=null;
ad.cPA(false);

show(ad.aQ("loading"),false);
show(ad.aQ("imgMask"),false);
},
oncomplete:function()
{
var Fc=ad.aQ("imgDispArea");
var beR=ad.aQ("control");
show(Fc,false);
show(beR,false);

Fc.innerHTML="";
}
}
);
}
return ad;
},

dGp:function()
{
var ad=this;
return ad.aQ("mask")&&ad.aQ("nav")
&&ad.aQ("preloadArea")&&ad.aQ("control");
},

dIB:function(aA)
{
var ad=this;
extend(ad.jO,aA);
return ad;
},

dGV:function()
{
var ad=this,
ddI=0,
Fc=ad.aQ("imgDispArea");

ad.aQ("mask").onclick=ad.aQ("btnClose").onclick=function()
{
callBack.call(ad,ad.jO.yC);
};

ad.aQ("btnNext").onclick=function()
{
callBack.call(ad,ad.jO.dOq);
};

ad.aQ("btnPrev").onclick=function()
{
callBack.call(ad,ad.jO.dOs);
};

ad.aQ("btnZoom").onclick=function()
{
if(this.className!="zoomdisabled")
{
ad.cOZ(this.getAttribute("opt"));
}
};

var aeB={
ayc:null,
ax:Fc.setCapture?Fc:al,
dWY:function(ag)
{
if(ad.bTf())
{
aeB.ayc={
x:ag.screenX,
y:ag.screenY,
left:parseInt(Fc.style.left),
top:parseInt(Fc.style.top)
};

if(Fc.setCapture)
{
Fc.setCapture();
}
else
{
captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
}

addEvent(aeB.ax,"mousemove",aeB.cIA);
addEvent(aeB.ax,"mouseup",aeB.djQ);

ad.bZM("move");
}
},
djQ:function(ag)
{
if(aeB.ayc)
{
aeB.cIA(ag);
aeB.ayc=null;

if(Fc.releaseCapture)
{
Fc.releaseCapture();
}
else
{
releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP);
}

removeEvent(aeB.ax,"mousemove",aeB.cIA);
removeEvent(aeB.ax,"mouseup",aeB.djQ);

ad.bZM("zoom");
}
},
cIA:function(ag)
{
var ayc=aeB.ayc;
if(ayc)
{
Fc.style.left=(ayc.left
-ayc.x+ag.screenX)+"px";
Fc.style.top=(ayc.top
-ayc.y+ag.screenY)+"px";
}
}
};
addEvents(Fc,
{
mousedown:aeB.dWY,
dblclick:function(ag)
{
var cqO=ad.bUf(),
cqN=ad.bUe(),
bjP=ad.dcO(ag);

if(ad.bTf()
||!cqN&&bjP=="prev"
||!cqO&&bjP=="next")
{
fireMouseEvent(ad.AO("btnZoom").aQ("btnZoom"),"click");
}
}
}
);

addEvents(
[
Fc,
ad.aQ("imgMask"),
ad.aQ("loading")
],
{
mousemove:function(ag)
{
var cqO=ad.bUf(),
cqN=ad.bUe(),
bjP=ad.dcO(ag),
cJE=bjP;

if(ad.bTf())
{
cJE="zoom";
}
else if(!cqN&&bjP=="prev"
||!cqO&&bjP=="next")
{
cJE="";
}

ad.bZM(aeB.ayc?"move":cJE);
},
click:function(ag)
{
var bd=ad.eJ.gg,
cu=ad.aQ("control").className;

if(cu=="next"+bd)
{
fireMouseEvent(ad.aQ("btnNext"),"click");
}
else if(cu=="prev"+bd)
{
fireMouseEvent(ad.aQ("btnPrev"),"click");
}
}
}
);

var bUU=
{
mousewheel:function(ag)
{
if(ad.cDv())
{
var dwm=typeof(ag.wheelDelta)=="undefined"
?-ag.detail:ag.wheelDelta;
ad.cOZ(dwm>0?"inc":"dec");
}
},
DOMMouseScroll:function(ag)
{
bUU.mousewheel(ag);
},
keydown:function(ag)
{
switch(ag.keyCode)
{
case 39:
fireMouseEvent(ad.AO("btnNext").aQ("btnNext"),"click");
break;
case 37:
fireMouseEvent(ad.AO("btnPrev").aQ("btnPrev"),"click");
break;
case 27:
fireMouseEvent(ad.AO("btnClose").aQ("btnClose"),"click");
break;
case 32:
fireMouseEvent(ad.AO("btnZoom").aQ("btnZoom"),"click");
break;
case 187:
bUU.mousewheel({wheelDelta:1});
break;
case 189:
bUU.mousewheel({wheelDelta:-1});
break;
}
preventDefault(ag);
},
keypress:function(ag)
{
preventDefault(ag);
},
keyup:function(ag)
{
preventDefault(ag);
}
};
addEvents(ad.aQ("control"),bUU);

addEvent(al,"resize",function()
{
ad.cBs=true;

if(now()-ddI>200&&!ad.bTf()&&!ad.cCq())
{
ddI=now();
ad.fX(ad.cxn,
ad.aYW,
ad.dBM);
}
}
);
},

dHP:function()
{
var ad=this,
bXx=document,
bue=bXx.body,
bUF=bXx.createElement("style"),
cD=ad.bP,
dnS={
"_id":ad.eJ.gg,
images_path:getPath("image")
},
daz=cD.dwd.replace(dnS);

bXx.getElementsByTagName("head")[0].appendChild(bUF);
if(bUF.styleSheet)
{
bUF.styleSheet.cssText=daz;
}
else
{
bUF.appendChild(bXx.createTextNode(daz))
}

insertHTML(bue,"afterBegin",cD.cZp.replace(dnS));

return ad;
},

fX:function(mx,acb,cSf,biF)
{
var ad=this,
crw=acb&&acb.error,
Fc=ad.aQ("imgDispArea"),
bWj=ad.aQ("imgMask"),
bST=ad.aQ("loading"),
beR=ad.aQ("control"),
aLs=Fc.style,
crR=Fc.firstChild,
aLp=!acb&&ad.dKQ(),
acm;
beR.style.top=parseInt(bodyScroll(al,"scrollTop"))+"px";
callBack(getTop().iPadPrevent,[Fc]);
ad.cxn=mx;
ad.dBM=cSf;
ad.aYW=crw
?{width:210,height:142}
:(acb||ad.aYW);
ad.doC=null;


crw&&(mx=getPath("image")+"/newicon/photo.gif");
acm=ad.cnE(ad.aYW);

ad.ebG(
acb&&!crw,
acb&&acm.width!=acb.width).cPo("org");

if(aLp)
{
ad.biX=extend({},acm);
if(aLp.width>acm.width)
{
ad.biX.left=aLp.left;
ad.biX.width=aLp.width;
}
if(aLp.height>acm.height)
{
ad.biX.top=aLp.top;
ad.biX.height=aLp.height;
}
}
else
{
ad.biX=acm;
}


setHTML(ad.aQ("sheepNum"),
ad.bP.cZp.replace(cSf,"sheet"));

if(ad.cCq())
{

ad.bqz(
{
from:(ad.dCm=biF
||ad.cnE({width:1,height:1})),
to:acm,
onready:function()
{
acb&&ad.bUa(mx);

show(Fc,true);
show(beR,true);
},
oncomplete:function()
{
if(!acb)
{
ad.aSK(bWj.style,acm)
.aSK(bST.style,aLp);
}
else if(gbIsIE)
{
ad.bUa(mx);
}
show(bWj,!acb);
show(bST,!acb);
setTimeout(function()
{
ad.cPA(true,biF);
}
);
}
}
);
}
else
{
show(bWj,!acb);
show(bST,!acb);

if(!acb)
{
ad.aSK(bWj.style,acm)
.aSK(bST.style,aLp)
.aSK(Fc.style,acm);
}
else if(gbIsFF)
{
ad.bqz(
{
from:ad.bPw(),
to:acm,
oncomplete:function()
{
ad.bUa(mx);
}
}
);
}
else
{
ad.bqz(
{
from:ad.bPw(),
to:acm,
onready:function()
{
ad.bUa(mx);
},
onaction:function(jK)
{
setOpacity(Fc,jK*0.4+0.6);
},
oncomplete:function()
{
setOpacity(Fc,1);
}
}
);
}
}

return ad;
},



dKO:function()
{
var ad=this,
bfX=ad.doS,
dew=ad.eJ.dGQ*2,
bbh=document.body.clientWidth||document.documentElement.clientWidth,
WP=Math.max((document.body.clientHeight
||document.documentElement.clientHeight)-60,10);

bfX.dcb=
{
Ib:Math.floor(bbh/2),
cC:Math.floor(WP/2)
};
bfX.bXa=Math.max(bbh-dew,10);
bfX.aMa=Math.max(WP-dew,10);

ad.cBs=false;

return ad;
},

cnE:function(acb)
{
var ad=this,
bfX=ad.dpw(),
bCH=bfX.dcb,
bbh=bfX.bXa,
WP=bfX.aMa,

uo=acb||{},
aoz=uo.width||400,
awk=uo.height||300,

aMf=aoz/bbh,
aNy=awk/WP;

if(aMf>1||aNy>1)
{
var dlO=Math.max(aMf,aNy);
aoz=Math.round(aoz/dlO);
awk=Math.round(awk/dlO);
}
return(
{
left:Math.round(bCH.Ib-aoz/2),
top:Math.round(bCH.cC-awk/2),
width:aoz,
height:awk
}
);
},

cnD:function(cWV,cWU)
{
var ad=this,
bUN=ad.bPw();
return{
left:bUN.left
+(bUN.width-cWV)/2,
top:bUN.top
+(bUN.height-cWU)/2,
width:cWV,
height:cWU
};
},

cnC:function()
{
var ad=this;
return Math.round((parseInt(ad.aQ("imgDispArea").style.width)/
ad.aYW.width)*100);
},

dKQ:function()
{
var ad=this,
bCH=ad.dpw().dcb;

return{
left:bCH.Ib-30,
top:bCH.cC-30,
width:60,
height:60
};
},

dcO:function(cPb)
{
var AU=cPb.clientX,
Ar=cPb.clientY,
aOt=this.biX;

if(AU>=aOt.left
&&Ar>=aOt.top
&&Ar<=aOt.top+aOt.height)
{
if(AU<aOt.left+aOt.width/2)
{
return"prev";
}
else if(AU<aOt.left+aOt.width)
{
return"next";
}
}

return"";
},

bUa:function(mx)
{
var ad=this,
Fc=ad.aQ("imgDispArea"),
crR=Fc.firstChild;

if(crR)
{
ad.aQ("preloadArea").appendChild(crR);
}

Fc.appendChild(ad.dof(mx));
return ad;
},

ebG:function(bdi,eeP)
{
var ad=this;
bva=ad.aQ("btnZoom");

bva.setAttribute("enablefit",bdi?"true":"false");
bva.setAttribute("enableorg",eeP?"true":"false");

return ad;
},

aQ:function(aJ)
{
return S(aJ+this.eJ.gg);
},

dpw:function()
{
var ad=this;

if(ad.cBs)
{
ad.dKO();
}
return ad.doS;
},

bPw:function()
{
var aLs=this.aQ("imgDispArea").style;
return{
left:parseInt(aLs.left),
top:parseInt(aLs.top),
width:parseInt(aLs.width),
height:parseInt(aLs.height)
};
},

bUf:function()
{
return!this.aQ("btnNext").disabled;
},

bUe:function()
{
return!this.aQ("btnPrev").disabled;
},

cDv:function(ao)
{
return this.aQ("btnZoom").getAttribute("enable"+(ao||"fit"))=="true";
},

cCq:function()
{
var ad=this,
djL=ad.aQ("control");
return!djL||djL.className=="hide"+ad.eJ.gg;
},

dFT:function(dSy,dSx)
{
var dXw=this.dDq;
for(var qd in dXw)
{
if(dSy[qd]!=dSx[qd])
{
return false;
}
}
return true;
},

bTf:function()
{
var ad=this;
return ad.cDv("fit")
&&ad.aQ("btnZoom").getAttribute("opt")=="fit";
},

bZM:function(dmk)
{
var ad=this,
beR=ad.aQ("control");
if(beR.getAttribute("showed")=="true"||dmk=="hide")
{
setClass(beR,dmk+ad.eJ.gg);
}
return ad;
},

cPA:function(sk)
{
var ad=this;
ad.aQ("control").setAttribute("showed",sk?"true":"false");
return ad.bZM(sk?"":"hide");
},

cPo:function(cV)
{
var ad=this,
bva=ad.aQ("btnZoom");
if(ad.cDv(cV))
{
setClass(bva,"zoom"+cV).setAttribute("opt",cV);
}
else
{
setClass(bva,"zoomdisabled").setAttribute("opt","disable");
}
return ad;
},





cOZ:function(dVg)
{
var ad=this,
aOp=ad.aQ("percentDispArea"),
bXQ=ad.aYW,
acm=ad.cnE(bXQ);
aYo=acm,
cps=ad.doC||ad.bPw(),
cF=cps.width,
dg=cps.height,
gl=ad.eJ.dZO;

switch(dVg){
case"fit":
break;
case"org":
if(acm.width!=bXQ.width)
{
aYo=ad.cnD(
bXQ.width,bXQ.height);
break;
}
else
{
gl=2*gl;
}
case"inc":
aYo=ad.cnD(cF+gl,
dg*(1+gl/cF));
break;
case"dec":
var dFN=cF-gl,
cDg=dg*(1-gl/cF);
aYo=cDg>=1&&cDg>=1
&&ad.cnD(dFN,cDg);
break;
}

if(aYo)
{
ad.doC=aYo;
ad.cPo(ad.dFT(acm,aYo)
?"org":"fit").bqz(
{
from:cps,
to:aYo,
type:"wait",
onready:function()
{
setClass(aOp,"__show__");
show(aOp,true);
aOp.innerHTML=ad.cnC()+"%";
},
onaction:function()
{
aOp.innerHTML=ad.cnC()+"%";
},
oncomplete:function()
{
aOp.innerHTML=ad.cnC()+"%";
setClass(aOp,"__hide__");
setTimeout(function()
{
if(aOp.className=="__hide__")
{
show(aOp,false);
}
},
200
);
}
}
);
}
},














bqz:function(agg)
{
var ad=this,
Fc=ad.aQ("imgDispArea"),
aLs=Fc.style,
dkJ=agg.from.left,
dJa=agg.to.left-dkJ,
dkL=agg.from.top,
aEL=agg.to.top-dkL,
dkM=agg.from.width,
bYk=agg.to.width-dkM,
dkI=agg.from.height,
acJ=agg.to.height-dkI;
qmAnimation.play(Fc,
{
type:agg.type,
speed:agg.speed||"fast",
tween:"Linear",
onready:function()
{
callBack.call(ad.aSK(aLs,agg.from),
agg.onready);
},
onaction:function(cd,jK)
{
callBack.call(ad.aSK(aLs,
{
left:dkJ+dJa*jK,
top:dkL+aEL*jK,
width:dkM+bYk*jK,
height:dkI+acJ*jK
}
),agg.onaction,[jK]);
},
oncomplete:function()
{
callBack.call(ad.aSK(aLs,agg.to),
agg.oncomplete);
}
}
);
return ad;
},

bP:
{
dwd:TE(
[
'#control$_id$ {position:absolute;left:0;top:0;height:100%;width:100%;z-index:100;overflow:hidden;}',
'.hide$_id$ #mask$_id$ ',
'{display:none;}',
'.hide$_id$ #nav$_id$, ',
'.hide$_id$ #navbg$_id$, ',
'.move$_id$ #nav$_id$, ',
'.move$_id$ #navbg$_id$ {left:-2000px;}',
'.prev$_id$ #imgDispArea$_id$ img, ',
'.prev$_id$ #imgMask$_id$, ',
'.prev$_id$ #loading$_id$ ',
'{cursor:url($images_path$/ico_slidebox_arrow_left.cur), w-resize;}',
'.next$_id$ #imgDispArea$_id$ img, ',
'.next$_id$ #imgMask$_id$, ',
'.next$_id$ #loading$_id$ ',
'{cursor:url($images_path$/ico_slidebox_arrow_right.cur), e-resize;}',
'.zoom$_id$ #imgDispArea$_id$ img,',
'.move$_id$ #imgDispArea$_id$ img {cursor:move;}',
'#preloadArea$_id$ {position:absolute;left:-100px;top:-100px;',
'width:10px;height:10px;overflow:hidden;}',
'#mask$_id$ {position:absolute;z-index:100;top:0;left:0;background:#000;',
'opacity:0.8;filter:alpha(opacity=80);width:100%;height:100%;}',
'#imgDispArea$_id$ {position:absolute;z-index:101;',
'background:#222;overflow:hidden;}',
'.imgmaxsize img {width:100%;height:100%;}',
'#imgMask$_id$ {position:absolute;z-index:102;background:#000;',
'opacity:0.5;filter:alpha(opacity=50);}',
'#loading$_id$ {position:absolute;z-index:103;top:50%;left:50%;',
'width:60px;height:60px;',
'background:url($images_path$ico_loading_dark.gif)}',
'#nav$_id$, ',
'#navbg$_id$ {position:absolute;z-index:104;left:50%;bottom:20px;',
'margin-left:-210px;width:420px;padding:6px;text-align:center;}',
'#navbg$_id$ {background:#000;opacity:0.5;filter:alpha(opacity=50);',
'-webkit-border-radius: 6px;-moz-border-radius: 6px;',
'-webkit-box-shadow: 0px 2px 4px rgba(0,0,0,0.25);',
'-moz-box-shadow: 0px 2px 4px rgba(0,0,0,0.25);}',
'#navbg$_id$ input ',
'{visibility:hidden;}',
'.posright$_id$ {position:absolute;right:10px;',
'$@$if(gbIsMac)$@$',
'margin-top:-2px;',
'$@$endif$@$}',
'.posright$_id$ div {float:right;height:25px;overflow:hidden;margin-top:-1px;}',
'.posright$_id$ .bar {width:5px;margin-top:0;}',
'#btnZoom$_id$ ',
'{width:25px;cursor:pointer;}',
'.posright$_id$ .zoomdisabled {cursor:default;}',
'.posright$_id$ .zoomdisabled img,',
'.posright$_id$ .zoomorg img,',
'.posright$_id$ .zoomorg_move img,',
'.posright$_id$ .zoomfit img,',
'.posright$_id$ .zoomfit_move img {margin-left:-10px;}',
'.posright$_id$ .zoomorg img {margin-top:-25px;}',
'.posright$_id$ .zoomorg_move img {margin-top:-50px;}',
'.posright$_id$ .zoomfit img {margin-top:-75px;}',
'.posright$_id$ .zoomfit_move img {margin-top:-100px;}',
'#sheepNum$_id$ ',
'{color:#fff;position:absolute;left:10px;margin-top:4px;',
'$@$if(gbIsMac)$@$',
'margin-top:2px;',
'$@$else$@$',
'margin-top:5px;',
'$@$endif$@$}',
'#percentDispArea$_id$ {position:absolute;z-index:105;top:50%;left:50%;',
'width:100px;height:40px;margin:-45px 0 0 -50px;overflow:hidden;',
'line-height:200%;font-size:20px;text-align:center;',
'-webkit-border-radius: 6px;-moz-border-radius: 6px;',
'-webkit-box-shadow: 0px 2px 4px rgba(0,0,0,0.25);',
'-moz-box-shadow: 0px 2px 4px rgba(0,0,0,0.25);',
'background:#000;color:white;opacity:0.5;filter:alpha(opacity=50);}',
]
),
cZp:TE(
[
'<div id="preloadArea$_id$"></div>',
'<div id="control$_id$" class="hide$_id$" onmousedown="return false;" >',
'<div id="mask$_id$"></div>',
'<div id="imgDispArea$_id$" class="imgmaxsize" style="display:none;"></div>',
'<div id="imgMask$_id$" style="display:none;"></div>',
'<div id="loading$_id$" style="display:none;"></div>',
'<div id="navbg$_id$">',
'<div class="posright$_id$"><div></div></div><input type="button" class="wd2 btn"/>',
'</div>',
'<div id="nav$_id$">',

'<div class="posright$_id$">',
'<div id="btnZoom$_id$" opt="org" class="zoomorg" onmouseover="',
'switch(this.className)',
'{',
'case \x27zoomorg\x27:',
'setClass(this, \x27zoomorg_move\x27);',
'break;',
'case \x27zoomfit\x27:',
'setClass(this, \x27zoomfit_move\x27);',
'break;',
'}',
'" onmouseout="',
'switch(this.className)',
'{',
'case \x27zoomorg_move\x27:',
'setClass(this, \x27zoomorg\x27);',
'break;',
'case \x27zoomfit_move\x27:',
'setClass(this, \x27zoomfit\x27);',
'break;',
'}',
'" onmousedown="',
'fireMouseEvent(this, \x27mouseout\x27);',
'" onmouseup="',
'fireMouseEvent(this, \x27mouseover\x27);',
'">',
'<img src="$images_path$newicon/picview.gif">',
'</div>',
'<div class="bar">',
'<img src="$images_path$newicon/picview.gif">',
'</div>',
'</div>',

'<span id="sheepNum$_id$">',
'$@$sec sheet$@$',
'第 $cur$ / $total$ 张',
'$@$endsec$@$',
'</span>&nbsp;',

'<input id="btnPrev$_id$" class="wd2 btn" type="button" value="上一张"/>&nbsp;',
'<input id="btnClose$_id$" class="wd2 btn" type="button" value="   关闭    " />&nbsp;',
'<input id="btnNext$_id$" class="wd2 btn" type="button" value="下一张"/>&nbsp;',
'</div>',
'<div id="percentDispArea$_id$" style="display:none;">100%</div>',
'</div>',
]
)
}
};
}
)(window);
