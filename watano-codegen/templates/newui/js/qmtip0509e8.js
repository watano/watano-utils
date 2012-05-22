













var QMTip={acY:{}};






QMTip.close=function(ao,bHI,eda,edg)
{

var kQ=QMTip.acY[bHI],
ae=getTop();

if(kQ)
{
kQ.xH="showed";
eda&&QMTip.bUu(bHI,ao);
edg?ae.removeSelf(ae.S(kQ.domid+"rlt",kQ.win)):QMTip.cqT(kQ,0);
}
};






QMTip.markunshow=function(ah)
{
var ae=getTop();
ae.waitFor(function()
{
return ae.S(ah.click_id||ah.domid);
},
function(aW)
{
if(aW)
{
ae.addEvent(ae.S(ah.click_id||ah.domid),"click",function()
{
QMTip.bUu(ah.tipid,"mark","notipsclick");
});
}
}
);
};








QMTip.bUu=function(bHI,ao,hw)
{

var	ae=getTop();
if(bHI<10000)
{
ae.ossLog(ao=="mark"?"delay":"realtime","all",ae.TE("stat=tips&type=$type$&tipid=$tipid$$@$if($loc$)$@$&loc=$loc$,,,$tipid$$@$endif$@$").replace({
tipid:bHI,
type:ao,
loc:hw
}));
}
};







QMTip.show2=function(ah)
{
if(!QMTip.fX(ah))
{
return false;
}

var ae=getTop(),
pW=ah.tipid,
tN=ah.domid,
at=ah.win;

ae.addEvent(ae.S(tN+"rlt",ah.win),"mousedown",function(ag){
ah.onmousedown&&ah.onmousedown(ag);
});


ae.addEvent(ae.S(tN+"closefork",at),"click",function(ag){
QMTip.close("close",pW,1);
ae.preventDefault(ag);
});

ae.addEvent(ae.S(tN+"closetemporary",at),"click",function(ag){
QMTip.close("close",pW,1);
ae.preventDefault(ag);
});

ae.addEvent(ae.S(tN+"closeforever",at),"click",function(ag){
QMTip.close("know",pW,1);
ae.preventDefault(ag);
});


};





















QMTip.fX=function(ah)
{

var pW=ah.tipid,
tN=ah.domid,
at=ah.win,
ae=getTop(),
ar=ae.S(tN,at);

if(
(typeof pW=="undefined"&&gbIsOpera)
||(QMTip.acY[pW]&&QMTip.acY[pW].xH=="showed"&&!ah.bForceShow)
)
{
return false;
}

ah.notlog=ah.notlog||0;
ah.type=1;
ah.images_path=ae.getPath("image");
ah.showicon=ah.showicon||"";

if(typeof ah.closetemporary=="undefined")
{
ah.closetemporary="我知道了";
}

{
QMTip.acY[pW]=ah;


ah.bVf=QMTip.bVf;


}
if(!ar)
{

if(!ah.xH)
{
ah.xH="unshow";
QMTip.dCs();
}
return false;
}
ae.addEvent(at,"resize",QMTip.cWR,1);
ae.addEvent(at,"resize",QMTip.cWR);




if(ae.S(tN+"rlt",at))
{
return false;
}



if(!ae.insertHTML(at.document.body,"afterBegin",this.bP.bJP.replace(ah)))
{
ae.doPageError("insertHTML false in qmtip","","");
delete QMTip.acY[pW];
return false;
}

ar.parentNode.insertBefore(ae.S(tN+"rlt",at),ar);
ah.xH="showing";

this.bVf(ah);
this.cqT(ah,1);

var dok=ae.S(tN+"rlt",at);
ae.addEvent(dok,"click",ae.stopPropagation);
ae.addEvent(dok,"mousedown",ae.stopPropagation);

return true;

};


