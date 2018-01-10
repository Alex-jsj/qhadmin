/*
 * Created by Alex on 2018/01/02.
 */
//全局js
define("main", ["jquery", "vue"], function (require, exports, module) {
    var page = require("page");

    var main = {
        init: function (name) {
            if (name) {
                this.page[name].init();
                this.jquery_load();
            }
        },
        page: page.page,
        //---------------------------------------------------头部和底部load加载及交互
        jquery_load: function () {}
    }
    module.exports = main;
})

//每个页面js  相当于局部js
define("page", function (require, exports, module) {
    module.exports.page = {
        index: {
            init: function () {

            },
        },
    }
});