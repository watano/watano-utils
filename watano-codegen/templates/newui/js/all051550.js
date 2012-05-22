



























var gsAgent = navigator.userAgent.toLowerCase(), gsAppVer = navigator.appVersion.toLowerCase(), gsAppName = navigator.appName.toLowerCase(), gbIsOpera = gsAgent.indexOf("opera") > -1, gbIsWebKit = gsAgent.indexOf("applewebkit") > -1, gbIsKHTML = gsAgent.indexOf("khtml") > -1 ||
gsAgent.indexOf("konqueror") > -1 ||
gbIsWebKit, gbIsChrome = gbIsWebKit && gsAgent.indexOf("chrome") > -1 && gsAgent.indexOf("se 2.x metasr 1.0") < 0, gbIsSafari = gbIsWebKit && !gbIsChrome, gbIsIE = (gsAgent.indexOf("compatible") > -1 && !gbIsOpera) ||
gsAgent.indexOf("msie") > -1, gbIsTT = gbIsIE ? (gsAppVer.indexOf("tencenttraveler") != -1 ? 1 : 0) : 0, gbIsQBWebKit = gbIsWebKit ? (gsAppVer.indexOf("qqbrowser") != -1 ? 1 : 0) : 0, gbIsQBIE = gbIsIE, gbIsFF = gsAgent.indexOf("gecko") > -1 && !gbIsKHTML, gbIsNS = !gbIsIE && !gbIsOpera && !gbIsKHTML && (gsAgent.indexOf("mozilla") == 0) &&
(gsAppName == "netscape"), gbIsAgentErr = !(gbIsOpera || gbIsKHTML || gbIsSafari || gbIsIE || gbIsTT ||
gbIsFF ||
gbIsNS), gbIsWin = gsAgent.indexOf("windows") > -1 || gsAgent.indexOf("win32") > -1, gbIsVista = gbIsWin && (gsAgent.indexOf("nt 6.0") > -1 || gsAgent.indexOf("windows vista") > -1), gbIsWin7 = gbIsWin && gsAgent.indexOf("nt 6.1") > -1, gbIsMac = gsAgent.indexOf("macintosh") > -1 || gsAgent.indexOf("mac os x") > -1, gsMacVer = /mac os x (\d+)(\.|_)(\d+)/.test(gsAgent) && parseFloat(RegExp.$1 + "." + RegExp.$3), gbIsLinux = gsAgent.indexOf("linux") > -1, gbIsAir = gsAgent.indexOf("adobeair") > -1, gnIEVer = /MSIE (\d+.\d+);/i.test(gsAgent) && parseFloat(RegExp["$1"]), gsFFVer = /firefox\/((\d|\.)+)/i.test(gsAgent) && RegExp["$1"], gsSafariVer = "" + (/version\/((\d|\.)+)/i.test(gsAgent) && RegExp["$1"]), gsChromeVer = "" + (/chrome\/((\d|\.)+)/i.test(gsAgent) && RegExp["$1"]), gsQBVer = "" + (/qqbrowser\/((\d|\.)+)/i.test(gsAgent) && RegExp["$1"]), aWU = "_For_E_Built";




if (document.domain != "qq.com" || !window.getTop) {
    document.domain = "qq.com";
    
    
    
    
    
    
    window.getTop = function(){
        var JN = arguments.callee;
        
        if (!JN.afF) {
            try {
                if (window != parent) {
                    JN.afF = parent.getTop ? parent.getTop() : parent.parent.getTop();
                }
                else {
                    JN.afF = window;
                }
            } 
            catch (aR) {
                JN.afF = window;
            }
        }
        
        return JN.afF;
    }
    
    
    try {
    
    
    } 
    catch (aR) {
    
        eval("var top = getTop();");
    }
}







function QS(bA, oF){
    return typeof bA == "function" ? bA.apply(this, oF || []) : null;
}







function callBack(bA, oF){
    if (!window.Console) {
        try {
            return QS.call(this, bA, oF);
        } 
        catch (aR) {
            debug(aR.message);
        }
    }
    else {
        return QS.call(this, bA, oF);
    }
}









function waitFor(YV, Lk, Ez, yX){
    var jn = 0, nh = Ez || 500, Yo = (yX || 10 * 500) / nh;
    
    function bNl(oY){
        try {
            Lk(oY)
        } 
        catch (aR) {
            debug(aR, 2);
        }
    };
    
    (function(){
        try {
            if (YV()) {
                return bNl(true);
            }
        } 
        catch (aR) {
            debug(aR, 2);
        }
        
        if (jn++ > Yo) {
            return bNl(false);
        }
        
        setTimeout(arguments.callee, nh);
    })();
}






function unikey(Fb){
    return [Fb, now(), Math.random()].join("").split(".").join("");
}




function genGlobalMapIdx(){
    return Math.round(Math.random() * 10000).toString() + new Date().getMilliseconds();
}






function isLeapYear(hD){
    return (hD % 400 == 0 || (hD % 4 == 0 && hD % 100 != 0));
}







function calDays(hD, je){
    return [null, 31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][je] || (isLeapYear(hD) ? 29 : 28);
}





function now(){
    return +new Date;
}






function trim(bQ){
    return (bQ && bQ.replace ? bQ : "").replace(/(^\s*)|(\s*$)/g, "");
}

function trim2(bQ){


    if (bQ && bQ.substring) {
        var oj = /\s/, Eg = -1, EL = bQ.length;
        while (oj.test(bQ.charAt(--EL))) 
            ;
        while (oj.test(bQ.charAt(++Eg))) 
            ;
        return bQ.substring(Eg, EL + 1);
    }
    
}












function strReplace(bQ, aes, cDh, dC){
    return (bQ || "").replace(new RegExp(regFilter(aes), dC), cDh);
}






