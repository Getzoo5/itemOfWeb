// JavaScript Document
$(function () {
    var index = 0;

    //所有车系的数据
   /* var data = [
        {
            "name":"350GT",
            "datas":[
                {
                    "year": 1964,
                    "carImg": "img/1.png"
                },
                {
                    "year": 1964,
                    "cars": [{"name":"coupe", "carImg":"img/1.png"}]
                },
                {
                    "year": 1964,
                    "cars": [{"name":"coupe", "carImg":"img/1.png"}]
                },
                {
                    "year": 1964,
                    "carImg": "img/1.png"
                },
                {
                    "year": 1964,
                    "carImg": "img/1.png"
                },
                {
                    "year": 1964,
                    "carImg": "img/1.png"
                },
                {
                    "year": 1964,
                    "carImg": "img/1.png"
                },
                {
                    "year": 1964,
                    "carImg": "img/1.png"
                },
            ]
        }
    ];*/

    var arr = [1964, 1965, 1966, 1968, 1970, 1971, 1972, 1976, 1981, 1986, 1990, 2001, 2003, 2004, 2006, 2007, 2008, 2009, 2010, 2011, 2013];
    //注册点击事件
    $("#con_in3 ol li").click(function () {
        index = $(this).index();
        ShowjQuery(index);
        //当前点击#con_in3 ol li 的样式定义
        $(this).css({"color": "#000", "borderBottomColor": "#000"}).siblings().css({
            "color": "#999",
            "borderBottomColor": "#ccc"
        });

    });

    if (index == 0) {
        $(".his-in section.a").show().animate({opacity: 1}, {zIndex: 1}, 2500);
        $(".his-in section.b").eq(2).find(".big").hide();
        $(".his-in section.b").eq(2).find(".small").removeClass("tac tar").addClass("tal").animate({
            opacity: 1,
            zIndex: 0
        }, 2500);
    }

    //获取屏幕宽度
    function client() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0
        };
    }

    //点击下方olLi 左右翻页动画实现 上方年份 联动
    //遍历生成每一项
    for (var i = 0; i < arr.length; i++) {
        var his_in = document.getElementById("his_in");
        var section = document.createElement("section");
        section.innerHTML = "<div class='big'>" + arr[i] + "</div><div class='small'><div>" + arr[i] + "</div></div>";
        his_in.appendChild(section);
        section.className = "b";
        section.style.width = client().width / 2 + "px";
    }

    $(".his-in section.b").eq(1).css({opacity: 1, zIndex: 1}).find(".big").css({opacity: 0, zIndex: 0}).end().find(".small").addClass("tal");

    //
    var bigW = section.offsetWidth;
    $("section.a").css("width", bigW);

    //鼠标悬浮效果  in2inner 悬浮时 bgover 显示
    //问题:li中出现两个in2inner时 (同一显示页面) mouseenter 会同时影响到两个in2inner的显示
    $("li>.in2inner").mouseenter(function () {
        $(".bgover").animate({opacity: 1}, 500);
        $(".discover").animate({opacity: 1}, 500);
    });
    $("li>.in2inner").mouseleave(function () {
        $(".bgover").animate({opacity: 0}, 500);
        $(".discover").animate({opacity: 0}, 500);
    });
    //两个in2inner的时候
    $("li .big-in2>.in2inner").mouseenter(function () {
        $(".in2inner>.bgover").animate({opacity: 1}, 500);
        $(".in2inner>.discover").animate({opacity: 1}, 500);
    });
    $("li .big-in2>.in2inner").mouseleave(function () {
        $(".in2inner>.bgover").animate({opacity: 0}, 500);
        $(".in2inner>.discover").animate({opacity: 0}, 500);
    });
    //
    $("li .big-in2>.in2inner1").mouseenter(function () {
        $(".in2inner1>.bgover").animate({opacity: 1}, 500);
        $(".in2inner1>.discover").animate({opacity: 1}, 500);
    });
    $("li .big-in2>.in2inner1").mouseleave(function () {
        $(".in2inner1>.bgover").animate({opacity: 0}, 500);
        $(".in2inner1>.discover").animate({opacity: 0}, 500);
    });
    //三个in2inner的时候
    $("li .big-in3>.in2inner").mouseenter(function () {
        $(".in2inner>.bgover").animate({opacity: 1}, 500);
        $(".in2inner>.discover").animate({opacity: 1}, 500);
    });
    $("li .big-in3>.in2inner").mouseleave(function () {
        $(".in2inner>.bgover").animate({opacity: 0}, 500);
        $(".in2inner>.discover").animate({opacity: 0}, 500);
    });
    //
    $("li .big-in3>.in2inner1").mouseenter(function () {
        $(".in2inner1>.bgover").animate({opacity: 1}, 500);
        $(".in2inner1>.discover").animate({opacity: 1}, 500);
    });
    $("li .big-in3>.in2inner1").mouseleave(function () {
        $(".in2inner1>.bgover").animate({opacity: 0}, 500);
        $(".in2inner1>.discover").animate({opacity: 0}, 500);
    });
    //
    $("li .big-in3>.in2inner2").mouseenter(function () {
        $(".in2inner2>.bgover").animate({opacity: 1}, 500);
        $(".in2inner2>.discover").animate({opacity: 1}, 500);
    });
    $("li .big-in3>.in2inner2").mouseleave(function () {
        $(".in2inner2>.bgover").animate({opacity: 0}, 500);
        $(".in2inner2>.discover").animate({opacity: 0}, 500);
    });



    //点击左右按钮 翻页
    //ol li 按钮失效
    $("#btn_r").on("click",function(){
        index++;
        ShowjQuery(index);
    });
    $("#btn_l").on("click",function(){
        index--;
        ShowjQuery(index);
    });

    document.ondragenter = function(){
        console.log('拖动进入目标元素');
    }.ondragover = function(){
        console.log('目标元素中拖拽');
    }.ondragleave = function(){
        console.log('拖动离开目标元素');
        index++;
        ShowjQuery(index);
    };ondrop= function(){
        console.log('离开');
    }



    function ShowjQuery(i) {
        $("#con_in3 ol li").eq(i).css({"color": "#000", "borderBottomColor": "#000"}).siblings().css({"color": "#999","borderBottomColor": "#ccc"});
        $("#con_in2 ul li").eq(i).animate({opacity: 1,"z-index": "1"},1500).show().siblings().animate({opacity: 0,"z-index": "0"},1500).hide();
        $(".his-in").animate({left: -bigW * (i) + "px"}, 1500);
        $(".his-in section.b").eq(i).animate({
            opacity: 1,
            zIndex: 1
        }, 2500).siblings(".big").animate({opacity: 0, zIndex: 0}, 1500).end().find(".small").removeClass("tal tar").addClass("tac").animate({
            opacity: 1,
            zIndex: 1
        }, 2500).end().find(".big").animate({opacity: 1, zIndex: 1});
        //左右年份
        $(".his-in section.b").eq(i + 1).find(".big").animate({opacity: 0, zIndex: 0}).end().find(".small").removeClass("tac tar").addClass("tal").animate({
            opacity: 1,
            zIndex: 0
        }, 2500);
        $(".his-in section.b").eq(i - 1).find(".big").animate({opacity: 0, zIndex: 0}).end().find(".small").removeClass("tac tal").addClass("tar").animate({
            opacity: 1,
            zIndex: 0
        }, 2500);
        $(".dot").animate({opacity: 0, zIndex: 0}, 1000).animate({opacity: 1, zIndex: 4}, 500);
    }
});