var main =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/common/dropdown.js":
/*!**********************************************!*\
  !*** ./src/js/components/common/dropdown.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dropdown; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Dropdown = function Dropdown(select) {\n  var _this = this;\n\n  _classCallCheck(this, Dropdown);\n\n  _defineProperty(this, \"initEvents\", function () {\n    // open dropdown\n    _this.elems.dropdownHeader.addEventListener('click', _this.dropdownOpen); // select option\n\n\n    _this.elems.options.forEach(function (option) {\n      option.addEventListener('click', _this.selectOption);\n    });\n  });\n\n  _defineProperty(this, \"dropdownOpen\", function (event) {\n    event.preventDefault();\n\n    _this.elems.dropdown.classList.toggle('active');\n\n    window.addEventListener('click', _this.documentClick);\n  });\n\n  _defineProperty(this, \"dropdownClose\", function () {\n    _this.elems.dropdown.classList.remove('active');\n\n    window.removeEventListener('click', _this.documentClick);\n  });\n\n  _defineProperty(this, \"documentClick\", function (event) {\n    if (!_this.elems.dropdown.contains(event.target)) {\n      _this.dropdownClose();\n    }\n  });\n\n  _defineProperty(this, \"selectOption\", function (event) {\n    event.preventDefault();\n    var target = event.currentTarget || event.target;\n    _this.elems.dropdownHeaderInput.value = target.dataset.select;\n    _this.elems.dropdownHeaderText.innerHTML = target.innerHTML;\n\n    _this.elems.options.forEach(function (option) {\n      return option.classList.remove('selected');\n    });\n\n    target.classList.add('selected');\n\n    _this.elems.dropdown.dispatchEvent(new CustomEvent(\"selected\", {\n      detail: {\n        target: target\n      }\n    }));\n\n    _this.dropdownClose();\n  });\n\n  this.elems = {\n    dropdown: select,\n    dropdownHeader: select.querySelector('.my-select-header'),\n    dropdownHeaderText: select.querySelector('.my-select-header__option'),\n    dropdownHeaderInput: select.querySelector('.my-select-header__selected'),\n    dropdownBody: select.querySelector('.my-select-dropdown'),\n    options: select.querySelectorAll('.my-select-dropdown__option')\n  };\n  this.initEvents();\n};\n\n\nvar selets = document.querySelectorAll('.my-select');\nselets.forEach(function (select) {\n  return new Dropdown(select);\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/common/dropdown.js?");

/***/ }),

