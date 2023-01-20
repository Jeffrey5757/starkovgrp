//Make makeRequest
function makeRequest(method, url, data, header) {

	return new Promise(function (resolve, reject) {
        
		const request = new XMLHttpRequest();
		request.open(method, url, true);
        
        // Получение emails с WP
        let dataEmail = new Array();
        var arrayEmail = document.querySelectorAll('.email-address__item');

        Array.from(arrayEmail).forEach((item,index) => {

            emailRecipient = item.textContent;
            dataEmail.push(emailRecipient);

        });

        data.append('emailRecipient', dataEmail);

		if( header ) {
			request.setRequestHeader('Content-Type', 'application/json');
		}

		request.onload = function () {
			if (this.status >= 200 && this.status < 300) {
				resolve(request.response);
			} else {
				reject({
					status: this.status,
					statusText: request.statusText
				});
			}
		};

		request.onerror = function () {
			reject({
				status: this.status,
				statusText: request.statusText
			});
		};

		request.send(data);

	});

}

//Fields
function focusInput() {
	Array.prototype.slice.call(document.querySelectorAll('.contact-field')).forEach(function (elem) {
		elem.onclick = function (event) {
			let target = event.currentTarget
			target.querySelector('.contact-field__input').focus()
		}

		Array.prototype.slice.call(elem.querySelectorAll('.contact-field__input')).forEach(function (element) {
			checkField(element)

			element.addEventListener('focus', function () {
				element.parentNode.classList.add('active')
			})
			element.addEventListener('focusout', function () {
				checkField(element)
			})
		})
	})
}

function checkField(element) {
	if (element.value == '' || element.value == '+7 ___ ___-__-__') {
		element.parentNode.classList.remove('active')
	} else {
		element.parentNode.classList.add('active')
	}
}

focusInput()

//Mask
function mask() {
	$('input[type="tel"]').mask("+7 999 999-99-99");
}
mask();

function validateEmail(email) {

	var emailValue = email.value;

	function validateEmailCheck(mail) {
		var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		return re.test(String(mail).toLowerCase());
	}

	if (validateEmailCheck(emailValue)) {
		email.classList.remove('valid-error');
		return true;
	} else {
		email.classList.add('valid-error');
		return false;
	}

}

function valid(names=null, tel, email, company=null, themes=null, captcha, recaptcha=null) {
	result = false;

	// if(names.value.length == 0){
	// 	names.classList.add('valid-error');
	// }
	// else{
	// 	names.classList.remove('valid-error');
	// }

	if(tel.value.length == 0){
		tel.classList.add('valid-error');
	}
	else{
		tel.classList.remove('valid-error');
	}

	if (email) {
		if(!validateEmail(email)){
			email.classList.add('valid-error');
		}
		else{
			email.classList.remove('valid-error');
		}
	}
	// if (company) {
	// 	if(company.value.length == 0){
	// 		company.classList.add('valid-error');
	// 	}
	// 	else{
	// 		company.classList.remove('valid-error');
	// 	}
	// }
	// if (themes) {
	// 	if(themes.value.length == 0){
	// 		themes.classList.add('valid-error');
	// 	}
	// 	else{
	// 		themes.classList.remove('valid-error');
	// 	}
	// }

	if(recaptcha) {
		if (captcha.length == 0) {
			recaptcha.classList.add('error');
		} else {
			recaptcha.classList.remove('error');
		}
	}
}

function indexForm() {
	const form = document.querySelectorAll('.contact-form');
	if( !form ) return
    
    
    for(var i = 0; i < form.length; i++){

        const button = form[i].querySelector('.contact-form__button');
        const formsTarget = form[i];

        button.addEventListener('click', async event => {
            event.preventDefault();
            let url = '/feedback/ajax.php';
            let data = new FormData(formsTarget);
            let resp = false;
			let result = false;
			let captcha = grecaptcha.getResponse();
            formsTarget.classList.add('loading');
    
            names = formsTarget.querySelector('.contact-field__input[name="name"]');
			company = formsTarget.querySelector('.contact-field__input[name="nameCompany"]');
			tel = formsTarget.querySelector('.contact-field__input[name="phone"]');
			email = formsTarget.querySelector('.contact-field__input[name="email"]');
			themes = formsTarget.querySelector('.contact-field__input[name="themes"]');
			recaptcha = formsTarget.querySelector('.contact-recaptcha');
			

			if(document.querySelectorAll('.contact-field__textarea').length){
				comment = formsTarget.querySelector('.contact-field__input[name="comment"]');
			}

			let type_form = true;

			if (company) {
				if(( data.get('phone').length > 12 && data.get('phone').length > 1 && validateEmail(email) 
					&& captcha.length > 0)
				){
					result = true;
					resp = await makeRequest('POST', url, data, false);
				} else {
					valid(names, tel, email, company, themes, captcha, recaptcha);
				}
			}
			else {

				if (data.get('phone').length > 12 && data.get('phone').length > 1) {
					result = true;
					resp = await makeRequest('POST', url, data, false);
				} else {
					valid(names, tel);
				}
				
			}

			if(result == true){
				let openBlock = document.querySelector('.open');
				let success = document.querySelector('.response_form');
				let success_modal = document.querySelector('.response_modal');
				if(openBlock !== null) {
					console.log('hhh');
					success = openBlock.querySelector('.response_form');
					success_modal = openBlock.querySelector('.response_modal');
				} 
				

				if(success) {
					success.classList.add('form-success');
					setTimeout(() => success.classList.remove('form-success'), 2500); 
				}
				
				if(success_modal) {
					success_modal.classList.add('success-modal');
					setTimeout(() => success_modal.classList.remove('success-modal'), 2500);
				}
				 

				const feedback = document.querySelector('.file-modal-info');
				formsTarget.reset(); 
				formsTarget.querySelectorAll('.contact-field__input').forEach(
					function (elem) {
						elem.classList.remove('valid-error');
						elem.parentElement.classList.remove('active');
				})
            }else{
                formsTarget.classList.remove('loading');
            }
        
        });

    }

}


indexForm()