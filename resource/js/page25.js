function initUl() {
    $('ul li ul li').has('ul').prepend('<span><img class=\"fold\" alt=\"tupian\" src=\"resource/img/page25/icon_point_right.png\"/></span>');
    $('ul li').append('<div class=\"add_minus\"><span><img class=\"add\" alt=\"tupian\" src=\"resource/img/page25/add.png\"/></span><span><img class=\"minus\" alt=\"tupian\" src=\"resource/img/page25/minus.png\"/></span></div>');
    addlistener();
}
function addlistener() {
    $('ul').on('click', function (event) {
        var target = event.target || event.srcElement;
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
           
        }
        var className = $(target).attr('class');
        if (className == 'fold') {
            $(target).attr({ class: 'unfold', src: 'resource/img/page25/icon_down.png' }).parent().parent().children('ul').css('display', 'block');
        } else if (className == 'unfold') {
            $(target).attr({ class: 'fold', src: 'resource/img/page25/icon_point_right.png' }).parent().parent().children('ul').css('display', 'none');
        } else if (className == 'add') {
            var text = prompt("请输入子结点的内容：");
         //   alert(text);
            var parent = $(target).parent().parent().parent();
            var imgfold = $(target).parent().parent().siblings('span').children('img');
            console.log(imgfold);
            if (!$(imgfold).hasClass('fold') && !$(imgfold).hasClass('unfold')) {
                parent.prepend('<span><img class=\"fold\" alt=\"tupian\" src=\"resource/img/page25/icon_down.png\"/></span>');
            } else {
                //var fsd = $(imgfold).has('fold');
                $(imgfold).filter(".fold").attr({ class: 'unfold', src: 'resource/img/page25/icon_down.png' });
            }
            if (parent.is('ul')) {
                parent.children('ul').append('<li>' + text + '<div class=\"add_minus\"><span><img class=\"add\" alt=\"tupian\" src=\"resource/img/page25/add.png\"/></span><span><img class=\"minus\" alt=\"tupian\" src=\"resource/img/page25/minus.png\"/></span></div></li>');
            } else {
                parent.append('<ul><li>' + text + '<div class=\"add_minus\"><span><img class=\"add\" alt=\"tupian\" src=\"resource/img/page25/add.png\"/></span><span><img class=\"minus\" alt=\"tupian\" src=\"resource/img/page25/minus.png\"/></span></div></li></ul>');
            }
            parent.children('ul').css('display', 'block');
        }
    });
}
initUl();