/***/ "./src/js/components/common/formRequest.js":
/*!*************************************************!*\
  !*** ./src/js/components/common/formRequest.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n//Make makeRequest\nfunction makeRequest(method, url, data, header) {\n  return new Promise(function (resolve, reject) {\n    var request = new XMLHttpRequest();\n    request.open(method, url, true); // Получение emails с WP\n\n    var dataEmail = new Array();\n    var arrayEmail = document.querySelectorAll('.email-address__item');\n    Array.from(arrayEmail).forEach(function (item, index) {\n      emailRecipient = item.textContent;\n      dataEmail.push(emailRecipient);\n    });\n    data.append('emailRecipient', dataEmail);\n\n    if (header) {\n      request.setRequestHeader('Content-Type', 'application/json');\n    }\n\n    request.onload = function () {\n      if (this.status >= 200 && this.status < 300) {\n        resolve(request.response);\n      } else {\n        reject({\n          status: this.status,\n          statusText: request.statusText\n        });\n      }\n    };\n\n    request.onerror = function () {\n      reject({\n        status: this.status,\n        statusText: request.statusText\n      });\n    };\n\n    request.send(data);\n  });\n} //Fields\n\n\nfunction focusInput() {\n  Array.prototype.slice.call(document.querySelectorAll('.contact-field')).forEach(function (elem) {\n    elem.onclick = function (event) {\n      var target = event.currentTarget;\n      target.querySelector('.contact-field__input').focus();\n    };\n\n    Array.prototype.slice.call(elem.querySelectorAll('.contact-field__input')).forEach(function (element) {\n      checkField(element);\n      element.addEventListener('focus', function () {\n        element.parentNode.classList.add('active');\n      });\n      element.addEventListener('focusout', function () {\n        checkField(element);\n      });\n    });\n  });\n}\n\nfunction checkField(element) {\n  if (element.value == '' || element.value == '+7 ___ ___-__-__') {\n    element.parentNode.classList.remove('active');\n  } else {\n    element.parentNode.classList.add('active');\n  }\n}\n\nfocusInput(); //Mask\n\nfunction mask() {\n  $('input[type=\"tel\"]').mask(\"+7 999 999-99-99\");\n}\n\nmask();\n\nfunction validateEmail(email) {\n  var emailValue = email.value;\n\n  function validateEmailCheck(mail) {\n    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;\n    return re.test(String(mail).toLowerCase());\n  }\n\n  if (validateEmailCheck(emailValue)) {\n    email.classList.remove('valid-error');\n    return true;\n  } else {\n    email.classList.add('valid-error');\n    return false;\n  }\n}\n\nfunction valid() {\n  var names = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var tel = arguments.length > 1 ? arguments[1] : undefined;\n  var email = arguments.length > 2 ? arguments[2] : undefined;\n  var company = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;\n  var themes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n  var captcha = arguments.length > 5 ? arguments[5] : undefined;\n  var recaptcha = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;\n  result = false; // if(names.value.length == 0){\n  // \tnames.classList.add('valid-error');\n  // }\n  // else{\n  // \tnames.classList.remove('valid-error');\n  // }\n\n  if (tel.value.length == 0) {\n    tel.classList.add('valid-error');\n  } else {\n    tel.classList.remove('valid-error');\n  }\n\n  if (email) {\n    if (!validateEmail(email)) {\n      email.classList.add('valid-error');\n    } else {\n      email.classList.remove('valid-error');\n    }\n  } // if (company) {\n  // \tif(company.value.length == 0){\n  // \t\tcompany.classList.add('valid-error');\n  // \t}\n  // \telse{\n  // \t\tcompany.classList.remove('valid-error');\n  // \t}\n  // }\n  // if (themes) {\n  // \tif(themes.value.length == 0){\n  // \t\tthemes.classList.add('valid-error');\n  // \t}\n  // \telse{\n  // \t\tthemes.classList.remove('valid-error');\n  // \t}\n  // }\n\n\n  if (recaptcha) {\n    if (captcha.length == 0) {\n      recaptcha.classList.add('error');\n    } else {\n      recaptcha.classList.remove('error');\n    }\n  }\n}\n\nfunction indexForm() {\n  var form = document.querySelectorAll('.contact-form');\n  if (!form) return;\n\n  var _loop = function _loop() {\n    var button = form[i].querySelector('.contact-form__button');\n    var formsTarget = form[i];\n    button.addEventListener('click', /*#__PURE__*/function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {\n        var url, data, resp, result, captcha, type_form, openBlock, success, success_modal, feedback;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                event.preventDefault();\n                url = '/feedback/ajax.php';\n                data = new FormData(formsTarget);\n                resp = false;\n                result = false;\n                captcha = grecaptcha.getResponse();\n                formsTarget.classList.add('loading');\n                names = formsTarget.querySelector('.contact-field__input[name=\"name\"]');\n                company = formsTarget.querySelector('.contact-field__input[name=\"nameCompany\"]');\n                tel = formsTarget.querySelector('.contact-field__input[name=\"phone\"]');\n                email = formsTarget.querySelector('.contact-field__input[name=\"email\"]');\n                themes = formsTarget.querySelector('.contact-field__input[name=\"themes\"]');\n                recaptcha = formsTarget.querySelector('.contact-recaptcha');\n\n                if (document.querySelectorAll('.contact-field__textarea').length) {\n                  comment = formsTarget.querySelector('.contact-field__input[name=\"comment\"]');\n                }\n\n                type_form = true;\n\n                if (!company) {\n                  _context.next = 26;\n                  break;\n                }\n\n                if (!(data.get('phone').length > 12 && data.get('phone').length > 1 && validateEmail(email) && captcha.length > 0)) {\n                  _context.next = 23;\n                  break;\n                }\n\n                result = true;\n                _context.next = 20;\n                return makeRequest('POST', url, data, false);\n\n              case 20:\n                resp = _context.sent;\n                _context.next = 24;\n                break;\n\n              case 23:\n                valid(names, tel, email, company, themes, captcha, recaptcha);\n\n              case 24:\n                _context.next = 34;\n                break;\n\n              case 26:\n                if (!(data.get('phone').length > 12 && data.get('phone').length > 1)) {\n                  _context.next = 33;\n                  break;\n                }\n\n                result = true;\n                _context.next = 30;\n                return makeRequest('POST', url, data, false);\n\n              case 30:\n                resp = _context.sent;\n                _context.next = 34;\n                break;\n\n              case 33:\n                valid(names, tel);\n\n              case 34:\n                if (result == true) {\n                  openBlock = document.querySelector('.open');\n                  success = document.querySelector('.response_form');\n                  success_modal = document.querySelector('.response_modal');\n\n                  if (openBlock !== null) {\n                    console.log('hhh');\n                    success = openBlock.querySelector('.response_form');\n                    success_modal = openBlock.querySelector('.response_modal');\n                  }\n\n                  if (success) {\n                    success.classList.add('form-success');\n                    setTimeout(function () {\n                      return success.classList.remove('form-success');\n                    }, 2500);\n                  }\n\n                  if (success_modal) {\n                    success_modal.classList.add('success-modal');\n                    setTimeout(function () {\n                      return success_modal.classList.remove('success-modal');\n                    }, 2500);\n                  }\n\n                  feedback = document.querySelector('.file-modal-info');\n                  formsTarget.reset();\n                  formsTarget.querySelectorAll('.contact-field__input').forEach(function (elem) {\n                    elem.classList.remove('valid-error');\n                    elem.parentElement.classList.remove('active');\n                  });\n                } else {\n                  formsTarget.classList.remove('loading');\n                }\n\n              case 35:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n  };\n\n  for (var i = 0; i < form.length; i++) {\n    _loop();\n  }\n}\n\nindexForm();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/common/formRequest.js?");

