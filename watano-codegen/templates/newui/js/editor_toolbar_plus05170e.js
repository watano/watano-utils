



extend(QMEditor.CONST.LANGUAGE.zh_CN,{
FUN_PHOTO:"上传照片",
FUN_PHOTO_LABEL:"照片",
FUN_MO:"插入表情",
FUN_MO_LABEL:"表情",
FUN_SCREENSNAP:"捕获屏幕",
FUN_SCREENSNAP_SETUP_TIP:"请点击安装截屏"+QMAXInfo.getTitle()+"\r安装后您就可以很方便地截屏，并发送\n给您的好友一起交流分享。",
FUN_SCREENSNAP_LABEL:"截屏",
FUN_MUSIC:"插入背景音乐",
FUN_MUSIC_LABEL:"音乐",
FUN_MUSIC_LABEL_ADDED:"已添加",

COMM_CONFIRM:"确定",
COMM_CANCEL:"取消",
COMM_HELP:"帮助",

PO_LOCAL_PHOTO:"上传照片",
PO_LOCAL_DESC:"( 请点击“"+(gbIsIE||gbIsFF||gbIsQBWebKit?"浏览":(gbIsOpera?"选择":"选择文件"))+"”，在您电脑中选择您要上传的照片。)",
PO_LOCAL_INPUT:"选择照片：",
PO_LOCAL_OK:"立即上传",
PO_NET_PHOTO:"网络照片",
PO_NET_DESC:"( 请在下面输入框里面填上待插入图片的链接路径。)",
PO_NET_INPUT:"照片路径：",
PO_NET_OK:"立即插入",
PO_QQALBUM_DESC:"从QQ相册选取",

PO_DLG_TITLE:"上传图片",
PO_DLG_UPLOADING:"图片上传中...",
PO_DLG_UPLOADFAIL:"图片上传失败了！",
PO_DLG_UPLOADFAIL_INFO:"图片上传失败：您上传的图片大小($curSize$)超过了最大限制($allowSize$)。",

MO_LOADING:"表情加载中...",

MC_LOADING:"音乐加载中...",
MC_REPLACE_TIP:"您已经添加了背景音乐，是否需要替换为新的？",

SCREENSNAP_FAIL:"截屏不成功！",
SCREENSNAP_SAVEFAIL:"保存截屏图片不成功！",
UPLOADER_VERSION_LOW:"上传"+QMAXInfo.getTitle()+"版本过低，请升级！"
});

extend(QMEditor.CONST.ak,
{
STYLE:T(
[
'body, table, form {padding:0;margin:0;font-family:Verdana;font-size:12px;line-height:12px;}',
'table {padding-top:2px;}',
'.QMEditorTabEmptyLeft, .QMEditorTabEmptyRight {border-bottom:1px solid #aeaeae;}',
'.QMEditorTabEmptyLeft {padding-left:10px;}',
'.QMEditorTabEmptyRight {width:100%;}',
'.QMEditorTab {padding:4px 4px 2px 4px;border:1px solid #aeaeae;margin-top:2px;cursor:pointer;} ',
'.QMEditorTabSel {padding:4px;border:1px solid #aeaeae;border-bottom:none;border-top:2px solid #FFC83C;font-weight:bold;cursor:pointer;}',
'.QMEditorPoPanel {padding:15px 0 0 15px;}',
'.QMEditorPoDesc {margin-bottom:6px;color:gray;}',
'.QMEditorPoInputLabel {padding:5px 0 15px 1px;}',
'input {width:232px;height:20px;}',
'.QMEditorPoButton {text-align:right;padding-right:15px;}',
'.QMEditorButton1 {width:52px;margin:1px 2px 0 0}',
'.QMEditorButton2 {width:76px;*width:72px;margin:1px 2px 0 0}',
'.QMEditorButton1 .QMEditorButton2 {font-size:12x;height:auto;*height:22px;line-height:auto;*line-height:18px;padding:0 8px;*padding:0;}',
]
)
}
);

