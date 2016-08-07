<%@ Page Language="C#" AutoEventWireup="true" CodeFile="page4.aspx.cs" Inherits="page4" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>page4</title>
    <style type="text/css">
        .container{
            position:absolute;
            left:50%;
            top:50%;
          /*  transform:translate(-50%,-50%);*/
            height:200px;
            width:400px;
           /* margin:auto;*/
           margin-left:-200px;
           margin-top:-100px;
            background-color:#ccc;
        }
        .radius_left_top{
            width:50px;
            height:50px;
            background-color:#fc0;
            position:relative;
           /*margin-left:-25px;
            margin-top:-25px;*/
            border-radius:0 0px 50px 0px;
        }
        .radius_right_bottom{
            width:50px;
            height:50px;
            background-color:#fc0;
            position:absolute;
            right:0px;
            bottom:0px;
           /*margin-left:-25px;
            margin-top:-25px;*/
            border-radius:50px 0px 0px 0px;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="radius_left_top"></div>
    <div class="radius_right_bottom"></div>
</div>
</body>
</html>
