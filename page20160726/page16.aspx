<%@ Page Language="C#" AutoEventWireup="true" CodeFile="page16.aspx.cs" Inherits="page16" %>

<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 01</title>
    <!--script src="task.js"></!--script-->
      
  </head>
<body>

  <div>
    <label>城市名称：<input id="aqi-city-input" type="text"></label><br>
    <label>空气质量指数：<input id="aqi-value-input" type="text"></label><br>
    <button id="add-btn">确认添加</button>
  </div>
  <table id="aqi-table">
  
    <!--tr>
      <td>城市</td><td>空气质量</td><td>操作</td>
    </!--tr>
    <tr>
      <td>北京</td><td>90</td><td><button onclick="addBtnHandle(this)">删除</button></td>
    </tr>
    <!--tr>
      <td>北京</td><td>90</td><td><button>删除</button></td>
    </tr-->
  
  </table>
<script type="text/javascript">
    /**
* aqiData，存储用户输入的空气指数数据
* 示例格式：
* aqiData = {
*    "北京": 90,
*    "上海": 40
* };
*/
    var aqiData = {};

    /**
     * 从用户输入中获取数据，向aqiData中增加一条数据
     * 然后渲染aqi-list列表，增加新增的数据
     */
    function addAqiData() {
        var aqicityName = document.getElementById("aqi-city-input").value.trim().toString();
        var aqicityValue = document.getElementById("aqi-value-input").value.trim().toString();
       // alert(aqicityName);
        //alert(aqicityValue);
        // eval("aqiData." + aqicityName + "=" + aqicityValue);
       // eval("aqiData = {" + aqicityName + ":\"" +aqicityValue + "\""+"};");
        aqiData[aqicityName] = aqicityValue;
        //  alert(aqiData.s);
      //  var name=[];
//name[0]=aqicityName;
      //  aqiData[name[0]]=aqicityValue;
       // alert(aqiData.s);
    }

    /**
     * 渲染aqi-table表格
     */
    function renderAqiList() {
        //var tbody = document.createElement("tbody");
        var table=document.getElementById("aqi-table");
        var html = "<tr><th>城市</th><th>空气质量</th><th>操作</th></tr>";
        table.innerHTML = html;
        for (var name in aqiData) {
            var tr = table.insertRow(table.rows.length);
                  html = "<td>" + name + "</td><td>" + aqiData[name] + "</td><td><button onclick=\"delBtnHandle(this)\">删除</button></td>";
            //html = "<td>" + name + "</td><td>" + aqiData[name] + "</td><td><button class=\"delbtn\">删除</button></td>";
            tr.innerHTML = html;
           // var html=" <tr><td>城市</td><td>空气质量</td><td>操作</td></tr>"
        }
    }

    /**
     * 点击add-btn时的处理逻辑
     * 获取用户输入，更新数据，并进行页面呈现的更新
     */
    function addBtnHandle() {
        addAqiData();
        renderAqiList();
    }

    /**
     * 点击各个删除按钮的时候的处理逻辑
     * 获取哪个城市数据被删，删除数据，更新表格显示
     */
   function delBtnHandle(obj) {
        // do sth.
       // alert('ok');
        var tdContent=obj.parentNode.parentNode.firstChild.innerText;
       // alert(td);
        delete aqiData[tdContent];
        renderAqiList();
    }
    
   /*function delBtnHandle() {
        // do sth.
        alert('ok');
        var tdContent = this.parentNode.parentNode.firstChild.innerText;
        alert(td);
        aqiData[tdContent] = undefined;
        renderAqiList();
    }*/
    function init() {

        // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

        // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
        document.getElementById("add-btn").onclick = function () { addBtnHandle(); }
        //  document.getElementsByTagName("button").onclick = function () { delBtnHandle(); }
        //document.getElementsByClassName("delbtn").onclick = function () { delBtnHandle();}
    }

    init();


      </script>
</body>
</html>

