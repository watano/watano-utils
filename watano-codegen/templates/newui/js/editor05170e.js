



































function QMEditor(l)
{
if(!l)
{
l={};
}

this.dE=l.editorId
||["QMEditor",(new Date()).valueOf()].join("");
this.lp=l.tbExternId||"QMEditorToolBarPlusArea";
this.cK=l.tbExternObj;

this.ap=l.editorAreaWin||window;
this.lx=l.editorAreaId||"QMEditorArea";
this.aV=l.editorAreaObj;




this.dQ=l.height;
this.lZ=l.customtags;


this.gy=l.resPath||getPath("image");
this.J=l.language||QMEditor.CONST.LANGUAGE.zh_CN;
this.X=QMEditor.CONST.ak;

this.eZ=[";",l.style].join("").toLowerCase();
this.fn=l.funclist||QMEditor.CONST.FUNCLIST.BASE;

this.aJ="html";
this.dD="NotInited";

this.dI={};

this.dT={};
this.it={};

var hS=QMEditor.CONST.mw;
for(var i in hS)
{
var hX=hS[i].split(" ");
for(var j=hX.length-1;j>=0;j--)
{
this.it[hX[j]]=i;
}
}


this.iM=l.onload;
this.eS=l.onfocus;
this.iF=l.onblur;
this.aW=l.onclick;
this.iO=l.onmousedown;
this.bK=l.onkeydown;
this.dL=l.onpaste;
this.iQ=l.onputcontent;
this.iE=l.onbeforesaverange;
this.iR=l.onselectionchange;
this.iH=l.onchangecontenttype;
this.iG=l.onchangebgmusic;
this.cG=l.onshowinstallactive;
this.lN=l.onpreview;
this.lS=l.onuploademl;


this.ep=l.photoCGI;
this.jo=l.photoConfig;



this.dK=l;
};


QMEditor.prototype.getEditorId=function()
{
return this.dE;
};

QMEditor.prototype.getTbExtern=function()
{
var c=this,
ab=c.cK;

return ab?ab:(c.cK=S(c.lp,c.ap));
}

QMEditor.prototype.getEditorArea=function()
{
var c=this,
ab=c.aV;

return ab?ab:(c.aV=S(c.lx,c.ap));
};

QMEditor.prototype.getContentType=function()
{
return this.aJ=="text"?"text":"html";
};

QMEditor.prototype.adjustBodyStyle=function(fJ,nl)
{
try{
"txt"!==this.K&&(this.L.style[fJ]=nl);
}catch(mA)
{
debug("QMEditor adjustBodyStyle err:"+mA.message);
}
return this;
};

QMEditor.prototype.getBodyStyle=function(fJ)
{
return"txt"!==this.K?this.L.style[fJ]:"";
};

QMEditor.prototype.getEditWin=function()
{
return this.ae;
};

QMEditor.prototype.initialize=function(at,kp,cg)
{
var c=this;

if(!(c.getEditorArea())
||c.dD!="NotInited")
{
return false;
}

c.dD="Initlizing";



((/android|ipad|iphone|ipod/i).test(gsAgent)
?c.me
:c.mc
).call(c,
QMEditor.getBreakLine(),
cg,
function()
{

at&&c.setContent(at);

if("txt"!==c.K)
{
c.gb();
c.kg();
c.kS();
c.kT();
c.kk();
}
c.jJ();
c.eP();
c.kL();
c.kN();
c.dD="Ready";

QMEditor.setEditor(c);

if("txt"!==c.K)
{
c.mf();
kp&&c.showToolBar(true);
}

if(typeof(c.iM)=="function")
{
c.ap.setTimeout(
function()
{
c.iM.call(c);
}
);
}
}
);

return true;
};

QMEditor.prototype.isInitialized=function()
{
return this.dD=="Ready";
};

QMEditor.prototype.isSelectionInObject=function(cy)
{
if(!cy||"txt"===this.K)
{
return;
}

if(this.ae.getSelection)
{

var O=this.ae.getSelection();
if(O&&O.rangeCount>0)
{
var B=O.getRangeAt(0),
eo=this.I.createRange();

eo.selectNode(cy.firstChild||cy);
var ni=B.compareBoundaryPoints(
Range.START_TO_START,
eo
)==1;

eo.selectNode(cy.lastChild||cy);
var nj=B.compareBoundaryPoints(
Range.END_TO_END,
eo
)==-1;

if(!(ni&&nj))
{
return false;
}
}
else
{
return false;
}
}
else
{

var B=this.I.body.createTextRange();
B.moveToElementText(cy);

var O=this.I.selection;
var cv=O.createRange();
if(O.type=="Control")
{
for(var i=0,V=cv.length;i<V;i++)
{
if(cv(i).parentNode)
{
var aa=cv(i).parentNode;
cv=this.I.body.createTextRange();
cv.moveToElementText(aa);
break;
}
}
}

if(!B.inRange(cv))
{
return false;
}
}

return true;
};

QMEditor.prototype.focus=function(ck,aK)
{
var cR=null;
if("txt"===this.K)
{
cR=this.L;
}
else
{
switch(this.aJ)
{
case"text":
this.ap.focus();
this.cm.focus();
cR=this.cm;
break;
case"source":
this.ap.focus();
this.bf.focus();
cR=this.bf;
break;
case"html":
default:
var hV=this.fF(this.I)
?this.ae
:this.L;
hV&&hV.focus();
cR=aK||this.L;
break;
}
}
this.ku(cR,ck);
};

