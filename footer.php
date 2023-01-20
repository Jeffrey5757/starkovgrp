			</main>

			<footer class="footer">
				<?php
					$left_menu=wp_nav_menu( ['theme_location'=>'footer_menu_left', 'container' => false, 'items_wrap' => '%3$s', 'fallback_cb' => '__return_empty_string', 'echo' => false] );
			        $center_menu=wp_nav_menu( ['theme_location'=>'footer_menu_center', 'container' => false, 'items_wrap' => '%3$s', 'fallback_cb' => '__return_empty_string', 'echo' => false] );
			        $right_menu=wp_nav_menu( ['theme_location'=>'footer_menu_right', 'container' => false, 'items_wrap' => '%3$s', 'fallback_cb' => '__return_empty_string', 'echo' => false] );
				?>
				<div class="footer__top">
					<div class="container">
						<div class="footer__top-wrap">
							<a href="/" class="logo">
								<img src="<?php bloginfo('template_url'); ?>/static/images/logo.png" alt="" class="logo__img">
							</a>
							<div class="footer-contact">
								<?php
									$phone = get_field('tel', 'option');
									$address = get_field('address', 'option');
									$mail = get_field('mail', 'option');
								?>
								<a href="<?php echo get_permalink(138); ?>" class="address">
									<svg role="img" class="address_svg">
										<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?php bloginfo('template_url'); ?>/static/images/sprite.svg#nav"></use>
									</svg>
									<?php echo $address; ?>
								</a>
								<a href="mailto:<?php echo $mail; ?>" class="mail">
									<svg role="img" class="mail_svg">
										<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?php bloginfo('template_url'); ?>/static/images/sprite.svg#email"></use>
									</svg>
									<?php echo $mail; ?>
								</a>
								<a href="tel:8 (343) 385-75-85" class="phone"><span><?php echo substr($phone, 0, 7);?></span><?php echo substr($phone, 7);?></a>
							</div>
						</div>
					</div>
				</div>
				<div class="footer_middle">
					<div class="container">
						<?php if ($left_menu): ?>
		                    <div class="footer_middle-col">
		                        <p class="footer_middle-title">Решения</p>
		                        <ul class="footer_middle-menu"><?php echo $left_menu ?></ul>
		                    </div>
		                <?php
		                    endif;
		                    if ($center_menu):
			                ?>
			                <div class="footer_middle-col">
			                    <p class="footer_middle-title">Услуги</p>
			                    <ul class="footer_middle-menu"><?php echo $center_menu ?></ul>
			                </div>
			                <?php
			                    endif;
			                    if ($right_menu):
			                ?>
			                <div class="footer_middle-col">
			                    <p class="footer_middle-title">О компании</p>
			                    <ul class="footer_middle-menu"><?php echo $right_menu ?></ul>
			                </div>
			                <?php endif ?>
			            <div class="footer_middle-col">
		                    <p class="footer_middle-title">Обращение</p>
		                    <ul class="footer_middle-menu">
		                    	<li><a href="javascript: void(0)" class="callback">Создать обращение</a></li>
		                    	<li><a href="<?php echo get_field('link', 'option');?>" target="_blank">Личный кабинет</a></li>
		                    </ul>
		                    <a href="<?php echo get_page_link( 138 );?>" class="footer_middle-title contact">Контакты</a>
		                </div>
					</div>
				</div>
				<div class="footer_bottom">
					<div class="container">
						<div class="footer_bottom-wrap">
							<p class="footer_bottom-text">© <?php echo date('Y'); ?> <?php the_field('company-name', 'option'); ?></p>
							<p class="footer_bottom-text">Все права защищены</p>
							<a href="<?php the_permalink(3); ?>" class="footer_bottom-text link" target="_blank">Политика конфиденциальности</a>
							<a class="made-by" href="https://place-start.ru" target="_blank">
								<span class="made-by__text">Сделано в</span>
								<svg role="img" class="made-by__svg">
									<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<?php bloginfo('template_url'); ?>/static/images/static-sprite.svg#ps"></use>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>


		<div class="custom-modal" id="id-modal">
			<div class="custom-modal__wrapper">
				<div class="custom-modal-header">
					<div class="modal-container">
						<button class="close-modal close-modal-event" type="button">
							<svg class="close-modal__svg" role="image">
								<use xlink:href="<?php bloginfo('template_url'); ?>/static/images/sprite.svg#close"></use>
							</svg>
						</button>
					</div>
				</div>
				<div class="custom-modal-body">
					<div class="modal-container">
						<div class="modal-title">Обратитесь в службу поддержки и сопровождения ООО «СТАРКОВ Групп»</div>
						<div class="modal-subtitle">Оставьте данные, наши специалисты свяжутся и проконсультируют по всем вопросам</div>
						<form action="question" class="contact-form modal-form question__form" enctype="multipart/form-data">

							<input type='hidden' name='title' value='Обращение'>
							<input type='hidden' name='link' value='<?php echo bloginfo( 'url' ); echo $_SERVER['REQUEST_URI']; ?>'>
							<input type='hidden' name='action' value='question'>

							<div class="modal-form__wrapper">
								<label class="modal-field contact-field">
									<input type="text" class="contact-field__input" name="name">
									<span class="contact-field__text">Имя</span>
									<span class="contact-field__req">Введите имя</span>
								</label>
								<label class="modal-field contact-field">
									<input type="text" class="contact-field__input" name="nameCompany">
									<span class="contact-field__text">Название компании</span>
									<span class="contact-field__req">Введите название компании</span>
								</label>
								<label class="modal-field contact-field">
									<input type="tel" class="contact-field__input" name='phone'>
									<span class="contact-field__text">Телефон</span>
									<span class="contact-field__req">Некорректный телефон</span>
								</label>
								<label class="modal-field contact-field">
									<input type="email" class="contact-field__input" name="email">
									<span class="contact-field__text">E-mail</span>
									<span class="contact-field__req">Некорректный e-mail</span>
								</label>
								<label class="modal-field contact-field themes">
									<input type="text" class="contact-field__input" name="themes">
									<span class="contact-field__text">Тема заявки</span>
									<span class="contact-field__req">Введите тему заявки</span>
								</label>
								<label class="modal-field contact-field question">
									<textarea type="textarea" class="contact-field__input" name="question"></textarea>
									<span class="contact-field__text">Задайте вопрос или опишите проблему</span>
								</label>
								<div class="file-modal-info"></div>
								<div class="contact-recaptcha"><div class="g-recaptcha" data-sitekey="6Lf0kWcbAAAAAOeHDv_oBD82VrqDDSN6LX3BwuSY"></div></div>
								<div class="file-modal">
									<label class="file-button">Загрузить файлы<input type="file" name="files[]" id="file-uploader" multiple ></label>
									<p class="file-text">Вы можете прикрепить файлы, суммарный объём файлов не более 10 Мб</p>
								</div>

								<a href="javascript:void(0)" class="button contact-form__button">
									<span class="button-dark__text ">Отправить заявку</span>
								</a>
							</div>
							<p class="personal">Нажимая кнопку я даю своё согласие на &nbsp;<a href="<?php the_permalink(144); ?>" target="_blank">обработку персональных данных</a></p>
						</form>
					</div>
				</div>
			</div>
			<div class="response_modal">
				<p class="success-text">Благодарим за обращение! Специалист свяжется с Вами в ближайшее время.</p>
			</div>
		</div>
		<div class="custom-modal-feeadback" id="id-modal">
			<div class="custom-modal__wrapper">
				<div class="custom-modal-header">
					<div class="modal-container">
						<button class="close-modal close-modal-event" type="button">
							<svg class="close-modal__svg" role="image">
								<use xlink:href="<?php bloginfo('template_url'); ?>/static/images/sprite.svg#close"></use>
							</svg>
						</button>
					</div>
				</div>
				<div class="custom-modal-body">
					<div class="modal-container">
						<div class="modal-title">Обратитесь в службу поддержки и сопровождения ООО «СТАРКОВ Групп»</div>
						<div class="modal-subtitle">Оставьте данные, наши специалисты свяжутся и проконсультируют по всем вопросам</div>
						<form action="question" class="contact-form modal-form question__form" enctype="multipart/form-data">

							<input type='hidden' name='title' value='Обратный звонок'>
							<input type='hidden' name='link' value='<?php echo bloginfo( 'url' ); echo $_SERVER['REQUEST_URI']; ?>'>
							<input type='hidden' name='action' value='question'>

							<div class="modal-form__wrapper">
								<label class="modal-field contact-field">
									<input type="text" class="contact-field__input" name="name">
									<span class="contact-field__text">Имя</span>
									<span class="contact-field__req">Введите имя</span>
								</label>
								<label class="modal-field contact-field">
									<input type="tel" class="contact-field__input" name='phone'>
									<span class="contact-field__text">Телефон</span>
									<span class="contact-field__req">Некорректный телефон</span>
								</label>
								<a href="javascript:void(0)" class="button contact-form__button">
									<span class="button-dark__text ">Отправить заявку</span>
								</a>
							</div>
							<p class="personal">Нажимая кнопку я даю своё согласие на &nbsp;<a href="<?php the_permalink(144); ?>" target="_blank">обработку персональных данных</a></p>
						</form>
					</div>
				</div>
			</div>
			<div class="response_modal">
				<p class="success-text">Благодарим за заявку! Специалист свяжется с Вами в ближайшее время.</p>
			</div>
		</div>
		<script>
			window.ajaxUrl = '<?php echo site_url() ?>/wp-admin/admin-ajax.php';
			window.templateUrl = '<?php bloginfo('template_url'); ?>';
		</script>

		<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>

		<script src="<?php bloginfo('template_url'); ?>/static/js/vendors.bundle.js"></script>
		<script src="<?php bloginfo('template_url'); ?>/static/js/main.bundle.js"></script>

		<!-- Почты  -->

		<div class="email-address" style='display:none'>

			<?php if ( have_rows('send-email','option') ) : ?>

				<?php while( have_rows('send-email','option') ) : the_row();

					$item = get_sub_field('send-email__item','option');

				?>

					<p class="email-address__item"><?php echo $item ?></p>

				<?php endwhile; ?>

			<?php endif; ?>

		</div>

		<!-- /Почты  -->

		<?php the_field('footer_script', 'option'); ?>

		<?php do_action('wp_footer'); ?>
	</body>
</html>
