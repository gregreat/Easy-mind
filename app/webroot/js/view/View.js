/**
 * View构造器
 * @constructor View
 * @version 1.0
 * @time 2014-05-22 10:47:20
 * @author TEAM_4
 */

(function () {
    "use strict";
    var tool = KT.utils.tool,

        View = KT.View = function (attributes, initializer) {
            this.attributes = attributes || {};
            if (typeof initializer === "function") {
                initializer();
            }
        };

    tool.extend(View.prototype, {
        /**
         * 设置view元素的初始位置，如果未传入坐标参数则居中
         * @param {String} element
         * @param {String} [left] 可选
         * @param {String} [top]  可选
         */
        setLocation: function (element, left, top) {
            $(element).css({left: left || ($(window).width() - $(element).width()) / 2,
                            top : top || ($(window).height() - $(element).height()) / 2});
            return this;
        },

        /**
         * 显示
         * @param {String} element 某一页面元素ID/CLASS等CSS选择器的字符串 String
         * @param {String} [method] hide或fadeIn,方法名或者字符串
         * @param {Number} [speed] 毫秒
         */
        show: function (element, method, speed) {
            if (method === undefined || method === 'show') {
                $(element).show();
            } else if (method === 'fadeIn') {
                $(element).fadeIn(speed);
            }
            return this;
        },

        /**
         * 隐藏
         * @param {String} element 某一页面元素ID/CLASS等CSS选择器的字符串 String
         * @param {String} [method] hide或fadeIn,方法名或者字符串
         * @param {Number} [speed] 毫秒
         */
        hide: function (element, method, speed) {
            if (method === undefined || method === 'hide') {
                $(element).hide();
            } else if (method === 'fadeOut') {
                $(element).fadeOut(speed);
            }
            return this;
        }
    });
}());