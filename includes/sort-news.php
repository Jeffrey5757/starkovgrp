<?php
$arr_select_discipline = $_POST['select-discipline'] ? explode('|', $_POST['select-discipline']) : [];
$taxonomy = $_POST['select-type-events'] ? $_POST['select-type-events'] : 'events_sports';

$args = [
    'post_type' => 'events',
    'posts_per_page' => -1,
];

$select_year_tax_query;
if( $_POST['select-year-of'] ) {
    $select_year_tax_query = [
        [
            'taxonomy' => $taxonomy,
            'field'    => 'name',
            'terms'    => $_POST['select-year-of']
        ]
    ];
} else {
    $terms = get_terms( $taxonomy ); 
    $term_ids = wp_list_pluck( $terms, 'term_id' );
    $select_year_tax_query = [
        [
            'taxonomy' => $taxonomy,
            'field'    => 'term_id',
            'terms'    => $term_ids
        ]
    ];
}

$select_events_tax_query;
if( $_POST['select-type-events'] == 'events_physical_training' ) {
    if( $_POST['select-events'] ) {
        $select_events_tax_query = [
            [
                'taxonomy' => 'events_tag',
                'field' => 'term_id',
                'terms' => $_POST['select-events']
            ]
        ];
    }
}

$args['tax_query'] = [
    'relation' => 'AND',
    $select_year_tax_query,
    $select_events_tax_query
];

$meta_query_1 = [];
if( $_POST['select-type-events'] == 'events_sports' ) {
    $select_sports_tax_query;
    if( $_POST['select-sports'] ) {
        $select_sports_tax_query = [
            [
                'taxonomy' => 'kind_of_srort_cat',
                'field'    => 'term_id',
                'terms'    => $_POST['select-sports']
            ]
        ];
    }


    $sport_discipline = new WP_Query([
        'post_type' => 'kind_of_srort',
        'posts_per_page' => -1,
        'tax_query' => $select_sports_tax_query
    ]);

    $meta_query_1['relation'] = 'OR';
    $exception = true;
    foreach($sport_discipline->posts as $value) {
        $newArr = [
            'key' => 'sport-type',
            'value' => $value->ID,
            'compare' => 'IN'
        ];

        if( !empty($arr_select_discipline) ) {
            if( in_array($value->ID, $arr_select_discipline) ) {
                array_push( $meta_query_1, $newArr );
                $exception = false;
            }
        } else {
            array_push( $meta_query_1, $newArr );
            $exception = false;
        }
    }

    if( $exception ) {
        array_push( $meta_query_1, [
            'key' => 'sport-type',
            'value' => false
        ] );
    }    
}

$meta_query_2 = [];
if( $_POST['select-month'] ) {
    $month = $_POST['select-month'];
    $year = $_POST['select-year-of'];

    $tempArr;

    if($_POST['select-year-of']) {
        $tempArr = [
            'key' => 'date-start-event',
            'value' => [date( $year.'-'.$month.'-1' ).' 00:00:00', date( $year.'-'.$month.'-31' ).' 23:59:59'],
            'compare' => 'BETWEEN',
            'type'    => 'DATE'
        ];
    } else {
        $tempArr = [
            'key' => 'date-start-event',
            'value' => '[0-9]{4}' . $month . '[0-9]{2}',
            'compare' => 'REGEXP'
        ];
    }

    array_push( $meta_query_2, $tempArr );
}

$args['meta_query'] = [
    'relation' => 'AND',
    $meta_query_2,
    $meta_query_1
];


$events_query = new WP_Query($args);


$responce_slides = [];

while( $events_query->have_posts() ) {
    $events_query->the_post();

    if( $_POST['select-sports'] && $_POST['select-sports'] != get_field('kind-of-sport')[0] ) continue;

    $date_start = get_field('date-start-event');
    $expiration_date = get_field('expiration-date-event');
    $kindOfSport = get_field('sport-type');
    $city = get_field('event-city');
    $is_date_range = get_field('is-date-range');
    $dates = get_field('date-range');

    
    $date = '';
    if( $is_date_range ) {
        $date = $date_start;
        if( $expiration_date && $date_start != $expiration_date ) $date .= ' - '. $expiration_date;
    } else {
        foreach($dates as $key => $value) {
            if( $key != 0 ) $date .= ', ';
            $date .= $value['date-range-item'];
        }
    }


    $id = $kindOfSport->ID;
    $kindOfSportHTML = '';
    if( $id ) {
        $link = get_permalink($id);
        $title = get_the_title($id);
        $img = get_the_post_thumbnail_url($id);
        $kindOfSportHTML = '
            <a href="'.$link.'" class="kindOfSport-item">
                <div class="kindOfSport-item__icon-wrap">
                    <img src="'.$img.'" alt="" class="kindOfSport-item__icon">
                </div>
                <div class="kindOfSport-item__wrap">
                    <p class="kindOfSport-item__title">'.$title.'</p>
                </div>
            </a>
        ';
    }


    $slide = '
        <div class="table-events__row">
            <div class="table-events__column table-events__column--date">
                <p class="table-events__text tac">'. $date .'</p>
            </div>
            <div class="table-events__seporator"></div>
            <div class="table-events__column table-events__column--kindOfSport">
                '. $kindOfSportHTML .'
            </div>
            <div class="table-events__seporator"></div>
            <div class="table-events__column table-events__column--title">
                <input type="hidden" name="kind-of-sport" id="kind-of-sport" value="'. get_field('kind-of-sport')[0] .'">
                <a href="'. get_the_permalink() .'" class="table-events__text">'. get_the_title() .'</a>
            </div>
            <div class="table-events__seporator"></div>
            <div class="table-events__column table-events__column--city">
                <div class="table-events-city">
                    <svg role="image" class="table-events-city__svg">
                        <use xlink:href="'. get_bloginfo('template_url') .'/static/images/sprite.svg#marker">
                    </svg>
                    <p class="table-events__text">'. $city .'</p>
                </div>
            </div>
        </div>
    ';

    $responce_slides[] = $slide;
}

$responce['slides'] = $responce_slides;
$responce['text'] = empty($responce_slides) ? 'empty' : 'filled';
$responce['taxonomy'] = $taxonomy;

echo json_encode($responce);

die;