extend(QMEditor.CONST.ak,
{
MENU_PHOTO:T(
[
'<div style="width:330px;height:140px;" hideFocus="true"></div>'
]
),
jD:T(
[
'<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />',
'<link rel="stylesheet" type="text/css" href="$css_path$comm.css" />',
'<style>',
'$style$',
'</style>'
]
),
jw:T(
[
'<body unselectable="on" onmousedown="return false;" >',
'<body>'
]
),
jx:T(
[
'<table cellspacing="0" cellpadding="0" border="0" width="100%" unselectable="on" ><tr>',
'<td class="QMEditorTabEmptyLeft" unselectable="on" nowrap >&nbsp;</td>',
'<td style="$uploadDisp$" unselectable="on" nowrap>',
'<div param="localPhoto" class="QMEditorTabSel" unselectable="on">$langLocalPhoto$</div>',
'</td>',
'<td unselectable="on" nowrap >',
'<div param="netPhoto" class="QMEditorTab" style="border-left:none;" unselectable="on" >$langNetPhoto$</div>',
'</td>',
'<td class="QMEditorTabEmptyRight" unselectable="on" nowrap >&nbsp;</td>',
'</tr></table>',
'<div class="QMEditorPoPanel" unselectable="on" style="$uploadDisp$" >',
'<iframe name="QMEditorPhotoIframe$iframeId$"  src="javascript:\'\'" style="display:none;" onload="if(window.QMEditorPhotoLoaded)QMEditorPhotoLoaded(this);"  ></iframe>',
'<form action="$actionSrc$" enctype="multipart/form-data" method="post" target="QMEditorPhotoIframe$iframeId$" >',
'<div class="QMEditorPoDesc" unselectable="on" >$langLocalDesc$</div>',
'<div class="QMEditorPoInputLabel" unselectable="on">$langLocalInput$&nbsp;',
'<input type="file" name="UploadFile" onkeydown="return false;" />',
'<input type="hidden" name="sid"  value="$sid$" />',
'<input type="hidden" name="fun" value="add" />',
'<input type="hidden" name="mode" value="download" />',
'<input type="hidden" name="widthlimit" value="$widthlimit$" />',
'<input type="hidden" name="heightlimit" value="$heightlimit$" />',
'<input type="hidden" name="sizelimit" value="$sizelimit$" />',
'</div>',
'</form>',
'<div class="QMEditorPoButton" unselectable="on" >',
'<a style="position:relative;left:-87px;display:$qqalbumDisplay$" param="qqalbum">$langQQAlbum$</a>',
'<button class="QMEditorButton2" param="localok" >$langLocalOK$</button>&nbsp;',
'<button class="QMEditorButton1" param="cancel" >$langCancel$</button>',
'</div>',
'</div>',
'<div class="QMEditorPoPanel" style="display:none;" unselectable="on" >',
'<div class="QMEditorPoDesc" unselectable="on" >$langNetDesc$</div>',
'<div class="QMEditorPoInputLabel" unselectable="on" >$langNetInput$&nbsp;',
'<input type="text" class="txt" onmousedown="try{parent.stopPropagation(event);}catch(e){}" />',
'</div>',
'<div class="QMEditorPoButton" unselectable="on" >',
'<button class="QMEditorButton2" param="netok" >$langNetOK$</button>&nbsp;',
'<button class="QMEditorButton1" param="cancel" >$langCancel$</button>',
'</div>',
'</div>'
]
),
DIALOG_UPLOADIMG:T(
[
'<div style="padding-top:40px;font:normal 12px;">',
'<div id="uploading">',
'<img src="$imgPath$ico_loading2.gif" width="32" height="32" align=absmiddle style="margin:0 4px 0 0" />$langUploading$',
'<span id="uploadProcess"></span>',
'</div>',
'<div id="uploadFail" style="display:none;" >',
'$langUploadFail$',
'</div>',
'</div>'
]
),
MENU_MO:T(
[
'<div class="QMEditorMenuPanel" unselectable="on" ><span>$loading$</span></div>'
]
),
MENU_MUSIC:T(
[
'<div class="QMEditorMenuPanel" unselectable="on" ><span>$loading$</span></div>',
]
)
});




QMEditor.ai=function(bX)
{
this.h=bX;
};

QMEditor.ai.cP=function(bX)
{
if(!bX)
{
return null;
}
if(!bX.iD)
{
bX.iD=new QMEditor.ai(bX);
}
return bX.iD;
};

