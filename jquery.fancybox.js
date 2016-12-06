(function($){

	$.fn.fancybox = function(options){

		var defaults = {
			overlayColor: 'black'
		};

		var settings = $.extend(defaults, options);


		var $link = this;
		var $body = $('body');
		var $overlay;
		var $modal;

		
		function showModal(e) {
			var href = $link.attr('href');
			$modal = $('<div class="fancybox-modal"><img src = "' + href+ '"></div>');
			$overlay = $('<div class="fancybox-overlay"></div>');
			$overlay.css({
				'background-color': settings.overlayColor
			})
			e.preventDefault();
			$body.append($overlay);
			$body.append($modal);
			$overlay.one('click', hideModal); // one для єкономии памяти
		}

		function hideModal() {
			console.log($overlay);
			$modal.remove();
			$overlay.remove(); 
		}


		$link.on('click', showModal);

		return this;

	}

})(jQuery);