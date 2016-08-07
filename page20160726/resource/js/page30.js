var blurTarg = document.getElementsByClassName("input_text");
var hintText = [
     {obj:"name",hint:"字符长度为4-16个字符",right: "通过验证", wrong: "名称格式不符合要求", flag: "false" },
     {obj:"password", hint: "密码长度为4-16个字符，且由数字和字母组成", right: "密码可用", wrong: "密码不能为空", flag: "false" },
     {obj:"password_check", hint: "与之前输入密码一致", right: "密码输入一致", wrong: "密码输入不一致", flag: "false" },
     {obj:"email", hint: "请填写正确的邮箱格式", right: "邮箱格式正确", wrong: "邮箱格式不正确", flag: "false" },
     {obj:"phonenumber", hint: "字符长度为4-16", right: "手机格式正确", wrong: "手机格式不正确", flag: "false" }
];
for (var i = 0; i < blurTarg.length; i++) {
    document.getElementsByClassName("input_text")[i].setAttribute("inputIndex",i)
    addEventHandler(blurTarg[i], 'blur', blur);
    addEventHandler(blurTarg[i], 'focus', focus);
}
function addEventHandler(elem, event, func) {
    if (elem.addEventListener) {
        elem.addEventListener(event, func, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + event, func);
    } else {
        elem['on' + event] = func;
    }
}
function blur() {
    var inputIndex = parseInt(this.getAttribute("inputIndex"));
    var inputValue = this.value;
    var flag = false;
    switch (inputIndex) {
        case 0:
            flag = /[A-z0-9\u0391-\uFFE5]{4,16}$/.test(inputValue);
            break;
        case 1:
            flag = /[0-9]{4,16}$/.test(inputValue);
            break;
        case 2:
            var previousTr = this.parentNode.parentNode.parentNode.previousSibling;
            var passwordVal = '';
            if (previousTr.hasAttribute("class")) {
                passwordVal = parseInt(previousTr.previousSibling.previousSibling.getElementsByTagName("input")[0].value);
            } else {
                passwordVal = parseInt(previousTr.getElementsByTagName("input")[0].value);
            }
            flag = inputValue == passwordVal;
            break;
        case 3:
            flag = "";
            break;
        case 4:
    }
    if (flag) {
        this.style.borderColor = "green";
    } else {
        this.style.borderColor = "red";
    }
}
function focus() {
    this.style.borderColor = 'blue';
    var insertTarg = document.getElementById("form1").getElementsByTagName("table")[0];
    sortTr();
    var targ = this.parentNode.parentNode.parentNode;

    if (!targ.nextSibling.nextSibling.getAttribute("class") == "hint" || !targ.nextSibling.nextSibling.getAttribute("class")) {
        var trIndex = parseInt(targ.getAttribute("trIndex"));
        var inputIndex = parseInt(this.getAttribute('inputIndex'));
        var hint = hintText[inputIndex].hint;
        var tr = insertTarg.insertRow(trIndex + 1);
        tr.setAttribute("class", "hint");
        tr.innerHTML = "<td></td><td>" + hint + "</td>";
    }
}
function sortTr() {
    var trList = document.getElementById("form1").getElementsByTagName("table")[0].getElementsByTagName("tr");
    for (var i = 0; i < trList.length; i++) {
        trList[i].setAttribute("trIndex", i);
    }
}