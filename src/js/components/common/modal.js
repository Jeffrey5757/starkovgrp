$('.callback').on('click', function () {
	$('.custom-modal').addClass('open');
	$('body').addClass('open-modal-form');
});

$('.callback-feadback').on('click', function () {
	$('.custom-modal-feeadback').addClass('open');
	$('body').addClass('open-modal-form');
});

$('.custom-modal-feeadback .close-modal').on('click', function () {
	$('.custom-modal-feeadback').removeClass('open');
	$('body').removeClass('open-modal-form');
});

$('.close-modal').on('click', function () {
	$('.custom-modal').removeClass('open');
	$('body').removeClass('open-modal-form');
});

/* Загрузка файлов */

const fileUploader = document.getElementById('file-uploader');
const feedback = document.querySelector('.file-modal-info');
const filesRemove = document.querySelectorAll('.btn_remove');
let filesList = [];

fileUploader.addEventListener('change', (event) => {
	const files = event.target.files;
	let msg = '';
  	var max_attachments_size_allowed = 10 * 1024 * 1024;
	var attachments_size = 0;
  
  for (const file of files) {
    const name = file.name;
	let size = file.size;

	attachments_size += size;
	let src = window.templateUrl;

	if (attachments_size < max_attachments_size_allowed) {
		msg += `<p class="file-name">${name}<span class="btn_remove"><svg class="remove-file__svg" role="image">
		<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="${src}/static/images/sprite.svg#close"></use>
	</svg></span></p>`;
	} else {
		feedback.innerHTML += `<p class="file-name-error">Размер вложений ограничен 10 Мб!</p>`;
	}
    feedback.innerHTML = msg;
	feedback.style.marginBottom = '40px';

	/*Удаление файла */
	const fileRemove = document.querySelectorAll('.btn_remove');
	
	fileRemove.forEach(function(el) {
		el.addEventListener('click', (event) => {
			feedback.removeChild(el.parentNode);
		})
	})
	/*Удаление файла */

	if (filesRemove.length == 0) {
		feedback.style.marginBottom = '0';
	}	
  }
});