QMEditor.prototype.showCursor=function()
{
try
{

this.I.selection.createRange().select();
}
catch(e)
{
}
};

QMEditor.prototype.changeContentType=function(de,nD)
{
var bJ=!de
?(this.getContentType()=="text"?true:false)
:(de=="text"?false:true);
de=bJ?"html":"text";

if(de==this.getContentType())
{
return true;
}

if("txt"!==this.K)
{
if(!bJ&&!confirm(this.J.CHG_CONTENTTYPE))
{
return false;
}

this.bh.style.display=bJ?"block":"none";
this.cm.style.display=bJ?"none":"block";
this.bf.style.display="none";

if(!bJ)
{
this.iP("text");
}
else
{
this.kc("html");
}

this.showToolBar(bJ?this.isShowToolBar():false,true)
show(this.getTbExtern(),bJ);
}

this.aJ=de;
this.focus(0);

if(typeof(this.iH)=="function")
{
this.iH.call(this);
}

return true;
};

QMEditor.prototype.showToolBar=function(ds,kx)
{
var c=this;
if("txt"!==c.K)
{
ds=ds==null?!c.isShowToolBar():ds;
!kx&&c.cf.setAttribute("disp",ds?"true":"false");
c.cf.parentNode.style.display=ds?"":"none";


c.fM();
}
};

QMEditor.prototype.isShowToolBar=function()
{
return"txt"!==this.K&&this.cf
&&this.cf.getAttribute("disp")=="true";
};

QMEditor.prototype.isSupportToolBar=function()
{
return"txt"!==this.K;
};

QMEditor.prototype.getBgMusicInfo=function()
{
return"txt"!==this.K?this.ib:null;
};

QMEditor.prototype.getContent=function(bF)
{
var c=this;
return("txt"!==c.K?c.bu
:c.ir).call(c,c.aJ,bF);
};




QMEditor.prototype.getContentWidthSpellcheck=function(bF)
{
var c=this;
return("txt"!==c.K?c.bu
:c.ir).call(c,c.aJ,bF,1);
};

QMEditor.prototype.getContentObj=function(aQ)
{
return"txt"!==this.K?S(aQ,this.ae):null;
};

QMEditor.prototype.getContentTags=function(nr)
{
return"txt"!==this.K?GelTags(nr,this.I):[];
};

QMEditor.prototype.getDefaultFontInfo=function()
{
return"txt"!==this.K?this.dI:{};
};

QMEditor.prototype.setContent=function(at)
{
var c=this;
return("txt"!==c.K?c.bT
:c.kr).call(c,c.aJ,at);
};

QMEditor.prototype.setBgMusicInfo=function(by,cp,aE)
{
if("txt"!==this.K)
{
var fy=this.ib||{},
jr=fy.song,
jC=fy.singer,
jN=fy.url,
cH=!jr&&!by
?aE!=jN
:(jr!=by||jC!=cp);

this.ib=!by&&!aE?null:{
song:by,
singer:cp,
url:aE
};

if(!cH)
{
return;
}

if(typeof(this.hI)=="function")
{
this.hI(this);
}

if(typeof(this.iG)=="function")
{
this.iG.call(this);
}
}
};

QMEditor.prototype.setDefaultFontInfo=function(mv,mu,mx)
{
return this.adjustBodyStyle("fontFamily",(this.dI.fontName=mv)||"Verdana")
.adjustBodyStyle("fontSize",(this.dI.fontSize=mu)||"14px")
.adjustBodyStyle("color",(this.dI.fontColor=mx)||"#000");
};

QMEditor.prototype.hideMenu=function(di)
{
if(this.dW())
{
this.dW().aq(di);
}
};

QMEditor.prototype.addEvent=function(ce,hM)
{
if(typeof(hM)!="function")
{
return false;
}

var eK=["on",ce,"List"].join("");
if(!this[eK])
{
this[eK]=[];
}

this[eK].push(hM);

return true;
};

QMEditor.prototype.saveRange=function()
{
if("txt"!==this.K)
{
this.focus();

if(typeof(this.iE)=="function")
{
this.iE.call(this);
}

this.iq=this.ij();
}
};

QMEditor.prototype.loadRange=function(ct)
{
if("txt"!==this.K)
{
if(ct=="last")
{
this.iI();
}
else if(this.iW(this.iq))
{
this.clearRange();
}
}
};

QMEditor.prototype.clearRange=function()
{
this.iq=null;
};

QMEditor.prototype.paste=function()
{
"txt"!==this.K&&this.bG("paste");
};

QMEditor.prototype.updateToolBarUI=function(nn)
{
if("txt"!==this.K)
{
var jh=function(mE)
{
E(mE,function(bj)
{
if(bj.funcObj&&bj.funcName==nn)
{
bj.funcObj.ex();
}
}
);
};

jh(this.aL);
jh(this.dN);
}
};

QMEditor.prototype.test=function()
{
try
{
return(

this.getEditorArea().getAttribute("QMEditorId")==this.dE

&&("txt"===this.K?true:

GelTags("td",this.aV)[1].firstChild==this.bh
)
);
}
catch(az)
{
return false;
}
};


