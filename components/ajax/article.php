<?php
$year = $_POST['year'];
$content = $_POST['content'];


$query = new WP_Query( array(
    'post_type' => 'post',
    'cat' => '1',
    'year' => $year,
    's' => $content,
) );

if ($query->post_count == 0) {
    echo '<h2 class="post_error">По вашему запросу ничего не найдено</h2>';
} else {
    while ( $query->have_posts() ) {
        $query->the_post();
        $img = get_the_post_thumbnail_url();
        $title = get_the_title();
        $date = get_the_time('d.m.y');
        $link = get_permalink(); ?>
        <a href="<?php echo $link; ?>" class="news-card">
            <?php if($img): ?>
                <div class="news-card__img-wrap">
                    <img src="<?php echo $img; ?>" alt="new thumbnail" class="news-card__img">
                </div>
            <?php endif; ?>
            <div class="news-card__wrap">
                <p class="news-card__date"><?php echo $date; ?></p>
                <p class="news-card__title"><?php echo $title; ?></p>
            </div>
        </a>
    <?php
    }
    
    wp_reset_postdata();
}

