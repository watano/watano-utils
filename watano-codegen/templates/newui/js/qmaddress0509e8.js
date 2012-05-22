

(function(al)
{
if(al.QMAddress)
{
return;
}

var iN=al.QMAddress={test:1};





iN.tW=
{
allAddresses:{},
allGroup:{},
mailgroup:{},
qqgroup:{},
id2email:{},

domaingroup:{},
groupMails:{},














aOT:false,
mJ:"uninit"
};






iN.addAddress=function(NC)
{
var bd=NC.id,
gS=NC.email;

if(!bd||!gS)
{
doPageError(["addAddress",getUin(),bd].join(","));
return;
}

var oe=this.tW,
aCD=oe.allAddresses;

if(!aCD[gS])
{
oe.id2email[bd]=gS;
aCD[gS]=NC;
}
else
{
aCD[gS].searchdata=[NC.name,NC.pinyin].join(" ");
}

if(NC.qq==g_admuin)
{
oe.groupMails[gS]=NC;
oe.aOT=true;
}
};






iN.getAddress=function(amx)
{
if(parseInt(amx)==amx)
{

amx=this.tW.id2email[amx];
if(typeof amx=="undefined")
{
return null;
}
}
return this.tW.allAddresses[amx];
};





iN.getAllAddressObj=function()
{
return this.tW["allAddresses"];
};









iN.addGroup=function(yu)
{
if(!yu.id||!yu.addressesId||!yu.groupsId)
{
doPageError(["addGroup",getUin(),yu.id].join(","));
return;
}
if(typeof yu.groupType!="undefined"
&&(yu.groupType=="mailgroup"||yu.groupType=="qqgroup"||yu.groupType=="domaingroup"))
{
this.tW[yu.groupType]=yu;
}
this.tW["allGroup"][yu.id]=yu;
};






iN.getGroup=function(aiu)
{
if(aiu=="mailgroup"||aiu=="qqgroup"||aiu=="domaingroup")
{
return this.tW[aiu]||{};
}
return this.tW["allGroup"][aiu];
};





iN.getAllGroupObj=function()
{
return this.tW["allGroup"];
};







iN.getGroupMail=function(vD)
{
var oe=this.tW,
aSH=oe.groupMails;
if(oe.aOT)
{
return vD?aSH[vD]:aSH;
}
else
{
return null;
}
};





iN.isInit=function()
{
var ew=this.tW.mJ.split("|")[0];
return ew=="init"||ew=="expired";
};





iN.isExpired=function()
{
var aTu=this.getTime();
return aTu>-1&&now()-aTu>120000;




















};

iN.getTime=function()
{
var gQ=this.tW.mJ.split("|");
if(gQ[0]=="expired")
{
var aTu=parseInt(gQ[1])||0;


return aTu;

}
return-1;
};





iN.setExpired=function(bRd)
{
if(this.tW.mJ!="uninit")
{
this.tW.mJ=bRd==-1
?"init":["expired",bRd].join("|");
}
};





iN.countAddress=function()
{
var ei=0;
for(var Ih in this.tW.allAddresses)
{
ei++;
}
return ei;
};





iN.cxQ=function()
{
for(var Ih in this.tW.allAddresses)
{
return true;
}
return false;
};






iN.countGroup=function()
{
var ei=0;
for(var Ih in this.tW.allGroup)
{
ei++;
}
return ei;
};











iN.getAncestor=function(agW)
{
var dWq;
while(agW)
{
if(agW.parentId==0)
{
return agW.id;
}
agW=iN.getGroup(agW.parentId);
}
return 0;
};











iN.bEx=function()
{
with(this.tW)
{
mJ="uninit";
allAddresses={};
allGroup={};
mailgroup={};
qqgroup={};
email2id={};
aiu={};

}
};







iN.bNm=function(cN)
{
if(cN.domaingroups.length==0)
{

return cN;
}
function ty(kw,Ej)
{
while(kw[Ej])
{
Ej++;
}
kw[Ej]=1;
return Ej;
}
var aQJ={},aSL={};


for(var i=cN.sortbyupdatetime.length-1;i>=0;i--)
{
if(cN.sortbyupdatetime[i])
{
aQJ[cN.sortbyupdatetime[i][0]]=1;
}
}

var aPE=[cN.qqgroups,cN.groups];
for(var i=aPE.length-1;i>=0;i--)
{
var gE=aPE[i];
for(var j=gE.length-1;j>=0;j--)
{
if(gE[j])
{
aSL[gE[j][0]]=1;
}
}
}

var aQd=[];
var bnI={};


var auD=100,ajk=1000;
for(var i=0,aO=cN.domaingroups.length;i<aO;i++)
{
if(cN.domaingroups[i])
{

cN.domaingroups[i][0]=auD=ty(aSL,auD);

var gE=cN.domaingroups[i][1];

var hm=[];
for(var j=0,bav=gE.length;j<bav;j++)
{
if(gE[j])
{
gE[j].id=ajk=ty(aQJ,ajk);
cN.sortbyupdatetime.push([gE[j].id,"",gE[j].email,gE[j].name,(gE[j].uin==g_admuin?0:gE[j].uin)]);
hm.push(ajk);

bnI[gE[j].email]=ajk;
}
}
aQd.push([auD,hm,cN.domaingroups[i][2]]);
}
}
cN.domaingroups=aQd;










return cN;
};








iN.bPn=function(cN)
{
iN.bEx();


var csn=!!cN.qqgroups;
cN.qqgroups=cN.qqgroups||{};

cN=iN.bNm(cN);


var aOA=10,
hc=cN.sortbyupdatetime,
cpi=iN.tW.id2email,
aV;

for(var i=0,aO=hc.length;i<aO;i++)
{
if(aV=hc[i])
{
cpi[aV[0]]=aV[2];
}
}

for(var i=0,aO=hc.length;i<aO;i++)
{
if(aV=hc[i])
{
iN.addAddress(
{
id:aV[0],
pinyin:aV[1],
email:aV[2],
name:aV[3],
qq:aV[4],

acspec:aV[3].indexOf('&')>=0
}
);
}
}

var aAV={
id:1,
name:"邮箱联系人",
addressesId:[],
groupType:"mailgroup",
groupsId:[3,5],
parentId:0,
pinyin:''
};
iN.addGroup(aAV);

var aCy={
id:2,
name:"QQ好友",
addressesId:[],
groupType:"qqgroup",
groupsId:[],
parentId:0,
pinyin:''
};
if(csn)
{
iN.addGroup(aCy);
}


var bcM=cN.groups[0],
LH=bcM[1],
aqq={
id:3,
name:bcM[2],
addressesId:[],
groupsId:[],
parentId:1,
pinyin:bcM[3]
};
iN.addGroup(aqq);
LH.length=LH.length-1;
var aiE={},
i=0,
j=0,
aO=LH.length;

for(;i<aO&&j<aOA;i++)
{
var eo=iN.getAddress(LH[i]);
if(eo)
{
aqq.addressesId.push(LH[i]);
aiE[eo.email]=1;
j++;
}
}

var aRw={
id:4,
name:"更多常用联系人",
addressesId:[],
groupsId:[],
parentId:1,
pinyin:'GENGDUOLIANXIREN'
};
for(;i<aO;i++)
{
var eo=iN.getAddress(LH[i]);
if(eo)
{
aRw.addressesId.push(LH[i]);
aiE[eo.email]=1;
j++;
}
}
iN.addGroup(aRw);
if(j>aOA)
{
aqq.moreChildId=4;
}

var bcl=cN.groups[1],
aaZ=bcl[1],
aNt={
id:5,
name:bcl[2],
addressesId:[],
groupsId:[],
parentId:1,
pinyin:bcl[3]
};
aaZ.length=aaZ.length-1;

iN.addGroup(aNt);
for(var i=0,aO=aaZ.length;i<aO;i++)
{
var eo=iN.getAddress(aaZ[i]);
if(eo&&!aiE[eo.email])
{
aNt.addressesId.push(aaZ[i]);
aiE[eo.email]=1;
}
}

var aVo=g_admuin;
for(var i=2,aO=cN.groups.length;i<aO;i++)
{
var gE=cN.groups[i],
hm=[],
aBx=gE[1];

for(var fd=0,XE=aBx.length;fd<XE;fd++)
{
if(aBx[fd]&&iN.getAddress(aBx[fd]))
{
hm.push(aBx[fd]);
}
else
{
doPageError(["QMA_noaddr",aBx[fd]].join(","));
}
}







if(hm.length>0&&hm.length<21)
{
var bsK=[];
for(var fd=0,be=hm.length;fd<be;fd++)
{
bsK.push(iN.getAddress(hm[fd]).name);
}

while(iN.getAddress(aVo))
{
aVo++;
}

iN.addAddress(
{
nShortcutGroupId:gE[0],
id:aVo++,
pinyin:gE[3],
email:bsK.join("; "),
name:gE[2],
qq:-1,
acspec:gE[2].indexOf('&')>=0
}
);
}

var pI={
id:gE[0],
name:gE[2],
addressesId:hm,
groupsId:[],
parentId:aAV.id,
pinyin:''
};
aAV.groupsId.push(cN.groups[i][0]);
iN.addGroup(pI);
}

for(var i=0,aO=cN.qqgroups.length;i<aO;i++)
{
if(aV=cN.qqgroups[i])
{
var hm=aV[1];
if(hm.length>0&&typeof hm[hm.length-1]=="undefined")
{
hm.length=hm.length-1;
}
var pI={
id:aV[0],
name:aV[2],
addressesId:hm,
groupsId:[],
parentId:aCy.id
};
aCy.groupsId.push(aV[0]);
iN.addGroup(pI);
}
}


var ams={
id:7,
name:"域名邮箱联系人",
addressesId:[],
groupType:"domaingroup",
groupsId:[],
parentId:0,
pinyin:'YUMINGYOUXIANGLIANXIREN'
};

for(var i=0,aO=cN.domaingroups.length;i<aO;i++)
{
var hm=cN.domaingroups[i][1];
if(hm.length>0&&typeof hm[hm.length-1]=="undefined")
{
hm.length=hm.length-1;
}
var pI={
id:cN.domaingroups[i][0],
name:cN.domaingroups[i][2],
addressesId:hm,
groupsId:[],
parentId:ams.id,
pinyin:cN.domaingroups[i][3]
};
ams.groupsId.push(cN.domaingroups[i][0]);
iN.addGroup(pI);
}
if(ams.groupsId.length>0)
{
iN.addGroup(ams);
}





this.tW.mJ="init";
};





iN.getAutoAddrList=function(aKR)
{
var aAE=[],
aqF=iN.tW.allAddresses,
eo;

if(typeof aKR=="function")
{
for(var Ih in aqF)
{
aKR(eo=aqF[Ih])!==false&&aAE.push(eo);
}
}
else
{
for(var Ih in aqF)
{
aAE.push(aqF[Ih]);
}
}

return aAE;
};






iN.Co=function()
{

var ad=arguments.callee,
ayO;
if(!(ayO=ad.dCA))
{
ayO=ad.dCA=new QMAjaxRequest("","GET",30000);
ayO.onComplete=function(hf)
{
ayO.ew="finish";
var bSM=hf.responseText;

try
{
iN.aJe(
eval(hf.responseText),
false
);
}
catch(aX)
{
if(bSM.indexOf("({")==0)
{
doPageError(aX.message,"qmaddress.js","QMAddress._loadAddressData");
}
iN.aJe({},true);
}
};
ayO.onError=function()
{
ayO.ew="finish";
iN.aJe({},true);
};
}
if(ayO.ew!="loading")
{
ayO.abort();
ayO.url=
T("/cgi-bin/addr_listall?sid=$sid$&encode_type=js&show_type=hot&all_data=1&level=0&qq=0&t=addr_data&sorttype=Freq&s=AutoComplete&category=hot&record=n&resp_charset=UTF8&r=$random$")
.replace({
sid:getSid().split(",")[0],
random:Math.random()
}
);
ayO.ew="loading";
ayO.send();
}
};


iN.Co.bGc=0;

iN.Co.cIi=[];

iN.Co.cpO=function(dw)
{
if(typeof dw=="function")
{
var aeh=iN.Co.cIi;
for(var aC=aeh.length-1;aC>=0;aC--)
{
if(aeh[aC]==dw)
{
return;
}
}
aeh.push(dw);
}
};

iN.Co.OQ=function(aG)
{
var aeh=iN.Co.cIi,
bys=[];
for(var aC=aeh.length-1;aC>=0;aC--)
{
try
{
aeh[aC](aG);
bys.push(aeh[aC]);
}
catch(Cc)
{

}
}
iN.Co.cIi=bys;
};






iN.aJe=function(an,biU)
{
if(an.sysmaintence)
{

return iN.aIi("fail",an.sysmaintence);
}

if(biU||typeof an.groups=="undefined")
{

if(++iN.Co.bGc<5)
{
setTimeout(iN.Co,35000);
}
else
{

iN.aIi("fail","联系人加载失败，请重试");
doPageError("QMAddress failed to load","","");
}
return;
}

iN.setExpired(-1);
iN.bPn(an);
iN.aIi('succeed');
iN.setExpired(now());
};




iN.aIi=function(ao,bC)
{

if(iN.isInit())
{
iN.Co.OQ({sType:'succeed',sMsg:'同步QQ好友到联系人中'});
}
else if(ao!='succeed')
{
iN.Co.OQ({
sType:ao,
sMsg:bC
});
}
return false;
};










iN.initAddress=function(dw)
{
dw&&iN.Co.cpO(dw);
iN.aIi("loading","加载中...");

if(!iN.isInit()||iN.isExpired())
{
iN.Co.bGc=0;
iN.Co();
}
return false;
};




iN.importqq=function()
{
var fq="您的QQ好友已同步到联系人中";
QMAjax.send("/cgi-bin/addr_importqq?&ImportType=Replace&sid="+getSid(),{
onload:function(aW,cg,hf){
if(aW&&cg.indexOf(fq)>-1)
{
showInfo(fq);
iN.setExpired(0);
iN.Co();
}
else
{
showError("同步QQ好友失败，请重试");
}
}
});
return false;
};

al.getAddrACData=function(kN,ckM,aKR)
{
var Py=kN.value||ckM||"",
bU=Py.lastIndexOf(';');
bU=(bU>-1)?bU:Py.lastIndexOf(',');
if(bU!=-1)
{
Py=Py.substr(bU+1)
}
if(!Py)
{
return[];
}

var apI=trim(Py).toLowerCase(),
ad=arguments.callee,
hu,


mp=new RegExp("("+regFilter(apI)+")","i"),
bdr='<b unselectable="on">$1</b>',
bvt=[],
bwA=[],
bqP=apI.length;

if(ad.brV&&apI.indexOf(ad.brV)==0&&ad.aWA&&
ad.aWA.length&&ad.dAu===iN.getTime())
{
hu=ad.aWA;
}
else
{
hu=iN.getAutoAddrList(aKR);
}

for(var i=0,be=hu.length;i<be;i++)
{
var je=hu[i],
aEq,
NO=null;

if(je.acspec)
{

var aT=htmlDecode(je.name).toLowerCase(),
gK;
if((gK=aT.indexOf(apI))>-1)
{
NO=['"',htmlEncode(aT.substring(0,gK)),'<b>',htmlEncode(aT.substr(gK,bqP)),'</b>',htmlEncode(aT.substring(gK+bqP)),'" &lt;',je.email,'&gt;'].join("");
}
}
else
{
if((aEq=je.name.replace(mp,bdr))!=je.name)
{
NO=['"',aEq,'" &lt;',je.email,'&gt;'].join("");
}
}
if(!NO)
{
if((aEq=je.email.replace(mp,bdr))!=je.email)
{
NO=['"',je.name,'" &lt;',aEq,'&gt;'].join("");
}
else if(mp.test(je.pinyin))
{
NO=['"',je.name,'" &lt;',je.email,'&gt;'].join("");
}
}

if(NO&&je.nShortcutGroupId)
{
NO=T(['<img unselectable="on" class="lm_groupAutoIcon" src="',getPath('image'),'$path$spacer.gif" title="群组帐号"/>$name$']).replace({
name:je.name.replace(mp,bdr)
});
}

if(NO)
{
bvt.push(je);
bwA.push(
{
sId:i,
oAddress:je,
sItemValue:NO
}
);
}
}
ad.brV=apI;

ad.dAu=iN.getTime();
ad.aWA=bvt;
return bwA;
};
}
)(window);
