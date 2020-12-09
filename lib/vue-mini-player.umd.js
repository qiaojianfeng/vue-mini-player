(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-mini-player"] = factory();
	else
		root["vue-mini-player"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "112a");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00a7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0340":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_VuePlayer_vue_vue_type_style_index_0_id_5bbaf828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f6d2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_VuePlayer_vue_vue_type_style_index_0_id_5bbaf828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_VuePlayer_vue_vue_type_style_index_0_id_5bbaf828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0353":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("6bf8");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "05fd":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("baa7")('native-function-to-string', Function.toString);


/***/ }),

/***/ "065d":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("bb8b");
var createDesc = __webpack_require__("5edc");
module.exports = __webpack_require__("26df") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "065e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "0926":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "0b34":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "0c29":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "112a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.1@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("e67d")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("a450");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d84d941-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-mini-player/src/VuePlayer.vue?vue&type=template&id=5bbaf828&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticClass:"vm-player",on:{"click":function($event){$event.stopPropagation();return _vm.handleClickVideo($event)}}},[(_vm.options.logo)?_c('div',{staticClass:"_logo",style:(_vm.logoStyle)},[_vm._v("\n    "+_vm._s(_vm.options.logo)+"\n  ")]):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isPlaying&&_vm.isStart && _vm.options.cover),expression:"!isPlaying&&isStart && options.cover"}],staticClass:"_poster",style:({backgroundImage:("url(" + (_vm.options.cover) + ")")})}),[_c('video',{ref:"video",staticClass:"_video-ref",attrs:{"loop":_vm.options.loop,"preload":_vm.options.preload,"poster":_vm.options.cover,"autoplay":_vm.options.autoplay},domProps:{"muted":_vm.options.muted}},[_vm._l((_vm.vUrl),function(item,index){return _c('source',{key:index,attrs:{"src":item,"type":("video/" + (_vm.getUrlType(item)))}})}),_vm._v("\n      Your browser does not support the video element.\n    ")],2)],_c('transition',{attrs:{"name":"fade"}},[_c('PlayBtn',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isClearMode),expression:"!isClearMode"}],attrs:{"isPlaying":_vm.isPlaying},on:{"update:isPlaying":function($event){_vm.isPlaying=$event},"update:is-playing":function($event){_vm.isPlaying=$event}}})],1),_c('transition',{attrs:{"name":"fade"}},[_c('BaseControls',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isClearMode),expression:"!isClearMode"}],on:{"paused":_vm.handlePaused,"fullscreen":function($event){return _vm.$emit('fullscreen',$event)}}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-mini-player/src/VuePlayer.vue?vue&type=template&id=5bbaf828&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("1bc7");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("fc02");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("d0f2");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("6ba0");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("4057");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d84d941-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-mini-player/src/BaseControls.vue?vue&type=template&id=f59ed6fc&scoped=true&
var BaseControlsvue_type_template_id_f59ed6fc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qun-base-controls"},[_c('Volume',{attrs:{"isMuted":_vm.isMuted},on:{"update:isMuted":function($event){_vm.isMuted=$event},"update:is-muted":function($event){_vm.isMuted=$event}}}),_c('Progress',{on:{"paused":function($event){return _vm.$emit('paused')}}}),_c('Fullscreen',{attrs:{"isFullscreen":_vm.isFullscreen},on:{"update:isFullscreen":function($event){_vm.isFullscreen=$event},"update:is-fullscreen":function($event){_vm.isFullscreen=$event}}})],1)}
var BaseControlsvue_type_template_id_f59ed6fc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-mini-player/src/BaseControls.vue?vue&type=template&id=f59ed6fc&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d84d941-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-mini-player/src/controls/Volume.vue?vue&type=template&id=6d6e1418&scoped=true&
var Volumevue_type_template_id_6d6e1418_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"_vol",on:{"click":function($event){$event.stopPropagation();return _vm.handleClick($event)}}},[(!_vm.isMuted)?_c('svg',{attrs:{"viewBox":"0 0 40 40","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"transform":"translate(-40.000000, -281.000000)"}},[_c('g',{attrs:{"transform":"translate(40.000000, 281.000000)"}},[_c('g',{attrs:{"transform":"translate(0.000000, 4.000000)"}},[_c('path',{attrs:{"d":"M10.314666,7.29159253 L10.314666,23.8296452 L4.05278755,23.8296452 C2.32789564,23.8296452 0.927090038,22.5856319 0.927090038,21.1011808 L0.927090038,10.0200629 C0.927090038,8.50947627 2.31222825,7.29159253 4.05278755,7.29159253 L10.314666,7.29159253 L10.314666,7.29159253 Z","fill":"#FFFFFF","fill-rule":"nonzero"}}),_c('path',{attrs:{"d":"M18.0191834,0.674274796 C19.237061,-0.240440841 20.2249539,0.277026428 20.2249539,1.78238658 L20.2249539,29.3335821 C20.2249539,30.8598483 19.2475171,31.361636 18.0191834,30.4416938 L9.19610116,23.8296087 L9.19610116,7.29155607 L18.0191834,0.674244409 L18.0191834,0.674274796 Z","fill":"#FFFFFF","fill-rule":"nonzero"}}),_c('path',{attrs:{"d":"M29.5357411,25.6333387 C32.0371112,23.0341574 33.5750798,19.5011972 33.5750798,15.6090251 C33.5750798,11.7410714 32.0561911,8.2278731 29.582322,5.63333866","stroke":"#FFFFFF","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])]):_c('svg',{attrs:{"viewBox":"0 0 40 40","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"transform":"translate(-40.000000, -354.000000)","fill":"#FFFFFF","fill-rule":"nonzero"}},[_c('g',{attrs:{"transform":"translate(40.000000, 354.000000)"}},[_c('g',{attrs:{"transform":"translate(0.000000, 5.000000)"}},[_c('path',{attrs:{"d":"M10.314666,7.29159253 L10.314666,23.8296452 L4.05278755,23.8296452 C2.32789564,23.8296452 0.927090038,22.5856319 0.927090038,21.1011808 L0.927090038,10.0200629 C0.927090038,8.50947627 2.31222825,7.29159253 4.05278755,7.29159253 L10.314666,7.29159253 L10.314666,7.29159253 Z"}}),_c('path',{attrs:{"d":"M18.0191834,0.674274796 C19.237061,-0.240440841 20.2249539,0.277026428 20.2249539,1.78238658 L20.2249539,29.3335821 C20.2249539,30.8598483 19.2475171,31.361636 18.0191834,30.4416938 L9.19610116,23.8296087 L9.19610116,7.29155607 L18.0191834,0.674244409 L18.0191834,0.674274796 Z"}}),_c('path',{attrs:{"d":"M23.9256893,11.143836 C23.1573282,10.3754749 23.1573282,9.12100861 23.9256893,8.35265052 L23.9570512,8.32128901 C24.7254123,7.55292788 25.9798786,7.55292788 26.7482367,8.32128901 L38.4461438,20.0191961 C39.2145049,20.7875573 39.2145049,22.0420236 38.4461438,22.8103817 L38.4147823,22.8417435 C37.6411947,23.6153311 36.3919549,23.6153311 35.6235968,22.8417435 L23.9256893,11.143836 Z"}}),_c('path',{attrs:{"d":"M23.9517611,19.9930508 L35.6496683,8.29514369 C36.4180294,7.52678255 37.6724957,7.52678255 38.4408538,8.29514369 L38.4722156,8.32650519 C39.2405767,9.09486633 39.2405767,10.3493326 38.4722156,11.1176907 L26.7743085,22.8208244 C26.0059473,23.5891855 24.751481,23.5891855 23.9831229,22.8208244 L23.9517614,22.7894625 C23.1781738,22.0158749 23.1781738,20.7666351 23.9517614,19.9930505 L23.9517611,19.9930508 Z"}})])])])])])])}
var Volumevue_type_template_id_6d6e1418_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-mini-player/src/controls/Volume.vue?vue&type=template&id=6d6e1418&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-mini-player/src/controls/Volume.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Volumevue_type_script_lang_js_ = ({
  props: {
    isMuted: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    $video: function $video() {
      return this.$parent.$parent.$video;
    }
  },
  methods: {
    handleClick: function handleClick() {
      var isMuted = !this.isMuted;
      this.$emit('update:isMuted', isMuted);
      this.$video && (this.$video.muted = isMuted);
    }
  }
});
// CONCATENATED MODULE: ./packages/vue-mini-player/src/controls/Volume.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_Volumevue_type_script_lang_js_ = (Volumevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-mini-player/src/controls/Volume.vue?vue&type=style&index=0&id=6d6e1418&lang=scss&scoped=true&
var Volumevue_type_style_index_0_id_6d6e1418_lang_scss_scoped_true_ = __webpack_require__("5640");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.5@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/vue-mini-player/src/controls/Volume.vue






/* normalize component */

var component = normalizeComponent(
  controls_Volumevue_type_script_lang_js_,
  Volumevue_type_template_id_6d6e1418_scoped_true_render,
  Volumevue_type_template_id_6d6e1418_scoped_true_staticRenderFns,
  false,
  null,
  "6d6e1418",
  null
  
)

/* harmony default export */ var Volume = (component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d84d941-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-mini-player/src/controls/Progress.vue?vue&type=template&id=165d5d46&scoped=true&
var Progressvue_type_template_id_165d5d46_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"_progress",on:{"click":function($event){$event.stopPropagation();}}},[_c('span',{staticClass:"_time-current"},[_vm._v(_vm._s(_vm.textCurrentTime))]),_c('div',{ref:"_sliderRef",staticClass:"_slider",on:{"click":function($event){$event.stopPropagation();return _vm.clickSlider($event)}}},[_c('div',{staticClass:"_slider-cur",style:({ width: _vm.offsetLeft })}),_c('i',{ref:"_sliderBtnRef",staticClass:"_slider-btn",style:({ left: _vm.offsetLeft }),on:{"click":function($event){$event.stopPropagation();}}})]),_c('span',{staticClass:"_time-amount"},[_vm._v(_vm._s(_vm.textTotalTime))])])}
var Progressvue_type_template_id_165d5d46_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-mini-player/src/controls/Progress.vue?vue&type=template&id=165d5d46&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("25ba");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("32ea");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("8dee");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-mini-player/src/controls/Progress.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
var isMobile = /mobile/i.test(window.navigator.userAgent);
/* harmony default export */ var Progressvue_type_script_lang_js_ = ({
  props: {},
  data: function data() {
    return {
      textTotalTime: '00:00',
      textCurrentTime: '00:00',
      offsetLeft: 0,
      sliderInfo: {
        isMove: false,
        startX: 0,
        oldTime: 0,
        oldOffsetLeft: 0
      }
    };
  },
  computed: {
    playerRef: function playerRef() {
      return this.$parent.$parent;
    },
    $video: function $video() {
      return this.$parent.$parent.$video;
    },
    sliderRef: function sliderRef() {
      return this.$refs._sliderRef;
    }
  },
  watch: {},
  methods: {
    secondToTime: function secondToTime() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      time = time > 0 ? time : 0;

      var add0 = function add0(num) {
        return num < 10 ? "0".concat(num) : num;
      };

      var h = ~~(time / 3600);
      var m = ~~(time % 3600 / 60);
      var s = ~~(time % 60);
      return (h > 0 ? [h, m, s] : [m, s]).map(add0).join(':');
    },
    updateSlider: function updateSlider(ratio) {
      if (ratio >= 0 && ratio <= 100) {
        this.offsetLeft = "".concat(ratio, "%");
      }
    },
    updateTextTime: function updateTextTime(second) {
      this.textCurrentTime = this.secondToTime(second);
    },
    updateVideoTime: function updateVideoTime(second) {
      if (second) {
        this.$video.currentTime = second;
      }
    },
    clickSlider: function clickSlider($event) {
      var sliderW = this.sliderRef.offsetWidth;
      var curOffestLeft = $event.clientX - $event.target.getBoundingClientRect().left;
      this.offsetLeft = "".concat(~~(curOffestLeft / sliderW * 100), "%");
      this.updateVideoState();
    },
    updateVideoState: function updateVideoState() {
      var newSecond = ~~(this.$video.duration * (parseFloat(this.offsetLeft) / 100));
      this.updateVideoTime(newSecond);
      this.updateTextTime(newSecond);
      this.playerRef.isPlaying = true;
    },
    initVideoEvents: function initVideoEvents() {
      var _this = this;

      var events = ['pause', 'play', 'waiting', 'timeupdate', 'durationchange', 'loadeddata'];
      events.forEach(function (e) {
        _this.$video.addEventListener(e, _this["handle".concat(e.toLowerCase().replace(/^./, function (f) {
          return f.toUpperCase();
        }))], false);
      });
    },
    initSliderBtnEvents: function initSliderBtnEvents() {
      var _this2 = this;

      var dragEventMap = {
        DragStart: isMobile ? 'touchstart' : 'mousedown',
        DragMove: isMobile ? 'touchmove' : 'mousemove',
        DragEnd: isMobile ? 'touchend' : 'mouseup'
      };
      Object.keys(dragEventMap).forEach(function (key) {
        var bindRef = key === 'DragStart' ? _this2.$refs._sliderBtnRef : _this2.playerRef.$container;
        bindRef.addEventListener(dragEventMap[key], _this2["handle".concat(key)], false);
      });
    },
    handleLoadeddata: function handleLoadeddata() {
      var totalTime = this.$video.duration;
      this.textTotalTime = this.secondToTime(totalTime);
    },
    handleDurationchange: function handleDurationchange() {
      // 视频读取完成拿到视频长度
      var totalTime = this.$video.duration;
      this.textTotalTime = this.secondToTime(totalTime);
    },
    handleTimeupdate: function handleTimeupdate() {
      // 视频播放时间变化执行
      var currentTime = this.$video.currentTime;
      var ratio = currentTime / this.$video.duration * 100;
      this.updateTextTime(currentTime);
      this.updateSlider(ratio);
    },
    handlePause: function handlePause() {
      // 视频暂停
      var totalTime = this.$video.duration;
      var currentTime = this.$video.currentTime;
      if (currentTime === totalTime) this.playerRef.isPlaying = false;
      this.$emit('paused');
    },
    handlePlay: function handlePlay() {// 视频播放
    },
    handleWaiting: function handleWaiting() {// 视频因点击下一帧等待
    },
    computeMoveInfo: function computeMoveInfo(moveX) {
      var sliderW = this.sliderRef.offsetWidth;
      var offset = moveX - this.sliderInfo.startX;

      if (Math.abs(offset) >= sliderW) {
        offset = offset > 0 ? sliderW : -sliderW;
      }

      var ratio = offset / sliderW * 100;
      var second = this.$video.duration * (ratio / 100);
      return {
        ratio: ratio,
        second: second
      };
    },
    handleDragStart: function handleDragStart($event) {
      $event.stopPropagation(); // 滑块拖拽开始

      this.sliderInfo.startX = $event.clientX || $event.changedTouches[0].clientX;
      this.sliderInfo.isMove = true;
      this.sliderInfo.oldTime = this.$video.currentTime;
      this.sliderInfo.oldOffsetLeft = parseFloat(this.offsetLeft);
    },
    handleDragMove: function handleDragMove($event) {
      var ClienX = $event.clientX || $event.changedTouches[0].clientX; // 滑块拖拽移动中

      if (this.sliderInfo.isMove) {
        var _this$computeMoveInfo = this.computeMoveInfo(ClienX),
            ratio = _this$computeMoveInfo.ratio,
            second = _this$computeMoveInfo.second; // this.updateVideoTime(second);


        this.updateTextTime(second + this.sliderInfo.oldTime);
        this.updateSlider(ratio + this.sliderInfo.oldOffsetLeft);
      }
    },
    handleDragEnd: function handleDragEnd($event) {
      var ClienX = $event.clientX || $event.changedTouches[0].clientX; // 滑块拖拽结束

      if (this.sliderInfo.isMove) {
        var _this$computeMoveInfo2 = this.computeMoveInfo(ClienX),
            ratio = _this$computeMoveInfo2.ratio,
            second = _this$computeMoveInfo2.second;

        this.updateVideoTime(second + this.sliderInfo.oldTime);
        this.updateTextTime(second + this.sliderInfo.oldTime);
        this.updateSlider(ratio + parseFloat(this.offsetLeft));
        this.sliderInfo.isMove = false; // this.playerRef.isPlaying = true;
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      _this3.initVideoEvents();

      _this3.initSliderBtnEvents();
    });
  }
});
// CONCATENATED MODULE: ./packages/vue-mini-player/src/controls/Progress.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_Progressvue_type_script_lang_js_ = (Progressvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-mini-player/src/controls/Progress.vue?vue&type=style&index=0&id=165d5d46&lang=scss&scoped=true&
var Progressvue_type_style_index_0_id_165d5d46_lang_scss_scoped_true_ = __webpack_require__("1a49");

// CONCATENATED MODULE: ./packages/vue-mini-player/src/controls/Progress.vue






/* normalize component */

var Progress_component = normalizeComponent(
  controls_Progressvue_type_script_lang_js_,
  Progressvue_type_template_id_165d5d46_scoped_true_render,
  Progressvue_type_template_id_165d5d46_scoped_true_staticRenderFns,
  false,
  null,
  "165d5d46",
  null
  
)

/* harmony default export */ var Progress = (Progress_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d84d941-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-mini-player/src/controls/Fullscreen.vue?vue&type=template&id=70a58e50&scoped=true&
var Fullscreenvue_type_template_id_70a58e50_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"_fullscreen",on:{"click":function($event){$event.stopPropagation();return _vm.handleClickToggle($event)}}},[_c('svg',{attrs:{"viewBox":"0 0 40 40","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"}},[_c('g',{attrs:{"transform":"translate(-670.000000, -354.000000)","stroke":"#FFFFFF","stroke-width":"5"}},[_c('g',{attrs:{"transform":"translate(670.000000, 354.000000)"}},[_c('path',{attrs:{"d":"M35,20 L35,34 C35,34.5522847 34.5522847,35 34,35 L20,35 M5,20 L5,6 C5,5.44771525 5.44771525,5 6,5 L6,5 L20,5"}})])])])])])}
var Fullscreenvue_type_template_id_70a58e50_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-mini-player/src/controls/Fullscreen.vue?vue&type=template&id=70a58e50&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-mini-player/src/controls/Fullscreen.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Fullscreenvue_type_script_lang_js_ = ({
  props: {
    isFullscreen: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    $video: function $video() {
      return this.$parent.$parent.$video;
    },
    $container: function $container() {
      return this.$parent.$parent.$container;
    }
  },
  watch: {},
  methods: {
    handleClickToggle: function handleClickToggle() {
      if (this.isFullscreen) {
        this.resetFullScreen();
      } else {
        this.reqFullScreen(this.$container);
      }
    },
    setFullscreenState: function setFullscreenState() {
      var fullEle = document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement;
      this.$emit('update:isFullscreen', !!fullEle);
    },
    reqFullScreen: function reqFullScreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.webkitEnterFullscreen) {
        element.webkitEnterFullscreen();
      } else if (this.$video.webkitEnterFullscreen) {
        // Safari for iOS
        this.$video.webkitEnterFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else {
        console.log('进入全屏失败');
      }
    },
    resetFullScreen: function resetFullScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.msCancelFullScreen) {
        document.msCancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    },
    docfullscreenchange: function docfullscreenchange() {
      this.setFullscreenState();
    },
    fullscreenchange: function fullscreenchange() {
      this.setFullscreenState();
    },
    unbindChangeEvent: function unbindChangeEvent() {
      if (/Firefox/.test(navigator.userAgent)) {
        document.removeEventListener('mozfullscreenchange', this.docfullscreenchange);
        document.removeEventListener('fullscreenchange', this.docfullscreenchange);
      } else {
        this.$container.removeEventListener('fullscreenchange', this.fullscreenchange);
        this.$container.removeEventListener('webkitfullscreenchange', this.fullscreenchange);
        document.removeEventListener('msfullscreenchange', this.docfullscreenchange);
        document.removeEventListener('MSFullscreenChange', this.docfullscreenchange);
      }
    },
    bindChangeEvent: function bindChangeEvent() {
      if (/Firefox/.test(navigator.userAgent)) {
        document.addEventListener('mozfullscreenchange', this.docfullscreenchange);
        document.addEventListener('fullscreenchange', this.docfullscreenchange);
      } else {
        this.$container.addEventListener('fullscreenchange', this.fullscreenchange);
        this.$container.addEventListener('webkitfullscreenchange', this.fullscreenchange);
        document.addEventListener('msfullscreenchange', this.docfullscreenchange);
        document.addEventListener('MSFullscreenChange', this.docfullscreenchange);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.bindChangeEvent();
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$container) {
      this.unbindChangeEvent();
    }
  }
});
// CONCATENATED MODULE: ./packages/vue-mini-player/src/controls/Fullscreen.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_Fullscreenvue_type_script_lang_js_ = (Fullscreenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-mini-player/src/controls/Fullscreen.vue?vue&type=style&index=0&id=70a58e50&lang=scss&scoped=true&
var Fullscreenvue_type_style_index_0_id_70a58e50_lang_scss_scoped_true_ = __webpack_require__("205c");

