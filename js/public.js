/*
 * @Author: Alex chenzeyongjsj@163.com 
 * @Date: 2018-01-08 10:45:11 
 * @Last Modified by: Alex chenzeyongjsj@163.com
 * @Last Modified time: 2018-01-09 10:24:23
 */
window.onload = function () {
	(function () {
		var header = $('#header');
		header.load('tpl/header.html', function () {});
		var footer = $('#footer');
		footer.load('tpl/footer.html', function () {
			var open_pop = $('.tools-open-pop');
			var pop_box = $('.tools-pop');
			var pop_con = pop_box.find('.pop-container');
			var close_pop = pop_box.find('.icon-close');
			var close_pop_bg = pop_box.find('.pop-control');
			//打开工具箱
			open_pop.click(function () {
				pop_box.animate({
					width: '1%',
					height: '100%'
				}, 150, function () {
					pop_box.animate({
						width: '100%'
					}, 150, function () {
						pop_con.animate({
							opacity: 1
						}, 150);
					});
				});
			});
			//关闭工具箱
			close_pop.click(function () {
				pop_close();
			});
			close_pop_bg.click(function () {
				pop_close();
			});

			function pop_close() {
				pop_con.animate({
					opacity: 0
				}, 150, function () {
					pop_box.animate({
						width: '1%',
						height: '100%'
					}, 150, function () {
						pop_box.animate({
							width: 0,
							height: 0
						}, 150);
					});
				});
			}
		})
	})();
}