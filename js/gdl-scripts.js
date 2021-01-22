jQuery(document).ready(function(){
	
	
	// Scroll Top
	jQuery('div.scroll-top').click(function() {
		jQuery('html, body').animate({ scrollTop:0 }, { duration: 600, easing: "easeOutExpo"});
		return false;
	});
	
	// Blog Hover
	jQuery(".blog-media-wrapper.gdl-image img, .port-media-wrapper.gdl-image img, .gdl-gallery-image img").hover(function(){
		jQuery(this).animate({ opacity: 0.55 }, 150);
	}, function(){
		jQuery(this).animate({ opacity: 1 }, 150);
	});
	
	// Port Hover
	jQuery(".portfolio-item").each(function(){
		jQuery(this).hover(function(){
			var thumbnail_hover = jQuery(this).find('a.hover-wrapper');
			var thumbnail_overlay_hover = thumbnail_hover.children();
			
			thumbnail_overlay_hover.fadeIn(200);
		}, function(){
			var thumbnail_hover = jQuery(this).find('a.hover-wrapper');
			var thumbnail_overlay_hover = thumbnail_hover.children();
			
			thumbnail_overlay_hover.fadeOut(200);
		});
	});	

	// JW Player Responsive
	responsive_jwplayer();
	function responsive_jwplayer(){
		jQuery('[id^="jwplayer"][id$="wrapper"]').each(function(){
			var data_ratio = jQuery(this).attr('data-ratio');
			if( !data_ratio || data_ratio.length == 0 ){
				data_ratio = jQuery(this).height() / jQuery(this).width();
				jQuery(this).css('max-width', '100%');
				jQuery(this).attr('data-ratio', data_ratio);
			}
			jQuery(this).height(jQuery(this).width() * data_ratio);
		});
	}
	jQuery(window).resize(function(){
		responsive_jwplayer();
	});

	// Date Picker
	if (jQuery.fn.datepicker) {
		jQuery('.gdl-date-picker').datepicker({ 
			dateFormat: "yy-mm-dd" 
		});
	}
});
jQuery(window).load(function(){

	// Menu Navigation
	jQuery('#main-superfish-wrapper ul.sf-menu').supersubs({
		minWidth: 14.5, maxWidth: 27, extraWidth: 1
	}).superfish({
		delay: 400, speed: 'fast', animation: {opacity:'show',height:'show'}
	});
	
	// Menu Navigation
	var float_menu = jQuery('div.floating-nav-wrapper');
	var header_area = jQuery('div.header-outer-wrapper');
	float_menu.css('display','block');
	float_menu.children('ul.sf-menu').supersubs({
		minWidth: 14.5, maxWidth: 27, extraWidth: 1
	}).superfish({
		delay: 400, speed: 'fast', animation: {opacity:'show',height:'show'},
		onInit: function(){ float_menu.css('display', 'none'); }
	});	
	
	jQuery(window).scroll(function(){
		if( jQuery(window).width() > 959 ){
			var cur_pos = jQuery(this).scrollTop();
			var header_height = header_area.outerHeight();
			
			if( cur_pos > header_height ){
				float_menu.slideDown(200);		
			}else{
				float_menu.slideUp(200);	
			}
		}
	});	

	// Personnal Item Height
	function set_personnal_height(){
		jQuery(".personnal-item-holder .row").each(function(){
			var max_height = 0;
			jQuery(this).find('.personnal-item').height('auto');
			jQuery(this).find('.personnal-item-wrapper').each(function(){
				if( max_height < jQuery(this).height()){
					max_height = jQuery(this).height();
				}
			});
			jQuery(this).find('.personnal-item').height(max_height);
		});		
	}
	set_personnal_height();
	
	// Price Table Height
	function set_price_table_height(){
		jQuery(".price-table-wrapper .row").each(function(){
			var max_height = 0;
			jQuery(this).find('.best-price').removeClass('best-active');
			jQuery(this).find('.price-item').height('auto');
			jQuery(this).find('.price-item-wrapper').each(function(){
				if( max_height < jQuery(this).height()){
					max_height = jQuery(this).height();
				}
			});
			jQuery(this).find('.price-item').height(max_height);
			jQuery(this).find('.best-price').addClass('best-active');
		});		
	}	
	set_price_table_height();
	
	// Filter portfolio hover bar
	jQuery('ul.portfolio-item-filter').each(function(){
		var left_pos = jQuery(this).find('.active').position().left;
		var bar_width = jQuery(this).find('.active').width();
		
		jQuery(this).siblings('.port-current-bar').css({ 'width': bar_width, 'left': left_pos });
	});
	jQuery('ul.portfolio-item-filter li').hover(function(){
		var left_pos = jQuery(this).children('a').position().left;
		var bar_width = jQuery(this).children('a').width();
		
		jQuery(this).parent('ul').siblings('.port-current-bar').animate(
			{ 'width': bar_width, 'left': left_pos }, 
			{ duration: 200, queue: false }
		);
	}, function(){	
		var active_tab = jQuery(this).parent('ul').find('a.active');
		var left_pos = active_tab.position().left;
		var bar_width = active_tab.width();
		
		jQuery(this).parent('ul').siblings('.port-current-bar').animate(
			{ 'width': bar_width, 'left': left_pos }, 
			{ duration: 200, queue: false }
		);		
	});	
	
	// Navigation Sliding Bar
	var main_navigation = jQuery('.header-wrapper #main-superfish-wrapper');
	var sliding_bar = main_navigation.siblings('.gdl-current-menu');
	var sf_menu = main_navigation.children('ul.sf-menu');
	var current_bar = sf_menu.children('.current_page_item, .current_page_ancestor, .current-page-item, .current-page-ancestor');
	var has_current_bar = true;
	if( !current_bar.length ){ 
		//current_bar = jQuery('body.single-package #menu-item-3798');
		if( !current_bar.length ){ 
			current_bar = sf_menu.children().filter(':first'); 
			has_current_bar = false;
		}
	}
	function init_navigation_sliding_bar(){
		// sliding bar width
		var left_pos = current_bar.position().left + parseInt(current_bar.css('padding-left'));
		
		if( has_current_bar ){
			sliding_bar.css({ 'width':current_bar.width(), 'left': left_pos });
		}else{
			sliding_bar.css({ 'width':0, 'left': left_pos });
		}
	}
	
	init_navigation_sliding_bar();
	sf_menu.children().hover(function(){
		var left_pos = jQuery(this).position().left + parseInt(jQuery(this).css('padding-left'));
	
		sliding_bar.animate({ 'width':jQuery(this).width(), 'left': left_pos}, 
			{ queue: false, easing: 'easeOutQuad', duration: 250 });
	},function(){
		var left_pos = current_bar.position().left + parseInt(current_bar.css('padding-left'));

		if( has_current_bar ){
			sliding_bar.animate({ 'width':current_bar.width(), 'left': left_pos }, 
				{ queue: false, easing: 'easeOutQuad', duration: 250 });
		}else{
			sliding_bar.animate({ 'width':0, 'left': left_pos }, 
				{ queue: false, easing: 'easeOutQuad', duration: 250 });
		}		

	});
	
	// Set Portfolio Max Height
	function set_portfolio_height(){
		jQuery('div.portfolio-item-holder').each(function(){
			var context_height = 0; 
			jQuery(this).find('.portfolio-context').css({'height': 'auto'});
			jQuery(this).find('.portfolio-context').each(function(){
				if( context_height < jQuery(this).height()){
					context_height = jQuery(this).height();
				}				
			});
			jQuery(this).find('.portfolio-context').css({'height': context_height});		
		
			var max_height = 0; 
			jQuery(this).children('.portfolio-item').height('auto');
			jQuery(this).children('.portfolio-item').each(function(){
				if( max_height < jQuery(this).height()){
					max_height = jQuery(this).height();
				}				
			});
			jQuery(this).children('.portfolio-item').height(max_height);
		});
	}
	setTimeout(function(){ set_portfolio_height(); }, 100);
	
	// Slider Nav
	set_fullwidth_sliderNav();
	function set_fullwidth_sliderNav(){
		var header_outer = jQuery('.header-outer-wrapper');
		if( header_outer.hasClass('full-slider') ){
			var margin_val = (header_area.children('.header-area-wrapper').height() / 2) - 38;
			var top_slider_nav = jQuery('div.gdl-top-slider').find('.nivo-directionNav a, .flex-direction-nav a, a.ls-nav-prev, a.ls-nav-next');

			top_slider_nav.css({'margin-top': margin_val});
		}
	}	
	
	// When window resize, set all function again
	jQuery(window).resize(function(){
		set_personnal_height();
		set_price_table_height();
		init_navigation_sliding_bar();
		set_portfolio_height();
		set_fullwidth_sliderNav();
	});	

});

