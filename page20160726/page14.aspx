<%@ Page Language="C#" AutoEventWireup="true" CodeFile="page14.aspx.cs" Inherits="page14" %>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 01</title>
  </head>
<body>

  <h3>污染城市列表</h3>
  <ul id="aqi-list">
<!--   
    <li>第一名：福州（样例），10</li>
  	<li>第二名：福州（样例），10</li> -->
  </ul>


<script type="text/javascript">

    var aqiData = [
      ["北京", 90],
      ["上海", 50],
      ["福州", 10],
      ["广州", 50],
      ["成都", 90],
      ["西安", 100]
    ];
    var numberList = ["一", "二", "三", "四", "五","六"];

    (function () {

        /*
        在注释下方编写代码
        遍历读取aqiData中各个城市的数据
        将空气质量指数大于60的城市显示到aqi-list的列表中
        */
        for(var i=0;i<aqiData.length;i++)
        {
            var cityList = aqiData[i];
            if (cityList[1] > 60) {
                var number = 0;
                var node = document.createElement("li");
                var html = document.createTextNode("第"+numberList[number]+"名：" + cityList[0] + "," + cityList[1]);
                node.appendChild(html)
                document.getElementById("aqi-list").appendChild(node);
                number++;
            }
        }
    })();

</script>
</body>
</html>
