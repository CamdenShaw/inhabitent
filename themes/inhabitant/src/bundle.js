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
		$('.BodyA').css('display', null);

		var x = $('.content-area').height() - 50;
		console.log(x);
		$('.side-widget-area').css({
			height: x + 'px'
		});
	});
})(jQuery);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWQyOWYyZGE3NTYwOGYxMTljOTQiLCJ3ZWJwYWNrOi8vLy4vaW5oYWJpdGFudC9qcy9pbmhhYml0ZW50LXNjcmlwdC5qcyJdLCJuYW1lcyI6WyIkIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCJmb2N1cyIsIndpbmRvdyIsImxvYWQiLCJjc3MiLCJ4IiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBLENBQUMsVUFBU0EsQ0FBVCxFQUFXOztBQUVYQSxHQUFFLGNBQUYsRUFBa0JDLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVc7QUFDeENDLFFBQU1DLGNBQU47QUFDQUgsSUFBRSxjQUFGLEVBQWtCSSxXQUFsQixDQUE4QixtQkFBOUI7QUFDQUosSUFBRSxlQUFGLEVBQW1CSyxLQUFuQjtBQUNBTCxJQUFFLGdCQUFGLEVBQW9CSSxXQUFwQixDQUFnQyxxQkFBaEM7QUFDQSxFQUxEO0FBTUEsS0FBS0osRUFBRSxvQkFBRixDQUFMLEVBQStCO0FBQzlCQSxJQUFFLGVBQUYsRUFBbUJDLEVBQW5CLENBQXNCLE1BQXRCLEVBQThCLFlBQVc7QUFDeENDLFNBQU1DLGNBQU47QUFDQUgsS0FBRSxjQUFGLEVBQWtCSSxXQUFsQixDQUE4QixtQkFBOUI7QUFDREosS0FBRSxnQkFBRixFQUFvQkksV0FBcEIsQ0FBZ0MscUJBQWhDO0FBQ0MsR0FKRDtBQUtBOztBQUdGSixHQUFFTSxNQUFGLEVBQVVDLElBQVYsQ0FBZSxZQUFXO0FBQ3pCUCxJQUFFLFFBQUYsRUFBWVEsR0FBWixDQUFnQixTQUFoQixFQUEwQixJQUExQjs7QUFFQSxNQUFJQyxJQUFJVCxFQUFHLGVBQUgsRUFBcUJVLE1BQXJCLEtBQWdDLEVBQXhDO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWUgsQ0FBWjtBQUNBVCxJQUFFLG1CQUFGLEVBQXVCUSxHQUF2QixDQUEyQjtBQUN4QkUsV0FBV0QsQ0FBWDtBQUR3QixHQUEzQjtBQUdBLEVBUkQ7QUFVQyxDQTNCRCxFQTJCR0ksTUEzQkgsRSIsImZpbGUiOiIuL2luaGFiaXRhbnQvc3JjL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFkMjlmMmRhNzU2MDhmMTE5Yzk0IiwiKGZ1bmN0aW9uKCQpe1xuXG5cdCQoJy5pY29uLXNlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0JCgnLnNlYXJjaC1mb3JtJykudG9nZ2xlQ2xhc3MoJ3NlYXJjaC1mb3JtLWNsaWNrJyk7XG5cdFx0JCgnLnNlYXJjaC1maWVsZCcpLmZvY3VzKCk7XG5cdFx0JCgnLm1lbnUtaXRlbS0yMTcnKS50b2dnbGVDbGFzcygnbWVudS1pdGVtLTIxNy1jbGljaycpO1xuXHR9KTtcblx0aWYgKCAkKCcuc2VhcmNoLWZvcm0tY2xpY2snKSApIHtcblx0XHQkKCcuc2VhcmNoLWZpZWxkJykub24oJ2JsdXInLCBmdW5jdGlvbigpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHQkKCcuc2VhcmNoLWZvcm0nKS50b2dnbGVDbGFzcygnc2VhcmNoLWZvcm0tY2xpY2snKTtcblx0XHQkKCcubWVudS1pdGVtLTIxNycpLnRvZ2dsZUNsYXNzKCdtZW51LWl0ZW0tMjE3LWNsaWNrJyk7XG5cdFx0fSk7XG5cdH1cblxuXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcblx0JCgnLkJvZHlBJykuY3NzKCdkaXNwbGF5JyxudWxsKTtcblx0XG5cdGxldCB4ID0gJCggJy5jb250ZW50LWFyZWEnICkuaGVpZ2h0KCkgLSA1MCA7XG5cdGNvbnNvbGUubG9nKHgpO1xuXHQkKCcuc2lkZS13aWRnZXQtYXJlYScpLmNzcyh7XG4gICAgaGVpZ2h0OiBgJHt4fXB4YCxcblx0fSk7XG59KTtcblxufSkoalF1ZXJ5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luaGFiaXRhbnQvanMvaW5oYWJpdGVudC1zY3JpcHQuanMiXSwic291cmNlUm9vdCI6IiJ9