/***/ }),

/***/ "./src/js/components/common/hover-menu.js":
/*!************************************************!*\
  !*** ./src/js/components/common/hover-menu.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var subMenu = document.querySelectorAll('.sub-menu');\nsubMenu.forEach(function (el) {\n  el.addEventListener('mouseover', function (evt) {\n    var parentLink = el.parentElement.querySelector('a');\n    parentLink.classList.add('hover');\n  });\n  el.addEventListener('mouseout', function (evt) {\n    var parentLink = el.parentElement.querySelector('a');\n    parentLink.classList.remove('hover');\n  });\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/common/hover-menu.js?");

/***/ }),

/***/ "./src/js/components/common/make-request.js":
/*!**************************************************!*\
  !*** ./src/js/components/common/make-request.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return makeRequest; });\nfunction makeRequest(method, url, data, header) {\n  return new Promise(function (resolve, reject) {\n    var request = new XMLHttpRequest();\n    request.open(method, url);\n\n    if (header) {\n      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');\n    }\n\n    request.onload = function () {\n      if (this.status >= 200 && this.status < 300) {\n        resolve(request.response);\n      } else {\n        reject({\n          status: this.status,\n          statusText: request.statusText\n        });\n      }\n    };\n\n    request.onerror = function () {\n      reject({\n        status: this.status,\n        statusText: request.statusText\n      });\n    };\n\n    request.send(data);\n  });\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/common/make-request.js?");

/***/ }),

