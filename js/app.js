$(function(){
    // 计算浏览器宽度
    resizeView();
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
    $(".input span").on('click', function(){
        if($(this).hasClass('on')){
            removeInput($(this));
        }else{
            addInput($(this));
        }
    })
    $(".input input").on('blur', function(){
        addOn($(this));
    });
    // 添加一行
    function addInput(self){
        self.parent().parent().parent().find('.input span').addClass('on');
        var input = $('<div class="input">\n' +
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