QMEditor.ai.prototype.jf=function(kA)
{
var k=this.h,
ag=k.X,
n=k.J;

new(getTop().QMDialog)(
{
sId:"upload",
sTitle:n.PO_DLG_TITLE,
sBodyHtml:ag.DIALOG_UPLOADIMG.replace(
{
imgPath:getPath("image"),
langUploading:n.PO_DLG_UPLOADING,
langUploadFail:n.PO_DLG_UPLOADFAIL
}
),
nWidth:400,
nHeight:163,
bAnimation:false,
onclose:function()
{
k.loadRange();
callBack(kA);
}
}
);
};

QMEditor.ai.prototype.jV=function()
{
getTop().QMDialog("upload","close");
};

QMEditor.ai.prototype.jL=function(au)
{
var ay=getTop().QMDialog("upload");
var fs=ay&&ay.S("uploadFail");
if(!fs)
{
return;
}

var C=this.h.J;
fs.innerHTML=au?T(C.PO_DLG_UPLOADFAIL_INFO)
.replace(au):C.PO_DLG_UPLOADFAIL;

show(fs,true);
if(ay&&ay.S("uploading"))
{
show(ay.S("uploading"),false);
}
};

QMEditor.ai.prototype.iA=function(mq)
{
var ay=getTop().QMDialog("upload");
var hL=ay&&ay.S("uploadProcess");
if(hL)
{
hL.innerHTML=mq;
if(ay&&ay.S("uploading"))
{
show(ay.S("uploading"),true);
}
if(ay&&ay.S("uploadFail"))
{
show(ay.S("uploadFail"),false);
}
}
};

QMEditor.ai.prototype.kh=function(hP)
{
var dv=this.cq();
if(!dv)
{
return;
}

try
{
dv.nB=(getDomain()=="foxmail.com")?1:0;
}
catch(az)
{
}

var jb=function(aN)
{
return function()
{
if(typeof(hP)=="function")
{
hP(aN);
}
};
};

dv.OnCaptureFinished=jb(true);
dv.OnCaptureCanceled=jb(false);

dv.DoCapture();
};

QMEditor.ai.prototype.cq=function()
{
if(!this.jj)
{
if(detectActiveX(0,1))
{
this.jj=createActiveX(0);
}
}

return this.jj;
};

QMEditor.ai.prototype.mb=function()
{
return this.cW;
};

QMEditor.ai.prototype.nG=function()
{
this.cW="";
};

QMEditor.ai.prototype.fE=function()
{
return this.cq()&&this.cq().IsClipBoardImage;
};

QMEditor.ai.prototype.eO=function(bV)
{
if(!this.cq())
{
return false;
}

if(!this.fE())
{
if(bV)
{
alert(this.h.J.SCREENSNAP_FAIL);
}
return false;
}

this.cW=this.cq().SaveClipBoardBmpToFile(1);

if(!this.cW)
{
if(bV)
{
alert(this.h.J.SCREENSNAP_SAVEFAIL);
}
return false;
}

return true;
};

QMEditor.ai.prototype.jO=function(bV,
aF)
{
return this.eO(bV)
&&this.eU(null,bV,aF);
};

QMEditor.ai.prototype.eU=function(dw,
bV,aF)
{
var c=this;

if(!detectActiveX(2,1))
{
if(bV)
{
alert(c.h.J.UPLOADER_VERSION_LOW);
}
return false;
}

if(!c.cW&&!dw)
{
return false;
}


if(QMEditor.getTopWin().gnIEVer!=6&&dw)
{
return false;
}

if(!c.dx)
{
c.dx=createActiveX(2,c.h.getEditWin());
}


var an=c.dx,
gr=false;

function hJ(aN,au)
{
if(!gr)
{
gr=true;

an.StopUpload();

if(typeof(aF)=="function")
{
aF(aN?true:false,au);
}
}
};
c.jf(hJ);

an.StopUpload();
an.ClearHeaders();
an.ClearFormItems();

an.URL=c.h.ep;
an.OnEvent=function(cY,fI,cI,fP,hw)
{
c.kR(cY,fI,cI,fP,hw,
hJ
);
}

an.AddHeader("Cookie",document.cookie);
an.AddFormItem("fun",0,0,"add");
an.AddFormItem("sid",0,0,getSid());
an.AddFormItem("mode",0,0,"download");
an.AddFormItem("from",0,0,dw?"":"snapscreen");

var bU=c.h.jo||{};
an.AddFormItem("widthlimit",0,0,bU.widthlimit||0);
an.AddFormItem("heightlimit",0,0,bU.heightlimit||0);
an.AddFormItem("sizelimit",0,0,bU.sizelimit||0);

if(dw)
{
an.AddFormItemObject(dw);
}
else
{
an.AddFormItem("UploadFile",1,4,c.cW);
}

an.StartUpload();
return true;
};