/***/ "./src/js/components/common/mobile-menu.js":
/*!*************************************************!*\
  !*** ./src/js/components/common/mobile-menu.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {function openMobileMenu(event) {\n  event.preventDefault();\n\n  if (this.classList.contains('active')) {\n    this.classList.remove('active');\n    Array.prototype.slice.call(document.querySelectorAll('.sub-menu')).forEach(function (el) {\n      el.classList.remove('active');\n    });\n    document.querySelector('.mobile-menu').classList.remove('opened');\n    document.querySelector('body').classList.remove('opened');\n  } else {\n    this.classList.add('active');\n    document.querySelector('.mobile-menu').classList.add('opened');\n    document.querySelector('body').classList.add('opened');\n  }\n}\n\ndocument.querySelector('.mobile-menu-open').onclick = openMobileMenu;\n\nfunction mobileMenu() {\n  $(\".mobile-menu li.menu-item-has-children > a\").each(function (e) {\n    $(this).wrapInner('<span></span>');\n    $(this).append('<svg role=\"img\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"' + window.templateUrl + '/static/images/sprite.svg#arr\"></use></svg>');\n  });\n  $('.mobile-menu ul li.menu-item-has-children > a').click(function (event) {\n    event.preventDefault();\n    $(this).siblings('.sub-menu').toggleClass('active');\n    $('.mobile-menu').css('overflow', 'hidden');\n  });\n  var link = document.querySelector('.link-account');\n  var linkAccount = link.href;\n  $('.mobile-menu ul li.menu-item-has-children > ul.sub-menu').prepend('<li><a href=\"javascript: void(0)\" class=\"callback header-feedback\"><svg role=\"img\" class=\"comment-svg\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"' + window.templateUrl + '/static/images/static-sprite.svg#comment\"></use></svg>Создать обращение</a></li><li><a href=\"' + \"\".concat(linkAccount) + '\" class=\"header-feedback\"><svg role=\"img\" class=\"user-svg\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"' + window.templateUrl + '/static/images/static-sprite.svg#user\"></use></svg>Войти</a></li>');\n  $('.mobile-menu ul li.menu-item-has-children > ul.sub-menu').prepend('<li class=\"back\"><a href=\"#\"><svg role=\"img\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"' + window.templateUrl + '/static/images/sprite.svg#arr\"></use></svg>Назад в меню</a></li>');\n  $('.back > a').click(function (event) {\n    event.preventDefault();\n    $(this).parent('li').parent('ul').removeClass('active');\n    $('.mobile-menu').css('overflow', 'auto');\n  });\n}\n\nmobileMenu();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/common/mobile-menu.js?");

/***/ }),

/***/ "./src/js/components/common/modal.js":
/*!*******************************************!*\
  !*** ./src/js/components/common/modal.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n$('.callback').on('click', function () {\n  $('.custom-modal').addClass('open');\n  $('body').addClass('open-modal-form');\n});\n$('.callback-feadback').on('click', function () {\n  $('.custom-modal-feeadback').addClass('open');\n  $('body').addClass('open-modal-form');\n});\n$('.custom-modal-feeadback .close-modal').on('click', function () {\n  $('.custom-modal-feeadback').removeClass('open');\n  $('body').removeClass('open-modal-form');\n});\n$('.close-modal').on('click', function () {\n  $('.custom-modal').removeClass('open');\n  $('body').removeClass('open-modal-form');\n});\n/* Загрузка файлов */\n\nvar fileUploader = document.getElementById('file-uploader');\nvar feedback = document.querySelector('.file-modal-info');\nvar filesRemove = document.querySelectorAll('.btn_remove');\nvar filesList = [];\nfileUploader.addEventListener('change', function (event) {\n  var files = event.target.files;\n  var msg = '';\n  var max_attachments_size_allowed = 10 * 1024 * 1024;\n  var attachments_size = 0;\n\n  var _iterator = _createForOfIteratorHelper(files),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var file = _step.value;\n      var name = file.name;\n      var size = file.size;\n      attachments_size += size;\n      var src = window.templateUrl;\n\n      if (attachments_size < max_attachments_size_allowed) {\n        msg += \"<p class=\\\"file-name\\\">\".concat(name, \"<span class=\\\"btn_remove\\\"><svg class=\\\"remove-file__svg\\\" role=\\\"image\\\">\\n\\t\\t<use xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" xlink:href=\\\"\").concat(src, \"/static/images/sprite.svg#close\\\"></use>\\n\\t</svg></span></p>\");\n      } else {\n        feedback.innerHTML += \"<p class=\\\"file-name-error\\\">\\u0420\\u0430\\u0437\\u043C\\u0435\\u0440 \\u0432\\u043B\\u043E\\u0436\\u0435\\u043D\\u0438\\u0439 \\u043E\\u0433\\u0440\\u0430\\u043D\\u0438\\u0447\\u0435\\u043D 10 \\u041C\\u0431!</p>\";\n      }\n\n      feedback.innerHTML = msg;\n      feedback.style.marginBottom = '40px';\n      /*Удаление файла */\n\n      var fileRemove = document.querySelectorAll('.btn_remove');\n      fileRemove.forEach(function (el) {\n        el.addEventListener('click', function (event) {\n          feedback.removeChild(el.parentNode);\n        });\n      });\n      /*Удаление файла */\n\n      if (filesRemove.length == 0) {\n        feedback.style.marginBottom = '0';\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/common/modal.js?");

/***/ }),

