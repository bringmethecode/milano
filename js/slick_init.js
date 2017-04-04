$(document).ready(function(){
	$('.slider').slick({
	  infinite: false,
	  speed: 300,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  responsive: [
	  	{
	      breakpoint: 1234,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        infinite: false
	      }
	    },
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: false
	      }
	    },
	   	{
	      breakpoint: 744,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: false
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: false
	      }
	    }
	  ]
	});
});