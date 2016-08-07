<%@ Page Language="C#" AutoEventWireup="true" CodeFile="page40.aspx.cs" Inherits="page40" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">  
</head>
<body>
    <div id="Date">
     <input id="selectDate" placeholder="请选择您需要的日期"/>
     <div id="calendar_container">
         <div>
             <div class="date_header">
                 <input type="text" id="month" value=""/><!--input,div,img位置问题-->
                 <div class="narrow_icon">
                     <div class="image" id="month_up"><span><img src="resource/img/page40/icon_up.jpg" alt="tupain"  /></span></div>
                     <div class="image" id="month_down"><span><img src="resource/img/page40/icon_up.jpg" alt="tupain"  /></span></div>
                 </div>
             </div>
             <div class="date_header">
                 <input type="text" value="" id="year"/>
                 <div class="narrow_icon">
                     <div class="image" id="year_up"><span><img src="resource/img/page40/icon_up.jpg" alt="tupain"  /></span></div>
                     <div class="image" id="year_down"><span><img src="resource/img/page40/icon_up.jpg" alt="tupain"  /></span></div>
                 </div>
             </div>
         </div>
         <div style="clear:both"><!--float浮动问题-->
             <table id="calendar" class="calendar">
             </table>
         </div>
     </div>
        </div>
    <script type="text/javascript" src="resource/js/page40.js"></script>
    <link rel="stylesheet" href="resource/css/page40.css" />
</body>
</html>
