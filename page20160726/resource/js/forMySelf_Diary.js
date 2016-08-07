$(document).ready(function () {
    $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
    $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
    $('#tab1').load('tab1.html');
    $('div#tabs ul li').click(function (event) {
        $('#tab1').load('tab1.html');

    });
    //   addHandler(ul_pagination,'click', display(this.text()));
    
});
//监听分页
$('.pagination').on('click', function (event) {
    var targetIndex = event.target.text;
    if (isNaN(targetIndex)) {
        if (targetIndex == '«') {
            indexFlag = indexFlag > 1 ? --indexFlag : 1;
        } else {
            indexFlag = indexFlag < totalPage ? ++indexFlag : totalPage;
        }
        display(indexFlag);
    } else {
        display(targetIndex);
        indexFlag = parseInt(targetIndex);
    }
});
var getTotalPage = function () {
    return Math.ceil(diary.length / pageItem);
}
function pagerNum() {
    for (var i = 0; i < parseInt(totalPage) ; i++)
        $('ul.pagination li:last').before('<li><a href="#">' + (i + 1) + '</a></li>');
};
function display(currentPage) {
    var htmlul = '', htmlDiv = '';
    for (var i = 0; i < pageItem; i++) {
        if (diary[(currentPage - 1) * pageItem + i]) {
            htmlul += '<li><a href="#tab' + currentPage + i + '">' + diary[(currentPage - 1) * pageItem + i][0] + '</a></li>';
            htmlDiv += '<div id="tab' + currentPage + i + '">' + diary[(currentPage - 1) * pageItem + i][1] + '</div>';
        }
    }
    $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
    $('#tabs ul').html(htmlul);
    $('div.tabs_div').html(htmlDiv);
    $("#tabs").tabs('destroy');
    $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
    $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
    if (currentPage > 1) {
     //   $('.pagination li:first a').attr('href') = '#';

    }
};
var diary = [[20160101, "we are a team,CSS files The themes directory (located under development-bundle) contains the CSS files. It consists of various directories, each containing themes (e.g., the base, smoothness, and ui-lightness directories). Each theme includes an images directory and other CSS files. The jquery.ui.core.css file contains basic functionality (required), while other files will be included only if they are required. The jquery.ui.theme.css file contains the definition of the theme itself (required). The jquery.ui.base.css file includes all of the files in the development-bundle directory except jquery.ui.theme.css. The jquery.ui.all.css file includes all files (that is to say, jquery.ui.base.css and jquery.ui.theme.css). Finally, the file ending with custom.css (e.g., jquery-ui-1.8.16.custom.css) includes all CSS files and eliminates the need to include each separately (it is identical to jquery.ui.all.css, except that it includes other files via CSS directives, while custom.css physically includes every line of all files). Sample HTML page including uncompressed files CSS files The themes directory (located under development-bundle) contains the CSS files. It consists of various directories, each containing themes (e.g., the base, smoothness, and ui-lightness directories). Each theme includes an images directory and other CSS files. The jquery.ui.core.css file contains basic functionality (required), while other files will be included only if they are required. The jquery.ui.theme.css file contains the definition of the theme itself (required). The jquery.ui.base.css file includes all of"], [20160102, "20160102"], [20160103, "20160103"], [20160104, "20160104"], [20160105, "20160105"], [20160106, "20160106"], [20160107, "20160107"], [20160108, "20160108"], [20160109, "20160109"], [20160110, "20160110"], [20160111, "20160111"], [20160112, "20160112"], [20160113, "20160113"], [20160114, "20160"]];
var pageItem = 5;
var indexFlag = '';
var totalPage=getTotalPage();
var ul_pagination = document.getElementsByClassName('pagination')[0];

pagerNum();
display(1);
//呈现选中的分页数据