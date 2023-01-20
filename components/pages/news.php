<?php get_header(); ?>

		<section class="page page-news text-page">
			<div class="container">
				<div class="breadcrumbs">
					<ul itemscope="" itemtype="http://schema.org/BreadcrumbList">
						<?php bcn_display(); ?>
					</ul>
				</div>

				<h1 class="page-title"><?php echo the_title(); ?></h1>
				<div class="text-page__wrap news">
					<div class="search-head">
						<div class="post-search">
							<input type="text" class="searchform" name="s" id="s" placeholder="Ищу новость ..." value=""/>
							<button>
								<svg role="img" class="search-svg">
									<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?php bloginfo('template_url'); ?>/static/images/sprite.svg#lupa"></use> 
								</svg>
							</button>
						</div>
						<div class="my-select select-year-of">
							<div class="my-select-header">
								<input type="hidden" name="select-year-of" class="my-select-header__selected" value="all">
								<p class="my-select-header__option">За всё время</p>
								<svg role="img" class="my-select-header__svg">
									<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?php bloginfo('template_url'); ?>/static/images/sprite.svg#select"></use>
								</svg>
							</div>
		
							<div class="my-select-dropdown">
								<a href="#" class="my-select-dropdown__option selected" data-select="all">За всё время</a>
									<a href="#" class="my-select-dropdown__option" data-select="2021">2021</a>
									<a href="#" class="my-select-dropdown__option" data-select="2020">2020</a>
									<a href="#" class="my-select-dropdown__option" data-select="2019">2019</a>
							</div>
						</div>
					</div>
					<div class="page-news__wrap">
						<?php get_template_part('components/ajax/article');?>
					</div>
				</div>
			</div>
		</section>
	
<?php get_footer(); ?>
