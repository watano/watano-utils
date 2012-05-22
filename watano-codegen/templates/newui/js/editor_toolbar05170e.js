



extend(QMEditor.CONST.LANGUAGE.zh_CN,{
FUN_SEPERATE:"间隔线",
FUN_BOLD:"加粗",
FUN_ITALIC:"斜体",
FUN_UNDERLINE:"下划线",
FUN_FONTNAME:"选择字体",
FUN_FONTSIZE:"选择字体大小",
FUN_FORECOLOR:"选择字体颜色",
FUN_BACKCOLOR:"选择背景颜色",
FUN_ALIGNMODE:"选择对齐方式",
FUN_SERIAL:"设置编号",
FUN_INDENT:"设置缩进",
FUN_CREATELINK:"插入/移除链接",
FUN_SOURCEEDIT:"编辑HTML源码",
FUN_PREVIEW:"预览",
FUN_UPLOADEML:"上传eml文件",
FUN_SPELLCHECK:"拼写检查",
FUN_SPELLCHECKTITLE:"英文拼写检查",
FUN_SPELLCHECKING:"检查中",


FS_XXSMALL:"小",
FS_XSMALL:"中",
FS_MEDIUM:"大",
FS_LARGE:"较大",
FS_XLARGE:"最大",

AM_LEFT:"左对齐",
AM_CENTER:"居中对齐",
AM_RIGHT:"右对齐",

SL_NUMBER:"数字编号",
SL_PROJECT:"项目编号",

IT_INDENT:"向右缩进",
IT_OUTDENT:"向左缩进",

CL_NAME:"文字：",
CL_LINK:"链接：",
CL_MODIFY:"修改",
CL_DELETE:"移除",
CL_CONFIRM:"添加",
CL_CANCEL:"取消",
CL_NAME_DEF:"默认使用链接名字",

SE_PREVIEW:"返回可视化编辑",
SE_PREVIEW_TITLE:"所见即所得",
SE_FORMAT:"格式化",
SE_FORMAT_TITLE:"代码格式化",
SE_FORMATTING:"正在格式化，请不要修改代码..."
}
);

extend(QMEditor.CONST.ak,{
jQ:T([
'<div class="QMEditorMenuItem" param="$color$" title="$color$" style="float:left;width:auto;height:auto;" unselectable="on" $event$ >',
'<div class="QMEditorMenuColor" param="$color$" style="background:$color$;" unselectable="on"></div>',
'</div>'
]),
jF:T([
'<br style="clear:both;">'
]),
MENU_SELECT_ITEM:T([
'<b>&#187;</b>&nbsp;$content$'
]),
MENU_ICON_ITEM:T([
'<div class="QMEditorMenuItem" cmd="$cmd$" style="$style$;" title="$title$" unselectable="on" $event$ >',
'<div class="QMEditorMenuIcon" cmd="$cmd$" style="float:left;widthed:$width$px;width:14px;margin:$margin$;overflow:hidden;" unselectable="on">',
'<img src="$path$$src$" style="margin-left:$bgleft$px;margin-top:$topNum$px;" unselectable="on" onmousedown="return false;" />',
'</div>',
'&nbsp;<span cmd="$cmd$" unselectable="on">$content$</span>',
'</div>'
]),
MENU_CREATELINK:T([
'<div class="QMEditorMenuPanel" unselectable="on" >',
'<div class="QMEditorLinkDiv" unselectable="on" >',
'$langName$<input param="name" type="text" onmousedown="try{stopPropagation(event);}catch(e){getTop().stopPropagation(event);}" > ',
'</div>',
'<div class="QMEditorLinkDiv" unselectable="on" >',
'$langLink$<input param="link" type="text" onmousedown="try{stopPropagation(event);}catch(e){getTop().stopPropagation(event);}" />',
'</div>',
'<div class="QMEditorLinkButton" unselectable="on" >',
'<button param="modify" class="QMEditorButton1 QMEditorLinkBtn" unselectable="on" >$langModify$</button>',
'<button param="delete" class="QMEditorButton1 QMEditorLinkBtn" unselectable="on" >$langDelete$</button>',
'<button param="confirm" class="QMEditorButton1 QMEditorLinkBtn" unselectable="on" >$langConfirm$</button>',
'<button param="cancel" class="QMEditorButton1 QMEditorLinkBtn" unselectable="on" >$langCancel$</button>',
'</div>',
'</div>'
]),
BOTTON_ICON_SOURCEEDIT:T([
'<div class="QMEditorBtnA" style="$style$;padding-left:0;" ',
' unselectable="on" onmousedown="return false;" title="$title$" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'">&lt;HTML&gt;</div>'
]),
SOURCEEDIT_TOOLBAR:T([
'<div class="QMEditorBtnA" style="float:right;padding:2px 5px 0 0;* padding:3px 5px 0 0;" unselectable="on" onmousedown="return false;" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" title="$formatTitle$" >',
'<span style="display:none;">',
'$langFormatting$<span></span>',
'</span>',
'<span>$langFormat$</span>',
'</div>',
'<div class="QMEditorBtnA QMEditorFormatBtn" unselectable="on" onmousedown="return false;" title="$previewTitle$"onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'">',
'$langPreview$<b>&#187;</b>',
'</div>'
]),
BOTTON_ICON_PREVIEW:T([
'<div class="QMEditorBtnA" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="$style$;padding-left:0;" ',
' unselectable="on" onmousedown="return false;" title="$title$" >$langPreview$</div>'
]),

BOTTON_ICON_UPLOADEML:T([
'<div class="QMEditorBtnA" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="$style$;padding-left:0;" ',
' unselectable="on" onmousedown="return false;" title="$title$" >$langUploadEml$</div>'
]),


BOTTON_ICON_SPELLCHECK:T([
'<div class="QMEditorBtnA" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="$style$;padding-left:0;" ',
' unselectable="on" onmousedown="return false;" title="$title$" >$content$</div>'
])

});

