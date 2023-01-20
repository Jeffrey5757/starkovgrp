import "./accordion";
import "./decisions";

$(window).resize(function () {
	$('.gallery_item-image').each(function(index, el) {
	   let WidthImage = $(el).width()
	   let HeightImage = WidthImage / 1.77;
	   $(el).css('height', HeightImage)
	});
	$('.certificate_item-image').each(function(index, el) {
	   let WidthImage = $(el).width()
	   let HeightImage = WidthImage / 1.44;
	   $(el).css('height', HeightImage)
	});
}).resize();


$(".video_preview").click(function() {
	$(this).css('display', 'none');

	var $video = $(this).parent().find('iframe:first'),
    src = $video.attr('src');
    $video.attr('src', src + '?rel=0&showinfo=0&autoplay=1');
})


