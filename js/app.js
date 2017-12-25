$(function(){
    // 计算浏览器宽度
    resizeView();
    // 全局返回顶部
    backTop();
    // nav start
    $(".nav-list>li>a").on('click', function(e){
        e.stopPropagation();
        var self = $(this).parent();
        self.addClass('on').siblings().removeClass('on');
        self.siblings().find('ul').slideUp();
        self.siblings().find('i').css({transform: 'rotate(90deg)'})
        self.children('ul').slideToggle(function(){
            if(self.children('ul').css('display')=='none'){
                self.find('i').css({transform: 'rotate(90deg)'})
            }else{
                self.find('i').css({transform: 'rotate(0deg)'})
            }
        });
    })
    // nav end
    // 展开，关闭查询操作
    $(".btn-select").on('click', function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $(".search").animate({top: '-1000px'}, 300)
        }else{
            $(this).addClass('on');
            $(".search").animate({top: '58px'}, 300)
        }
    })
    // search start
    $(".tab-pane input").on('change', function(){
        var index = $(this).parent().index();
        if($(this).parent().find('input:checked').length>0){
            $(this).parent().parent().siblings('.nav').find('li').eq(index).addClass('on');
        }else{
            $(this).parent().parent().siblings('.nav').find('li').eq(index).removeClass('on');
        }
    })
    // 重設
    $(".search .reset").on('click', function(){
        $(".search .nav li").removeClass('on');
        $(".search input:checkbox").prop('checked', false);
    })
    // 关闭
    $(".search .close").on('click', function(){
        $(".btn-select").removeClass('on');
        $(".search").animate({top: '-1000px'}, 300);
    })
    // search end

    // select2 run
    if($("select").length > 0){
        $("select").select2({minimumResultsForSearch: -1,style: 'height: 50px'});
    }

    // 網美寫履歷3-經歷
    $(".input-cos span").on('click', function(){
        if($(this).hasClass('on')){
            removeInput($(this));
        }else{
            addInput($(this));
        }
    })
    $(".input-cos input").on('blur', function(){
        addOn($(this));
    });
    // 添加一行
    function addInput(self){
        self.parent().parent().parent().find('.input-cos span').addClass('on');
        var input = $('<div class="input-cos">\n' +
            ' <input type="text" class="form-control">\n' +
            ' <span></span>\n' +
            ' </div>');
        self.parent().parent().append(input);
        input.find('input').on('blur', function(){
            addOn($(this));
        });
        input.find('span').on('click', function(){
            if($(this).hasClass('on')){
                removeInput($(this));
            }else{
                addInput($(this));
            }
        });
    }
    //减去一行
    function removeInput(self){
        self.parent().remove();
    }
    // 添加class 给.input on
    function addOn(self){
        if(self.val()){
            self.parent().addClass('on');
        }else{
            self.parent().removeClass('on');
        }
    }
    // 删除相關照片操作
    $(".photos1 .photo .del").on('click', function(){
        $(this).hide();
        $(this).siblings('img').remove();
    });

    // 发布工作
    $(".send-work-page .input-group input").on('blur', function(){
        if($(this).val()){
            $(this).siblings().addClass('on');
        }else{
            $(this).siblings().removeClass('on');
        }
    })
    // 合作時間
    $(".send-work-page .cooperation-date").on('change', function(){
        if($(this).val()==1){
            $(this).siblings('input').show();
        }else{
            $(this).siblings('input').hide();
        }
    })
    if($(".send-work-page").length > 0){
        $('.send-work-page .start-date').datepicker({
            language: "zh-CN",
            format: 'yyyy/mm/dd' + '開始'
        });
        $('.send-work-page .end-date').datepicker({
            language: "zh-CN",
            format: 'yyyy/mm/dd' + '結束'
        });
    }
    // 地点
    $("#place").on('change', function(){
        if($(this).context.checked){
            $(".cos-city").show();
        }else{
            $(".cos-city").hide();
        }
    });
    //合作費用
    $("#price").on('change', function(){
        if($(this).context.checked){
            $(this).siblings('.select2').css('display', 'block');
        }else{
            $(this).siblings('.select2').css('display', 'none');
        }
    });
    // 贊助商品
    $("#goods").on('change', function(){
        if($(this).context.checked){
            $(this).siblings('.goods').show();
        }else{
            $(this).siblings('.goods').hide();
        }
    });
    // 需求人數
    $("#ren-number").on('change', function(){
        if($(this).val()==1){
            $('.ren').show();
        }else{
            $('.ren').hide();
        }
    });

    // 儲存網美按钮
    $(".net-desc .rectangle").on('click', function(){
        $(this).addClass('on').find('span').text('已儲存');
    })







})

// 主体区域宽高度计算
function resizeView(){
    var clintWidth = $('body').width()-220;
    var clintHeight = $('body').height()-58;
    $("header").css({width: clintWidth + 'px', 'padding-right': '0px'});
    $(".container").css({width: clintWidth + 'px', height: clintHeight + 'px'});
    $(window).resize(function () {
        clintWidth = $('body').width()-220;
        clintHeight = $('body').height()-58;
        $("header").css({width: clintWidth + 'px'});
        $(".container").css({width: clintWidth + 'px', height: clintHeight + 'px'});
    })
}
// 返回顶部
function backTop(){
    $(".slider-top").on('click', function(){
        $(".container").animate({scrollTop: 0+'px'},300);
    })
    $(".container").scroll(function(){
        if($(this).scrollTop()>350){
            $(".slider-top").fadeIn(300);
        }else{
            $(".slider-top").fadeOut(300);
        }
    });
}