<?php

class Content {
	public function __construct() {
		echo '<div class="content">';
		while( have_rows('content') ) {
			the_row();
			if( get_row_layout() == 'content-text' ) $this->text();
			elseif( get_row_layout() == 'content-quote' ) $this->quote();
			elseif( get_row_layout() == 'content-text_underline' ) $this->text_underline();
			elseif( get_row_layout() == 'content-files' ) $this->files();
			elseif( get_row_layout() == 'content-certificates' ) $this->certificate();
			elseif( get_row_layout() == 'content-gallery' ) $this->gallery();
			elseif( get_row_layout() == 'content-video' ) $this->video();
			elseif( get_row_layout() == 'list-number' ) $this->block_icon();
			elseif( get_row_layout() == 'link-more' ) $this->link_more();
			elseif( get_row_layout() == 'cards-icon' ) $this->cards_icon();
			elseif( get_row_layout() == 'technologies' ) $this-> technologies();
			elseif( get_row_layout() == 'cards-icon-text' ) $this-> cards_icon_text();
			elseif( get_row_layout() == 'content-accordion' ) $this-> accordion();
			elseif( get_row_layout() == 'cards' ) $this-> cards();
			elseif( get_row_layout() == 'cards-list' ) $this-> cards_list();
			elseif( get_row_layout() == 'content-form' ) $this-> content_form();
			elseif( get_row_layout() == 'block-number' ) $this-> block_number();
		}
		echo '</div>';
	}


	// Обычный текст
	private function text() {
		echo '<div class="content-text">'.get_sub_field('text').'</div>';
	}
	// Заголовок с линией
	private function text_underline() {
		echo '<p class="title-underline">'.get_sub_field('text_underline').'</p>';
	}

	// Цитата
	private function quote() {
		echo '<div class="quote">
		<p class="quote-text">'. get_sub_field('quote') .'</p>
		<p class="quote-author">'. get_sub_field('quote_author') .'</p>
		</div>';
	}

	// Файлы
	private function files() {
		?>
			<div class="files">
				<?php $i = 0; ?>
				<?php while( have_rows('files') ) : $i++; the_row(); ?>
					<?php $file = get_file_info( get_sub_field( 'file' ) ); ?>
					<a class="file" href="<?php print $file['url']; ?>" target="_blank">
						<span class="file__title"><?php the_sub_field('file-name'); ?></span>
						<span class="file-info">
							<span class="file-info__arrow">
								<svg role="image">
									<use xlink:href="<?php bloginfo('template_url'); ?>/static/images/sprite.svg#file">
								</svg>
							</span>
							<span class="file-info__size"><?php print $file['mime'].' ' .$file['size']; ?></span>
						</span>
					</a>
				<?php endwhile; ?>
			</div>
		<?php
	}

	// Галлерея
	private function gallery() {
		?>
			<?php 
				$images = get_sub_field('gallery'); 
				$images_count = get_sub_field('gallery-count'); 
			?>
			<?php if($images) : ?>
				<div class="gallery">
					<div class="gallery__slider">
						<?php $i = 0; foreach( $images as $image ) : $i++; ?>
							<a href="<?php echo $image['url']; ?>" class="gallery__item in-row-<?php echo $images_count; ?>" data-fancybox="gallery-<?php echo $gallery_count; ?>">
						        <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['name']; ?>" class="gallery_item-image">
						        <p class="gallery__item-caption"><?php echo $image['caption']; ?></p>
						    </a>
						<?php endforeach; ?>
					</div>
				</div>
			<?php endif; ?>
		<?php
	}

	// Сертификаты
	private function certificate() {
		?>
			<?php 
				$certificates = get_sub_field('certificates');
			?>
			<?php if($certificates) : ?>
				<div class="certificate">
					<div class="certificate__slider">
						<?php $i = 0; foreach( $certificates as $certificate ) : $i++; ?>
							<a href="<?php echo $certificate['url']; ?>" class="certificate__item" data-fancybox="certificates-<?php echo $gallery_count; ?>">
						        <img src="<?php echo $certificate['url']; ?>" alt="<?php echo $certificate['name']; ?>" class="certificate_item-image">
						        <p class="certificate__item-caption"><?php echo $certificate['caption']; ?></p>
						    </a>
						<?php endforeach; ?>
					</div>
				</div>
			<?php endif; ?>
		<?php
	}

	// Видео
	private function video() { ?>
		<?php 
			$preview = get_sub_field('preview-video'); 
			$video = get_sub_field('link-video'); 
		?>
		<?php if($preview): ?>

			<div class="video">
				<div class="video_preview" style="background-image: url('<?php echo $preview; ?>')"></div>
				<?php echo $video; ?>
			</div>
		<?php endif; ?>
		<?php
	}