QMEditor.prototype.mc=function(at,cg,fU)
{
var c=this,
aB=c.X,
dp=c.dQ?"height:"+c.dQ:"";

c.aV.innerHTML=aB.hD.replace(
{
border:c.eZ.indexOf(";border:none")!=-1
?"border:none;":"",
style:dp
}
);

createBlankIframe(c.ap,
{

obj:GelTags("textarea",c.aV)[0],
where:"beforeBegin",

className:"QMEditorIfrmEditArea",
scrolling:"auto",
style:dp,
attrs:["hideFocus",isNaN(cg)
?"":" tabIndex="+cg].join(""),

header:aB.lv,
body:aB.mT.replace(
{
editable:c.fF(document)
?"":"contentEditable=true",
content:at
}
),

defcss:false,

onload:function()
{
c.K="iframe";
c.bh=this;

c.ae=c.bh.contentWindow;
c.I=c.ae.document;

log(c.bh.parentNode.clientHeight,4487221);
c.L=c.I.body;
c.bf=c.bh.nextSibling;
c.cm=c.bf.nextSibling;


c.jp();
c.kv();


c.fM();

fU.call(c);
}
}
);
};

QMEditor.prototype.me=function(at,cg,fU)
{
var c=this,
aB=c.X,
dp=c.dQ?"height:"+c.dQ:"";

c.aV.innerHTML=c.X.hD.replace(
{
editcontainer:c.X.ly.replace(
{
style:dp,
tabIdx:cg
}
),
border:c.eZ.indexOf(";border:none")!=-1
?"border:none;":"",
style:dp
}
);


c.K="txt";
c.bh=GelTags("td",c.aV)[1].firstChild;


c.L=c.bh;




c.jp();

fU.call(c);
};

QMEditor.prototype.mf=function()
{
this.cf=GelTags("td",this.aV)[0];
this.getTbExtern();

this.dJ=this.cf.firstChild.firstChild;
this.dM=this.dJ.nextSibling;

if((this.aL=this.hH(this.fn.toolbar)).length>0)
{
for(var i=this.aL.length-1;i>=0;i--)
{
insertHTML(this.dJ,"afterBegin",
this.X.jX
);
this.aL[i].funcArea=this.dJ.firstChild;
}
}

if((this.dN=(this.cK
&&this.hH(this.fn.tbExtern))
||[]).length>0)
{
for(var i=this.dN.length-1;i>=0;i--)
{
insertHTML(this.cK,"afterBegin",
this.X.jY
);
this.dN[i].funcArea=this.cK.firstChild;
}
}

var c=this;
this.ap.setTimeout(
function()
{
c.iT();
},
100
);
};

QMEditor.prototype.jp=function()
{
if(this.fF(this.I))
{


this.I.designMode="on";
this.bG("useCSS",false);

this.ap.focus();

}

this.aV.setAttribute("QMEditorId",this.dE);
};

QMEditor.prototype.kv=function()
{
var gn=this.lZ,
aP=this.I;

if(gn)
{
E(gn,function(kt)
{
aP.createElement(kt);
}
);
}

return this;
};

QMEditor.prototype.hH=function(mJ)
{
var gp=[];

E(
(mJ||"").replace(/\|/ig,"Separate").split(" "),
function(hc)
{
if(hc)
{
gp.push({funcName:hc});
}
}
);

return gp;
};

QMEditor.prototype.iT=function()
{
var c=this,
hT={};

function ea(mF,cF)
{
E(mF,function(bj)
{
if(!bj.funcObj)
{
var eG=bj.funcName;
if(QMEditor.FUNCLIB[eG])
{
bj.funcObj=new QMEditor.FUNCLIB[eG](
{
oParamSet:c.dK,
editor:c
}
);
bj.funcObj.ea(
{
container:bj.funcArea,
uiType:cF
}
);
}
else
{
hT[c.it[eG]]=true;
}
}
}
);
};

ea(this.aL,"icon");
ea(this.dN,
this.eZ.indexOf(";icon:big")!=-1?"big":"text");
this.dy(hT);
};

QMEditor.prototype.dy=function(mL)
{
if(!this.dT)
{
this.dT={};
}

for(var eH in mL)
{
var gS=this.dT[eH],
mk=gS
?(now()-gS>2000):true;

if(mk)
{
loadJsFile(getPath("editor")+getFullResSuffix(eH));
this.dT[eH]=now();
}
}

return this;
};

QMEditor.prototype.dW=function()
{
return this.ie;
};

QMEditor.prototype.iw=function(mI)
{
var mY=this.ie;
this.ie=mI;
return mY;
};

QMEditor.prototype.fF=function(gc)
{

var ge=gc&&gc.designMode
&&gc.designMode.toString().toLowerCase()||"";
return(ge=="off"||ge=="on")
&&!gbIsWebKit;
};

QMEditor.prototype.bu=function(bi,bF,kn)
{
switch(bi)
{
case"html":
var dg=this.L,
aH=this.aL&&this.aL.SpellCheck;
if(!kn&&aH&&(aH.aI&2))
{

var dk=F("spellcheckDocument",getTop()).document,
gG=dg.innerHTML;
if(dk.body&&gG!=dk.body.innerHTML)
{
dk.body.innerHTML=gG;
aH.fv(dk);
dg=dk.body;
}
}
return bF
?(dg.innerText||dg.textContent||"")
:dg.innerHTML;
case"text":
return this.cm.value;
case"source":
return this.bf.value;
}
return"";
};

