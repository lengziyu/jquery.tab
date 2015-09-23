;(function($){
  $.fn.tab = function(options){
    var defaults = {
      myTab:".tab",
      myTabMenu:".menu",
      myTabMain:".main"
    };
    var options = $.extend(defaults, options);
    this.each(function(){
      var thisTab = $(this);
      var thisTabMenu = $(thisTab).find(defaults.myTabMenu);
      var thisTabMain = $(thisTab).find(defaults.myTabMain);
      thisTabMenu.on("click","li",function(){
        var tihsCurrent = $(this);
        $(this).addClass("current").siblings().removeClass("current");
        thisTabMain.find("li").eq(thisTabMenu.children().index(tihsCurrent)).addClass("current").siblings().removeClass("current");
        return false
      });
    });
  };
})(jQuery);
