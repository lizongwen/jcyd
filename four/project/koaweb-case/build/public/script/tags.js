webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var f = new _index.Star();
xtag.register('x-star', {
  content: "<div class='star' id='star' >" + "<div class='star1'></div>" + " </div>" + " <span class='hide' id='animation'>+1</span>",
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
      if (e.target.id == "star") {
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var f = new _index.Thumb();
xtag.register('x-praise', {
  content: "<div class='hand' id='thumb'>" + " <div class='finger'></div>" + "<div class='finger'></div>" + "<div class='finger'></div>" + "  <div class='finger'></div>" + "<div class='finger thumb'></div>" + "<div class='arm'></div>" + " </div>" + " <span class='hide' id='animation'>+1</span>",
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
      if (e.target.id == "thumb") {
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
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(1);


/***/ })
],[6]);