QMEditor.prototype.ir=function(bi,bF)
{
if(bF||bi=="text")
{
return this.L.value;
}
else
{
return(gbIsIE||gbIsOpera
?textToHtml
:textToHtmlForNoIE)(this.L.value);
}
};

QMEditor.prototype.bT=function(bi,at)
{
switch(bi)
{
case"html":
this.L.innerHTML=at||QMEditor.getBreakLine();
this.gb()
.gH();

var aH=this.aL&&this.aL.SpellCheck;
aH&&aH.iV();
break;
case"text":
this.cm.value=at;
break;
case"source":
this.bf.value=at;
break;
}
return this;
};

QMEditor.prototype.kr=function(bi,at)
{
var aw=htmlDecode(at

.replace(/\n/ig,"")

.replace(/<div>[ \t]*<br>[ \t]*<\/div>/ig,"\n")
.replace(/<div .*?>[ \t]*<br .*?>[ \t]*<\/div>/ig,"\n")
.replace(/(<\/div>)|(<\/p>)|(<br\/?>)/ig,"\n")
.replace(/<.*?>/ig,"")
).replace(/&nbsp;/ig," ")
.replace(/[\t ]*\n/g,"\n")
.replace(/\s*$/,"");
this.L.value=aw;
};

QMEditor.prototype.iP=function(dq)
{
switch(dq)
{
case"text":
if(!gbIsIE&&!gbIsWebKit)
{
this.bT("html",
htmlToText(this.bu("html")));
}
this.bT("text",
this.bu("html",true));
break;
case"source":
this.bT("source",this.bu("html"));
break;
}
return this;
};

QMEditor.prototype.kc=function(dq)
{
if(dq=="html"||dq=="source")
{
this.bT("html",(gbIsIE||gbIsOpera
?textToHtml
:textToHtmlForNoIE)(this.bu("text")));
}
if(dq=="source")
{
this.iP("source");
}
};

QMEditor.prototype.ku=function(aK,ck)
{
if(typeof(ck)=="number")
{
if(!window.getSelection)
{
var B=(aK.createTextRange?aK:this.L)
.createTextRange();
B.moveToElementText(aK);
B.moveStart("character",ck);
B.collapse(true);
B.select();
}
else if(aK.tagName!="TEXTAREA")
{
var c=this;

function jq()
{
c.ae.focus();
var O=c.ae.getSelection();

if(!O)
{
return false;
}

if(O.rangeCount>0)
{
O.removeAllRanges();
}

var B=c.I.createRange();
B.selectNode(aK&&aK.firstChild||aK
||c.L.firstChild||c.L);
B.collapse(true);
O.addRange(B);
return true;
}

if(!jq())
{
this.ap.setTimeout(jq);
}
}
else
{
aK.selectionStart=ck;
aK.selectionEnd=ck;
}
}

return this;
};

QMEditor.prototype.dG=function(dm)
{
if(dm!="equal")
{
return true;
}

var B=this.I.body.createTextRange();
B.moveToElementText(dm=="equal"
?this.L
:this.aV);

try
{
return B[dm=="equal"?"isEqual":"inRange"](
this.I.selection.createRange());
}
catch(az)
{
return false;
}
};

QMEditor.prototype.gb=function()
{
if(typeof(this.iQ)=="function")
{
try
{
this.iQ.call(this);
}
catch(az)
{
}
}

if(gbIsIE)
{
E(GelTags("div",this.L),function(w)
{
var eh=w.firstChild,
gT=eh&&eh.nodeType==3
&&!eh.nextSibling?eh.nodeValue:"";

if(gT.length==1
&&fixNonBreakSpace(gT)==" ")
{
w.innerHTML="";
}
}
);
}

return this;
};

QMEditor.prototype.fM=function()
{
if(gbIsIE)
{
var c=this,
eg=c.getEditorArea(),
bD=eg.clientHeight||eg.offsetHeight||(+eg.style.height),
mZ=c.isShowToolBar()?c.cf.clientHeight:0,
fc=bD-mZ-2;

!isNaN(fc)&&fc>0&&(c.bh.parentNode.style.height=
c.bf.style.height=
c.cm.style.height=fc+"px");

!c.lG&&(c.lG=true)
&&addEvent(eg,"propertychange",function()
{
c.fM();
}
);
}
};

QMEditor.prototype.jJ=function()
{
var c=this;

addEvent(c.ap,"unload",function()
{
QMEditor.delEditor(c.dE);
}
);
return c;
};

QMEditor.prototype.eP=function()
{
var c=this,
aP=c.I;

function hideMenu()
{
c.hideMenu();
}

if(c.K=="iframe")
{



addEvent(aP,"mousedown",function()
{
c.gH();
}
);


addEvent(aP,"mousedown",hideMenu);
}

if(typeof(c.iO)=="function")
{
addEvent("txt"===c.K?c.L:aP,
"mousedown",function(d)
{
c.iO.call(c,d);
}
);
}

if(typeof(this.aW)=="function")
{
addEvent("txt"===c.K?c.L:aP,
"click",function(d)
{
c.aW.call(c,d);
}
);
}

return c;
};

QMEditor.prototype.kL=function()
{
var c=this;

if(typeof(c.bK)=="function")
{
addEvent("txt"===c.K?c.L:c.I,
"keydown",function(d)
{
c.bK.call(c,d);
}
);
}

if(typeof(c.dL)=="function")
{
addEvent("txt"===c.K?c.L:c.I.body,
"paste",function(d)
{
c.dL.call(c,d);
}
);
}

return c;
};

