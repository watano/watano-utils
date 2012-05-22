

























function Lunar(qW)
{
this.constructor=arguments.callee;

qW=qW||new Date;

this.nSolarYear=qW.getFullYear();
this.nSolarMonth=qW.getMonth()+1;
this.nSolarDay=qW.getDate();

var aC,aMH=0,Bd=0,
dZF=new Date(1900,0,31),
jz=(qW-dZF)/86400000;
this.nDayCyl=jz+40;
this.nMonCyl=14;
for(aC=1900;aC<2050&&jz>0;aC++)
{
Bd=Lunar.yearDays(aC);
jz-=Bd;
this.nMonCyl+=12;
}
if(jz<0)
{
jz+=Bd;
aC--;
this.nMonCyl-=12;
}
this.nYear=aC;
this.nYearCyl=aC-1864;
aMH=Lunar.leapMonth(aC);
this.bLeap=false;
for(aC=1;aC<13&&jz>0;aC++)
{
if(aMH>0&&aC==aMH+1&&this.bLeap==false)
{
--aC;
this.bLeap=true;
Bd=Lunar.leapDays(this.nYear);
}
else
{
Bd=Lunar.monthDays(this.nYear,aC);
}
if(this.bLeap&&aC==aMH+1)
{
this.bLeap=false;
}
jz-=Bd;
if(!this.bLeap)
{
this.nMonCyl++
}
}
if(jz==0&&aMH>0&&aC==aMH+1)
{
if(this.bLeap)
{
this.bLeap=false;
}
else
{
this.bLeap=true;
--aC;
--this.nMonCyl;
}
}
if(jz<0)
{
jz+=Bd;
--aC;
--this.nMonCyl;
}
this.nMonth=aC;
this.nDay=jz+1;
}





















Lunar.prototype.initFestival=function()
{
var akw=Lunar.aOC;

this.sY=akw.dBt[(this.nYear-4)%12];

this.sM=akw.cYG[this.nMonth];

this.sD=Lunar.getLunarDay(this.nDay);
if(this.nDay==1)
{
this.sShow=(this.bLeap?'闰':'')+this.sM+'月'+(Lunar.monthDays(this.nYear,this.nMonth)==29?'小':'大');
}
else
{

this.sShow=this.sM+"月"+this.sD;
}

this.ChineseEraYear=akw.cfH(this.nYearCyl);
this.ChineseEraMonth=akw.cfH(this.nMonCyl);
this.ChineseEraDay=akw.cfH(this.nDayCyl);


for(var aC=0;aC<2;aC++)
{
var sl=akw.dzs(this.nSolarYear,(this.nSolarMonth-1)*2+aC);
if(sl==this.nSolarDay)
{
this.sSolarTerm=akw.dvn[(this.nSolarMonth-1)*2+aC];
}
}

this.oSolarFestival=[];

for(var aC in akw.cZD)
{
if(akw.cZD[aC].match(/^(\d{2})(\d{2})([\s\*])(.+)$/))
if(Number(RegExp.$1)==this.nSolarMonth&&Number(RegExp.$2)==this.nSolarDay)
{
this.oSolarFestival.push(RegExp.$4+' ');
}
}

var dji=(new Date(this.nSolarYear,this.nSolarMonth-1)).getDay();
for(var aC in akw.cSM)
{
if(akw.cSM[aC].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/))
{
if(Number(RegExp.$1)==this.nSolarMonth)
{
var dze=Number(RegExp.$2),
cOT=Number(RegExp.$3);
if((dji>cOT?7:0)+7*(dze-1)+cOT+1-dji==this.nSolarDay)
{
this.oSolarFestival.push(RegExp.$5+' ');
}
}
}
}

this.oLunarFestival=[];

for(var aC in akw.cYd)
{
if(akw.cYd[aC].match(/^(\d{2})(.{2})([\s\*])(.+)$/))
{
if(Number(RegExp.$1)==this.nMonth&&Number(RegExp.$2)==this.nDay)
{
this.oLunarFestival.push(RegExp.$4+' ');
}
if(Number(RegExp.$1)==1&&Number(RegExp.$2)==0)
{


if(this.nSolarDay==31)
{
var csf=new Lunar(new Date(this.nSolarYear,2-1,1));
}
else
{
var csf=new Lunar(new Date(this.nSolarYear,this.nSolarMonth-1,this.nSolarDay+1));
}
if(csf.nDay==1&&csf.nMonth==1)
{
this.oLunarFestival.push(RegExp.$4+' ');
}
}
}
}
}