/***/ "./src/js/components/common/serialize.js":
/*!***********************************************!*\
  !*** ./src/js/components/common/serialize.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return serializeObject; });\nfunction serializeObject(object) {\n  var s = \"\";\n\n  for (var key in object) {\n    if (s != \"\") s += \"&\";\n    s += key + \"=\" + encodeURIComponent(object[key]);\n  }\n\n  return s;\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/common/serialize.js?");

/***/ }),

/***/ "./src/js/components/pages/contacts-page/index.js":
/*!********************************************************!*\
  !*** ./src/js/components/pages/contacts-page/index.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./src/js/components/pages/contacts-page/map.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_map__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/pages/contacts-page/index.js?");

/***/ }),

/***/ "./src/js/components/pages/contacts-page/map.js":
/*!******************************************************!*\
  !*** ./src/js/components/pages/contacts-page/map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Ymap = /*#__PURE__*/function () {\n  function Ymap(map) {\n    _classCallCheck(this, Ymap);\n\n    this.details = {\n      map: map,\n      markers: map.querySelectorAll('.markers'),\n      zoom: 10,\n      marker: {\n        icon: map.dataset.markerImg,\n        height: map.dataset.markerHeight,\n        width: map.dataset.markerWidth\n      }\n    };\n    this.init();\n  }\n\n  _createClass(Ymap, [{\n    key: \"init\",\n    value: function init() {\n      this.ymap = new ymaps.Map(this.details.map.id, {\n        center: [this.details.markers[0].dataset.lat, this.details.markers[0].dataset.lng],\n        zoom: this.details.zoom,\n        controls: []\n      });\n      this.objectManager = new ymaps.ObjectManager({\n        clusterize: true\n      });\n      this.objectManager.objects.options.set({\n        iconLayout: 'default#image',\n        iconImageHref: this.details.marker.icon,\n        iconImageSize: [this.details.marker.width, this.details.marker.height],\n        iconImageOffset: [this.details.marker.width / 2 * -1, this.details.marker.height * -1],\n        openBalloonOnClick: false\n      });\n      this.objectManager.clusters.options.set({\n        preset: 'islands#invertedRedClusterIcons',\n        openBalloonOnClick: false\n      });\n      this.ymap.geoObjects.add(this.objectManager);\n      this.addMarkers();\n    }\n  }, {\n    key: \"addMarkers\",\n    value: function addMarkers() {\n      this.objectManager.removeAll();\n      var myPlacemarks = {\n        type: \"FeatureCollection\",\n        features: []\n      };\n      this.details.markers.forEach(function (coordinate, index) {\n        myPlacemarks.features.push({\n          type: \"Feature\",\n          id: index,\n          geometry: {\n            type: \"Point\",\n            coordinates: [parseFloat(coordinate.dataset.lat), parseFloat(coordinate.dataset.lng)]\n          }\n        });\n      });\n      this.objectManager.add(myPlacemarks);\n      this.centerMap();\n      this.ymap.container.fitToViewport();\n    }\n  }, {\n    key: \"centerMap\",\n    value: function centerMap() {\n      this.ymap.setBounds(this.ymap.geoObjects.getBounds());\n      if (this.details.markers.length == 1) this.ymap.setZoom(17);\n    }\n  }]);\n\n  return Ymap;\n}();\n\nvar maps = document.querySelectorAll('.map');\n\nif (maps.length) {\n  document.addEventListener('DOMContentLoaded', function () {\n    var script = document.createElement('script');\n    script.type = 'text/javascript';\n    script.src = '//api-maps.yandex.ru/2.1/?lang=ru_RU&onload=initMap'; // добавляем урл, 'onload = функция' будет вызвана после загрузки api\n\n    script.async = true;\n    document.getElementsByTagName('head')[0].appendChild(script);\n  });\n}\n\nwindow.initMap = function () {\n  maps.forEach(function (map) {\n    new Ymap(map);\n  });\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/pages/contacts-page/map.js?");

/***/ }),

/***/ "./src/js/components/pages/index-page/index.js":
/*!*****************************************************!*\
  !*** ./src/js/components/pages/index-page/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./src/js/components/pages/index-page/slider.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/pages/index-page/index.js?");

/***/ }),