QMEditor.prototype.kN=function()
{
var c=this;

if(typeof(c.eS)=="function")
{
addEvent("txt"===c.K?c.L:c.ae,
"focus",function(d)
{

c.iI();

c.eS.call(c,d);
}
);
}

if(typeof(c.iF)=="function")
{
addEvent("txt"===c.K?c.L:c.ae,
"blur",function(d)
{
try
{
c.iF.call(c,d);
}
catch(az)
{
}
}
);
}

return c;
};

QMEditor.prototype.kg=function()
{
var c=this;

if(!gbIsIE)
{
addEvent(c.ae,"focus",function(d)
{
try
{
var O=c.ae.getSelection();
if(O.focusNode&&O.focusNode.tagName=="HTML")
{
O.collapse(c.L.firstChild
||c.L,0);
}
}
catch(az)
{
QMEditor.getTopWin().doPageError(
["editor focus error: ",az.message].join(""));
}
}
);
}
else
{
addEvent(c.ae,"blur",function(d)
{
try
{
c.L.ownerDocument.selection.empty();
}
catch(az)
{


}
}
);
}
};

QMEditor.prototype.kS=function()
{
var c=this;

if(gbIsIE)
{
function lw(d)
{
var as=d.keyCode;
if(!d.altKey
&&!d.ctrlKey
&&(as>=48
&&as<=57||as>=65
&&as<=90||as>=96
&&as<=111||as>=186
&&as<=192||as>=219
&&as<=222||as==8
||as==32||as==13
||as==46||as==229 
))
{
gA(as==8?d:null);
}
}

function gA(d,hj,km)
{
if(!c.dG("equal"))
{
return;
}

function gI()
{
c.L.innerHTML="<div>&nbsp;</div>";
c.gb().focus(0);

if(!km&&d)
{
preventDefault(d);
}
}

if(typeof(hj)=="number")
{
c.ap.setTimeout(gI,hj);
}
else
{
gI();
}
}

addEvent(c.L,"keydown",lw);
addEvent(c.L,"cut",function()
{
gA(null,0,true);
}
);
}

return c;
};

QMEditor.prototype.kT=function()
{
var c=this;

if(gbIsIE)
{
addEvent(this.L,"keydown",function(d)
{
if(c.dG()
&&d.keyCode==8
&&c.I.selection.type=="Control"
)
{
c.I.selection.clear();
preventDefault(d);
return;
}
}
);
}

return c;
};

QMEditor.prototype.kk=function()
{
var c=this;


if(c.lH)
{
throw new Error("*** can not set once again!!");
}

c.lH=true;

var aP=c.I;




addEvent(aP,"mouseup",function(d)
{

c.fY(d,true);
}
);
addEvent(aP,"keyup",function(d)
{




c.fY(d,true);
}
);


addEvent(aP,"keydown",function(d)
{
var iN=d.keyCode;
if(d.ctrlKey&&iN>=65&&iN<=90)
c.fV("keydown",d);
}
);

addEvent(aP,"contextmenu",function(d)
{
c.fV("contextmenu",d);
}
);

addEvent(c.L,"paste",function(d)
{
c.fV("paste",d);
}
);

return c;
};

QMEditor.prototype.ij=function()
{
if(this.aJ!="html")
{
return null;
}

if(window.getSelection)
{
var O=this.ae.getSelection();
return O?O.getRangeAt(0):null;
}
else
{
return this.I.selection.createRange();
}
};

QMEditor.prototype.iW=function(fz)
{
if(!fz)
{
return false;
}

this.focus();

if(window.getSelection)
{
var O=this.ae.getSelection();
O.removeAllRanges();
O.addRange(fz);
}
else
{
fz.select();
}

return true;
};

QMEditor.prototype.kQ=function()
{
this.ip=this.ij();
};

QMEditor.prototype.iI=function()
{
this.iW(this.ip);
};

QMEditor.prototype.gH=function()
{
this.ip=null;
};

QMEditor.prototype.fV=function(ce,d)
{
var c=this,
cs=c[["on",ce,"List"].join("")],
V=cs&&cs.length||0;

if(V>0&&c.dG())
{
for(var i=0;i<V;i++)
{
if(cs[i](d)===true)
{
break;
}
}
}

return c;
};

QMEditor.prototype.fY=function(d,ko)
{
var c=this,
cs=c.onselectionchangeList||[];

if(c.eD)
{
c.ap.clearTimeout(c.eD);
}

if(c.dG())
{
function gs()
{

c.kQ();

for(var i=0,V=cs.length;i<V;i++)
{
if(cs[i](d)===true)
{
break;
}
}

if(typeof(c.iR)=="function")
{
c.iR.call(c);
}
};

if(ko)
{
gs();
}
else
{
c.eD=this.ap.setTimeout(
function()
{
c.eD=null;
gs();
},100
);
}
}

return c;
};

QMEditor.prototype.eq=function(ct,aR,fO)
{
if(this.aJ!="html")
{
return false;
}

if(ct=="execCommand")
{
this.focus();
}

try
{
return this.I[ct](aR,false,fO||false);
}
catch(e)
{
return false;
}
};

QMEditor.prototype.bG=function(aR,fO,hK)
{
var cN=this.eq("execCommand",aR,fO);

if(cN)
{
if(typeof(hK)=="function")
{
hK.call(this);
}
this.fY({},true);
}

return cN;
};