// CONCATENATED MODULE: ./packages/vue-mini-player/src/controls/Fullscreen.vue






/* normalize component */

var Fullscreen_component = normalizeComponent(
  controls_Fullscreenvue_type_script_lang_js_,
  Fullscreenvue_type_template_id_70a58e50_scoped_true_render,
  Fullscreenvue_type_template_id_70a58e50_scoped_true_staticRenderFns,
  false,
  null,
  "70a58e50",
  null
  
)

/* harmony default export */ var Fullscreen = (Fullscreen_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-mini-player/src/BaseControls.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//



/* harmony default export */ var BaseControlsvue_type_script_lang_js_ = ({
  name: 'BaseControls',
  components: {
    Volume: Volume,
    Progress: Progress,
    Fullscreen: Fullscreen
  },
  data: function data() {
    return {
      isMuted: false,
      isFullscreen: false
    };
  },
  watch: {
    isFullscreen: function isFullscreen(newData, oldData) {
      this.$emit('fullscreen', newData);
    }
  },
  computed: {
    $parentComponent: function $parentComponent() {
      return this.$parent;
    },
    $video: function $video() {
      return this.$parentComponent.$video;
    }
  },
  filters: {},
  methods: {
    initVideoEvents: function initVideoEvents() {
      this.$video.addEventListener('volumechange', function (e) {
        this.isMuted = e.target.muted;
      });
    }
  },
  created: function created() {
    var _this = this;

    this.$nextTick(function () {
      var volume = _this.$video.volume;
      _this.isMuted = _this.$video.muted || volume === 0;

      _this.initVideoEvents();
    });
  },
  updated: function updated() {},
  beforeDestroy: function beforeDestroy() {},
  destroyed: function destroyed() {}
});
// CONCATENATED MODULE: ./packages/vue-mini-player/src/BaseControls.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_BaseControlsvue_type_script_lang_js_ = (BaseControlsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-mini-player/src/BaseControls.vue?vue&type=style&index=0&id=f59ed6fc&lang=scss&scoped=true&
var BaseControlsvue_type_style_index_0_id_f59ed6fc_lang_scss_scoped_true_ = __webpack_require__("64bb");

// CONCATENATED MODULE: ./packages/vue-mini-player/src/BaseControls.vue






/* normalize component */

var BaseControls_component = normalizeComponent(
  src_BaseControlsvue_type_script_lang_js_,
  BaseControlsvue_type_template_id_f59ed6fc_scoped_true_render,
  BaseControlsvue_type_template_id_f59ed6fc_scoped_true_staticRenderFns,
  false,
  null,
  "f59ed6fc",
  null
  
)

/* harmony default export */ var BaseControls = (BaseControls_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d84d941-vue-loader-template"}!./node_modules/_vue-loader@15.9.5@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-mini-player/src/PlayBtn.vue?vue&type=template&id=4cfcbdc0&scoped=true&
var PlayBtnvue_type_template_id_4cfcbdc0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"_play-btn",on:{"click":function($event){$event.stopPropagation();return _vm.handleClick($event)}}},[(_vm.isPlaying)?_c('svg',{attrs:{"viewBox":"0 0 64 64","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',[_c('path',{attrs:{"d":"M64,32 C64,49.6733333 49.6733333,64 32,64 C14.3266667,64 0,49.6733333 0,32 C0,14.3266667 14.3266667,0 32,0 C49.6733333,0 64,14.3266667 64,32","fill-opacity":"0.5","fill":"#231F20"}}),_c('rect',{attrs:{"fill":"#FFFFFF","fill-rule":"nonzero","x":"23","y":"19","width":"5","height":"26","rx":"2.5"}}),_c('rect',{attrs:{"fill":"#FFFFFF","fill-rule":"nonzero","x":"36","y":"19","width":"5","height":"26","rx":"2.5"}})])])]):_c('svg',{attrs:{"viewBox":"0 0 96 96","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',[_c('path',{attrs:{"d":"M96,48 C96,74.51 74.51,96 48,96 C21.49,96 0,74.51 0,48 C0,21.49 21.49,0 48,0 C74.51,0 96,21.49 96,48","fill-opacity":"0.5","fill":"#231F20"}}),_c('path',{attrs:{"d":"M68.332,49.1162 L36.209,67.4722 C35.352,67.9622 34.286,67.3432 34.286,66.3552 L34.286,29.6442 C34.286,28.6572 35.352,28.0382 36.209,28.5272 L68.332,46.8842 C69.196,47.3772 69.196,48.6232 68.332,49.1162","fill":"#FFFFFF"}})])])])])}
var PlayBtnvue_type_template_id_4cfcbdc0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-mini-player/src/PlayBtn.vue?vue&type=template&id=4cfcbdc0&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-mini-player/src/PlayBtn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PlayBtnvue_type_script_lang_js_ = ({
  props: {
    isPlaying: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    handleClick: function handleClick() {
      this.$emit('update:isPlaying', !this.isPlaying);
    }
  }
});
// CONCATENATED MODULE: ./packages/vue-mini-player/src/PlayBtn.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_PlayBtnvue_type_script_lang_js_ = (PlayBtnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-mini-player/src/PlayBtn.vue?vue&type=style&index=0&id=4cfcbdc0&lang=scss&scoped=true&
var PlayBtnvue_type_style_index_0_id_4cfcbdc0_lang_scss_scoped_true_ = __webpack_require__("17bd");

// CONCATENATED MODULE: ./packages/vue-mini-player/src/PlayBtn.vue






/* normalize component */

var PlayBtn_component = normalizeComponent(
  src_PlayBtnvue_type_script_lang_js_,
  PlayBtnvue_type_template_id_4cfcbdc0_scoped_true_render,
  PlayBtnvue_type_template_id_4cfcbdc0_scoped_true_staticRenderFns,
  false,
  null,
  "4cfcbdc0",
  null
  
)

/* harmony default export */ var PlayBtn = (PlayBtn_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.5@vue-loader/lib??vue-loader-options!./packages/vue-mini-player/src/VuePlayer.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var VERSION = __webpack_require__("9224").version;

/* harmony default export */ var VuePlayervue_type_script_lang_js_ = ({
  name: 'VueMiniPlayer',
  components: {
    BaseControls: BaseControls,
    PlayBtn: PlayBtn
  },
  props: {
    video: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    mutex: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      baseVideo: {
        url: '',
        cover: '',
        muted: true,
        loop: false,
        preload: 'auto',
        poster: '',
        volume: 1,
        autoplay: false
      },
      $video: null,
      $container: null,
      clearModeTimer: null,
      isStart: true,
      isPlaying: false,
      isClearMode: false
    };
  },
  watch: {
    isPlaying: function isPlaying() {
      this.isStart = false;
      this.play();
      this.setClearModeTimer();
    }
  },
  computed: {
    vUrl: function vUrl() {
      var url = this.video.url || [];

      if (typeof url === 'string') {
        url = [url];
      } else if (Object.prototype.toString.call(url) === '[object Object]') {
        console.warn(new Error('视频URL只接受String或者Array'));
        return [];
      }

      return url;
    },
    // 合并默认和用户自定义属性配置
    options: function options() {
      return Object.assign({}, this.baseVideo, this.video);
    },
    playsinline: function playsinline() {
      return this.options.playsinline;
    },
    crossOrigin: function crossOrigin() {
      return this.options.crossOrigin;
    },
    autoplay: function autoplay() {
      return this.options.autoplay;
    },
    isMobile: function isMobile() {
      return navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
    },
    logoStyle: function logoStyle() {
      return this.options.logoStyle || {};
    }
  },
  methods: {
    getUrlType: function getUrlType(url) {
      var u = url.split('?')[0] + '?v=1';
      return u.match(/[^\.]+(?=\?)/) || 'mp4';
    },
    init: function init() {
      this.$video = this.$refs.video;
      this.$container = this.$refs.container;
      this.$video.load();
      this.initPlayer();
      this.$emit('ready');
    },
    initPlayer: function initPlayer() {
      var _this = this;

      this.$video.volume = this.options.volume;

      if (this.playsinline) {
        this.$refs.video.setAttribute('playsinline', this.playsinline);
        this.$refs.video.setAttribute('webkit-playsinline', this.playsinline);
        this.$refs.video.setAttribute('x5-playsinline', this.playsinline);
        this.$refs.video.setAttribute('x5-video-player-type', 'h5');
        this.$refs.video.setAttribute('x-webkit-airplay', 'allow');
        this.$refs.video.setAttribute('x5-video-player-fullscreen', false);
      } // cross origin


      if (this.crossOrigin) {
        this.$refs.video.crossOrigin = this.crossOrigin;
        this.$refs.video.setAttribute('crossOrigin', this.crossOrigin);
      }

      if (this.autoplay && this.isMobile) {
        this.$video.muted = true; // 兼容微信自动播放

        document.addEventListener('WeixinJSBridgeReady', function () {
          return _this.$video.play();
        }, false);
      }

      if (this.autoplay) {
        this.isPlaying = true;
      }
    },
    setClearModeTimer: function setClearModeTimer() {
      var _this2 = this;

      if (this.clearModeTimer) {
        clearTimeout(this.clearModeTimer);
      }

      this.clearModeTimer = setTimeout(function () {
        _this2.isClearMode = true;
        _this2.clearModeTimer = null;

        _this2.$emit('clearMode');
      }, 3000);
    },
    pauseAllVideo: function pauseAllVideo() {
      if (this.mutex) {
        var videos = document.querySelectorAll('video');
        videos.forEach(function (v) {
          v.pause && v.pause();
        });
      }
    },
    play: function play() {
      if (this.isPlaying) {
        this.$video.play();
      } else {
        this.pauseAllVideo();
        this.$video.pause();
      }

      this.$emit('videoPlay', this.isPlaying);
    },
    handlePaused: function handlePaused() {
      this.isPlaying = false;
    },
    handleClickVideo: function handleClickVideo() {
      if (this.isClearMode) {
        this.isClearMode = false;
        this.setClearModeTimer();
      } else {
        this.isClearMode = true;
      }
    }
  },
  created: function created() {
    var _this3 = this;

    this.$emit('created');
    this.$nextTick(function () {
      _this3.init();
    });
  },
  mounted: function mounted() {
    this.$emit('mounted');
    console.log('\n' + ' %c vue-mini-player v' + VERSION + ' %c https://github.com/webweifeng/vue-mini-player ' + '\n' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
  },
  updated: function updated() {},
  beforeDestroy: function beforeDestroy() {
    this.$emit('beforeDestroy');
  },
  destroyed: function destroyed() {
    this.$emit('destroyed');
  }
});
// CONCATENATED MODULE: ./packages/vue-mini-player/src/VuePlayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_VuePlayervue_type_script_lang_js_ = (VuePlayervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-mini-player/src/VuePlayer.vue?vue&type=style&index=0&id=5bbaf828&lang=scss&scoped=true&
var VuePlayervue_type_style_index_0_id_5bbaf828_lang_scss_scoped_true_ = __webpack_require__("0340");

// CONCATENATED MODULE: ./packages/vue-mini-player/src/VuePlayer.vue






/* normalize component */

var VuePlayer_component = normalizeComponent(
  src_VuePlayervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5bbaf828",
  null
  
)

/* harmony default export */ var VuePlayer = (VuePlayer_component.exports);
// CONCATENATED MODULE: ./packages/vue-mini-player/index.js



VuePlayer.install = function (Vue) {
  Vue.component(VuePlayer.name, VuePlayer);
};

/* harmony default export */ var vue_mini_player = (VuePlayer);
// CONCATENATED MODULE: ./packages/index.js



var version = __webpack_require__("9224").version;

var components = [vue_mini_player];

var install = function install(Vue) {
  if (install.installed) return;
  components.map(function (component) {
    return Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install: install,
  version: version,
  // 以下是具体的组件列表
  VueMiniPlayer: vue_mini_player
});
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.1@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "120f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("3d8a");
var $export = __webpack_require__("e99b");
var redefine = __webpack_require__("84e8");
var hide = __webpack_require__("065d");
var Iterators = __webpack_require__("953d");
var $iterCreate = __webpack_require__("3460");
var setToStringTag = __webpack_require__("bac3");
var getPrototypeOf = __webpack_require__("addc");
var ITERATOR = __webpack_require__("839a")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "1663":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("212e");
var defined = __webpack_require__("3ab0");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "17bd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_PlayBtn_vue_vue_type_style_index_0_id_4cfcbdc0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("33e7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_PlayBtn_vue_vue_type_style_index_0_id_4cfcbdc0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_PlayBtn_vue_vue_type_style_index_0_id_4cfcbdc0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1a49":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_style_index_0_id_165d5d46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4c38");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_style_index_0_id_165d5d46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_style_index_0_id_165d5d46_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1b0b":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("a86f");
var aFunction = __webpack_require__("3250");
var SPECIES = __webpack_require__("839a")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "1b96":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("cea2");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "1bc7":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("25ba");
var getKeys = __webpack_require__("93ca");
var redefine = __webpack_require__("84e8");
var global = __webpack_require__("0b34");
var hide = __webpack_require__("065d");
var Iterators = __webpack_require__("953d");
var wks = __webpack_require__("839a");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "1e4d":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("3250");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "201c":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("212e");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "205c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_style_index_0_id_70a58e50_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a396");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_style_index_0_id_70a58e50_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_style_index_0_id_70a58e50_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "212e":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "25ba":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("87b2");
var step = __webpack_require__("6fef");
var Iterators = __webpack_require__("953d");
var toIObject = __webpack_require__("3471");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("120f")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "26df":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("0926")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "3250":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "32ea":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("8078");
var $keys = __webpack_require__("93ca");

__webpack_require__("b2be")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "33e7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3460":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("7ee3");
var descriptor = __webpack_require__("5edc");
var setToStringTag = __webpack_require__("bac3");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("065d")(IteratorPrototype, __webpack_require__("839a")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "3471":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("1b96");
var defined = __webpack_require__("3ab0");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "35d4":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "3a0d":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("baa7")('keys');
var uid = __webpack_require__("d8b3");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "3a4c":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("4fd4");
var toIObject = __webpack_require__("3471");
var arrayIndexOf = __webpack_require__("52a4")(false);
var IE_PROTO = __webpack_require__("3a0d")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "3ab0":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "3d8a":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "3f9e":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("bb8b");
var anObject = __webpack_require__("a86f");
var getKeys = __webpack_require__("93ca");

module.exports = __webpack_require__("26df") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "4057":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("de49");
var anObject = __webpack_require__("a86f");
var $flags = __webpack_require__("6bf8");
var DESCRIPTORS = __webpack_require__("26df");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("84e8")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("0926")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "43ec":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("1663")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "4c38":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4fd4":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "52a4":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("3471");
var toLength = __webpack_require__("201c");
var toAbsoluteIndex = __webpack_require__("732b");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5640":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_Volume_vue_vue_type_style_index_0_id_6d6e1418_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("00a7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_Volume_vue_vue_type_style_index_0_id_6d6e1418_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_Volume_vue_vue_type_style_index_0_id_6d6e1418_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5d10":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("9cff");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "5edc":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "64bb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_BaseControls_vue_vue_type_style_index_0_id_f59ed6fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b298");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_BaseControls_vue_vue_type_style_index_0_id_f59ed6fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_5_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_5_vue_loader_lib_index_js_vue_loader_options_BaseControls_vue_vue_type_style_index_0_id_f59ed6fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6ba0":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("e99b");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("9f15") });


/***/ }),

/***/ "6bf8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("a86f");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "6fef":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "732b":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("212e");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "76e3":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "7ee3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("a86f");
var dPs = __webpack_require__("3f9e");
var enumBugKeys = __webpack_require__("065e");
var IE_PROTO = __webpack_require__("3a0d")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("e8d7")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("bbcc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "804d":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("9cff");
var cof = __webpack_require__("cea2");
var MATCH = __webpack_require__("839a")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "8078":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("3ab0");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "839a":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("baa7")('wks');
var uid = __webpack_require__("d8b3");
var Symbol = __webpack_require__("0b34").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "83d3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("26df") && !__webpack_require__("0926")(function () {
  return Object.defineProperty(__webpack_require__("e8d7")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "84e8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b34");
var hide = __webpack_require__("065d");
var has = __webpack_require__("4fd4");
var SRC = __webpack_require__("d8b3")('src');
var $toString = __webpack_require__("05fd");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("76e3").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "87b2":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("839a")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("065d")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "8dee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("a86f");
var toObject = __webpack_require__("8078");
var toLength = __webpack_require__("201c");
var toInteger = __webpack_require__("212e");
var advanceStringIndex = __webpack_require__("43ec");
var regExpExec = __webpack_require__("f417");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("c46f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "9224":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"vue-mini-player\",\"author\":\"qiaojianfeng<845882161@qq.com>\",\"description\":\"基于 Vue 一个轻量级视频播放器\",\"main\":\"lib/vue-mini-player.umd.min.js\",\"keyword\":\"vue-mini-player vue-player player video\",\"version\":\"0.2.1\",\"private\":false,\"license\":\"MIT\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/webweifeng/vue-mini-player\"},\"bugs\":\"https://github.com/webweifeng/vue-mini-player/issues\",\"scripts\":{\"serve\":\"vue-cli-service serve\",\"build\":\"vue-cli-service build\",\"lint\":\"vue-cli-service lint\",\"lib\":\"vue-cli-service build --target lib --name vue-mini-player --dest lib packages/index.js\",\"test:unit\":\"vue-cli-service test:unit\"},\"dependencies\":{\"core-js\":\"^2.6.5\",\"vue\":\"^2.6.10\"},\"devDependencies\":{\"@vue/cli-plugin-babel\":\"^3.9.0\",\"@vue/cli-plugin-eslint\":\"^3.9.0\",\"@vue/cli-plugin-unit-mocha\":\"^3.9.0\",\"@vue/cli-service\":\"^3.9.0\",\"@vue/eslint-config-standard\":\"^4.0.0\",\"@vue/test-utils\":\"1.0.0-beta.29\",\"babel-eslint\":\"^10.0.1\",\"chai\":\"^4.1.2\",\"eslint\":\"^5.16.0\",\"eslint-plugin-vue\":\"^5.0.0\",\"node-sass\":\"^4.12.0\",\"sass-loader\":\"^7.1.0\",\"vue-template-compiler\":\"^2.6.10\"}}");

/***/ }),

/***/ "93ca":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("3a4c");
var enumBugKeys = __webpack_require__("065e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "953d":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "9cff":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "9f15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("26df");
var getKeys = __webpack_require__("93ca");
var gOPS = __webpack_require__("0c29");
var pIE = __webpack_require__("35d4");
var toObject = __webpack_require__("8078");
var IObject = __webpack_require__("1b96");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("0926")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "a396":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a450":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("bb8b").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("26df") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "a86f":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("9cff");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "addc":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("4fd4");
var toObject = __webpack_require__("8078");
var IE_PROTO = __webpack_require__("3a0d")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "b298":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b2be":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("e99b");
var core = __webpack_require__("76e3");
var fails = __webpack_require__("0926");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "baa7":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("76e3");
var global = __webpack_require__("0b34");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("3d8a") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "bac3":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("bb8b").f;
var has = __webpack_require__("4fd4");
var TAG = __webpack_require__("839a")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "bb8b":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("a86f");
var IE8_DOM_DEFINE = __webpack_require__("83d3");
var toPrimitive = __webpack_require__("5d10");
var dP = Object.defineProperty;

exports.f = __webpack_require__("26df") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "bbcc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("0b34").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "bf73":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("0353");
__webpack_require__("e99b")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "c46f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("bf73");
var redefine = __webpack_require__("84e8");
var hide = __webpack_require__("065d");
var fails = __webpack_require__("0926");
var defined = __webpack_require__("3ab0");
var wks = __webpack_require__("839a");
var regexpExec = __webpack_require__("0353");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "cea2":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "d0f2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("a86f");
var toLength = __webpack_require__("201c");
var advanceStringIndex = __webpack_require__("43ec");
var regExpExec = __webpack_require__("f417");

// @@match logic
__webpack_require__("c46f")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "d445":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("cea2");
var TAG = __webpack_require__("839a")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "d8b3":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "de49":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("26df") && /./g.flags != 'g') __webpack_require__("bb8b").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("6bf8")
});


/***/ }),

/***/ "e67d":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "e8d7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("9cff");
var document = __webpack_require__("0b34").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "e99b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b34");
var core = __webpack_require__("76e3");
var hide = __webpack_require__("065d");
var redefine = __webpack_require__("84e8");
var ctx = __webpack_require__("1e4d");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "f417":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("d445");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "f6d2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fc02":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__("804d");
var anObject = __webpack_require__("a86f");
var speciesConstructor = __webpack_require__("1b0b");
var advanceStringIndex = __webpack_require__("43ec");
var toLength = __webpack_require__("201c");
var callRegExpExec = __webpack_require__("f417");
var regexpExec = __webpack_require__("0353");
var fails = __webpack_require__("0926");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__("c46f")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ })

/******/ });
});
//# sourceMappingURL=vue-mini-player.umd.js.map