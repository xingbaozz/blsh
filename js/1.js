$(function(){
  // 第一块
  $('.li3').mouseenter(function(){
  	 $('.box2').show();
  	 $('.box2').css({boxShadow:'0 0 5px #ccc',zIndex:10});
  })
  $('.box2').mouseleave(function(){
  	 $('.box2').hide();
  });
  $('.li4').mouseenter(function(){
  	  $('.box3').show();
  	  $('.box3').css({boxShadow:'0 0 5px #ccc'});
  });
  $('.box3').mouseleave(function(){
  	 $('.box3').hide();
  });
  //送货显示
  $('.spa').click(function(){
     $('.spa').css({borderColor:'green'});
     $('.boxd').css({display:'block'});
     $('.black').show();
  });
  $('.b1').click(function(){
     $('.spa').css({borderColor:'#ccc'});
     $('.boxd').css({display:'none'});
     $('.black').hide();
  });
  //第二块
  $('.ul2 li').eq(0).show();
  var iNow=0;
  var a=$('.ul2 li').length;
  setInterval(function(){ 
     $('.ul2 li').hide();
     iNow++;
     if(iNow>=a){
     	iNow=0;
     }
     $('.ul2 li').eq(iNow).show();
  },2000)
  //搜索框一行
  $('.ipt').focus(function(){
      $('.ipt').val('');
  });
  $('.ipt').blur(function(){
      $('.ipt').val('秘鲁蓝莓199元12盒');
  });
  //我的本来
  $('.right-left').mouseenter(function(){
    $(this).css({background:'#fff'});
    $('#dingdan').show();
  }); 
  $('.right-left').mouseleave(function(){
    $(this).css({background:'#f8f8f6'});
    $('#dingdan').hide();
  }); 
  //购物车
  $('.right-right').mouseenter(function(){
      $(this).css({background:'#fff'});
      $('#pangdan').show();
  });
  $('.right-right').mouseleave(function(){
     $(this).css({background:'#f8f8f6'});
     $('#pangdan').hide();
  });
// // 轮播选项卡
$('.div-a-ul li').mouseenter(function(){
     $('.boxg li').hide();
     $('.div-a-ul li').css({background:'rgba(255,255,255,.7)'});
     var c=$(this).index();
     console.log(c);
     zxb=c;
     $('.boxg li').eq(c).fadeIn();
     $('.div-a-ul li').eq(c).css('background','#8ab700');
});
$('.div-a').mouseenter(function(){
    clearInterval(tid);
    $('.div-a dl').css('opacity',1);
    $('.div-a-ul li').stop().animate({marginTop:117},500)
});
  //大轮播图
  $('.boxg li').eq(0).show();
  $('.div-a-ul li').eq(0).css({background:'#8ab700'});
  var b=$('.boxg li').length;
  var zxb=0;
  //上一页
  function pre(){ 
     $('.boxg li').hide();
     $('.div-a-ul li').css({background:'rgba(255,255,255,.7)'});
     zxb--;
     if(zxb<0){
      zxb=5;
     }
     $('.boxg li').eq(zxb).fadeIn();
     $('.div-a-ul li').eq(zxb).css('background','#8ab700')
  }
  // 下一页
  function next(){ 
     $('.boxg li').hide();
     $('.div-a-ul li').css({background:'rgba(255,255,255,.7)'});
     zxb++;
     if(zxb>=b){
      zxb=0;
     }
     $('.boxg li').eq(zxb).fadeIn();
     $('.div-a-ul li').eq(zxb).css('background','#8ab700')
  }
  var tid=setInterval(next,3000);
  $('.boxg').mouseenter(function(){
      clearInterval(tid);
      $('.div-a-ul li').stop().animate({marginTop:117},500)
      $('.div-a dl').css('opacity',1);
   });
  $('.box-3').mouseleave(function(){
      tid=setInterval(next,3000)
      $('.div-a-ul li').stop().animate({marginTop:145},500)
      $('.div-a dl').css('opacity',0);
   });
  $('.div-a').mouseleave(function(){
       tid=setInterval(next,3000)
      $('.div-a-ul li').stop().animate({marginTop:145},500)
      $('.div-a dl').css('opacity',0);
  });
//上一页
  $('.div-a-dt').click(function(){
      pre();
  });
//下一页
  $('.div-a-dd').click(function(){
      next();
  });
  // 商品分类选项卡
$('.boxh dl').mouseenter(function(){
     var a=$(this).index()
    $('.boxh dl dd').eq(a).show();
    $('.boxh dl dt').eq(a).css({border:'1px solid #8ab700',borderRight:'none'});
});
$('.boxh dl').mouseleave(function(){
     var a=$(this).index()
    $('.boxh dl dd').eq(a).hide();
    $('.boxh dl dt').eq(a).css({border:'1px solid #fff'});
});
// 选项卡
$('#dl-dd').show();
$('#d-top dl').eq(0).css({borderRight:'1px solid #fff',color:'#8ab700'})
$('#d-top dl').eq(0).css({borderLeft:'3px solid #8ab700',background:'#fff'})
$('#d-top dl').eq(0).mouseenter(function(){
    $('#d-top dl').eq(1).css({borderRight:'1px solid #8ab700',color:'#333',background:'#f8f8f6'})
    $('#d-top dl').eq(1).css({borderLeft:'none',color:'#333'})
    $('#dl-dd2').hide();
    $('#dl-dd').show();
    $(this).css({borderRight:'1px solid #fff',color:'#8ab700',})
    $(this).css({borderLeft:'3px solid #8ab700',background:'#fff'})
});
$('#d-top dl').eq(1).mouseenter(function(){
    $('#d-top dl').eq(0).css({borderRight:'1px solid #8ab700',color:'#333',background:'#f8f8f6'})
    $('#d-top dl').eq(0).css({borderLeft:'none',color:'#333'})
    $('#dl-dd').hide();
    $('#dl-dd2').show();
    $(this).css({borderRight:'1px solid #fff',color:'#8ab700'})
    $(this).css({borderLeft:'3px solid #8ab700',background:'#fff'})
});
// 时间加0
  function addZero (n) {
    if (n < 10) {
      return '0'+n;
    } else {
      return n;
    }
  }
// 时间
Time();
function Time(){
   var oDate = new Date();
// 当前的时间戳
var nowTime = oDate.getTime();
// 设置时间
 oDate.setFullYear(2017,10,4);
 oDate.setHours(24,0,0);
var targetTime = oDate.getTime();
//倒计时的总时间(秒)
      var distance = parseInt((targetTime - nowTime) / 1000);
      // 天
      var day = parseInt(distance / 86400);
      // 剩下的秒数
      var a = distance % 86400;
      // 时
      var hour = parseInt(a / 3600);
      // 剩下的秒数
      var b = a % 3600;
      //分
      var mintues = parseInt(b / 60);
      //秒数
      var seconds = b % 60;
   $('.p-sp-1').html(addZero(hour))   
   $('.p-sp-2').html(addZero(mintues))
}
setInterval(Time,1000)
//时令鲜果
$.tab('.div-9 .div-9-2 .div9-top-li','.div-9 .div-9-2 .div9-top li dd','active')
// 蔬菜菌菇
$.tab('.div-12 .div-9-2 .div9-top-li','.div-12 .div-9-2 .div9-top li dd','active')
// 水产海鲜
$.tab('.div-13 .div-9-2 .div9-top-li','.div-13 .div-9-2 .div9-top li dd','active')
// 肉禽蛋品
$.tab('.div-14 .div-9-2 .div9-top-li','.div-14 .div-9-2 .div9-top li dd','active')
// 居家优选
$.tab('.div-15 .div-9-2 .div9-top-li','.div-15 .div-9-2 .div9-top li dd','active')
// 熟食面点
$.tab('.div-16 .div-9-2 .div9-top-li','.div-16 .div-9-2 .div9-top li dd','active')
// 酒水冲饮
$.tab('.div-17 .div-9-2 .div9-top-li','.div-17 .div-9-2 .div9-top li dd','active')
// 烘培乳品
$.tab('.div-18 .div-9-2 .div9-top-li','.div-18 .div-9-2 .div9-top li dd','active')
// 休闲食品
$.tab('.div-19 .div-9-2 .div9-top-li','.div-19 .div-9-2 .div9-top li dd','active')
// 厨房用品
$.tab('.div-20 .div-9-2 .div9-top-li','.div-20 .div-9-2 .div9-top li dd','active')
// 动画点击
$.tab3('.div-6 .dd-1','.div-6 .gjk .div-6-left','')  
$.tab3('.div-6 .dd-2','.div-6 .gjk .div-6-left','')  
$.tab3('.div-6 .dd-3','.div-6 .gjk .div-6-left','')
$.tab3('.div-6 .dd-4','.div-6 .gjk .div-6-left','') 
$.tab3('.div-6 .dd-5','.div-6 .gjk .div-6-left','')  
//左翼吸顶条
// 显示第一个图标
var top=$('.div-5').offset().top;
// 显示2，3，4图标
var top1=$('.div-8').offset().top;
// 显示5，6，7图标
var top2=$('.div-13').offset().top;
// 显示8，9，10，11图标
var top3=$('.div-16').offset().top;
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
        if (scrollTop >=top) {
          // 让吸顶条的position:fixed;显示替代的条
          $('.box1200').css({position:'fixed',left:'131.5px'})
          $('.ipc-1').css({display:'block'});
        } else {
          $('.box1200').css({position:'static'})
          $('.ipc-1').hide();
        };
        if (scrollTop >=top1) {
          $('.ipc-2').css({display:'block'});
          $('.ipc-3').css({display:'block'});
          $('.ipc-4').css({display:'block'});
        }
        if (scrollTop >=top2) {
          $('.ipc-5').css({display:'block'});
          $('.ipc-6').css({display:'block'});
          $('.ipc-7').css({display:'block'});
        }
        if (scrollTop >=top3) {
          $('.ipc-8').css({display:'block'});
          $('.ipc-9').css({display:'block'});
          $('.ipc-10').css({display:'block'});
          $('.ipc-11').css({display:'block'});
        }
        // 鼠标滑到指定位置变背景图
        var effect1=$('.div-9').offset().top-200;
        var effect2=$('.div-12').offset().top-200;
        var effect3=$('.div-13').offset().top-200;
        var effect4=$('.div-14').offset().top-200;
        var effect5=$('.div-15').offset().top-200;
        var effect6=$('.div-16').offset().top-200;
        var effect7=$('.div-17').offset().top-200;
        var effect8=$('.div-18').offset().top-200;
        var effect9=$('.div-19').offset().top-200;
        var effect10=$('.div-20').offset().top-200;
        $.tab2(effect1,'.box1200 .ipc-2')
        $.tab2(effect2,'.box1200 .ipc-3')
        $.tab2(effect3,'.box1200 .ipc-4')
        $.tab2(effect4,'.box1200 .ipc-5')
        $.tab2(effect5,'.box1200 .ipc-6')
        $.tab2(effect6,'.box1200 .ipc-7')
        $.tab2(effect7,'.box1200 .ipc-8')
        $.tab2(effect8,'.box1200 .ipc-9')
        $.tab2(effect9,'.box1200 .ipc-10')
        $.tab2(effect10,'.box1200 .ipc-11')
        if(scrollTop>=700){
           $('.gotop-1').css({opacity:1});
        }else{
            $('.gotop-1').css({opacity:0});
        }
  });  
  // 右翼吸顶条上升
  $.tab1('.gotop-1',0)
 // 左翼吸顶条点击指定位置事件
  $.tab1('.ipc-1',0)
  $.tab1('.ipc-2',$('.div-9').offset().top-200)
  $.tab1('.ipc-3',$('.div-12').offset().top-200)
  $.tab1('.ipc-4',$('.div-13').offset().top-200)
  $.tab1('.ipc-5',$('.div-14').offset().top-200)
  $.tab1('.ipc-6',$('.div-15').offset().top-200)
  $.tab1('.ipc-7',$('.div-16').offset().top-200)
  $.tab1('.ipc-8',$('.div-17').offset().top-200)
  $.tab1('.ipc-9',$('.div-18').offset().top-200)
  $.tab1('.ipc-10',$('.div-19').offset().top-200)
  $.tab1('.ipc-11',$('.div-20').offset().top-200)
  // 动画
  $('.dd-1').click(function(){
      $('.div6-dt').animate({left:229,top:31},500);
  });
  $('.dd-2').click(function(){
      $('.div6-dt').animate({left:423,top:20},500);
  });
  $('.dd-3').click(function(){
      $('.div6-dt').animate({left:615,top:47},500);
  });
  $('.dd-4').click(function(){
      $('.div6-dt').animate({left:804,top:23},500);
  });
  $('.dd-5').click(function(){
      $('.div6-dt').animate({left:1017,top:37},500);
  });

});




















