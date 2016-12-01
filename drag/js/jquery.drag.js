(function ($) {
	$.fn.extend({
		drag: function () {
			var _move = false;
			var _x, _y;
			
			$(this).on('mousedown', function (e) {
				_move = true;
	
				// 状态为true，处于移动状态
				$(this).css('z-index','99').children('button').eq(1).text(_move);
	
//				_x = e.pageX;
//				_y = e.pageY;
				_x = e.pageX - $(this).offset().left;
				_y = e.pageY - $(this).offset().top;
				$(this).on('mousemove', function (e) {
		
//					var diffx = _x - e.pageX;
//					var diffy = _y - e.pageY;
					
					if (_move) {
						$(this).children('button').eq(0).text(e.pageX + ' ' +e.pageY);
						$(this).children('button').eq(1).text(_move);
					
						var offset = $(this).offset();
		
						$(this).css({
//							left: offset.left - diffx,
//							top: offset.top - diffy
							left:e.pageX - _x,
							top:e.pageY - _y,
						})
		
//						_x = e.pageX;
//						_y = e.pageY;
					}else{
						$(this).children('button').eq(0).text('鼠标位置');
						$(this).children('button').eq(1).text('标记');
					}
				})
				
				var self = this;
				$(window).on('mouseup',function (e) {
					_move = false;
					$(self).css('z-index','1');
				})
				
			})
		}	
	})
})(jQuery)