Lunar.yearDays=function(hp)
{
var aC,acO=348
for(aC=0x8000;aC>0x8;aC>>=1)
acO+=(Lunar.aOC.bZz[hp-1900]&aC)?1:0;
return(acO+Lunar.leapDays(hp));
}


Lunar.leapDays=function(hp)
{
if(this.leapMonth(hp))
return(Lunar.aOC.bZz[hp-1900]&0x10000)?30:29;
else return 0;
}


Lunar.leapMonth=function(hp)
{
return Lunar.aOC.bZz[hp-1900]&0xf;
}


Lunar.monthDays=function(hp,iX)
{
return(Lunar.aOC.bZz[hp-1900]&(0x10000>>iX))?30:29;
}


Lunar.aOC={
cfH:function(wY)
{
return this.dzS[wY%10]+this.eaA[wY%12];
},

dzs:function(hp,cES)
{
var dJW=new Date((31556925974.7*(hp-1900)+this.duR[cES]*60000)+Date.UTC(1900,0,6,2,5));
return dJW.getUTCDate();
},

bZz:[
0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,
0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,
0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,
0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0
],

dzS:["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],

eaA:["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],

dBt:["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"],

dvn:["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"],

duR:[0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758],

dzn:['日','一','二','三','四','五','六','七','八','九'],

cYG:['','正','二','三','四','五','六','七','八','九','十','十一','腊'],

dzj:['初','十','廿','卅','　'],

cYd:[
"0101*春节",
"0115 元宵节",
"0505 端午节",
"0707 七夕节",
"0815 中秋节",
"0909 重阳节",
"1208 腊八节",
"1224 小年",
"0100*除夕"
],
cSM:[
"0520 母亲节",
"0630 父亲节",
"1144 感恩节"
],
cZD:[
"0101*元旦",
"0214 情人节",
"0308 妇女节",
"0312 植树节",
"0401 愚人节",
"0501 劳动节",
"0504 青年节",
"0601 儿童节",
"0701 建党节",
"0801 建军节",
"0910 教师节",
"1001*国庆节",
"1225 圣诞节"
]
};


Lunar.lunarDateToSolar=function(bSf,bSg,dMd,cgj)
{
var bCD=0;
var dhq=Lunar.leapMonth(bSf);


for(var sR=1900;sR<bSf;sR++)
{
bCD+=Lunar.yearDays(sR);
}

if(bSg>dhq)
{
bCD+=Lunar.leapDays(bSf);
}
else if(cgj&&(dhq==bSg))
{
bSg++;
}
for(var NY=1;NY<bSg;NY++)
{
bCD+=Lunar.monthDays(bSf,NY);
}
bCD+=(dMd-1);
return new Date(bCD*86400000+(+new Date(1900,0,31)));
}








Lunar.calLunarDays=function(hp,iX,cgj)
{
var dbS=!hp||!iX?30:Lunar.monthDays(hp,iX),
dhp=Lunar.leapDays(hp,iX);
if(cgj&&dhp>0)
{
dbS=dhp;
}
return dbS;
}



















Lunar.getLunarMonth=function(iX)
{
return Lunar.aOC.cYG[iX];
}

Lunar.getLunarDay=function(jd)
{
var djh=Math.floor(jd/10),
dhg=jd%10;
if(dhg)
{
return Lunar.aOC.dzj[djh]+Lunar.aOC.dzn[dhg]
}
else
{
return['','初十','二十','三十'][djh];
}
}

Lunar.isChangeToLeapMonth=function(BQ,acB)
{
var CD=arguments.callee.dSu;
if(!CD)
{
CD=arguments.callee.dSu=new Lunar();
}
return CD.bLeap&&CD.nYear==BQ&&CD.nMonth==acB;
}