QMEditor.prototype.hB=function(aR)
{
return this.eq("queryCommandState",aR);
};

QMEditor.prototype.ft=function(aR)
{
return this.eq("queryCommandEnabled",aR);
};

QMEditor.prototype.hA=function(aR)
{
return this.eq("queryCommandValue",aR);
};



QMEditor.createEditor=function(l)
{
return new this(l);
};

QMEditor.getEditorSet=function()
{
return this.getTopWin().gQmEditorSet||{};
};

QMEditor.getEditor=function(aQ)
{
var gV=this.getTopWin(),
k=gV.gQmEditorSet&&gV.gQmEditorSet[aQ];

if(k)
{
if(k.test())
{
return k;
}
else
{
this.delEditor(aQ);
}
}

return null;
};

QMEditor.getTopWin=function()
{
try
{
var nH=getTop().document;
return getTop();
}
catch(az)
{
return window;
}
};

QMEditor.setEditor=function(hi)
{
if(!this.getEditor)
{
return false;
}

var bn=hi.getEditorId(),
cc=this.getTopWin();
this.delEditor(bn);

if(!cc.gQmEditorSet)
{
cc.gQmEditorSet={};
}
cc.gQmEditorSet[bn]=hi;

return true;
};

QMEditor.delEditor=function(aQ)
{
var cc=this.getTopWin();
if(cc.gQmEditorSet&&cc.gQmEditorSet[aQ])
{
delete cc.gQmEditorSet[aQ];
}
};

QMEditor.hideEditorMenu=function()
{
var hN=this.getEditorSet();
for(var bn in hN)
{
try
{
hN[bn].hideMenu();
}
catch(e)
{
this.delEditor(bn);
}
}
}

QMEditor.getBreakLine=function(bZ)
{
var eI="<BR>";

if(gbIsIE)
{
eI="<DIV>&nbsp;</DIV>";
}
else if(gbIsOpera||gbIsWebKit)
{
eI="<DIV><BR></DIV>";
}

return(new Array((bZ||1)+1)).join(eI);
};

QMEditor.setupFunc=function()
{
E(this.getEditorSet(),function(my)
{
my.iT();
});
};


QMEditor.CONST={};
QMEditor.CONST.nC="QMEditor_45t62ASG^TfgSDA@#!Raaf";


QMEditor.CONST.LANGUAGE={};
QMEditor.CONST.LANGUAGE.zh_CN={
CHG_CONTENTTYPE:"转换内容为纯文本格式有可能丢失某些格式，确定使用纯文本吗？"
};


QMEditor.CONST.mw={

"editor_toolbar.js":"Separate Bold Italic Underline FontName FontName FontSize ForeColor BackColor AlignMode Serial Indent CreateLink SourceEdit Preview SpellCheck UploadEml",
"editor_toolbar_plus.js":"Photo Mo ScreenSnap Music"
};


QMEditor.CONST.FUNCLIST={};
QMEditor.CONST.FUNCLIST.BASE={
toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent | CreateLink Mo Photo ScreenSnap SourceEdit"
};
QMEditor.CONST.FUNCLIST.COMPOSE={
toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent | CreateLink SourceEdit Preview SpellCheck",
tbExtern:"Photo Mo ScreenSnap Music"
};
QMEditor.CONST.FUNCLIST.BIZMAIL_COMPOSE={
toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent | CreateLink SourceEdit Preview SpellCheck",
tbExtern:"Photo Mo ScreenSnap"
};
QMEditor.CONST.FUNCLIST.QF_COMPOSE={
toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent | CreateLink SourceEdit Preview UploadEml",
tbExtern:""
};
QMEditor.CONST.FUNCLIST.GROUP={
toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent | CreateLink SourceEdit",
tbExtern:"Photo Mo ScreenSnap"
};
QMEditor.CONST.FUNCLIST.NOTE={
toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent | CreateLink SourceEdit",
tbExtern:"Photo Mo ScreenSnap"
};
QMEditor.CONST.FUNCLIST.MO={
toolbar:"Bold Italic Underline | FontName FontSize ForeColor BackColor | AlignMode Serial Indent | CreateLink Mo SourceEdit"
};


