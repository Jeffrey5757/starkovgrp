
function openMobileMenu(event) {
	event.preventDefault();

	if( this.classList.contains('active') ) {
		this.classList.remove('active')

		Array.prototype.slice.call(document.querySelectorAll('.sub-menu')).forEach(function(el) {
			el.classList.remove('active')
		})

		document.querySelector('.mobile-menu').classList.remove('opened')
		document.querySelector('body').classList.remove('opened')
	} else {
		this.classList.add('active')
		document.querySelector('.mobile-menu').classList.add('opened')
		document.querySelector('body').classList.add('opened')
	}
}
document.querySelector('.mobile-menu-open').onclick = openMobileMenu



function mobileMenu() {
	$(".mobile-menu li.menu-item-has-children > a").each(function(e) {
		$(this).wrapInner('<span></span>')
		$(this).append('<svg role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="'+ window.templateUrl +'/static/images/sprite.svg#arr"></use></svg>');
	});

	$('.mobile-menu ul li.menu-item-has-children > a').click(function(event) {
		event.preventDefault();
		$(this).siblings('.sub-menu').toggleClass('active');
		$('.mobile-menu').css('overflow', 'hidden');
	});
	
	let link = document.querySelector('.link-account');
	let linkAccount = link.href;
	
	$('.mobile-menu ul li.menu-item-has-children > ul.sub-menu').prepend('<li><a href="javascript: void(0)" class="callback header-feedback"><svg role="img" class="comment-svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="'+ window.templateUrl +'/static/images/static-sprite.svg#comment"></use></svg>Создать обращение</a></li><li><a href="' + `${linkAccount}` + '" class="header-feedback"><svg role="img" class="user-svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="'+ window.templateUrl +'/static/images/static-sprite.svg#user"></use></svg>Войти</a></li>');
	$('.mobile-menu ul li.menu-item-has-children > ul.sub-menu').prepend('<li class="back"><a href="#"><svg role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="'+ window.templateUrl +'/static/images/sprite.svg#arr"></use></svg>Назад в меню</a></li>');
	$('.back > a').click(function(event){
		event.preventDefault()
		$(this).parent('li').parent('ul').removeClass('active');
		$('.mobile-menu').css('overflow', 'auto');
	});
}
mobileMenu()