QMEditor.CONST.nf=[
'#000000 #993300 #333300 #003300 #003366 #000080 #333399 #333333',
'#800000 #FF6600 #808000 #008000 #008080 #0000FF #666699 #808080',
'#FF0000 #FF9900 #99CC00 #339966 #33CCCC #3366FF #800080 #999999',
'#FF00FF #FFCC00 #FFFF00 #00FF00 #00FFFF #00CCFF #993366 #C0C0C0',
'#FF99CC #FFCC99 #FFFF99 #CCFFCC #CCFFFF #99CCFF #CC99FF #FFFFFF'
];



QMEditor.prototype.iU=function()
{
return this.ae.getSelection
?this.ae.getSelection().getRangeAt(0).collapsed
:this.I.selection.type=="None";
};

QMEditor.prototype.ii=function()
{
var aa,B,
O=this.I.selection;

if(O)
{
B=O.createRange();

if(O.type=="Control")
{
for(var i=0,V=B.length;i<V;i++)
{
if(B(i).parentNode)
{
aa=B(i).parentNode;
break;
}
}
}
else
{
aa=B.parentElement();
}
}
else
{
B=this.ae.getSelection().getRangeAt(0);

if(!(B.startContainer!=B.endContainer
||B.startContainer.nodeType!=1||B.startOffset!=B.endOffset
-1))
{
aa=B.startContainer.childNodes[B.startOffset];
if(aa.nodeType!=1)
{
aa=null;
}
}

if(!aa)
{
aa=B.endContainer;
}
}

return aa;
};

QMEditor.prototype.lA=function(el)
{
var aa=this.ii();

while(aa&&aa.nodeName!=el)
{
aa=aa.parentNode;
}

return aa;
};

QMEditor.prototype.lY=function(el)
{
var aa=this.ii(),
bW=aa;

while(bW&&bW.nodeName!=el)
{
bW=bW.parentNode;
}

if(bW)
{
return true;
}

if(this.iU())
{
return false;
}

(function(w)
{
if(!w)
{
return;
}

if(w.nodeName==el)
{
bW=w;
return;
}

for(var es=w.firstChild,gj;es;es=gj)
{
gj=es.nextSibling;
arguments.callee(es);
}
})(aa.parentNode);

return!!bW;
};

QMEditor.prototype.ev=function(bi)
{
if(this.aJ=="text")
{
return false;
}

if(this.aJ==bi)
{
return true;
}

var bN=bi=="source",
gU=bN?"source":"html";


if(gbIsWebKit)
{
(bN?this.L:this.bf).blur();
}

this.bh.style.display=bN?"none":"block";
this.bf.style.display=bN?"block":"none";

show(this.dJ,!bN);
show(this.dM,bN);

this.bT(
gU,
this.bu(bN?"html":"source")
);

this.aJ=gU;
this.focus(0);
};




QMEditor.FUNCLIB.fK=QMEditor.FUNCLIB.R(function()
{
this.H="MENUSTATUS";
this.af="menu";

this.bA=this.aC;
},QMEditor.FUNCLIB.D
);

QMEditor.FUNCLIB.fK.prototype.aC=function(d)
{
var c=this,
aB=c.h.X.MENU_SELECT_ITEM,
ac=c.h.hA(c.ba);

if(typeof(ac)!="string"&&typeof(ac)!="number")
{

ac="";
}
ac=ac.toString().toUpperCase();

E(this.Y.childNodes,function(w)
{
var aj=w.getAttribute("param").toUpperCase(),
aw=c.dK[aj].content,
eJ=ac==aj
?"QMEditorMenuItemCheck"
:"QMEditorMenuItem";

if(w.className!=eJ)
{
w.className=eJ;
w.setAttribute("curclass",eJ);
}

w.innerHTML=ac==aj
?aB.replace({content:aw})
:aw;
}
);
};


