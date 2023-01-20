<?php get_header(); ?>

<section class="page page-404">
	<div class="container">
		<div class="breadcrumbs clearfix">
			<ul class="clearfix">
				<li>
					<a href="/">Главная</a>
				</li>
				<li><span>404</span></li>
		</div>
		<div class="page-404__wrap">
			<div class="page-404__text-block">
				<p class="page-404__title">Страница не найдена</p>
				<p class="page-404__text">Возможно она удалена, перемещена или никогда <br /> не существовала — проверьте правильность написания адреса или перейдите на главную</p>
				<a class="button button-green page-404__button" href="/">На главную</a>
			</div>
			<div class="page-404__image-wrap">
				<img class="page-404__image" src="<?php bloginfo('template_url'); ?>/static/images/404.png">
			</div>
		</div>
	</div>
</section>

<?php get_footer(); ?>