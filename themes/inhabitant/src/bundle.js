/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {

	$('.icon-search').on('click', function () {
		event.preventDefault();
		$('.search-form').toggleClass('search-form-click');
		$('.search-field').focus();
		$('.menu-item-217').toggleClass('menu-item-217-click');
	});
	if ($('.search-form-click')) {
		$('.search-field').on('blur', function () {
			event.preventDefault();
			$('.search-form').toggleClass('search-form-click');
			$('.menu-item-217').toggleClass('menu-item-217-click');
		});
	}

	$(window).load(function () {
		$('.BodyA').css({
			'line-height': '1.8rem',
			'margin': '0',
			'font-size': '0.9rem',
			'font-family': 'Merriweather'
		});

		var x = $('.content-area').height() - 50;
		console.log(x);
		$('.side-widget-area').css({
			height: x + 'px'
		});
	});
})(jQuery);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmExMjI3OGY3YWNiODIzNzkzOTUiLCJ3ZWJwYWNrOi8vLy4vaW5oYWJpdGFudC9qcy9pbmhhYml0ZW50LXNjcmlwdC5qcyJdLCJuYW1lcyI6WyIkIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCJmb2N1cyIsIndpbmRvdyIsImxvYWQiLCJjc3MiLCJ4IiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBLENBQUMsVUFBU0EsQ0FBVCxFQUFXOztBQUVYQSxHQUFFLGNBQUYsRUFBa0JDLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVc7QUFDeENDLFFBQU1DLGNBQU47QUFDQUgsSUFBRSxjQUFGLEVBQWtCSSxXQUFsQixDQUE4QixtQkFBOUI7QUFDQUosSUFBRSxlQUFGLEVBQW1CSyxLQUFuQjtBQUNBTCxJQUFFLGdCQUFGLEVBQW9CSSxXQUFwQixDQUFnQyxxQkFBaEM7QUFDQSxFQUxEO0FBTUEsS0FBS0osRUFBRSxvQkFBRixDQUFMLEVBQStCO0FBQzlCQSxJQUFFLGVBQUYsRUFBbUJDLEVBQW5CLENBQXNCLE1BQXRCLEVBQThCLFlBQVc7QUFDeENDLFNBQU1DLGNBQU47QUFDQUgsS0FBRSxjQUFGLEVBQWtCSSxXQUFsQixDQUE4QixtQkFBOUI7QUFDREosS0FBRSxnQkFBRixFQUFvQkksV0FBcEIsQ0FBZ0MscUJBQWhDO0FBQ0MsR0FKRDtBQUtBOztBQUdGSixHQUFFTSxNQUFGLEVBQVVDLElBQVYsQ0FBZSxZQUFXO0FBQ3pCUCxJQUFFLFFBQUYsRUFBWVEsR0FBWixDQUFnQjtBQUNmLGtCQUFnQixRQUREO0FBRWYsYUFBYyxHQUZDO0FBR2YsZ0JBQWUsUUFIQTtBQUlmLGtCQUFnQjtBQUpELEdBQWhCOztBQU9BLE1BQUlDLElBQUlULEVBQUcsZUFBSCxFQUFxQlUsTUFBckIsS0FBZ0MsRUFBeEM7QUFDQUMsVUFBUUMsR0FBUixDQUFZSCxDQUFaO0FBQ0FULElBQUUsbUJBQUYsRUFBdUJRLEdBQXZCLENBQTJCO0FBQ3hCRSxXQUFXRCxDQUFYO0FBRHdCLEdBQTNCO0FBR0EsRUFiRDtBQWVDLENBaENELEVBZ0NHSSxNQWhDSCxFIiwiZmlsZSI6Ii4vaW5oYWJpdGFudC9zcmMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmExMjI3OGY3YWNiODIzNzkzOTUiLCIoZnVuY3Rpb24oJCl7XG5cblx0JCgnLmljb24tc2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQkKCcuc2VhcmNoLWZvcm0nKS50b2dnbGVDbGFzcygnc2VhcmNoLWZvcm0tY2xpY2snKTtcblx0XHQkKCcuc2VhcmNoLWZpZWxkJykuZm9jdXMoKTtcblx0XHQkKCcubWVudS1pdGVtLTIxNycpLnRvZ2dsZUNsYXNzKCdtZW51LWl0ZW0tMjE3LWNsaWNrJyk7XG5cdH0pO1xuXHRpZiAoICQoJy5zZWFyY2gtZm9ybS1jbGljaycpICkge1xuXHRcdCQoJy5zZWFyY2gtZmllbGQnKS5vbignYmx1cicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdCQoJy5zZWFyY2gtZm9ybScpLnRvZ2dsZUNsYXNzKCdzZWFyY2gtZm9ybS1jbGljaycpO1xuXHRcdCQoJy5tZW51LWl0ZW0tMjE3JykudG9nZ2xlQ2xhc3MoJ21lbnUtaXRlbS0yMTctY2xpY2snKTtcblx0XHR9KTtcblx0fVxuXG5cbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xuXHQkKCcuQm9keUEnKS5jc3Moe1xuXHRcdCdsaW5lLWhlaWdodCcgOiAnMS44cmVtJyxcblx0XHQnbWFyZ2luJyBcdFx0XHQ6ICcwJyxcblx0XHQnZm9udC1zaXplJ1x0XHQ6ICcwLjlyZW0nLFxuXHRcdCdmb250LWZhbWlseSdcdDogJ01lcnJpd2VhdGhlcidcblx0fSk7XG5cdFxuXHRsZXQgeCA9ICQoICcuY29udGVudC1hcmVhJyApLmhlaWdodCgpIC0gNTAgO1xuXHRjb25zb2xlLmxvZyh4KTtcblx0JCgnLnNpZGUtd2lkZ2V0LWFyZWEnKS5jc3Moe1xuICAgIGhlaWdodDogYCR7eH1weGAsXG5cdH0pO1xufSk7XG5cbn0pKGpRdWVyeSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmhhYml0YW50L2pzL2luaGFiaXRlbnQtc2NyaXB0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==