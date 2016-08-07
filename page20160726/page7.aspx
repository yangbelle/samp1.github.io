<%@ Page Language="C#" AutoEventWireup="true" CodeFile="page7.aspx.cs" Inherits="page7" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" href="resource/css/page7.css" />
</head>
<body>
    <div class="container">
        <div  class="search_container">
            <div class="search_container_text">
                <p class="color_white">查找新世界活动信息</p>
                <div style="width:100%;text-align:center;"><div class="div_hr_type1" style="background-color:white;margin:20px 185px;"></div></div>
                <p class="color_white" style="font-size:12px;">每个城市有不同的活动信息，请自主查询您所需要了解的世界</p>
            </div>
            <div class="search_container_nav">
                <ul>
                    <li class="float">
                        <div class="ul_li_div">
                            <input type="text" placeholder="中国" class="ul_li_div_input"/><span class="ul_li_div_span" ><img src="resource/img/page7/icon_down.png" style="padding-top: 10px;"/></span>
                            <ul>
                                <li ><span><img alt="" src="resource/img/page7/search_select.png" class="search_select_img"/></span><span>中国</span></li>
                                <li >美国</li>
                            </ul>                       
                        </div>
                    </li>
                    <li class="float">
                        <div class="ul_li_div">
                            <input type="text" placeholder="省份" class="ul_li_div_input"/><span class="ul_li_div_span" ><img src="resource/img/page7/icon_down.png" style="padding-top: 10px;"/></span>
                            <ul>
                                <li >北京市</li>
                                <li >广东省</li>
                                <li>湖南省</li>
                            </ul>                       
                        </div>
                   </li>
                   <li class="float">
                        <div class="ul_li_div">
                            <input type="text" placeholder="城市" class="ul_li_div_input"/><span class="ul_li_div_span" ><img src="resource/img/page7/icon_down.png" style="padding-top: 10px;"/></span>
                            <ul>
                                <li >深圳市</li>
                                <li >长沙市</li>
                            </ul>                       
                        </div>
                   </li>
                </ul>
            </div>
        </div>
        <div style="position:relative;">
        <div class="float" style="height:562px;"><img src="resource/img/page7/new_world_time.png" style="height:562px;width:800px;"/></div>
        <div class="newTimeTemp float">
         <div class="newTimeIntroTemp">
            <div class="newTimeIntro">新世界/<span class="color_red">01</span></div>
            <p class="newTimeIntro opacity_content" style="text-align:left;height:150px;line-height:30px;">新世界新世界新世界新世界新世界新世界新世界新世界新世界新世
                界新世界新世界新世界新世界新世界新世界新世界新世界新世界
                界新世界新世界新世界新世界新世界新世界新世界新世界新世界</p>
            <div class="newTimeIntro color_red border_red" style="width:120px;font-size:15px;height:30px;padding-top:8px;">更多详情</div>
            <div class="newTimeIntro"><input type="radio" checked="checked" /><input type="radio" /><input type="radio" /></div>
          </div>
        </div>
        <div class="newTimeTemp float details1">
            <div class="newTimeIntroTemp">
            <div class="newTimeIntro">新时代</div>
            <div class="newTimeIntro">关于爱生活的我们</div>
            <div class="newTimeIntro_type2"><div class="div_hr_type1" style="background-color:white;"></div></div>
            <div class="newTimeIntro_type2 border_white">查看更多</div>
                </div>
        </div>
        <div class="newTimeTemp float details2">
            <div class="newTimeIntroTemp">
            <div class="newTimeIntro opacity_content_type2">新时代</div>
            <div class="newTimeIntro opacity_content_type2">关于爱生活的我们</div>
            <div class="newTimeIntro_type2"><div class="div_hr_type1" style="background-color:gray;"></div></div>
            <div class="newTimeIntro_type2 color_red border_red">查看更多</div>
            </div>
        </div>
        <div class="newTimeTemp float"><img src="resource/img/page7/new_time_person.png" style="height:562px;width:400px;"/></div>
            </div>
            <div style="clear:both;width:420px;text-align:center;margin:40px auto;padding:40px;">
                <p class="opacity_content_type2">成为我们的志愿者</p>
                <div style="width:100%;text-align:center;"><div class="div_hr_type1" style="background-color:red;margin:20px 185px;"></div></div>
                <p class="opacity_content">新世界的大家庭需要每一个爱生活的人加入，如果你够年轻，有梦想，有激情，那就不要犹豫，赶紧加入我们吧</p>
            </div>
            <div style="margin:auto;width:960px;min-height:510px;">
                <div class="float" style="width:300px;margin-right:60px;min-height:500px;">
                    <div style="position:relative;">
                        <p class="p_type1">新世界志愿者协议</p>
                        <p class="opacity_content">新世界志愿者协议新世界志愿者协议新世界志愿者协议新世界志愿者协议新世界志愿者协议...</p>
                        <div class="more_image"style="text-align:right;"><img src="resource/img/page7/more.png"/></div>
                    </div>
                    <div>
                        <p class="p_type1">新世界志愿者协议</p>
                        <p class="opacity_content">新世界志愿者协议新世界志愿者协议新世界志愿者协议新世界志愿者协议新世界志愿者协议...</p>
                        <div class="more_image"><img src="resource/img/page7/more.png"/></div>
                    </div>
                    <div>
                        <p class="p_type1">更多条款</p>
                        <div class="more_image"><img src="resource/img/page7/more.png"/></div>
                    </div>
                </div>
                <div class="float" style="width:600px;">
                    <form class="form">
                        <label><input  class="form_input_common" type="text" placeholder="姓名：" required=""/></label>
                        <label><input class="form_input_common" type="text" placeholder="年龄：" required="" style="margin-left:12px"/></label>
                        <label><input class="form_input_common" type="text" placeholder="联系方式：" style="margin-top:15px;"/></label>
                        <label><input class="form_input_common" type="text" placeholder="联系地址：" style="margin:15px 0 0 12px;" /></label>
                        <label><textarea class="form_textarea_type2"  placeholder="请简单描述你的梦想生活："></textarea></label>
                        <label><input class="form_submit_type1" type="submit" value="提交申请" /></label>
                    </form>
                </div>
            </div>
            <div style="clear:both;height:1px;"></div>
     </div>
</body>
</html>
