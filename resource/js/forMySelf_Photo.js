(function () {
    var imgIndex = 0;
    var imageMorePositin = document.getElementById("album");
    var album = [
                    { src: "resource/img/forMySelf/header.png", explain: "人生就像是一场旅行" },
                    { src: "resource/img/forMySelf/new_time_person.png", explain: "谁也不知道途中会遇到什么" },
                    { src: "resource/img/forMySelf/new_world_time.png", explain: "可能这就是人生的乐趣所在" },
                    { src: "resource/img/forMySelf/header.png", explain: "人生就像" },
                    { src: "resource/img/forMySelf/new_time_person.png", explain: "谁也不知道" },
                    { src: "resource/img/forMySelf/new_world_time.png", explain: "乐趣所" },
                    { src: "resource/img/forMySelf/header.png", explain: "一场旅行" },
                    { src: "resource/img/forMySelf/new_time_person.png", explain: "会遇到什么" },
    ]

    $('#album').on('mouseover mouseout', function (event) {
        var $target = $(event.target).closest('div.picture');
        var $details = $target.find('.details');
        if (event.type == 'mouseover') {
            $details.removeClass('detailDefault').addClass('detailShow')
        } else if (event.type == 'mouseout') {
            $details.removeClass('detailShow').addClass('detailDefault');
        }
    });


    $('div.left a').on('click', function (event) {
        event.preventDefault();
        var html = '';
        for (var i = 0; i < 2; i++, imgIndex++) {
            var index = imgIndex % 8;
            html += '<div class="picture"><img alt="here is a picture"' + 'src="' + album[index].src + '" />' + '<div class="details detailDefault">' + album[index].explain + '</div></div>';
        }
        $('#album div.left').before(html).slideDown('slow');
    });
})();