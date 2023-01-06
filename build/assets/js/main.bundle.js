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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets sync recursive \\.(svg|png|jpe?g)$":
/*!********************************************!*\
  !*** ./src/assets sync \.(svg|png|jpe?g)$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src/assets sync recursive \\.(svg|png|jpe?g)$";

/***/ }),

/***/ "./src/assets/scripts/components/accordion.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/components/accordion.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = window.$ || window.jQuery;
$(document).ready(function () {
  var accordionItems = $('section.accordion');

  if (accordionItems.length > 0) {
    var allAccordionTexts = $('section.accordion .accordion__text');
    allAccordionTexts.hide();
    accordionItems.each(function () {
      $(this).find('.accordion__title').click(function () {
        allAccordionTexts.slideUp();
        $(this).next().slideDown();
      });
    });
  }
});

/***/ }),

/***/ "./src/assets/scripts/components/map.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/components/map.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = window.$ || window.jQuery;
var google = window.google;

function initMap($el) {
  var $markers = $el.find('.map__pins-holder__pin');
  var $map = $el.find('.map__holder');
  var lat = parseFloat($el.data('lat')) || 0;
  var lng = parseFloat($el.data('lng')) || 0;
  var zoom = parseFloat($el.data('zoom')) || 12;
  var map = new google.maps.Map($map[0], {
    zoom: zoom,
    center: new google.maps.LatLng(lat, lng),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  map.markers = [];
  $markers.each(function () {
    addMarker($(this), map);
  });
  return map;
}

function addMarker($marker, map) {
  var latlng = new google.maps.LatLng($marker.attr('data-lat'), $marker.attr('data-lng'));
  var marker = new google.maps.Marker({
    position: latlng,
    map: map
  });
  map.markers.push(marker);

  if ($marker.html()) {
    var infowindow = new google.maps.InfoWindow({
      content: $marker.html()
    });
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });
  }
}

$(document).ready(function () {
  $('section.map').each(function () {
    initMap($(this));
  });
});

/***/ }),

/***/ "./src/assets/scripts/components/slider.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/components/slider.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = window.$ || window.jQuery;
var boxItemsSliders = $('.box-slider__slider');

if (boxItemsSliders.length > 0) {
  boxItemsSliders.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: '<div class="box-slider__slider__prev-arrow">&lt;</div>',
    nextArrow: '<div class="box-slider__slider__next-arrow">&gt;</div>'
  });
}

var heroSlider = $('.hero-slider__slider');

if (heroSlider.length > 0) {
  heroSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: 'hero-slider__slider__dots',
    customPaging: function customPaging(slider, i) {
      return '<button type="button" class="hero-slider__slider__dots__button" id=' + i + '></button>';
    }
  });
}

var imageSlider = $('.image-slider__slider');

if (imageSlider.length > 0) {
  imageSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    prevArrow: '<div class="image-slider__slider__prev-arrow">&lt;</div>',
    nextArrow: '<div class="image-slider__slider__next-arrow">&gt;</div>'
  });
}

var testimonialsSliders = $('.testimonials__slider');

if (testimonialsSliders.length > 0) {
  testimonialsSliders.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: 'testimonials__slider__dots',
    customPaging: function customPaging(slider, i) {
      return '<button type="button" class="testimonials__slider__dots__button" id=' + i + '></button>';
    }
  });
}

/***/ }),

/***/ "./src/assets/styles/main.scss":
/*!*************************************!*\
  !*** ./src/assets/styles/main.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ---------- Image / css assets ------------

__webpack_require__("./src/assets sync recursive \\.(svg|png|jpe?g)$");

__webpack_require__(/*! ./assets/styles/main.scss */ "./src/assets/styles/main.scss"); // -------------- Lazy load -----------------

/*
 * import LazyImageLoader from './assets/scripts/components/lazyimageloader.js';
 * LazyImageLoader.init();
 */
// ----------- Custom scripts ---------------


__webpack_require__(/*! ./assets/scripts/components/accordion.js */ "./src/assets/scripts/components/accordion.js");

__webpack_require__(/*! ./assets/scripts/components/slider.js */ "./src/assets/scripts/components/slider.js");

