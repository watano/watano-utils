var QMQzoneImg=
{
cyI:106,
cyF:1,
aqd:{

},
bXN:null,
bXM:{},
cAa:true,


amt:null
};

QMQzoneImg.getAlbums=function(aG)
{
if(!this.cAa)
{
return this.aer("albums",false,aG)();
}

if(!this.amt)
{
this.aoY();
}

if(!aG.uin)
{
aG.uin=getUin();
}

var bD=this.bHn(aG.uin);
if(bD&&bD.sw&&!aG.refresh)
{
return this.aer("albums",true,aG)(
{
albums:bD.sw
},true
);
}

var ad=this;
waitFor(
function()
{
return ad.amt?true:false;
},
function(aW)
{
if(!aW||!ad.amt.getAlbumList)
{
return ad.aer("albums",false,aG)();
}

ad.amt.getAlbumList({
uin:aG.uin,
callBack:ad.aer("albums",true,aG),
errBack:ad
.aer("albums",false,aG),




type:1,
refresh:1,
"_projectId":ad.cyI,
"_pageId":ad.cyF
}
);
}
);
};

QMQzoneImg.getNewPhoto=function(aG)
{
if(!this.cAa)
{
return this.aer("newphoto",false,aG)();
}

if(!this.amt)
{
this.aoY();
}

if(!aG.uin)
{
aG.uin=getUin();
}

var bD=this.bHn(aG.uin);
if(bD&&bD.crV&&!aG.refresh)
{
return this.aer("newphoto",true,aG)(
{
data:bD.crV
},true
);
}

var ad=this;
waitFor(
function()
{
return ad.amt?true:false;
},
function(aW)
{
if(!aW||!ad.amt.getNewPhoto)
{
return ad.aer("newphoto",false,aG)();
}

ad.amt.getNewPhoto(
{
uin:aG.uin,
callBack:ad.aer("newphoto",true,
aG
),
errBack:ad.aer("newphoto",false,
aG
),
refresh:1,
"_projectId":ad.cyI,
"_pageId":ad.cyF
}
);
}
);
};

QMQzoneImg.getPhotos=function(aG)
{
if(!this.cAa)
{
return this.aer("photos",false,aG)();
}

if(!this.amt)
{
this.aoY();
}

if(!aG.uin)
{
aG.uin=getUin();
}

var bD=this.bHn(aG.uin);
if(bD&&bD.kC[aG.albumId]&&!aG.refresh)
{
return this.aer("photos",true,aG)(
{
photos:bD.kC[aG.albumId]
},true
);
}

var ad=this;
waitFor(
function()
{
return ad.amt?true:false;
},
function(aW)
{
if(!aW||!ad.amt.getPhotoList)
{
return ad.aer("photos",false,aG)();
}

ad.amt.getPhotoList(
{
uin:aG.uin||getUin(),
id:aG.albumId,
refresh:1,
callBack:ad.aer("photos",true,aG),
errBack:ad
.aer("photos",false,aG),
"_projectId":this.cyI,
"_pageId":this.cyF
}
);
}
);
};

QMQzoneImg.setPhotoLogic=function(dQM)
{
this.amt=dQM;
};

QMQzoneImg.select=function(aG)
{
var ad=this;
ad.bXN=aG;
new QMDialog(
{
sTitle:"QQ相册",
sBodyHtml:QMQzoneImg.bP.bMl.replace(
{
images_path:getPath("image"),
content:QMQzoneImg.bP.Xe.replace(
{
msg:QMQzoneImg.bP.bZw.replace(
{
images_path:getPath("image")
}
)
}
)
}
),
nWidth:500,
nHeight:400,
onload:function()
{
var bsH=this;
addEvent(bsH.S("qzoneimgData"),"click",function(ag)
{
var ax=ag.srcElement||ag.target;
if(ax&&ax.getAttribute("param"))
{
var cUb=ax.getAttribute("label"),
pv=ax.getAttribute("param");
if(aG&&typeof(aG.onclick)=="function")
{
aG.onclick(cUb,pv,ad
.bHn(getUin()).kC[cUb][pv]);
}
bsH.close();
}
}
);

},
onshow:function()
{
var bsH=this,
awt=bsH.S("qzoneimgData"),
dfG=ad.bXM["scrollTop"];
dfG&&awt&&(awt.scrollTop=dfG);
ad.dwi(bsH);
},
onclose:function()
{
var ajA=this.S("qzoneimgAlbum"),
ay=this.S("qzoneimgData");

if(ajA)
{
ad.bXM["label"]=ajA.getAttribute("label");
}
if(ay)
{
ad.bXM["scrollTop"]=ay.scrollTop;
}
}
}
);
};

QMQzoneImg.dwi=function(mw)
{
var ad=this,
dbs=this.bXN.labelIdx||this.bXM["label"];

this.getAlbums(
{
onload:function(oY,qr)
{
var bp=mw.S("qzoneimgData");
if(bp)
{
if(!oY)
{
return bp.innerHTML=QMQzoneImg.bP.Xe
.replace(
{
msg:"相册列表加载失败！"
}
);
}

var sw=qr;
if(!sw||sw.length==0)
{
return bp.innerHTML=QMQzoneImg.bP.Xe
.replace(
{
msg:"您还没创建相册哦。"
}
);
}

var doW=mw.S("qzoneimgAlbum"),
bz=[],
bTb=0;

for(var i=0,aO=sw.length;i<aO;i++)
{
var ajA=sw[i];
(!dbs&&ajA.modifytime>sw[bTb].modifytime
||dbs==ajA.id)&&(bTb=i);
bz.push(
{
sId:i,
sItemValue:ajA.name
}
);
}

function dgU(aJ)
{
var ajA=sw[aJ];
doW.setAttribute("label",ajA.id);
ad.blM(mw,ajA.id);
}
new(getTop().QMSelect)({
oContainer:doW,
nWidth:210,
sDefaultId:bTb,
oMenu:{
nMaxItemView:5,
oItems:bz
},
onselect:function(bq){
dgU(bq.sId);
}
});
dgU(bTb);
}
}
}
);
};

