<?php

get_header();


if( is_page( 138 ) ): get_template_part('components/pages/page-contacts');
elseif( is_page(3) ): get_template_part('components/pages/politica');
elseif( is_page(144) ): get_template_part('components/pages/obrabotka');
elseif( is_page(540) ): get_template_part('components/pages/news');
elseif( is_page(198) || is_page(196) ): get_template_part('components/pages/services-page');

else: get_template_part('components/pages/text'); // Текстовая страница
endif;


get_footer();
