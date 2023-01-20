<section class="page text-page">
    <div class="container">
        <div class="breadcrumbs">
            <ul itemscope="" itemtype="http://schema.org/BreadcrumbList">
                <?php bcn_display(); ?>
            </ul>
        </div>

        <h1 class="page-title-main"><?php the_title(); ?></h1>

		<div class="page-service-wrapper">
			<?php 
				$stati_children = new WP_Query(array(
				'post_type' => 'page',
				'post_parent' => get_the_ID(),
				'order' => 'ASC',
				'orderby' => 'menu_order',
				'post__not_in' => [227]
				)
				);

				if($stati_children->have_posts()) :
				while($stati_children->have_posts()): $stati_children->the_post(); ?>
					<?php 
						$title = get_the_title();
						$description = get_field('page-description', get_the_ID());
						$link = get_the_permalink();
						$group = get_field('display_icon-main', get_the_ID());
						$icon = $group['icon'];
						$icon_hover = $group['icon-hover'];
					?>
					<div class="page-main-wrapper">
						
						<a href="<?php echo $link; ?>" class="page-info-wrap">
							<div class="icon-wrap">
								<?php if($icon): ?>
									<img src="<?php echo $icon; ?>" class="page-info-icon">
								<?php endif; ?>
								<?php if($icon_hover): ?>
									<img src="<?php echo $icon_hover; ?>" class="page-info-icon hover">
								<?php endif; ?>
							</div>
							<h3 class="page-info-title"><?php echo $title; ?></h3>
							<p class="page-info-description"><?php echo $description?></p>
							<p class="page-info-link">
								Подробнее
								<svg role="img" class="link-svg">
									<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?php bloginfo('template_url'); ?>/static/images/sprite.svg#arr"></use> 
								</svg>
							</p>
						</a>
						<span class="image-page" style="background: url(<?php echo get_the_post_thumbnail_url(); ?>) rgba(39, 73, 7, 1);"></span>
						
					</div>
				<?php endwhile;
				endif; wp_reset_query();
			?>
		</div>

        
    </div>
</section>