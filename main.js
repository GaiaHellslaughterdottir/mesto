(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o,i,l,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._id=e._id,this._likes=e.likes,this._description="Изображение ".concat(e.name),this._templateSelector=n,this._openCardCallback=o,this._removeCardCallback=i,this._setLikeCallback=l,this._removeLikeCallback=u,this._userId=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"createCardElement",value:function(){var t=this;return this._cardElement=this._getTemplate(),this._imageElement=this._cardElement.querySelector(".element__image"),this._placeElement=this._cardElement.querySelector(".element__place"),this._likeElement=this._cardElement.querySelector(".element__like"),this._likeNumber=this._cardElement.querySelector(".element__likes-number"),this._placeElement.textContent=this._name,this._imageElement.src=this._link,this._imageElement.alt=this._description,void 0!==this._likes&&(void 0!==this._likes.find((function(e){return e._id===t._userId}))&&this._likeElement.classList.add("element__like_active"),this._likeNumber.textContent=this._likes.length),this._setEventListeners(),this._cardElement}},{key:"updateLikes",value:function(t){var e=this;this._likes=t,void 0!==this._likes&&(void 0!==this._likes.find((function(t){return t._id===e._userId}))?this._likeElement.classList.add("element__like_active"):this._likeElement.classList.remove("element__like_active"),this._likeNumber.textContent=this._likes.length)}},{key:"_setEventListeners",value:function(){this._imageElement.addEventListener("click",this._handleOpenImagePopup.bind(this)),this._likeElement.addEventListener("click",this._handleToggleLike.bind(this)),this._cardElement.querySelector(".element__basket").addEventListener("click",function(){this._removeCardCallback(this._id)}.bind(this))}},{key:"_handleOpenImagePopup",value:function(t){t.preventDefault();var e=this._imageElement.src,n=this._imageElement.alt,r=this._placeElement.textContent;this._openCardCallback({src:e,alt:n,title:r})}},{key:"removeCard",value:function(){this._cardElement.remove()}},{key:"_handleToggleLike",value:function(){this._likeElement.classList.contains("element__like_active")?this._removeLike():this._setLike()}},{key:"_setLike",value:function(){this._likeElement.classList.add("element__like_active"),this._setLikeCallback(this._id)}},{key:"_removeLike",value:function(){this._likeElement.classList.remove("element__like_active"),this._removeLikeCallback(this._id)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),r=document.querySelector(".profile__edit-button"),o=document.querySelector(".profile__avatar-button"),i=document.querySelector(".profile__add-place-button"),l={formSelector:".form",inputSelector:".form__field",submitButtonSelector:".form__button-submit",inactiveButtonClass:"form__button-submit_disabled",inputErrorClass:"form__field_invalid"};function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElement=document.querySelector(e),this._closeIcon=this._popupElement.querySelector(".popup__close-icon"),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popupElement.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popupElement.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this._popupElement.classList.contains("popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){this._closeIcon.addEventListener("click",function(){this.close()}.bind(this)),this._popupElement.addEventListener("click",function(t){t.target.classList.contains("popup")&&this.close()}.bind(this))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},m.apply(this,arguments)}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(l,t);var e,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(o){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function l(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(e=i.call(this,t))._imageElement=e._popupElement.querySelector(".place-info__image"),e._titleElement=e._popupElement.querySelector(".place-info__title"),e}return e=l,(n=[{key:"open",value:function(t){var e=t.src,n=t.alt,r=t.title;this._imageElement.src=e,this._imageElement.alt=n,this._titleElement.textContent=r,m(y(l.prototype),"open",this).call(this)}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),l}(c);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function d(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},g.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(l,t);var e,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function l(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(n=i.call(this,t))._popupForm=n._popupElement.querySelector(".form"),n._callbackSubmitForm=e,n._submitButtonElement=n._popupForm.querySelector(".form__button-submit"),n}return e=l,(n=[{key:"_getInputValues",value:function(){var t,e={};return(t=this._popupForm.elements,function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||d(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){g(S(l.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",function(){var t=this._getInputValues();this._callbackSubmitForm(t)}.bind(this))}},{key:"disableSubmitButton",value:function(){this._submitButtonTitle=this._submitButtonElement.textContent,this._submitButtonElement.textContent="Сохранение..."}},{key:"enableSubmitButton",value:function(){this._submitButtonElement.textContent=this._submitButtonTitle}},{key:"fillFormValue",value:function(t){if(void 0!==t)for(var e=0,n=Object.entries(t);e<n.length;e++){var r=(l=n[e],u=2,function(t){if(Array.isArray(t))return t}(l)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,l,u=[],a=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{if(!a&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw o}}return u}}(l,u)||d(l,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];void 0!==this._popupForm.elements[o]&&(this._popupForm.elements[o].value=i)}var l,u}},{key:"close",value:function(){g(S(l.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"getFormElement",value:function(){return this._popupForm}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),l}(c);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(l,t);var e,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function l(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(e=i.call(this,t))._submitButtonElement=e._popupElement.querySelector(".form__button-submit"),e}return e=l,(n=[{key:"setEventListeners",value:function(){j(C(l.prototype),"setEventListeners",this).call(this),this._popupElement.querySelector(".form__button-submit").addEventListener("click",function(){this._callbackConfirm()}.bind(this))}},{key:"open",value:function(t){this._callbackConfirm=t,j(C(l.prototype),"open",this).call(this)}},{key:"disableSubmitButton",value:function(){this._submitButtonTitle=this._submitButtonElement.textContent,this._submitButtonElement.textContent="Сохранение..."}},{key:"enableSubmitButton",value:function(){this._submitButtonElement.textContent=this._submitButtonTitle}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),l}(c);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var T=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userNameElement=document.querySelector(e),this._userInfoElement=document.querySelector(n),this._userAvatarElement=document.querySelector(r)}var e,n;return e=t,n=[{key:"getUserInfo",value:function(){var t={};return t.name=this._userNameElement.textContent,t.vocation=this._userInfoElement.textContent,t.avatar=this._userAvatarElement.style.backgroundImage.slice(4,-1).replace(/"/g,""),t._id=this._id,t}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.vocation,r=t._id;this._userNameElement.textContent=e,this._userInfoElement.textContent=n,this._id=r}},{key:"setUserAvatar",value:function(t){var e=t.avatar;this._userAvatarElement.style.backgroundImage='url("'.concat(e,'")')}},{key:"getId",value:function(){return this._id}}],n&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}var U=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._containerElement=document.querySelector(n)}var e,n;return e=t,(n=[{key:"generateInitialCard",value:function(){var t=this;this._items.forEach((function(e){t.renderCard(e)}))}},{key:"addItem",value:function(t){this._containerElement.prepend(t)}},{key:"renderCard",value:function(t){this._renderer(t)}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function q(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}var D,N,M,J,$,G,H,z,K,Q,W,X=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._configFormSelector=e,this._formElement=n,this._submitButtonElement=this._formElement.querySelector(this._configFormSelector.submitButtonSelector),n.formValidator=this,this._inputList=this._formElement.querySelectorAll(this._configFormSelector.inputSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListener()}},{key:"resetForm",value:function(){var t=this;this._toggleButtonState(this._submitButtonElement,this._formElement.checkValidity()),q(this._inputList).forEach((function(e){t._hideError(e,t._formElement.querySelector("#".concat(e.name,"-error")))}))}},{key:"_setEventListener",value:function(){var t=this,e=this._submitButtonElement;this._toggleButtonState(e,this._formElement.checkValidity(),this._configFormSelector),this._formElement.addEventListener("submit",function(t){t.preventDefault()}.bind(this)),q(this._inputList).forEach((function(n){n.addEventListener("input",function(){this._toggleButtonState(e,this._formElement.checkValidity(),this._configFormSelector),this._checkInputValidity(n,this._formElement,this._configFormSelector)}.bind(t))}))}},{key:"_showError",value:function(t,e){t.classList.add(this._configFormSelector.inputErrorClass),e.textContent=t.validationMessage}},{key:"_hideError",value:function(t,e){t.classList.remove(this._configFormSelector.inputErrorClass),e.textContent=""}},{key:"_disabledButton",value:function(t){t.disabled=!0,t.classList.add(this._configFormSelector.inactiveButtonClass)}},{key:"_enabledButton",value:function(t){t.disabled=!1,t.classList.remove(this._configFormSelector.inactiveButtonClass)}},{key:"_toggleButtonState",value:function(t,e){!1===e?this._disabledButton(t):this._enabledButton(t)}},{key:"_checkInputValidity",value:function(t,e){var n=t.validity.valid,r=e.querySelector("#".concat(t.name,"-error"));r&&(n?this._hideError(t,r,this._configFormSelector):this._showError(t,r,this._configFormSelector))}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Y(t){return Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y(t)}function Z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Y(o)?o:String(o)),r)}var o}function tt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var et=[];function nt(t){N.open(t)}function rt(t){H.open((function(){H.disableSubmitButton(),D.deletePlace(t).then((function(){H.close(),et[t].removeCard()})).catch((function(t){console.log(t)})).finally((function(){H.enableSubmitButton()}))}))}function ot(t){D.addPlaceLike(t).then((function(e){et[t].updateLikes(e)})).catch((function(t){console.log(t)}))}function it(t){D.removePlaceLike(t).then((function(e){et[t].updateLikes(e)})).catch((function(t){console.log(t)}))}D=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,n;return e=t,(n=[{key:"getInitialCards",value:function(){return new Promise(function(t,e){fetch(this._baseUrl+"/cards",{headers:this._headers,method:"GET"}).then((function(t){if(t.ok)return t.json();e("Ошибка получения карточек галереи: ".concat(t.status))})).then((function(e){t(e)}))}.bind(this))}},{key:"getUserProfileInfo",value:function(){return new Promise(function(t,e){fetch(this._baseUrl+"/users/me",{headers:this._headers,method:"GET"}).then((function(t){if(t.ok)return t.json();e("Ошибка получения информации профиля пользователя: ".concat(t.status))})).then((function(e){t({name:e.name,vocation:e.about,avatar:e.avatar,_id:e._id})}))}.bind(this))}},{key:"postUserProfileInfo",value:function(t){var e=t.name,n=t.vocation;return new Promise(function(t,r){fetch(this._baseUrl+"/users/me",{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e,about:n})}).then((function(e){e.ok?t():r("Ошибка сохранения информации профиля пользователя: ".concat(e.status))}))}.bind(this))}},{key:"postUserProfileAvatar",value:function(t){var e=t.avatar;return new Promise(function(t,n){fetch(this._baseUrl+"/users/me/avatar",{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then((function(e){e.ok?t():n("Ошибка сохранения аватара пользователя: ".concat(e.status))}))}.bind(this))}},{key:"postPlace",value:function(t){var e=t.name,n=t.link;return new Promise(function(t,r){fetch(this._baseUrl+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify({name:e,link:n})}).then((function(t){if(t.ok)return t.json();r("Ошибка сохранения карточки места: ".concat(t.status))})).then((function(e){t(e._id)}))}.bind(this))}},{key:"deletePlace",value:function(t){return new Promise(function(e,n){fetch(this._baseUrl+"/cards/"+t,{headers:this._headers,method:"DELETE"}).then((function(t){t.ok?e():n("Ошибка удаления карточки места: ".concat(t.status))}))}.bind(this))}},{key:"addPlaceLike",value:function(t){return new Promise(function(e,n){fetch(this._baseUrl+"/cards/"+t+"/likes",{headers:this._headers,method:"PUT"}).then((function(t){if(t.ok)return t.json();n("Ошибка добавления лайка карточке места: ".concat(t.status))})).then((function(t){e(t.likes)}))}.bind(this))}},{key:"removePlaceLike",value:function(t){return new Promise(function(e,n){fetch(this._baseUrl+"/cards/"+t+"/likes",{headers:this._headers,method:"DELETE"}).then((function(t){if(t.ok)return t.json();n("Ошибка удаления лайка карточке места: ".concat(t.status))})).then((function(t){e(t.likes)}))}.bind(this))}}])&&Z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-70",headers:{authorization:"e4b06db3-40f1-486d-92cb-ac0fc2cec497","Content-Type":"application/json"}}),(N=new h("#place-image-popup")).setEventListeners(),M=new T(".profile__info-name",".profile__info-vocation",".avatar"),Promise.all([D.getUserProfileInfo(),D.getInitialCards()]).then((function(t){var e,r,o=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,l,u=[],a=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{if(!a&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw o}}return u}}(e,r)||function(t,e){if(t){if("string"==typeof t)return tt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?tt(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],l=o[1];M.setUserInfo(i),M.setUserAvatar(i);var u={items:l,renderer:function(t){var e=new n(t,"#card-template",M.getId(),nt,rt,ot,it);et[t._id]=e,z.addItem(e.createCardElement())}};(z=new U(u,".elements")).generateInitialCard()})).catch((function(t){console.log(t)})),J=new k("#profile-popup",(function(t){M.setUserInfo(t),J.disableSubmitButton(),D.postUserProfileInfo(t).then((function(){J.close(),K.resetForm()})).catch((function(t){console.log(t)})).finally((function(){J.enableSubmitButton()}))})),(K=new X(l,J.getFormElement())).enableValidation(),J.setEventListeners(),G=new k("#edit-avatar-popup",(function(t){M.setUserAvatar(t),G.disableSubmitButton(),D.postUserProfileAvatar(t).then((function(){G.close()})).catch((function(t){console.log(t)})).finally((function(){G.enableSubmitButton()}))})),(W=new X(l,G.getFormElement())).enableValidation(),G.setEventListeners(),(H=new L("#place-delete-popup")).setEventListeners(),$=new k("#place-popup",(function(t){var e={name:t["place-name"],link:t.image};$.disableSubmitButton(),D.postPlace(e).then((function(t){e._id=t,z.renderCard(e),$.close(),Q.resetForm()})).catch((function(t){console.log(t)})).finally((function(){$.enableSubmitButton()}))})),(Q=new X(l,$.getFormElement())).enableValidation(),$.setEventListeners(),r.addEventListener("click",(function(){var t=M.getUserInfo();J.fillFormValue(t),K.resetForm(),J.open()})),o.addEventListener("click",(function(){var t=M.getUserInfo();G.fillFormValue(t),W.resetForm(),G.open()})),i.addEventListener("click",(function(){Q.resetForm(),$.open()}))})();