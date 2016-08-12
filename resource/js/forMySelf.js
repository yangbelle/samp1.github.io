(function () {
    var timerNum = 0;
    var albumHander = document.getElementsByClassName("album")[0];
    var carousel= document.querySelector('.carouselselect');
    var carouselSelect = carousel.querySelectorAll('input');
    var photoPrev = document.querySelector('#photo .prev');
    var photoNext = document.querySelector('#photo .next');
    var photo = document.getElementById('photo');
    var photoExplain = document.getElementById('explain');
    //console.log(carouselSelect);
    var album = [{ src: "resource/img/forMySelf/header.png", explain: "一个人,一条路,人在途中,心随景动,从起点到尽头,也许快乐,也许孤独,若心处远方,只需前行,梦想自会引路,有多远走多远,把足迹连成生命线." },
        { src: "resource/img/forMySelf/new_time_person.png", explain: "凡是遥远的地方，对我们都有一种诱惑，不是诱惑于美丽，就是诱惑于传说，即使远方的风景，并不尽如人意，我们也无需在乎，因为这实在是一个，迷人的错" },
        { src: "resource/img/forMySelf/new_world_time.png", explain: "可能这就是人生的乐趣所在" }];
    (function () {
        $(function () {
            //$("#tabs").tabs({
            //    collapsible:false
            //});

            $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
            $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
            carouselSelect[0].setAttribute('checked', 'checked');
        });
    })();
    function removecCarouselSelect() {
        for (var i = 0; i < carouselSelect.length; i++) {
            if (carouselSelect.item(i).checked) {
                carouselSelect.item(i).removeAttribute('checked');
            }
        }
    }
    function setAlbumInterval(){
        timerNum++;
        var photoExpWid = photoExplain.clientWidth;
        var photoExpHeg = photoExplain.clientHeight;
        //   console.log("photoExpWid" + photoExpWid + "photoExpHeg" + photoExpHeg);
        var num = timerNum % 3;
        photoExplain.style.width = photoExpWid;
        photoExplain.style.length = photoExpHeg;
        photoExplain.style.marginLeft = -photoExpWid/2 + "px";
        photo.querySelector('img').src = album[num].src;
        photoExplain.innerText = album[num].explain;
        console.log(num);
        removecCarouselSelect();
        carouselSelect[num].checked = 'checked';
        //console.log("after set" + carouselSelect[num].checked);
    }
    function addHandler(elem,handler,func) {
        if (elem.addEventListener) {
            elem.addEventListener(handler,func,false)
        }else if(elem.attachEvent){
            elem.attachEvent("on"+handler,func)
        }else{
            elem['on' + handler] = func;
        }
    }
    var screenscroll = function () {
        var aside = document.getElementById('asideone');
        aside.clientHeight = 50 + "px";
    }
    var albummouseover = function () {
        clearInterval(albumTimer);
    }
    var albummouseout = function () {
        albumTimer = setInterval(setAlbumInterval, 5000);
    }
    var albumTimer = setInterval(setAlbumInterval, 5000);
    var dengluParent = document.getElementsByClassName('two')[0];
    var denglu = document.getElementById('denglu');
    var mask = document.getElementById('mask');
    addHandler(albumHander, 'mouseover', albummouseover);
    addHandler(albumHander, 'mouseout', albummouseout);
    addHandler(dengluParent, 'click', dengluClick);
    addHandler(mask, 'click', maskClick);
    addHandler(carousel, 'click', function (event) {
        //console.log(event.target.tagName.toUpperCase());
        if(event.target.tagName.toUpperCase()=='INPUT'){
            photo.querySelector('img').src = album[event.target.value].src;
            photoExplain.innerText = album[event.target.value].explain;
        }
    });
    addHandler(photoPrev, 'click', function (event) {
        event.stopPropagation();
        //console.log(timerNum);
        timerNum=timerNum+2;
        //console.log('after--'+ timerNum);
        var num = Math.abs(timerNum) % 3;
        photo.querySelector('img').src = album[num].src;
        photoExplain.innerText = album[num].explain;
        removecCarouselSelect();
        carouselSelect[num].checked = 'checked';
   
    });
    addHandler(photoNext, 'click', function (event) {
        event.stopPropagation();
        //console.log(timerNum);

        timerNum++;
        //console.log('after++' + timerNum);

        var num = timerNum % 3;
        photo.querySelector('img').src = album[num].src;
        photoExplain.innerText = album[num].explain;
        removecCarouselSelect();
        carouselSelect[num].checked = 'checked';
    

    });
    function test(event){
        console.log(event.type);
        timerNum = event.target.value;
    }
    $(carousel).on('click',test.bind(this.event));
    //form1
    var blurTarg = document.getElementsByClassName("input_text");
    var hintText = [
         { obj: "name", hint: "字符长度为4-16个字符", right: "通过验证", wrong: "名称格式不符合要求", flag: "false" },
         { obj: "password", hint: "密码长度为4-16个字符，且由数字和字母组成", right: "密码可用", wrong: "密码不能为空", flag: "false" },
         { obj: "password_check", hint: "与之前输入密码一致", right: "密码输入一致", wrong: "密码输入不一致", flag: "false" },
         { obj: "email", hint: "请填写正确的邮箱格式", right: "邮箱格式正确", wrong: "邮箱格式不正确", flag: "false" },
         { obj: "phonenumber", hint: "字符长度为4-16", right: "手机格式正确", wrong: "手机格式不正确", flag: "false" }
    ];
    for (var i = 0; i < blurTarg.length; i++) {
        document.getElementsByClassName("input_text")[i].setAttribute("inputIndex", i)
        addHandler(blurTarg[i], 'blur', blur);
        addHandler(blurTarg[i], 'focus', focus);
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
                flag = /([0-9][a-zA-Z]){4,16}/.test(inputValue);
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
                flag = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(inputValue);
                break;
            case 4:
                flag = /[0-9]{4,16}/.test(inputValue);
                break;
            default:
                return false;
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
    function dengluClick() {
        $('#denglu').removeClass().addClass('form1show');
        $('#mask').removeClass().addClass('maskshow');
    }
    function maskClick() {
        $('#denglu').removeClass().addClass('denglu');
        $('#mask').removeClass().addClass('mask');
    }
 //form1
})()