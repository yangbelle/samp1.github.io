 var target = document.getElementById("popup_window");
 var btnSmt = document.getElementById("submit");
 var cancelBtn = document.getElementById("cancel");
 var mask = document.getElementById("mask");
function center(elem) {
    var clientWid = document.documentElement.clientWidth;
    var clientHgt = document.documentElement.clientHeight;
  //  var target = document.getElementById("popup_window");
    var elemOffH = elem.offsetHeight;
    var elemOffW = elem.offsetWidth;
    elem.style.left = (clientWid - elemOffW) / 2 + "px";
    elem.style.top = (clientHgt - elemOffH) / 2 + "px";
}
function init() {
    center(target);
   // openwin();
    mask.onclick=btnSmt.onclick = cancelBtn.onclick = function () {
        target.style.display = "none";
        mask.style.display = "none";
    }
}
init();
function openwin() {
    window.open("HtmlPage.html", "", "width=200,height=200")
}