# jquery tab
######jquery手风琴插件
######这个我写的第一个jquery插件，命名为jquery.tab。
===========================

##[Demo](http://lengziyu.com/unit/demos/tab/)
##用法：
```javascript
//no jquery no works
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="jquery.tab.js"></script>

$(document).ready(function(){
  $(".tab").tab();
});
```
###自定义参数：
```javascript
  $(".tab").accordion({
      menu:".menu",       //菜单按钮的父亲
      main:".main",       //切换内容项的父亲
      active:"active",    //当前项的类
      delay:"1000",       //多少时间后切换  默认：2000ms
      event:"click",      //触发的事件   默认click，也可以设置鼠标划过事件（mouseenter）
      auto:true,          //是否自动播放  默认true
      lazyload:true       ////是否开启懒加载   默认true
  });
```
####懒加载：
- 要用到的懒加载图片设置（第二屏起）

 ```
<img class="lazy" data-src="图片地址">
```

###  功能方面
- 1.支持点击(click)和经过(mouseenter)事件进行切换；
- 2.支持自动切换和手动切换，(默认时间2000ms)；
- 3.自定义参数包括：切换按钮项的类、切换内容项的类、当前项的类、自动切换的时间、触发事件及开启/关闭自动切换功能。

###  其他说明
-  后面将陆续增加更多功能，样式的多样性/通用性，敬请期待。
- 当前版本v0.0.2

###  升级说明
- v0.0.2 
  - 加入图片懒加载功能
  - 修复部分BUG
  - 优化
  
