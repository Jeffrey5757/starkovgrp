<?php



/*	Контент
---------------------------------------*/
require_once('includes/Content.php');


/*
Функция подключения файла с передачей в него данных.
Пример использования: render_partial('includes/components/section-advantages-one.php', ['param' => $i]);
*/
if (!function_exists('render_partial')) {
    function render_partial($template, $render_data)
    {
        extract($render_data);
        require locate_template($template);
    }
}


function seo_optimize() {
	$url = $_SERVER["REQUEST_URI"];

	// Если урл состоит из нескольких уровней и is_front_page() выдаёт true, перекидываем на 404 страницу
	if( $url !== '/' && is_front_page() && empty($_GET) ) {
		global $post, $wp_query;
		$wp_query->set_404();
		status_header(404);
		include( get_query_template( '404' ) );
		die();
	}
}
add_action('wp', 'seo_optimize');



if (function_exists('register_sidebar'))
	register_sidebar(array( 'id' => 'sidebar-1' ));


if (function_exists('add_theme_support')) {
	add_theme_support('menus');
	register_nav_menu( 'footer_menu_left', 'Подвал, слева' );
	register_nav_menu( 'footer_menu_right', 'Подвал, справа' );
	register_nav_menu( 'footer_menu_center', 'Подвал, посередине' );
}

if (function_exists('add_theme_support')) {
	add_theme_support('post-thumbnails');
}


remove_filter( 'the_content', 'wpautop' );// для контента


function my_myme_types($mime_types){
    $mime_types['svg'] = 'image/svg+xml'; // поддержка SVG
    return $mime_types;
}
add_filter('upload_mimes', 'my_myme_types', 1, 1);




function get_file_info( $file_info ) {

	$mime_types = array(
		'application/msword'            => 'doc',
		'image/jpeg'                    => 'jpg',
		'application/pdf'               => 'pdf',
		'image/png'                     => 'png',
		'application/vnd.ms-powerpoint' => 'ppt',
		'application/x-rar-compressed'  => 'rar',
		'image/tiff'                    => 'tiff',
		'text/plain'                    => 'txt',
		'application/vnd.ms-excel'      => 'xls',
		'application/zip'               => 'zip',
		'application/vnd.openxmlformats-officedocument.wordprocessingml.document'   => 'docx',
		'application/vnd.openxmlformats-officedocument.presentationml.presentation' => 'pptx',
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'         => 'xlsx',
	);

	$file_size                          = array( 'b', 'kb', 'Mb' );
	$file_info_output                   = array();
	$file_info_output[ 'size' ]			= filesize( get_attached_file( $file_info['id'] ) );
	
	$i = 0;

	while( $file_info_output[ 'size' ] > 1024 ) {
		$file_info_output[ 'size' ] = $file_info_output[ 'size' ] / 1024;
		$i++;
	}

	$file_info_output[ 'url' ]  = $file_info[ 'url' ];
	$file_info_output[ 'size' ] = round($file_info_output[ 'size' ], 2) . " " . $file_size[$i]; // Размер файла                           
	$file_info_output[ 'mime' ] = $mime_types[ $file_info[ 'mime_type' ] ]; // Расширение файла

	if(is_null($file_info_output[ 'mime' ])) $file_info_output[ 'mime' ] = 'none';

	$file_info_output['pathinfo'] = pathinfo( get_attached_file( $file_info['id'] ) );

	return $file_info_output;
}

/*	ACF
---------------------------------------*/
if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
		'page_title'    => 'Главная страница',
		'menu_title'    => 'Главная страница',
		'menu_slug'     => 'main-settings',
		'capability'    => 'edit_posts',
		'icon_url'		=> 'dashicons-welcome-write-blog',
		'redirect'      => true
	));

	acf_add_options_page(array(
		'page_title'    => 'Общие настройки сайта',
		'menu_title'    => 'Общие настройки сайта',
		'menu_slug'     => 'general-settings',
		'capability'    => 'edit_posts',
		'icon_url'		=> 'dashicons-admin-generic',
		'redirect'      => true
	));
	
}
add_filter( 'wpcf7_validate_configuration', '__return_false' );


/*	Подстраница
---------------------------------------*/
if( ! function_exists( 'is_subpage' ) ) {
    /**
     * Функция проверяет текущий объект, является ли он подстраницей
     * @param integer $post_parent_id ИД родительской страницы, если необходимо
     *     boolean Или false, если данный атрибут необходимо пропустить
     * @param WP_Post $post Объект записи, если необходимо
     * null Или null, если необходимо опустить параметр
     * @return boolean Возвращает результат проверки
     * integer Или ИД родителя, если $post_parent_id = false
     */
    function is_subpage( $post_parent_id = false, $post = null ) {
        if( is_null( $post ) ) global $post;
        if( ! is_page() ) return false;

        if( $post->post_parent ) {
            if( $post_parent_id ) {
                if( $post->post_parent != $post_parent_id && $post->post_parent > 0 ) {
                    return is_subpage( $post_parent_id, get_post( $post->post_parent ) );
                } else return true;
            } else return $post->post_parent;
        } else {
            return false;
        }
    }
}

function wp_corenavi() {
	global $wp_query;
	$total = isset( $wp_query->max_num_pages ) ? $wp_query->max_num_pages : 1;
	$a['total'] = $total;
	$a['mid_size'] = 2; // сколько ссылок показывать слева и справа от текущей
	$a['end_size'] = 1; // сколько ссылок показывать в начале и в конце
	$a['prev_text'] = '&laquo;'; // текст ссылки "Предыдущая страница"
	$a['next_text'] = '&raquo;'; // текст ссылки "Следующая страница"
	$a['format'] = '?page=%#%'; // Формат замены 
	$a['current'] = $_GET['page'] ? $_GET['page'] : 1; // Номер текущей страницы пагинации 
  
	if ( $total > 1 ) echo '<nav class="pagination">';
	echo paginate_links( $a );
	if ( $total > 1 ) echo '</nav>';
}

/* Article-ajax */
function get_article() {
	get_template_part('components/ajax/article');
	die();
}

add_action( 'wp_ajax_get_articles', 'get_article' );
add_action( 'wp_ajax_nopriv_get_articles', 'get_article' );