QMQzoneImg.blM=function(mw,aCA)
{
var bp=mw.S("qzoneimgData");
if(!bp)
{
return;
}

var dux=aCA==this.bXN.labelIdx
?this.bXN.listIdx
:-1;

bp.innerHTML=QMQzoneImg.bP.Xe.replace(
{
msg:QMQzoneImg.bP.bZw.replace(
{
images_path:getPath("image")
}
)
}
);

this.getPhotos(
{
albumId:aCA,
onload:function(oY,oH)
{
var bp=mw.S("qzoneimgData");
if(!bp)
{
return;
}
else if(!oY)
{
bp.innerHTML=QMQzoneImg.bP.Xe.replace(
{
msg:"相片列表加载失败！"
}
);
}
else if(!oH||oH.length==0)
{
return bp.innerHTML=QMQzoneImg.bP.Xe
.replace(
{
msg:"该相册没有相片。"
}
);
}
else
{
var qk=[];
for(var i=0,aO=oH.length;i<aO;i++)
{
var dqs=dux==i;
qk.push(QMQzoneImg.bP.dFW.replace(
{
label:aCA,
value:i,
url:oH[i].pre,
thumbclass:dqs
?"left thumbon pointer attbg bd_upload"
:"left thumbnone pointer",
thumbnone:"left thumbnone pointer",
thumbover:"left thumbover pointer settingtable bd",
select:dqs
}
));
}
bp.innerHTML=qk.join("");
}

}
}
);
};

QMQzoneImg.aer=function(ao,oY,aG)
{
var bD=this.bHn(aG.uin);
return function(aF,edK)
{
if(oY&&!edK)
{
if(ao=="albums")
{
bD.sw=aF[ao];
}
else if(ao=="photos")
{
bD.kC[aG.albumId]=aF[ao];
}
else if(ao=="newphoto")
{
bD.crV=aF.data;
}
}

try
{
if(typeof(aG.onload)=="function")
{
if(ao!="newphoto")
{
aG.onload(oY,
oY?aF[ao]:aF,aG
);
}
else
{
aG.onload(oY,aF.data,aG);
}
}
}
catch(e)
{
}
if(ao=="albums")
{
if(!oY)
{
getTop().ossLog("delay","all","stat=qzoneimg&type=1&errcode=1");
}

}
};
};

QMQzoneImg.bHn=function(ce)
{
return this.aqd[ce]||(this.aqd[ce]={
sw:null,
kC:{},
crV:null
});
};

QMQzoneImg.aoY=function()
{
var pm="qmQzoneImgLogicIframe",
dlb=S(pm);

if(dlb)
{
if(dlb.getAttribute("loaded")=="true")
{
this.setPhotoLogic(F(pm).PhotoLogic||{});
}

return;
}

createBlankIframe(window,
{
id:pm,
defcss:false,
className:"",
style:"position:absolute;border:none;z-index:99999;right:0;bottom:0;width:1px;height:1px;",
header:[

'<script language="javascript" src="http://imgcache.qq.com/qzone/qzfl/qzfl_core.js" charset="utf-8"><\/script>',

'<script language="javascript" src="http://imgcache.qq.com/qzone/client/photo/pages/qzone_v4/script/photo_logic.js" charset="utf-8"><\/script>',
].join(""),
body:['<body style="padding:0;margin:0;"></body>'],
onload:function()
{
var amw=this;
setTimeout(function()
{
amw.setAttribute("loaded","true");
QMQzoneImg.setPhotoLogic(amw.contentWindow.PhotoLogic||{});
},
500
);
}
}
);
};

QMQzoneImg.bP={};

QMQzoneImg.bP.bMl=T(
[
'<table cellspacing=0 cellpadding=0 border="0" style="width:100%;height:100%;text-align:left;">',
'<tr><td style="padding:5px 5px 0;">',
'<div id="qzoneimgAlbum"></div>',
'</td></tr>',
'<tr><td height="99%" style="">',
'<div id="qzoneimgData" class="bd" style="height:270px;*height:290px;margin:5px;overflow-y:auto;padding:10px 10px;" >',
'$content$',
'</div>',
'</td></tr>',
'<tr><td class="addrtitle attbg" height="1%" style="line-height:160%;padding:6px;">',
'(点击使用相应照片)',
'</td></tr>',
'</table>'
]
);

QMQzoneImg.bP.dFW=T(
[
'<div class="$thumbclass$" label="$label$" param="$value$" select="$select$" ',
'onmouseover="',
'if ( this.getAttribute( \x27select\x27 ) != \x27true\x27 )',
'{',
'this.className=\x27$thumbover$\x27;',
'}',
'" onmouseout="',
'if ( this.getAttribute( \x27select\x27 ) != \x27true\x27 )',
'{',
'this.className=\x27$thumbnone$\x27;',
'}',
'">',
'<img class="$thumbimg$" src="$url$" label="$label$" param="$value$" style="width:100px;height:75px;"/>',
'</div>'
]
);

QMQzoneImg.bP.bZw=T(
[
'<img src="$images_path$ico_loading2.gif" align="absmiddle" />',
'&nbsp;&nbsp;相册数据加载中...'
]
);

QMQzoneImg.bP.Xe=T(
[
'<table class="addrtitle" style="width:100%;height:100%;"><tr><td align=center>',
'$msg$',
'</td></tr></table>'
]
);


var qmQzoneImg=QMQzoneImg;