QMEditor.FUNCLIB.dR=QMEditor.FUNCLIB.R(function()
{
this.H="MENUCOLOR";
this.af="menu";

this.aA=QMEditor.CONST.nf;

this.bA=this.aC;
},QMEditor.FUNCLIB.D
);

QMEditor.FUNCLIB.dR.prototype.aC=function(d)
{
var ac=this.h.hA(this.ba);

if(typeof(ac)=="string")
{
var ah=ac.substring(4,ac.length-1).split(",");
for(var i=0,V=ah.length;i<V;i++)
{
ah[i]=parseInt(trim(ah[i])).toString(16);
if(ah[i].length==1)
{
ah[i]="0"+ah[i];
}
}
ac=ah.join("");
}
else if(typeof(ac)=="number")
{
ah=[ac.toString(16)];
for(var i=0,V=6-ah[0].length;i<V;i++)
{
ah.unshift("0");
}
ah=ah.join("").split("");

var eM=ah[0];
ah[0]=ah[4];
ah[4]=eM;
eM=ah[1];
ah[1]=ah[5];
ah[5]=eM;
ac=ah.join("");
}
else
{
return;
}

ac="#"+ac;

var aB=this.h.X.MENU_SELECT_ITEM;
ac=ac.toString().toUpperCase();

E(this.Y.childNodes,function(w)
{
var aj=w.getAttribute("param");

if(aj)
{
var aM=ac==aj
?"QMEditorMenuItemCheck"
:"QMEditorMenuItem";

if(aM!=w.className)
{
w.className=aM;
w.setAttribute("curclass",aM);
}
}
}
);
};

QMEditor.FUNCLIB.dR.prototype.io=function()
{
var k=this.h,
fj=k.X.jQ,
fl=k.X.iL,
nh=k.X.jF,
co=[];

E(this.aA,function(cw)
{
E(cw.split(" "),function(cw)
{
co.push(fj.replace(
{
color:cw,
event:fl
}
));
}
);
co.push(nh);
}
);

return co.join("");
};


QMEditor.FUNCLIB.iX=QMEditor.FUNCLIB.R(function()
{
this.H="MENUICON";
this.af="menu";
this.bE="MENU_ICON_ITEM";
},QMEditor.FUNCLIB.D
);


QMEditor.FUNCLIB.ek=QMEditor.FUNCLIB.R(function()
{
this.H="MENUICONSTATUS";

this.bA=this.aC;
},QMEditor.FUNCLIB.iX
);

QMEditor.FUNCLIB.ek.prototype.aC=function(
d)
{
var c=this,
aB=c.h.X.MENU_SELECT_ITEM;

E(c.Y.childNodes,function(w,i)
{
var fH=c.kY(w.getAttribute("cmd"));

if(typeof(fH)=="boolean")
{
var aw=c.aA[i].content,
aM=fH
?"QMEditorMenuItemCheck":"QMEditorMenuItem";

if(aM!=w.className)
{
w.className=aM;
w.setAttribute("curclass",aM);
}

w.lastChild.innerHTML=fH
?aB.replace({content:aw})
:aw;
}
}
);
};

QMEditor.FUNCLIB.ek.prototype.kY=function(aR)
{
return this.h.hB(aR);
};


QMEditor.FUNCLIB.hY=QMEditor.FUNCLIB.R(function()
{
this.H="MENUICONDISABLE";

this.bA=this.aC;
},QMEditor.FUNCLIB.iX
);

QMEditor.FUNCLIB.hY.prototype.aC=function(
d)
{
var c=this;
E(c.Y.childNodes,function(w)
{
var aM=
c.h.ft(w.getAttribute("cmd"))
?"QMEditorMenuItem":"QMEditorMenuItemDisabled";

if(aM!=w.className)
{
w.className=aM;
w.setAttribute("curclass",aM);
}
}
);
};




QMEditor.FUNCLIB.Separate=QMEditor.FUNCLIB.R(function(l)
{
this.H="Separate";
this.af="label";
this.h=l.editor;
this.N.icon={
bgleft:-27,
width:3,
margin:"0",
title:this.h.J.FUN_SEPERATE
};
},QMEditor.FUNCLIB.D
);