QMTip.show=function(ah)
{





























































if(!QMTip.fX(ah))
{
return false;
}


var ae=getTop(),
pW=ah.tipid,
tN=ah.domid,
at=ah.win,
ar=ae.S(tN,at),
cdB=function(){
QMTip.close("close",pW,0,1);
};
if(ah.auto_hide==1){
ae.addEvent(ar,"click",cdB);
}

ae.addEvent(ae.S(tN+"closefork",at),"click",function(ag){
QMTip.close("close",pW,1);
ae.preventDefault(ag);
});










ae.addEvent(ae.S(tN+"closetemporary",at),"click",function(ag){
QMTip.close("close",pW,1);
ae.preventDefault(ag);
});

ae.addEvent(ae.S(tN+"closeforever",at),"click",function(ag){
QMTip.close("know",pW,1);
ae.preventDefault(ag);
});



ae.E(ae.GelTags("a",at.document),function(io)
{
if(io.getAttribute("autohide")=="1")
{
ae.addEvent(io,"click",cdB);
}
});

ae.addEvent(ae.S(ah.click_id||ah.domid,at),"click",function(ag)
{
cdB();
QMTip.bUu(pW,"mark","clicktipslink");
});

QMTip.bUu(pW,"mark","tipshow");
};







QMTip.cqT=function(ah,eP)
{
var ae=getTop(),
aQn=ae.S(ah.domid+"tipcontainer",ah.win||ah.doc),
lm=new(ae.qmAnimation)(
{
from:1,
to:100
}
);
lm.play(
{
speed:"slow",
onaction:function(cd,jK)
{
ae.setOpacity(aQn,Math.abs((eP?0:-1)+jK));
},
oncomplete:function(cd,akE)
{
if(eP)
{
ae.setOpacity(aQn,1);
}
else
{

ae.removeSelf(ae.S(ah.domid+"rlt",ah.win));
}
}
});
};





QMTip.dCs=function()
{
var ad=arguments.callee,
acY=QMTip.acY,
ei=0;
ad.sS=(ad.sS||0)+1;
if(ad.Cr)
{
clearTimeout(ad.Cr);
}
for(var cJ in acY)
{
if(acY[cJ].xH=="unshow")
{
++ei;
QMTip.show(acY[cJ]);
}
}
if(ei&&ad.sS<300)
{
ad.Cr=setTimeout(ad,1000);
}
};






QMTip.bVf=function(ah)
{
var ae=getTop(),
at=ah.win,
tN=ah.domid,
ad=arguments.callee,
ar=ae.S(tN,at,at),
bp=ae.S(tN+"rlt",at),
bhW=ae.S(tN+"newtips",at),
aQn=ae.S(tN+"tipcontainer",at),
byQ=ae.bodyScroll(at,'clientWidth'),
efu=ae.bodyScroll(at,'clientHeight');


if(!(ar&&bp))
{
return;
}

ah.height_offset=ah.height_offset||0;

var	bpL=ae.calcPos(ar),
Hc=ae.calcPos(bp),
bUv=aQn.offsetWidth,
bup=aQn.offsetHeight;


if(!ah.arrow_direction)
{

ah.arrow_direction=(bpL[0]-bup-ah.height_offset)<10?"down":"up";
}

if(ah.arrow_direction!="none")
{
ae.show(tN+ah.arrow_direction,0,at);
}
else
{
ae.show(tN+"up",0,at);
ae.show(tN+"down",0,at);
}


var cxe=ah.height_offset;
if(ah.arrow_direction=="down")
{
cxe+=bpL[2];
}
else
{
cxe+=bpL[0]-bup;
}

var cxd=cxe-Hc[0];
if(ah.top!=cxd)
{
ah.top=cxd;
bhW.style.top=cxd+"px";
}


var bDT=bpL[3]+(ah.tip_offset||0),
dbN=bDT+bUv;


if(typeof ah.tip_offset=="undefined")
{
if(dbN+10>byQ)
{
bDT-=dbN+10-byQ;
}
if(bDT<10)
{
bDT=10;
}
}
var cFd=bDT-Hc[3];
if(ah.left!=cFd)
{
ah.left=cFd;
bhW.style.left=cFd+"px";
}



var dEm=(bpL[3]-Hc[3])-ah.left,
dAr=dEm+(ah.arrow_offset||0);
ae.S(tN+"up",at).style.marginLeft=ae.S(tN+"down",at).style.marginLeft=dAr+"px";
};




