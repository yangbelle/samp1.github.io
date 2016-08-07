<%@ Page Language="C#" AutoEventWireup="true" CodeFile="page30.aspx.cs" Inherits="page30" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <table>
            <tr>
                <td class="td_title">名称</td>
                <td>
                    <label>
                        <input type="text"  class="input_text" />

                    </label>
                </td>
            </tr>

            <tr>
                <td class="td_title">密码</td>
                <td>
                    <label>
                        <input type="password" class="input_text" />

                    </label>
                </td>
            </tr>
            <tr>
                <td class="td_title">密码确认</td>
                <td>
                    <label>
                        <input type="password" class="input_text" />

                    </label>
                </td>
            </tr>
            <tr>
                <td class="td_title">邮箱</td>
                <td>
                    <label>
                        <input type="email" class="input_text" />

                    </label>
                </td>
            </tr>
            <tr>
                <td class="td_title">手机</td>
                <td>
                    <label>
                        <input type="tel" class="input_text" />

                    </label>
                </td>
            </tr>
            <tr>
                <td></td>
                <td style="text-align: right;">
                    <input type="submit" value="提交" class="input_submit" /></td>
            </tr>
        </table>
    </form>
    <link rel="stylesheet" href="resource/css/page30.css" />
    <script type="text/javascript" src="resource/js/page30.js"></script>
</body>
</html>
