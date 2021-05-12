document.addEventListener('DOMContentLoaded', () => {
    console.log("test2")
	// Creating waypoint
	let waypoint = new Waypoint({
	  element: document.querySelector('.Blur'),
	  handler: function motionBlur(){

        anime({
          targets: ".Blur",
          translatex: 250
        })
			this.destroy();
            console.log("test")
	  },
		offset: '70%',
	})
})