<%@ Page Language="C#" AutoEventWireup="true" CodeFile="page15.aspx.cs" Inherits="page15" %>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 01</title>
  </head>
<body>

  <ul id="source">
    <li>北京空气质量：<b>90</b></li>
    <li>上海空气质量：<b>70</b></li>
    <li>天津空气质量：<b>80</b></li>
    <li>广州空气质量：<b>50</b></li>
    <li>深圳空气质量：<b>40</b></li>
    <li>福州空气质量：<b>32</b></li>
    <li>成都空气质量：<b>90</b></li>
  </ul>

  <ul id="resort">
    <!-- 
    <li>第一名：北京空气质量：<b>90</b></li>
    <li>第二名：北京空气质量：<b>90</b></li>
    <li>第三名：北京空气质量：<b>90</b></li>
     -->

  </ul>

  <button id="sort-btn">排序</button>

<script type="text/javascript">

    /**
     * getData方法
     * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
     * 返回一个数组，格式见函数中示例
     */
    function getData() {
        /*
        coding here
        */

        /*
        data = [
          ["北京", 90],
          ["北京", 90]
          ……
        ]
        */
        var data=new Array();
        var items = document.getElementById("source").getElementsByTagName("ul");
        var itemsnumber = document.getElementById("source").getElementsByTagName("li");
        for (var i = 0; i <itemsnumber.length; i++) {
            var item = itemsnumber[i].innerText.split("：");
            //alert(item[0]);
            data[i] = item;
          //  alert(data[1]);
        }
        return data;

    }

    /**
     * sortAqiData
     * 按空气质量对data进行从小到大的排序
     * 返回一个排序后的数组
     */
    function sortAqiData(data) {
        var len=data.length;
        for (var i = 0; i < len; i++){
            var itemmax = data[i];
           //alert(itemmax[1]);
            for (var j = i + 1; j <len;j++){
                var itemnext = data[j];
               // alert(itemnext);
                if (parseInt(itemmax[1])< parseInt(itemnext[1])) {
                    data[i] = itemnext;
                    data[j] = itemmax;                       
                   }
            }
        }
        return data;
    }

    /**
     * render
     * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
     * 格式见ul中的注释的部分
     */
    function render(data) {
        var itemlocation = document.getElementById("resort");
        for (var i = 0; i < data.length; i++) {
            var datalist = data[i];
            var itemlib = document.createElement("b");
            var itemlibcontent = document.createTextNode(datalist[1]);
            itemlib.appendChild(itemlibcontent);
            var itemli = document.createElement("li");
            var itemlicontent = document.createTextNode(datalist[0] + "：");
            itemli.appendChild(itemlicontent);
            itemli.appendChild(itemlib);
            itemlocation.appendChild(itemli);
        }
      
    }

    function btnHandle() {
        var aqiData = getData();
        aqiData = sortAqiData(aqiData);
        render(aqiData);
    }


    function init() {

        // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
        document.getElementById("sort-btn").onclick = function () { btnHandle(); };

    }

    init();

</script>
</body>
</html>

