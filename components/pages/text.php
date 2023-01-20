<?php 

        $theID = get_the_ID();
        $ancestors = get_ancestors( $theID, 'page' );
    
?>

<section class="page text-page">
    <?php if(is_subpage(196) || is_subpage(198)): ?>
    <div class="page-header" style="background-image: url(<?php echo get_the_post_thumbnail_url(); ?>);">
        <div class="container">
            <div class="breadcrumbs">
                <ul itemscope="" itemtype="http://schema.org/BreadcrumbList">
                    <?php bcn_display(); ?>
                </ul>
            </div>

            <?php if(get_field('h1')): ?>
                <h1 class="page-title"><?php the_title(); ?></h1>
            <?php else: ?>
                <h1 class="page-title"><?php echo get_field('title-page', get_the_ID()); ?></h1>
            <?php endif;?>
            
            <p class="page-description"><?php echo get_field('description-page', get_the_ID()); ?></p>
        </div>
    </div>
    <div class="container">
    <?php else: ?>
        <div class="container">
            <div class="breadcrumbs">
                <ul itemscope="" itemtype="http://schema.org/BreadcrumbList">
                    <?php bcn_display(); ?>
                </ul>
            </div>
    <?php endif; ?>
        <div class="row">
            <?php new Content(); ?>

            <div class="sidebar-wrap">
                <?php get_sidebar(); ?>
            </div>
        </div>
    </div>
</section>