QMEditor.CONST.ak={
hD:T([
'<table cellspacing=0 cellpadding=0 class="QMEditorBase" style="$border$" >',
'<tr style="display:none;"><td height="1%" class="QMEditorToolBar" valign="top" unselectable="on" onmousedown="return false;" >',
'<div class="QMEditorToolBarDiv">',
'<div></div><div style="display:none;"></div><div class="QMEditorBtnIcon" style="width:1px;" ></div>',
'</div>',
'</td></tr>',
'<tr><td height="99%" valign="top" unselectable="on" class="QMEditorContent">',
'$editcontainer$',
'<textarea class="QMEditorText" style="display:none;font-size:12px;$style$"></textarea>',
'<textarea class="QMEditorText" style="display:none;font-size:12px;$style$"></textarea>',
'</td></tr>',
'</table><div class="QMEditorBaseBd"></div>'
]),
nF:T([
'<div class="QMEditorDivEditArea">$content$</div>'
]),
ly:T([
'<textarea class="QMEditorText" tabindex="$tabIdx$" style="font-size:12px;$style$"></textarea>',
]),
lv:T([
'<script>',
'window.onerror = function() { return true; };',
'</script>',
'<style>',
'body {margin:0;overflow:auto;font:normal 14px Verdana;background:#fff;padding:2px 4px 0;cursor:text;}',
'body, p, font, div, li { line-height: 1.5;}',
'body, td, th {color:#000000;}',
'.i {width:100%;*width:auto;table-layout:fixed;}',
'pre {white-space: pre-wrap;white-space: -moz-pre-wrap;white-space: -pre-wrap;white-space: -o-pre-wrap;word-wrap: break-word;}',
'a img {border:none;}',

'a { color: -moz-hyperlinktext !important;text-decoration: -moz-anchor-decoration;}',
'</style>',
]),
mT:T([
'<body $editable$ >$content$</body>',
]),
jX:T(['<div class="QMEditorToolBarItem" unselectable="on" onmousedown="return false;" style="float:$floatPositon$"></div>']),
jY:T(['<span class="QMEditorTBExternItem"></span>']),
BOTTON_ICON:T([
'<div class="QMEditorBtnIcon" style="width:$width$px;margin:$margin$;$style$;overflow:hidden;" ',
' unselectable="on" onmousedown="return false;" title="$title$" >',
'<div style="$imgstyle$">',
'<img src="$path$$src$" style="margin-left:$bgleft$px;margin-top:$topNum$px;" unselectable="on" onmousedown="return false;" />',
'</div>',
'</div>']),
BOTTON_TEXT:T([
'<span style="font-size:12px;cursor:pointer;margin:$margin$;" title="$title$" unselectable="on" onmousedown="return false;" >',

'<input  style="background:url($path$$src$) $bgleft$px 0 no-repeat;" class="qmEditorToolBarPlusIcon"  />',
'<a style="margin:$lbMargin$;" href="javascript:;" unselectable="on">$label$</a>',
'</span>']),
BOTTON_BIG:T([
'<a unselectable="on">',
'<img src="$src$" align="absmiddle">$label$',
'</a>']),
nd:T([
'<div class="QMEditorMenuBorder" style="display:none;$style$" unselectable="on" onmousedown="return false;" >$innerHTML$</div>']),
jW:T([
'<div class="QMEditorMenuItem" param="$param$" style="$style$;" title="$title$" unselectable="on" $event$ >',
'$content$',
'</div>']),
iL:T([
'onmouseover="',
'if ( this.className != \'QMEditorMenuItemDisabled\' && this.className != \'QMEditorMenuItemOver\' )',
'{',
'this.className = \'QMEditorMenuItemOver\';',
'}',
'" onmouseout="',
'var _sClassName = this.getAttribute( \'curclass\' ) || \'QMEditorMenuItem\';',
'if ( this.className != _sClassName )',
'{',
'this.className = _sClassName',
'}',
'" '])
};


QMEditor.FUNCLIB={};


QMEditor.FUNCLIB.R=function(ho,nb)
{
ho.prototype=new nb();
return ho;
}

QMEditor.FUNCLIB.D=function(l)
{
this.H="_BASE";
this.af="label";
this.dB=false;
this.cT="";
this.N={};
this.dK={};
};


QMEditor.FUNCLIB.D.prototype.ea=function(l)
{
if(this.lQ())
{
return false;
}

this.ad=l.container;
this.bC=l.uiType
if(!this.h||!this.ad)
{
return false;
}

this.ad.innerHTML=this.dP();

if(this.cT)
{
this.ad.className=this.cT;
}

if(!this.ba)
{
this.ba=this.H;
}

if(typeof(this.af)!="string")
{
this.af="label";
}

if(this.af!="label")
{
if(typeof(this.aW)!="function")
{
var c=this,
lh={
btn:c.ax,
checkbox:c.ax,
menu:c.lB
}[c.af];
c.aW=function(d)
{
if(c.h.ev)
{
c.h.ev("html");
}
lh.call(this,d);
};
}

if(this.af=="menu"&&typeof(this.eR)!="function")
{
this.eR=this.aT;
}

if(this.af=="btn")
{
this.lP=this.ls;
}

this.ec("keydown");
this.ec("selectionchange");
this.ec("contextmenu");
this.ec("paste");

this.cE();
this.eP();
}

this.lI=true;

return true;
};

QMEditor.FUNCLIB.D.prototype.lQ=function()
{
return this.lI;
};

QMEditor.FUNCLIB.D.prototype.dP=function()
{
if(typeof(this.bC)!="string")
{
this.bC="icon"
}

var bz=this.N[this.bC];
if(!bz)
{
return"";
}

var ag=this.h.X[
["BOTTON_",this.bC.toUpperCase(),
(this.af=="custom"?"_"+this.H.toUpperCase():"")]
.join("")];

if(!ag)
{
return"";
}

if(!bz.path)
{
bz.path=this.h.gy;
}

if(!bz.src)
{
bz.src="newicon/editor_new.gif";
}



if(!gbIsIE&&this.bC=="icon")
{
bz.width=bz.width-2;
}

return ag.replace(bz);
};

QMEditor.FUNCLIB.D.prototype.ex=function()
{
if(this.eV)
{
this.eV();
this.ad.innerHTML=this.dP();
}
}

QMEditor.FUNCLIB.D.prototype.lV=function()
{
return this.dB;
};