__webpack_require__(/*! ./assets/scripts/components/map.js */ "./src/assets/scripts/components/map.js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cyBzeW5jIFxcLihzdmd8cG5nfGpwZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiYWNjb3JkaW9uSXRlbXMiLCJsZW5ndGgiLCJhbGxBY2NvcmRpb25UZXh0cyIsImhpZGUiLCJlYWNoIiwiZmluZCIsImNsaWNrIiwic2xpZGVVcCIsIm5leHQiLCJzbGlkZURvd24iLCJnb29nbGUiLCJpbml0TWFwIiwiJGVsIiwiJG1hcmtlcnMiLCIkbWFwIiwibGF0IiwicGFyc2VGbG9hdCIsImRhdGEiLCJsbmciLCJ6b29tIiwibWFwIiwibWFwcyIsIk1hcCIsImNlbnRlciIsIkxhdExuZyIsIm1hcFR5cGVJZCIsIk1hcFR5cGVJZCIsIlJPQURNQVAiLCJtYXJrZXJzIiwiYWRkTWFya2VyIiwiJG1hcmtlciIsImxhdGxuZyIsImF0dHIiLCJtYXJrZXIiLCJNYXJrZXIiLCJwb3NpdGlvbiIsInB1c2giLCJodG1sIiwiaW5mb3dpbmRvdyIsIkluZm9XaW5kb3ciLCJjb250ZW50IiwiZXZlbnQiLCJhZGRMaXN0ZW5lciIsIm9wZW4iLCJib3hJdGVtc1NsaWRlcnMiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwiZG90cyIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImhlcm9TbGlkZXIiLCJkb3RzQ2xhc3MiLCJjdXN0b21QYWdpbmciLCJzbGlkZXIiLCJpIiwiaW1hZ2VTbGlkZXIiLCJhZGFwdGl2ZUhlaWdodCIsInRlc3RpbW9uaWFsc1NsaWRlcnMiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQSwyRTs7Ozs7Ozs7Ozs7O0FDUmE7O0FBQ2IsSUFBTUEsQ0FBQyxHQUFHQyxNQUFNLENBQUNELENBQVAsSUFBWUMsTUFBTSxDQUFDQyxNQUE3QjtBQUVBRixDQUFDLENBQUNHLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUIsTUFBSUMsY0FBYyxHQUFHTCxDQUFDLENBQUMsbUJBQUQsQ0FBdEI7O0FBRUEsTUFBSUssY0FBYyxDQUFDQyxNQUFmLEdBQXdCLENBQTVCLEVBQStCO0FBQzNCLFFBQUlDLGlCQUFpQixHQUFHUCxDQUFDLENBQUMsb0NBQUQsQ0FBekI7QUFDQU8scUJBQWlCLENBQUNDLElBQWxCO0FBRUFILGtCQUFjLENBQUNJLElBQWYsQ0FBb0IsWUFBWTtBQUM1QlQsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVSxJQUFSLENBQWEsbUJBQWIsRUFBa0NDLEtBQWxDLENBQXdDLFlBQVk7QUFDaERKLHlCQUFpQixDQUFDSyxPQUFsQjtBQUNBWixTQUFDLENBQUMsSUFBRCxDQUFELENBQVFhLElBQVIsR0FBZUMsU0FBZjtBQUNILE9BSEQ7QUFJSCxLQUxEO0FBTUg7QUFDSixDQWRELEU7Ozs7Ozs7Ozs7OztBQ0hhOztBQUViLElBQU1kLENBQUMsR0FBR0MsTUFBTSxDQUFDRCxDQUFQLElBQVlDLE1BQU0sQ0FBQ0MsTUFBN0I7QUFDQSxJQUFNYSxNQUFNLEdBQUdkLE1BQU0sQ0FBQ2MsTUFBdEI7O0FBRUEsU0FBU0MsT0FBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDbkIsTUFBSUMsUUFBUSxHQUFHRCxHQUFHLENBQUNQLElBQUosQ0FBUyx3QkFBVCxDQUFmO0FBQ0EsTUFBSVMsSUFBSSxHQUFHRixHQUFHLENBQUNQLElBQUosQ0FBUyxjQUFULENBQVg7QUFFQSxNQUFJVSxHQUFHLEdBQUdDLFVBQVUsQ0FBQ0osR0FBRyxDQUFDSyxJQUFKLENBQVMsS0FBVCxDQUFELENBQVYsSUFBK0IsQ0FBekM7QUFDQSxNQUFJQyxHQUFHLEdBQUdGLFVBQVUsQ0FBQ0osR0FBRyxDQUFDSyxJQUFKLENBQVMsS0FBVCxDQUFELENBQVYsSUFBK0IsQ0FBekM7QUFDQSxNQUFJRSxJQUFJLEdBQUdILFVBQVUsQ0FBQ0osR0FBRyxDQUFDSyxJQUFKLENBQVMsTUFBVCxDQUFELENBQVYsSUFBZ0MsRUFBM0M7QUFFQSxNQUFJRyxHQUFHLEdBQUcsSUFBSVYsTUFBTSxDQUFDVyxJQUFQLENBQVlDLEdBQWhCLENBQW9CUixJQUFJLENBQUMsQ0FBRCxDQUF4QixFQUE2QjtBQUNuQ0ssUUFBSSxFQUFFQSxJQUQ2QjtBQUVuQ0ksVUFBTSxFQUFFLElBQUliLE1BQU0sQ0FBQ1csSUFBUCxDQUFZRyxNQUFoQixDQUF1QlQsR0FBdkIsRUFBNEJHLEdBQTVCLENBRjJCO0FBR25DTyxhQUFTLEVBQUVmLE1BQU0sQ0FBQ1csSUFBUCxDQUFZSyxTQUFaLENBQXNCQztBQUhFLEdBQTdCLENBQVY7QUFNQVAsS0FBRyxDQUFDUSxPQUFKLEdBQWMsRUFBZDtBQUNBZixVQUFRLENBQUNULElBQVQsQ0FBYyxZQUFZO0FBQ3RCeUIsYUFBUyxDQUFDbEMsQ0FBQyxDQUFDLElBQUQsQ0FBRixFQUFVeUIsR0FBVixDQUFUO0FBQ0gsR0FGRDtBQUlBLFNBQU9BLEdBQVA7QUFDSDs7QUFFRCxTQUFTUyxTQUFULENBQW9CQyxPQUFwQixFQUE2QlYsR0FBN0IsRUFBa0M7QUFDOUIsTUFBSVcsTUFBTSxHQUFHLElBQUlyQixNQUFNLENBQUNXLElBQVAsQ0FBWUcsTUFBaEIsQ0FBdUJNLE9BQU8sQ0FBQ0UsSUFBUixDQUFhLFVBQWIsQ0FBdkIsRUFBaURGLE9BQU8sQ0FBQ0UsSUFBUixDQUFhLFVBQWIsQ0FBakQsQ0FBYjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxJQUFJdkIsTUFBTSxDQUFDVyxJQUFQLENBQVlhLE1BQWhCLENBQXVCO0FBQ2hDQyxZQUFRLEVBQUVKLE1BRHNCO0FBRWhDWCxPQUFHLEVBQUVBO0FBRjJCLEdBQXZCLENBQWI7QUFLQUEsS0FBRyxDQUFDUSxPQUFKLENBQVlRLElBQVosQ0FBaUJILE1BQWpCOztBQUVBLE1BQUlILE9BQU8sQ0FBQ08sSUFBUixFQUFKLEVBQW9CO0FBQ2hCLFFBQUlDLFVBQVUsR0FBRyxJQUFJNUIsTUFBTSxDQUFDVyxJQUFQLENBQVlrQixVQUFoQixDQUEyQjtBQUN4Q0MsYUFBTyxFQUFFVixPQUFPLENBQUNPLElBQVI7QUFEK0IsS0FBM0IsQ0FBakI7QUFJQTNCLFVBQU0sQ0FBQ1csSUFBUCxDQUFZb0IsS0FBWixDQUFrQkMsV0FBbEIsQ0FBOEJULE1BQTlCLEVBQXNDLE9BQXRDLEVBQStDLFlBQVk7QUFDdkRLLGdCQUFVLENBQUNLLElBQVgsQ0FBZ0J2QixHQUFoQixFQUFxQmEsTUFBckI7QUFDSCxLQUZEO0FBR0g7QUFDSjs7QUFFRHRDLENBQUMsQ0FBQ0csUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQkosR0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQlMsSUFBakIsQ0FBc0IsWUFBWTtBQUM5Qk8sV0FBTyxDQUFDaEIsQ0FBQyxDQUFDLElBQUQsQ0FBRixDQUFQO0FBQ0gsR0FGRDtBQUdILENBSkQsRTs7Ozs7Ozs7Ozs7O0FDL0NhOztBQUNiLElBQU1BLENBQUMsR0FBR0MsTUFBTSxDQUFDRCxDQUFQLElBQVlDLE1BQU0sQ0FBQ0MsTUFBN0I7QUFFQSxJQUFJK0MsZUFBZSxHQUFHakQsQ0FBQyxDQUFDLHFCQUFELENBQXZCOztBQUNBLElBQUlpRCxlQUFlLENBQUMzQyxNQUFoQixHQUF5QixDQUE3QixFQUFnQztBQUM1QjJDLGlCQUFlLENBQUNDLEtBQWhCLENBQXNCO0FBQ2xCQyxnQkFBWSxFQUFFLENBREk7QUFFbEJDLGtCQUFjLEVBQUUsQ0FGRTtBQUdsQkMsVUFBTSxFQUFFLElBSFU7QUFJbEJDLFFBQUksRUFBRSxLQUpZO0FBS2xCQyxhQUFTLEVBQUUsd0RBTE87QUFNbEJDLGFBQVMsRUFBRTtBQU5PLEdBQXRCO0FBUUg7O0FBRUQsSUFBSUMsVUFBVSxHQUFHekQsQ0FBQyxDQUFDLHNCQUFELENBQWxCOztBQUNBLElBQUl5RCxVQUFVLENBQUNuRCxNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCbUQsWUFBVSxDQUFDUCxLQUFYLENBQWlCO0FBQ2JDLGdCQUFZLEVBQUUsQ0FERDtBQUViQyxrQkFBYyxFQUFFLENBRkg7QUFHYkMsVUFBTSxFQUFFLEtBSEs7QUFJYkMsUUFBSSxFQUFFLElBSk87QUFLYkksYUFBUyxFQUFFLDJCQUxFO0FBTWJDLGdCQUFZLEVBQUUsc0JBQVVDLE1BQVYsRUFBa0JDLENBQWxCLEVBQXFCO0FBQy9CLGFBQU8sd0VBQXdFQSxDQUF4RSxHQUE0RSxZQUFuRjtBQUNIO0FBUlksR0FBakI7QUFVSDs7QUFFRCxJQUFJQyxXQUFXLEdBQUc5RCxDQUFDLENBQUMsdUJBQUQsQ0FBbkI7O0FBQ0EsSUFBSThELFdBQVcsQ0FBQ3hELE1BQVosR0FBcUIsQ0FBekIsRUFBNEI7QUFDeEJ3RCxhQUFXLENBQUNaLEtBQVosQ0FBa0I7QUFDZEMsZ0JBQVksRUFBRSxDQURBO0FBRWRDLGtCQUFjLEVBQUUsQ0FGRjtBQUdkQyxVQUFNLEVBQUUsSUFITTtBQUlkQyxRQUFJLEVBQUUsS0FKUTtBQUtkUyxrQkFBYyxFQUFFLElBTEY7QUFNZFIsYUFBUyxFQUFFLDBEQU5HO0FBT2RDLGFBQVMsRUFBRTtBQVBHLEdBQWxCO0FBU0g7O0FBRUQsSUFBSVEsbUJBQW1CLEdBQUdoRSxDQUFDLENBQUMsdUJBQUQsQ0FBM0I7O0FBQ0EsSUFBSWdFLG1CQUFtQixDQUFDMUQsTUFBcEIsR0FBNkIsQ0FBakMsRUFBb0M7QUFDaEMwRCxxQkFBbUIsQ0FBQ2QsS0FBcEIsQ0FBMEI7QUFDdEJDLGdCQUFZLEVBQUUsQ0FEUTtBQUV0QkMsa0JBQWMsRUFBRSxDQUZNO0FBR3RCQyxVQUFNLEVBQUUsS0FIYztBQUl0QkMsUUFBSSxFQUFFLElBSmdCO0FBS3RCSSxhQUFTLEVBQUUsNEJBTFc7QUFNdEJDLGdCQUFZLEVBQUUsc0JBQVVDLE1BQVYsRUFBa0JDLENBQWxCLEVBQXFCO0FBQy9CLGFBQU8seUVBQXlFQSxDQUF6RSxHQUE2RSxZQUFwRjtBQUNIO0FBUnFCLEdBQTFCO0FBVUgsQzs7Ozs7Ozs7Ozs7QUN0REQsdUM7Ozs7Ozs7Ozs7OztDQ0VBOztBQUVBSSxzRUFBQTs7QUFDQUEsbUJBQU8sQ0FBQyxnRUFBRCxDQUFQLEMsQ0FFQTs7QUFFQTs7OztBQUtBOzs7QUFFQUEsbUJBQU8sQ0FBQyw4RkFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLHdGQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsa0ZBQUQsQ0FBUCxDIiwiZmlsZSI6ImFzc2V0cy9qcy9tYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMgc3luYyByZWN1cnNpdmUgXFxcXC4oc3ZnfHBuZ3xqcGU/ZykkXCI7IiwiJ3VzZSBzdHJpY3QnO1xyXG5jb25zdCAkID0gd2luZG93LiQgfHwgd2luZG93LmpRdWVyeTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhY2NvcmRpb25JdGVtcyA9ICQoJ3NlY3Rpb24uYWNjb3JkaW9uJyk7XHJcblxyXG4gICAgaWYgKGFjY29yZGlvbkl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB2YXIgYWxsQWNjb3JkaW9uVGV4dHMgPSAkKCdzZWN0aW9uLmFjY29yZGlvbiAuYWNjb3JkaW9uX190ZXh0Jyk7XHJcbiAgICAgICAgYWxsQWNjb3JkaW9uVGV4dHMuaGlkZSgpO1xyXG5cclxuICAgICAgICBhY2NvcmRpb25JdGVtcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuYWNjb3JkaW9uX190aXRsZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFsbEFjY29yZGlvblRleHRzLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykubmV4dCgpLnNsaWRlRG93bigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0ICQgPSB3aW5kb3cuJCB8fCB3aW5kb3cualF1ZXJ5O1xyXG5jb25zdCBnb29nbGUgPSB3aW5kb3cuZ29vZ2xlO1xyXG5cclxuZnVuY3Rpb24gaW5pdE1hcCAoJGVsKSB7XHJcbiAgICB2YXIgJG1hcmtlcnMgPSAkZWwuZmluZCgnLm1hcF9fcGlucy1ob2xkZXJfX3BpbicpO1xyXG4gICAgdmFyICRtYXAgPSAkZWwuZmluZCgnLm1hcF9faG9sZGVyJyk7XHJcblxyXG4gICAgdmFyIGxhdCA9IHBhcnNlRmxvYXQoJGVsLmRhdGEoJ2xhdCcpKSB8fCAwO1xyXG4gICAgdmFyIGxuZyA9IHBhcnNlRmxvYXQoJGVsLmRhdGEoJ2xuZycpKSB8fCAwO1xyXG4gICAgdmFyIHpvb20gPSBwYXJzZUZsb2F0KCRlbC5kYXRhKCd6b29tJykpIHx8IDEyO1xyXG5cclxuICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKCRtYXBbMF0sIHtcclxuICAgICAgICB6b29tOiB6b29tLFxyXG4gICAgICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZyksXHJcbiAgICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUFxyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwLm1hcmtlcnMgPSBbXTtcclxuICAgICRtYXJrZXJzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGFkZE1hcmtlcigkKHRoaXMpLCBtYXApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG1hcDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTWFya2VyICgkbWFya2VyLCBtYXApIHtcclxuICAgIHZhciBsYXRsbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKCRtYXJrZXIuYXR0cignZGF0YS1sYXQnKSwgJG1hcmtlci5hdHRyKCdkYXRhLWxuZycpKTtcclxuICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICBwb3NpdGlvbjogbGF0bG5nLFxyXG4gICAgICAgIG1hcDogbWFwXHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXAubWFya2Vycy5wdXNoKG1hcmtlcik7XHJcblxyXG4gICAgaWYgKCRtYXJrZXIuaHRtbCgpKSB7XHJcbiAgICAgICAgdmFyIGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICRtYXJrZXIuaHRtbCgpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbmZvd2luZG93Lm9wZW4obWFwLCBtYXJrZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdzZWN0aW9uLm1hcCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGluaXRNYXAoJCh0aGlzKSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuY29uc3QgJCA9IHdpbmRvdy4kIHx8IHdpbmRvdy5qUXVlcnk7XHJcblxyXG52YXIgYm94SXRlbXNTbGlkZXJzID0gJCgnLmJveC1zbGlkZXJfX3NsaWRlcicpO1xyXG5pZiAoYm94SXRlbXNTbGlkZXJzLmxlbmd0aCA+IDApIHtcclxuICAgIGJveEl0ZW1zU2xpZGVycy5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiYm94LXNsaWRlcl9fc2xpZGVyX19wcmV2LWFycm93XCI+Jmx0OzwvZGl2PicsXHJcbiAgICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImJveC1zbGlkZXJfX3NsaWRlcl9fbmV4dC1hcnJvd1wiPiZndDs8L2Rpdj4nXHJcbiAgICB9KTtcclxufVxyXG5cclxudmFyIGhlcm9TbGlkZXIgPSAkKCcuaGVyby1zbGlkZXJfX3NsaWRlcicpO1xyXG5pZiAoaGVyb1NsaWRlci5sZW5ndGggPiAwKSB7XHJcbiAgICBoZXJvU2xpZGVyLnNsaWNrKHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGRvdHNDbGFzczogJ2hlcm8tc2xpZGVyX19zbGlkZXJfX2RvdHMnLFxyXG4gICAgICAgIGN1c3RvbVBhZ2luZzogZnVuY3Rpb24gKHNsaWRlciwgaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiaGVyby1zbGlkZXJfX3NsaWRlcl9fZG90c19fYnV0dG9uXCIgaWQ9JyArIGkgKyAnPjwvYnV0dG9uPic7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbnZhciBpbWFnZVNsaWRlciA9ICQoJy5pbWFnZS1zbGlkZXJfX3NsaWRlcicpO1xyXG5pZiAoaW1hZ2VTbGlkZXIubGVuZ3RoID4gMCkge1xyXG4gICAgaW1hZ2VTbGlkZXIuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgcHJldkFycm93OiAnPGRpdiBjbGFzcz1cImltYWdlLXNsaWRlcl9fc2xpZGVyX19wcmV2LWFycm93XCI+Jmx0OzwvZGl2PicsXHJcbiAgICAgICAgbmV4dEFycm93OiAnPGRpdiBjbGFzcz1cImltYWdlLXNsaWRlcl9fc2xpZGVyX19uZXh0LWFycm93XCI+Jmd0OzwvZGl2PidcclxuICAgIH0pO1xyXG59XHJcblxyXG52YXIgdGVzdGltb25pYWxzU2xpZGVycyA9ICQoJy50ZXN0aW1vbmlhbHNfX3NsaWRlcicpO1xyXG5pZiAodGVzdGltb25pYWxzU2xpZGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICB0ZXN0aW1vbmlhbHNTbGlkZXJzLnNsaWNrKHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGRvdHNDbGFzczogJ3Rlc3RpbW9uaWFsc19fc2xpZGVyX19kb3RzJyxcclxuICAgICAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uIChzbGlkZXIsIGkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRlc3RpbW9uaWFsc19fc2xpZGVyX19kb3RzX19idXR0b25cIiBpZD0nICsgaSArICc+PC9idXR0b24+JztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vLyAtLS0tLS0tLS0tIEltYWdlIC8gY3NzIGFzc2V0cyAtLS0tLS0tLS0tLS1cclxuXHJcbnJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvJywgdHJ1ZSwgL1xcLihzdmd8cG5nfGpwZT9nKSQvKTtcclxucmVxdWlyZSgnLi9hc3NldHMvc3R5bGVzL21haW4uc2NzcycpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0gTGF6eSBsb2FkIC0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vKlxyXG4gKiBpbXBvcnQgTGF6eUltYWdlTG9hZGVyIGZyb20gJy4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9sYXp5aW1hZ2Vsb2FkZXIuanMnO1xyXG4gKiBMYXp5SW1hZ2VMb2FkZXIuaW5pdCgpO1xyXG4gKi9cclxuXHJcbi8vIC0tLS0tLS0tLS0tIEN1c3RvbSBzY3JpcHRzIC0tLS0tLS0tLS0tLS0tLVxyXG5cclxucmVxdWlyZSgnLi9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2FjY29yZGlvbi5qcycpO1xyXG5yZXF1aXJlKCcuL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvc2xpZGVyLmpzJyk7XHJcbnJlcXVpcmUoJy4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9tYXAuanMnKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==