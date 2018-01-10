seajs.config({
    plugins: ['shim'],
    alias: {
        'jquery': 'jquery-1.7.2.min.js',
        'vue': 'vue.js'
    },

    preload: ["jquery"],

    base: "./js",

    charset: 'utf-8'
});