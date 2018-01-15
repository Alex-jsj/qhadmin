/*
 * @Author: Alex chenzeyongjsj@163.com 
 * @Date: 2018-01-08 10:45:11 
 * @Last Modified by: Alex chenzeyongjsj@163.com
 * @Last Modified time: 2018-01-15 10:47:33
 */
window.onload = function () {
	(function () {
		var header = $('#header');
		header.load('tpl/header.html', function () {
			$('.header-name').text(sessionStorage.getItem("headerName"));
			$('.header-url').attr('href', sessionStorage.getItem("headerUrl"));
			$('.notice-list').addClass(sessionStorage.getItem("infoHidden"));
			$('.xitong').addClass(sessionStorage.getItem("setHidden"));
		});
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
		//系统管理员
		if ($('#sideBar')) {
			var sideBar = $('#sideBar');
			sideBar.load('tpl/side_bar.html', function () {
				var li = $('.side-ul>li');
				var liClick = $('.side-ul>li>a');
				var _li = li.find('.side-click');
				var ol_li = li.find('li');
				//获取菜单的定位信息
				var liIndex = parseInt(window.sessionStorage.getItem("liIndex"));
				var aIndex = parseInt(window.sessionStorage.getItem("aIndex"));
				(function () { //初始化给菜单栏定位
					$(li[liIndex]).addClass('li-active');
					$(li[liIndex]).children('ol').children('li').eq(aIndex).addClass('side-active');
				})();
				liClick.click(function () {
					li = $(this).parent('li');
					if (li.hasClass('li-active')) {
						li.removeClass('li-active');
						$($('.side-ul>li')[liIndex]).addClass('li-active');
					} else {
						li.addClass('li-active').siblings('li').removeClass('li-active');
					}
				});
				_li.click(function () {
					liIndex = $(this).parents('ol').parent('li').index();
					aIndex = $(this).parent().index();
					//存储菜单的定位信息
					window.sessionStorage.setItem("liIndex", liIndex);
					window.sessionStorage.setItem("aIndex", aIndex);
				});
				/* 
				系统信息弹框
				*/
				$('.system-dialog').click(function () {
					$('.system-dialog-box').fadeIn(300);
				});
				$('.icon-close').click(function () {
					$('.system-dialog-box').fadeOut(300);
				});
			});
		}
	})();
}