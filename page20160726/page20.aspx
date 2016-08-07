<%@ Page Language="C#" AutoEventWireup="true" CodeFile="page20.aspx.cs" Inherits="page19" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <div><label>Tag<input type="text" id="tag"/></label></div>
    <div id="tag_list"></div>
    <div>
        <textarea class="text" id="text"></textarea>
        <button type="button" onclick="getData()">获取数据</button>
    </div>
    <div>
        <label><input type="text" class="search" id="search" placeholder="请输入查询字符串"/></label>
        <button type="button" value="查询" onclick="search()">查询</button>
    </div>
    <div id="list"></div>
    <script src="resource/js/page20.js"></script>
    <link rel="stylesheet" href="resource/css/page20.css" />
</body>
</html>