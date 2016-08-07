var dataList = [];
var dataTag = [];
var target = document.getElementById("list");
var tagInput = document.getElementById("tag");
var tagTarget=document.getElementById("tag_list");
function addListenerHandler(elem, event, handler) {
    if (elem.addEventListener) {
        elem.addEventListener(event,handler,false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on'+event,handler);
    } else {
        elem['on' + event] = handler;
    }
}
function keyUp() {
    if (/[,\s\r]$/.test(tagInput.value) || event.keyCode == 13) {
        var value = tagInput.value.trim().replace(/([^,\s\r])/g, "$1");//有问题的点，不能识别只含有，的字符串。
        document.getElementById("tag").value = '';
        if (value && dataTag.indexOf(value) < 0) {
            dataTag.push(value);
        }
        displayData(dataTag, tagTarget);
    } else {
     //   document.getElementById("tag").value = '';
    }
}
function mouseover() {

    if (this.target && this.target.nodeName == 'SPAN') {
        this.target.firstChild.insertData(0, '删除');
    }
}
function click() {
}
function getData() {
    var data = document.getElementById("text").innerHTML;
    if (data.length) {
        dataList = data.split(/[,/\、/\s+/\n/\r/\t]/); 
    }
    displayData(dataList, target);
}
function displayData(list, targ) {
    var html = '';
    for (var i = 0; i < list.length; i++) {
        html += "<span index=\""+i+"\">" + list[i] + "</span>";
    }
    targ.innerHTML = html;
}
function encode(s) {
    return s.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/([\\\.\*\[\]\(\)\$\^])/g, "\\$1");
}//欢迎来到站长特效网，我们的网址是www.zzjs.net，很好记，zz站长，js就是js特效，本站收集大量高质量js代码，还有许多广告代码下载。
function decode(s) {
    return s.replace(/\\([\\\.\*\[\]\(\)\$\^])/g, "$1").replace(/>/g, ">").replace(/</g, "<").replace(/&/g, "&");
}
function replace(seq, obj) {
    var patt = new RegExp(seq, "g");
    var text = obj.nodeValue;
    if (text.match(seq)) {
        obj.nodeValue = text.replace(patt, "{searchHL}" + decode(seq) + "{/searchHL}");
    }
}
function loop(seq, searchO) {
    if (searchO.nodeType == 3) {
        replace(seq, searchO);
    }
    for (var i = 0, obj; obj = searchO.childNodes[i]; i++) {
        if (!obj.className || obj.className != "highlight") {
            loop(seq, obj);
        }
    }
}
function search() {
    var searchTar = encode(document.getElementById("search").value);
    var searchObj = document.getElementById("list");
    var searchText = searchObj.innerHTML;
    if (!searchTar.length) {
        alert("请输入查询字符串");
    }
    var pattern = /<label\s+class=.?highlight.?>([^<>]*)<\/label>/gi;
   // var pattern = /<label\s+class=.?highlight.?\s+>([^<>]*)<\/label>/gi;
    var patt = /{searchHL}(({(?!\/searchHL})|[^{])*){\/searchHL}/g;
    var t = searchText.replace(pattern, "$1");
    searchObj.innerHTML = t;
    loop(searchTar,searchObj);
    searchObj.innerHTML = searchObj.innerHTML.replace(patt, "<label class='highlight'>$1</label>");
    
}
function init() {
    addListenerHandler(tagInput, 'keyup', keyUp)
    addListenerHandler(tagTarget, 'mouseover', function (e) {
        if (e.target && e.target.nodeName == 'SPAN') {
            e.target.lastChild.insertData(0, '删除');
        }
    });
    addListenerHandler(tagTarget, 'mouseout', function (e) {
        if (e.target && e.target.nodeName == 'SPAN') {
            e.target.lastChild.deleteData(0, 2);
        }
    });
    addListenerHandler(tagTarget, 'click', function (e) {
        if (e.target && e.target.nodeName == 'SPAN') {
          //  alert(e.target.sourceIndex);
            tagTarget.removeChild(e.target);
           // var delData = e.target.nodeValue;
            var delIndex = e.target.getAttribute('index');
            dataTag.splice(delIndex,1);
           // dataTag.
        }
    });
    getData();
    displayData(dataList, target);
}
init();