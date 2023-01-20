<?php get_header(); ?>

<section class="page page-search">
	<div class="container">
		<div class="breadcrumbs clearfix">
			<ul class="clearfix">
				<li><a href="/">Главная</a></li>
				<li><span>Поиск</span></li>
			</ul>
		</div>

		<h1 class="page-title">Поиск</h1>


		<form method="get" action="/" class="search-form">
			<input type="text" class="search-form__input" placeholder="Поиск" value="<?php echo get_search_query(); ?>" name="s"/>
			<button type="submit" class="button button-green search-form__button">
				<span class="button-green__text">Найти</span>
			</button>
		</form>
		
		<?php
			if( have_posts() ) {
				echo '<div class="search-result">';
				while( have_posts() ) {
					the_post();

					echo '
						<a class="search-result-item" href="'. get_permalink() .'">
							<span class="search-result-item__title">'. get_the_title() .'</span>
							<span class="search-result-item__desc">'. get_field('description') .'</span>
						</a>
					';
				}
				echo '</div>';

				echo '
					<div class="wrapper_pagination">
						<ul>'. function_exists('wp_corenavi') ? wp_corenavi() : ''.'</ul>
					</div>
				';
			} else {
				echo '
					<div class="content-text">
						<p>'. _e("No results found.") .'</p>
					</div>
				';
			}
		?>
	</div>
</section>

<?php get_footer(); ?>
