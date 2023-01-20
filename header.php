<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php wp_title(); ?> <?php bloginfo('name'); ?></title>
	<?php the_field('header_script', 'option'); ?>
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />

	<script src='https://www.google.com/recaptcha/api.js'></script>


	<?php wp_head(); ?> 
</head>
<body>


	<!-- Mobile menu -->
	<nav class="mobile-menu">
		<ul class="mobile-menu__wrapper">
			<li><a href="javascript:void(0)" class="header-feedback callback">
				<svg role="img" class="comment-svg">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?php bloginfo('template_url'); ?>/static/images/static-sprite.svg#comment"></use> 
				</svg>
				Создать обращение
			</a></li>
			<li><a href="<?php echo get_field('link', 'option');?>" class="header-feedback" target="_blank">
				<svg role="img" class="user-svg">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?php bloginfo('template_url'); ?>/static/images/static-sprite.svg#user"></use> 
				</svg>
				Войти
			</a></li>
			<li><a href="/">Главная</a></li>
			<?php wp_nav_menu( array('menu'=>'header_menu', 'container' => false, 'items_wrap' => '%3$s') ); ?>
		</ul>
	</nav>
	<!-- /Mobile menu -->

	<div class="page-wrapper">
		<main>
			<header class="header">
				<div class="container">
					<div class="header__wrapper">
						<a href="#" class="mobile-menu-open">
							<span class="mobile-menu-open__button"></span>
						</a>

						<a href="/" class="logo">
							<img src="<?php bloginfo('template_url'); ?>/static/images/logo.png" alt="" class="logo__img">
						</a>
						

						<nav class="header-menu">
							<ul>
								<?php wp_nav_menu( array('menu'=>'header_menu', 'container' => false, 'items_wrap' => '%3$s') ); ?>
							</ul>
						</nav>

						<a href="javascript:void(0)" class="header-feedback callback">
							<svg role="img" class="comment-svg">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?php bloginfo('template_url'); ?>/static/images/static-sprite.svg#comment"></use> 
							</svg>
							Создать обращение
						</a>
						<?php 
						$link = get_field('link', 'option');
						?>
						<a href="<?php if($link) { echo $link; } else {echo 'javascript: void(0)'; } ?>" class="header-feedback link-account" target="_blank">
							<svg role="img" class="user-svg">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?php bloginfo('template_url'); ?>/static/images/static-sprite.svg#user"></use> 
							</svg>
							Войти
						</a>

						<div class="header-contact">
						<?php 
						$repiater = get_field('contacts', 'option');
						$first_row = $repiater[0];
						$phone = $first_row['tel']; ?>
							<a href="tel:8 (343) 385-75-85" class="phone"><span><?php echo substr($phone, 0, 7);?></span><?php echo substr($phone, 7);?></a>
							<a class="callback-feadback" href="#">Обратный звонок</a>
						</div>
						<a href="javascript:void(0)" class="mobile-menu-phone callback">
							<svg role="img" class="mobile-phone">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?php bloginfo('template_url'); ?>/static/images/sprite.svg#phone"></use> 
							</svg>
						</a>
					</div>
				</div>
			</header>