QMEditor.FUNCLIB.Bold=QMEditor.FUNCLIB.R(function(l)
{
this.H="Bold";
this.af="btn";
this.h=l.editor;
this.N.icon={
bgleft:2,
width:20,
margin:"0",
title:this.h.J.FUN_BOLD
};


this.bK=function(d)
{
if(d.ctrlKey&&d.keyCode==66)
{
this.ax();
preventDefault(d);
}
};
},QMEditor.FUNCLIB.D
);


QMEditor.FUNCLIB.Italic=QMEditor.FUNCLIB.R(function(l)
{
this.H="Italic";
this.af="btn";
this.h=l.editor;
this.N={};
this.N.icon={
bgleft:-30,
width:20,
margin:"0",
title:this.h.J.FUN_ITALIC
};


this.bK=function(d)
{
if(d.ctrlKey&&d.keyCode==73)
{
this.ax();
preventDefault(d);
}
};
},QMEditor.FUNCLIB.D
);


QMEditor.FUNCLIB.Underline=QMEditor.FUNCLIB.R(
function(l)
{
this.H="Underline";
this.af="btn";
this.h=l.editor;
this.N.icon={
bgleft:-60,
width:18,
margin:"0 4px 0 0",
title:this.h.J.FUN_UNDERLINE
};


this.bK=function(d)
{
if(d.ctrlKey&&d.keyCode==85)
{
this.ax();
preventDefault(d);
}
};
},QMEditor.FUNCLIB.D
);


QMEditor.FUNCLIB.FontName=QMEditor.FUNCLIB.R(function(l)
{
this.H="FontName";
this.h=l.editor;
this.N.icon={
bgleft:-94,
width:24,
margin:"0 1px 0 0",
title:this.h.J.FUN_FONTNAME
};

this.aA=[{
param:"宋体",
style:"font-family:宋体",
content:"宋体"
},{
param:"黑体",
style:"font-family:黑体",
content:"黑体"
},{
param:"楷体_GB2312",
style:"font-family:楷体_GB2312",
content:"楷书"
},{
param:"幼圆",
style:"font-family:幼圆",
content:"幼圆"
},{
param:"Arial",
style:"font-family:Arial",
content:"Arial"
},{
param:"Arial Black",
style:"font-family:Arial Black;",
content:"Arial Black"
},{
param:"Times New Roman",
style:"font-family:Times New Roman",
content:"Times New Roman"
},{
param:"Verdana",
style:"font-family:Verdana",
content:"Verdana"
}];
},QMEditor.FUNCLIB.fK);


QMEditor.FUNCLIB.FontSize=QMEditor.FUNCLIB.R(function(l)
{
var n=l.editor.J;
this.H="FontSize";
this.h=l.editor;
this.N.icon={
bgleft:-124,
width:24,
margin:"0 1px 0 0",
title:n.FUN_FONTSIZE
};

this.aA=[{
param:"1",
style:"font-size:xx-small;",
content:n.FS_XXSMALL
},{
param:"2",
style:"font-size:x-small;",
content:n.FS_XSMALL
},{
param:"4",
style:"font-size:medium;",
content:n.FS_MEDIUM
},{
param:"5",
style:"font-size:large;line-height:28px;height:26px;",
content:n.FS_LARGE
},{
param:"6",
style:"font-size:x-large;line-height:36px;height:34px;",
content:n.FS_XLARGE
}];
},QMEditor.FUNCLIB.fK);


QMEditor.FUNCLIB.ForeColor=QMEditor.FUNCLIB.R(
function(l)
{
this.H="ForeColor";
this.h=l&&l.editor;
this.N.icon={
bgleft:-158,
width:24,
margin:"0 1px 0 0",
title:this.h
&&this.h.J.FUN_FORECOLOR
};
},QMEditor.FUNCLIB.dR
);


QMEditor.FUNCLIB.BackColor=QMEditor.FUNCLIB.R(
function(l)
{
this.H="BackColor";
this.ba=gbIsIE||gbIsWebKit?this.H:"hilitecolor";
this.h=l.editor;
this.N.icon={
bgleft:-190,
width:24,
margin:"0 4px 0 0",
title:this.h.J.FUN_BACKCOLOR
};
},QMEditor.FUNCLIB.dR
);


QMEditor.FUNCLIB.AlignMode=QMEditor.FUNCLIB.R(
function(l)
{
var n=l.editor.J;
this.H="AlignMode";
this.h=l.editor;
this.N.icon={
bgleft:-222,
width:24,
topNum:2,
margin:"0 1px 0 0",
title:n.FUN_ALIGNMODE
};

this.aA=[{
bgleft:-350,
topNum:2,
cmd:"justifyleft",
content:n.AM_LEFT
},{
bgleft:-382,
topNum:2,
cmd:"justifycenter",
content:n.AM_CENTER
},{
bgleft:-414,
topNum:2,
cmd:"justifyright",
content:n.AM_RIGHT
}];
},QMEditor.FUNCLIB.ek
);