/***/ "./src/js/components/pages/index-page/slider.js":
/*!******************************************************!*\
  !*** ./src/js/components/pages/index-page/slider.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {var $slider = $('.single-item');\nvar $count_slider = document.querySelector('.count-slide');\n\nif ($count_slider) {\n  $count_slider.innerHTML = ('0' + $count_slider.textContent).slice(-2);\n  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {\n    document.getElementById('current-slide').innerHTML = ('0' + (nextSlide + 1)).slice(-2) + ' /';\n  }).slick({\n    infinite: true,\n    dots: true,\n    prevArrow: document.querySelector('.main-slider-arrow.prev'),\n    nextArrow: document.querySelector('.main-slider-arrow.next'),\n    adaptiveHeight: true\n  });\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/pages/index-page/slider.js?");

/***/ }),

/***/ "./src/js/components/pages/news-page/index.js":
/*!****************************************************!*\
  !*** ./src/js/components/pages/news-page/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news */ \"./src/js/components/pages/news-page/news.js\");\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/pages/news-page/index.js?");

/***/ }),

/***/ "./src/js/components/pages/news-page/news.js":
/*!***************************************************!*\
  !*** ./src/js/components/pages/news-page/news.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var common_make_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/make-request */ \"./src/js/components/common/make-request.js\");\n/* harmony import */ var common_serialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/serialize */ \"./src/js/components/common/serialize.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar productsSection = document.querySelector('.news');\nvar card = document.querySelectorAll('.news-card');\n\nif (productsSection) {\n  var productsList = productsSection.querySelector('.page-news__wrap');\n  var yearSelected = productsSection.querySelector('.select-year-of');\n  var searchForm = productsSection.querySelector('.post-search');\n  var data = {\n    'action': 'get_articles',\n    'year': '',\n    'content': ''\n  };\n\n  var initCatalog = function initCatalog() {\n    var year = yearSelected.querySelector('.my-select-header__selected');\n    var content = searchForm.querySelector('input').value;\n    data.year = year.dataset.productsTerm;\n    data.content = content;\n    requestsArticle(Object(common_serialize__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data));\n  };\n\n  var renderArticle = function renderArticle(data) {\n    productsList.innerHTML = '';\n    productsList.innerHTML = data;\n  };\n\n  var requestsArticle = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {\n      var response;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return Object(common_make_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('POST', window.ajaxUrl, data, true);\n\n            case 2:\n              response = _context.sent;\n              renderArticle(response);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function requestsArticle(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  initCatalog();\n  yearSelected.addEventListener('selected', function (evt) {\n    evt.preventDefault();\n    data.year = evt.target.querySelector('.my-select-header__selected').value;\n    requestsArticle(Object(common_serialize__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data));\n  });\n  searchForm.addEventListener('change', function (evt) {\n    evt.preventDefault();\n    data.content = evt.target.value;\n    requestsArticle(Object(common_serialize__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data));\n  });\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/pages/news-page/news.js?");

/***/ }),

/***/ "./src/js/components/pages/text-page/accordion.js":
/*!********************************************************!*\
  !*** ./src/js/components/pages/text-page/accordion.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var accordion = document.getElementsByClassName(\"accordion\");\nvar i;\n\nfor (i = 0; i < accordion.length; i++) {\n  accordion[i].addEventListener(\"click\", function () {\n    this.classList.toggle(\"active\");\n    var panel = this.nextElementSibling;\n\n    if (panel.style.maxHeight) {\n      panel.style.maxHeight = null;\n      panel.style.paddingTop = \"0\";\n    } else {\n      // panel.style.maxHeight = panel.scrollHeight + 25 + \"px\";\n      panel.style.maxHeight = \"100%\";\n      panel.style.paddingTop = \"25px\";\n    }\n  });\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/pages/text-page/accordion.js?");

/***/ }),

