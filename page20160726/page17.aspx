﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="page17.aspx.cs" Inherits="page17" %>

<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 17</title>
      <link rel="stylesheet" href="resource/css/page17.css" />
  </head>
<body>
    <fieldset id="form-gra-time">
    <legend>请选择日期粒度：</legend>
    <label>日<input name="gra-time" value="day" type="radio" checked="checked"></label>
    <label>周<input name="gra-time" value="week" type="radio"></label>
    <label>月<input name="gra-time" value="month" type="radio"></label>
  </fieldset>

  <fieldset>
    <legend>请选择查看的城市：</legend>
    <select id="city-select">
      <option>北京</option>
    </select>
  </fieldset>

  <div class="aqi-chart-wrap">
  </div>
    <script src="resource/js/page17.js"></script>
</body>
</html>