QMEditor.FUNCLIB.Serial=QMEditor.FUNCLIB.R(function(l)
{
var n=l.editor.J;
this.H="Serial";
this.h=l.editor;
this.N.icon={
bgleft:-254,
width:24,
topNum:2,
margin:"0 1px 0 0",
title:n.FUN_SERIAL
};

this.aA=[{
bgleft:-446,
topNum:2,
cmd:"insertorderedlist",
content:n.SL_NUMBER
},{
bgleft:-478,
topNum:2,
cmd:"insertunorderedlist",
content:n.SL_PROJECT
}];
},QMEditor.FUNCLIB.ek);


QMEditor.FUNCLIB.Indent=QMEditor.FUNCLIB.R(function(l)
{
var n=l.editor.J;
this.H="Indent";
this.h=l.editor;
this.N.icon={
bgleft:-286,
width:24,
topNum:2,
margin:"0 1px 0 0",
title:n.FUN_INDENT
};

this.aA=[{
bgleft:-542,
topNum:2,
cmd:"indent",
content:n.IT_INDENT
},{
bgleft:-510,
topNum:2,
cmd:"outdent",
content:n.IT_OUTDENT
}];
},QMEditor.FUNCLIB.hY
);


QMEditor.FUNCLIB.CreateLink=QMEditor.FUNCLIB.R(function(
l)
{
this.H="CreateLink";
this.af="menu";
this.eW=true;
this.h=l.editor;
this.bE="MENU_CREATELINK";

var n=this.h.J;

this.N.icon={
bgleft:-318,
width:20,
topNum:2,
margin:"0 4px 0 0",
title:n.FUN_CREATELINK
};


this.aA=[{
langName:n.CL_NAME,
langLink:n.CL_LINK,
langModify:n.CL_MODIFY,
langDelete:n.CL_DELETE,
langConfirm:n.CL_CONFIRM,
langCancel:n.CL_CANCEL
}];


this.bA=this.aC;
},QMEditor.FUNCLIB.D
);

QMEditor.FUNCLIB.CreateLink.prototype.cu=function(fL,
mB,bB)
{
for(var i=0,V=fL.length;i<V;i++)
{
if(fL[i].getAttribute(mB)==bB)
{
return fL[i];
}
}
return null;
};

QMEditor.FUNCLIB.CreateLink.prototype.bm=function()
{
var c=this,
n=c.h.J,
cz=GelTags("input",c.Y),
aO=GelTags("button",c.Y),
o=this.ao={
bc:c.cu(cz,"param","name"),
bb:c.cu(cz,"param","link"),
hh:c.cu(aO,"param","modify"),
mn:c.cu(aO,"param","delete"),
dr:c.cu(aO,"param","confirm"),
dY:c.cu(aO,"param","cancel")
},
bc=o.bc,
dr=o.dr,
dY=o.dY;

bc.className="QMEditorCLNameDef";
bc.value=n.CL_NAME_DEF;
bc.onfocus=function()
{
if(this.className!="QMEditorCLNameMdf")
{
this.className="QMEditorCLNameMdf";
this.value="";
}
};
bc.onblur=function()
{
if(!this.value)
{
this.className="QMEditorCLNameDef";
this.value=n.CL_NAME_DEF;
}
};

addEvent(bc,"keydown",function(d)
{
if(d.keyCode==13)
{
preventDefault(d);
}

if(d.keyCode==27)
{
c.aT({target:dY});
preventDefault(d);
}
}
);

addEvent(o.bb,"keydown",function(d)
{
if(d.keyCode==13)
{
c.aT({target:isShow(dr)
?dr:o.hh});
preventDefault(d);
}

if(d.keyCode==27)
{
c.aT({target:dY});
preventDefault(d);
}
}
);
};

QMEditor.FUNCLIB.CreateLink.prototype.kJ=function()
{
var o=this.ao,
bb=o.bb,
ez=this.iB,
bk=this.iu;

show(o.bc.parentNode,!ez&&this.gl);
show(bb.parentNode,!(ez&&!bk));
show(o.hh,bk);
show(o.mn,ez);
show(o.dr,!ez);

bb.value=(bk&&bk.href)||"";
if(isShow(bb.parentNode))
{
bb.focus();
bb.select();
}
};

QMEditor.FUNCLIB.CreateLink.prototype.aC=function(d)
{
var k=this.h;
nz=k.ae;

this.iB=k.ft("Unlink")
&&k.lY("A");
this.iu=this.iB&&k.lA("A");
this.gl=k.iU();

this.kJ();
};

