$(document).ready(function() {
	"use strict";
	var myNav = {
		init: function() {
			this.cacheDOM();
			this.browserWidth();
			this.bindEvents();
		},
		cacheDOM: function() {
			this.navBars = $(".navBars");
			this.xBxHack = $("#xBxHack");
			this.navMenu = $("#menu");
		},
		browserWidth: function() {
			$(window).resize(this.bindEvents.bind(this));
		},
		bindEvents: function() {
			var width = window.innerWidth;

			if (width < 600) {
				this.navBars.click(this.animate.bind(this));
				this.navMenu.hide();
				this.xBxHack[0].checked = false;
			} else {
				this.resetNav();
			}
		},
		animate: function(e) {
			var checkbox = this.xBxHack[0];
			!checkbox.checked ?
				this.navMenu.slideDown() :
				this.navMenu.slideUp();

		},
		resetNav: function() {
			this.navMenu.show();
		}
	};
	myNav.init();
	particlesJS("particles-js", {
  particles: {
    number: {
      value: 350,
      density: {
        enable: true,
        value_area: 900.1476416322727
      }
    },
    color: {
      value: "#6AB4FB"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#fff"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.48927153781200905,
      random: true,
      anim: {
        enable: true,
        speed: 0.4,
        opacity_min: 0.2,
        sync: false
      }
    },
    size: {
      value: 3.5,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        size_min: 1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 90,
      color: "#fff",
      opacity: 0.7,
      width: 0.5
    },
    move: {
      enable: true,
      speed: 2.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: true,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 83.91608391608392,
        size: 2.9,
        duration: 3,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 500,
        duration: 0.3
      },
      push: {
        particles_nb: 3
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});
});