/***/ "./src/js/components/pages/text-page/decisions.js":
/*!********************************************************!*\
  !*** ./src/js/components/pages/text-page/decisions.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {$('.cards-link').on('click', function () {\n  $('.card_item').css('display', 'flex');\n  $(this).css('display', 'none');\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/pages/text-page/decisions.js?");

/***/ }),

/***/ "./src/js/components/pages/text-page/index.js":
/*!****************************************************!*\
  !*** ./src/js/components/pages/text-page/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion */ \"./src/js/components/pages/text-page/accordion.js\");\n/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_accordion__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _decisions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decisions */ \"./src/js/components/pages/text-page/decisions.js\");\n/* harmony import */ var _decisions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_decisions__WEBPACK_IMPORTED_MODULE_1__);\n\n\n$(window).resize(function () {\n  $('.gallery_item-image').each(function (index, el) {\n    var WidthImage = $(el).width();\n    var HeightImage = WidthImage / 1.77;\n    $(el).css('height', HeightImage);\n  });\n  $('.certificate_item-image').each(function (index, el) {\n    var WidthImage = $(el).width();\n    var HeightImage = WidthImage / 1.44;\n    $(el).css('height', HeightImage);\n  });\n}).resize();\n$(\".video_preview\").click(function () {\n  $(this).css('display', 'none');\n  var $video = $(this).parent().find('iframe:first'),\n      src = $video.attr('src');\n  $video.attr('src', src + '?rel=0&showinfo=0&autoplay=1');\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/components/pages/text-page/index.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vendors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendors */ \"./src/js/vendors.js\");\n/* harmony import */ var common_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/dropdown */ \"./src/js/components/common/dropdown.js\");\n/* harmony import */ var common_formRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/formRequest */ \"./src/js/components/common/formRequest.js\");\n/* harmony import */ var common_formRequest__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(common_formRequest__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var common_mobile_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/mobile-menu */ \"./src/js/components/common/mobile-menu.js\");\n/* harmony import */ var common_mobile_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(common_mobile_menu__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var common_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/modal */ \"./src/js/components/common/modal.js\");\n/* harmony import */ var common_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(common_modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var common_hover_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/hover-menu */ \"./src/js/components/common/hover-menu.js\");\n/* harmony import */ var common_hover_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(common_hover_menu__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var pages_contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pages/contacts-page */ \"./src/js/components/pages/contacts-page/index.js\");\n/* harmony import */ var pages_index_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pages/index-page */ \"./src/js/components/pages/index-page/index.js\");\n/* harmony import */ var pages_news_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pages/news-page */ \"./src/js/components/pages/news-page/index.js\");\n/* harmony import */ var pages_text_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! pages/text-page */ \"./src/js/components/pages/text-page/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/index.js?");

/***/ }),

/***/ "./src/js/vendors.js":
/*!***************************!*\
  !*** ./src/js/vendors.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ \"./node_modules/slick-carousel/slick/slick.js\");\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var svg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg.js */ \"./node_modules/svg.js/dist/svg.js\");\n/* harmony import */ var svg_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svg_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _vendors_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendors/mask */ \"./src/js/vendors/mask.js\");\n/* harmony import */ var _vendors_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendors_mask__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _vendors_fancybox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendors/fancybox */ \"./src/js/vendors/fancybox.js\");\n/* harmony import */ var _vendors_fancybox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vendors_fancybox__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nwindow.$ = $;\nwindow.jQuery = $;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/vendors.js?");

/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi babel-polyfill ./src/js/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"./node_modules/babel-polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! /var/www/vhosts/starkovgrp.ru/httpdocs.dev/wp-content/themes/assembling/src/js/index.js */\"./src/js/index.js\");\n\n\n//# sourceURL=webpack://%5Bname%5D/multi_babel-polyfill_./src/js/index.js?");

/***/ })

/******/ });