QMEditor.FUNCLIB.CreateLink.prototype.aT=function(d)
{
var G=d.target||d.srcElement,
aj=G&&G.getAttribute("param"),
k=this.h;

switch(aj)
{
case"delete":
this.aq(true);
k.bG("Unlink");
break;
case"modify":
this.aq(true);
this.iu.href=this.cB();
break;
case"confirm":
this.aq(true);
if(this.gl)
{
if(k.I.selection)
{
k.I.selection.createRange()
.pasteHTML(T('<a href="$url$" >$name$</a>').replace(
{
url:this.cB(),
name:this.il()
}
));
}
else
{
var B=k.ae.getSelection().getRangeAt(0),
bk=k.I.createElement("a");
bk.href=this.cB();
bk.innerHTML=this.il();

B.insertNode(bk);
B.setStartAfter(bk);
}
}
else
{
k.bG(this.ba,this.cB());
}
break;
case"cancel":
this.aq(true);
break;
}
};

QMEditor.FUNCLIB.CreateLink.prototype.cB=function()
{
var bP=this.ao.bb.value;

if(/[a-zA-Z_0-9.-]+@[a-zA-Z_0-9.-]+\.\w+/.test(bP))
{
return trim(bP).toLowerCase().indexOf("mailto")==0
?bP
:"mailto:"+bP;
}

return trim(bP).indexOf("://")==-1?"http://"+bP:bP;
};

QMEditor.FUNCLIB.CreateLink.prototype.il=function()
{
var gh=this.ao.bc;
return gh.className=="QMEditorCLNameDef"
?this.cB()
:gh.value||this.cB();
};


QMEditor.FUNCLIB.SourceEdit=QMEditor.FUNCLIB.R(function(
l)
{
this.H="SourceEdit";
this.af="custom";
this.h=l.editor;

var n=this.h.J;
this.N.icon={
title:n.FUN_SOURCEEDIT
};
this.N.sourceToolBar={
formatTitle:n.SE_FORMAT_TITLE,
langFormat:n.SE_FORMAT,
previewTitle:n.SE_PREVIEW_TITLE,
langPreview:n.SE_PREVIEW,
langFormatting:n.SE_FORMATTING
};


this.aW=this.ax;
},QMEditor.FUNCLIB.D
);

QMEditor.FUNCLIB.SourceEdit.prototype.cE=function(cF)
{
};

QMEditor.FUNCLIB.SourceEdit.prototype.ax=function(d)
{

var aH=this.h.aL.SpellCheck;
if(aH)
{
aH.cL(0,0,1);
}

this.jG();
this.h.hideMenu();
this.h.ev("source");
};

QMEditor.FUNCLIB.SourceEdit.prototype.jG=function()
{
var eT=this.h.dM;

if(eT.getAttribute("setuped")=="true")
{
return false;
}

eT.innerHTML=this.h.X.SOURCEEDIT_TOOLBAR
.replace(this.N.sourceToolBar);

eT.setAttribute("setuped","true");

this.kD();
};

QMEditor.FUNCLIB.SourceEdit.prototype.kD=function()
{
var c=this,
bM=c.h.dM.firstChild,
mV=bM.nextSibling;

mV.onclick=function()
{
if(c.am)
{
clearInterval(c.am);
}
c.h.ev("html");

var aH=c.h.aL.SpellCheck;
if(aH)
{
aH.cL(1,0,1);
}
};

bM.onclick=function()
{
c.jt();
};
};

QMEditor.FUNCLIB.SourceEdit.prototype.jt=function()
{
var c=this;
k=c.h;

if(!window.QMFormatter)
{
k.dy(
{
"plus/formatter.js":true
}
);

if(c.am)
{
return;
}

this.am=setInterval(function()
{
c.jt();
},500);

return;
}

if(this.am)
{
clearInterval(this.am);
}

var bM=k.dM.firstChild,
fq=bM.firstChild,
hl=fq.lastChild,
gv=bM.lastChild;

show(fq,true);
show(gv,false);

bM.className="QMEditorFormatting";
hl.innerHTML="0%";

function dH(nu)
{
k.bT("source",nu);

show(fq,false);
show(gv,true);

bM.className="QMEditorBtnA";
};

function kf(mr)
{
hl.innerHTML=mr;
}

QMFormatter.format(k.bu("source"),
dH,kf
);

};


QMEditor.FUNCLIB.Preview=QMEditor.FUNCLIB.R(function(l)
{
this.H="Preview";
this.af="custom";
this.h=l.editor;
this.cT="qmEditorToolBarItemRight";
var n=this.h.J;
this.N.icon={
title:n.FUN_PREVIEW,
langPreview:n.FUN_PREVIEW
};
this.aW=this.ax;
},QMEditor.FUNCLIB.D
);