	// Блок иконками и текстом
	private function block_icon() { ?>
		<?php 
			$title = get_sub_field('title-block'); 
			$count_row = count( get_sub_field( 'list-items' ) );
		?>
		<?php if($title): ?>
			<h2 class="title-block"><?php echo get_sub_field('title-block'); ?></h2>
		<?php endif; ?>
		<?php if($count_row >= 4): ?>
			<div class="list_items" style="justify-content: space-between;">
		<?php else: ?>
			<div class="list_items">
		<?php endif; ?>
			<?php $i = 0; ?>
			<?php while( have_rows('list-items') ) : $i++; the_row(); ?>
				<?php 
					$icon = get_sub_field('icon');
					$title = get_sub_field('list-title');
					$description = get_sub_field('list-description');
				?>
				<div class="list_item">
					<?php if($icon): ?>
						<img class="list_item-icon" src="<?php echo $icon; ?>">
					<?php endif; ?>
					<?php if($title): ?>
						<h3><?php echo $title; ?></h3>
					<?php endif; ?>
					<?php if($description): ?>
						<p class="list_item-description"><?php echo $description; ?></p>
					<?php endif; ?>
				</div>
				
			<?php endwhile; ?>
		</div>
		<?php
	}

	// Ссылка подробнее
	private function link_more() { ?>
		<?php 
			$text = get_sub_field('link-text'); 
			$link = get_sub_field('link'); 
		?>
		<a href="<?php echo $link; ?>" class="link_more" target="_blank">
			<?php echo $text; ?>
				<svg role="img" class="link_more-svg">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?php echo get_bloginfo('template_url'); ?>/static/images/sprite.svg#arr"></use> 
				</svg>
			</a>
		<?php
	}

	// Решения
	private function cards_icon() { ?>
		<?php 
			$display_btn = get_sub_field('display-button');
			$btn = get_sub_field('button'); 
		?>
		<div class="cards_items">
			<div class="cards_items-wrap">
				<?php 
				$i = 0; 
				$numrows = count( get_sub_field( 'card' ) );
				?>
				<?php while( have_rows('card') ) : $i++; the_row(); ?>
					<?php 
						$icon = get_sub_field('card-icon');
						$text = get_sub_field('card-text');
						$link = get_sub_field('card-link');
					?>
					<?php if($i <= 8): ?>
						<a href="<?php echo $link; ?>" target="_blank" class="card_item display">
							<?php if($icon): ?>
								<img class="card-icon" src="<?php echo $icon; ?>">
							<?php endif; ?>
							<?php if($text): ?>
								<p class="card-title"><?php echo $text; ?></p>
							<?php endif; ?>
						</a>
					<?php else: ?>
						<a href="<?php echo $link; ?>" target="_blank" class="card_item" style="display: none;">
							<?php if($icon): ?>
								<img class="card-icon" src="<?php echo $icon; ?>">
							<?php endif; ?>
							<?php if($text): ?>
								<p class="card-title"><?php echo $text; ?></p>
							<?php endif; ?>
						</a>
					<?php endif; ?>
					
				<?php endwhile; ?>
			</div>
			<?php if($numrows > 9): ?>
				<a href="javascript: void(0)" class="cards-link">Показать все решения</a>
			<?php endif; ?>
		</div>
			
		<?php
	}

	// Технологии
	private function technologies() { ?>
		<?php 
			$title = get_sub_field('title');
		?>
		<?php if ($title): ?>
			<h3 class="technologies-title"><?php echo $title; ?></h3>
		<?php endif; ?>
		<div class="technologies_items">
			<?php $i = 0; ?>
			<?php while( have_rows('technology') ) : $i++; the_row(); ?>
				<?php 
					$image = get_sub_field('technologies-image');
					$text = get_sub_field('technologies-text');
				?>
				<div class="technologies_item">
					<?php if($image): ?>
						<img class="card-icon" src="<?php echo $image; ?>">
					<?php endif; ?>
					<?php if($text): ?>
						<p class="card-title"><?php echo $text; ?></p>
					<?php endif; ?>
				</div>
			<?php endwhile; ?>
		</div>
		<?php
	}

	// Карточка с иконкой и текстом
	private function cards_icon_text() { ?>
				<?php $title = get_sub_field('card-icon-title');?>
				<?php if($title): ?>
				<h2>
					<?php echo $title;?>
				</h2>
				<?php endif;?>
		<div class="cards_items_text">
			<?php $i = 0; ?>
			<?php while( have_rows('card-icon-text') ) : $i++; the_row(); ?>
				<?php 
					$icon = get_sub_field('card-icon');
					$title = get_sub_field('card-title');
					$description = get_sub_field('card-description');
				?>
				<div class="card_item_text">
					<?php if($icon): ?>
						<img class="card_item_text-icon" src="<?php echo $icon; ?>">
					<?php endif; ?>
					<?php if($title): ?>
						<p class="card_item_text-title"><?php echo $title; ?></p>
					<?php endif; ?>
					<?php if($description): ?>
						<p class="card_item_text-description"><?php echo $description; ?></p>
					<?php endif; ?>
				</div>
			<?php endwhile; ?>
		</div>
		<?php 
	}

