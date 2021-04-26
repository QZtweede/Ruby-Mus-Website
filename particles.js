document.addEventListener('DOMContentLoaded', () => {
    console.log("test2")
	// Creating waypoint
	let waypoint = new Waypoint({
	  element: document.querySelector('.particle'),
	  handler: function particlesAnimate(){

        anime({
            targets: ".particle",
            translateX: [0, 280],
            rotate: 45,
            duration: 1000,
            easing: 'spring(1, 80, 10, 0)',
            delay: function() {
                return anime.random(0, 500);
              },
        })
			this.destroy();
            console.log("test")
	  },
		offset: '70%',
	})
})