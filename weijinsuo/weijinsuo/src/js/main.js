$(function(){
	function resize(){
		var winWidth = $(window).width();
		var isSmall = winWidth < 768;
		$("#main_d > .carousel-inner > .item").each(function(i,item){
			var $item = $(item);
			var imgSrc = isSmall?$item.data("image-sm"):$item.data("image-lg");
			$item.css("background-image",'url("'+imgSrc+'")');
			if(isSmall){
				$item.html('<img src="'+imgSrc+'" alt=".."/>');
			}else{
				$item.empty();
			}
		});
	}
	$(window).on("resize",resize).trigger("resize");
	$('[data-toggle="tooltip"]').tooltip();

	var $ulAll = $(".nav-tabs");
	var $cArr = $ulAll.children();
	var w = 0;
	$cArr.each(function(index, element){
		w += $(element).width();
	});
	$ulAll.css("width", w);

	var $ltNews = $("#lt-news")
	$(".nav-stacked  a").on("click", function(){
		var $title = $(this).data("title");
		$ltNews.text($title);
	})

	var $carousel = $('.carousel');
	var startX, endX;
	var offsX=50;
	$carousel.on("touchstart", function(e){
		startX = e.originalEvent.touches[0].clientX;
	})
	$carousel.on("touchmove", function(e){
		endX = e.originalEvent.touches[0].clientX;
	})
	$carousel.on("touchend", function(e){
		var movX = Math.abs(startX-endX);
		if(movX>offsX){
			$(this).carousel(startX>endX?"next":"prev");
		}	
	})
})