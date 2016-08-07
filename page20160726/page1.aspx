<%@ Page Language="C#" AutoEventWireup="true" CodeFile="page1.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>task1</title>
</head>
<body>
    <ul>
        <li><a href="#">导航链接一</a></li>
        <li><a href="#">导航链接二</a></li>
        <li><a href="#">导航链接三</a></li>
        <li><a href="#">导航链接四</a></li>
    </ul>
    <h1>文章一级标题</h1>
    <h2>文章二级标题</h2>
    <p>文章作者&nbsp文章发表时间</p>
    <p>这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，<br/>换行了<br/>这是一个很长的段落，这是一个很长的段落,换行了<br/>
        ，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，<a href="Default.aspx">这里有一个链接</a>
     这是一个很长的段落，<b>这里有粗体字</b>，这是一个很长的段落，这是一个很长的段落，<div><img src="img/Koala.jpg"/></div>这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，这是一个很长的段落，</p>
    <div>图片</div>
    <span>好看的图片</span><div><img src="img/Koala.jpg" alt="图片加载失败"/></div>
    <ul>
        <li>列表项目一</li>
        <li>列表项目二</li>
        <li>列表项目三</li>
        <li>列表项目四</li>
    </ul>
    <h1>最后一篇文章标题</h1>
    <p>文章作者&nbsp文章发表时间</p>
    <ol>
        <li>排名一</li>
        <li>排名二</li>
        <li>排名三</li>
    </ol>
    <table border="1">
        <caption>下面是一个表格，给表格增加一个border="1"的单元格</caption>
        <tr>
            <th>表头</th>
            <th>表头</th>
            <th>表头</th>
        </tr>
        <tr>
            <td>表内容单元格</td>
            <td>表内容单元格</td>
            <td>操做</td>
        </tr>
        <tr>
            <td>表内容单元格</td>
            <td>表内容单元格</td>
            <td>操做</td>
        </tr>
        <tr>
            <td>总计</td>
            <td colspan="2">1000</td>
        </tr>

    </table>
    <h1>最后一个文章一级标题</h1>
    <h2>侧栏注册标题</h2>
    <p><span>请输入邮箱:</span><input type="email" value="这是一个文本输入框" /></p>
    <p>邮箱地址请按格式输入</p>
    <p>    <span>请输入密码:</span><input type="text" value="这是一个文本输入框" /><span>请再次输入密码:</span><input type="text" value="这是一个文本输入框" /></p>
    <p><span>性别：</span><input type="radio" name="sex" value="男"/><label>男</label><input type="radio" name="sex" value="女"/><label>女</label>
        <span>城市</span>
        <input list="city"/><datalist id="city"><option value="北京"/>
        <option value="上海"/></datalist>
    </p>
</body>
</html>