QMEditor.ai.prototype.kR=function(cY,fI,cI,
fP,hw,aF)
{
switch(fI)
{
case 1:

return aF(false,
{
errCode:cI
}
);
case 2:

this.iA(parseInt(cI*90/fP)+"%");
return;
case 3:

if(this.dx.ResponseCode!="200")
{
return aF(false,
{
errCode:cI
}
);
}

this.iA("100%");
this.hF(this.dx.Response,
aF
);
}
};

QMEditor.ai.prototype.hF=function(mp,
aF)
{
var cl=mp||"",
bI=cl.indexOf('On_upload("'),
cS=cl.indexOf('");',bI),
df=(bI!=-1&&cS!=-1)?cl.substring(bI+11,cS):"err";
if(df!="err")
{
return aF(true,
{
imgUrl:df
}
);
}

bI=cl.indexOf('On_upload_Fail("');
cS=cl.indexOf('");',bI);

function iy(bB)
{
bB=parseInt(bB);
return'<span style="color:red;" >'
+(isNaN(bB)?"5M":(parseInt(100*parseInt(bB)
/(1024*1024))/100))+"M</span>";
};

if(bI!=-1&&cS!=-1)
{
df=cl.substring(bI+16,cS)
.replace(new RegExp("\"","ig"),"").split(",");
return aF(false,
{
curSize:iy(df[0]),
allowSize:iy(df[1])
}
);
}

return aF(false);
};


QMEditor.FUNCLIB.dS=QMEditor.FUNCLIB.R(function()
{
this.H="MENUCUSTOM";
this.af="menu";
this.bE="MENU_CUSTOM";
this.eW=true;
this.aA=[{}];
},QMEditor.FUNCLIB.D
);

QMEditor.FUNCLIB.dS.prototype.bm=function()
{
this.ao={};

(function(w)
{
if(!w||w.nodeType!=1)
{
return;
}

var aj=w.getAttribute("param");
if(aj)
{
this.ao[aj]=w;
}

for(w=w.firstChild;w;w=w.nextSibling)
{
arguments.callee.call(this,w);
}
}).call(this,this.Y);

this.eQ();
};

QMEditor.FUNCLIB.dS.prototype.eQ=function()
{
};


QMEditor.FUNCLIB.bH=QMEditor.FUNCLIB.R(function()
{
this.H="MENUIMAGE";
this.bE="MENU_IMAGE";
this.dz=true;
},QMEditor.FUNCLIB.dS
);

QMEditor.FUNCLIB.bH.prototype.da=function(ms)
{
var k=this.h;
k.bG("InsertImage",ms,function()
{
var O=this.I.selection;
if(O&&O.type=="Control")
{
var B=this.I.body.createTextRange();
B.moveToElementText(this.I.selection
.createRange().item(0));
B.collapse(false);
B.select();

}

if(k.getEditorId().indexOf('groupsms')>-1)
{
setTimeout(function(){
k.eS.call(k,' ');
},1000);
}
}
);
};

QMEditor.FUNCLIB.bH.prototype.fu=function()
{
this.dz=false;
};

QMEditor.FUNCLIB.bH.prototype.lR=function()
{
return this.dz!=true;
};

QMEditor.FUNCLIB.bH.prototype.cC=function(aN,
au)
{
if(!this.dz)
{
this.dz=true;

var ar=QMEditor.ai.cP(this.h);

if(aN)
{
ar.jV();
this.da(au.imgUrl);
}
else
{
ar.jL(au);
}
}
};