function encodeURI(bQ){
    return bQ && bQ.replace ? bQ.replace(/%/ig, "%25").replace(/\+/ig, "%2B").replace(/&/ig, "%26").replace(/#/ig, "%23").replace(/\'/ig, "%27").replace(/\"/ig, "%22") : bQ;
}






function decodeURI(bQ){
    return decodeURIComponent(bQ || "");
}






function regFilter(Yq){
    return Yq.replace(/([\^\.\[\$\(\)\|\*\+\?\{\\])/ig, "\\$1");
}






function isUrl(gW){
    return (gW || "").replace(/http?:\/\/[\w.]+[^ \f\n\r\t\v\"\\\<\>\[\]\u2100-\uFFFF]*/, "url") ==
    "url";
}













function cookQueryString(aJ, aH){
    for (var i in aH) {
        var cZ = aH[i], lo = new RegExp(["([?&]", i, "=)[^&#]*"].join(""), "gi");
        
        aJ = lo.test(aJ) ? aJ.replace(lo, "$1" + cZ) : [aJ, "&", i, "=", cZ].join("");
    }
    return aJ;
}









function formatNum(wR, bsN){
    var OH = (isNaN(wR) ? 0 : wR).toString(), aOn = bsN - OH.length;
    return aOn > 0 ? [new Array(aOn + 1).join("0"), OH].join("") : OH;
}







function numToStr(wR, cxK){
    var OH = String(wR.toFixed(cxK));
    var re = /(-?\d+)(\d{3})/;
    while (re.test(OH)) {
        OH = OH.replace(re, "$1,$2");
    }
    return OH;
}




function numToTimeStr(wR, ND){
    var CK = ND || "$HH$:$MM$:$SS$";
    return T(CK).replace({
        SS: formatNum(parseInt(wR) % 60, 2),
        MM: formatNum(parseInt(wR / 60) % 60, 2),
        HH: formatNum(parseInt(wR / 3600) % 60, 2)
    })
}








function formatDate(qZ, ND, cDw){
    var ez = qZ || new Date(), ape = formatNum;
    
    return T(ND, cDw).replace({
        YY: ape(ez.getFullYear(), 4),
        MM: ape(ez.getMonth() + 1, 2),
        DD: ape(ez.getDate(), 2),
        hh: ape(ez.getHours(), 2),
        mm: ape(ez.getMinutes(), 2),
        ss: ape(ez.getSeconds(), 2)
    });
}







function getAsiiStrLen(bQ){
    return (bQ || "").replace(/[^\x00-\xFF]/g, "aa").length;
}





function clearHtmlStr(bQ){
    return bQ ? bQ.replace(/<[^>]*>/g, "") : bQ;
}








function subAsiiStr(bQ, qi, Zg, Jk){
    var Jq = function(gW){
        return gW
    }, IO = Jk ? htmlEncode : Jq, iC = (Jk ? htmlDecode : Jq)(trim((bQ || "").toString())), Jc = Zg || "", NR = Math.max(qi - Jc.length, 1), abH = iC.length, zg = 0, wL = -1, rL;
    
    for (var i = 0; i < abH; i++) {
        rL = iC.charCodeAt(i);
        
        
        zg += rL == 35 || rL == 87 ? 1.2 : (rL > 255 ? 1.5 : 1);
        
        if (wL == -1 && zg > NR) {
            wL = i;
        }
        
        if (zg > qi) {
            return IO(iC.substr(0, wL)) + Jc;
        }
    }
    
    return IO(iC);
}













function setCookie(aC, bt, vD, cB, pE, BV){
    if (aC) {
        document.cookie = T(['$name$=$value$; ', !vD ? '' : 'expires=$expires$; ', 'path=$path$; ', 'domain=$domain$; ', !BV ? '' : '$secure$']).replace({
            name: aC,
            value: encodeURIComponent(bt || ""),
            expires: vD && vD.toGMTString(),
            path: cB || '/',
            domain: pE || ["mail.", getDomain()].join(""),
            secure: BV ? "secure" : ""
        });
        return true;
    }
    else {
        return false;
    }
}






function getCookie(aC){
    return (new RegExp(["(?:; )?", regFilter(aC), "=([^;]*);?"].join(""))).test(document.cookie) &&
    decodeURIComponent(RegExp["$1"]);
}







function deleteCookie(aC, cB, pE){
    setCookie(aC, "", new Date(0), cB, pE);
}









function setCookieFlag(aC, fR, CH, aXd){
    var ju = aXd || getCookieFlag(aC), LM = new Date();
    
    
    LM.setTime(LM.getTime() + (30 * 24 * 3600 * 1000));
    ju[fR] = CH;
    setCookie(aC, ju.join(""), LM);
    
    return ju;
}






function getCookieFlag(aC){
    var aZj = (getCookie(aC) || "").split("");
    
    for (var i = aZj.length; i < 6; i++) {
        aZj[i] = '0';
    }
    
    return aZj;
}








function isArr(aH){
    return Object.prototype.toString.call(aH) == 'object Array';
}









function E(QG, ajD, aAM, acT){
    if (!QG) {
        return;
    }
    
    if (QG.length != null) {
        var aQ = QG.length, mz;
        
        if (acT < 0) {
            mz = aQ + acT;
        }
        else {
            mz = acT < aQ ? acT : aQ;
        }
        
        for (var i = (aAM || 0); i < mz; i++) {
            try {
                if (ajD(QG[i], i, aQ) === false) {
                    break;
                }
            } 
            catch (aR) {
                debug([aR.message, "<br>line:", aR.lineNumber, '<br>file:', aR.fileName, "<br>", ajD]);
            }
        }
    }
    else {
        for (var i in QG) {
            try {
                if (ajD(QG[i], i) === false) {
                    break;
                }
            } 
            catch (aR) {
                debug([aR.message, "<br>", ajD]);
            }
        }
    }
}









function extend(){
    for (var bp = arguments, rA = bp[0], i = 1, aQ = bp.length; i < aQ; i++) {
        var Fe = bp[i];
        for (var j in Fe) {
            rA[j] = Fe[j];
        }
    }
    return rA;
}







function delAtt(aG, ajZ){
    try {
        delete aG[ajZ];
    } 
    catch (aR) {
    }
    return aG;
}







function saveAtt(aG, ajZ){
    if (aG) {
        var cCq = aG.hasOwnProperty(ajZ), hU = aG[ajZ];
        return function(){
            if (cCq) {
                aG[ajZ] = hU;
            }
            else {
                delAtt(aG, ajZ);
            }
            return aG;
        };
    }
    else {
        return function(){
        };
    }
}









function globalEval(gE, MF){
    var afl = getTop().globalEval || arguments.callee;
    
    if (!afl.bdz && typeof(afl.bDF) != "boolean") {
        var bh = "testScriptEval" + now();
        
        afl.bdz = true;
        afl(T('window.$id$=1;').replace({
            id: bh
        }));
        afl.bdz = false;
        
        afl.bDF = getTop()[bh] ? true : false;
    }
    
    var hY = trim(gE);
    if (!hY) {
        return false;
    }
    
    var aO = (MF || window).document, xG = GelTags("head", aO)[0] || aO.documentElement, it = aO.createElement("script");
    
    it.type = "text/javascript";
    if (afl.bDF || arguments.callee.bdz) {
        try {
            it.appendChild(aO.createTextNode(hY));
        } 
        catch (aR) {
        }
    }
    else {
    
    
        it.text = hY;
    }
    
    xG.insertBefore(it, xG.firstChild);
    xG.removeChild(it);
    
    return true;
}





function evalValue(gE, MF){
    var cS = unikey("_u"), au = MF || window;
    
    globalEval(["(function(){try{window.", cS, "=", gE, ";}catch(_oError){}})();"].join(""), au);
    return au[cS];
}






function S(aL, gU){
    try {
        return (gU && (gU.document || gU) ||
        document).getElementById(aL);
    } 
    catch (aR) {
        return null;
    }
}







function SN(aC, gU){
    try {
        var afN = (gU && (gU.document || gU) ||
        document).getElementsByName(aC);
        if (afN) {
            afN[aWU] = true;
        }
        return afN;
    } 
    catch (aR) {
        return null;
    }
}









function attr(ak, eC, bt){

    if (!ak || !ak.nodeType || ak.nodeType === 3 || ak.nodeType === 8) {
        return undefined;
    }
    if (bt === undefined) {
        return ak.getAttribute(eC);
    }
    else {
        ak.setAttribute(eC, bt);
        return ak;
    }
}







function GelTags(fU, cD){
    var afN = (cD || document).getElementsByTagName(fU);
    if (afN) {
        afN[aWU] = true;
    }
    return afN;
    
}







function F(aL, al){
    var LU = S(aL, al);
    return LU && (LU.contentWindow || (al || window).frames[aL]);
}

function appendToUrl(aJ, csK){
    var bV = aJ.split("#");
    return [bV[0], csK, (bV.length > 1 ? "#" + bV[1] : "")].join("");
}









function insertHTML(cD, fq, dA){
    if (!cD) {
        return false;
    }
    try {
    
        if (cD.insertAdjacentHTML) {
            cD.insertAdjacentHTML(fq, dA);
        }
        else {
            var fl = cD.ownerDocument.createRange(), jr = fq.indexOf("before") == 0, Io = fq.indexOf("Begin") != -1;
            if (jr == Io) {
                fl[jr ? "setStartBefore" : "setStartAfter"](cD);
                cD.parentNode.insertBefore(fl.createContextualFragment(dA), Io ? cD : cD.nextSibling);
            }
            else {
                var fc = cD[jr ? "lastChild" : "firstChild"];
                if (fc) {
                    fl[jr ? "setStartAfter" : "setStartBefore"](fc);
                    cD[jr ? "appendChild" : "insertBefore"](fl.createContextualFragment(dA), fc);
                }
                else {
                    cD.innerHTML = dA;
                }
            }
        }
        return true;
    } 
    catch (aR) {
        return false;
    }
}

















function setHTML(azW, dA){
    var azw = typeof azW === "string" ? S(azW) : azW, aAd = azw.cloneNode(false);
    aAd.innerHTML = dA;
    azw.parentNode.replaceChild(aAd, azw);
    return aAd;
}



















function createIframe(al, mP, cV){
    var avo = "_creAteifRAmeoNlQAd_", cP = cV || {}, bh = cV.id || unikey(), Ae = S(bh, al);
    
    
    if (typeof al[avo] != "function") {
        al[avo] = function(aL, crc){
            callBack.call(crc, arguments.callee[aL], [al]);
        };
    }
    
    
    al[avo][bh] = cV.onload;
    if (!Ae) {
        insertHTML(cP.obj || al.document.body, cP.where || "afterBegin", TE(['<iframe frameborder="0" scrolling="$scrolling$" id="$id$" name="$id$" ', '$@$if($transparent$)$@$allowTransparent$@$endif$@$ class="$className$" ', 'onload="this.setAttribute(\x27loaded\x27,\x27true\x27);$cb$(\x27$id$\x27,this);" ', 'src="$src$" style="$style$" $attrs$>', '</iframe>']).replace(extend({
            "id": bh,
            "cb": avo,
            style: "display:none;",
            scrolling: "no",
            src: mP
        }, cV)));
        Ae = S(bh, al);
        Ae.aPQ = cV.onload;
    }
    else 
        if (Ae.getAttribute("loaded") == "true") {
            al[avo](bh, Ae);
        }
    return Ae;
}





function removeSelf(cD){
    try {
        cD.parentNode.removeChild(cD);
    } 
    catch (aR) {
    }
    
    return cD;
}







function isObjContainTarget(cD, pT){
    try {
        if (!cD || !pT) {
            return false;
        }
        else 
            if (cD.contains) {
                return cD.contains(pT);
            }
            else 
                if (cD.compareDocumentPosition) {
                    var Ip = cD.compareDocumentPosition(pT);
                    return (Ip == 20 || Ip == 0);
                }
    } 
    catch (Ci) {
    
    
    }
    
    return false;
}






function isDisableCtl(aWx, al){
    var bvc = SN(aWx, al);
    for (var i = bvc.length - 1; i >= 0; i--) {
        if (bvc[i].disabled) {
            return true;
        }
    }
    return false;
}







function disableCtl(aWx, AQ, gU){
    E(SN(aWx, gU), function(cwI){
        cwI.disabled = AQ;
    });
}








function isShow(wB, gU){
    return (getStyle((typeof(wB) == "string" ? S(wB, gU) : wB), "display") || "none") !=
    "none";
}







function show(wB, sl, gU){
    var fc = (typeof(wB) == "string" ? S(wB, gU) : wB);
    if (fc) {
        fc.style.display = (sl ? "" : "none");
    }
    else 
        if (!gU && typeof(wB) == "string") {
        
        }
    return fc;
}


var Show = show;





function toggle(wB, gU){
    return show(wB, !isShow(wB, gU), gU);
}







function setClass(cD, ZH){
    if (cD && typeof(ZH) != "undefined" && cD.className != ZH) {
        cD.className = ZH;
    }
    return cD;
}







function getStyle(cD, cDz){
    var sw = cD &&
    (cD.currentStyle ? cD.currentStyle : cD.ownerDocument.defaultView.getComputedStyle(cD, null));
    return sw && sw[cDz] || "";
}







function setOpacity(cD, abt){
    if (cD && cD.tagName) {
        var cN = cD.style, ME = abt || 0;
        if (typeof cN.filter == "undefined") {
            cN.opacity = ME;
        }
        else {
            cN.filter = ME == 1 ? "" : ["alpha(opacity=", ME * 100, ")"].join("");
        }
    }
    return cD;
}






function getOpacity(cD, abt){
    if (cD && cD.tagName) {
        var cN = cD.style, ME = 1;
        
        if (typeof cN.filter == "undefined") {
            ME = parseFloat(cN.opacity);
        }
        else {
            ME = parseFloat(cN.filter.split("=").pop()) / 100;
        }
        
        if (isNaN(ME)) {
            ME = 1;
        }
    }
    return ME;
}






function getStrDispLen(bQ){
    var buM = "__QMStrCalcer__";
    var aDo = S(buM, getTop());
    if (!aDo) {
        var dh = getTop().document.body;
        insertHTML(dh, "afterBegin", T(['<div id="$id$" ', 'style="width:1px;height:1px;overflow:auto;*overflow:hidden;white-space:nowrap;', 'position:absolute;left:0;top:0;">', '</div>']).replace({
            id: buM
        }));
        aDo = dh.firstChild;
    }
    aDo.innerHTML = htmlEncode(bQ);
    return aDo.scrollWidth;
}







function calcPos(cD, aXm){
    var cH = 0, eZ = 0, cO = 0, dv = 0;
    
    if (cD && cD.tagName) {
        var fc = cD.parentNode, beP = fc && fc.offsetParent, btK = cD.offsetParent, ebF;
        
        eZ += cD.offsetLeft;
        cH += cD.offsetTop;
        cO = cD.offsetWidth;
        dv = cD.offsetHeight;
        while (beP) {
            if (btK == fc) {
                eZ += fc.offsetLeft;
                cH += fc.offsetTop;
                btK = beP;
            }
            
            eZ -= fc.scrollLeft;
            cH -= fc.scrollTop;
            fc = fc.parentNode;
            beP = fc.offsetParent;
        }
    }
    
    return aXm == "json" ? {
        top: cH,
        bottom: cH + dv,
        left: eZ,
        right: eZ + cO,
        width: cO,
        height: dv
    } : [cH, eZ + cO, cH + dv, eZ, cO, dv];
}







function calcPosFrame(cD, al){
    al = al || window;
    var nv = calcPos(cD), ae = getTop();
    while (al.frameElement && al != ae) {
        var gH = calcPos(al.frameElement);
        for (var i = 0; i < 4; i++) {
        
            nv[i] += gH[i & 1 ? 3 : 0] - bodyScroll(al, i & 1 ? "scrollLeft" : "scrollTop");
            
        }
        al = al.parent;
    }
    return nv;
}










function calcAdjPos(lT, uB, po, al, ea){
    var awC = bodyScroll(al, 'clientHeight'), bfC = bodyScroll(al, 'clientWidth'), acW = bodyScroll(al, 'scrollTop'), aBW = bodyScroll(al, 'scrollLeft'), anf = acW + awC, aNm = aBW + bfC, aw = [0, 0, 0, 0];
    if (ea < 2) {
    
        var jI = aBW - lT[1];
        if (ea == 0 && lT[3] < uB ||
        ea == 1 && aNm - lT[1] > uB) {
        
            aw[1] = (aw[3] = lT[1]) + uB;
        }
        else {
        
            aw[3] = (aw[1] = lT[3]) - uB;
        }
        if (lT[0] + po > anf) {
        
        
            aw[0] = (aw[2] = (lT[2] - po < acW ? anf : lT[2])) - po;
        }
        else {
        
            aw[2] = (aw[0] = lT[0]) + po;
        }
    }
    else {
    
        if (ea == 2 && lT[0] - acW < po ||
        ea == 3 && anf > lT[2] + po) {
        
            aw[2] = (aw[0] = lT[2]) + po;
        }
        else {
        
            aw[0] = (aw[2] = lT[0]) - po;
        }
        aw[1] = lT[1];
        aw[3] = lT[3];
    }
    return aw;
}







function bodyScroll(gU, ao, cj){
    var aO = (gU || window).document || gU, dh = aO.body, tk = aO.documentElement;
    
    if (typeof(cj) == "number") {
        dh[ao] = tk[ao] = cj;
    }
    else {
        if (ao == "scrollTop" && typeof gU.pageYOffset != "undefined") {
            return gU.pageYOffset;
        }
        else {
            return tk[ao] || dh[ao];
        }
    }
}








function htmlDecode(bQ){
    return bQ && bQ.replace ? (bQ.replace(/&nbsp;/gi, " ").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&").replace(/&quot;/gi, "\"").replace(/&#39;/gi, "'")) : bQ;
}






function htmlEncode(bQ){
    return bQ && bQ.replace ? (bQ.replace(/&/g, "&amp;").replace(/\"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\'/g, "&#39;")) : bQ;
}







function filteScript(bQ, cuF){
    return bQ &&
    bQ.replace(/<script ?.*>(.*?)<\/script>/ig, "<script>$1\n</script>").replace(/<script ?.*>([\s\S]*?)<\/script>/ig, cuF || "");
}






function textToHtml(fD){

    return ['<DIV>', fD.replace((fD.indexOf("<BR>") >= 0) ? /<BR>/ig : /\n/g, "</DIV><DIV>"), "</DIV>"].join("").replace(new RegExp("\x0D", "g"), "").replace(new RegExp("\x20", "g"), "&nbsp;").replace(new RegExp("(<DIV><\/DIV>)*$", "g"), "").replace(/<DIV><\/DIV>/g, "<DIV>&nbsp;</DIV>");
}






function textToHtmlForNoIE(fD){
    return fD.replace(/\n/g, "<br>");
}






function htmlToText(fD){
    return fD.replace(/\n/ig, "").replace(/(<\/div>)|(<\/p>)|(<br\/?>)|(<\/li>)/ig, "\n");
}






function fixNonBreakSpace(bQ){
    return (bQ || "").replace(/\xA0/ig, " ");
}









function pasteHTML(aAy, arq, cvH, al){
    al = al || getMainWin();
    aAy = filteScript(aAy);
    var bw = (typeof(arq) == "string" ? S(arq, al) : arq);
    if (!bw || !aAy) {
        return false;
    }
    if (cvH) {
        bw.innerHTML = aAy;
    }
    else {
        insertHTML(bw, "afterBegin", aAy);
    }
    return true;
}







function T(iw, nk){
    return new T.uA(iw, nk);
}









































function TE(iw, nk){
    var ae = getTop();
    if (ae.QMTmplChecker) {
        var aR = (new ae.QMTmplChecker(iw.join ? iw : [iw], nk)).getErrors();
        if (aR.length) {
            debug(aR.join("\n"), "code");
        }
    }
    return new T.uA(iw, nk, "exp");
}

T.uA = function(iw, nk, ao){
    this.zf = iw.join ? iw.join("") : iw.toString();
    this.tF = nk || "$";
    this.YD = ao == "exp" ? this.Zd : this.Zf;
};

T.uA.prototype = {
    toString: function(){
        return this.zf;
    },
    
    replace: function(iE, pH){
        return this.YD(iE, pH);
    },
    
    Zf: function(iE, Zm){
        var ad = this, qa = ad.tF, nd = ad.II, zr = ad.Yh, Jm = !nd;
        
        if (Jm) {
        
            nd = ad.II = ad.zf.split(ad.tF);
            zr = ad.Yh = ad.II.concat();
        }
        
        for (var i = 1, aQ = nd.length; i < aQ; i += 2) {
            zr[i] = ad.vj(Jm ? (nd[i] = nd[i].split(".")) : nd[i], iE, Zm, qa);
        }
        
        return zr.join("");
    },
    
    Zd: function(iE, pH){
        var ad = this, mI;
        
        if (!ad.IV) {
            ad.abT();
        }
        
        if (pH) {
            var tD = ad.Ii[pH];
            if (tD) {
                mI = typeof tD != "function" ? ad.Ii[pH] = ad.Ih(tD) : tD;
            }
        }
        else {
            mI = ad.IV;
        }
        
        try {
            return mI &&
            mI(iE, ad.Rg, ad.vj, ad.tF) ||
            "";
        } 
        catch (aR) {
            return aR.message;
        }
    },
    
    
    
    
    abT: function(){
        var ad = this, iu = 0, gy = [], yJ = [], yF = [], abx = ad.Ii = [], qa = ad.tF, mG = new RegExp(["", "(.*?)", ""].join(regFilter(qa)), "g"), qv = "_afG('$1'.split('.'),_oD,_aoD,_aoR)", uu = ad.Rg = ad.zf.split(["", "@", ""].join(qa)), dS;
        
        for (var i = 0, aQ = uu.length; i < aQ; i++) {
            dS = uu[i];
            
            if (i % 2 == 0) {
                gy.push("_oR.push(_aoT[", i, "].replace(_oD,_aoD));");
                uu[i] = T(dS, qa);
            }
            else 
                if (dS == "else") {
                    gy.push("}else{");
                }
                else 
                    if (dS == "endsec") {
                        if (yF.length) {
                            var az = yF.pop();
                            abx[az[0]] = gy.slice(az[1]);
                        }
                    }
                    else 
                        if (dS == "endfor") {
                            yJ.length && gy.push("}_oD=_oS", yJ.pop(), ";");
                        }
                        else 
                            if (dS == "endif") {
                                gy.push("}");
                            }
                            else 
                                if (dS.indexOf("else if(") == 0) {
                                    gy.push("}", dS.replace(mG, qv), "{");
                                }
                                else 
                                    if (dS.indexOf("if(") == 0) {
                                        gy.push(dS.replace(mG, qv), "{");
                                    }
                                    else 
                                        if (dS.indexOf("for(") == 0) {
                                            yJ.push(++iu);
                                            gy.push("var _sI", iu, ",_oD", iu, ",_oS", iu, "=_oD;", dS.replace(mG, ["_sI", iu, " in (_oD", iu, "=", qv, ")"].join("")), "{", "_oD=_oD", iu, "[_sI", iu, "];", "if(!_oD){continue;}", "_oD._parent_=_oS", iu, ";", "_oD._idx_=_sI", iu, ";");
                                        }
                                        else 
                                            if (dS.indexOf("sec ") == 0) {
                                                yF.push([dS.split(" ").pop(), gy.length]);
                                            }
                                            else 
                                                if (dS.indexOf("eval ") == 0) {
                                                    gy.push("_oR.push(", dS.substr(5).replace(mG, qv), ");");
                                                }
        }
        
        ad.IV = ad.Ih(gy);
        
        return gy;
    },
    
    Ih: function(aaz){
        try {
            return eval(['([function(_aoD,_aoT,_afG,_aoR){var _oR=[],_oD=_aoD;', aaz.join(""), 'return _oR.join("");}])'].join(""))[0];
        } 
        catch (eK) {
            return function(){
                return "compile err!"
            };
        }
    },
    
    vj: function(yq, iE, Zn, UH){
        var aQ = yq.length, cS, hU;
        
        if (aQ > 1) {
            try {
                hU = iE;
                for (var i = 0; i < aQ; i++) {
                    cS = yq[i];
                    if (cS == "_root_") {
                        hU = Zn;
                    }
                    else {
                        hU = hU[cS];
                    }
                }
            } 
            catch (aR) {
                hU = "";
            }
        }
        else {
            hU = {
                "_var_": UH,
                "_this_": iE
            }[cS = yq[0]] ||
            iE[cS];
        }
        
        return hU;
    }
};










var addEvent = (function(){








    function wv(pT, ao, akb, FB){
        if (pT && akb) {
            if (pT.addEventListener) {
                pT[FB ? "removeEventListener" : "addEventListener"](ao, akb, false);
            }
            else 
                if (pT.attachEvent) {
                    pT[FB ? "detachEvent" : "attachEvent"]("on" + ao, akb);
                }
                else {
                    pT["on" + ao] = FB ? null : akb;
                }
        }
        
        return pT;
    }
    
    return function(pT, ao, bul, FB){
        if (pT && (pT.join || pT[aWU])) {
            E(pT, function(ak){
                wv(ak, ao, bul, FB);
            });
        }
        else {
            wv(pT, ao, bul, FB);
        }
        
        return pT;
    };
})();








function addEvents(pT, Ie, FB){
    E(Ie, function(yv, ao){
        addEvent(pT, ao, yv, FB);
    });
    return pT;
}








function removeEvent(pT, ao, akb){
    return addEvent(pT, ao, akb, true);
}







function removeEvents(pT, Ie){
    return addEvents(pT, Ie, true);
}






function preventDefault(ag){
    if (ag) {
        if (ag.preventDefault) {
            ag.preventDefault();
        }
        else {
            ag.returnValue = false;
        }
    }
    return ag;
}






function stopPropagation(ag){
    if (ag) {
        if (ag.stopPropagation) {
            ag.stopPropagation();
        }
        else {
            ag.cancelBubble = true;
        }
    }
    return ag;
}






function getEventTarget(ag){
    return ag && (ag.srcElement || ag.target);
}







function fireMouseEvent(cD, bbB){
    if (cD) {
        if (cD.dispatchEvent) {
            var aO = cD.ownerDocument, au = aO.defaultView, bN = aO.createEvent("MouseEvents");
            bN.initMouseEvent(bbB, true, true, au, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            cD.dispatchEvent(bN);
        }
        else {
        
        
            if (cD.tagName == "INPUT" && cD.getAttribute("type") == "submit" && bbB == "click") {
                cD.click();
            }
            else {
                cD.fireEvent("on" + bbB);
            }
        }
    }
    return cD;
}











function loadJsFile(nx, bfT, gk, apF, lp){
    var aO = gk || document, bQN = typeof apF == "function", dLe, it;
    
    if (bfT) {
        for (var aIb = GelTags("script", aO), i = aIb.length - 1; i >= 0; i--) {
            if (aIb[i].src.indexOf(nx) != -1) {
                bQN && callBack.call(aIb[i], apF);
                return aIb[i];
            }
        }
    }
    
    it = aO.createElement("script");
    E(lp, function(ys, bP){
        it.setAttribute(bP, ys);
    });
    
    (GelTags("head", aO)[0] || aO.documentElement).appendChild(extend(it, bQN &&
    {
        onload: apF,
        onreadystatechange: function(){
            var ad = this;
            ({
                loaded: true,
                complete: true
            }[ad.readyState]) &&
            (!ad.cMr) &&
            (ad.cMr = true) &&
            apF.call(ad);
        }
    }, {
        type: "text/javascript",
        charset: "gb2312",
        src: nx
    }));
    
    return it;
}






function loadJsFileToTop(cB, yB){
    var cyb = window.loadJsFile;
    
    function cAx(nx){
        cyb(cB + nx, true, getTop().document);
    }
    
    E(yB, cAx);
}









function loadCssFile(nx, bfT, gk){
    var aO = gk || document;
    
    if (bfT) {
        for (var bQT = GelTags("link", aO), i = bQT.length - 1; i >= 0; i--) {
            if (bQT[i].href.indexOf(nx) != -1) {
                return;
            }
        }
    }
    
    var nC = aO.createElement("link"), baC = GelTags("link", aO);
    
    nC.type = "text/css";
    nC.rel = "stylesheet";
    nC.href = nx;
    
    if (baC.length > 0) {
        var bwQ = baC[baC.length - 1];
        bwQ.parentNode.insertBefore(nC, bwQ.nextSibling);
    }
    else {
        (GelTags("head", aO)[0] || aO.documentElement).appendChild(nC);
    }
    
    return nC;
}








function replaceCssFile(ND, nx, gk){
    if (ND) {
        E(GelTags("link", gk || document), function(aWW){
            if (aWW && aWW.href.indexOf(ND) != -1) {
                removeSelf(aWW);
            }
        });
    }
    
    return loadCssFile(nx, false, gk);
}








function QMAjax(aJ, pO, yX){
    var ad = this, ae = getTop(), mk, dK;
    
    function bHj(){
        ad.onComplete(mk);
    }
    
    function bHR(dC){
        ad.onError(mk, dC);
    }
    
    function bFz(bzv){
        if (!dK) {
            dK = setTimeout(function(){
                ad.abort();
            }, bzv);
        }
    }
    
    function acE(dC){
        if (dK) {
            clearTimeout(dK);
            dK = null;
            if (dC != "ok") {
                bHR(dC);
            }
            return true;
        }
        return false;
    }
    
    
    
    this.method = pO || "POST";
    this.url = aJ;
    this.async = true;
    this.content = "";
    this.timeout = yX;
    
    
    this.onComplete = function(){
    };
    this.onError = function(){
    };
    
    try {
        mk = new XMLHttpRequest;
    } 
    catch (aR) {
        try {
            mk = new ActiveXObject("MSXML2.XMLHTTP");
        } 
        catch (aR) {
            try {
                mk = new ActiveXObject("Microsoft.XMLHTTP");
            } 
            catch (aR) {
            }
        }
    }
    
    if (!mk) {
        return false;
    }
    
    
    
    
    
    this.abort = function(){
        acE("abort");
        mk.abort();
    };
    
    
    
    
    
    
    this.send = function(bQv){
        if (!this.method || !this.url || !this.async) {
            return false;
        }
        
        typeof this.url == "object" && (this.url = this.url.replace({}));
        
        var fN = this.method.toUpperCase(), fQ = getTop().getSid && getTop().getSid();
        this.abort();
        
        mk.open(fN, this.url +
        (fQ && fN == "POST" && ((this.url.split("?")[1] || "") + "&").indexOf("&sid=") == -1 ? (this.url.indexOf("?") == -1 ? "?sid=" : "&sid=") + fQ : ""), this.async);
        
        if (fN == "POST") {
            mk.setRequestHeader("Content-Type", document.charset);
            mk.setRequestHeader("Content-length", this.content.length);
            mk.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }
        
        ae.E(this.headers, function(bt, bP){
            mk.setRequestHeader(bP, bt);
        });
        
        mk.onreadystatechange = function(){
            try {
                if (mk.readyState == 4) {
                    if (mk.status == 200) {
                        if (acE("ok")) {
                            bHj();
                        }
                    }
                    else {
                        acE(mk.status);
                    }
                }
            } 
            catch (bU) {
                acE(bU.message);
            }
        }
        
        
        
        bFz(this.timeout || 15000);
        
        try {
            if (fN == "POST") {
                mk.send(bQv || this.content);
            }
            else {
            
                mk.send(null);
            }
        } 
        catch (aR) {
            acE(aR.message);
        }
        
        return true;
    }
};













QMAjax.send = function(aJ, ah, brZ){
    var ae = getTop(), dD = brZ || new QMAjax, aP = ah || {};
    dD.url = aJ;
    
    ae.E("method,timeout,content,headers".split(","), function(bP){
        if (aP[bP]) {
            dD[bP] = aP[bP];
        }
    });
    
    dD.onComplete = function(hz){
        ae.callBack.call(hz, ah.onload, [true, ae.trim2(hz.responseText || ""), hz]);
        
    };
    
    dD.onError = function(hz, dC){
        ae.callBack.call(hz, ah.onload, [false, dC, hz]);
    };
    
    dD.send();
}

function includeAjax(al){


    var hY = [];
    hY.push(QMAjax.toString());
    hY.push(["var QMAjaxSend =", QMAjax.send.toString()].join(""));
    globalEval(hY.join(""), al);
    
}

var QMAjaxRequest = QMAjax;







function getErrMsg(hz, bNT){
    var auT = "_AjaxErrorHTML_";
    var Gz = S(auT);
    if (!Gz) {
        Gz = document.createElement("div");
        Gz.id = auT;
        Gz.style.display = "none";
        document.body.appendChild(Gz);
    }
    Gz.innerHTML = filteScript(hz.status == 200 ? hz.responseText : "");
    var adN = S(bNT);
    return adN && (adN.innerText || adN.textContent) || "";
}





function getHttpProcesser(){
    var ae = getTop(), aIB = ae.gCurHttpProcesserId || 0;
    
    ae.gCurHttpProcesserId = (aIB + 1) % 30;
    
    try {
        if (ae.gHttpProcesserContainer[aIB] != null) {
            delete ae.gHttpProcesserContainer[aIB];
        }
    } 
    catch (aR) {
        ae.gHttpProcesserContainer = {};
    }
    
    var bIO = ae.gHttpProcesserContainer[aIB] = new ae.Image;
    bIO.onload = function(){
        return false;
    };
    
    return bIO;
}







function goUrl(aYk, aJ, cOq){
    try {
        var HD = (aYk.contentWindow || aYk).location, cbK = HD.href.split("#"), bDo = aJ.split("#"), cEN = bDo[0] == cbK[0], aN = cEN ? bDo[0] : aJ;
        
        if (cOq) {
            HD.href = aN;
        }
        else {
            HD.replace(aN);
        }
    } 
    catch (aR) {
        aYk.src = aJ;
    }
}









function generateFlashCode(aL, aUx, Wl, bS){
    var bqe = [], aVW = [], aIJ = [], fi = bS || {}, aEI = T(' $name$=$value$ '), bHm = T('<param name="$name$" value="$value$" />'), cme = gbIsIE ? T(['<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ', '$codebase$ ', '$attr$ $id$ >', '$param$', '<embed $embed$ type="application/x-shockwave-flash" ', '$pluginspage$ ', ' $name$ ></embed>', '</object>']) : T(['<embed $embed$ type="application/x-shockwave-flash" ', '$pluginspage$ ', ' $name$ $id$ ></embed>']);
    
    function aHK(aC, ys){
        return {
            name: aC,
            value: ys
        };
    }
    
    fi.allowScriptAccess = "always";
    fi.quality = "high";
    
    for (var Ix in fi) {
        var cv = aHK(Ix, fi[Ix]);
        aVW.push(bHm.replace(cv));
        aIJ.push(aEI.replace(cv));
    }
    
    for (var Ix in Wl) {
        var cv = aHK(Ix, Wl[Ix]);
        bqe.push(aEI.replace(cv));
        aIJ.push(aEI.replace(cv));
    }
    
    if (aUx) {
        aVW.push(bHm.replace(aHK("movie", aUx)));
        aIJ.push(aEI.replace(aHK("src", aUx)));
    }
    
    return cme.replace({
        id: aL && [' id="', aL, '"'].join(""),
        name: aL && [' name="', aL, '"'].join(""),
        attr: bqe.join(""),
        param: aVW.join(""),
        embed: aIJ.join(""),
        codebase: location.protocol == "https:" ? '' : 'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" ',
        pluginspage: location.protocol == "https:" ? '' : 'pluginspage="http://www.adobe.com/cn/products/flashplayer" '
    });
}







function getFlash(aL, al){
    var au = al || window, fc = au[aL] || au.document[aL];
    return fc && (fc.length ? fc[fc.length - 1] : fc);
}

















function zoomFuncCreater(ah){














    return function(uB, po, cwU, cwY){
        var aVV = cwU || ah.limitWidth || 1, aWc = cwY || ah.limitHeight || 1, aPz = (uB / aVV) || 1, aQd = (po / aWc) || 1, sE = [aPz < 1 ? "w" : "W", aQd < 1 ? "h" : "H"].join(""), Cd = ah[sE] || ah.all, aw = {};
        
        switch (Cd) {
            case "stretch":
                aw.width = aVV;
                aw.height = aWc;
                break;
            case "zoomMaxMin":
            case "zoomMinMax":
                var buv = uB > po ? 0 : 1;
                Cd = ["zoomMax", "zoomMin"][Cd == "zoomMinMax" ? 1 - buv : buv];
            case "zoomMax":
            case "zoomMin":
                var MQ = Math[Cd == "zoomMax" ? "min" : "max"](aQd, aPz);
                aw.width = Math.round(uB / MQ);
                aw.height = Math.round(po / MQ);
                break;
            case "none":
            default:
                aw.width = uB;
                aw.height = po;
                break;
        }
        
        aw.left = Math.round((aVV - aw.width) / 2);
        aw.top = Math.round((aWc - aw.height) / 2);
        
        return aw;
    };
}










function scrollIntoMidView(cD, hO, cvf, cxn, cOE){
    if (!cD || !hO) {
        return false;
    }
    
    
    var bJX = hO.tagName.toUpperCase() == "BODY", aO = hO.ownerDocument, tk = aO.documentElement;
    if (bJX && tk.clientHeight) {
        hO = tk;
    }
    
    var Pr = calcPos(cD)[0] - calcPos(hO)[0] - (bJX ? hO.scrollTop : 0), ade = Pr, aHf = cD.offsetHeight, aFW = hO.clientHeight, aZf = cxn || 0;
    
    if (cvf || ade < 0 ||
    ade + aHf > aFW) {
        var aIl = 0, wE;
        
        if (aFW > aHf + aZf) {
            if (cOE) {
                aIl = ade < 0 ? 0 : (aFW - aHf - aZf);
            }
            else {
                aIl = (aFW - aHf - aZf) / 2
            }
        }
        
        wE = hO.scrollTop = hO.scrollTop + Pr - aIl;
        hO == tk && (aO.body.scrollTop = wE);
    }
    
    return true;
}





function Gel(aL, cD){
    return (cD || document).getElementById(aL);
}





function objectActive(cD){





}




















function inherit(aVw, nI, bhM, aYa, cuI){
    var bJY = callBack(bhM, [nI.prototype]), cyx = bJY.$_constructor_, amL = function(){
        if (arguments[0] != "__inherit__") {
            var bJw = callBack.call(this, cuI, arguments) || {};
            if (bJw.bReturn) {
                return bJw.vData;
            }
            else {
                if (!this.cxx) {
                    this.constructor = arguments.callee;
                    this.cxx = true;
                }
                nI.apply(this, arguments);
                callBack.call(this, cyx, arguments);
            }
        }
    };
    extend(amL.prototype = new nI("__inherit__"), bJY, {
        toString: function(){
            return "";
        }
    });
    return extend(amL, aYa, {
        name: aVw,
        superclass: nI
    });
}







function inheritEx(aVw, nI, bhM, aYa){
    var ayK = {}, amL = inherit(aVw, nI, bhM, aYa, function(){
        var aK = typeof(arguments[0]), czn = aK == "string" || aK == "undefined";
        
        return {
            bReturn: czn,
            vData: amL.$_call.apply(amL, arguments)
        };
    });
    return extend(amL, {
    
    
        $_call: function(aL, csU, aH){
            if (arguments.length == 0) {
                return ayK;
            }
            else {
                var fz = ayK[aL];
                return arguments.length > 1 && fz ? callBack.call(fz, fz[csU], aH) : fz;
            }
        },
        
        $_add: function(aL, aG){
            return ayK[aL] = aG;
        },
        
        get: function(aL){
            return ayK[aL];
        },
        
        $_del: function(aL){
            delete ayK[aL];
        }
    });
}

























function cacheByIframe(aYs, cV){
    var cP = cV || {}, au = cP.win || getTop(), bh = cP.id || unikey("_"), fA = [cP.attrs], mE = [];
    
    for (var i = 0, aQ = aYs && aYs.length || 0; i < aQ; i++) {
        for (var aJU = aYs[i], j = 2, cJZ = aJU.length; j < cJZ; j++) {
            mE.push(aJU[0], ":", aJU[1], aJU[j], "|");
        }
    }
    
    fA.push(' _file="', encodeURIComponent(mE.join("")), '"');
    fA.push(' _header="', encodeURIComponent(cP.header || ""), '"');
    fA.push(' _body="', encodeURIComponent(cP.body || ""), '"');
    
    createIframe(au, getBlankUrl(au), extend({}, cP, {
        id: bh,
        attrs: fA.join(""),
        onload: function(al){
            var Jy = this;
            callBack.call(Jy, cP.onload, [al]);
            
            (cP.destroy != false || Jy.getAttribute("destroy") == "true") &&
            au.setTimeout(function(){
                removeSelf(Jy);
            }, 100);
        }
    }));
}





function getBlankUrl(al){
    var jk = (al || getTop()).location, jV = "/zh_CN/htmledition/" + getFullResSuffix("domain.html");
    return [jV, "?", document.domain != jk.host ? encodeURIComponent(document.domain) : "", jk.href.indexOf(jV) != -1 ? "&r=" + Math.random() : ""].join("");
}








function clearCache(){












    arguments.length > 0 &&
    getTop().cacheByIframe(arguments, {
        destroy: false,
        onload: function(){
            if (!this.getAttribute("destroy")) {
                this.setAttribute("destroy", "true");
                this.contentWindow.location.reload(true);
            }
        }
    });
}








function preLoad(ao, cB, yB, bsw){
    if (window != getTop()) {
        getTop().preLoad.apply(this, arguments);
    }
    else {
        var ad = arguments.callee, aLq = ad.cOR = (ad.cOR || []);
        
        if (ao && yB) {
            for (var i = 0, aQ = yB.length; i < aQ; i++) {
                aLq.push([[ao, cB, yB[i]]]);
            }
        }
        
        if (!ad.bEu && aLq.length > 0) {
            ad.bEu = true;
            
            function arE(){
                ad.bEu = false;
                callBack(bsw, [aLq.shift()[0][2]]);
                setTimeout(function(){
                    ad("", "", "", bsw);
                }, 100);
            }
            
            cacheByIframe(aLq[0], {
                onload: arE
            });
        }
    }
}





function setDblClickNoSel(cD){
    if (cD) {
        var aSz = "__MoUSeDoWnnoSEL__";
        function getAtts(){
            return (cD.getAttribute(aSz) || "").toString().split(",");
        }
        function setAtts(hB, ao){
            cD.setAttribute(aSz, [hB, ao]);
        }
        if (getAtts().length == 1) {
        
            setAtts(0, "up");
            addEvents(cD, {
                mousedown: function(ag){
                    var hu = now(), MB = parseInt(getAtts()[0]);
                    setAtts(hu, "down");
                    
                    if (hu - MB < 500) {
                        preventDefault(ag);
                    }
                },
                
                mouseup: function(){
                    setAtts(getAtts()[0], "up");
                },
                selectstart: function(ag){
                    if (getAtts().pop() == "up") {
                        preventDefault(ag);
                    }
                }
            });
        }
    }
    
    return cD;
}





































var gsMsgNoSubject = "����д�ʼ�����", gsMsgNoMail = "δѡ���κ��ʼ�", gsMsgSend = "�ʼ����ڷ�����... ", gsMsgSave = "&nbsp;&nbsp;&nbsp;�ʼ����ڱ��浽�ݸ���...", gsMsgSaveOk = "�ʼ��ɹ����浽�ݸ���", gsMsgAutoSave = "&nbsp;&nbsp;&nbsp;�ʼ����ڱ��浽�ݸ���...", gsMsgAutoSaveOk = "�ʼ��Զ����浽�ݸ���", gsMsgSendErrorSaveOK = "�ż��ѱ����浽�ݸ���", gsMsgSaveErr = "�ʼ�δ�ܱ��浽�ݸ���", gsMsgNoSender = "����д�ռ��˺��ٷ���", gsMsgNoCardSender = "����д�ռ��˺��ٷ���", gsMsgNoCard = "��ѡ�кؿ����ٷ���", gsMsgSettingOk = "���ñ���ɹ�", gsMsgLinkErr = "����Ӧ��ʧ��", gsMsgCheatAlert = "ϵͳ�Ὣ���ʼ����뵽�������ʼ����У������ʼ������ύ���������Ա��\n\n��ȷ��Ҫ�ٱ����ʼ���", gsMsgSendTimeErr = "�����õķ���ʱ�䲻����", gsMsgMoveMailSameFldErr = "�����ƶ�����ͬ��Ŀ¼";








function doPageError(bo, aJ, fa){
    var bZ = arguments.callee.caller, cG = bZ && bZ.caller, fV = cG && cG.caller, fS = (bZ || "null").toString(), dF = (cG || "").toString(), dG = (fV || "").toString(), fP;
    
    try {
    
        if (bo.indexOf(" Script ") != -1) {
            return;
        }
        
        if (bo.indexOf("flashUploader") != -1) {
            var bIX = qmFlash.getFlashVer();
            for (var i in bIX) {
                bo += "|" + bIX[i];
            }
        }
        
        if (!(aJ && aJ.indexOf("/cgi-bin/mail_list?") != -1 && fa == 2) && location.getParams) {
            var fi = location.getParams(aJ);
            bsy = aJ.split("?")[0].split("/"), bwF = encodeURIComponent(fS.replace(/[\r\n\t ]/ig, "").substr(0, 50));
            if (bsy.length > 0) {
                fi.cgi = bsy.pop();
                getTop().ossLog("delay", "sample", ["stat=js_run_err&msg=", bo, "&line=", fa, "&url=", T('$cgi$?t=$t$&s=$s$').replace(fi), "&func=", bwF, (gbIsIE ? "" : "_NIE")].join(""));
            }
            else {
                fP = bwF;
            }
        }
        
        getTop().debug(["error:", bo, "<br><b>line</b>:", fa, "<br><b>url</b>:", aJ, "<br><b>function</b>:", fS.substr(0, 100), dF ? "<br><b>parent function</b>:" +
        dF.substr(0, 100) : "", dG ? "<br><b>parent parent function</b>:" +
        dG.substr(0, 100) : ""].join(""), "error");
    } 
    catch (aR) {
        fP = aR.message;
    }
    
    
    
    
    
    
    
    return location.host.indexOf("dev.") != 0;
}




var QMFileType = {};

QMFileType.data = {
    doc: "doc",
    docx: "doc",
    
    xls: "exl",
    xlsx: "exl",
    
    ppt: "ppt",
    pptx: "ppt",
    
    pdf: "pdf",
    
    txt: "txt",
    log: "txt",
    xml: "txt",
    js: "txt",
    css: "txt",
    php: "txt",
    asp: "txt",
    aspx: "txt",
    jsp: "txt",
    vbs: "txt",
    h: "txt",
    cpp: "txt",
    
    eml: "eml",
    
    rar: "rar",
    zip: "rar",
    "7z": "rar",
    arj: "rar",
    
    wav: "mov",
    mp3: "mov",
    wma: "mov",
    mid: "mov",
    rmi: "mov",
    ra: "mov",
    ram: "mov",
    
    mp1: "mov",
    mp2: "mov",
    mp4: "mov",
    rm: "mov",
    rmvb: "mov",
    avi: "mov",
    mov: "mov",
    qt: "mov",
    mpg: "mov",
    mpeg: "mov",
    mpeg4: "mov",
    dat: "mov",
    asf: "mov",
    wmv: "mov",
    "3gp": "mov",
    ac3: "mov",
    asf: "mov",
    divx: "mov",
    mkv: "mov",
    ogg: "mov",
    pmp: "mov",
    ts: "mov",
    vob: "mov",
    xvid: "mov",
    
    htm: "html",
    html: "html",
    mht: "html",
    
    swf: "swf",
    flv: "swf",
    
    bmp: "bmp",
    gif: "gif",
    jpg: "jpg",
    jpeg: "jpg",
    jpe: "jpg",
    psd: "psd",
    pdd: "psd",
    eps: "psd",
    
    tif: "tu",
    tiff: "tu",
    ico: "tu",
    png: "tu",
    pic: "tu",
    ai: "tu"
};






QMFileType.getFileType = function(akL){
    return this.data[(trim(akL || "")).toLowerCase()] || "qita";
};






QMFileType.getFileTypeForFile = function(gb){
    return this.getFileType((gb || "").split(".").pop());
};






var QMHistory = {
    avW: {},
    aqC: {}
};






QMHistory.getId = function(aL){
    return aL;
};






QMHistory.getUrl = function(aL){
    var bL = getTop().QMHistory.aqC[QMHistory.getId(aL)];
    return bL && bL.aN;
};





QMHistory.getLastRecordId = function(){
    return getTop().QMHistory.avW.cnZ;
};






QMHistory.tryBackTo = function(aL){
    try {
        var cv = getTop().QMHistory.avW, aKX = QMHistory.getId(aL), akg = getTop().QMHistory.aqC[aKX], brw = akg && akg.aN, bJR = akg &&
        akg.cIS >= getTop().history.length, bJS = akg && cv.chj == brw, bJU = akg && !cv.cES;
        
        function cCZ(){
            var aN = brw.split("#")[0];
            
            if (getTop().location.getParams &&
            getTop().location.getParams(aN)["folderid"] == 4) {
                return goUrlMainFrm(aN);
            }
            
            
            if (gbIsIE && gnIEVer == 6) {
                return getTop().history.go(aN);
            }
            getTop().history.back();
        };
        
        if ((gbIsIE && (bJR || bJS) && bJU) ||
        (!gbIsWebKit && bJR && bJS && bJU)) {
        
            cCZ();
            return true;
        }
    } 
    catch (aR) {
    
    }
    
    return false;
};





QMHistory.recordCurrentUrl = function(al){
    var aN = al.location.href, aeg = getTop().QMHistory.aqC, cv = getTop().QMHistory.avW;
    
    var chl = cv.chj = cv.cbz, vK = cv.cbz = aN;
    
    var ahH, aXH;
    
    
    for (var i in aeg) {
        if (aeg[i].aN == chl) {
            ahH = i;
        }
        if (aeg[i].aN == vK) {
            aXH = i;
        }
    }
    
    
    if (ahH && aXH) {
        delete aeg[ahH];
    }
    
    
    if (aN.indexOf("/mail_list") != -1) {
        this.bbe("mail_list", aN);
    }
    
    if (aN.indexOf("t=readmail") != -1) {
        this.bbe("readmail", aN);
    }
    
    if (aN.indexOf("/today") != -1) {
        this.bbe("today", aN);
    }
};





QMHistory.recordActionFrameChange = function(dC){
    getTop().QMHistory.avW.cES = dC != "clear";
};






QMHistory.bbe = function(aL, aJ){
    var ae = getTop(), aKX = QMHistory.getId(aL), aeg = ae.QMHistory.aqC, bL = aeg[aKX];
    
    if (!bL) {
        bL = aeg[aKX] = new ae.Object;
    }
    
    bL.cIS = history.length + 1;
    bL.aN = aJ;
    
    ae.QMHistory.avW.cnZ = aL;
};












function QMCache(ah){
    var MB = this.cud = ah.timeStamp || 1;
    var FC = this.aqi = ah.appName;
    
    if (!MB || !FC) {
        throw {
            message: "QMCache construct : config error!"
        };
    }
    
    var aEZ = getTop().QMCache.ajl;
    if (!aEZ) {
        aEZ = getTop().QMCache.ajl = {};
    }
    
    var Ni = aEZ[FC];
    if (!Ni) {
        Ni = aEZ[FC] = {
            bdn: "0",
            qd: {}
        };
    }
    
    if (this.bQP(Ni.bdn, MB) == 1) {
        Ni.bdn = MB;
    }
};





QMCache.prototype.isHistoryTimeStamp = function(){
    return this.bQP(getTop().QMCache.ajl[this.aqi].bdn, this.cud) !=
    0;
};






QMCache.prototype.setData = function(bP, bt){
    getTop().QMCache.ajl[this.aqi][bP] = bt;
};

QMCache.prototype.getAll = function(bP){
    return getTop().QMCache.ajl[this.aqi];
}






QMCache.prototype.getData = function(bP){
    return getTop().QMCache.ajl[this.aqi][bP];
};





QMCache.prototype.delData = function(bP){
    delete getTop().QMCache.ajl[this.aqi][bP];
};







QMCache.prototype.bQP = function(bAw, bAu){
    if (bAw == bAu) {
        return 0;
    }
    return bAw > bAu ? -1 : 1;
};








var QMMailCache = {
    aeM: now()
};







QMMailCache.newCache = function(MF, aZC){
    var acy = false, ae = getTop();
    
    if (!ae.gMailListStamp || ae.gMailListStamp < aZC) {
        ae.gMailListStamp = aZC;
        if (!ae.goMailListMap) {
            ae.goMailListMap = new ae.Object;
        }
        acy = true;
    }
    else 
        if (ae.gnExpireTimeStamp >= aZC) {
        
        
        
            reloadFrm(MF);
        }
    
    return MF["isNewQMMailCache" + this.aeM] = acy;
};




QMMailCache.setExpire = function(){
    getTop().gnExpireTimeStamp = getTop().gMailListStamp;
};













QMMailCache.addData = function(aS, bS){
    if (!aS || !getTop().goMailListMap) {
        return;
    }
    
    if (!this.hasData(aS)) {
        getTop().goMailListMap[aS] = {
            oTagIds: {},
            star: null,
            reply: null
        };
    }
    
    if (!bS) {
        return;
    }
    
    var fF = getTop().goMailListMap[aS];
    for (var i in bS) {
        switch (i) {
            case "removeTagId":
                fF.oTagIds[bS[i]] = 0;
                break;
            case "addTagId":
                fF.oTagIds[bS[i]] = 1;
                break;
            default:
                if (typeof bS[i] != "undefined") {
                    fF[i] = bS[i];
                }
                break;
        }
    }
};





QMMailCache.delData = function(aS){
    if (getTop().goMailListMap) {
        delete getTop().goMailListMap[aS];
    }
};






QMMailCache.hasData = function(aS){
    return getTop().goMailListMap && getTop().goMailListMap[aS] != null;
};






QMMailCache.getData = function(aS){
    return getTop().goMailListMap && getTop().goMailListMap[aS];
};







QMMailCache.addVar = function(aLF, cj){
    return getMainWin()[aLF] = this.getVar(aLF, 0) + cj;
};







QMMailCache.getVar = function(aLF, cxf){
    return getMainWin()[aLF] || cxf;
};






QMMailCache.isRefresh = function(MF){
    return MF["isNewQMMailCache" + this.aeM];
};









function rdVer(aoE, auu, aZv){

    var bis, ou, afZ, bgu, bL = new QMCache({
        appName: "readmail"
    });
    
    if (auu == -1) {
        return bL.delData(aoE);
    }
    
    bis = bL.getData("on");
    if (aoE == "on") {
        return auu == 0 ? (bis || 0) : (bL.setData("on", auu));
    }
    
    if (!bis || !aoE) {
        return 0;
    }
    
    bgu = aoE == "BaseVer";
    
    afZ = bL.getData("BaseVer");
    if (!afZ || (bgu && auu == 1)) {
    
        afZ = afZ || rdVer("on", 0);
        afZ += 10;
        bL.setData("BaseVer", afZ);
    }
    
    if (bgu) {
        return afZ;
    }
    
    ou = (bL.getData(aoE) || 0);
    var bCX = (!ou || auu == 1);
    
    if (bCX || aZv) {
        if (bCX) {
            ou += 10000;
        }
        if (aZv) {
            ou = Math.floor(ou / 10000) * 10000 + parseInt(aZv, 10) % 10000;
        }
        bL.setData(aoE, ou);
    }
    return ou;
}

rdVer.batch = function(ao){
    var bL = new QMCache({
        appName: "readmail"
    }), mG = new RegExp("^" + ao), fF = bL.getAll();
    
    E(fF, function(Ok, aS){
        if (mG.test(aS)) {
            rdVer(aS, 1);
        }
    });
}






rdVer.check = function(al, aS, Zz){
    if (al) {
        var jk = al.location, aS = aS || jk.getParams()["mailid"], Zz = Zz || jk.getParams()["ver"] || 0, bsi = rdVer(aS, 0);
        
        if (bsi > Zz) {
            goUrl(al, cookQueryString(jk.href, {
                ver: bsi
            }), true);
            return true;
        }
        else {
            return false;
        }
    }
}






rdVer.log = function(aS, apb){
    var aUS = new QMCache({
        appName: "preload"
    }), baJ = new Date().getTime(), jn = aUS.getData(aS), bah = jn && (baJ - jn) < rdVer.maxage(aS) * 1000;
    
    switch (apb) {
        case "pre":
            if (!bah) {
                aUS.setData(aS, baJ);
                ossLog("delay", "all", "stat=rdcache&type=281&locval=,rdcache,preload,1");
            }
            break;
        case "hit":
            if (bah) {
                ossLog("delay", "all", "stat=rdcache&type=291&locval=,rdcache,hit,1");
            }
            if (jn) {
                aUS.delData(aS);
            }
            break;
    }
    return bah;
}

rdVer.isPre = function(aVL){

    return !(aVL > 2 && aVL < 7 || aVL == 9);
}


rdVer.preRD = function(anY, Mq){
    var asy = function(){
        preLoad("html", "/cgi-bin/readmail?", anY, function(nx){
            rdVer.log(location.getParams(nx)["mailid"], "pre");
        });
    }
    if (anY && anY.length > 0) {
        Mq = Mq || 40;
        
        anY = anY.slice(0, rdVer("on", 0) > 1 ? 2 : 1);
        
        if (anY.length > 0) {
            if (Mq) {
                setTimeout(asy, Mq);
            }
            else {
                asy();
            }
        }
    }
}

rdVer.maxage = function(aS){
    if (!aS) {
        return 0;
    }
    return (aS[0] == "@" || aS[0] == "C" ? 10 : 60) * 60;
}










rdVer.url = function(aS, xl, cDn, ea, cvU, auC, bcB, bbf, bxb){
    var bDA = T('/cgi-bin/$cgi$?folderid=$folderid$$s$&t=$t$&mailid=$mailid$$cache$&sid=$sid$'), aAi, abI, Do, aN, OK = "readmail";
    
    if (bcB) {
        abI = "readmail&s=draft";
    }
    else 
        if (ea === 0) {
            abI = bbf == 100 ? "compose_card&s=draft" : "compose&s=draft";
        }
        else 
            if (xl == "9") {
                abI = "sms_list_v2";
                OK = "readtemplate";
            }
            else 
                if (xl == "11") {
                    OK = "bottle_panel";
                    abI = "bottle";
                }
                else {
                    switch (aS.charAt(0)) {
                        case 'C':
                            abI = "readmail_conversation";
                            break;
                        case '@':
                            abI = "readmail_group";
                            break;
                        default:
                            abI = "readmail";
                            break;
                    }
                    aAi = true;
                }
    
    if (cvU) {
        Do = ["&newwin=true", "&compose_new=compose"][ea ? 0 : 1];
    }
    else {
        Do = ["", "&s=from_unread_list", "&s=from_star_list"][auC != 1 && auC != 2 ? 0 : auC];
    }
    
    var ou = aAi ? rdVer(aS, 0, cDn) : 0;
    
    if (!ou && bxb) {
        return "";
    }
    
    aN = bDA.replace({
        cgi: OK,
        mailid: aS,
        folderid: xl,
        t: abI,
        s: Do,
        sid: getSid(),
        cache: ou ? T("&mode=pre&maxage=$maxage$&base=$base$&ver=$ver$").replace({
            maxage: rdVer.maxage(aS),
            base: rdVer("BaseVer", 0),
            ver: ou
        }) : ""
    });
    
    return bxb ? aN.split("?")[1] : aN;
}









function setGlobalVarValue(bP, eB, cvs){
    var ae = getTop();
    
    if (!ae.goDataBase) {
        ae.goDataBase = new ae.Object;
    }
    
    if (bP && !cvs) {
        ae.goDataBase[bP] = eB;
    }
    
    return eB;
}






function getGlobalVarValue(bP){
    return getTop().goDataBase && getTop().goDataBase[bP];
}






function hideWindowsElement(gV, al){
    al = al || getMainWin();
    if (!gbIsIE || gnIEVer > 6 || (al.gbIsHasHideElements || false) != (gV || false)) {
        return;
    }
    
    getTop().setGlobalVarValue("WINDOWS_ELEMENT_NOT_DISPLAY", gV ? "" : "true");
    
    al.gbIsHasHideElements = !gV;
    
    var dh = al.document.body;
    
    E(al.QMReadMail ? ["select", "object", "embed"] : ["select"], function(cqa){
        E(GelTags(cqa, dh), function(cD){
            if (gV) {
                cD.style.visibility = cD.getAttribute("savevisibility");
            }
            else {
                cD.setAttribute("savevisibility", getStyle(cD, "visibility"));
                cD.style.visibility = "hidden";
            }
        });
    });
}






function controlWindowsElement(){
    var ccF = getTop().getGlobalVarValue("WINDOWS_ELEMENT_NOT_DISPLAY");
    if (ccF == "true") {
        hideWindowsElement(false);
    }
}





function setKeepAlive(al){
    if (getTop().gKeepAliveNum == null) {
        getTop().gKeepAliveNum = 0;
    }
    
    if (al == null || al.gbIsSetKeepAlive == true) {
        return;
    }
    
    al.gbIsSetKeepAlive = true;
    getTop().gKeepAliveNum++;
    
    if (getTop().gKeepAliveTimer == null) {
    
        getTop().gKeepAliveTimer = getTop().setInterval(function(){
            getTop().runUrlWithSid("/cgi-bin/readtemplate?t=keep_alive");
        }, 15 * 60 * 1000);
    }
    addEvent(al, "unload", function(){
        al.gbIsSetKeepAlive = false;
        getTop().gKeepAliveNum--;
        if (getTop().gKeepAliveNum == 0) {
            getTop().clearInterval(getTop().gKeepAliveTimer);
            getTop().gKeepAliveTimer = null;
        }
    });
}







function encodeNick(DV){
    return DV && DV.replace(/\\/g, "\\\\").replace(/\"/ig, "\\\"").replace(/\'/ig, "\\\'") || "";
}






function decodeNick(DV){
    return DV && DV.replace(/\\\"/ig, "\"").replace(/\\\\/ig, "\\") || "";
}



var QMPageInit = {
    bib: function(cNP){
        return function(){
            try {
                var aYP = arguments.length, bfo = arguments[aYP - 1], bJM = bfo > 100000;
                if (typeof(bfo) == "number" &&
                (bJM && bfo != getTop().g_uin)) {
                    return;
                }
            } 
            catch (e) {
            
                return;
            }
            
            if (getTop().Console) {
                if (aYP == 0 || (aYP == 1 && bJM)) {
                    if (location.host == "dev.mail.qq.com") {
                        debugger;
                    }
                }
                else {
                    try {
                        var bql = getTop().Console[cNP];
                        bql.add.apply(bql, arguments);
                    } 
                    catch (aR) {
                    }
                }
            }
        }
    },
    
    ciw: function(al){
        return function(aC, aAB, dC, csG, cm){
            if (getTop().QMTimeTracer && (!cm || cm == getTop().g_uin)) {
                getTop().QMTimeTracer.getTracer().trace(aC, aAB, al, dC, csG);
            }
        }
    },
    
    csY: function(al){
        var HD = al.location;
        HD.bHZ = false;
        HD.params = {};
        HD.getParams = function(aJ){
            if (!aJ && this.bHZ) {
                return this.params;
            }
            
            var fi = {}, btX = aJ ? aJ.substr(aJ.indexOf("?") + 1).split("#")[0] : this.search.substr(1);
            
            if (btX) {
                E(btX.split("&"), function(mr){
                    var dq = mr.split("=");
                    fi[dq.shift()] = unescape(dq.join("="));
                });
            }
            
            if (!aJ) {
                this.params = fi;
                this.bHZ = true;
            }
            
            return fi;
        };
        
        var iN = HD.href, ae = getTop();
        
        if (al == ae &&
        getSid() &&
        iN.indexOf("/cgi-bin/") > -1 &&
        iN.indexOf("/frame_html?") == -1 &&
        iN.indexOf("/log") == -1 &&
        (iN.indexOf("/ftnExs_") == -1 || iN.indexOf("/ftnExs_files") > -1) &&
        !al.gbIsNoCheck &&
        HD.getParams()["nocheckframe"] != "true") {
            if (iN.indexOf("/cgi-bin/bizmail") == -1) {
            
                goNewWin(HD, true, !al.gbSupportNW);
            }
            else {
                goNewWin(HD, true, false, {
                    frametmpl: "dm_frame",
                    frametmplparam: "&dmtype=bizmail"
                });
            }
        }
        
        else 
            if (al != ae && ae.bnewwin && al == getMainWin()) {
                if (!al.gbSupportNW) {
                    goNewWin(HD, true, true);
                }
                else 
                    if (HD.getParams()["newwin"] != "true") {
                        al.location.replace(iN + "&newwin=true");
                    }
            }
    },
    
    ctl: function(ag, cOk){
        var gu = ag.srcElement || ag.target, cFA = ag.ctrlKey, dLN = ag.altKey, MC = ag.shiftKey, eA = ag.keyCode, axM = gu.type == "text" ||
        gu.tagName == "TEXTAREA", cFr = cOk &&
        (gu.tagName == "INPUT" && gu.type != "button"), cFF = gu.tagName == "BUTTON" || gu.type == "button";
        
        switch (eA) {
        
            case 8:
                
                if (!axM && goBackHistory()) {
                    preventDefault(ag);
                }
                break;
                
            case 13:
                
                
                if (!cFF && ((!axM && QMReadedItem.read(gu)) || cFr)) {
                    preventDefault(ag);
                }
                break;
                
            case 37:
                
            case 39:
                
                if (cFA) {
                    goPrevOrNextMail(eA == 39);
                    preventDefault(ag);
                }
                break;
                
            case 38:
                
            case 40:
                
            case 188:
                
            case 190:
                
                if (!axM) {
                    var asi = eA == 38 || eA == 188;
                    if (QMReadedItem.move(!asi)) {
                        preventDefault(ag);
                    }
                }
                break;
                
            case 46:
                
                
                if (!axM) {
                    var btk = S(MC ? "quick_completelydel" : "quick_del", getMainWin()), bto = MC ? S("quick_del", getMainWin()) : null, btt = S("del", getMainWin());
                    if (isShow(btk) || isShow(bto) || isShow(btt)) {
                        preventDefault(ag);
                        fireMouseEvent((btk || bto || btt), "click");
                    }
                }
                break;
                
            case 88:
                
                if (!axM && QMReadedItem.check(MC)) {
                    preventDefault(ag);
                }
                break;
        }
    },
    
    csu: function(al){
        al.Debug = al.debug = this.bib("debug");
        al.Log = al.log = this.bib("log");
        al.Watch = al.watch = this.bib("watch");
        al.Trace = al.trace = this.ciw(al);
        al.onerror = doPageError;
    },
    
    cta: function(al){
        if (al != getTop() && al == getMainWin()) {
        
            getTop().QMHistory.recordCurrentUrl(al);
            getTop().QMHistory.recordActionFrameChange("clear");
            
            
            addEvent(al, "unload", function(){
            
                showProcess(0);
                if (isshowMsg() && getTop().gMsgDispTime &&
                now() - getTop().gMsgDispTime > 2000) {
                    hiddenMsg();
                }
            });
            
            al.setTimeout(function(){
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
                if (!(getTop().QQPlusMail && getTop().QQPlusMail.getPageTitle())) {
                    al.document.title && (getTop().document.title = al.document.title);
                }
            }, 200);
        }
    },
    
    cqI: function(al){
    
        if (al == getTop() && al.location.href.indexOf("/frame_html") != -1) {
            var bEI = function(){
                var aN;
                if (getMainWin() != al && getUserCookie("reloadurl") != "noreload" &&
                !getMainWin().gbIsNoCheck) {
                    try {
                        var jk = getMainWin().location;
                        aN = jk.getParams()["sid"] &&
                        (jk.pathname + bvy(jk.search));
                    } 
                    catch (e) {
                    }
                }
                setUserCookie("reloadurl", aN || "", new Date(now() + 5 * 1000));
            };
            
            addEvents(al, {
                load: function(e){
                    var dh = getTop().document.body;
                    
                    function bCq(ag){
                        var gu = ag.srcElement || ag.target;
                        
                        for (var tj = 0; gu && tj < 3; gu = gu.parentNode, tj++) {
                            if (gu.tagName == "A") {
                                break;
                            }
                        }
                        
                        return gu || {};
                    };
                    
                    function cmI(ag){
                        if ((ag.target || ag.srcElement) == dh) {
                            preventDefault(ag);
                        }
                    }
                    
                    function bJT(ag){
                        var gu = bCq(ag);
                        if (gu.tagName == "A") {
                            if (gu.getAttribute("initlized") != "true") {
                                gu.setAttribute("initlized", "true");
                                
                                var bQc = gu.onclick;
                                gu.onclick = function(cwN){
                                    var bN = cwN || getTop().event, dK = parseInt(gu.getAttribute("md"));
                                    if (!isNaN(dK) && dK > 0) {
                                        getTop().clearTimeout(dK);
                                        gu.setAttribute("md", "0");
                                        
                                        var MC = bN.shiftKey, bGd = trim(gu.href).indexOf("http") ==
                                        0;
                                        
                                        function bLu(){
                                            if (bQc) {
                                                bQc.call(gu);
                                                preventDefault(bN);
                                            }
                                            
                                            if (bGd) {
                                                if (MC && gu.href.indexOf("java") != 0) {
                                                    open(gu.href);
                                                    preventDefault(bN);
                                                }
                                                else {
                                                    switch (gu.target) {
                                                        case "mainFrame":
                                                            var aN = gu.href;
                                                            goUrlMainFrm(aN + (aN.indexOf("?") != -1 ? "#stattime=" + now() : ""), false);
                                                            preventDefault(bN);
                                                            break;
                                                        case "_parent":
                                                        case "_self":
                                                            try {
                                                                al.location.href = gu.href;
                                                            } 
                                                            catch (Ci) {
                                                            }
                                                            preventDefault(bN);
                                                            break;
                                                        default:
                                                            break;
                                                    }
                                                }
                                            }
                                        };
                                        
                                        if (!MC &&
                                        gu.getAttribute("nocheck") != "true" &&
                                        (!bGd || gu.target != "_blank")) {
                                            preventDefault(bN);
                                            QMPageInit.aUA(bLu);
                                        }
                                        else {
                                            bLu();
                                        }
                                    }
                                };
                            }
                            
                            gu.setAttribute("md", getTop().setTimeout(function(){
                                gu.setAttribute("md", "0");
                            }, 1000));
                        }
                        
                    }
                    
                    function arU(ag){
                        var gu = bCq(ag);
                        if (gu.tagName == "A" &&
                        gu.getAttribute("initlized") != "true") {
                            preventDefault(ag);
                        }
                    }
                    
                    addEvents(dh, {
                        mousewheel: cmI,
                        mousedown: bJT,
                        keydown: bJT,
                        click: arU
                    });
                },
                beforeunload: bEI,
                unload: bEI
            });
        }
    },
    
    cAg: function(al, ag){
        var Xp, bwk = ["u", "1", "2", "3"], ay = getEventTarget(ag), bRm = function(ak){
            if (ak && ak.getAttribute) {
                var Kk = ak.getAttribute("t");
                for (var i in bwk) {
                    if (bwk[i] == Kk) {
                        return Kk;
                    }
                }
            }
        };
        
        Xp = bRm(ay);
        
        while (ay && ay != al.document.body && Xp) {
            if (Xp == "u") {
                ay = ay.parentNode;
                Xp = bRm(ay) || Xp;
            }
            else {
                return ay;
            }
        }
        return null;
    },
    
    bJs: function(ao, al, ag){
        var ay = this.cAg(al, ag);
        if (ay) {
            var Xp = ay.getAttribute("t");
            switch (Xp) {
                case "1":
                case "2":
                case "3":
                    waitFor(function(){
                        return getTop().QMProfileTips;
                    }, function(oY){
                        if (oY) {
                            getTop().QMProfileTips.doMouseEvent(ao, al, ay);
                        }
                    });
                    break;
            }
        }
    },
    
    ctk: function(al){
        var ad = this;
        al.setTimeout(function(){
            var cFB = (al.location.getParams &&
            al.location.getParams()["t"] ||
            "").indexOf("compose") ==
            0;
            
            addEvents(al.document, {
                mousedown: hideMenuEvent,
                touchend: getTop().iPadCloseMenu ||
                function(){
                },
                keydown: function(ag){
                    hideMenuEvent(ag);
                    ad.ctl(ag, cFB);
                },
                click: function(ag){
                    hideEditorMenu();
                    getTop().QQPlusMail && getTop().QQPlusMail.hasRead();
                },
                mouseover: function(ag){
                    ad.bJs("over", al, ag);
                },
                mouseout: function(ag){
                    ad.bJs("out", al, ag);
                }
            });
        }, 100);
    },
    
    amN: function(al){
        al = al || window;
        
        if (al.gIsInitPageEventProcess) {
            return;
        }
        
        al.gIsInitPageEventProcess = true;
        
        var ov = 0;
        try {
            ov = 1;
            this.csu(al);
            
            ov = 2;
            this.csY(al);
            
            ov = 3;
            this.cta(al);
            
            ov = 4;
            this.cqI(al);
            
            ov = 5;
            this.ctk(al);
        } 
        catch (aR) {
            doPageError(aR.message, al.location.href, "initPageEvent_processid:" + ov);
        }
        
        try {
        
            al.document.execCommand("BackgroundImageCache", false, true);
        } 
        catch (aR) {
        }
    },
    
    aUA: function(arm){
        try {
            if (getMainWin().exitConfirm) {
                return getMainWin().exitConfirm(arm);
            }
        } 
        catch (aR) {
            debug(aR.message);
        }
        
        
        arm();
    }
}





function initPageEvent(al){
    QMPageInit.amN(al);
}

(function(){
    initPageEvent(window);
})();






function getTopWin(){
    return getTop();
}





function getMainWin(){
    return F("mainFrame", getTop()) || getTop();
}





function getActionWin(){
    return F("actionFrame", getTopWin());
}





function getLeftWin(){
    return getTop();
}

var GetLeftWin = getLeftWin;





function getLeftDateWin(){
    return F("leftFrame", getTop());
}





function getSignatureWin(){
    return F("signatureFrame", getTop());
}






function reloadFrm(al){
    if (al && al != getTop()) {
        try {
            if (al.location.search) {
                al.location.replace(al.location.href.split("#")[0]);
                return true;
            }
        } 
        catch (aR) {
        }
    }
    return false;
}




function reloadLeftWin(){
    var LU;
    if (!reloadFrm(getLeftDateWin()) && (LU = S("leftFrame", getTop()))) {
        LU.src = T('/cgi-bin/folderlist?sid=$sid$&r=$rand$').replace({
            sid: getSid(),
            rand: Math.random()
        });
    }
}








function reloadAllFrm(dwb, dwa, aLO, aLR){
    function XO(cDb){
        var bKN = arguments.callee;
        getTop().setTimeout(cDb, bKN.nJ);
        bKN.nJ += 200;
    }
    XO.nJ = 0;
    
    if (aLR == null || aLR) {
        XO(function(){
            reloadFrm(getMainWin());
        });
    }
    
    if (aLO == null || aLO) {
        XO(function(){
            reloadFrm(reloadLeftWin());
        });
    }
}






function reloadFrmLeftMain(aLO, aLR){
    reloadAllFrm(false, false, aLO, aLR);
}




function bpA(){
    setUserCookie("reloadurl", "noreload", new Date(now() + 5 * 1000));
}





function goUrlTopWin(aJ, cOp){
    bpA();
    goUrl(getTop(), aJ, !cOp);
}







function goUrlMainFrm(aJ, cOl, bpw){
    if (cOl != false) {
        reloadLeftWin();
        setTimeout(function(){
            goUrl(S("mainFrame", getTop()) || getTop(), aJ, !bpw);
        }, 300);
    }
    else {
        goUrl(S("mainFrame", getTop()) || getTop(), aJ, !bpw);
    }
}

function bvy(aBm){
    return aBm && aBm.substr &&
    ("?" +
    (["&", aBm.substr(1), "&"].join("").replace(/&sid=.*?&/ig, "&").replace(/&loc=.*?&/ig, "&").replace(/&newwin=true/ig, "&").slice(1, -1)));
}








function goNewWin(alr, cvu, cLX, aLp){
    var axf = "", ZO = "", GK = "";
    
    if (typeof(alr) == "object") {
        axf = alr.pathname;
        ZO = alr.search;
    }
    else {
        var AJ = alr.indexOf("?");
        axf = alr.substring(0, AJ);
        ZO = alr.substr(AJ);
    }
    
    if (aLp) {
        sTmpl = aLp.frametmpl;
    }
    else {
        sTmpl = cLX ? "frame_html" : "newwin_frame";
    }
    
    var bps = '';
    if (axf.indexOf('reader_') > -1) {
        bps = getTop().location.protocol + "//mail.qq.com";
    }
    
    var aN = T(bps + '/cgi-bin/frame_html?t=$t$&sid=$sid$&url=$url$').replace({
        t: sTmpl,
        sid: getSid(),
        url: encodeURIComponent(axf + bvy(ZO))
    });
    
    if (aLp) {
        sUrl += aLp.frametmplparam;
    }
    
    if (cvu) {
        goUrlTopWin(aN, true);
    }
    else {
        bpA();
        window.open(aN);
    }
}






function isMaximizeMainFrame(){
    return getTop().maximizeMainFrame.cEk;
}







function maximizeMainFrame(aJC){
    var aZg = S("mainFrame", getTop()), aGD = S("leftPanel", getTop()), aHT = S("imgLine", getTop());
    
    if (!aZg || !aHT || !aGD ||
    aJC != 2 && (aJC == 0) == !isMaximizeMainFrame()) {
        return false;
    }
    
    var asg = getTop().maximizeMainFrame, ZK = asg.cEk = aJC == 2 ? !isMaximizeMainFrame() : (aJC ? true : false);
    
    if (ZK) {
        asg.ceF = aGD.style.width;
        asg.cie = aHT.parentNode.style.cssText;
    }
    
    aZg.parentNode.style.marginLeft = ZK ? "5px" : asg.ceF;
    aGD.parentNode.style.cssText = ZK ? "border-left:none;" : "";
    aHT.parentNode.style.cssText = (ZK ? "border-left:none;margin-left:0;padding:0;" : "") + asg.cie;
    
    show(aGD, !ZK);
    show(aHT, !ZK);
    show(S("qqplus_panel", getTop()), !ZK);
    show(S("folder", getTop()), !ZK);
}







function filteSignatureTag(bQ, dC){
    var iC = typeof bQ == "string" ? bQ : "";
    
    if (dC == "2LOWCASE") {
        return iC.replace(/<sign(.*?)\/>/ig, "<sign$1>").replace(/<qzone(.*?)\/>/ig, "<qzone$1>").replace(/<taotao(.*?)\/>/ig, "<taotao$1>").replace(/<\/sign>/ig, "</sign>").replace(/<\/qzone>/ig, "</qzone>").replace(/<\/taotao>/ig, "</taotao>").replace(/<(\/?)includetail>/ig, "<$1tincludetail>");
    }
    if (dC == "FILTE<:") {
        return iC.replace(/<:sign.*?>/ig, "").replace(/<:qzone.*?>/ig, "").replace(/<:taotao.*?>/ig, "").replace(/<:includetail.*?>/ig, "");
    }
    else {
        return iC.replace(/<\/?sign.*?>/ig, "").replace(/<\/?qzone.*?>/ig, "").replace(/<\/?taotao.*?>/ig, "").replace(/<\/?includetail.*?>/ig, "");
    }
}





function getSignatureHeader(){
    return T(['<div style="color:#909090;font-family:Arial Narrow;font-size:12px">', '------------------', '</div>']);
}




function checkSignatureFrame(){
    if (getTop().gLoadSignTimeout) {
        getTop().clearTimeout(getTop().gLoadSignTimeout);
        getTop().gLoadSignTimeout = null;
    }
    
    if (getSignatureWin()) {
        getTop().gSignStatus = "finish";
        
        var aHM = true;
        try {
            if (!getSignatureWin().getRealUserSignature) {
                aHM = false;
            }
        } 
        catch (aR) {
            aHM = false;
        }
        
        
        if (!aHM && getTop().reloadSignTimeout == null) {
            getTop().gReloadSignTimeout = getTop().setTimeout("getTop().reloadSignature( true );", 5000);
        }
        else 
            if (aHM) {
            
            
                bindAccount();
            }
    }
}




function loadSignature(){
    try {
        if (!S("signatureFrame", getTop()) ||
        S("signatureFrame", getTop()).src.indexOf("getcomposedata") == -1) {
            reloadSignature();
        }
    } 
    catch (aR) {
        return;
    }
    
    if (getTop().gSignStatus != "finish") {
        throw {
            message: "get sign error..."
        };
    }
}





function reloadSignature(apT){
    if (window != getTop()) {
        return getTop().reloadSignature(apT);
    }
    
    if (apT) {
        if (getTop().gnReloadSignatureErrorTime == null) {
            getTop().gnReloadSignatureErrorTime = 0;
        }
        
        if (getTop().gnReloadSignatureErrorTime > 4) {
            return;
        }
        
        getTop().gnReloadSignatureErrorTime++;
    }
    
    if (getTop().gReloadSignTimeout) {
        getTop().clearTimeout(getTop().gReloadSignTimeout);
        getTop().gReloadSignTimeout = null;
    }
    
    getTop().gSignStatus = "load";
    
    removeSelf(S("signatureFrame", getTop()));
    
    var aN = T(["/cgi-bin/getcomposedata?t=signature&fun=compose&sid=$sid$&qzonesign=$qzonesign$&r=$rand$"]).replace({
        sid: getSid(),
        qzonesign: "",
        rand: now()
    });
    createIframe(getTop(), aN, {
        id: "signatureFrame",
        onload: function(al){
            getTop().checkSignatureFrame();
        }
    });
    
    if (getTop().gLoadSignTimeout) {
        getTop().clearTimeout(getTop().gLoadSignTimeout);
        getTop().gLoadSignTimeout = null;
    }
    
    getTop().gLoadSignTimeout = getTop().setTimeout("getTop().checkSignatureFrame();", 10000);
}







function getSignature(hw, cCV){
    try {
        return getSignatureWin().getRealUserSignature(hw, cCV);
    } 
    catch (aR) {
        loadSignature();
        return "";
    }
}







function getDetaultStationery(ao){
    try {
        return ao == "Header" ? getSignatureWin().getRealUserDefaultStationeryHeader() : getSignatureWin().getRealUserDefaultStationeryBottom();
    } 
    catch (aR) {
        loadSignature();
        return "";
    }
}





function getDefaultEditor(){
    try {
        return getSignatureWin().getRealDefaultEditor();
    } 
    catch (aR) {
        loadSignature();
        return 0;
    }
}





function getUserNick(){
    try {
        return getSignatureWin().getRealUserNick();
    } 
    catch (aR) {
        loadSignature();
        return "";
    }
}





function getDefaultSaveSendbox(){
    try {
        return getSignatureWin().getRealDefaultSaveSendbox();
    } 
    catch (aR) {
        loadSignature();
        return 0;
    }
}





function getUserAlias(){
    try {
        return getSignatureWin().getRealUserAlias();
    } 
    catch (aR) {
        loadSignature();
        return "";
    }
}





function getDefalutAllMail(){
    try {
        return getSignatureWin().getRealDefaultAllMail();
    } 
    catch (aR) {
        loadSignature();
        return [];
    }
}





function getOpenSpellCheck(){
    try {
        return getSignatureWin().getRealOpenSpellCheck();
    } 
    catch (aR) {
    
        return 0;
    }
}






function getDefaultSender(){
    try {
        return getSignatureWin().getRealDefaulSender();
    } 
    catch (aR) {
        loadSignature();
        return "";
    }
}






function setDefaultSender(vN){

    getTop().setGlobalVarValue("DEF_MAIL_FROM", vN);
    
}





function getAllSignature(){
    try {
        return getSignatureWin().getRealAllSignature();
    } 
    catch (aR) {
        loadSignature();
        return {};
    }
}





function getUserSignatureId(){
    try {
        return getSignatureWin().getRealUserSignatureId();
    } 
    catch (aR) {
        loadSignature();
        return "";
    }
}





function getIsQQClub(){
    try {
        return getSignatureWin().getRealIsQQClub();
    } 
    catch (aR) {
        loadSignature();
        return false;
    }
}





function getBindAccount(){
    try {
        return getSignatureWin().getRealBindAccount();
    } 
    catch (aR) {
        loadSignature();
        return null;
    }
}






function getUserInfoText(ao){
    var fc = S("user" + ao, getTopWin()) || {};
    return fixNonBreakSpace(fc.innerText || fc.textContent);
}






function getUserInfo(ao){
    return (S("user" + ao, getTopWin()) || {}).innerHTML || "";
}







function setUserInfo(ao, bt){
    try {
        S("user" + ao, getTopWin()).innerHTML = htmlEncode(bt);
        return true;
    } 
    catch (aR) {
        return false;
    }
}










function msgBox(bo, agT, aLI, OZ, bNN, al){
    if (window != getTop()) {
        return getTop().msgBox(bo, agT, aLI, OZ, bNN, al);
    }
    
    var cb = bo;
    
    if (!cb) {
        var akx = S("msg_txt", al || window) ||
        S("msg_txt", getActionWin());
        
        if (akx && (akx.innerText || akx.textContent) &&
        akx.getAttribute("ok") != "true") {
            cb = filteScript(akx.innerHTML);
            akx.setAttribute("ok", "true");
        }
    }
    
    if (!cb || !(cb = trim(cb.replace(/[\r\n]/ig, "")))) {
        return;
    }
    
    hiddenMsg();
    
    if (agT == "dialog") {
        alertBox({
            msg: cb,
            title: bNN || "ȷ��"
        });
    }
    else {
        setClass(arguments.callee.createMessageBox().firstChild, agT == "success" ? "msg" : "errmsg").innerHTML = cb;
        
        showMsg();
        
        if (aLI) {
            getTop().gMsgBoxTimer = getTop().setInterval(getTop().hiddenMsg, OZ || 5000);
        }
        
        getTop().gMsgDispTime = now();
    }
};




msgBox.createMessageBox = function(PL){
    var azU = S("msgBoxDIV", getTop());
    if (!azU) {
    
        var cH = typeof PL == "undefined" ? (getTop().bnewwin ? 0 : 43) : PL;
        insertHTML(getTop().document.body, "afterBegin", T(['<div id="msgBoxDIV" style="position:absolute;width:100%;', 'padding-top:2px;height:24px;*height:24px;_height:20px;top:$top$px;text-align:center;">', '<span></span>', '</div>']).replace({
            top: cH
        }));
        azU = S("msgBoxDIV", getTop());
    }
    return azU;
};





function isshowMsg(){
    return getTop().isShow("msgBoxDIV");
}




function hiddenMsg(){
    if (getTop().gMsgBoxTimer) {
        getTop().clearInterval(getTop().gMsgBoxTimer);
        getTop().gMsgBoxTimer = null;
    }
    getTop().show("msgBoxDIV", false);
    getTop().showProcess(0);
}




function showMsg(){
    getTop().show("msgBoxDIV", true);
}






function showError(iF, OZ){
    msgBox(iF, "", OZ != -1, OZ || 5000);
}






function showInfo(csr, OZ){
    msgBox(csr, "success", OZ != -1, OZ || 5000);
}











function showProcess(CH, cvl, baP, bPH, cLW){
    var bh = "load_process", bqO = arguments.callee.cAS(bh);
    
    if (CH == 0) {
        return show(bqO, false);
    }
    
    hiddenMsg();
    show(bqO, true);
    
    var ajX = CH == 2;
    
    if (ajX) {
        if (bPH) {
            S(bh + "_plan_info", getTop()).innerHTML = bPH + ":";
        }
        
        var hZ = parseInt(baP);
        
        if (isNaN(hZ)) {
            hZ = 0;
        }
        else {
            hZ = Math.max(0, Math.min(100, hZ));
        }
        
        S(bh + "_plan_rate", getTop()).innerHTML = S(bh + "_plan_bar", getTop()).style.width = [hZ, "%"].join("");
    }
    else {
        if (baP) {
            S(bh + "_info", getTop()).innerHTML = baP;
        }
    }
    
    show(S(bh + "_plan", getTop()), ajX);
    show(S(bh + "_img", getTop()), ajX ? false : cvl);
    show(S(bh + "_plan_info", getTop()), ajX);
    show(S(bh + "_plan_rate", getTop()), ajX);
    show(S(bh + "_info", getTop()), !ajX);
    show(S(bh + "_cancel", getTop()), cLW != false);
}






showProcess.cAS = function(aL){
    var bhB = S(aL, getTop());
    if (!bhB) {
        insertHTML(getTop().document.body, "afterBegin", T(['<table id="$id$" cellspacing=0 cellpadding=0 border=0 ', 'style="position:absolute;top:$top$px;left:0;width:100%;display:none;z-index:9999;">', '<tr><td align="center">', '<table cellspacing=0 cellpadding=0 border=0 class="autosave autosave_txt" style="height:20px;"><tr>', '<td style="width:2px;"></td>', '<td id="$id$_img" style="padding:0 0 0 5px;">', '<img src="$image_path$ico_loading.gif" style="width:16px;height:16px;vertical-align:middle;">', '</td>', '<td id="$id$_plan" valign=center style="padding:0 0 0 5px;">', '<div style="font:1px;border:1px solid white;width:104px;text-align:left;">', '<div id="$id$_plan_bar" style="font:1px;background:#fff;height:8px;margin:1px 0;width:50%;"></div>', '</div>', '</td>', '<td id="$id$_plan_info" style="padding:0 0 0 5px;"></td>', '<td id="$id$_plan_rate" style="width:40px;text-align:right;padding:0;"></td>', '<td id="$id$_info" style="padding:0 0 0 5px;"></td>', '<td id="$id$_cancel" style="padding:0 0 0 5px;">', '[<a onclick="getTop().cancelDoSend();" nocheck="true" style="color:white;">ȡ��</a>]', '</td>', '<td style="padding:0 0 0 5px;"></td>', '<td style="width:2px;"></td>', '</tr></table>', '</td></tr>', '</table>']).replace({
            id: aL,
            top: getTop().bnewwin ? 0 : 45,
            image_path: getPath("image", true)
        }));
        bhB = S(aL, getTop());
    }
    return bhB;
};





function getProcessInfo(){
    var bh = "load_process", kV = getTop();
    
    if (isShow(S(bh, kV))) {
        var bNm = S(bh + "_plan_rate", kV), aUD = S(bh + "_info", kV);
        
        if (aUD && isShow(aUD)) {
            return aUD.innerHTML;
        }
        
        if (bNm && isShow(S(bh + "_plan", kV))) {
            return parseInt(bNm.innerHTML);
        }
    }
    return "";
}






function replaceCss(al, Hp){
    replaceCssFile("skin", [getPath("style"), getFullResSuffix(["skin", typeof Hp == "undefined" ? getPath("skin") : Hp, ".css"].join(""))].join(""), (al || window).document);
}






function bIo(Hp, aLG){
    var ae = getTop();
    
    return !aLG && ae.gLogoUrl ? ae.gLogoUrl.replace(/(.*)_[^_]+_([^_]+)/, "$1_" + Hp + "_$2") : TE(['$images_path$logo', '$@$if($bFoxmail$)$@$', '_foxmail', '$@$else$@$', '$sSubfolder$', '$@$endif$@$', '/logo_$nSkinId$_', '$@$if($bFoxmail$)$@$', '0', '$@$else$@$', '$sLogoid$', '$@$endif$@$.gif']).replace({
        images_path: getPath("image"),
        bFoxmail: aLG,
        sSubfolder: ae.gsLogoFolder,
        nSkinId: Hp,
        sLogoid: (ae.gsLogoFolder || Hp == 0) ? (ae.gLogoId || 0) : 0
    });
}








function doRealChangeStyle(cqY, Hp, aLG, DC, cLE){
    var ae = getTop(), ZN = ae.gTempSkinId = Hp, fh = getMainWin(), bhf = [ae, fh], cFz = cLE || false, aGn = S("imglogo", ae);
    
    if (aGn) {
        if (typeof DC == "undefined" || DC == "") {
            if (Hp < 10000000) {
                aGn.src = bIo(ZN, aLG);
                
                
                
                
                
                
                
                
                
                
                
            }
        }
        else {
            aGn.src = DC;
        }
        aGn.className = cFz ? "domainmaillogo" : "";
    }
    
    
    
    
    
    
    
    E(ae.goDialogList, function(oU, oX){
        bhf.push(F(oX, getTop()));
    });
    
    E(GelTags("iframe", fh.document), function(oU){
        bhf.push(oU.contentWindow);
    });
    
    E(bhf, function(al){
        replaceCss(al, ZN);
    });
    
    removeSelf(cqY);
    
    setTimeout(resizeFolderList);
    
    rdVer("BaseVer", 1);
}






function changeStyle(Hp, DC){
    var azA = false, aKw = false;
    try {
        azA = getDefaultSender().indexOf("foxmail.com") > 0;
    } 
    catch (aR) {
    }
    
    
    var aHO = getTop().getGlobalVarValue("DOMAIN_MAIL_LOGO_URL") || {}, afn = getGlobalVarValue("DEF_MAIL_FROM") || '';
    if (DC) {
        aKw = DC.indexOf("/cgi-bin/viewfile") >= 0;
        if (aKw) {
            aHO[afn] = DC;
            afn && setGlobalVarValue("DOMAIN_MAIL_LOGO_URL", aHO);
        }
    }
    else 
        if (afn && aHO[afn]) {
        
            DC = aHO[afn];
            aKw = DC && DC.indexOf("/cgi-bin/viewfile") >= 0;
        }
    
    var ZN = typeof Hp == "undefined" || Hp == "" ? getTop().skin_path : Hp, 
	cpV = getTop().gsLogoFolder, civ = azA ? 0 : (cpV || ZN == 0 ? (getTop().gLogoId || 0) : 0), 
	ckD = azA ? "_foxmail" : "", 
	bKF = getTop().changeStyle, 
	cbZ = bKF.bia, 
	bia = bKF.bia = ["skinCssCache", ZN, ckD, DC || civ].join("_");
    
    if (bia != cbZ) {
        cacheByIframe([["css", getPath("style"), "skin" + ZN + ".css"], !!DC ? ["img", "", DC] : ["img", bIo(ZN, azA)]], {
            onload: function(){
                doRealChangeStyle(this, ZN, azA, DC, aKw);
            }
        });
    }
}











function recodeComposeStatus(cqF, aS, ctS, cEh){
    var jn = 0, bfP = getTop().gSendTimeStart;
    
    if (!bfP || !bfP.valueOf) {
        if (!cEh) {
            return;
        }
    }
    else {
        jn = now() - bfP.valueOf();
        getTop().gSendTimeStart = null;
    }
    
    getTop().ossLog("delay", "all", T(['stat=compose_send', '&t=$time$&actionId=$actionId$&mailid=$mailid$', '&isActivex=$isActivex$&failCode=$failCode$']).replace({
        time: jn,
        actionId: cqF,
        mailId: aS,
        failCode: ctS
    }));
    
    
    getTop().isUseActiveXCompose = false;
}




function errorProcess(aLg){

    if (typeof getMainWin().ErrorCallBack == "function") {
        getMainWin().ErrorCallBack(aLg);
        
    }
    else 
        if (typeof getTop().ErrorCallBack == "function") {
            getTop().ErrorCallBack(aLg);
        }
}







function doPostFinishCheck(aL, al, cuR){
    if (aL) {
        var awK = "", arH = false, LU = S(aL, al), aRf = F(aL, al);
        try {
            if (!LU ||
            LU.getAttribute("deleted") == "true") {
                return;
            }
            
            var dh = aRf.document.body, arH = !dh.className && !dh.style.cssText;
            
            if (arH) {
                var afW = aRf.document.documentElement;
                awK = (afW.textContent ||
                afW.innerText ||
                "").substr(0, 30);
            }
        } 
        catch (aR) {
            debug("doPostFinishCheck exception");
            debug(aR, 2);
            arH = aR.message || "exception";
        }
        
        QMHistory.recordActionFrameChange();
        
        if (arH) {
            callBack.call(LU, cuR, [awK]);
            
            if (arH != true) {
                removeSelf(LU);
                createBlankIframe(al, {
                    id: aL,
                    onload: LU.aPQ
                });
            }
            
            errorProcess();
        }
    }
}




function actionFinishCheck(){
    doPostFinishCheck("actionFrame", getTop(), function(responseContent){
        showError(gsMsgLinkErr);
    });
}




function doSendFinishCheck(){
    doPostFinishCheck("sendmailFrame", getTop(), function(bEy){
        recodeComposeStatus(2, null, bEy || 0);
        msgBox(T(['��������ԭ���ʼ�����ʧ�ܣ�', '[<a href="/cgi-bin/switch2service?sid=$sid$&errcode=-1&time=$time$&cginame=sendmail&t=error_report">���ʹ��󱨸�</a>]']).replace({
            time: formatDate(new Date(), "$YY$$MM$$DD$$hh$$mm$$ss$")
        }), "dialog", true, 0, "ʧ����Ϣ");
    });
}






function submitToActionFrm(kc){
    try {
        kc.submit();
        return true;
    } 
    catch (aR) {
        showError(kc.message);
        return false;
    }
}









function afterAutoSave(DG, aS, bo, bvd){

    var ov = 0, rI, awh;
    
    try {
        var fh = getTop().getMainWin();
        
        function atb(){
            if (disableAll) {
                disableAll(false);
            }
        }
        
        ov = 1;
        
        if (aS == "" || !aS) {
            return atb();
        }
        
        ov = 2;
        
        if (!fh || !S("fmailid", fh)) {
            return atb();
        }
        
        ov = 3;
        awh = S("fmailid", fh).value;
        
        if (awh != aS) {
            S("fmailid", fh).value = aS;
            getTop().setTimeout(function(){
                reloadLeftWin()
            }, 0);
        }
        
        ov = 4;
        
        var mE = DG.split(" |"), RV = [], aRW = fh.QMAttach.getExistList();
        
        for (var i = 0, aQ = aRW.length; i < aQ; i++) {
            var agI = S("Uploader" + aRW[i], fh);
            if (agI && !agI.disabled && agI.value != "") {
                RV.push(agI);
            }
        }
        
        ov = 5;
        
        var bAf = RV.length;
        for (var i = 0, aQ = mE.length - 1; i < aQ; i++) {
            var KR = false;
            for (var j = 0; j <= i && j < bAf; j++) {
                if (!RV[j].disabled &&
                RV[j].value.indexOf(mE[i]) != -1) {
                    RV[j].disabled = true;
                    KR = true;
                    try {
                        if (gbIsIE || gbIsWebKit) {
                            RV[j].parentNode.childNodes[1].innerText = mE[i];
                        }
                    } 
                    catch (aR) {
                    }
                }
            }
            if (!KR) {
                var aX = mE[i] + " |", dM = DG.indexOf(aX);
                
                if (dM != -1) {
                    DG = DG.substr(0, dM) +
                    DG.substr(dM + aX.length, DG.length - dM - aX.length);
                }
            }
        }
        
        ov = 6;
        
        fh.loadValue();
        
        ov = 7;
        
        if (DG && S("fattachlist", fh)) {
            S("fattachlist", fh).value += DG;
        }
        
        ov = 8;
        
        
        
        
        
        
        
        ov = 9;
        
        showInfo(bo ||
        (formatDate(new Date, "$hh$:$mm$") + " " + getTop().gsMsgSendErrorSaveOK));
        
        ov = 10;
        var dV = getTop().QMDialog("composeExitAlert");
        var yT = dV && dV.S("btn_exit_notsave");
        if (yT && yT.isShow()) {
            return fireMouseEvent(yT, "click");
        }
        
        ov = 11;
        
        if (!bvd) {
            atb();
        }
        
        ov = 12;
        
        fh.enableAutoSave();
    } 
    catch (aR) {
        rI = aR.message;
        debug(["afterAutoSave:", aR.message, "eid:", ov]);
    }
    ossLog("realtime", "all", T(["stat=custom&type=AFTER_AUTO_SAVE&info=", "$processid$,$errmsg$,$oldmailid$,$mailid$,$attachlist$"]).replace({
        processid: ov,
        errmsg: encodeURIComponent(rI || "ok"),
        oldmailid: encodeURIComponent(awh),
        mailid: encodeURIComponent(aS),
        attachlist: encodeURIComponent(DG)
    }));
}




function cancelDoSend(){
    var fh = getMainWin(), KH = fh.QMAttach;
    
    if (KH && KH.onfinish) {
        KH.onprogress = null;
        KH.onfinish = null;
    }
    else {
        var arS = S("sendmailFrame", getTop());
        if (arS) {
            arS.setAttribute("deleted", "true");
            removeSelf(arS);
        }
    }
    
    recodeComposeStatus(3, null, 0);
    showProcess(0);
    errorProcess();
}







function quickDoSend(qw, bt, bo){
    var arZ = false;
    
    if (bo != "nomsg") {
        showProcess(1, 0, ["<img src='", getPath("image"), "newicon/a_send.gif' width='14px' height='14px' align='absmiddle'>&nbsp;", (bo || gsMsgSend)].join(""), null, true);
    }
    
    disableSendBtn(true);
    disableSource(true);
    
    createBlankIframe(getTop(), {
        id: "sendmailFrame",
        onload: function(al){
            if (arZ) {
                doSendFinishCheck(this);
            }
            else {
                arZ = true;
                
                try {
                    qw.content.value = bt;
                    qw.target = "sendmailFrame";
                    qw.submit();
                } 
                catch (aR) {
                    showError("����ʧ�ܣ�" + aR.message);
                    disableSendBtn(false);
                    disableSource(false);
                }
            }
        }
    });
}






function disableSendBtn(AQ, al){
    disableCtl("sendbtn", AQ, al || getMainWin());
}





function disableSaveBtn(AQ, al){
    disableCtl("savebtn", AQ, al || getMainWin());
}





function disableTimeSendBtn(AQ, al){
    disableCtl("timeSendbtn", AQ, al || getMainWin());
}





function disableSource(AQ){
    disableCtl("source", AQ, getMainWin());
}




function disableAll(AQ, al){
    var fh = al || getMainWin();
    if (fh.disableAll && fh.disableAll != arguments.callee) {
        return fh.disableAll(AQ);
    }
    
    disableSendBtn(AQ, al);
    disableSaveBtn(AQ, al);
    disableTimeSendBtn(AQ, al);
    
    var dV = getTop().QMDialog("composeExitAlert"), bwL = dV && dV.S("btn_exit_save");
    if (bwL) {
        bwL.disabled = AQ;
    }
}






function verifyCode(ao, uX){
    if (window != getTop()) {
        return getTop().verifyCode(bVS);
    }
    
    var abv = arguments.callee, cyq = abv.cjG;
    
    
    setVerifyCallBack();
    loadingBox({
        model: "��֤��",
        js: "qmverify.js",
        oncheck: function(){
            return window.QMVerifyBox;
        },
        onload: function(){
            QMVerifyBox.open({
                sType: ao,
                sVerifyKey: uX,
                onok: cyq
            });
        }
    });
}
























function openComposeDlg(blZ, ah, bpo){
    !(typeof QMAddress != "undefined" && QMAddress.isInit()) && initAddress();
    loadJsFileToTop(getPath("editor"), [getFullResSuffix("editor.js")]);
    
    loadingBox({
        model: "����",
        js: ["libcompose.js", "qmaddrinput.js"],
        oncheck: function(){
            return window.ComposeLib && window.QMAddrInput && window.QMEditor && (!bpo || bpo());
        },
        onload: function(){
            ComposeLib.openDlg(blZ, ah);
        }
    });
}










function setVerifyCallBack(bA){
    getTop().verifyCode.cjG = bA;
}







function emptyFolder(cLV){
    return confirm(cLV ? "��ȷ��Ҫ��մ��ļ�����\n����պ��ʼ��޷��ָ���" : "��ȷ��Ҫɾ����ļ����е������ʼ���\n����պ��ʼ��޷��ָ���");
}
































































function renameFolder(hw, ao, al, bOB){
    promptFolder({
        defaultValue: bOB || '',
        type: "rename" + (ao || 'folder'),
        onreturn: function(jt){
            var fI = S("frm", al);
            if (ao == 'tag') {
                fI.fun.value = "renametag";
                fI.tagname.value = jt;
                fI.tagid.value = hw;
            }
            else {
                fI.fun.value = "rename";
                fI.name.value = jt;
                fI.folderid.value = hw;
            }
            submitToActionFrm(fI);
        }
    });
    return false;
}








function promptFolder(ah){
    var aP = {
        shortcutgroup: {
            title: '�½���ϵ�˷���',
            msg: '����д��ϵ�˷������',
            name: '��ϵ�˷���',
            maxascii: 32,
            description: "д��ʱ��ֻ��Ҫ�������Ⱥ����(����������ƴ��)���Ϳ��Կ��Ⱥ���ˡ�"
        },
        folder: {
            title: '�½��ļ���',
            msg: '���������ļ������',
            name: '�ļ���',
            maxascii: 80
        },
        tag: {
            title: '�½���ǩ',
            msg: '���������ǩ���',
            name: '��ǩ',
            maxascii: 50
        },
        renamefolder: {
            title: '�������ļ���',
            msg: '���������µ��ļ������',
            name: '�ļ���',
            maxascii: 80
        },
        renametag: {
            title: '�������ǩ',
            msg: '���������µı�ǩ���',
            name: '��ǩ',
            maxascii: 50
        }
    }[ah.type];
    aP.defaultValue = ah.defaultValue;
    aP.onreturn = function(ba, gW){
        if (!ba) {
            return;
        }
        
        var aQ = getAsiiStrLen(trim(gW));
        if (aQ == 0 || aQ > aP.maxascii) {
            return showError(TE(aQ ? "$name$���̫������ʹ������$maxascii$���ַ�($@$eval $maxascii$/2$@$������)�����" : '$name$��Ʋ���Ϊ��').replace(aP));
        }
        if (/[~!#\$%\^&\*\(\)=\+|\\\[\]\{\};\':\",\?\/<>]/.test(gW)) {
            return showError(aP.name + '��Ʋ��ܰ� ~!#$%^&*()=+|\\[]{};\':",?/<> ���ַ�');
        }
        
        ah.onreturn(gW);
    };
    promptBox(aP);
}


function bRn(hw, adJ, ctn, dC){
    if (hw) {
        var aXf = S(hw + "_td", adJ);
        if (aXf) {
            setClass(aXf, ctn);
            return aXf;
        }
        else {
        
            var aXl = S(hw, adJ);
            if (aXl) {
                var bGD = dC == "over";
                if (bGD) {
                    showFolders(aXl.name, true);
                }
                var cnC = S(hw, adJ).parentNode;
                setClass(cnC, bGD ? "fn_list" : "");
                return aXl;
            }
        }
    }
}











function switchFolderComm(aL, al, aKW, sd, csL, csO, bnY){
    var aXv = S(aKW, al), mT = aL;
    
    if (mT) {
        bnY.ccv = mT;
    }
    else {
        mT = bnY.ccv;
    }
    
    if (aXv) {
        var bBt = "SwiTchFoLdErComM_gLoBaldATa", bvL = al[bBt], azz;
        
        if (bvL != mT) {
            bRn(bvL, al, csO, "none");
        }
        
        if (azz = bRn(al[bBt] = mT, al, csL, "over")) {
        
            E("new|personal|pop|tag".split("|"), function(bNP){
                var ale = S(bNP + "folders", al);
                ale && isObjContainTarget(ale, azz) &&
                showFolders(bNP, true);
            });
            
            if (getStyle(aXv, "overflow") != "hidden") {
            
                scrollIntoMidView(azz, aXv);
            }
            else {
            
                var ale = S("ScrollFolder", al);
                ale && isObjContainTarget(ale, azz) &&
                scrollIntoMidView(azz, ale);
            }
        }
    }
}






function switchFolder(aL, al){
    getTop().switchFolderComm(aL, al || getLeftWin(), "folder", "li", "fn", "fs", getTop().switchFolder);
}







function switchRightFolder(aL, clR, aKW){
    getTop().switchFolderComm(aL, clR || F("rightFolderList", getMainWin()), aKW || "folder_new", "div", "toolbg", "", getTop().switchRightFolder);
}






function isShowFolders(aL, al){
    var vZ = S("icon_" + aL, al || getTop());
    return !!(vZ && vZ.className == "fd_off");
}





function showFolders(aL, sl, al){
    var au = al || getTop(), bw = S(aL + "folders", au), vZ = S("icon_" + aL, au);
    
    if (bw && vZ) {
        var gV = !isShowFolders(aL, au);
        if (typeof sl != "boolean" || gV == sl) {
            setClass(vZ, gV ? "fd_off" : "fd_on");
            
            if (!al) {
                var ae = getTop(), bOD = "fOlDErsaNimaTion" + aL, ly = ae[bOD];
                
                if (!ly) {
                    ly = ae[bOD] = new ae.qmAnimation({
                        from: 1,
                        to: 100
                    });
                }
                
                ly.stop();
                
                if (gV) {
                    bw.style.height = "1px";
                    show(bw, true);
                }
                else {
                    bw.style.height = "auto";
                }
                
                var zs = bw.scrollHeight;
                
                ly.play({
                    speed: zs,
                    onaction: function(cj, jW){
                        S(aL + "folders", ae).style.height = (Math.floor((gV ? jW : 1 - jW) * zs) ||
                        1) +
                        "px";
                    },
                    oncomplete: function(cj, apv){
                        var fz = S(aL + "folders", ae);
                        if (gV) {
                            fz.style.height = "auto";
                        }
                        else {
                            show(fz, false);
                        }
                    }
                });
            }
            else {
                show(bw, gV);
            }
            
            callBack(getTop().iPadResizeFolder);
        }
    }
}

function decreaseFolderUnread(vN, Mt, al){
    var jH, Ou = vN.split(';');
    for (var i = Ou.length - 1; i >= 0; i--) {
        if (jH = aaV(0, Ou[i])) {
            aaV(1, Ou[i], jH - 1, Mt, al);
        }
    }
}







function getFolderUnread(hw){
    return aaV(0, hw);
}









function setFolderUnread(hw, cj, Mt, al){
    return aaV(1, hw, cj || 0, Mt, al);
}






function getGroupUnread(aUL){
    return aaV(0, aUL, null, null, getMainWin());
}








function setGroupUnread(aUL, cj, Mt){
    return aaV(1, aUL, cj || 0, Mt, getMainWin());
}









function setTagUnread(hw, cj, Mt, al){
    return aaV(1, hw, cj || 0, Mt, al, true);
}











function aaV(ea, hw, cj, Mt, al, cvQ){
    var Me = S(["folder_", (new String(hw)).toString().split("folder_").pop()].join(""), al || getLeftWin());
    if (!Me) {
        return 0;
    }
    
    var hf = Me.getAttribute("etitle"), aOK = GelTags("div", Me), aX = Me.name;
    if (aOK.length) {
        Me = aOK[0];
    }
    
    var jG = typeof(cj) == "number" && cj > 0 ? cj : 0, auw = Me.innerText || Me.textContent || "", aHy = auw.lastIndexOf("("), bfm = aHy == -1 ? 0 : parseInt(auw.substring(aHy + 1, auw.lastIndexOf(")")));
    
    if (ea == 0) {
        return bfm;
    }
    
    if (bfm == jG) {
        return 1;
    }
    
    var bCP = jG == 0, cv = {
        info: htmlEncode(aHy != -1 ? auw.substring(0, aHy) : auw),
        title: hf,
        unread: jG
    };
    
    Me.title = T('$title$' + (Mt || bCP ? '' : '  δ���ʼ� $unread$ ��')).replace(cv);
    
    
    
    
    Me = setHTML(Me, T(bCP && '$info$' ||
    (Mt ? '$info$($unread$)' : '<b>$info$</b><b>($unread$)</b>')).replace(cv) +
    (cv.info == '�Ǳ��ʼ�' ? '<input type="button" class="ico_input icon_folderlist_star"/>' : '') +
    (cv.info == 'Ư��ƿ' ? '<input class="ico_input drifticon" type="button" hidefocus />' : ''));
    Me.setAttribute("initlized", "");
    
    if (aX && !cvQ) {
        var bfA = S("folder_" + aX, getTop());
        if (bfA) {
            try {
                aaV(ea, hw, jG, Mt, getMainWin());
            } 
            catch (aR) {
                doPageError(aR.message, "all.js", "_optFolderUnread");
            }
            
            return setFolderUnread(bfA.id, getFolderUnread(bfA.id) - bfm + jG);
        }
    }
    
    return 1;
}







function doFolderEmpty(hw, qw, hI){
    qw.folderid.value = hw;
    qw.rk.value = Math.random();
    
    if (qw.loc) {
        qw.loc.value = hI;
    }
    
    submitToActionFrm(qw);
}







function selectAll(bdZ, gU){
    E(GelTags("input", S('list', gU)), function(nT){
        nT.checked = bdZ;
    });
}





function selectReadMail(bdZ, gU){
    E(GelTags("input", S('list', gU)), function(nT){
        if (nT.title != "ѡ��/ȡ��ѡ��") {
            nT.checked = nT.getAttribute('unread') != bdZ;
        }
    });
}





function checkAddrSelected(){
    var hL = GelTags("input"), aQ = hL.length, bn;
    
    for (var i = 0; i < aQ; i++) {
        bn = hL[i];
        if (bn.type == "checkbox" && bn.checked) {
            return true;
        }
    }
    
    return false;
}






function checkBoxCount(aVO){
    var eo = 0;
    
    E(GelTags("INPUT"), function(kX){
        if (kX.type == "checkbox" &&
        kX.name == aVO &&
        kX.checked) {
            eo++;
        }
    });
    
    return eo;
}




function PGV(){
}






function checkCheckBoxs(aC, qw){
    var fI = qw || S("frm", getMainWin()), hL = GelTags("input", fI), qx;
    
    for (var i = 0, aQ = hL.length; i < aQ; i++) {
        qx = hL[i];
        
        if (qx.type == "checkbox" &&
        qx.name == aC &&
        qx.checked) {
            return true;
        }
    }
    
    return false;
}






function setListCheck(kX, akM){
    if (kX.type != "checkbox") {
        return;
    }
    
    if (akM == null) {
        akM = kX.checked;
    }
    else {
        kX.checked = akM;
    }
    
    var fc = kX.parentNode.parentNode;
    
    if (fc.tagName == "TR") {
        fc = fc.parentNode.parentNode;
    }
    
    
    if (fc == S("frm", getMainWin())) {
        return;
    }
    
    var awm = fc.className;
    if (awm == "B") {
        awm = akM ? "B" : "";
    }
    else {
        awm = strReplace(awm, " B", "") +
        (akM ? " B" : "");
    }
    
    setClass(fc, awm);
    
    if (akM) {
        listMouseOut.call(fc);
    }
}







function doCheck(ag, avc, cvn, cDm){
    var bN = ag || window.event, gu = avc || bN.srcElement || bN.target, fh = cDm || getMainWin();
    
    if (!gu || !fh) {
        return;
    }
    
    if (gu.className == "one" || gu.className == "all") {
        CA(gu);
    }
    
    setListCheck(gu);
    
    
    if ((bN && bN.shiftKey || cvn) &&
    fh.gCurSelObj &&
    fh.gCurSelObj != gu &&
    gu.checked == fh.gCurSelObj.checked) {
        var hL = getTop().GelTags("input", fh.document), eo = 0, aQ = hL.length, qx;
        
        for (var i = 0; i < aQ; i++) {
            qx = hL[i];
            
            if (qx.type != "checkbox") {
                continue;
            }
            
            if ((qx == fh.gCurSelObj ||
            qx == gu) &&
            eo++ == 1) {
                break;
            }
            
            if (eo == 1) {
                setListCheck(qx, gu.checked);
            }
        }
    }
    
    fh.gCurSelObj = gu;
}






function checkAll(aVO, gU){
    E(GelTags("input", gU), function(aI){
        if (aI.name == aVO) {
            setListCheck(aI);
        }
    });
}







function fakeReadmail(ah){
    QMAjax.send(T('/cgi-bin/readmail?sid=$sid$&mailid=$mailid$&t=readsubmail&mode=fake&base=$base$&pf=$pf$').replace({
        sid: getSid(),
        mailid: ah.sMailId,
        pf: rdVer.isPre(ah.sFolderId) ? 1 : 0,
        base: rdVer("BaseVer", 0)
    }), {
        method: "GET",
        headers: {
            "If-Modified-Since": "0",
            "Cache-Control": "no-cache, max-age=0"
        },
        onload: function(ba, cq){
            var gA = trim2(cq);
            if (ba && gA.indexOf("(") == 0) {
                var gc = evalValue(gA);
                if (gc) {
                    folderOpt(extend(ah, gc));
                    callBack(getMainWin().updatePreAndNext, [ah]);
                }
            }
            else {
                var vE = getActionWin().document;
                vE.open();
                vE.write(hJ.responseText);
            }
        }
    });
}













function folderOpt(ah){
    if (!ah) {
        return;
    }
    
    var ae = getTop();
    ae.recordCompareReadedMailId(ah.sMailId);
    if (ah.bNewMail) {
        var mT = ah.sFolderId, dJZ;
        
        
        
        
        
        if (mT > 0) {
            try {
                ae.setFolderUnread(mT, ae.getFolderUnread(mT) - 1);
                if (ah.bStar) {
                    ae.setFolderUnread("starred", ae.getFolderUnread("starred") - 1);
                }
                
                var JP = ah.oMatchTag || [], i = JP.length - 1;
                i >= 0 && setTagUnread('tag', getFolderUnread('tag') - 1);
                for (; i >= 0; i--) {
                    var ih = 'tag_' + JP[i];
                    debug(['getFolderUnread', ih, getFolderUnread(ih)]);
                    setTagUnread(ih, getFolderUnread(ih) - 1);
                }
                
            } 
            catch (e) {
            }
        }
        
        
        
        
    }
}






function recordReadedMailId(aS){
    getTop().gsReadedMailId = aS;
}





function recordCompareReadedMailId(aS){
    if (aS && getTop().gsReadedMailId != aS) {
        getTop().gsReadedMailId = aS;
    }
    
    QMMailCache.addData(aS);
}






function SG(aug, cvm){
    var cC = aug.className, gV = !/\bsts\b/i.test(cC);
    
    
    
    var bn = GelTags("input", aug.parentNode)[0], bMK = bn && bn.className, avM = (cvm ? aug.parentNode.parentNode.parentNode : aug.parentNode).nextSibling;
    
    if (bMK == "one" || bMK == "all") {
        setClass(bn, gV ? "one" : "all");
    }
    
    setClass(aug, gV ? cC.replace(/\bhts\b/i, "sts") : cC.replace(/\bsts\b/i, "hts"));
    
    
    if (avM.className != "toarea") {
        avM = avM.nextSibling;
    }
    
    if (avM.className != "toarea") {
        return;
    }
    
    return show(avM, gV);
}





function CA(auS){
    if (auS) {
        var axc = (auS.className == "all" ? auS.parentNode.parentNode.parentNode.parentNode : auS.parentNode).nextSibling;
        
        if (axc.className != "toarea") {
            axc = axc.nextSibling;
        }
        
        if (axc.className == "toarea") {
            var cFD = auS.checked;
            
            E(GelTags("input", axc), function(aI){
                setListCheck(aI, cFD);
            });
        }
    }
}















function RD(ag, aS, zo, ea, xl, auC, bcB, bbf, Rs){
    recordReadedMailId(aS);
    
    if (ag) {
        preventDefault(ag);
        
        
        var ay = ag.srcElement || ag.target, mT = ay && ay.getAttribute("fid");
        
        if (mT) {
            goUrlMainFrm(T("/cgi-bin/$cgi$?sid=$sid$&folderid=$fid$&page=0&t=$t$").replace({
                cgi: mT == "9" ? "readtemplate" : "mail_list",
                fid: mT,
                sid: getSid(),
                t: mT == "9" ? "sms_list_v2" : ""
            }), false);
            return stopPropagation(ag);
        }
    }
    
    var aN = rdVer.url(aS, xl, Rs, ea, getTop().bnewwin || (ag && ag.shiftKey), auC, bcB, bbf);
    
    rdVer.log(aS, "hit");
    
    if (ag && ag.shiftKey) {
        var gu = ag.target || ag.srcElement;
        
        while (gu && gu.className != "i M" &&
        gu.className != "i F") {
            gu = gu.parentNode;
        }
        
        gu && QMReadedItem.disp(gu);
        goNewWin(aN);
    }
    else {
        goUrlMainFrm([aN, "#stattime=", now()].join(""), false);
    }
}









function checkPerDelML(xl, buK, gU){
    return delMailML(xl, buK, "PerDel", gU);
}









function delMailML(xl, buK, ajo, gU){
    var au = gU.nodeType == 9 ? (gU.defaultView || gU.parentWindow) : gU, aP = QMMailList.getCBInfo(au);
    configPreRmMail(aP, 'rmMail');
    rmMail(ajo == "PerDel" ? 1 : 0, aP);
    return;
}



var QMReadedItem = {};





QMReadedItem.addItem = function(nT){
    if (!getMainWin().gMailItems) {
        getMainWin().gMailItems = [];
    }
    
    getMainWin().gMailItems.push(nT);
};





QMReadedItem.getItems = function(){
    return getMainWin().gMailItems || [];
};





QMReadedItem.save = function(crW){
    getMainWin().goReadedItemImg = crW;
};





QMReadedItem.load = function(){
    return getMainWin().goReadedItemImg;
};





QMReadedItem.disp = function(aLE){
    if (!aLE) {
        return;
    }
    
    var agq = aLE.type == "checkbox" ? aLE.parentNode : GelTags("input", aLE)[0].parentNode, fT = agq.firstChild;
    
    if (fT.tagName != "IMG") {
        insertHTML(agq, "afterBegin", T(['<img src="$path$ico_grouplight.gif" class="showarrow"', ' title="����������Ķ���һ���ʼ�" />']).replace({
            path: getPath("image")
        }));
        fT = agq.firstChild;
    }
    
    show(this.load(), false);
    show(fT, true);
    
    this.save(fT);
};





QMReadedItem.read = function(avc){
    if (avc && avc.tagName === "U") {
        fireMouseEvent(avc, "click");
    }
    else {
        if (!this.load()) {
            return false;
        }
        
        fireMouseEvent(GelTags("table", this.load().parentNode.parentNode)[0].parentNode, "click");
    }
    
    return true;
};






QMReadedItem.check = function(cNf){
    if (!this.load()) {
        return false;
    }
    
    var bhz = this.load().nextSibling;
    bhz.checked = !bhz.checked;
    
    doCheck(null, bhz, cNf);
    return true;
};






QMReadedItem.move = function(cOS){
    var bF = this.getItems(), aTu = bF.length, dM = -1;
    
    if (aTu == 0) {
        return false;
    }
    
    if (this.load() != null) {
        var cdz = QMReadedItem.load().nextSibling;
        
        for (var i = aTu - 1; i >= 0; i--) {
            if (cdz == bF[i]) {
                dM = i;
                break;
            }
        }
    }
    
    dM += cOS ? 1 : -1;
    
    if (dM > -1 && dM < aTu) {
        this.disp(bF[dM]);
        scrollIntoMidView(bF[dM], getMainWin().document.body, false);
        return true;
    }
    
    return false;
};







function listMouseOver(ag){
    var ad = this;
    if (ad.className.indexOf(" B") == -1 &&
    getStyle(ad, "backgroundColor") != "#f3f3f3" &&
    ad.getAttribute("colorchange") != "none") {
        ad.style.backgroundColor = "#f3f3f3";
    }
    
    
    if (ag) {
        var ay = getEventTarget(ag);
        while (ay && ay != ad && ay.className != 'tagbgSpan') {
            ay = ay.parentNode;
        }
        if (ay && ay != ad) {
            QMTag.showTagClose(ay, 1);
        }
    }
}





function listMouseOut(ag){
    var ad = this;
    if ((!ag ||
    !isObjContainTarget(ad, ag.relatedTarget ||
    ag.toElement)) &&
    ad.style.backgroundColor &&
    ad.getAttribute("colorchange") != "none") {
        ad.style.backgroundColor = "";
    }
    
    
    if (ag) {
    
        var ay = getEventTarget(ag);
        while (ay && ay != ad && ay.className != 'tagbgSpan') {
            ay = ay.parentNode;
        }
        if (ay && ay != ad) {
            QMTag.showTagClose(ay, 0);
        }
    }
    
}





function listMouseEvent(cD){
    addEvents(cD, {
        contextmenu: function(ag){
            listContextMenu.call(cD, ag);
        },
        mouseover: function(ag){
            listMouseOver.call(cD, ag);
        },
        mouseout: function(ag){
            listMouseOut.call(cD, ag);
        }
    });
}

function listContextMenu(ag){
    var ar = this;
    mailRightMenu(ar, ag);
    preventDefault(ag);
}





function GetListMouseClick(al){
    return function(ag){
        ListMouseClick(ag, al || window);
    }
}






function ListMouseClick(ag, al){
    var gu, bN = ag || al.event;
    
    if (!(gu = getEventTarget(bN))) {
        return;
    }
    
    if (gu.name == "mailid") {
    
        if (!getGlobalVarValue('TIP_46')) {
            requestShowTip('gotnomail', 46, al, function(cq, hz){
            
            
            
                setGlobalVarValue('TIP_46', 1);
                
                return true;
            });
        }
        
        return doCheck(bN);
    }
    
    
    if (gu.className.indexOf("cir") == 0) {
        var aJw = GelTags("table", gu.parentNode.parentNode)[0].parentNode.onclick.toString().split("{")[1].split("}")[0].replace(/event/ig, "{shiftKey:true}");
        
        if (/\WRD/.test(aJw)) {
            return eval(aJw);
        }
        else {
            aJw = GelTags("table", gu.parentNode.parentNode)[0].parentNode.onclick.toString().replace(/.*{/g, "").replace(/}.*/g, "").replace(/event/ig, "{shiftKey:true}");
            return eval(aJw);
        }
    }
}






function listInitForComm(dC, cvR){
    var cC, oH = GelTags("div"), cyB = doCheck, aku, BZ;
    
    cC = dC ? dC : "M";
    for (var i = oH.length - 1; i >= 0; i--) {
        aku = oH[i];
        
        if (aku.className != cC) {
            continue;
        }
        
        if (dC == "ft") {
            aku = GelTags("table", aku)[0];
        }
        
        BZ = GelTags("input", aku)[0];
        if (!BZ || BZ.type != "checkbox") {
            continue;
        }
        
        BZ.title = "��סshift�����ͬ�Ĺ�ѡ�� �ɷ����ݶ�ѡ";
        addEvent(BZ, "click", cyB);
        
        if (!cvR) {
            listMouseEvent(aku);
        }
    }
}







function modifyFolder(xl, UR){
    getMainWin().location.href = T(['/cgi-bin/foldermgr?sid=$sid$&fun=detailpop&t=pop_detail', '&folderid=$folderid$&acctid=$acctid$']).replace({
        sid: getSid(),
        folderid: xl,
        acctid: UR
    });
    return false;
}





function recvPopHidden(xl){
    getMainWin().setTimeout(function(){
        if (!xl) {
            getTop().reloadFrmLeftMain(false, true);
        }
        else {
            var bh = "iframeRecvPopHidden";
            createBlankIframe(getMainWin(), {
                id: bh
            });
            
            var aN = ["/cgi-bin/mail_list?sid=", getSid(), "&folderid=", xl, "&t=recv_pop_hidden"].join("");
            try {
                F(bh, getMainWin()).location.replace(aN);
            } 
            catch (aR) {
                S(bh, getMainWin()).src = aN;
            }
        }
    }, 10000);
}






function recvPop(UR, xl, gU){
    recvPopCreat(UR, xl);
    if (S("tips", gU)) {
        S("tips", gU).innerHTML = T(['<img src="$images_path$ico_loading3.gif" align=absmiddle>', ' ������ȡ...&nbsp;ϵͳ���ں�̨�Զ���ȡ��������뿪��ҳ�棬�Ժ�����鿴��ȡ���']).replace({
            images_path: getPath("image", true)
        });
    }
    
    
    recvPopHidden(xl);
}





function recvPopCreat(UR){
    getActionWin().location = ["/cgi-bin/foldermgr?sid=", getSid(), "&fun=recvpop&acctid=", UR].join("");
}




function recvPopAll(){
    getActionWin().location = ["/cgi-bin/foldermgr?sid=", getSid(), "&fun=recvpopall"].join("");
    try {
    
        setTimeout(function(){
            reloadFrmLeftMain(false, true);
        }, 3000);
    } 
    catch (aR) {
    }
    return false;
}









function setPopFlag(UR, zW, bt){
    if (zW == "recent") {
        setPopRecentFlag(UR, bt);
    }
}






function setPopRecentFlag(UR, bt){
    runUrlWithSid(["/cgi-bin/foldermgr?sid=", getSid(), "&fun=pop_setting&acctid=", UR, "&recentflag=", bt].join(""));
}







function checkPopMailShow(vN){
    var boN = ["@yahoo.com.cn", "@sina.com", "@tom.com", "@gmail.com"], cpY = vN.toLowerCase();
    
    for (var i = 0; i < boN.length; i++) {
        if (cpY.indexOf(boN[i]) >= 0) {
            return true;
        }
    }
    
    return false;
}









function setBeforeUnloadCheck(al, bo, dXN, crn, hO){
    var bcZ = ["input", "select", "textarea"];
    
    al = al || window;
    hO = hO ? (typeof(hO) == "string" ? S(hO, al) : hO) : al.document;
    al.gbIsBeforeUnloadCheck = true;
    
    E(bcZ, function(sd){
        var cbW = al[sd + "_save"] = [];
        
        E(GelTags(sd, hO), function(cD, fR){
            cbW.push(cD.value + cD.checked);
            cD.setAttribute("saveid", fR);
        });
    });
    
    if (!al.onsetbeforeunloadcheck) {
        al.onsetbeforeunloadcheck = function(){
            if (al.gbIsBeforeUnloadCheck) {
                for (var i = 0, aQ = bcZ.length; i < aQ; i++) {
                    var EB = bcZ[i], aX = EB + "_save", axu = GelTags(EB, hO);
                    
                    for (var j = 0, jlen = axu.length; j < jlen; j++) {
                        var btZ = axu[j].getAttribute("saveid");
                        if (btZ != null && axu[j].getAttribute("nocheck") != "true" &&
                        al[aX][btZ] !=
                        (axu[j].value + axu[j].checked)) {
                            return bo ? bo : "���޸ĵ�������δ���棬ȷ��Ҫ�뿪��";
                        }
                    }
                }
            }
        };
        
        gbIsIE ? (al.document.body.onbeforeunload = al.onsetbeforeunloadcheck) : al.document.body.setAttribute("onbeforeunload", "return onsetbeforeunloadcheck();");
    }
    
    E(crn || ["cancel"], function(aXK){
        addEvent(typeof(aXK) == "string" ? S(aXK, al) : aXK, "mousedown", function(){
            al.gbIsBeforeUnloadCheck = false;
        });
    });
    
    E(GelTags("form", al.document), function(kc){
        addEvent(kc, "submit", function(){
            al.gbIsBeforeUnloadCheck = false;
        });
        
        if (!kc.RP) {
            kc.RP = kc.submit;
            kc.submit = function(){
                al.gbIsBeforeUnloadCheck = false;
                this.RP();
            };
        }
    });
}









function popErrProcess(bo, agT, aLI, OZ, cqy, bQt){
    if (bo != null) {
        msgBox(bo, agT, aLI, OZ);
    }
    
    if (bQt != null) {
        getMainWin().ShowPopErr(bQt, cqy);
    }
    
    showSubmitBtn();
}




function showSubmitBtn(){
    var VV = S("submitbtn", getMainWin());
    
    if (VV) {
        VV.disabled = false;
    }
}




function showPopSvr(){
    show(S("popsvrTR", getMainWin()), true);
}





function setTaskId(mZ){
    try {
        getMainWin().document.checkFrom.taskid.value = mZ;
    } 
    catch (aR) {
    }
}






































































































































function showQuickReply(sl){
    show(S('quickreply', getMainWin()), sl);
    show(S('upreply', getMainWin()), !sl);
    runUrlWithSid("/cgi-bin/getcomposedata?Fun=setshowquickreply&isShowQuickReply=" +
    (sl ? 0 : 1));
}




function hiddenReceipt(al){
    show(S("receiptDiv", al), false);
}





function switchOption(gU){
    var aw = [["<input type='button' class='qm_ico_quickup' title='����' />", true], ["<input type='button' class='qm_ico_quickdown' title='��ʾ������' />", false]][S("trOption", gU).style.display == "none" ? 0 : 1];
    S("aSwitchOption", gU).innerHTML = aw[0];
    show(S("trOption", gU), aw[1]);
}






function checkPerDel(al){


    delMail("PerDel", al);
    
}






function delMail(ajo, al){
    rmMail(ajo == "PerDel" ? 1 : 0, al.QMReadMail.getCBInfo(al));
    
    
    
    
    
    
    
    
    
    
}



















































































































































function setMailType(ao, Pa, abw, gU){
    var fI = S("mail_frm", gU);
    
    fI.s.value = ["readmail_", Pa ? (abw ? "group" : ao) : ("not" + ao), getMainWin().newwinflag ? "_newwin" : ""].join("");
    fI.action = "/cgi-bin/mail_mgr?sid=" + getSid();
    fI.mailaction.value = "mail_spam";
    fI.isspam.value = Pa;
    fI.reporttype.value = ao == "cheat" ? "1" : "";
    
    submitToActionFrm(fI);
}




























































































function getAddrSub(addr){
    var cU = addr.indexOf("@");
    if (cU > -1) {
        var addrName = addr.substr(0, cU);
        var addrDom = addr.substr(cU);
        return subAsiiStr(addrName, 18, '...') + subAsiiStr(addrDom, 18, '...');
    }
    else {
        debug("name+dom" + addr);
        return subAsiiStr(addr, 36, '...');
    }
}

function getRefuseText(awI){
    var cNB = T(['<input type="checkbox" name="$TNAME$" id="$TID$" $TCHECK$>��<label for="$TID$">$TVALUE$</label>�������']);
    var i;
    var retstr = "";
    var br = "";
    for (i in awI) {
        var tagname = "refuse";
        if (i > 0) {
            tagname = "refuse" + i;
            br = "<br>"
        }
        var addrlabel;
        if (awI[i] != "������") 
            addrlabel = "&lt;" + getAddrSub(awI[i]) + "&gt;";
        else 
            addrlabel = awI[i];
        var ischecked = "";
        debug("ITEM: " + awI[i]);
        retstr += br +
        cNB.replace({
            TNAME: tagname,
            TID: tagname,
            TVALUE: addrlabel,
            TCHECK: ischecked
        });
    }
    debug("RET Text" + retstr);
    return retstr;
}










function reportSpam(aLk, bcp, al, PD, axq){
    debug("Enter mail.js reportSpam " + aLk);
    var au = al || (window == getTopWin() ? getMainWin() : window);
    if (!S("mail_frm", au)) {
        debug("enter from maillist");
        
        var kk = QMMailList.getCBInfo(au), bz, bvi = 0, bi = kk.oMail.length, Mb = {};
        if (bi == 0) {
            showError(gsMsgNoMail);
            return false;
        }
        for (var aD = 0; aD < bi; aD++) {
        
            bz = kk.oMail[aD];
            if (bz.bSys) {
            
            
            
            
            
            }
            bvi += bz.bDft ? 1 : 0;
            if (bz.sSEmail.indexOf("@groupmail.qq.com") != -1) {
            
                aLk = true;
            }
            else 
                if (bz.sSEmail.indexOf("10000@qq.com") != -1) {
                
                    aLk = true;
                }
            if (typeof Mb.sender == "undefined") {
                Mb.sender = bz.sSEmail;
                Mb.nickname = bz.sSName;
            }
            else 
                if (Mb.sender != bz.sSEmail) {
                    Mb.sender = "";
                }
        }
        if (bvi == bi) {
        
            PD = 1;
        }
        else {
        
            for (aD = 0; aD < bi; aD++) {
                bz = kk.oMail[aD];
                
                
                
                
            }
            kk = QMMailList.getCBInfo(au);
            QMMailList.selectedUI(kk);
        }
    }
    if (Mb) 
        debug("Has nick and sender " + Mb.sender);
    else 
        debug("No nick and sender");
    var awS = new Array();
    awS[0] = "������";
    
    if (Mb && Mb.sender && Mb.sender.indexOf(',') < 0) {
        awS[0] = Mb.sender;
    }
    
    var bIj = 0;
    if (axq) {
        if (axq[0].length > 0) 
            awS[bIj++] = axq[0];
        if (axq[1]) 
            awS[bIj++] = axq[1];
    }
    var aHk = T(['<div>', '<input type="radio" name="reporttype" id="r$value$" value="$value$" $checked$>', '<label for="r$value$">$content$</label>', '</div>']);
    var ek = (PD !== 1 ? ["<div style='padding:10px 10px 0 25px;text-align:left;'>", "<form id='frm_spamtype'>", "<div style='margin:3px 0 3px 3px'><b>��ѡ��Ҫ�ٱ����������ͣ�</b></div>", aHk.replace({
        value: (bcp ? 11 : 8),
        checked: "checked",
        content: "�����ʼ�"
    }), aHk.replace({
        value: (bcp ? 10 : 4),
        checked: "",
        content: "����ʼ�"
    }), aHk.replace({
        value: (bcp ? 9 : 1),
        checked: "",
        content: "��թ�ʼ�"
    }), "<div style=\"padding:5px 0 2px 0;\">", (aLk ? "&nbsp;" : getRefuseText(awS)), "</div><div style='margin:10px 3px 0px 3px' class='addrtitle' >��ܰ��ʾ�����ǽ����Ȳ���׼ȷ����ľٱ��ʼ���</div>", "</form>", "</div><div style='padding:3px 15px 12px 10px;text-align:right;'>", "<input type=button id='btn_ok' class='btn wd2' value=ȷ��>", "<input type=button id='btn_cancel' class='btn wd2' value=ȡ��>", "</div>"] : ["<div class='cnfx_content'>", "<img style='float:left; margin:5px 10px 0;' src='", getPath("image"), "ico_question.gif' />", "<div class='b_size' style='padding:10px 10px 0 0;margin-left:65px;line-height:1.5;height:80px;text-align:left;'>", "<form id='frm_spamtype'>", "<strong>��Ҫ�ٱ����Ư��ƿ��</strong><br>", "<div style=\"display:none\">", aHk.replace({
        value: 8,
        checked: "checked",
        content: ""
    }), "</div>", "�ٱ��Ժ������յ����Ư��ƿ�Ļ�Ӧ��", "</form>", "</div></div><div class='cnfx_btn'>", "<input type=button id='btn_ok' class='btn wd2' value=ȷ��>", "<input type=button id='btn_cancel' class='btn wd2' style='margin-left:5px' value=ȡ��>", "</div>"]).join("");
    
    new (getTop().QMDialog)({
        sId: "reportSpam",
        sTitle: PD === 1 ? "�ҵ����ƿ��" : "�ٱ�������ѡ���ʼ�",
        sBodyHtml: ek,
        nWidth: 450,
        nHeight: PD === 1 ? 150 : 220,
        onload: function(){
            var bJ = this;
            addEvent(bJ.S("btn_ok"), "click", function(){
                var fI = S("mail_frm", getMainWin()) || S("frm", getMainWin());
                if (!fI) {
                    return;
                }
                fI.s.value = "readmail_spam";
                fI.isspam.value = 'true';
                fI.mailaction.value = "mail_spam";
                fI.action = '/cgi-bin/mail_mgr?sid=' + getTop().getSid();
                
                var beS = bJ.S("frm_spamtype").reporttype, arD = bJ.S("frm_spamtype").refuse, atN = bJ.S("frm_spamtype").refuse1;
                for (var i = 0, aQ = beS.length; i < aQ; i++) {
                    if (beS[i].checked) {
                        fI.reporttype.value = beS[i].value;
                        break;
                    }
                }
                var Cn = new Array();
                Cn[0] = "0";
                Cn[1] = "0";
                if ((arD && arD.checked) ||
                (atN && atN.checked)) {
                    fI.s.value = "readmail_reject";
                }
                
                if (atN) {
                    debug("Pro refuse OK* " + arD.checked + " - " + atN.checked);
                    if (arD && arD.checked) {
                        debug("what1? ---- ");
                        Cn[0] = "1";
                        
                        debug("SRe" + Cn[0]);
                    }
                    else {
                        debug("what2? ");
                        Cn[0] = "0";
                    }
                    debug("sreject1 " + Cn[0] + Cn[1]);
                    if (atN.checked) 
                        Cn[1] = "1";
                    else 
                        Cn[1] = "0";
                    debug("sreject2 " + Cn[0] + Cn[1]);
                }
                else {
                    Cn[0] = "1";
                    Cn[1] = "1";
                }
                
                if (fI.s_reject_what) {
                    fI.s_reject_what.value = Cn[0] + Cn[1];
                    debug("Reject method " + fI.s_reject_what.value);
                }
                
                submitToActionFrm(fI);
                bJ.close();
            });
            addEvent(bJ.S("btn_cancel"), "click", function(){
                bJ.close()
            });
            
        },
        onshow: function(){
            this.S("btn_cancel").focus();
        }
    });
    
    return false;
}









function setSpamMail(Pa, abw, gU){
    var bJv = gU || (window == getTopWin() ? getMainWin() : window);
    if (Pa && !abw) {
        return reportSpam(null, null, bJv);
    }
    setMailType("spam", Pa, abw, bJv);
}






function setCheatMail(Pa, abw){
    setMailType("cheat", Pa, abw);
}






function doReject(Pa, abw, gU, mx){
    var brr = "���ʼ���ַ";
    if (mx) {
        brr = "<" + mx + ">";
    }
    
    var fI = S("mail_frm", gU);
    if (fI.s_reject_what) {
        fI.s_reject_what.value = "10";
    }
    
    if (confirm("ϵͳ���" + brr + "���롰�����У������յ����Դ˵�ַ���ʼ���\n\nȷ��Ҫ���մ˷����˵��ʼ���")) {
        setMailType("reject", Pa, abw, gU);
    }
}






















































function linkMaker(aes){
    function bzj(bQ){
        var gB = 12, iC = bQ || "", ci = [], aQ = iC.length / gB;
        
        for (var i = 0; i < aQ; i++) {
            ci[i] = iC.substr(i * gB, gB);
        }
        
        return ci.join("<wbr>");
    }
    
    return aes.replace(/(https?:\/\/[\w.]+[^ \f\n\r\t\v\"\\\<\>\[\]\u2100-\uFFFF]*)|([a-zA-Z_0-9.-]+@[a-zA-Z_0-9.-]+\.\w+)/ig, function(bPk, dNJ, aXD){
        if (aXD) {
            return ['<a href="mailto:', aXD, '">', bzj(aXD), '</a>'].join("");
        }
        else {
            return ['<a href="', bPk, '">', bzj(bPk), '</a>'].join("");
        }
    });
}





function linkIdentify(cD){
    if (!cD || cD.tagName == "A" || cD.tagName == "SCRIPT" ||
    cD.tagName == "STYLE" ||
    cD.className == "qqmailbgattach") {
        return;
    }
    
    for (var dE = cD.firstChild, nextNode; dE; dE = nextNode) {
        nextNode = dE.nextSibling;
        linkIdentify(dE);
    }
    
    if (cD.nodeType == 3) {
        var iC = cD.nodeValue.replace(/</g, "&lt;").replace(/>/g, "&gt;"), hY = linkMaker(iC);
        
        if (iC != hY) {
            var gJ = false;
            
            if (cD.previousSibling) {
                gJ = insertHTML(cD.previousSibling, "afterEnd", hY);
            }
            else {
                gJ = insertHTML(cD.parentNode, "afterBegin", hY);
            }
            
            if (gJ) {
                removeSelf(cD);
            }
        }
    }
}







function bCU(ak){
    var iN = ak.href || "", gk = ak.ownerDocument;
    return !ak.onclick && iN && iN.indexOf("javascript:") != 0 && iN.indexOf("#") != 0 &&
    (gk.parentWindow || gk.defaultView).location.href.split("#")[0] != iN.split("#")[0];
}







function swapLink(aL, adx, gU){
    var fc = aL.ownerDocument ? aL : S(aL, gU);
    if (fc) {
        function bfp(aXa){
            if (bCU(aXa)) {
                aXa.target = "_blank";
                aXa.onclick = function(){
                    return bGk.call(this, adx);
                };
            }
        }
        
        linkIdentify(fc);
        E(GelTags("a", fc), bfp);
        E(GelTags("area", fc), bfp);
        E(GelTags("form", fc), function(cri){
            cri.onsubmit = function(){
                var jk = gU.location;
                
                if (jk.getParams()["filterflag"] == "true" || this.action) {
                    this.target = "_blank";
                    return true;
                }
                
                showError(T(['���ڰ�ȫ���Ǹò����ѱ����� [<a onclick="', 'setTimeout( function() {', 'goUrlMainFrm(\x27$url$&filterflag=true\x27);', 'showInfo(\x27ȡ�����γɹ�\x27);', '});', '" style="color:white;" >ȡ������</a>]']).replace({
                    url: jk.pathname + jk.search
                }));
                
                return false;
            };
        });
    }
}






function preSwapLink(ag, adx){
    var ay = getEventTarget(ag);
    if (ay &&
    {
        "A": 1,
        "AREA": 1
    }[ay.tagName] &&
    bCU(ay)) {
        bGk.call(ay, adx) && window.open(ay.href);
        preventDefault(ag);
    }
}








function swapImg(aL, eaJ, adx, al){














































































}




function openSpam(al){
    al = al || window;
    if (true || confirm("���ʼ���ͼƬ���ܰ��ȫ��Ϣ���Ƿ�鿴��")) {
        al.location.replace(appendToUrl(al.location.href, "&disptype=html&dispimg=1&clickshowimage=1"));
    }
}




function openHttpsMail(al){
    al.location.replace(appendToUrl(al.location.href, "&dispimg=1"));
}






function copyToClipboard(gW){
    try {
        if (gbIsFF) {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper).copyString(gW);
        }
        else {
        
            var AN = S("copyinputcontainer");
            if (!AN) {
                insertHTML(document.body, "beforeEnd", '<input id="copyinputcontainer" style="position:absolute;top:-1000px;left:-1000px;"/>');
                AN = S("copyinputcontainer");
            }
            AN.value = gW;
            AN.select();
            document.execCommand('Copy');
        }
    } 
    catch (e) {
        alert(T('����������ȫ���ò�����༭���Զ�ִ�и��Ʋ�������ʹ�ü��̿�ݼ�($cmd$+C)����ɡ�').replace({
            cmd: gbIsMac ? "Command" : "Ctrl"
        }));
        return false;
    }
    return true;
}






function bGk(adx){
    var hG = this;
    
    if (hG.href.indexOf("mailto:") == 0 && hG.href.indexOf("@") != -1) {
        window.open(["/cgi-bin/readtemplate?sid=", getSid(), "&t=compose&s=cliwrite&newwin=true&email=", hG.href.split("mailto:")[1]].join(""));
        return false;
    }
    else 
        if (hG.className == "qqmail_card_reply" ||
        hG.className == "qqmail_card_reply_btn" ||
        hG.className == "qqmail_birthcard_reply" ||
        hG.className == "qqmail_birthcard_reply_btn") {
        
        
        
        
        
        
            var hf = hG.name, cC = hG.className, aJr = !!hf, cCM = cC.indexOf("birthcard") != -1;
            
            getMainWin().location = T('/cgi-bin/cardlist?sid=$sid$&t=$t$&s=$s$&today_tips=$tips$&loc=readmail,readmail,sendnewcard,1&ListType=$listtype$&email=$email$$newwin$').replace({
                sid: getSid(),
                t: aJr ? "compose_card" : "card",
                s: cCM ? "replybirthcard" : "",
                tips: cC.indexOf("btn") != -1 ? "112" : "111",
                listtype: aJr ? "No" : "Cards&Cate1Idx=listall",
                email: hf,
                newwin: getTop().bnewwin ? "&newwin=true" : ""
            });
            return false;
        }
        else 
            if (hG.className == "qqmail_card_reply_thanksbtn" ||
            hG.className == "qqmail_card_reply_thanks" ||
            hG.className == "qqmail_birthcard_reply_thanksbtn") {
                var hf = hG.name;
                
                openComposeDlg("card", {
                    sTitle: "��л����",
                    sDefAddrs: hf,
                    bAddrEdit: true,
                    sDefContent: "лл��ĺؿ��� �Ժ�Ҫ����ϵŶ��",
                    bContentEdit: true,
                    sDefSubject: "лл��ĺؿ�!",
                    bRichEditor: false,
                    oncomplete: function(){
                    },
                    
                    bShowResult: true
                });
                return false;
            }
            
            
            
            
            
            
            
            
            
            
            
            
            else 
                if (hG.className == "qqmail_postcard_reply") {
                    goUrlMainFrm(T('/cgi-bin/readtemplate?sid=$sid$&t=compose_postcard&email=$email$').replace({
                        sid: getSid(),
                        email: hG.name
                    }), false);
                    return false;
                }
                else 
                    if (hG.className == "qqmail_postcard_reply2") {
                        var aTS, aBR, WE = getMainWin().QMReadMail;
                        if (WE) {
                            aTS = WE.getMailInfo().from.name || '';
                            aBR = WE.getMailInfo().from.addr || '';
                        }
                        else {
                            aTS = aBR = '';
                        }
                        goUrlMainFrm(T('/cgi-bin/readtemplate?sid=$sid$&t=compose_postcard&email=$email$&reply=1&frname=$name$&fraddr=$addr$').replace({
                            name: escape(aTS),
                            addr: escape(aBR),
                            sid: getSid(),
                            email: hG.name
                        }), false);
                        return false;
                    }
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    else 
                        if (hG.className == "qqmail_postcard_print") {
                            var WE = getMainWin().QMReadMail;
                            if (WE) {
                                window.open(T('/cgi-bin/readmail?sid=$sid$&t=print_haagendazs&s=print&filterflag=true&mailid=$mailid$').replace({
                                    sid: getSid(),
                                    mailid: WE.getMailId()
                                }));
                            }
                            return false;
                        }
                        else 
                            if (hG.className == "qqmail_postcard_getmoreinfo") {
                                var WE = getMainWin().QMReadMail;
                                if (WE) {
                                    window.open(T('/cgi-bin/today?t=haagendazs2010&sid=$sid$').replace({
                                        sid: getSid(),
                                        mailid: WE.getMailId()
                                    }));
                                }
                                return false;
                            }
                            else 
                                if (hG.className == "qqmail_videomail_reply") {
                                    goUrlMainFrm(T('/cgi-bin/readtemplate?sid=$sid$&t=compose_video&email=$email$').replace({
                                        sid: getSid(),
                                        email: hG.name
                                    }), false);
                                    return false;
                                }
                                else 
                                    if (hG.className == "groupmail_open") {
                                        getMainWin().location = ["/cgi-bin/grouplist?sid=", getSid(), "&t=compose_group", (getTop().bnewwin ? "&newwin=true" : "")].join("");
                                        return false;
                                    }
                                    else 
                                        if (hG.className == "reg_alias") {
                                            getMainWin().location = ["/cgi-bin/readtemplate?reg_step=1&t=regalias_announce&sid=", getSid()].join("");
                                            return false;
                                        }
                                        
                                        else 
                                            if (hG.className == "mergemail_reader_article_list_link") {
                                                var ccp = hG.getAttribute("ctype");
                                                var beq = hG.getAttribute("param_new");
                                                var aN = "";
                                                
                                                
                                                if (beq.indexOf("follow=1") >= 0) {
                                                    var ckc = hG.getAttribute("followuin");
                                                    aN = (getTop().gsRssDomain || "") + "/cgi-bin/reader_mgr";
                                                    QMAjax.send(aN, {
                                                        method: "POST",
                                                        content: "fun=followshare&followuin=" + ckc + "&sid=" + getSid(),
                                                        onload: function(ba, cDg){
                                                            if (ba) {
                                                            
                                                                getMainWin().location = T('$host$/cgi-bin/reader_article_list?sid=$sid$&$param$').replace({
                                                                    host: (getTop().gsRssDomain || ""),
                                                                    sid: getSid(),
                                                                    param: beq
                                                                });
                                                            }
                                                        }
                                                    });
                                                }
                                                
                                                else {
                                                    getMainWin().location = T('$host$/cgi-bin/reader_article_list?sid=$sid$&$param$').replace({
                                                        host: (getTop().gsRssDomain || ""),
                                                        sid: getSid(),
                                                        param: beq
                                                    });
                                                }
                                                
                                                
                                                if (ccp == "onefeed") {
                                                    aN = (getTop().gsRssDomain || "") + "/cgi-bin/reader_mgr?fun=setlog&flag=3&from=2";
                                                }
                                                else {
                                                    aN = (getTop().gsRssDomain || "") + "/cgi-bin/reader_mgr?fun=setlog&flag=3&from=4";
                                                }
                                                runUrlWithSid(aN);
                                                
                                                return false;
                                            }
                                            else 
                                                if (hG.className == "mergemail_reader_setting_link") {
                                                
                                                    getMainWin().location = T('$host$/cgi-bin/reader_setting?t=rss_setting_notify&sid=$sid$&$param$').replace({
                                                        host: (getTop().gsRssDomain || ""),
                                                        sid: getSid(),
                                                        param: hG.getAttribute("param")
                                                    });
                                                    
                                                    
                                                    var aN = (getTop().gsRssDomain || "") + "/cgi-bin/reader_mgr?fun=setlog&flag=3&from=3";
                                                    runUrlWithSid(aN);
                                                    return false;
                                                }
                                                else 
                                                    if (hG.className == "reader_article_list_link") {
                                                    
                                                        getMainWin().location = T('$host$/cgi-bin/reader_article_list?sid=$sid$&$param$').replace({
                                                            host: (getTop().gsRssDomain || ""),
                                                            sid: getSid(),
                                                            param: hG.getAttribute("param")
                                                        });
                                                        
                                                        return false;
                                                    }
                                                    
                                                    else 
                                                        if (hG.className == "reader_detail_qqmail_link") {
                                                            var fi = [];
                                                            
                                                            E(hG.getAttribute("param").split("&"), function(cq){
                                                                if (cq.indexOf("share=1") < 0) {
                                                                    fi.push(cq);
                                                                }
                                                            });
                                                            
                                                            getMainWin().location = T('$host$/cgi-bin/reader_detail?sid=$sid$&$param$').replace({
                                                                host: (getTop().gsRssDomain || ""),
                                                                sid: getSid(),
                                                                param: fi.join("&")
                                                            });
                                                            return false;
                                                        }
                                                        else 
                                                            if (hG.className == "reader_list_qqmail_link") {
                                                                var fi = [];
                                                                
                                                                E(hG.getAttribute("param").split("&"), function(cq){
                                                                    fi.push(cq);
                                                                });
                                                                getMainWin().location = T('$host$/cgi-bin/reader_list?classtype=allfriend&refresh=1&share=1&sid=$sid$&$param$').replace({
                                                                    host: (getTop().gsRssDomain || ""),
                                                                    sid: getSid(),
                                                                    param: fi.join("&")
                                                                });
                                                                return false;
                                                            }
                                                            else 
                                                                if (hG.className == "reader_catalog_list_qqmail_link") {
                                                                    var fi = [];
                                                                    
                                                                    E(hG.getAttribute("param").split("&"), function(cq){
                                                                        fi.push(cq);
                                                                    });
                                                                    
                                                                    getMainWin().location = T('$host$/cgi-bin/reader_catalog_list?sid=$sid$&classtype=share&share=1&refresh=1&$param$').replace({
                                                                        host: (getTop().gsRssDomain || ""),
                                                                        sid: getSid(),
                                                                        param: fi.join("&")
                                                                    });
                                                                    return false;
                                                                }
                                                                else 
                                                                    if (hG.className == "ftn_groupshare_enter_link") {
                                                                        getMainWin().location.href = T('/cgi-bin/ftnExs_files?listtype=group&s=group&t=exs_ftn_files&sid=$sid$').replace({
                                                                            sid: getSid()
                                                                        });
                                                                        return false;
                                                                    }
                                                                    else 
                                                                        if (hG.className == "book_article_list_link") {
                                                                        
                                                                            getMainWin().location = T('/cgi-bin/setting10?sid=$sid$&$param$').replace({
                                                                                sid: getSid(),
                                                                                param: hG.getAttribute("param")
                                                                            });
                                                                            
                                                                            return false;
                                                                        }
    
    
    
    if (1) {
    
        if (hG.href.indexOf("javascript:void(0)") >= 0) {
        
            return false;
        }
        if (adx != "preview" && getMainWin().location.href.indexOf('/cgi-bin/readmail?') < 0) {
            return true;
        }
        
        var ln = hG.parentNode;
        while (ln) {
            if (ln.nodeType == 1 && (ln.id == "QQmailNormalAtt" || ln.id == "attachment")) {
                return true;
            }
            ln = ln.parentNode;
        }
        
        window.open(T('/cgi-bin/mail_spam?sid=$sid$&action=check_link&url=$url$&mailid=$mid$&spam=$spam$').replace({
            mid: getMainWin().location.getParams()['mailid'],
            spam: adx == "spam" ? 1 : 0,
            sid: getSid(),
            url: escape(hG.href)
        }), "_blank");
        return false;
    }
    
    var iC = "http://mail.qq.com/cgi-bin/feed?u=";
    if (hG.name == "_QQMAIL_QZONESIGN_" || hG.href.indexOf(iC) == 0) {
        if (hG.name == "_QQMAIL_QZONESIGN_") {
            var cpm = hG.href.split("/"), jf = parseInt(cpm[2]), cv = ["&sid=", getSid(), "&u=http%3A%2F%2Ffeeds.qzone.qq.com%2Fcgi-bin%2Fcgi_rss_out%3Fuin%3D", jf].join("");
        }
        else {
            var bws = hG.href.substr(iC.length);
            if (bws.indexOf("http%3A%2F%2F") == 0 ||
            bws.indexOf("https%3A%2F%2F") == 0) {
                var cv = ["&sid=", getSid(), "&u=", hG.href.substr(iC.length)].join("");
            }
            else {
                var cv = ["&sid=", getSid(), "&u=", encodeURIComponent(hG.href.substr(iC.length))].join("");
            }
        }
        if (getTop().bnewwin) {
            goUrlTopWin(["/cgi-bin/frame_html?target=feed", cv].join(""));
        }
        else {
            goUrlMainFrm(["/cgi-bin/feed?", cv].join(""), false);
        }
        return false;
    }
    else 
        if (hG.name == "QmRsSRecomMand") {
            getMainWin().location = T("$host$/cgi-bin/reader_detail?vs=1&feedid=$feedid$&itemid=$itemid$&t=compose&s=content&mailfmt=1&sid=$sid$&newwin=$isnewwin$&tmpltype=recommend&loc=reader_detail,rss_recommend,,2").replace({
                host: (getTop().gsRssDomain || ""),
                feedid: hG.getAttribute("feedid"),
                itemid: hG.getAttribute("itemid"),
                sid: getSid(),
                isnewwin: !!getTop().bnewwin
            });
            return false;
        }
    
    return true;
}





function goPrevOrNextMail(aeP){
    var fc, fh = getMainWin();
    
    if (!!(fc = S(["prevmail", "nextmail"][aeP ? 1 : 0], fh)) &&
    !fc.getAttribute("disabled")) {
    
    }
    else 
        if (!!(fc = S(["prevpage", "nextpage"][aeP ? 1 : 0], fh)) &&
        !fc.getAttribute("disabled")) {
            fh.location = fc.href;
        }
}





function goBackHistory(){
    var BA = SN("readmailBack", getMainWin());
    if (BA.length > 0 && isShow(BA[0])) {
        fireMouseEvent(BA[0], "click");
        return true;
    }
    return false;
}
















function MLIUIEvent(aaD, al, hw){
    var bK = aaD.value, bL = QMMailCache, Qy = bL.isRefresh(al), OD = aaD.parentNode;
    while (OD.tagName.toUpperCase() != "TABLE") {
        OD = OD.parentNode;
    }
    var ef = GelTags("table", OD)[0], Xz = GelTags("td", GelTags("tr", ef)[0]), dKN = Xz[1], akw = Xz[Xz.length - 1];
    
    aaD.setAttribute('init', 'true');
    QMReadedItem.addItem(aaD);
    
    
    if (akw.className == "new_g") {
        akw = Xz[6];
    }
    
    
    var bii = GelTags("div", ef), atD;
    for (var aD = bii.length - 1; aD >= 0; aD--) {
        if (bii[aD].className == "TagDiv") {
            atD = bii[aD];
            break;
        }
    }
    
    
    if (bL.hasData(bK)) {
        if (!Qy) {
            var az = bL.getData(bK);
            if (aaD.getAttribute("unread") == "true") {
                bL.addVar("unread", -1);
            }
            bMf(aaD, OD, false, az.reply);
            bHt(aaD, OD);
            
            if (az.star != null) {
                setClass(akw, az.star ? "fg fs1" : "fg");
                bL.addVar("star", az.star ? 1 : -1);
            }
            
            if (az.oTagIds) {
                var Xb = GelTags("table", ef), JP = az.oTagIds, aig, bEY = {};
                
                if (atD) {
                    for (var aD = Xb.length - 1; aD >= 0; aD--) {
                        if (aig = Xb[aD].getAttribute("tagid")) {
                            bEY[aig] = 1;
                        }
                    }
                    for (var aGT in JP) {
                        if (JP[aGT] === 0) {
                        
                            QMTag.rmTagUI(atD, aGT);
                        }
                        else 
                            if (!bEY[aGT]) {
                            
                                QMTag.addTagUI(atD, aGT, hw, bK, false);
                            }
                    }
                }
            }
        }
        else {
            bL.delData(bK);
        }
    }
    
    listMouseEvent(OD);
    
    akw.title = akw.className == "fg" ? "����Ǳ�" : "ȡ���Ǳ�";
    addEvent(akw, 'click', function(ag){
        starMail(null, QMMailList.getCBInfo(al, bK));
        return stopPropagation(ag);
    });
    addEvent(OD, "click", GetListMouseClick(al));
    addEvent(OD, "selectstart", preventDefault);
    
    
    var bdq = ef.rows[0].cells[1];
    if (bdq.className.indexOf("fr") > -1) {
        loadJsFile(getPath("js") + getFullResSuffix("qmtip.js"), true);
        addEvent(bdq, "mouseover", MLI.bPm);
        addEvent(bdq, "mouseout", MLI.bPm);
    }
    
    
    addEvent(atD, 'click', function(ag){
        if (QMTag.readclose(ag, QMMailList.getCBInfo(al, bK))) {
            return stopPropagation(ag);
        }
    });
    
    dragML(OD, aaD);
    
}






function MLI(ecp, al, hw, Rs){














    var brX = SN("mailid", al), aeb = brX[brX.length - 1], bK = aeb.value, aZ = aeb.parentNode, bL = QMMailCache, Qy = bL.isRefresh(al);
    
    while (aZ.tagName.toUpperCase() != "TABLE") {
        aZ = aZ.parentNode;
    }
    
    MLIUIEvent(aeb, al, hw);
    
    
    var cyT = aeb.getAttribute("uw") == "1", bJE = cyT ? al.oPreUWMails : al.oPreMails, cJF = bJE.length, cJE = Qy ? 2 : 1, cEy = new Date() - new Date(parseInt(aeb.getAttribute("totime"))) < 2592000000, cEl = cEy && aeb.getAttribute("unread") == "true" && cJF < cJE && !rdVer.log(bK);
    
    if (cEl && rdVer.isPre(hw)) {
        var aN, OO = aeb.getAttribute("gid");
        
        aN = rdVer.url(bK, hw, Rs, "", false, "", false, "", true);
        
        if (aN) {
            bJE.push(aN);
        }
    }
    
    if (getTop().gsReadedMailId == bK) {
        QMReadedItem.disp(aZ);
        recordReadedMailId(null);
    }
    
}









function MLJump(ctm, csi, aJ, al){
    var cni = SN("maillistjump", al.document), bAl = "_MlJuMp_", aAX = parseInt(ctm) || 0, Lc = parseInt(csi) || 0;
    
    function bDk(aL){
        var rB = getTop().QMMenu(aL).S("txt"), cE = parseInt(rB.value);
        
        if (isNaN(cE)) {
            rB.select();
            return showError("��������ת��ҳ��");
        }
        
        cE = Math.max(0, Math.min(cE - 1, Lc));
        if (aAX == cE) {
            rB.select();
            return showError("�������˵�ǰҳ��");
        }
        
        getTop().QMMenu(aL).close();
        goUrlMainFrm([aJ, '&page=', cE, '&loc=mail_list,,jump,0'].join(''));
    }
    
    E(cni, function(aGe){
        if (!aGe.getAttribute(bAl)) {
            aGe.setAttribute(bAl, "1");
            addEvents(aGe, {
                click: function(ag){
                    var bh = unikey("mljump"), cU = calcPos(aGe), cO = 185, dv = 40;
                    
                    
                    new (getTop().QMMenu)({
                        sId: bh,
                        oEmbedWin: al,
                        nWidth: cO,
                        nX: cU[1] - cO,
                        nY: bodyScroll(al, "scrollHeight") - cU[2] < dv ? (cU[0] - dv - 13) : cU[2],
                        bAutoClose: false,
                        oItems: [{
                            nHeight: dv,
                            sItemValue: MLJump.Gb.replace({
                                id: bh
                            })
                        }],
                        onshow: function(){
                            this.S("txt").focus();
                        }
                    });
                    
                    addEvent(getTop().QMMenu(bh).S("txt"), "keypress", function(ag){
                        var eA = ag.keyCode || ag.which;
                        if (eA === 13) {
                            bDk(bh);
                        }
                        else 
                            if ((eA < 48 || eA > 57) && eA != 8 && eA != 9) {
                                preventDefault(ag);
                            }
                    });
                    
                    addEvent(getTop().QMMenu(bh).S("btn"), "click", function(ag){
                        bDk(bh);
                    });
                    
                    preventDefault(ag);
                }
            });
        }
    });
}

MLJump.Gb = T(['<div style="position:absolute;">', '<div class="addrtitle jumpmenusdjust" style="float:left;">��ת���� <input id="txt" type="text" class="txt" style="width:30px;" /> ҳ</div>', '<a id="btn" href="javascript:;" class="left button_gray_s" style="width:40px; margin:7px 0 0 5px; _display:inline;">&nbsp;ȷ��&nbsp;</a>', '</div>']);







function initDropML(){
    function aHz(ak){
        var cU = calcPos(ak), pK = S('dragtitle'), AA = pK.offsetLeft, xt = pK.offsetTop;
        return (cU[1] > AA && cU[3] < AA && cU[2] > xt && cU[0] < xt) ? ak : null;
    }
    
    function axV(ak, bvf){
        if (ak && ak.id.indexOf('folder_') >= 0) {
            var cC = ak.className, bIm = cC.indexOf('toolbg') > -1;
            if (bvf && bIm) {
                setClass(ak, cC.replace(/\btoolbg\b/g, ''));
            }
            else 
                if (!bIm && !bvf) {
                    setClass(ak, cC + ' toolbg');
                }
        }
    }
    
    var pK = S('dragtitle'), bIb = S('OutFolder'), bsx = 'inidrop', Oh = BaseMailOper.getInstance(getMainWin()), bfU = QMDragDrop, bxc = 'mail_list';
    
    if (bIb.getAttribute(bsx) == 'true') {
    
        return false;
    }
    bIb.getAttribute(bsx, 'true');
    bfU.delGroup(bxc);
    
    var acw = null, bhq = false, Fn = null, kY = null, nD = null, bDl = /^([489]|personal|pop|tag)$/, Xk = new bfU.DropTarget(S('OutFolder'), {
    
    
    
    
    
        ondragover: function(qr){
            if (Fn == kY) {
                return;
            }
            var bfb = Fn && Fn.id || '', aXH = kY && kY.id || '', bfl = Fn && Fn.getAttribute('dp'), aXL = kY && kY.getAttribute('dp'), bzb = kY && kY.getAttribute('dr');
            
            
            if (aXL) {
                showFolders(aXL, true, getTop());
            }
            if (bfl && bfl != aXL) {
                showFolders(bfl, false, getTop());
            }
            
            axV(Fn, 1);
            axV(kY);
            
            
            if (nD) {
                clearTimeout(nD);
            }
            bhq = bzb && !bDl.test(bzb);
            nD = setTimeout(function(){
                setClass(pK, bhq ? 'drag_over' : 'drag_out');
                nD = null;
            }, 50);
            
            Fn = kY;
        },
        
        
        
        
        
        ondrop: function(qr){
            if (!kY || !bhq) {
                return;
            }
            var ih = Oh.getMailInfo().sFid, bh = kY.getAttribute('dr') || '';
            ossLog("delay", "all", "stat=drag&opr=" + bh);
            
            
            if (bh == '6') {
            
                axV(Fn, 1);
                Fn = null;
                Oh.apply('spammail');
                dragML.aYO = true;
                return;
            }
            else 
                if (bDl.test(bh)) {
                    axV(Fn, 1);
                    Fn = null;
                    return;
                }
                else 
                    if (bh.indexOf('tag_') >= 0) {
                    
                        bh = bh.replace('tag', 'tid');
                    }
                    else 
                        if (bh == 'starred') {
                            bh = 'star';
                        }
                        else 
                            if ((ih == 5 || ih == 6) && bh == 5) {
                                bh = 'predelmail';
                                dragML.aYO = true;
                            }
                            else 
                                if (parseInt(bh)) {
                                    bh = {
                                        5: 'delmail'
                                    }[bh] || 'fid_' + bh;
                                }
                                else {
                                    return;
                                }
            Oh.apply(bh);
            pK.setAttribute('na', 'true');
            var ly = new qmAnimation({
                from: 100,
                to: 1
            });
            ly.play({
                speed: "slow",
                onaction: function(cj, jW){
                    setOpacity(pK, cj / 100.0);
                },
                oncomplete: function(cj, apv){
                    show(pK, 0);
                    setClass(pK, 'drag_out');
                    setOpacity(pK, 100);
                    axV(Fn, 1);
                    Fn = null;
                }
            });
        }
    }, function(AA, xt, qr){
    
    
    
    
    
    
        if (gbIsIE) {
            var ay = getEventTarget(qr.event), cnI = /(folder_\w+_td|(personal|pop|tag)foldersDiv)/;
            while (ay && !cnI.test(ay.id)) {
                ay = ay.parentNode;
            }
            kY = ay;
        }
        else 
            if (kY = aHz(S('OutFolder'))) {
            
            
                var hA = ['personal', 'pop', 'tag'], aAk = null, bKK = null, Ik, i;
                for (i = hA.length - 1; i >= 0; i--) {
                    if (aAk = aHz(S(hA[i] + 'foldersDiv'))) {
                        break;
                    }
                }
                
                if (aAk = aAk || aHz(S('SysFolderList'))) {
                
                    Ik = GelTags('li', aAk);
                    for (i = Ik.length - 1; i >= 0; i--) {
                        if (bKK = aHz(Ik[i])) {
                            break;
                        }
                    }
                }
                kY = bKK || aAk;
                
            }
        return !!(Fn || kY);
    });
    bfU.addGroup(bxc, Xk);
}

function dragML(ak, nT){
    if (!S('OutFolder') || !QMDragDrop) {
    
    
        return;
    }
    var ad = dragML, bh = 'dragtitle', pK = S(bh);
    if (!pK) {
        insertHTML(getTop().document.body, 'afterBegin', '<div id="dragtitle" class="drag_out" style="display:none;"></div>');
        pK = S(bh);
    }
    var acw, CP = new QMDragDrop.Draggable(ak, {
    
        threshold: 5,
        oTitle: pK
    }, {
        ondragstart: function(ag){
            ad.aYO = nT.checked == true;
            nT.checked = true;
            var au = getMainWin(), Oh = BaseMailOper.getInstance(au), eP = QMMailList.getCBInfo(au);
            QMMailList.selectedUI(eP);
            Oh.setMailInfo(eP);
            pK.innerHTML = ['ѡ�� ', eP.oMail.length, ' ���ʼ�'].join('');
            
            ossLog("delay", "all", "stat=drag&c=" + eP.oMail.length);
            
            
            
            
            
            
            
            
            
            acw = gbIsIE ? [0, 0, 0, 0] : calcPos(au.frameElement);
            pK.style.left = acw[3] + ag.clientX + 'px';
            pK.style.top = acw[0] + ag.clientY + 'px';
            pK.setAttribute('na', '');
            show(pK, 1);
            
            initDropML();
        },
        ondrag: function(ag){
            pK.style.left = acw[3] + ag.clientX + 'px';
            pK.style.top = acw[0] + ag.clientY + 'px';
        },
        ondragend: function(ag){
            if (!pK.getAttribute('na')) {
            
                show(pK, 0);
                setClass(pK, 'drag_out');
            }
            if (!ad.aYO) {
                nT.checked = false;
                var bDQ = QMMailList.getCBInfo(getMainWin());
                QMMailList.selectedUI(bDQ);
            }
        }
    });
    QMDragDrop.addGroup('mail_list', CP);
    
    
    var aO = ak.ownerDocument, au = aO.parentWindow || aO.defaultView, aJS = dragML.aJS = dragML.aJS || unikey('drag');
    if (!au[aJS]) {
        addEvent(au, 'unload', function(){
            if (pK.releaseCapture) {
                pK.releaseCapture();
            }
            show(pK, 0);
        });
        au[aJS] = 1;
    }
}




MLI.bPm = function(ag){
    var ae = getTop(), ad = arguments.callee, MR = ag.clientX, MT = ag.clientY, cD = getEventTarget(ag);
    while (cD && cD.tagName.toUpperCase() != "TD") {
        cD = cD.parentNode;
    }
    if (ad.Cq) {
        clearTimeout(ad.Cq);
        ad.Cq = 0;
    }
    
    if (ag.type == "mouseout") {
        ae.QMTip && ae.QMTip.showMailList(0, cD.ownerDocument);
        return;
    }
    
    ad.Cq = setTimeout(function(){
        var boj = ae.GelTags("b", cD.parentNode.cells[2]), boh = boj[boj.length - 1];
        
        if (!ae.QMTip || !boh || (ad.Bo == MR && ad.Az == MT)) {
            return;
        }
        
        ad.Bo = MR;
        ad.Az = MT;
        
        var Am = boh.innerHTML.replace(/^\&nbsp;-\&nbsp;/, "").replace(/\&nbsp;/gi, "&nbsp; ").replace(/&lt;br\/?&gt;/g, '<br/>');
        ae.QMTip.showMailList(1, cD.ownerDocument, Am, MR, MT);
    }, 250);
};





function MLI_A(gk){
    var Nk = GelTags("table", gk), cJW = Nk.length, aZ = Nk[cJW - 1], bK = aZ.getAttribute("mailid");
    
    if (QMMailCache.hasData(bK)) {
        if (!QMMailCache.isRefresh(window)) {
            setClass(aZ, "i M");
        }
        else {
            QMMailCache.delData(bK);
        }
    }
    
    listMouseEvent(aZ);
    
    addEvent(aZ, "selectstart", preventDefault);
}










function bGI(nT, VC, zo, aLV){
    if (!(nT && nT.type == "checkbox")) {
        return false;
    }
    
    if (zo == null) {
        return nT.getAttribute("unread") == "true";
    }
    
    if (!VC) {
        VC = nT.parentNode.parentNode.parentNode.parentNode;
    }
    
    if ((nT.getAttribute("unread") == "true") == !!zo &&
    !aLV) {
        return zo;
    }
    
    var OO = nT.getAttribute("gid");
    if (OO) {
        setGroupUnread(OO, getGroupUnread(OO) - 1);
        setGroupUnread("gall", getGroupUnread("gall") - 1);
    }
    
    nT.setAttribute("unread", zo ? "true" : "false");
    
    setClass(VC, [zo ? "i F" : "i M", nT.checked ? " B" : ""].join(""));
    setClass(GelTags("table", VC)[0], zo ? "i bold" : "i");
    
    
    var brv = GelTags("div", VC)[1];
    if (!/(s[016789]bg)|(Rw)/.test(brv.className)) {
        var bhC = aLV ? "r" : nT.getAttribute("rf"), bgd = nT.getAttribute("isendtime"), cC = "Rr";
        
        if (bgd) {
            cC = bgd == "0" ? "Rc" : "Ti";
        }
        else 
            if (zo) {
                cC = "Ru";
            }
            else 
                if (bhC) {
                    cC = bhC == "r" ? "Rh" : "Rz";
                }
        
        setClass(brv, "cir " + cC);
    }
    
    return zo;
}






function cCv(nT){
    return bGI(nT);
}









function bMf(nT, VC, zo, aLV){
    return bGI(nT, VC, zo, aLV);
}








function bHt(nT, VC){
    if (!nT || !nT.getAttribute("gid")) {
        return false;
    }
    
    var bpa = GelTags("b", VC)[0], agq = bpa && bpa.parentNode;
    
    if (agq && agq.className == "new_g") {
        agq.style.visibility = "hidden";
        return true;
    }
    
    return false;
}






function getMailListInfo(){
    var fh = getMainWin(), bEh = S("_ut_c", fh), bCj = S("_ur_c", fh), bNz = S("_ui_c", fh);
    
    return {
        totle: (bEh && parseInt(bEh.innerHTML)) || 0,
        unread: (bCj && parseInt(bCj.innerHTML)) || 0,
        star: (bNz && parseInt(bNz.innerHTML)) || 0
    };
}








function setMailListInfo(Zx, Vu, aZF){
    var fh = getMainWin(), gJ = true, bcw = S("_ur", fh), cfy = S("_ui", fh), clY = S("_ut", fh), fc;
    
    if (!isNaN(Zx = parseInt(Zx))) {
        if (!!(fc = S("_ur_c", fh))) {
            fc.innerHTML = Zx;
            show(bcw, Zx > 0);
        }
        else {
            gJ = false;
        }
        var aLf = S("tip_unread", fh);
        if (aLf) {
            aLf.innerHTML = Zx < 0 ? parseInt(aLf.innerHTML) + Zx : Zx;
            show(aLf, Zx);
        }
    }
    
    if (!isNaN(Vu = parseInt(Vu))) {
        Vu = Math.max(0, Vu);
        if (!!(fc = S("_ui_c", fh))) {
            fc.innerHTML = Vu;
            show(cfy, Vu != 0);
        }
        else {
            gJ = false;
        }
    }
    
    if (!isNaN(aZF = parseInt(aZF))) {
        Vu = Math.max(0, aZF);
        if (!!(fc = S("_ut_c", fh))) {
            fc.innerHTML = Vu;
            show(clY, Vu != 0);
        }
        else {
            gJ = false;
        }
    }
    
    show(S("_uc", fh), isShow(bcw));
    show(S("_ua", fh), isShow(bcw));
    
    return gJ;
}








function readMailFinish(aS, ao, hw, ctI){
    var fh = getMainWin(), aXF = S("load_" + aS, fh), aZ, BZ;
    
    QMMailCache.addData(aS);
    
    if (aXF) {
        show(aXF, false);
        
        aZ = aXF.parentNode.previousSibling;
        BZ = GelTags("input", aZ)[0];
    }
    else {
        var hL = GelTags("input", fh.document);
        for (var i = 0, aQ = hL.length; i < aQ; i++) {
            if (hL[i].type == "checkbox" &&
            hL[i].value == aS) {
                BZ = hL[i];
                break;
            }
        }
        aZ = BZ;
        while (aZ.tagName.toUpperCase() != "TABLE") {
            aZ = aZ.parentNode;
        }
    }
    
    
    var Xb = GelTags("table", aZ), aqH = false;
    for (var aD = Xb.length - 1; aD >= 0; aD--) {
        if (Xb[aD].getAttribute("tagid")) {
            aqH = true;
            break;
        }
    }
    
    bHt(BZ, aZ);
    
    if (BZ && cCv(BZ)) {
        bMf(BZ, aZ, false);
        setMailListInfo(getMailListInfo().unread - 1);
        
        
        if (BZ.getAttribute('star') == '1') {
            setFolderUnread('starred', getFolderUnread('starred') - 1);
        }
        
        if (hw && parseInt(hw) > 0 && !aqH) {
            setFolderUnread(hw, ctI ? getGroupUnread("gall") : getMailListInfo().unread);
        }
        else {
            reloadLeftWin();
        }
    }
}









function checkMail(vN){
    if (vN == "") {
        showError("��ӵ����ݲ���Ϊ��");
        return false;
    }
    
    if (!vN.match(/^[\.a-zA-Z0-9_=-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)) {
        showError("������������ַ����ȷ������������");
        return false;
    }
    
    return true;
}








function checkAndSubmit(aL){
    var bn = S(aL);
    
    if (!checkMail(trim(bn.value))) {
        bn.focus();
        return false;
    }
    
    submitToActionFrm(bn.form);
}






function pushToDialogList(aL){
    var ae = getTop();
    
    if (!ae.goDialogList) {
        ae.goDialogList = new ae.Object;
    }
    
    if (aL) {
        ae.goDialogList[aL] = true;
    }
}





function showDialogNewReadMail(csf, csc, vS, aS){
    new (getTop().QMDialog)({
        sId: "addnewremind_qqmail",
        sTitle: "�½�����",
        sUrl: T("/cgi-bin/read_reminder?linkid=%linkid%&linktitle=%linktitle%&sid=%sid%&t=remind_edit&from=%from%", "%").replace({
            sid: getSid(),
            linkid: csf,
            linktitle: csc,
            from: vS
        }),
        nWidth: 450,
        nHeight: 360
    })
    aS && rdVer(aS, 1);
}

function setRemindSpan(aS, al){


    getTop().S('remind_edit_' + aS, al).innerHTML = (getTop().reminddetail["mailid:" + aS] || "").replace(/linktitle=.*&sid=/g, function(bt){
        return bt.replace(/\'/g, "&#039;");
    });
}


function submitSwitchForm(){
    var ff = getTop().S("frmSwitch");
    ff && ff.submit();
}














function getDomain(cLF){
    return [["foxmail.com", "qq.com", "biz"], ["Foxmail.com", "QQ", "��Ѷ"]][cLF ? 1 : 0][/,7$/.test(getSid()) ? 2 : (location.href.indexOf("foxmail.com") > -1 ? 0 : 1)];
}

var GetDomain = getDomain;





function getSid(){
    return getTop().g_sid ||
    (S("sid") ? S("sid").value : location.getParams(getTop().location.href)["sid"]);
}

var GetSid = getSid;





function getUin(){
    return getTop().g_uin;
}







function getPath(ao, cNY){
    var Kd = {
        image: ["images_path", "/zh_CN/htmledition/images/"],
        js: ["js_path", "/zh_CN/htmledition/js/"],
        css: ["css_path", "/zh_CN/htmledition/css/"],
        style: ["style_path", "/cgi-bin/getcss?sid=" + getSid() + "ft="],
        swf: ["swf_path", "/zh_CN/htmledition/swf/"],
        editor: ["editor_path", "/zh_CN/htmledition/qqmaileditor/"],
        stationery: ["stationery_path", "http://res.mail.qq.com/zh_CN/"],
        card: ["card_path", "http://res.mail.qq.com/zh_CN/"],
        mo: ["mo_path", "http://res.mail.qq.com/zh_CN/"],
        skin: ["skin_path", "0", true]
    }[ao], dR;
    
    if (Kd) {
        dR = trim(getTop()[Kd[0]] || Kd[1]);
        
        if (cNY && !Kd[2] && dR.indexOf("http") != 0) {
            dR = [location.protocol, "//", location.host, dR].join("");
        }
    }
    
    return dR || "";
}






function getFullResSuffix(gb){
    if (!getTop().gLn) {
        return gb;
    }
    var jV, aIK, bhN = ".j" + "s";
    if (gb.indexOf(bhN) > 0) {
        jV = gb.substr(0, gb.indexOf(bhN));
        aIK = bhN;
    }
    else 
        if (gb.indexOf(".css") > 0) {
            jV = gb.substr(0, gb.indexOf(".css"));
            aIK = ".css";
        }
        else 
            if (gb.indexOf(".html") > 0) {
                jV = gb.substr(0, gb.indexOf(".html"));
                aIK = ".html";
            }
    if (jV.length > 0 && getTop().gLn[jV]) {
        return jV + getTop().gLn[jV] + aIK;
    }
    else {
        return gb;
    }
}












function outputJsReferece(cB, yB, al){
    var dR = cB || outputJsReferece.cIs, fd = yB || outputJsReferece.xM, au = al || window, cM = T(['<script language="JavaScript" src="$file$', (cB ? '' : '?r=' + Math.random()), '"></', 'script>']), qB = [];
    outputJsReferece.cIs = dR;
    outputJsReferece.xM = fd;
    
    function cAH(nx){
        var jV = trim(nx || ""), ha = /[0-9a-fA-F]{6}\.js$/.test(jV) ? nx.substr(0, nx.length - 9) : nx.split(".")[0];
        
        if (ha && (cB || !au[ha + "_js"])) {
            qB.push(cM.replace({
                file: dR + nx
            }));
        }
    }
    E(fd, cAH);
    return qB.join("");
}





function runUrlWithSid(aJ){
    try {
    
        getTop().getHttpProcesser().src = T('$url$&sid=$sid$&r=$rand$').replace({
            url: aJ,
            sid: getSid(),
            rand: Math.random()
        });
    } 
    catch (aR) {
    }
}




























function createBlankIframe(al, cV){
    cacheByIframe(cV && cV.defcss == false ? [] : [["css", getPath("css"), getFullResSuffix("comm.css")], ["css", getPath("style"), "skin"]], extend({
        className: "menu_base_if",
        transparent: false,
        destroy: false
    }, cV, {
        win: al,
        header: ["<script>", getTop.toString().replace(/[\r\n]/g, ""), "<\/script>", cV && cV.header || ""].join(""),
        onload: function(al){
            if (this.getAttribute("cbi_inited") != "true") {
                cV && cV.transparent &&
                (this.contentWindow.document.body.style.background = "transparent");
                this.setAttribute("cbi_inited", "true");
            }
            callBack.call(this, cV && cV.onload, [al]);
        }
    }));
}






function createActionFrame(al){
    return createBlankIframe(al, {
        id: "actionFrame",
        defcss: false,
        onload: actionFinishCheck
    });
}















function hideEditorMenu(){
    if (getTop().QMEditor) {
        getTop().QMEditor.hideEditorMenu();
    }
}





function hideMenuEvent(ag){
    var gu = getEventTarget(ag), aCb = getTop().QMMenu && getTop().QMMenu();
    
    for (var i in aCb) {
        !aCb[i].isContain(gu) && aCb[i].close();
    }
    
    try {
        getTop().QQPlusUI.hideMenuEvent(gu);
    } 
    catch (Ci) {
    }
}






















function confirmBox(aH){

    var aGc = 2, uq = aH.defaultChecked || false, bpi = aH.confirmBtnTxt || "ȷ��", brQ = aH.cancelBtnTxt || "ȡ��", beb = aH.neverBtnTxt;
    
    aH.width = aH.width || 450;
    aH.height = aH.height || 163;
    new (getTop().QMDialog)({
        sId: aH.id || "QMconfirm",
        sTitle: aH.title || "ȷ��",
        sBodyHtml: T(['<div class="$sStyle$">', '<div class="cnfx_content">', '<img src="$image_path$ico_question.gif" align="absmiddle" style="float:left;margin:5px 10px 0;display:$imgdisp$;">', '<table style="width:$width$px;height:80px;">', '<tr><td style="vertical-align:top;"><div style="padding-top:10px;word-break:break-all;line-height:150%;" class="b_size">$msg$</div></td></tr>', '</table>', '</div>', '<div class="cnfx_status" style="display:$statusdisp$;">', '<input id="recordstatus" type="checkbox" $checked$/><label for="recordstatus">$recordinfo$</label>', '</div>', '<div class="cnfx_btn">', '<input class="$confirmcss$ btn" type="button" id="confirm" value="$confrim$">', '<input class="$cancelcss$ btn" type="button" id="cancel" style="display:$caceldisp$;" value="$cancel$">', '<input class="$nevercss$ btn" type="button" id="never" style="display:$neverdisp$;" value="$never$">', '</div>', '</div>']).replace({
            sStyle: aH.style || '',
            image_path: getPath("image", true),
            msg: aH.msg,
            caceldisp: aH.mode == "alert" ? "none" : "",
            imgdisp: aH.mode == "prompt" ? "none" : "",
            recordinfo: aH.recordInfo,
            statusdisp: aH.enableRecord ? "" : "none",
            checked: aH.defaultChecked ? "checked" : "",
            width: aH.width - 100,
            height: aH.height - 83,
            confrim: bpi,
            confirmcss: getAsiiStrLen(bpi) > 5 ? "" : "wd2",
            cancel: brQ,
            cancelcss: getAsiiStrLen(brQ) > 5 ? "" : "wd2",
            never: beb,
            neverdisp: beb ? '' : 'none',
            nevercss: getAsiiStrLen(beb) > 5 ? "" : "wd2"
        }),
        nWidth: aH.width,
        nHeight: aH.height,
        onload: function(){
            var bJ = this, aEq = bJ.S("confirm"), cMD = bJ.S("cancel"), bIt = bJ.S("never");
            
            
            
            
            
            
            
            
            addEvents([aEq, cMD, bIt], {
                click: function(ag){
                    var ar = getEventTarget(ag);
                    if (ar == aEq) {
                        uq = bJ.S("recordstatus").checked;
                        aGc = 1;
                    }
                    else 
                        if (ar == bIt) {
                            aGc = 3;
                        }
                    bJ.close();
                }
            });
            callBack.call(bJ, aH.onload);
        },
        onshow: function(){
            this.S("confirm").focus();
            callBack.call(this, aH.onshow);
        },
        
        onbeforeclose: function(){
            try {
            
                callBack.call(this, aH.onreturn, [aGc == 1, uq, aGc]);
            } 
            catch (aR) {
            }
            return true;
        }
    });
}










function alertBox(aH){
    confirmBox(extend({
        mode: "alert"
    }, aH))
}













function promptBox(aH){
    var aQq = false, czA = aH.onreturn;
    aH.onreturn = function(ba){
        var ad = this;
        callBack.call(ad, czA, [aQq || ba, ad.S("txt").value]);
    };
    aH.msg = T(['<div style="margin:0 10px 10px;" class="bold">$msg$</div>', '<div style="margin:10px 10px 5px;"><input type="text" id="txt" style="width:100%;" class="txt" value="$defaultValue$"/></div>', '<div style="margin:0 10px 10px;" class="f_size addrtitle">$description$</div>']).replace(aH);
    confirmBox(extend({
        mode: "prompt",
        height: 160,
        onload: function(){
            var ad = this;
            addEvent(ad.S("txt"), "keydown", function(ag){
                if (ag.keyCode == 13) {
                    aQq = true;
                    ad.close();
                }
            });
        },
        onshow: function(){
            this.S('txt').select();
            this.S("txt").focus();
        }
    }, aH));
}











function loadingBox(aH){
    if (!callBack(aH.oncheck)) {
        var cr = new QMDialog({
            sId: "LoAdINgBOx",
            sTitle: aH.model + "ģ�������...",
            nWidth: 400,
            nHeight: 200,
            sBodyHtml: T(['<div style="text-align:center;padding:58px;">', '<img id="load" src="$images_path$ico_loading2.gif">', '<span id="err" style="display:none;">$model$ģ�����ʧ��</span>', '</div>']).replace(extend(aH, {
                images_path: getPath("image")
            })),
            onclose: function(){
                cr = null;
            }
        });
        if (aH.js) {
            var mE = [];
            E(typeof aH.js == "string" ? [aH.js] : aH.js, function(nx){
                mE.push(getFullResSuffix(nx));
            });
            loadJsFileToTop(getPath("js"), mE);
        }
        waitFor(function(){
            return callBack(aH.oncheck);
        }, function(ba){
        
            if (!cr) {
                return;
            }
            if (!ba) {
                show(cr.S("load"), false);
                show(cr.S("err"), true);
            }
            else {
                cr.close(true);
                callBack(aH.onload);
            }
        })
    }
    else {
        callBack(aH.onload);
    }
}






var QMAXInfo = {
    brP: {
        path: "/activex/",
        cab: "TencentMailActiveX.cab",
        exe: "TencentMailActiveXInstall.exe",
        obj: [["TXGYMailActiveX.ScreenCapture", "TXGYMailActiveX.UploadFilePartition", "TXGYMailActiveX.Uploader", "TXFTNActiveX.FTNUpload", "TXGYMailActiveX.DropFile"], ["FMO.ScreenCapture", "TXGYUploader.UploadFilePartition", "FMO.Uploader", "TXFTNActiveX.FTNUpload", ""]],
        available: ["ScreenCapture", "Uploader", "FTNUpload", "DropFile", "UploadFilePartition"],
        lastVer: ["1.0.1.31", "1.0.1.29", "1.0.1.31", "1.0.0.14", "1.0.0.8"],
        miniVer: [(getDomain() == "foxmail.com") ? "1.0.0.5" : "1.0.0.28", "1.0.1.28", "1.0.1.28", "1.0.0.11", "1.0.0.7"]
    },
    
    bsE: {
        path: "/xpi/",
        xpi: "TencentMailPlugin.xpi",
        
        obj: ["ScreenCapture", "", "Uploader", "FTNUpload", ""],
        available: ["ScreenCapture", "Uploader", "FTNUpload"],
        name: ["QQMail Plugin", "", "QQMail Plugin", "Tencent FTN plug-in", "QQMail Plugin"],
        type: ["application/x-tencent-qmail", "", "application/x-tencent-qmail", "application/txftn", "application/x-tencent-qmail"],
        lastVer: ["1.0.1.32", "", "1.0.1.32", "1.0.0.1", "1.0.0.0"],
        miniVer: ["1.0.0.28", "", "1.0.1.28", "1.0.0.1", "1.0.0.0"]
    },
    
    bsC: {
        path: "/crx/",
        crx: "TencentMailPlugin.crx",
        exe: "QQMailWebKitPlugin.exe",
        obj: ["ScreenCapture", "", "Uploader", "FTNUpload", ""],
        available: ["ScreenCapture", "FTNUpload"],
        name: ["QQMail Plugin", "", "QQMail Plugin", "Tencent FTN plug-in", ""],
        type: ["application/x-tencent-qmail-webkit", "", "application/x-tencent-qmail-webkit", "application/txftn-webkit", ""],
        lastVer: ["1.0.1.32", "", "1.0.1.32", "1.0.0.1", ""],
        miniVer: ["1.0.0.28", "", "1.0.1.28", "1.0.0.1", ""]
    },
    
    bsB: {
        path: "/crx/",
        pkg: "TencentMailPluginForMac.pkg",
        obj: ["ScreenCapture", "", "Uploader", "", ""],
        available: ["ScreenCapture", "Uploader"],
        name: ["QQMailPlugin", "", "QQMailPlugin", "", ""],
        type: ["application/x-tencent-qmail-webkit", "", "application/x-tencent-qmail-webkit", "", ""],
        lastVer: ["1.0.1.32", "", "1.0.1.32", "", ""],
        miniVer: ["1.0.0.28", "", "1.0.1.28", "", ""]
    },
    
    
    
    
    mbAblePlugin: (gbIsWin &&
    ((gbIsFF && gsFFVer.split(".")[0] >= 3 && (gsFFVer.split(".")[1] > 0 || gsFFVer.split(".")[2] >= 8 || parseInt(navigator.buildID.substr(0, 8)) >= 20090701)) ||
    (gbIsChrome && ("" + gsChromeVer).split('.')[0] >= 6) ||
    (gbIsSafari && gsAgent.indexOf("se 2.x metasr 1.0") < 0) ||
    (gbIsOpera) ||
    (gbIsQBWebKit))) ||
    (gbIsMac && gsMacVer >= 10.6 &&
    (gbIsFF && parseFloat(gsFFVer) >= 3.6 ||
    gbIsChrome && parseFloat(gsChromeVer) >= 8 ||
    gbIsSafari && parseFloat(gsSafariVer) >= 5)),
    
    
    
    cxy: true,
    
    getTitle: function(){
        return gbIsIE ? "�ؼ�" : "���";
    },
    
    
    
    
    getinfo: function(){
        if (QMAXInfo.mbAblePlugin) {
            if (gbIsWin) {
                if (gbIsIE) {
                    return QMAXInfo.brP.available;
                }
                if (gbIsFF) {
                    return QMAXInfo.bsE.available;
                }
                if (gbIsChrome || gbIsSafari || gbIsOpera || gbIsQBWebKit) {
                    return QMAXInfo.bsC.available;
                }
            }
            if (gbIsMac) {
                return QMAXInfo.bsB.available;
            }
        }
        
        return [];
    },
    
    
    
    
    cDe: function(){
    
    
    
    
    
    
    
    
    },
    
    
    
    
    
    
    
    
    
    
    installer: function(ao, pG){
        var bz = this.get("whole"), ha = "";
        if (/^online/.test(ao)) {
            ha = bz.cab || bz.xpi || (gbIsChrome && bz.crx);
        }
        else 
            if (/^download/.test(ao)) {
                if (pG) {
                    if (pG == 'chrome') {
                        bz = this.get("whole", 'WebKit');
                    }
                    else {
                        bz = this.get("whole", pG);
                    }
                }
                if (pG) {
                    ha = bz.exe || bz.pkg;
                }
                else {
                    ha = (!gbIsChrome && bz.exe) || bz.pkg;
                }
                
                if (pG == 'chrome') {
                    ha = bz.crx;
                }
            }
        if (ha && /Abs$/.test(ao)) {
            ha = bz.path + ha;
        }
        return ha;
    },
    
    
    
    
    
    
    
    get: function(PR, anq){
        if (!anq) {
            gbIsIE && (anq = "IE");
            gbIsFF && (anq = 'FF');
            (gbIsChrome || gbIsSafari || gbIsOpera || gbIsQBWebKit) && (anq = "WebKit");
            !gbIsIE && gbIsMac && (anq = "mac");
        }
        
        var kk = {
            IE: this.brP,
            FF: this.bsE,
            WebKit: this.bsC,
            mac: this.bsB
        }[anq];
        
        if (!this.cxy) {
            this.cDe();
        }
        
        return PR == "whole" ? kk : kk[PR];
    }
};






function createActiveX(Bb, al){
    if (!gbIsIE) {
        return createPlugin(Bb, false, al);
    }
    
    if (Bb >= 0 && Bb <= 4) {
        var ji = QMAXInfo.get("obj"), ke;
        for (var i = 0, len = ji.length; i < len; i++) {
            try {
                if (ke = new ActiveXObject(ji[i][Bb])) {
                    return ke;
                }
            } 
            catch (aR) {
            }
        }
    }
    return null;
}








function detectActiveX(Bb, Yf, bbn){
    if (!gbIsIE) {
        return detectPlugin(Bb, Yf, bbn);
    }
    
    var acy = typeof(bbn) == "undefined", KR = false, HF = acy ? createActiveX(Bb) : bbn, xQ = getActiveXVer(HF);
    
    
    
    
    if (HF && xQ) {
    
        if (Yf != 1 && Yf != 2) {
            KR = true;
        }
        else 
            if (parseInt(xQ.split(".").join("")) >=
            parseInt(QMAXInfo.get(Yf == 1 ? "miniVer" : "lastVer")[Bb].split(".").join(""))) {
                KR = true;
            }
        
        if (acy) {
            delete HF;
            HF = null;
        }
    }
    return KR;
}






function getActiveXVer(bW){
    if (!gbIsIE) {
        return getPluginVer(bW);
    }
    
    var xQ = "", HF;
    try {
        HF = typeof(bW) == "number" ? createActiveX(bW) : bW;
        xQ = HF &&
        (HF.version ? HF.version : "1.0.0.8") ||
        "";
    } 
    catch (aR) {
    }
    
    return xQ;
}






function checkInstallPlugin(uM){
    if (!QMAXInfo.mbAblePlugin) {
        return false;
    }
    
    var aX = QMAXInfo.get("name")[uM], aK = QMAXInfo.get("type")[uM], FH = navigator.plugins;
    if (FH && aX) {
        for (var i = FH.length - 1; i >= 0; i--) {
            for (var j = FH[i].length - 1; j >= 0; j--) {
                if (FH[i].name.indexOf(aX) != -1 && FH[i][j].type == aK) {
                
                    if (uM != 3 && (gsAgent.indexOf("vista") > -1 || /nt 6/gi.test(gsAgent)) && aK == "application/x-tencent-qmail") {
                        var cfC = FH[i].description.split('#')[1];
                        if (!cfC) {
                        
                            continue;
                        }
                    }
                    return true;
                }
            }
            
            
        }
    }
    return false;
}









function createPlugin(uM, cvS, al){
    var lB = null;
    al = al || getMainWin();
    switch (uM) {
        case 0:
        case 2:
        case 4:
            if (gbIsSafari) {
                createPlugin.bLN(uM, al);
            }
            lB = createPlugin.bLN(uM, getTop());
            break;
        case 3:
            lB = createFTNPlugin(al);
            break;
    }
    
    
    if (!cvS && checkInstallPlugin(uM)) {
    
        getTop().ossLog("delay", "all", T(['stat=ff_addon', '&type=%type%&info=%info%'], '%').replace({
            type: !lB ? "failcreatePlugin" : "successcreatePlugin",
            info: ["ver:", gsFFVer, ",pluginId:", uM, ",brtpe:", (gbIsFF ? 1 : (gbIsChrome ? 2 : (gbIsSafari ? 3 : (gbIsOpera ? 4 : 5))))].join("")
        }));
    }
    return lB;
}

createPlugin.bLN = function(uM, al){
    var mB, lB = null, ber = gbIsFF ? "application/x-tencent-qmail" : "application/x-tencent-qmail-webkit";
    al = al || getTop();
    if (checkInstallPlugin(uM)) {
        var Py = "QQMailFFPluginIns";
        if (!(mB = S(Py, al))) {
            insertHTML(al.document.body, "beforeEnd", T('<embed id="$id$" type="$type$" hidden="true"></embed>').replace({
                type: ber,
                id: Py
            }));
            mB = S(Py, al);
        }
        var acs = {
            0: "CreateScreenCapture",
            2: "CreateUploader",
            4: "CreateDragDropManager"
        }[uM];
        if (typeof mB[acs] != "undefined") {
            lB = mB[acs]();
            
            if (uM == 0) {
                lB.OnCaptureFinished = function(){
                };
            }
            else 
                if (uM == 2) {
                    lB.OnEvent = function(){
                    };
                }
        }
    }
    return lB;
};

createPlugin.bLV = function(al, Yr){
    var mB = null, ber = gbIsFF ? "application/txftn" : "application/txftn-webkit", aTQ = Yr || "npftnPlugin";
    al = al || getTop();
    if (!(mB = S(aTQ, al))) {
        insertHTML(al.document.body, "beforeEnd", T('<embed id="$id$" type="$type$" width="0" height="0"></embed>').replace({
            type: ber,
            id: aTQ
        }));
        mB = S(aTQ, al);
        if (mB) {
            mB.onEvent = function(){
            };
        }
    }
    return mB;
};







function createFTNPlugin(al, Yr){
    if (!checkInstallPlugin(3)) {
        return null;
    }
    createPlugin.bLV(al, Yr);
    var mB = createPlugin.bLV(getTop(), Yr);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if (Yr) {
    
        getTop().ossLog("delay", "all", T(['stat=ff_addon', '&type=%type%&info=%info%'], '%').replace({
            type: mB && mB.Version ? "successcreatePlugin" : "failcreatePlugin",
            info: ["ver:", gsFFVer, ",pluginId:3,insId:", Yr].join("")
        }));
    }
    
    return mB.Version ? mB : null;
}






function detectPlugin(uM, Yf, crw){

    var KR = false;
    var aVt = crw || createPlugin(uM, true), xQ = getPluginVer(aVt);
    
    if (aVt && xQ) {
        if (Yf != 1 && Yf != 2) {
            KR = true;
        }
        else 
            if (parseInt(getPluginVer(aVt).split(".").join("")) >=
            parseInt(QMAXInfo.get(Yf == 1 ? "miniVer" : "lastVer")[uM].split(".").join(""))) {
                KR = true;
            }
    }
    return KR;
}



function getPluginVer(bW){
    var HF, xQ = "";
    try {
        HF = typeof(bW) == "number" ? createPlugin(bW, true) : bW;
        xQ = (HF && HF.Version) || "";
    } 
    catch (aR) {
    }
    
    return xQ;
}








































function initDialog(aL, wy, aJ, uB, po){
    new (getTop().QMDialog)({
        sid: aL,
        sTitle: wy,
        sUrl: aJ,
        nWidth: uB,
        nHeight: po
    });
}








function requestShowTip(arp, aZl, al, dI){
    var aN = T('/cgi-bin/tip?sid=$sid$&args=$dom$,$tip$&r=$r$').replace({
        sid: getSid(),
        dom: arp,
        tip: aZl,
        r: Math.random()
    });
    
    
    QMAjax.send(aN, {
        method: 'GET',
        onload: function(ba, cq, hz){
            if (ba && cq.indexOf('oTop.QMTip') > 0) {
                if (!dI || dI(cq, hz)) {
                    globalEval(cq, al);
                }
            }
        }
    });
}

function detectCapsLock(kC, cqU, gk){
    if (!kC) {
        return;
    }
    function showTips(ag){
        var ay = ag.target || ag.srcElement, cU = calcPos(ay), gF = cqU || S("capTip");
        
        function getStyle(){
            return ["z-index:20;position:absolute;background:#fdf6aa;padding:1px;", "border:1px solid #dbc492;border-right:1px solid #b49366;border-bottom:1px solid #b49366;", "left:", cU[3], "px;", "top:", (cU[2] + 1), "px;"].join("");
        }
        if (!gF) {
            insertHTML((gk || document).body, "afterBegin", '<div id="capTip" style="' + getStyle() + '">��д���Ѵ�</div>');
        }
        else {
            gF.style.cssText = getStyle();
        }
    }
    function hideTips(){
        show(S("capTip", (gk || document)), false);
    }
    var aml = -1;
    addEvents(kC, {
        keydown: function(ag){
            var qS = ag.keyCode || ag.charCode
            
            if (qS == 20) {
                if (aml == 0) {
                    showTips(ag);
                    aml = 1;
                }
                else 
                    if (aml == 1) {
                        hideTips();
                        aml = 0;
                    }
                
            }
        },
        keypress: function(ag){
            var qS = ag.keyCode || ag.charCode, MC = ag.shiftKey;
            
            if ((qS >= 65 && qS <= 90 && !MC) ||
            (qS >= 97 && qS <= 122 && MC)) {
                aml = 1
                showTips(ag);
            }
            else 
                if ((qS >= 97 && qS <= 122 && !MC) || (qS >= 65 && qS <= 90 && MC)) {
                    aml = 0;
                    hideTips();
                }
                else {
                    hideTips();
                }
        },
        blur: function(){
            hideTips();
        }
    });
}







function calcMainFrameDomInGlobalPos(crK, aXm){
    var cU = calcPos(crK), bFx = calcPos(S("mainFrame", getTop())), bEn = getMainWin().document, bFv = bEn.documentElement, bEi = bEn.body, eZ = cU[3] + bFx[3] -
    (bFv.scrollLeft || bEi.scrollLeft || 0), cH = cU[0] + bFx[0] -
    (bFv.scrollTop || bEi.scrollTop || 0), cO = cU[4], dv = cU[5];
    
    return aXm == "json" ? {
        top: cH,
        bottom: cH + dv,
        left: eZ,
        right: eZ + cO,
        width: cO,
        height: dv
    } : [cH, eZ + cO, cH + dv, eZ, cO, dv];
}


















function beforeFrameHtmlUnload(){
    var dXR = ["ftnupload_self", "ftnupload_attach"];
    
    var aBF = QMDialog();
    for (var i in aBF) {
        if (aBF[i].option("status") == "min") {
        
            setTimeout(function(){
                aBF[i].max();
            }, 10);
            return "���г����������У�ȷ���رգ�";
        }
    }
}




function showAdvanceSearchMenu(){
    var bF = [{
        sId: "1",
        sItemValue: "�鿴���и���"
    }, {
        sId: "2",
        sItemValue: "�߼�����..."
    }], eZ = document.body.clientWidth - 98, cH = 60;
    
    new (getTop().QMMenu)({
        oEmbedWin: window,
        nX: eZ,
        nY: cH,
        nWidth: 95,
        oItems: bF,
        onitemclick: function(aL){
            var bOs = {
                sid: getTop().getSid()
            };
            if (aL == "1") {
                var aN = T("/cgi-bin/mail_list?topmails=0&sid=$sid$&s=search&folderid=all&page=0&subject=&sender=&receiver=&searchmode=attach&advancesearch=0").replace(bOs);
                getTop().getMainWin().location.href = aN;
            }
            else {
                var aN = T('/cgi-bin/folderlist?sid=$sid$&t=searchoption&advancesearch=2&loc=frame_html,,9').replace(bOs);
                new (getTop().QMDialog)({
                    sId: "advsearch",
                    sTitle: "�ʼ��߼�����",
                    sUrl: aN,
                    nWidth: 461,
                    nHeight: 378
                });
            }
        }
    });
}





function backHome(cNJ){
    getMainWin().location.href = T('/cgi-bin/today?sid=$sid$&loc=backhome,,,$locid$').replace({
        sid: getSid(),
        locid: cNJ || 140
    });
}






function resizeFolderList(){
    var bgg = S("SysFolderList"), bfK = S("ScrollFolder"), iQ = S("folder");
    
    if (bgg && bfK && iQ) {
        var aUM = ["auto", "hidden"], bBp = iQ.clientHeight, bzl = bgg.offsetHeight, ade = bBp - bzl, bax = ade < 50 ? 0 : 1;
        iQ.style.overflow = aUM[bax];
        iQ.style.overflowX = aUM[1];
        bfK.style.overflow = aUM[1 - bax];
        bfK.style.height = bax ? (bBp - bzl) + "px" : "auto";
    }
}






function setTopSender(cV){
    var afn = getGlobalVarValue("DEF_MAIL_FROM") || '';
    switch (cV && cV.action) {
        case "setting4":
            if (afn != cV.email) {
                setUserInfo("addr", cV.email);
                setDefaultSender(cV.email);
                changeStyle(cV.skin, cV.logo);
                getTop().skin_path = cV.skin;
                clearCache(["css", getPath("style"), "skin"]);
            }
            
            reloadSignature();
            break;
    }
}




function bindAccount(){
    var aJF = S("useraddr"), bdd = S("useraddrArrow"), yj = getBindAccount(), Zb = {
        nHeight: 10,
        sItemValue: '<div style="background:#CCC; height:1px; margin-top:5px; overflow:hidden;"></div>'
    }, bF = [], bOG = aJF && subAsiiStr(aJF.innerHTML, 20, "...");
    
    if (!aJF || !yj) {
        return;
    }
    
    if (yj.qq.length + yj.biz.length) {
        bF.push({
            sItemValue: '<a id="manage" href="javascript:;" style="float: right;">����</a><span class="ml">�����ʺţ�</span>'
        }, {
            sId: 'self',
            bDisSelect: true,
            sItemValue: T('<div class="unread_num"><span class="ico_unreadnum"></span>$unread$</div><input type="button" class="ft_upload_success" id="self"/><span style="overflow:hidden;margin-left:0" >$myemail$</span>').replace(extend({
                myemail: subAsiiStr(bOG, 19, "...")
            }, yj.self))
        });
        E(['qq', 'biz'], function(bt, fR){
            var bi = yj[bt].length;
            if (bi && fR) {
                bF.push(Zb);
            }
            for (var bi = yj[bt].length, i = 0; i < bi; i++) {
                var az = yj[bt][i], hf = subAsiiStr(az['email'], 19, "...");
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                bF.push({
                    aK: bt,
                    sId: az.uin,
                    sItemValue: ['<div class="unread_num"><span class="ico_unreadnum"></span>', az.unread, '</div>', '<span style="overflow:hidden;">', hf, '</span>'].join('')
                });
            }
        });
    }
    else {
    
        bF.push({
            sItemValue: '<span>��ĵ�ǰ�����ʺţ�</span>'
        }, {
            sItemValue: T('<strong class="ml black">$myemail$</strong>').replace({
                myemail: bOG
            })
        }, Zb, {
            sItemValue: '<span>ӵ�б������䣬�������ڲ�ͬ��;��</span>'
        }, {
            sItemValue: '<span>���ǿ��Թ�����һ��</span>'
        }, {
            sItemValue: '<span>���������л���ͬ�����䡣</span>'
        }, {
            nHeight: 35,
            sItemValue: '<input id="bind" type="button" class="btn ml"value="���뱸������" style="margin-top:5px;padding:0 10px;overflow:visible;"/>&nbsp; <a href="/cgi-bin/readtemplate?sid=$sid$&t=attrpwd_sec" target="mainFrame" id="bind_a">������������</a>'
        });
    }
    if (bdd) {
        bdd.style.visibility = "visible";
        bdd.parentNode.onclick = function(){
            var FD = calcPos(aJF.parentNode);
            new QMMenu({
                sId: "bindaccount",
                sClassName: "bindacc qmpanel_shadow",
                
                nX: FD[3],
                nY: FD[2],
                nWidth: 235,
                nMinWidth: 160,
                nItemHeight: 25,
                oItems: bF,
                onitemclick: function(aL, by){
                    if (by.aK == 'biz') {
                        submitSwitchForm();
                    }
                    else {
                        goUrlTopWin(T('/cgi-bin/login?vt=relate&uin=$uin$&old_sid=$sid$').replace({
                            uin: aL,
                            sid: getSid()
                        }));
                    }
                },
                onload: function(){
                    var ad = this, bMB = ad.S("self"), dE;
                    if (bMB) {
                        dE = bMB.parentNode;
                        setClass(dE, dE.className + ' settingtable');
                    }
                    
                    addEvent(ad.S("manage"), 'click', function(ag){
                    
                        goUrlMainFrm(T("/cgi-bin/setting4?fun=list&acc=1&sid=$sid$&go=bind").replace({
                            sid: getSid()
                        }));
                        ad.close();
                        preventDefault(ag);
                    });
                    
                    addEvent(ad.S("bind"), 'click', function(ag){
                    
                        goUrlMainFrm(T("/cgi-bin/readtemplate?sid=$sid$&t=attrpwd_sec_alone&s=regemail&by=beiyong").replace({
                            sid: getSid()
                        }));
                        ad.close();
                        preventDefault(ag);
                    });
                    
                    addEvent(ad.S("bind_a"), 'click', function(ag){
                    
                        goUrlMainFrm(T("/cgi-bin/readtemplate?sid=$sid$&t=attrpwd_sec").replace({
                            sid: getSid()
                        }));
                        ad.close();
                        preventDefault(ag);
                    });
                    
                }
            });
        };
    }
}

bindAccount.dJM = function(){
    var ad = arguments.callee;
    if (ad.Cq) {
    }
    
};




function initAddress(dI){
    function bCA(){
        loadJsFileToTop(getPath("js"), [getFullResSuffix("qmaddress.js"), getFullResSuffix("qmlinkman.js")]);
    }
    bCA();
    if (typeof dI == "function") {
        dI("loading");
    }
    
    var ae = getTop();
    waitFor(function(){
        return ae.QMAddress && ae.QMLinkman;
    }, function(ba){
        if (ba) {
            ae.QMAddress.initAddress(dI);
        }
        else {
            bCA();
            setTimeout(initAddress, 500);
        }
    });
}




function getPhotoCGI(){
    return [location.protocol, "//", location.host, "/cgi-bin/upload?sid=", getTop().getSid()].join("");
}





function setUserCookie(aC, bt, vD, cB, pE, BV){
    var aX = aC;
    if (aC) 
        aX = aX + "_" + getUin();
    
    
    
    
    
    var ccu = {
        "sid": 1,
        "username": 1,
        "foxacc": 1,
        "reloadurl": 1,
        "reloadurl": 1,
        "m3gmsid": 1,
        "mcookie": 1,
        "msid": 1,
        "defaultf": 1,
        "qm_flag": 1,
        "QFRIENDUNREADCNT": 1,
        "RSSUNREADCNT": 1,
        "rss_domain": 1,
        "CCSHOW": 1,
        "qqmail_activated": 1,
        "qqmail_alias_default": 1,
        "qqmail_from": 1,
        "wimrefreshrun": 1,
        "new": 1,
        "qm_sk": 1,
        "qm_ssum": 1,
        "qq2self_sid": 1,
        "exstype": 1,
        "lockurl": 1,
        "new_mail_num": 1
    };
    
    if (ccu[aC] == 1) {
        var Pg = getCookie(aC), ib = Pg ? Pg.split("|") : [], eL = getUin(), cZ = eL + "&" + bt, qH = true;
        
        
        for (var i = 0; i < ib.length; i++) {
            if (ib[i].match(eL)) {
                ib[i] = cZ;
                qH = false;
            }
        }
        
        Pg = ib.join("|");
        qH && (Pg += (Pg == "" ? "" : "|") + cZ);
        return setCookie(aC, Pg, vD, cB, pE, BV);
    }
    else 
        return setCookie(aX, bt, vD, cB, pE, BV);
    
}





function getUserCookie(aC){
    var aX = aC;
    if (aC) 
        aX = aX + "_" + getUin();
    
    
    
    
    
    var iM = getCookie(aX);
    
    if (iM) {
        return iM
    }
    else {
        var Pg = getCookie(aC), ib = Pg ? Pg.split("|") : [], eL = getUin();
        
        for (var i = 0; i < ib.length; i++) {
            if (ib[i].match(eL)) {
                return ((ib[i].split("&"))[1] || ib[i]);
            }
        }
        return Pg;
    }
    
}




function deleteUserCookie(aC, cB, pE){
    var aX = aC;
    if (aC) 
        aX = aX + "_" + getUin();
    deleteCookie(aX, cB, pE);
    deleteCookie(aC, cB, pE);
}





function setUserCookieFlag(aC, fR, CH, aXd){
    var aX = aC;
    if (aC) 
        aX = aX + "_" + getUin();
    return setCookieFlag(aX, fR, CH, aXd)
}





function getUserCookieFlag(aC){
    var aX = aC;
    if (aC) 
        aX = aX + "_" + getUin();
    if (getCookie(aX) != "") {
        return getCookieFlag(aX);
    }
    else {
        return getCookieFlag(aC);
    }
}








function getReaderData(aJ){
    if (window != getTop()) {
        getTop().getReaderData(aJ);
    }
    else {
        var JN = arguments.callee;
        removeSelf(JN.jsObj);
        JN.jsObj = loadJsFile(aJ + "&r=" + Math.random(), false, document);
    }
}






function getReaderDataInterval(aJ, Ez){
    if (window != getTop()) {
        return getTop().getReaderDataInterval(aJ, Ez);
    }
    else {
        var JN = arguments.callee, aN = (window.gsRssDomain || '') + "/cgi-bin/reader_data2?sid=" + getSid() + "&t=rss_data.js";
        
        if (JN.nTimer) {
            clearInterval(JN.nTimer);
        }
        
        function Cv(){
            getReaderData(aN);
        }
        
        JN.nTimer = setInterval(Cv, Ez ||
        (window.gnRssInterval * 1000) ||
        (10 * 60 * 1000));
        Cv();
    }
}






var QMFullTextSearch = {};
(function(){
    if (window == getTop()) {
        QMFullTextSearch.cGF = "�ʼ�ȫ������...";
        
        
        
        
        
        QMFullTextSearch.search = function(dC){
            var aaW = S("subject"), az = {
                sid: getSid(),
                searchmode: dC || "",
                stat: dC == "attach" ? "8" : "6"
            };
            
            az.subject = az.sender = az.receiver = aaW.getAttribute("focus") ==
            "true" &&
            dC != "attach" ? encodeURI(aaW.value) : "";
            
            QMPageInit.aUA(function(){
                goUrlMainFrm(T(['/cgi-bin/mail_list?sid=$sid$&s=search&folderid=all&page=0&subject=$subject$&sender=$sender$', '&receiver=$receiver$&searchmode=$searchmode$&topmails=0&advancesearch=0&loc=frame_html,,,$stat$']).replace(az), false);
            });
        };
        
        QMFullTextSearch.aJl = function(ao){
            return function(){
                var aaW = S("subject"), ju = {
                    focus: [aaW.getAttribute("focus") != "true", "", "", "true"],
                    blur: [aaW.value == "", QMFullTextSearch.cGF, "#a0a0a0", "false"]
                }[ao];
                
                if (ju[0]) {
                    aaW.value = ju[1];
                    aaW.style.color = ju[2];
                    aaW.setAttribute("focus", ju[3]);
                }
            };
        };
        
        QMFullTextSearch.onkeydown = function(ag){
            if (ag.keyCode == 13) {
                QMFullTextSearch.search();
            }
        };
        
        QMFullTextSearch.onfocus = QMFullTextSearch.aJl("focus");
        QMFullTextSearch.onblur = QMFullTextSearch.aJl("blur");
    }
})();





function doSearch(){
    QMPageInit.aUA(function(){
        var fI = S("frmSearch");
        fI.sender.value = fI.subject.value;
        fI.receiver.value = fI.subject.value;
        fI.keyword.value = fI.subject.value;
        fI.combinetype.value = "or";
        submitToActionFrm(fI);
    });
    return false;
}





function audioPlay(ah){
    var ae = getTop();
    if (!ah.container) {
        ah.container = S('mp3player_container', ae.getMainWin());
    }
    if (ah.global && !ah.globalcontainer) {
        ah.globalcontainer = S('gplayer_container', ae);
    }
    
    if (!ae.QMPlayer) {
        loadJsFileToTop(getPath('js'), [getFullResSuffix('qmplayer.js')]);
    }
    waitFor(function(){
        return !!ae.QMPlayer;
    }, function(ba){
        if (ba) {
            ae.QMPlayer.createInstance(ah);
        }
        else 
            if (ah.container) {
                ah.container.innerHTML = "����������ʧ��";
            }
    });
}




function audioStop(){
    var nK = getTop().QMPlayer;
    nK && nK.stop();
}














function setPlayer(ah){
    var ae = getTop();
    
    function bMS(ah){
        if (!ae.QMPlayer) {
            setTimeout(function(){
                bMS(ah);
            }, 200);
            return false;
        }
        
        var bh = "qqmailMediaPlayer" + (ah.id || ""), au = ah.win || window;
        
        if (!au || au[bh]) {
            return false;
        }
        
        if (!ah.container &&
        !(ah.container = S("mp3player_container", au))) {
            return false;
        }
        
        return (au[bh] = new ae.QMPlayer()).setup(ah);
    }
    
    if (!ae.QMPlayer) {
        loadJsFile(getPath("js") + getFullResSuffix("qmplayer.js"), true, ae.document);
    }
    
    return bMS(ah);
}













function playUrl(lr){
    var nK = (lr.win || window)["qqmailMediaPlayer" +
    (lr.id || "")];
    
    if (!nK) {
        setPlayer(lr);
    }
    else {
        nK.openUrl(lr.url, lr.dispInfo);
    }
}









function stopUrl(lr){
    if (!lr) {
        lr = {};
    }
    
    try {
        (lr.win || window)["qqmailMediaPlayer" + (lr.id || "")].stop();
    } 
    catch (aR) {
    }
}











function searchMusic(jA, jF, bA){
    if (window != getTop()) {
        return getTop().searchMusic(jA, jF, bA);
    }
    jA = jA || "";
    jF = jF || "";
    var agd = arguments.callee, bdX = [jA, jF].join("@");
    
    agd.fCallBack = function(mr){
        var ci, aN = "", aDp = [];
        if (!mr.contentWindow.gMusicInfo || !(ci = mr.contentWindow.gMusicInfo.list)) {
            return bA(aDp);
        }
        
        for (var i = 0, aQ = ci.length; i < aQ; i++) {
            var bz = {
                song: ci[i].songname.replace(/<\/?strong>/gi, ""),
                singer: ci[i].singername.replace(/<\/?strong>/gi, "")
            }, aEb = htmlDecode(ci[i].songurl).replace(/\|/g, "").split(";");
            
            
            for (var j = 0, aWp = aEb.length; j < aWp; j += 2) {
            
            
            
                if (aEb[j] &&
                aEb[j].indexOf("qqmusic.qq.com") == -1) {
                    bz.url = aEb[j].replace(/^(FI|SI|AN|QQ)/, "");
                    aDp.push(bz);
                    break;
                }
            }
        }
        agd.Ab[bdX] = aDp;
        bA(aDp);
    };
    
    if (!jA && !jF) {
        return bA([]);
    }
    if (!agd.Ab) {
        agd.Ab = {};
    }
    if (agd.Ab[bdX]) {
        return bA(agd.Ab[bdX]);
    }
    
    agd.dyO = createBlankIframe(getTop(), {
        id: "getMusicUrlFromSoSo",
        style: "display:none;",
        header: T(['<script>', 'function searchJsonCallback(a)', '{', 'window.gMusicInfo = a;', '}', '<\/script>', '<script src="$domain$/fcgi-bin/fcg_search_xmldata.q?w=$song$%20$singer$&source=3&r=$rand$"><\/script>', ]).replace({
            domain: (location.protocol == "https:" ? 'https://ptlogin2.mail.qq.com' : 'http://cgi.music.soso.com'),
            song: encodeURI(jA),
            singer: encodeURI(jF),
            rand: Math.random()
        }),
        destroy: true,
        onload: function(al){
            searchMusic.fCallBack(this);
        }
    });
}








function getMusicUrl(jA, jF, bA){
    searchMusic(jA, jF, function(Uk){
        if (Uk.length > 0) {
            var j = 0, Lt = /\.mp3$/i;
            for (var i = 0; (gbIsMac || gbIsLinux) && i < Uk.length; i++) {
                if (Lt.test(Uk[i].url)) {
                    j = i;
                    break;
                }
            }
            debug(Uk[j].url);
            bA(Uk[j].song, Uk[j].singer, Uk[j].url, Uk);
        }
        else {
            bA(jA, jF, "", Uk);
        }
    }, 1);
}




function bCz(){









    var ae = getTop();
    ae.loadJsFileToTop(getPath("js"), [ae.getFullResSuffix("qqplus_kernel.js"), ae.getFullResSuffix("qqplus_ui.js")]);
}






function startUpQQPlus(dC, cLI){

    var Dh = S("qqplus_panel", getTop());
    if (Dh) {
    
        var brn = getUserCookie("wimrefreshrun");
        if (cLI && brn) {
            dC = brn == "1" ? "" : "ready";
        }
        
        if (dC == "ready") {
            return showQQPlusInfo("stop", {
                title: "�����¼�������칦��"
            });
        }
        
        bCz();
        showQQPlusInfo("load", {
            title: "���ڼ�����������..."
        });
        
        waitFor(function(){
            return window.QQPlusUI && window.QQPlusKernel;
        }, function(ba){
            if (ba) {
                QQPlusStartUp(getUin(), Dh);
            }
            else {
                showQQPlusInfo("stop", {
                    title: "�����������칦��ʧ�ܣ�������¼���"
                });
            }
            getMainWin().CheckQQPlusState && getMainWin().CheckQQPlusState();
        });
    }
}




function stopQQPlus(){
    getTop().QQPlusUI && getTop().QQPlusUI.stopQQPlus();
    getMainWin().CheckQQPlusState && getMainWin().CheckQQPlusState();
}





function confirmQQPlusOpreate(bPo){
    confirmBox({
        title: "����������ʾ",
        msg: T("��ȷ��Ҫ$opt$�������죿").replace({
            opt: bPo == "login" ? "��¼" : "�˳�"
        }),
        enableRecord: true,
        defaultChecked: getTop().getGlobalVarValue("DEF_QQPLUSAUTOLOGIN"),
        recordInfo: "���������Զ���¼",
        onreturn: function(ba, aLa){
            if (!ba) {
                return;
            }
            
            var cBO = getTop().getGlobalVarValue("DEF_QQPLUSAUTOLOGIN");
            if (cBO != aLa) {
                getTop().setGlobalVarValue("DEF_QQPLUSAUTOLOGIN", aLa);
                (new QMAjax("/cgi-bin/setting1", "POST")).send(T('sid=$sid$&Fun=submit&qqplus=$qqplus$').replace({
                    sid: getSid(),
                    qqplus: aLa ? 1 : 0
                }));
                var fh = getMainWin();
                if (fh.location.href.indexOf("/cgi-bin/setting1") >= 0 && S("qqplus", fh)) {
                    S("qqplus", fh).checked = aLa ? true : false;
                }
            }
            
            (bPo == "login" ? startUpQQPlus : stopQQPlus)();
        }
    });
}







function showQQPlusInfo(cX, aH){
    var Dh = S("qqplus_panel", getTop());
    if (Dh) {
        switch (cX) {
            case "stop":
                Dh.innerHTML = T(['<a nocheck="true" style="font-size:12px;font-weight:normal;padding:2px;" class="onlineman" ', 'title="$title$">', '<span title="$title$" class="ico_offline" style="margin:0px 3px 0 4px;" align="absmiddle"></span>', '</a>']).replace({
                    images_path: getPath("image"),
                    title: aH.title
                });
                Dh.onclick = function(){
                    confirmQQPlusOpreate("login");
                };
                break;
            case "custom":
                Dh.innerHTML = aH.html;
                Dh.onclick = aH.onclick;
                break;
            case "load":
            default:
                Dh.innerHTML = T(['<img src="$images_path$ico_loading3.gif" title="$title$" ', 'align="absmiddle" style="width:16px;height:16px;margin-left:10px;" />']).replace({
                    images_path: getPath("image"),
                    title: aH.title
                });
                Dh.onclick = function(){
                };
        }
        
        if (Dh.firstChild) {
            Dh.title = Dh.firstChild.title;
        }
        
        
        arguments.callee.sState = cX;
        
        return true;
    }
}





function checkQQRunning(){
    try {
        if ((new ActiveXObject("TimwpDll.TimwpCheck")).CheckQQRunning()) {
            var aGk = new ActiveXObject("SSOAxCtrlForPTLogin.SSOForPTLogin"), az = aGk.CreateTXSSOData();
            aGk.InitSSOFPTCtrl(0, az);
            var ccQ = aGk.CreateTXSSOData(), bIH = aGk.DoOperation(1, ccQ).GetArray("PTALIST"), aQ = bIH.GetSize();
            for (var aD = 0; aD < aQ; aD++) {
                var jf = bIH.GetData(aD).GetDWord("dwSSO_Account_dwAccountUin");
                if (jf == getUin()) {
                    return true;
                }
            }
        }
    } 
    catch (e) {
    }
    return false;
}




function startUpQQPlusMail(cut){
    if (!cut && checkQQRunning()) {
    
        return false;
    }
    bCz();
    waitFor(function(){
        return window.QQPlusUI && window.QQPlusKernel;
    }, function(ba){
        if (ba) {
            QQPlusMail.init(getUin());
        }
    });
}











function ftSendStatic(gE, cm){
    if (gE) {
        ossLog("realtime", "all", T('stat=exskick&sid=$sid$&uin=$uin$&log=$code$').replace({
            uin: cm || getTop().g_uin,
            sid: getSid(),
            code: gE
        }));
    }
}

var QMXfDownload = function(){

    this.aHv = 0;
    this.bLv = "";
}









QMXfDownload.prototype.init = function(){
    var tJ = null, ou = null;
    
    try {
        tJ = new ActiveXObject("QQIEHelper.QQRightClick.2");
    } 
    catch (e) {
        debug("x:" + e.message);
        this.aHv = 1;
        return;
    }
    
    this.bLv = ou = parseInt(tJ.GetVersion().split(".").pop());
    this.aHv = ou > 65 ? 3 : 2;
    delete tJ;
}

QMXfDownload.prototype.getStatus = function(){
    return this.aHv;
}

QMXfDownload.prototype.dl = function(aJ, gb){
    gb = gb || "";
    if (this.aHv > 2) {
        var tJ = new ActiveXObject("QQIEHelper.QQRightClick.2"), ou = this.bLv;
        
        if (ou >= 127) {
            tJ.SendUrl2(aJ, location.href, gb, document.cookie, 0, 10500);
        }
        else 
            if (ou > 65) {
                tJ.SendUrl(aJ, location.href, gb, document.cookie);
            }
        delete tJ;
    }
}






var QMdlRespXml = function(hJ){
    var bQG = hJ && hJ.responseText, aco = bQG ? bQG.split("|") : ["error", "DEF_ERR"];
    
    this.aYX = null;
    this.Mi = null;
    this.bzU = null;
    
    if (aco[0] != "error" && aco[0].indexOf("http://") == 0) {
        this.bzU = aco[0].replace(/#/g, "_");
        this.Mi = aco[1];
    }
    else {
        this.aYX = QMdlRespXml.bT[aco[1]] ? aco[1] : "DEF_ERR";
    }
}

QMdlRespXml.bT = {
    "-102": "���ļ��ѱ��ļ�������ɾ��",
    "-1": "δ֪����",
    "-201": "�ļ������Ѵ����ޣ��޷�����",
    "DEF_ERR": "��ȡ���ص�ַʧ��"
}

QMdlRespXml.prototype.getError = function(){
    return this.aYX;
}

QMdlRespXml.prototype.getErrorMsg = function(){
    return QMdlRespXml.bT[this.aYX];
}

QMdlRespXml.prototype.getKey = function(){
    return this.Mi;
}

QMdlRespXml.prototype.getUrl = function(){

    setCookie("qm_ftn_key", this.Mi, new Date(new Date().valueOf() + 3600 * 1000), "/", "qq.com");
    return this.bzU;
}





var QMFtnRen = function(){
    this.dB = null;
}

QMFtnRen.bT = {
    DLG: T(['<div class="b_size" style="padding:10px 0 0 25px;text-align:left;">', '<div class="">�������µ��ļ���', '<div style="margin:10px 0;" >', '<input id="dlgtxt" type="text" class="txt" value="$name$" style="width:250px;" />&nbsp;', '<input id="dlgok" type="button" class="btn wd1" value="ȷ��" />', '</div>', '</div>']),
    
    MINDLG: T(['<div class="b_size" style="padding:10px 0 0 5px;text-align:left;">', '<div class="">�������µ��ļ���', '<div style="margin:10px 0;" >', '<input id="dlgtxt" type="text" class="txt" value="$name$" style="width:110px;" />&nbsp;', '<input id="dlgok" type="button" class="btn" value="ȷ��" />', '</div>', '</div>'])
}
QMFtnRen.prototype.init = function(ah){
    this.dB = ah || {};
}

QMFtnRen.prototype.checkFileName = function(aC){
    if (trim(aC) == "") {
        showError("�ļ�����Ϊ��");
        return false;
    }
    else {
        var aMO = "\\ / : * ? \" < > |", auE = aMO.split(" ");
        for (var i in auE) {
            if (aC.indexOf(auE[i]) != -1) {
                showError("�ļ����ܰ� " + aMO);
                return false;
            }
        }
    }
    return true;
}

QMFtnRen.prototype.ren = function(ah){
    var bJ = this;
    function onDlg(aC, cr){
        var bhQ = "", dD = new QMAjax;
        
        if (aC == ah.filename) {
            cr.close();
            return;
        }
        if (!bJ.checkFileName(aC)) {
            return;
        }
        bhQ = T("sid=$sid$&oper=filealter&bus=$bus$&filename=$filename$&fid=$fid$&t=re_ftnfilefunc&resp_charset=UTF8").replace({
            sid: getSid(),
            filename: encodeURIComponent(aC),
            fid: ah.fid,
            bus: ah.appid
        });
        dD.url = "/cgi-bin/ftnTagMgr";
        dD.method = "POST";
        dD.onComplete = dD.onError = function(hJ){
            var gc = null;
            if (hJ) {
                if (hJ.responseText.indexOf("({") == 0) {
                    gc = evalValue(hJ.responseText);
                    if (gc.error == "0") {
                        showInfo("�ļ�����ɹ�");
                        ah.okCallBack();
                    }
                    else 
                        if (gc.error == "-2") {
                            showError("�����̵��ļ���֧�ָ���");
                        }
                }
                else {
                    var vE = getActionWin().document;
                    vE.open();
                    vE.write(hJ.responseText);
                    vE.close();
                    
                }
            }
        }
        dD.send(bhQ);
        cr.close();
        
        if (bJ.dB.skin == "MINDLG") {
            showInfo("�ļ�������...");
        }
        else {
            showProcess(1, true, "�ļ�������, ���Ե�...", "", true);
        }
    }
    
    var aP = this.dB;
    
    new (getTop().QMDialog)({
        sTitle: "�ļ�������",
        sBodyHtml: QMFtnRen.bT[aP.skin || "DLG"].replace({
            name: ah.filename || ""
        }),
        nWidth: aP.width || 352,
        nHeight: aP.height || 111,
        onshow: function(){
            var om = this.S("dlgtxt"), dM = om.value.lastIndexOf('.');
            
            if (!window.getSelection) {
                var fl = om.createTextRange();
                fl.moveStart("character", 0);
                fl.moveEnd("character", dM - om.value.length);
                fl.select();
            }
            else {
                om.selectionStart = 0;
                om.selectionEnd = dM;
            }
            om.focus();
        },
        onload: function(){
            var bJ = this;
            
            addEvent(bJ.S("dlgok"), "click", function(){
                var aX = bJ.S("dlgtxt").value;
                onDlg(aX, bJ);
            });
            bJ.S("dlgtxt").onkeydown = function(bN){
                var qS = (bJ.option("oEmbedWin").event || bN).keyCode, aX = bJ.S("dlgtxt").value;
                if (qS == 13 || qS == 9) {
                    onDlg(aX, bJ);
                }
            }
        }
    });
}









function ckDns(cwA){
    E(cwA, function(csX, i){
        var cfb = (new Image());
        cfb.src = ["http://", csX, "/zh_CN/htmledition/images/spacer.gif"].join("");
    });
}





function beginStatTime(al){
    var aDX = parseInt(al.location.hash.split("stattime=").pop());
    
    if (!isNaN(aDX) && aDX.toString().length == 13 && aDX > (getTop().gnStatTimeStamp || 0)) {
        al.gnBeginTime = getTop().gnStatTimeStamp = aDX;
        al.gnStatTimeStart = now();
    }
}

















function endStatTime(al, ej){
    var vU = al.gnBeginTime, hR = al.gnStatTimeStart, mz = now();
    
    if (!isNaN(hR) && !isNaN(vU)) {
        addEvent(al, "load", function(){
            var bhk = now();
            
            ossLog("delay", "sample", T(['stat=cgipagespeed&type=$type$&t1=$t1$&t2=$t2$&t3=$t3$', '&rcgi=$appname$&rt=$t$&rs=$s$&allt=$allt$&flowid=$wm_flowid$']).replace(extend(ej, {
                t1: hR - vU,
                t2: mz - hR,
                t3: bhk - mz,
                allt: [vU, hR, mz, bhk].join("|")
            })));
            debug([hR - vU, mz - hR, bhk - mz], 994919736);
        });
    }
}
















function ossLog(){
    var bHU = getTop().ossLog;
    return bHU.cii.apply(bHU, arguments);
}

ossLog.cii = function(abU, yG, pW, aCZ){
    var ad = this, Yz = abU || "realtime", Jh = ad.ZY(pW), lu = ad.lu || (ad.lu = []), hZ = typeof yG == "number" ? yG : {
        all: 1
    }[yG || "all"] || 0.1;
    
    if (Yz == "realtime") {
        ad.IZ(hZ) && ad.bgR(Jh);
    }
    
    else {
    
        ad.IZ(hZ) &&
        lu.push(["delayurl", "=", encodeURIComponent(Jh)].join(""));
        
        lu.length >= 1000 ? ad.bgR() : (!ad.dK && lu.length > 0 && (ad.dK = setTimeout(ad.bgR, 5 * 1000)));
    }
};

ossLog.bgR = function(Dn){
    var ad = ossLog, lu = ad.lu;
    if (Dn || lu.length > 0) {
        QMAjax.send("/cgi-bin/getinvestigate", {
            method: "POST",
            timeout: 500,
            content: T('sid=$sid$&$rl$&$ls$').replace({
                sid: getSid(),
                rl: Dn,
                ls: lu.join("&")
            })
        });
        lu.length = 0;
        ad.dK && clearTimeout(ad.dK);
        ad.dK = null;
    }
};

ossLog.IZ = function(Oj){
    return (this.MB || (this.MB = now())) % 100 < 100 * Oj;
};

ossLog.ZY = function(pW){
    var kk = [];
    typeof pW == "string" ? kk.push("&", pW) : E(pW, function(bP, ys){
        kk.push("&", bP, "=", encodeURIComponent(ys));
    });
    return kk.shift() && kk.join("");
};








function all_js(){
}
