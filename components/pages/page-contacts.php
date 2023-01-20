<section class="section page page-contact">
    <div class="container">
        <div class="breadcrumbs clearfix">
            <ul class="clearfix" itemscope="" itemtype="http://schema.org/BreadcrumbList">
                <?php bcn_display(); ?>
            </ul>
        </div>
        <div class="section__head">
            <h1 class="page-title"><?php the_title(); ?></h1>
        </div>
        <div class="contacts-wrap">
        <div class="contacts-info-wrapper">
                    <?php if( have_rows('contacts', 'option') ):?>
                        <?php while( have_rows('contacts', 'option') ): the_row(); 
                            // переменные
                            $city = get_sub_field('city');
                            $address = get_sub_field('address');
                            $phone = get_sub_field('tel');
                            $mail = get_sub_field('mail');
                            $requisites = get_sub_field('requisites');
                        ?>
                            <div class="contacts">
                                <div class="contact">
                                    <p class="contacts__city"><?php echo $city; ?></p>
                                </div>
                            </div>
                            <?php if($address): ?>
                                <div class="contacts">
                                    <div class="contact">
                                        <svg role="image">
                                            <use xlink:href="<?php bloginfo('template_url'); ?>/static/images/sprite.svg#nav">
                                        </svg>
                                        <p class="contact__text" itemprop="address"><?php echo $address; ?></p>
                                    </div>
                                </div>
                            <?php endif; ?>
                            <?php if($phone): ?>
                                <div class="contacts">
                                    <div class="contact phone">
                                        <svg role="image">
                                            <use xlink:href="<?php bloginfo('template_url'); ?>/static/images/sprite.svg#phone">
                                        </svg>
                                        <a class="contact__text" href="tel: <?php echo $phone; ?>"><?php echo $phone; ?></a>
                                    </div>
                                </div>
                            <?php endif; ?>
                            <?php if($mail): ?>
                                <div class="contacts">
                                    <div class="contact link">
                                        <svg role="image">
                                            <use xlink:href="<?php bloginfo('template_url'); ?>/static/images/sprite.svg#email">
                                        </svg>
                                        <a class="contact__text" href="mailto: <?php echo $mail; ?>"><?php echo $mail; ?></a>
                                    </div>
                                </div>
                            <?php endif; ?>
                            <?php if($requisites): ?>
                                <div class="contacts">
                                    <div class="contact">
                                        <a href="<?php echo $requisites; ?>" class="contact__text file" target="_blank">Скачать реквизиты</a>
                                    </div>
                                </div>
                            <?php endif; ?>
                        <?php endwhile; ?>
                    <?php endif;?>
                </div>
            <div class="contacts-wrapper">
                <div class="map" id="map" data-marker-img="<?php bloginfo('template_url'); ?>/static/images/geo.png" data-marker-width="55" data-marker-height="55">
                    <?php 
                        $repeater = get_field( 'contacts', 'option' );
                        foreach( $repeater as $item ): ?>
                            <?php foreach ( $item['maps'] as $subitem ): ?>
                            <?php 
                            $position_in_map = explode(',', $subitem['map']); ?>
                            <div class="markers" data-lat="<?php echo $position_in_map[0]; ?>" data-lng="<?php echo $position_in_map[1]; ?>"></div>
                            <?php endforeach; ?>
                        <?php endforeach; ?>
                    <?php while( have_rows( 'maps', 'option' ) ):
                        the_row();
                        $input_string = get_sub_field('map', 'option');
                        $position_in_map = explode(',', $input_string); ?>
                        
                    <?php endwhile; ?>
                </div>
                <div class="map-display" itemscope itemtype="http://schema.org/LocalBusiness">
                    <p class="contacts__title" itemprop="name"></p>
                </div>
            </div>
        </div>
    </div>
</section>