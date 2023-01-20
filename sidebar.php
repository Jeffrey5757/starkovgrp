<?php

	$theID = get_the_ID();
	$ancestors = get_ancestors( $theID, 'page' );
	$pageID = $ancestors ? $ancestors[count($ancestors) - 1] : $theID;

	$query = new WP_Query(array(
		'post_type'		=> 'page',
		'orderby'		=> 'menu_order',
		'order'			=> 'ASC',
		'posts_per_page'=> -1,
		'post__not_in' => [2, 3, 144, 219]
	));

?>
<?php if( $query->posts ): ?>

	<div class="sidebar">
		<ul>
			<?php
				foreach($query->posts as $key => $value ) {
					$class = $theID == $value->ID ? 'active' : '';
					$link = get_the_permalink($value->ID);
						$query2 = new WP_Query(array(
							'post_parent'	=> $value->ID,
							'post_type'		=> 'page',
							'orderby'		=> 'menu_order',
							'order'			=> 'ASC',
							'posts_per_page'=> -1,
						));

						if( $query2->posts ) {
							$class1 = $theID == $value->ID || in_array($value->ID, $ancestors) ? 'parent-active' : 'parent';
							$class3 = $theID == $value->ID || in_array($value->ID, $ancestors) ? 'active' : '';
							echo '<a href="'.$link.'" class="' .$class1. '"> <span>'.$value->post_title.'</span> </a>';
							echo '<ul class="sub-menu ' . $class3 . '">';
								foreach ($query2->posts as $key => $value2) {
									$class2 = $theID == $value2->ID ? 'sidebar-item active' : 'sidebar-item';
									$link2 = get_the_permalink($value2->ID);
									echo '<li class="'.$class2.'"><a href="'.$link2.'">'.$value2->post_title.'</a></li>';
								}
							echo '</ul>';
						}
					echo '</li>';
				}
				echo '<a href="'. get_page_link( 138 ).'" class="parent"> <span>Контакты</span> </a>';
			?>
		</ul>
	</div>

<?php endif; ?>


<?php wp_reset_postdata(); ?>