webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(6);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var f = new _index.Thumb();
xtag.register('x-praise', {
	content: '<div class="hand" id="thumb">\n    <div class="finger"></div>\n    <div class="finger"></div>\n    <div class="finger"></div>\n    <div class="finger"></div>\n    <div class="finger thumb"></div>\n    <div class="arm"></div>\n</div>\n<span class="hide" id="animation">+1</span><div class="bg-img"></div><div class="bg-s-img"></div>',
	methods: {
		praise: function praise() {
			var _this = this;
			f.clickAction();
			var animation = _this.querySelector("#animation");
			animation.className = "hide num";
			setTimeout(function () {
				animation.className = "hide";
			}, 800);
		}
	},
	events: {
		click: function click(e) {
			var _this = this;
			if (e.target.id == 'thumb') {
				var t = "";
				if (t) {
					clearTimeout(t);
				}
				t = setTimeout(function () {
					_this.praise();
				}, 500);
			}
		}
	}
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var f = new _index.Star();
xtag.register('x-star', {
	content: '<div class="star" id="star">\n\t<div class="star1"></div>\n\t</div>\n\t<span class="hide" id="animation">+1</span>',
	methods: {
		praise: function praise() {
			var _this = this;
			f.clickAction();
			var animation = _this.querySelector("#animation");
			animation.className = "hide num";
			setTimeout(function () {
				animation.className = "hide";
			}, 800);
		}
	},
	events: {
		click: function click(e) {
			var _this = this;
			if (e.target.id == 'star') {
				var t = "";
				if (t) {
					clearTimeout(t);
				}
				t = setTimeout(function () {
					_this.praise();
				}, 500);
			}
		}
	}
});

/***/ })
],[4]);