QMEditor.FUNCLIB.Preview.prototype.ax=function(d)
{
var k=this.h;

getTop().callBack.call(k,k.lN);
};

QMEditor.FUNCLIB.Preview.prototype.cE=function(cF)
{
};


QMEditor.FUNCLIB.UploadEml=QMEditor.FUNCLIB.R(function(l)
{
this.H="UploadEml";
this.af="custom";
this.h=l.editor;
this.cT="qmEditorToolBarItemRight";
var n=this.h.J;
this.N.icon={
title:n.FUN_UPLOADEML,
langUploadEml:n.FUN_UPLOADEML
};
this.aW=this.ax;
},QMEditor.FUNCLIB.D
);

QMEditor.FUNCLIB.UploadEml.prototype.ax=function(d)
{
var k=this.h;

getTop().callBack.call(k,k.lS);
};

QMEditor.FUNCLIB.UploadEml.prototype.cE=function(cF)
{
};


QMEditor.FUNCLIB.SpellCheck=QMEditor.FUNCLIB.R(function(l)
{


if(!getOpenSpellCheck())
{
return;
}

this.H="spellcheck";
this.af="custom";
this.h=l.editor;
this.cT="qmEditorToolBarItemRight";
var n=this.h.J;
this.N.icon={
title:n.FUN_SPELLCHECKTITLE,
content:n.FUN_SPELLCHECK
};
this.aW=this.ax;








this.cJ={};

this.h.aL.SpellCheck=this;


this.lf=/(.*?)((<.*?>)|(&nbsp;)|[^\x00-\xff]|[\[\]\"\'\\\-!$^()_,.:;<>?/`＄＾＊＿［］{}．＂＇＜＞／￣｀@#%&*+=|~！＠＃￥％…＆×（）－—＋＝【】｛｝，。：；“”‘’＼｜《》？、～·\t\r\v\f\x20\n　])/g;
this.lg=/(.*?)([\[\]\"\'\\\-!$^()_,.:;<>?/`＄＾＊＿［］{}．＂＇＜＞／￣｀@#%&*+=|~！＠＃￥％…＆×（）－—＋＝【】｛｝，。：；“”‘’＼｜《》？、～·\t\r\v\f\x20\n　])/g;

var hC={text:0,html:1},
c=this;

this.aI=hC[this.h.getContentType()];




createBlankIframe(getTop(),
{id:"spellcheckDocument"}
);


this.bs=new QMAjax("/cgi-bin/speller");
this.bs.onComplete=function(hU)
{
var bt=c.bs.lb;
for(var W=bt.length-1;W>=0;W--)
{
c.cJ[bt[W]]={};
}
bt=evalValue(hU.responseText);
if(typeof bt=="object")
{
extend(c.cJ,bt);
}
if(c.aI&hC[c.h.getContentType()])
{
c.cL(1);
}
c.fw();
};
this.bs.onError=function(hU,dm)
{
if(dm!="abort")
{
showError("检查失败，请重试。");
}
c.fw();
};


},QMEditor.FUNCLIB.D
);

QMEditor.FUNCLIB.SpellCheck.prototype.ax=function(d)
{
var k=this.h,
G=getEventTarget(d),
nE=this.aI&4,
c=this;
this.ic=G;
if(this.aI&4)
{

return;
}
setTimeout(function()
{

c.mh();
});
};

QMEditor.FUNCLIB.SpellCheck.prototype.cE=function(cF)
{
};

QMEditor.FUNCLIB.SpellCheck.prototype.mh=function(mW)
{





if(mW)
{
this.bs.abort();
this.cL(0);
return;
}
this.gJ();

}


QMEditor.FUNCLIB.SpellCheck.prototype.jl=function()
{
var k=this.h,
jR=k.getContentType()=="text"?this.lg:this.lf,
fe=this.cJ,
bt=[],hm={},
aB=T('<$label$ class="" title="请单击鼠标来显示拼写建议" name="spellcheck" style="border-bottom:1px dotted #FF2E7E;">$w1$</$label$>$w2$'),
cQ=now(),
cr=[
["&lt;","%"+cQ+"#"],
["&gt;","%"+(cQ+1)+"#"],
["&amp;","%"+(cQ+2)+"#"],
["&quot;","%"+(cQ+3)+"#"]
],
gZ={},
aw=k.getContent();
for(var W=cr.length-1;W>=0;W--)
{
aw=aw.replace(new RegExp(cr[W][0],"gi"),cr[W][1]);
gZ[cQ+W]=1;
}

aw=aw.replace(jR,function(mC,bd,nm)
{
if(bd&&!gZ[bd])
{
if(!fe[bd])
{
if(!hm[bd])
{
hm[bd]=1;
bt.push(bd);
}
}
else if(fe[bd].suggestion&&!fe[bd].iC)
{
return aB.replace({
w1:bd,
w2:nm,
label:gbIsIE?"a":"span"
});
}
}
return(mC);
});

for(var W=cr.length-1;W>=0;W--)
{
aw=aw.replace(new RegExp(cr[W][1],"gi"),cr[W][0]);
}




return[bt,aw];
};

QMEditor.FUNCLIB.SpellCheck.prototype.fw=function()
{
var n=this.h.J,
bO=this.ic,
cd=bO.style;
bO.innerHTML=n.FUN_SPELLCHECK;
bO.title=n.FUN_SPELLCHECKTITLE;
cd.paddingTop="2px";
cd.cursor="pointer";
cd.textDecoration="underline";
this.aI&=0xF^4;
};


QMEditor.FUNCLIB.SpellCheck.prototype.kq=function()
{
var n=this.h.J,
bO=this.ic,
cd=bO.style;
bO.innerHTML=n.FUN_SPELLCHECKING;
bO.title=n.FUN_SPELLCHECKING;
cd.paddingTop="0";
cd.cursor="auto";
cd.textDecoration="none";
};

QMEditor.FUNCLIB.SpellCheck.prototype.gJ=function()
{
var ca=this.jl(),
c=this;
this.kq();
if(ca[0].length)
{
this.aI|=4;
this.bs.abort();
this.bs.lb=ca[0];
this.bs.send(T("wordlist=$wl$&sid=$sid$&t=compose_speller").replace({
wl:ca[0].join(" "),
sid:getSid()
})
);
return;
}
this.cL(1,ca[1]);
setTimeout(function(){
c.fw();
},1000);
};


QMEditor.FUNCLIB.SpellCheck.prototype.er=function(be)
{







var ht=be.parentNode;
while(be.firstChild)
{
ht.insertBefore(be.firstChild,be);
}
ht.removeChild(be);









};

QMEditor.FUNCLIB.SpellCheck.prototype.fv=function(fZ)
{


fZ=fZ||this.h.I;
var hk=fZ.getElementsByName("spellcheck");



for(var W=hk.length-1;W>=0;W--)
{
this.er(hk[W]);
}



}

QMEditor.FUNCLIB.SpellCheck.prototype.jA=function(d)
{
var bY=getEventTarget(d),
bS=this.cJ[bY.innerHTML];
if(!bS)
{
this.gJ();
}
else if(bS.suggestion)
{

var gu=calcPosFrame(bY,this.h.ae),


fr=bS.suggestion,
c=this,
nA=function(d)
{
var G=getEventTarget(d);

bY.innerHTML=G.innerText||G.textContent;
c.er(bY);
};
bq=[];

for(var W=0,lL=fr.length;W<lL;W++)
{
if(fr[W])
{


bq.push({
sId:W,
sItemValue:fr[W]
});
}
}
if(!bq.length)
{


bq.push({
sItemValue:"没有建议"
});
}


bq.push({
sItemValue:'<hr/>'
});

bq.push({
sId:"ignore",
sItemValue:"忽略"
});





if(this.h.I.getElementsByName("spellcheck").length>1)
{
bq.push({
sId:"ignoreall",
sItemValue:"全部忽略"
});










}
bS.H=bS.H||unikey("m");



new(getTop().QMMenu)({
sId:bS.H,
oEmbedWin:getTop(),
nX:gu[3],
nY:gu[2],
nWidth:150,
nItemHeight:21,
oItems:bq,
onitemclick:function(aQ)
{
if(aQ=="ignore")
{
bS.iC=1;
c.er(bY);
}
else if(aQ=="ignoreall")
{
E(c.cJ,function(mD)
{
mD.iC=1;
});
c.fv();
}
else
{
bY.innerHTML=bq[aQ].sItemValue;
c.er(bY);
}
}
});
}
};

QMEditor.FUNCLIB.SpellCheck.prototype.iV=function()
{
var c=this,
lk=function(){},
lD=function(d)
{
c.jA(d);
};
E(c.h.I.getElementsByName("spellcheck"),function(be)
{
if(!be.onclick)
{
addEvent(be,"click",lD);
be.onclick=lk;
}
});
};

QMEditor.FUNCLIB.SpellCheck.prototype.cL=function(ki,at,hE)
{
if(ki)
{
if(!hE||(this.aI&8))
{
var gq=this.h;
this.aI&=0xF^8;
this.aI|=2;
gq.setContent(at||this.jl()[1]);
this.iV();
gq.focus(0);
}
}
else
{
if(hE&&(this.aI&2))
{
this.aI|=8;
}
this.bs.abort();
this.aI&=0xF^2;
this.fv();
}
};




(function(){QMEditor.setupFunc();})();
