<%@ Page Language="C#" AutoEventWireup="true" CodeFile="page17test.aspx.cs" Inherits="page17test" %>

 
<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<meta name="keywords" content="վ��,��ҳ��Ч,js��Ч,������,zzjs,zzjs.net,sky,www.zzjs.net,վ����Ч ��" />
<meta name="description" content="www.zzjs.net,վ����Ч����վ���ر�js��Ч�������롣����������js��Ч���ṩ����������������,����վ����Ч��" />
<script type="text/javascript">
    function encode(s) {
        return s.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/([\\\.\*\[\]\(\)\$\^])/g, "\\$1");
    }//��ӭ����վ����Ч�������ǵ���ַ��www.zzjs.net���ܺüǣ�zzվ����js����js��Ч����վ�ռ�����������js���룬���������������ء�
    function decode(s) {
        return s.replace(/\\([\\\.\*\[\]\(\)\$\^])/g, "$1").replace(/>/g, ">").replace(/</g, "<").replace(/&/g, "&");
    }
    function highlight(s) {
        if (s.length == 0) {
            alert('�����ؼ���δ��д��');
            return false;
        }
        s = encode(s);
        var obj = document.getElementById("content");
        // var obj = document.getElementsByTagName("body")[0];
      //  var html = obj.innerHTML;
        var pattern = /<span\s+class=.?highlight.?>([^<>]*)<\/span>/gi;
        var t = obj.innerHTML.replace(pattern, "$1");
        obj.innerHTML = t;
        var cnt = loopSearch(s, obj);
        t = obj.innerHTML;
        var test = /(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)/;
        var te = "http://www.w3cschool.cc:80/html/html-tutorial.html".replace(test, "$1 & $2 & $3 & $4");
    /*    String.prototype.capitalize = function () {

            return this.replace(/(^|\s)([a-z])/g, function (m, p1, p2) {
                return p1 + p2.toUpperCase();
               // alert()

            });

        };
        console.log("i am a boy !".capitalize())*/

        var r = /{searchHL}(({(?!\/searchHL})|[^{])*){\/searchHL}/g;
//t = t.replace(r, "<span class='highlight'>$2</span>");
      //  t = t.replace(r, "<span class='highlight'>$3</span>");
       // t = t.replace(r, "<span class='highlight'>$4</span>");
        t = t.replace(r, "<span class='highlight'>$1</span>");
        obj.innerHTML = t;
       // alert("�������ؼ���" + cnt + "��")
    }//��ӭ����վ����Ч�������ǵ���ַ��www.zzjs.net���ܺüǣ�zzվ����js����js��Ч����վ�ռ�����������js���룬���������������ء�
    function loopSearch(s, obj) {
        var cnt = 0;
        if (obj.nodeType == 3) {
            cnt = replace(s, obj);
            return cnt;
        }
        for (var i = 0, c; c = obj.childNodes[i]; i++) {
            if (!c.className || c.className != "highlight")
                cnt += loopSearch(s, c);
        }
        return cnt;
    }
    function replace(s, dest) {
        var r = new RegExp(s, "g");
        var tm = null;
        var t = dest.nodeValue;
        var cnt = 0;
        if (tm = t.match(r)) {
            cnt = tm.length;
            t = t.replace(r, "{searchHL}" + decode(s) + "{/searchHL}")
            dest.nodeValue = t;
        }
        return cnt;
    }//��ӭ����վ����Ч�������ǵ���ַ��www.zzjs.net���ܺüǣ�zzվ����js����js��Ч����վ�ռ�����������js���룬���������������ء�
</script>
<style type="text/css">
.highlight{background:green;font-weight:bold;color:white;}
</style>
</head>
<body>
<a href="http://www.zzjs.net/">վ����Ч��</a>,վ���ر��ĸ�������ҳ��Ч�͹����롣zzjs.net��վ��js��Ч��<hr>
<!--��ӭ����վ����Ч����������վ�ռ�����������js��Ч���ṩ�����������أ���ַ��www.zzjs.net��zzjs@msn.com,��.net������վ-->
<script type="text/javascript" src="http://www.zzjs.net/ad/tc.js"></script>
<form onsubmit="highlight(this.s.value);return false;">
<p><input name="s" id="s" title="����վ����Ч����"/><input type="submit" value="����"/></p>
</form>
<div id="content">
<font face=Verdana>վ����Ч��,www.zzjs.net<br />
רע����ҳ��Ч��������,��վ����js�����߲ο�.<br />
<br />
���������˧����ҳ��Чվ!
<br />
��ӭ�ղر�վ,����ѡ���ǲ�����.
<br />
վ����Ч,��Զ����˧��!</font>
</div>
</body>
</html>

