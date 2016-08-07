<%@ Page Language="C#" AutoEventWireup="true" CodeFile="page18.aspx.cs" Inherits="page18" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <div><label><input type="text" class="inputVal" id="inputVal"/></label>
        <button type="button" value="左侧入" onclick="addToLeft()">左侧入</button>
        <button type="button" value="右侧入" onclick="addToRight()">右侧入</button>
        <button type="button" value="左侧出" onclick="delFromLeft()">左侧出</button>
        <button type="button" value="右侧出" onclick="delFromRight()">右侧出</button>
    </div>
    <div id="list"></div>
    <script src="resource/js/page18.js"></script>
    <link rel="stylesheet" href="resource/css/page18.css" />
</body>
</html>
