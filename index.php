<?php get_header(); ?>

<section class="section_slider">
	<?php 
		$slider = get_field('slider', 'option');
    	$count_slides = count($slider);
	?>
	<div class="slider single-item">
		<?php if( have_rows('slider', 'option') ):?>
			<?php while( have_rows('slider', 'option') ): the_row(); 
				// переменные
				$image = get_sub_field('slider__image');
				$description = get_sub_field('slider__description');
				$title = get_sub_field('slider__title');
				$subtitle = get_sub_field('slider__subtitle');
				$link = get_sub_field('slider__link');
			?>
			<div class="slider_item">
				<div class="container">
					<div class="slider_item-text">
						<p class="slider_item-description"><?php echo $description; ?></p>
						<p class="slider_item-title"><?php echo $title; ?></p>
						<p class="slider_item-subtitle"><?php echo $subtitle; ?></p>

						<?php if($link): ?>
							<a href="<?php echo $link; ?>" class="slider_item-link">Подробнее</a>
						<?php endif; ?>
						
					</div>
				</div>
				<?php if($image): ?>
					<img class="slider_item-image" src="<?php echo $image; ?>">
				<?php  endif;?>
			</div>
		<?php endwhile; ?>
		<?php endif; ?>
	</div>

	<div class="main-slider-controls">
	    <a href="#" class="main-slider-arrow prev">
	        <svg role="image" class="main-slider-arrow__svg">
	            <use xlink:href="<?php bloginfo('template_url'); ?>/static/images/sprite.svg#arr-left">
	        </svg>
	    </a>
	     <p class="main-slider-current-slide">
	        <span id="current-slide">01 /</span>
	        <span class="count-slide"><?php echo $count_slides; ?></span>
	    </p>
	    <a href="#" class="main-slider-arrow next">
	        <svg role="image" class="main-slider-arrow__svg">
	            <use xlink:href="<?php bloginfo('template_url'); ?>/static/images/sprite.svg#arr-right">
	        </svg>
	    </a>
	</div>
</section>

<section class="section_decisions">
	<div class="section__decisions_item main">
		<p class="section_decisions-title"><?php the_field('block-title', 'option'); ?></p>
		<p class="section_decisions-description"><?php the_field('block-description', 'option'); ?></p>
	</div>
	<?php
		$links = get_field('block-page', 'option');
		if ($links) :?>
			<?php $count = 0; ?>
		    <?php foreach ($links as $post) : ?> 
		    	<?php 
		    		if($count < 5): ?>
		    			 <?php setup_postdata($post); ?>
				        <?php 
				        	$ID = $post->ID; 
				        	$group = get_field('display_icon-main', $ID);
				        	$icon = $group['icon'];
				        	$icon_hover = $group['icon-hover'];
				        ?>
				        <a href="<?php the_permalink(); ?>" class="section__decisions_item">
				        	<p class="section__decisions_item-title"><?php the_title(); ?></p>
				        	<p class="section__decisions_item-description"><?php the_field('page-description', $ID); ?></p>
				        	<?php if($icon): ?>
				        		<img src="<?php echo $icon; ?>" class="section__decisions_item-image">
				        	<?php endif; ?>
				        	<?php if($icon_hover): ?>
				        		<img src="<?php echo $icon_hover; ?>" class="section__decisions_item-image hover">
				        	<?php endif; ?>
				        </a>
				       <?php else: break;?>
		    		<?php endif; $count++;?>
		    <?php endforeach; ?>
		    <?php wp_reset_postdata(); ?> 
		<?php endif; ?>
		<a href="<?php the_permalink(196); ?>" class="section__decisions_item link-decisions">
			Все решения
			<svg role="img" class="decisions-svg">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?php bloginfo('template_url'); ?>/static/images/sprite.svg#arr"></use> 
			</svg>
		</a>
</section>

<section class="section_services">
	<p class="section_services-title">Услуги</p>
	<div class="section_services-wrap">
		<img src="<?php the_field('services-image', 'option');?>" class="section_services-image"/>
		<div class="section_services-list">
			<?php
				$links = get_field('services-pages', 'option');
				if ($links) :?>
				    <?php foreach ($links as $post) : ?> 
				        <?php setup_postdata($post); ?>
				        <?php 
				        	$ID = $post->ID; 
				        	$group = get_field('display_icon-main', $ID);
				        	$icon = $group['icon'];
				        	$icon_hover = $group['icon-hover'];
				        ?>
				        <a href="<?php the_permalink(); ?>" class="section_services-item">
				        	<div class="icon-wrap">
				        		<?php if($icon): ?>
					        		<img src="<?php echo $icon; ?>" class="section_services-icon">
					        	<?php endif; ?>
					        	<?php if($icon_hover): ?>
					        		<img src="<?php echo $icon_hover; ?>" class="section_services-icon hover">
					        	<?php endif; ?>
				        	</div>
				        	<p class="section_services-item-title"><?php the_title(); ?></p>
				        	<p class="section_services-item-description"><?php the_field('page-description', $ID); ?></p>
				        </a>
				    <?php endforeach; ?>
				    <?php wp_reset_postdata(); ?> 
				<?php endif; ?>
		</div>
	</div>
</section>

<section class="section_news">
	<div class="section_news-item main">
		Новости
		<a href="<?php echo get_category_link(1); ?>" class="link_news">
			Смотреть все
			<svg role="img" class="news-svg">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?php bloginfo('template_url'); ?>/static/images/sprite.svg#arr"></use> 
			</svg>
		</a>
	</div>
	<?php
		$news_query = new WP_Query([
			'post_type' => 'post',
			'cat' => 1,
			'posts_per_page' => '3' 
		]);


		while( $news_query->have_posts() ) {
			$news_query->the_post();
			$id = get_the_ID();
			$title = get_the_title();
			$date = get_the_time('d.m.y');
			$link = get_permalink();
			$description = get_field('brief_description', $id);
			echo '
				<a href="'.$link.'" class="section_news-item-link">
					<div class="section_news-item">
						<div class="section_news-wrap">
							<p class="section_news-date">'.$date.'</p>
							<p class="section_news-title">'.$title.'</p>
						</div>
						<div class="section_news-wrap description">
							<p class="section_news-description">'.$description.'</p>
							<a href="'.$link.'" class="section_news-link">Подробнее
								<svg role="img" class="news-svg">
									<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="'.get_bloginfo('template_url'). '/static/images/sprite.svg#arr"></use> 
								</svg>
							</a>
						</div>
					</div>
				</a>
			';
		}
	?>
</section>

<?php get_footer(); ?>