QMEditor.FUNCLIB.Photo=QMEditor.FUNCLIB.R(function(l)
{
this.H="Photo";
this.h=l.editor;
this.lJ=!(l.oParamSet.bPhotoQQAlbum===false);
this.bE="MENU_PHOTO";

var C=this.h.J;

this.N.icon={
className:"qmicon_addImg",
bgleft:-48,
width:24,
margin:"0 0 0 0",
imgstyle:"width:16px;height:16px;overflow:hidden;margin:2px 0 0 2px;",
src:"newicon/compose.gif",
title:C.FUN_PHOTO
};
this.N.text={
margin:"0 11px 0 0",
bgleft:-48,
width:0,
marginNB:"0 3px 0 0",
src:"newicon/compose.gif",
title:C.FUN_PHOTO,
label:C.FUN_PHOTO_LABEL
};
this.N.big={
src:QMEditor.getTopWin().getPath("image")+"compose_easy_photo.gif",
label:C.FUN_PHOTO_LABEL
};


this.bA=this.aC;
},QMEditor.FUNCLIB.bH
);

QMEditor.FUNCLIB.Photo.prototype.bm=function()
{
var c=this;
if(!c.ao)
{
c.ao={};
var k=c.h,
C=k.J,
ag=k.X,
bU=k.jo||{},
iY=k.ep?"":"display:none",

aS=c.Y.firstChild,
ff=aS.ownerDocument.parentWindow||aS.ownerDocument.defaultView,
bL={
iframeId:now(),
css_path:getPath("css",true),

actionSrc:k.ep,
widthlimit:bU.widthlimit||0,
heightlimit:bU.heightlimit||0,
sizelimit:bU.sizelimit||0,

sid:getSid(),
uploadDisp:iY,

style:ag.STYLE,

langLocalPhoto:C.PO_LOCAL_PHOTO,
langLocalDesc:C.PO_LOCAL_DESC,
langLocalInput:C.PO_LOCAL_INPUT,
langQQAlbum:C.PO_QQALBUM_DESC,
qqalbumDisplay:c.lJ?"":"none",
langLocalOK:C.PO_LOCAL_OK,
langNetPhoto:C.PO_NET_PHOTO,
langNetDesc:C.PO_NET_DESC,
langNetInput:C.PO_NET_INPUT,
langNetOK:C.PO_NET_OK,
langCancel:C.COMM_CANCEL
};

createBlankIframe(ff,
{
obj:aS,
scrolling:"no",
transparent:true,
style:T("width:$width$;height:$height$;").replace(
{
width:aS.style.width,
height:aS.style.height
}
),
hideFocus:true,

header:ag.jD.replace(bL),
body:ag.jw.replace(bL),
onload:function(hW)
{

var dZ=c.ao.en=this.contentWindow,
ef=dZ.document;
ef.body.innerHTML=
ag.jx.replace(bL);
c.lz=iY==""?"localPhoto":"netPhoto";




ef.charset="gb2312";
var aY=ef.body,
o=c.ao;

o.document=ef;
o.mN=aY.childNodes[1];
o.mz=aY.childNodes[2];

var bw=GelTags("div",aY);
o.mK=bw[0];
o.mP=bw[1];

var cz=GelTags("input",aY);
o.bp=cz[0];
o.cZ=cz[cz.length-1];

var aO=GelTags("button",aY);
o.mM=aO[0];
o.mQ=aO[2];
o.nk=aO[1];

o.ne=GelTags("form",aY)[0];
o.ng=GelTags("iframe",aY)[0];

c.eQ();
}
}
);
}
};