	// Аккордеон
	private function accordion() { ?>
		<?php $title_block = get_sub_field('content-accordion-title'); ?>
		<?php if($title_block): ?>
			<h2 class="title-block"><?php echo $title_block; ?></h2>
		<?php endif; ?>
		<div class="accordion-wrap">
			<?php $i = 0; ?>
			<?php while( have_rows('accordion') ) : $i++; the_row(); ?>
				<?php 
					$title = get_sub_field('accordion-title');
					$addtitle = get_sub_field('accordion-add-title');
					$content = get_sub_field('accordion-text');
				?>
					<?php if($title): ?>
						<button class="accordion">
							<p class="accordion-title"><?php echo $title; ?></p>
							<?php if($addtitle): ?>
								<p class="accordion-add"><?php echo $addtitle; ?></p>
							<?php endif; ?>
							<svg role="img" class="more-svg">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?php echo get_bloginfo('template_url'); ?>/static/images/sprite.svg#arr"></use> 
							</svg>
						</button>
						<div class="panel">
						  <div class="content-text"><?php echo $content; ?></div>
						</div>
					<?php endif; ?>
			<?php endwhile; ?>
		</div>

		<?php
	}

	// Карточка с текстом
	private function cards() { ?>
		<?php $title_block = get_sub_field('cards-block-title'); ?>
		<?php if($title_block): ?>
			<h2 class="title-block"><?php echo $title_block; ?></h2>
		<?php endif; ?>
		<div class="card-wrap">
			<?php $i = 0; ?>
				<?php while( have_rows('card') ) : $i++; the_row(); ?>
					<?php if(get_sub_field('cards-title')): ?>
						<a href="javascript:void(0)" class="cards-title"><?php echo get_sub_field('cards-title');?></a>
					<?php endif; ?>
			<?php endwhile; ?>
		</div>
		<?php
	}

	// Карточка со списком
	private function cards_list() { ?>
		<?php 
			$icon = get_sub_field('cards-list-icon');
			$text_icon = get_sub_field('cards-list-icon-text');
			$title = get_sub_field('cards-list-title');
			$text = get_sub_field('cards-list-text');
		?>
		<div class="cards_list-wrap">
			<div class="icon-wrap">
				<?php if($icon): ?>
					<img class="icon-wrap-icon" src="<?php echo $icon; ?>">
				<?php endif; ?>
				<?php if($text_icon): ?>
					<p class="icon-wrap-text"><?php echo $text_icon; ?></p>
				<?php endif; ?>
			</div>
			<div class="content-wrap content-text">
				<p class="content-wrap-title"><?php echo $title; ?></p>
				<?php echo $text; ?>
			</div>
		</div>
		<?php
	}

	// Форма
	private function content_form() { ?>
		<?php 
			$title = get_sub_field('form-title');
			$description = get_sub_field('form-description');
		?>
		<form action="callback" class="content-form contact-form question__form">

			<input type='hidden' name='title' value='Заявка'>
			<input type='hidden' name='link' value='<?php echo bloginfo( 'url' ); echo $_SERVER['REQUEST_URI']; ?>'>
			<input type='hidden' name='action' value='callback'>

			<p class="contact-form__title"><?php echo $title; ?></p>
			<p class="contact-form__text"><?php echo $description; ?></p>

			<div class="contact-form__wrapper">
				<label class="contact-field">
					<input type="text" class="contact-field__input" name="name">
					<span class="contact-field__text">Имя</span>
					<span class="contact-field__req">Введите имя</span>
				</label>
				<label class="contact-field">
					<input type="phone-email" class="contact-field__input" name='phone'>
					<span class="contact-field__text">Телефон или e-mail</span>
					<span class="contact-field__req">Введите телефон/e-mail</span>
				</label>
				<a href="#" class="button contact-form__button">
					<span class="button-dark__text ">Отправить заявку</span>
				</a>
			</div>
			<p class="personal">Нажимая на кнопку «Отправить заявку», вы соглашаетесь на&nbsp;<a href="<?php the_permalink(144); ?>" target="_blank">обработку персональных данных</a></p>
			<div class="response_form">
				<p class="success-text">Благодарим за обращение! Специалист свяжется с Вами в ближайшее время.</p>
			</div>
		</form>

	<?php 
	}

	// Блок с цифрами
	private function block_number() { ?>
		<?php 
			$title = get_sub_field('block-number-title'); 
			$count_row = count( get_sub_field( 'block-number-list' ) );
		?>
		<?php if($title): ?>
			<h2 class="title-block"><?php echo $title; ?></h2>
		<?php endif; ?>
		<?php if($count_row >= 4): ?>
			<div class="list_items" style="justify-content: space-between;">
		<?php else: ?>
			<div class="list_items">
		<?php endif; ?>
			<?php $i = 0; ?>
			<?php while( have_rows('block-number-list') ) : $i++; the_row(); ?>
				<?php 
					$title = get_sub_field('block-number-item');
					$description = get_sub_field('block-number-text');
				?>
				<div class="list_item">
					<p class="number"><?php echo $i; ?></p>
					<?php if($title): ?>
						<h3><?php echo $title; ?></h3>
					<?php endif; ?>
					<?php if($description): ?>
						<p class="list_item-description"><?php echo $description; ?></p>
					<?php endif; ?>
				</div>
				
			<?php endwhile; ?>
		</div>
		<?php
	}
}

