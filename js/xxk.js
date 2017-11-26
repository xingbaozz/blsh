$.extend({
	tab: function tab (selector1,selector2,className) {
			$(selector1).mouseenter(function () {
				// 移出所有
				$(selector1).removeClass(className);
				$(selector2).hide();
				// 给自己添加
				$(this).addClass(className);
				$(selector2).eq($(this).index()).show();
			})
		}
})
$.extend({
	tab1: function tab1(b,a){
	  $(b).click(function(){
	  	$('body,html').animate({
		        scrollTop:a
		     },800)
	  })
	}
})
$.extend({
	 tab2: function tab2(a,b){
	 	var scrollTop = $(window).scrollTop();
	    if(scrollTop >=a){
           $('.box1200 a').removeClass('on')
           $(b).addClass('on');
        }
	 }
})
$.extend({
	tab3: function tab3 (selector1,selector2,className) {
			$(selector1).click(function () {
				// 移出所有
				$(selector1).removeClass(className);
				$(selector2).hide();
				// 给自己添加
				$(this).addClass(className);
				$(selector2).eq($(this).index()-1).show();
			})
		}
})