QMEditor.FUNCLIB.Photo.prototype.eQ=function()
{
var c=this,
o=c.ao,
en=o.en,
hu=en.document;

addEvent(hu,"click",function(d)
{
c.aT(d);
}
);

addEvent(hu.body,"keydown",function(d)
{
if(d.keyCode==27)
{
c.aT({target:o.nk});
preventDefault(d);
}
if(d.keyCode==13)
{
var G=d.target||d.srcElement;
c.aT(
{
target:G==o.bp
?o.mM
:(G==o.cZ?o.mQ:null)
}
);
preventDefault(d);
}
}
);


en.QMEditorPhotoLoaded=function(cY)
{
try
{
var gz=cY.contentWindow.location.href;
if(gz.indexOf("javascript:")==0
||gz.indexOf("about:blank")==0)
{
return;
}

var hx=[];

E(GelTags("script",cY.contentWindow.document),function(jv)
{
hx.push(jv.innerHTML);
}
);

QMEditor.ai.cP(c.h).hF(
hx.join(""),function(aN,au)
{
c.cC(aN,au);
}
);
}
catch(az)
{
return c.cC(false,{});
}
};


QMEditor.getTopWin().getMainWin().On_upload=QMEditor.getTopWin().getMainWin().On_upload_Fail=function()
{
};
};

QMEditor.FUNCLIB.Photo.prototype.aC=function(d)
{
var c=this;
waitFor(
function()
{
return c.ao.cZ;
},
function()
{
var o=c.ao;

try
{
var bp=o.bp;
bp.value="";
if(bp.value)
{
bp.select();
o.document.execCommand('delete');
}
}
catch(az)
{
}

o.cZ.value="http://";
c.eu(c.lz);
}
);
};

QMEditor.FUNCLIB.Photo.prototype.aT=function(d)
{
var G=d.target||d.srcElement,
aj=G&&G.getAttribute("param"),
hQ=getTop(),
c=this,
k=c.h;

function le(bB)
{
return bB.replace("\"","%22").replace("'","%27").replace(">",
"%3E"
);
}

switch(aj)
{
case"localPhoto":
case"netPhoto":
c.eu(aj);
break;
case"netok":
c.aq(true);
c.da(le(c.ao.cZ.value));
break;
case"localok":

c.cX();
c.aq(false);
break;
case"cancel":
c.aq(true);
break;
case"qqalbum":
if(!hQ.QMQzoneImg)
{
showError("打开相册失败，请稍后再试");
}
else
{
hQ.QMQzoneImg.select(
{
onclick:function(nx,nv,mG,nw)
{
c.da(mG.url);
}
}
);
}
c.aq(true);
break;
}
};

QMEditor.FUNCLIB.Photo.prototype.eu=function(kI)
{
var ey=kI=="localPhoto",
hf=["QMEditorTabSel","QMEditorTab"],
gF=ey?0:1,
o=this.ao,
he=ey
?o.bp:o.cZ;

show(o.mN,ey);
show(o.mz,!ey);

o.mK.className=hf[gF];
o.mP.className=hf[1-gF];

he.focus();
he.select();
};

QMEditor.FUNCLIB.Photo.prototype.cX=function()
{
var c=this,
k=c.h,
ar=QMEditor.ai.cP(k),
fm=c.ao.bp;

if(!fm.value)
{
return;
}

if("gif|jpg|jpeg|bmp|png".indexOf((fm.value||"").toLowerCase()
.split(".").pop())==-1)
{
showError("只允许上传gif,jpg,jpeg,bmp,png的图片");
return;
}

c.fu();

if(ar.eU(fm,false,function(aN,au)
{
c.cC(aN,au);
}))
{
return;
}

c.ao.ne.submit();
ar.jf(function()
{
if(!c.lR())
{
return;
}

try
{


c.ao.ng.contentWindow.location="about:blank";
}
catch(az)
{

}

c.cC(false);
}
);
};


QMEditor.FUNCLIB.Mo=QMEditor.FUNCLIB.R(function(l)
{
this.H="Mo";
this.h=l.editor;
this.bE="MENU_MO";

var C=this.h.J;

this.N.icon={
className:"qmicon_face",
bgleft:-64,
width:24,
margin:"0 0 0 0",
imgstyle:"width:16px;height:16px;overflow:hidden;margin:2px 0 0 2px;vertical-align:middle;",
src:"newicon/compose.gif",
title:C.FUN_MO
};
this.N.text={
margin:"0 12px 0 0",
bgleft:-64,
width:0,
marginNB:"0 4px 0 0",

src:"newicon/compose.gif",
title:C.FUN_MO,
label:C.FUN_MO_LABEL
};
this.N.big={
src:QMEditor.getTopWin().getPath("image")+"compose_easy_face.gif",
label:C.FUN_MO_LABEL
};


this.aA=[{loading:C.MO_LOADING}];

},QMEditor.FUNCLIB.bH
);

