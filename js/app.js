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

    // email显示新信息
    $("header .email").on('click', function(){
        $(".new-message-pop").css({'left': ($(this).offset().left - 225)+ 'px'}).toggle();
        return false
    });

    // 站內信-列表checkbox监听
    $(".message-list .content li input[type=checkbox]").on('change', function(){
        var checkedLen = $(".message-list .content li input:checked").length
        if(checkedLen>0){
            $(".message-list .head .remove").show();
        }else{
            $(".message-list .head .remove").hide();
        }
    })
    // 站內信-删除
    $(".message-list .head .remove").on('click', function(){
        $(".message-list .content li input:checked").parent().parent().remove();
    });

    // 接受 or 拒绝
    $(".inquiry .accept,.inquiry .refuse").on('click', function(){
        $(this).addClass('disabled');
        if($(this).hasClass('accept')){
            $(".accept-info").show();
            $("textarea[id=content]").val('您好，\n' +
                '很開心在MATCH收到你的履歷！\n' +
                '在看完履歷後，覺得您的個人風格是我們希望找的網美。\n' +
                '希望能進一步洽談合作細節，期待您的回信喔！\n' +
                '謝謝！');
            $("textarea[id=content]").focus();
        }
    });

    // 发送消息
    $(".chert-view .send-btn").on('click', function(){
        var value = $("textarea[id=content]").val();
        var date = moment().format('YYYY MM月DD日 H:mm');
        console.log(date)
        var selfHtm = '<div class="self">\n' +
            '                <div class="con">\n' +
            '                    <div class="date">回覆 <span>2017 9月12日 18:00</span></div>\n' +
            '                    <p>\n' +
            value +
            '                    </p>\n' +
            '                </div>\n' +
            '            </div>';
        $(".chart-list").append($(selfHtm));



    })

    // 展开聊天窗口


    // 全局性事件
    $(document).on('click', function(e){
        if($(e.target).closest('.new-message-pop').length<1){
            $(".new-message-pop").hide();
        };
    });
    $(window).resize(function(){
        $(".new-message-pop").css({'left': ($("header .email").offset().left - 225)+ 'px'})
    });

    // 聊天输入框自动高度
    $("textarea[id=content]").on('input keyup keydown change keypress focus', function(){
        var preHeight = $('#pre').text($(this).val()).height();
        $(this).css({'overflow': 'hidden'});
        if(preHeight >= 300){
            $(this).height(300);
            $(this).css({'overflow': 'auto'});
            return;
        }
        $(this).height(preHeight);
        if(preHeight<18){
            $(this).height(18);;
        }
        resizeView();
    })




})

// 主体区域宽高度计算
function resizeView(){
    // 主体区域宽高
    var clintWidth = $('body').width()-220;
    var clintHeight = $('body').height()-58;
    $("header").css({width: clintWidth + 'px', 'padding-right': '0px'});
    $(".container").css({width: clintWidth + 'px', height: clintHeight + 'px'});
    // 聊天区域
    var chartHeight = $(".chert-view .content").height();
    var chartFooterHeight = $(".chert-view .footer").outerHeight();
    $(".chart-list").height(chartHeight-60-chartFooterHeight);
    $(window).resize(function () {
        // 主体区域宽高
        clintWidth = $('body').width()-220;
        clintHeight = $('body').height()-58;
        $("header").css({width: clintWidth + 'px'});
        $(".container").css({width: clintWidth + 'px', height: clintHeight + 'px'});
        // 聊天区域
        var chartHeight = $(".chert-view .content").height();
        var chartFooterHeight = $(".chert-view .footer").outerHeight();
        $(".chart-list").height(chartHeight-60-chartFooterHeight);
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

// 聊天内容滚动条置底
function resizeChartScroll(){

}
