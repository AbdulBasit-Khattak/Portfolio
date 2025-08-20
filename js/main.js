console.clear();
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      end: "+=150%",
      pin: true,
      scrub: true,
      markers: false, // hide green markers
    }
  })
  .to("img", {
    scale: 2,
    z: 350,
    transformOrigin: "center center",
    ease: "power1.inOut"
  })
  .to(
    ".section.hero",
    {
      scale: 1.1,
      transformOrigin: "center center",
      ease: "power1.inOut"
    },
    "<"
  );
});



    
    /*PRELOADER JS */
			$('.spinner').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		/*END PRELOADER JS*/




    /* ------------------- contact section ---------------*/ 


    