(function()
{
if(location.protocol==="https:")
{
QMEditor.FUNCLIB.Mo.prototype.bm=function()
{
var c=this;

if(!c.jn)
{
if(!window.QMMo)
{
if(c.am)
{
return;
}

c.h.dy({"plus/mo.js":true});
c.am=setInterval(function()
{
c.bm();
},200
);

return;
}

if(c.am)
{
clearInterval(c.am);
c.am=null;
}

c.jn=new QMMo(
{tabList:c.h.fn.moTabs});
c.jn.setup({container:c.Y});

c.eb();
}
};

QMEditor.FUNCLIB.Mo.prototype.gX=function()
{
if(this.am)
{
clearInterval(this.am);
this.am=null;
}
};

QMEditor.FUNCLIB.Mo.prototype.aT=function(d)
{
var G=d.target||d.srcElement,
aj=G&&G.getAttribute("param"),
k=this.h;

if(aj)
{
this.aq(true);
this.da(aj);
}
};
}
else
{
QMEditor.FUNCLIB.Mo.prototype.bm=function()
{
var c=this;

if(c.lE)
{
return;
}

c.lE=true;

createIframe(
c.Y.ownerDocument.parentWindow||c.Y.ownerDocument.defaultView,
["/zh_CN/htmledition/sosomo.html",
document.domain!=location.host?encodeURIComponent(document.domain):""].join("?"),
{
obj:c.Y,
where:"beforeEnd",
scrolling:"no",


style:"width:1px;height:1px;position:absolute;",
hideFocus:true,






onload:function(hW)
{
var aS=c.Y,
dZ=this.contentWindow,
cN;

try
{
if(dZ.SOSO_EXP)
{
dZ.mo=function(aE)
{
c.aq(true);
c.da(aE);
};

show(aS.firstChild,false);
this.style.cssText="width:446px;height:305px;";
cN=true;
}
}
catch(az){debug(az.message);}

!cN&&(aS.innerHTML=c.h.X.
MENU_MO.replace({loading:"加载失败！"}));

c.eb();
}
}
);
};
}
}
)();


QMEditor.FUNCLIB.ScreenSnap=QMEditor.FUNCLIB.R(function(
l)
{



if(!l.editor.ep)

{
return;
}

this.H="ScreenSnap";
this.af="btn";
this.h=l.editor;

this.eV();


var c=this,
k=this.h,
ar=QMEditor.ai.cP(k),
eN="",
hy=gbIsIE||QMAXInfo.mbAblePlugin,
ci;

function cX(d)
{
k.saveRange();
c.fu();
ar.eO();
ar.eU(null,false,function(
fR,au)
{
c.cC(fR,au);
}
);
preventDefault(d);
stopPropagation(d);
}

this.bK=function(d)
{
if(d.ctrlKey&&d.altKey&&d.keyCode==65)
{
c.ax();
preventDefault(d);
}
else if(d.ctrlKey&&d.keyCode==86)
{
if(ar.fE())
{
cX(d);
}
else if(!ar.cq())
{
ci=!getTop().gbIsOpera&&setTimeout(
function()
{
if(ci)
{
ci=null;
k.cG("paste");
}
},
200
);
if(!hy)
{
eN=k.getContent();
}
}
}
};

this.lK=function(d)
{
if(ar.eO())
{
clipboardData.setData("Text","");
}
};

this.dL=function(d)
{
if(ci)
{
clearTimeout(ci);
ci=null;
}

if(ar.fE())
{
cX(d);
}
else if(ar.mb())
{
if(!clipboardData.getData("Text"))
{
cX(d);
}
}
else if(gbIsFF&&!getTop().gbIsMac)
{
setTimeout(function()
{
var cD=k.getContentTags("img");
for(var i=0,V=cD.length;i<V;i++)
{
if(cD[i].src.indexOf("/moz-screenshot-")!=-1)
{
removeSelf(cD[i]);
k.cG("paste");
return;
}
};
},
200
);
}
else if(!hy)
{
setTimeout(function()
{
if(k.getContent()==eN)
{
k.cG("failpaste");
}
eN="";
},200);
}
};
},QMEditor.FUNCLIB.bH
);