QMEditor.FUNCLIB.D.prototype.fG=function(gw)
{
this.dB=gw;
if(this.bC=="icon")
{
var ab=this.ad.firstChild;
setClass(ab,gw?"QMEditorBtnIconCheck"
:ab.getAttribute("oldClassName")||"QMEditorBtnIcon"
);
}
};

QMEditor.FUNCLIB.D.prototype.ec=function(ce)
{



var jc={
"keydown":this.bK,
"selectionchange":this.lP,
"contextmenu":this.lK,
"paste":this.dL
}[ce];

var c=this;
if(typeof(jc)=="function")
{
c.h.addEvent(ce,function(d)
{
jc.call(c,d);
}
);
}

return c;
};

QMEditor.FUNCLIB.D.prototype.cE=function()
{
var c=this;

if(c.bC=="icon")
{
var aS=c.ad;

aS.onmouseover=function()
{
var ab=this.firstChild;
if(!c.dB)
{
setClass(ab,"QMEditorBtnIconOver");
}
ab.setAttribute("oldClassName","QMEditorBtnIconOver");
};

aS.onmouseout=function()
{
var ab=this.firstChild;
if(!c.dB)
{
setClass(ab,"QMEditorBtnIcon");
}
ab.setAttribute("oldClassName","QMEditorBtnIcon");
};
}

return c;
};

QMEditor.FUNCLIB.D.prototype.eP=function()
{
var c=this;

if(typeof(c.aW)!="function")
{
return false;
}

c.ad.onclick=function(d)
{
d=d||c.h.ap.event;
c.aW.call(c,d);
preventDefault(d);
stopPropagation(d);
};

return true;
};

QMEditor.FUNCLIB.D.prototype.lo=function()
{
if(this.Y)
{
return false;
}

var aY=this.h.ap.document.body;
insertHTML(aY,"afterBegin",
this.h.X.nd.replace(
{
innerHTML:this.io()
}
)
);

this.Y=aY.firstChild;
this.bm();
this.kK();
return true;
};

QMEditor.FUNCLIB.D.prototype.io=function()
{
var k=this.h,
fj=k.X[this.bE
||("MENU_"+this.H.toUpperCase())]
||k.X.jW,
co=[];

for(var i=0,V=(this.aA||[]).length;i<V;i++)
{
var M=this.aA[i],
ag=M.X||fj;

M.event=M.event||k.X.iL;
M.path=M.path||k.gy;
M.src=M.src||"newicon/editor.gif";

co.push(ag.replace(M));

if(M.param||M.cmd)
{
this.dK[(M.param||M.cmd).toUpperCase()]=M;
}
}

return co.join("");
};

QMEditor.FUNCLIB.D.prototype.bm=function()
{
};

QMEditor.FUNCLIB.D.prototype.kK=function()
{
var c=this;

if(typeof(c.eR)!="function")
{
return false;
}



c.Y.onclick=function(d)
{
d=d||c.h.ap.event;
if(!c.eR.call(c,d))
{
preventDefault(d);
}
stopPropagation(d);
};

return true;
};

QMEditor.FUNCLIB.D.prototype.eb=function()
{
var hv=calcPos(this.ad),
cM=hv[2],
ew=hv[3];



if(this.bC=="text")
{
cM+=1;
}

var dh=this.Y,
dX=dh.ownerDocument.body,

gR=dh.offsetWidth,
gQ=dh.offsetHeight,

gD=dX.clientWidth+dX.scrollLeft,
gC=dX.clientHeight+dX.scrollTop;

if(cM+gQ>gC)
{
cM=gC-gQ;
}

if(ew+gR>gD)
{
ew=gD-gR;
}

dh.style.top=(cM<0?0:cM)+"px";
dh.style.left=(ew<0?0:ew)+"px";
};

QMEditor.FUNCLIB.D.prototype.jy=function(di)
{
if(!this.Y)
{
return false;
}

var fg=this.h.dW();
if(fg==this)
{
return true;
}

if(fg)
{
fg.aq(di);
}

this.h.iw(this);



if(this.eW)
{
this.h.saveRange();
}

this.fG(true);

show(this.Y,true);
this.eb();

if(typeof(this.bA)=="function")
{
this.bA();
}

return true;
};

QMEditor.FUNCLIB.D.prototype.aq=function(di)
{
if(!this.Y)
{
return false;
}

if(this.h.dW()==this)
{
this.h.iw(null);
}

if(isShow(this.Y))
{
show(this.Y,false);
}

if(this.eW&&di)
{
this.h.loadRange();
}

this.fG(false);
this.gX();

return true;
};

QMEditor.FUNCLIB.D.prototype.gX=function()
{
};

QMEditor.FUNCLIB.D.prototype.ax=function(d)
{
this.h.bG(this.ba);
this.h.hideMenu();
};

QMEditor.FUNCLIB.D.prototype.ls=function(d)
{
var k=this.h;
if(k.ft(this.ba))
{
this.fG(k.hB(this.ba));
}
};

QMEditor.FUNCLIB.D.prototype.lB=function(d)
{
if(!this.Y)
{
this.lo();
}

if(this.lV())
{
this.aq(true);
}
else
{
this.jy(true);
}
};

QMEditor.FUNCLIB.D.prototype.aT=function(d)
{
var G=d.target||d.srcElement,
gd=G&&G.getAttribute("cmd"),
aj=G&&G.getAttribute("param");

if(aj||gd)
{
this.h.bG(gd||this.ba,aj);
this.aq();
}
};
