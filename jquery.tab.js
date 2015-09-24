/*
* jquery.tab 0.0.1
* Copyright (c) 2015 lengziyu http://lengziyu.com/
* Date: 2015-09-24
* 使用jquery.tab方便地使用切换功能，支持点击和经过事件，自动切换和手动切换，还有一些可自定义参数
*/
;(function($){
  $.fn.tab = function(options){
    var defaults = {
      //默认按钮菜单
      TabMenu:".menu",
      //默认切换
      TabMain:".main",
      //当前项
      TabActive:"active",
      //默认自动切换时间
      Time:"1000",
      //默认点击切换事件，mouseenter可以设置鼠标划过事件
      Event:"click",
      //是否自动播放
      Auto:true

    };

    var options = $.extend(defaults, options);

    this.each(function(){
      var thisTab = $(this);
      var thisTabMenu = $(thisTab).find(options.TabMenu);
      var thisTabMain = $(thisTab).find(options.TabMain);

      var i = 0;//初始记录用户鼠标经过是第几个li
      var canmove = true;
      thisTabMenu.on(options.Event,"li",function(){
        canmove = false;
        clearInterval(li_time);
        i = $(this).index();
        //设置当前类名
        $(this).addClass(options.TabActive).siblings().removeClass(options.TabActive);
        thisTabMain.find("li").eq(i).addClass(options.TabActive).show().siblings().removeClass(options.TabActive).hide();
        return false
      });

      //鼠标放上去则停止自动播放，否则自动播放
      thisTab.mouseenter(function(){
        canmove = false;
      }).mouseleave(function(){
        clearInterval(li_time);

        //一秒后自动切换
        setTimeout(function(){
          canmove = true;
        },options.Time);
      });

      function li_time(){
        if(canmove){
          i++;
          //如果是最后一个，则跳回第一个
          var len = thisTabMenu.find("li").length;
          if(i == len){
            i = 0;
          }
          thisTabMenu.find("li").eq(i).addClass(options.TabActive).siblings().removeClass(options.TabActive);
          thisTabMain.find("li").eq(i).addClass(options.TabActive).show().siblings().removeClass(options.TabActive).hide();
        }
      }
      //如果Auto是true则自动播放（setInterval），否则（clearInterval）
      if(options.Auto == true){
        Autois = setInterval;
      }else{
        Autois = clearInterval;
      }
      Autois(li_time,options.Time);
    });
  };
})(jQuery);