QMEditor.FUNCLIB.ScreenSnap.prototype.ax=function(d)
{
var k=this.h;
k.hideMenu();

if(!detectActiveX(0,1))
{
if(typeof(this.h.cG)=="function")
{
k.cG();
}
return;
}

k.saveRange();

var c=this,
ar=QMEditor.ai.cP(k);

ar.kh(function(aN)
{
if(!aN)
{
k.loadRange();
}
else
{
c.fu();
ar.jO(true,function(fR,au)
{
c.cC(fR,au);
}
);
}
}
);
};

QMEditor.FUNCLIB.ScreenSnap.prototype.eV=function()
{
var eA=detectActiveX(0),
C=this.h.J;

this.N.icon={
className:"qmicon_snap",
bgleft:eA?-80:-208,
width:24,
margin:"0 4px 0 0",
imgstyle:"width:16px;height:16px;overflow:hidden;margin:2px 0 0 2px;",
src:"newicon/compose.gif",
title:eA
?C.FUN_SCREENSNAP
:C.FUN_SCREENSNAP_SETUP_TIP
};
this.N.text={
margin:"0 10px 0 0",
bgleft:eA?-80:-208,
width:0,
marginNB:"0 1px 0 0",
lbMargin:"0 0 0 2px",
src:"newicon/compose.gif",
title:eA
?C.FUN_SCREENSNAP
:C.FUN_SCREENSNAP_SETUP_TIP,
label:C.FUN_SCREENSNAP_LABEL
};
};


QMEditor.FUNCLIB.Music=QMEditor.FUNCLIB.R(function(l)
{
this.H="Music";
this.h=l.editor;
this.bE="MENU_MUSIC";

var k=this.h,
C=k.J;

this.N.icon={
className:"qmicon_addMusic"
}

this.N.text={
margin:"0 10px 0 0",
bgleft:-96,
width:0,
marginNB:"0 2px 0 0",
src:"newicon/compose.gif",
title:C.FUN_MUSIC,
label:C[k.getBgMusicInfo()
?"FUN_MUSIC_LABEL_ADDED"
:"FUN_MUSIC_LABEL"]
};


this.aA=[{
loading:C.MC_LOADING
}];


this.bA=this.aC;

var c=this;
k.hI=function()
{
c.lq(this.getBgMusicInfo());
}

},QMEditor.FUNCLIB.dS);

QMEditor.FUNCLIB.Music.prototype.bm=function()
{
var c=this,
k=c.h;

if(c.dn)
{
return;
}

if(!window.QMBgMusic)
{
if(c.am)
{
return;
}

k.dy({"plus/bgmusic.js":true});
c.am=setInterval(function()
{
c.bm();
},200);

return;
}

if(c.am)
{
clearInterval(c.am);
c.am=null;
}

c.dn=new QMBgMusic();
c.dn.setup({
container:c.Y,
height:'175px',
width:'265px',
style:k.X.STYLE,
func:"soso",
onselectmusic:function(by,cp,aE)
{
if(!k.getBgMusicInfo()
||confirm(k.J.MC_REPLACE_TIP))
{
if(aE&&aE.indexOf("://")==-1)
{
aE="http://"+aE;
}
k.setBgMusicInfo(by,cp,aE);
c.aq(true);
}
},
onclose:function()
{
c.aq(true);
},
onload:function()
{
c.eb();
c.dn.focus();
}
}
);
};

QMEditor.FUNCLIB.Music.prototype.aC=function(d)
{
if(this.dn)
{
this.dn.focus();
}
};

QMEditor.FUNCLIB.Music.prototype.lq=function(jT)
{
if(this.ad)
{
var ha=GelTags("a",this.ad),
gN=ha.length;

if(gN>0)
{
ha[gN-1].innerHTML=this.h.J[jT
?"FUN_MUSIC_LABEL_ADDED"
:"FUN_MUSIC_LABEL"];
}
}
};


(function(){QMEditor.setupFunc();})();