QMTip.cWR=function()
{

var ad=arguments.callee;
if(ad.Cr)
{
clearTimeout(ad.Cr);
}
ad.Cr=setTimeout(function(){
var acY=QMTip.acY;
for(var cJ in acY)
{
if(acY[cJ].xH=="showing")
{
acY[cJ].bVf(acY[cJ]);
}
}
ad.Cr=null;
},200);
};


QMTip.showMailList=function(sk,fT,bC,MJ,MK)
{
var tN="maillist",
cxU=tN+"newtips",
ae=getTop();

if(!sk)
{
ae.removeSelf(ae.S(cxU,fT));
return;
}

var	cW=fT.body,
aN={
domid:tN,
doc:fT,
type:2,
msg:'<div class="addrtitle">备注信息：</div>'+bC,
arrowOffset:10,
icon:"tipsico_note",
images_path:ae.getPath("image")
},
bhW=ae.S(cxU,fT);
ae.removeSelf(bhW);
ae.insertHTML(cW,"beforeEnd",QMTip.bP.bJP.replace(aN));

var aGM=ae.bodyScroll(fT,'scrollLeft')+MJ-15,
aCa=MK,
byQ=ae.bodyScroll(fT,'clientWidth'),

bhW=ae.S(cxU,fT),
aQn=ae.S(tN+"tipcontainer",fT),
bUv=aQn.offsetWidth,
bup=aQn.offsetHeight;

if(aGM+bUv>byQ)
{
aGM-=aGM+bUv-byQ+5;
}

if(aCa-bup>10)
{
ae.show(tN+"up",0,fT);
aCa-=bup+13;
}
else
{
ae.show(tN+"down",0,fT);
aCa+=5;
}
aCa+=ae.bodyScroll(fT,'scrollTop');

bhW.style.left=aGM+"px";
bhW.style.top=aCa+"px";

QMTip.cqT(aN,1);

};











































































































QMTip.bP={
bJP:getTop().TE([

'$@$if($type$==1)$@$<span id="$domid$rlt" style="position:relative;cursor:default;z-index:1000;">$@$endif$@$',
'<div unselectable="on" id="$domid$newtips" class="newtips" style="top:$@$eval $top$||-999$@$px;left:$@$eval $left$||-999$@$px;xwidth:$@$eval $width$ $@$px;">',
'<div unselectable="on" id="$domid$tipcontainer" class="tipcontainer">',
'$@$if($type$==1||$type$==2)$@$<span id="$domid$up" class="arrowup" style="margin-left:$arrowOffset$px;"></span>\n$@$endif$@$',
'<div unselectable="on" class="container">',
'<div unselectable="on" class="contentcontainer">',
'<div unselectable="on" class="content" style="position:relative;zoom:1;">',
'<div unselectable="on" class="tipsicon $showicon$">',
'<span unselectable="on" class="tipsico $@$if($icon$)$@$$icon$$@$else$@$tipsico_normal$@$endif$@$" ></span>',
'</div>',
'$@$if($close_fork$)$@$<a class="btnClose" id="$domid$closefork" href="javascript:\'\'"></a>$@$endif$@$',
'<div class="tipstxt">',
'$msg$',
'</div>',
'<div unselectable="on" class="tipsrightpanel" style="font-size:12px;color:#000;font-weight:normal;">',
'$@$if($type$==1||$type$==3)$@$<div  unselectable="on" class="opertbar">$operation$<a style="text-decoration:none;color:#000;cursor:default">&nbsp;&nbsp;</a>$@$if($closeforever$)$@$<a class="" id="$domid$closeforever" title="" href="javascript:\'\'" >$closeforever$</a>$@$else if($closetemporary$)$@$<a class="" style="text-decoration:underline;" id="$domid$closetemporary" title="" href="javascript:\'\'" >$closetemporary$</a>$@$endif$@$</div>$@$endif$@$',
'</div>',
'<div unselectable="on" class="clr"></div>',
'</div>',
'</div>',
'</div>',
'$@$if($type$==1||$type$==2)$@$<span id="$domid$down" class="arrowdown"  style="margin-left:$arrowOffset$px;"></span>$@$endif$@$',
'</div>',
'<div unselectable="on" class="tipbackground"></div>',
'<div unselectable="on" class="oneheight" ></div>',
'</div>',
'$@$if($type$==1)$@$</span>$@$endif$@$'
])
};


