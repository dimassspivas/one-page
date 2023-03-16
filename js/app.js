gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.hero-section', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

    let itemsL = gsap.utils.toArray('.gallery_left .gallery_item')

    itemsL.forEach(item => {
        gsap.fromTo(item, {x:-500, opacity: 0 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                start: '-800',
                end: '-100',
                trigger: item,
                scrub: true
            }
        } )
})

let itemsR = gsap.utils.toArray('.gallery_right .gallery_item')

itemsR.forEach(item => {
    gsap.fromTo(item, {x: 50, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            start: '-800',
            end: '-50',
            trigger: item,
            scrub: true
        }
    } )
})
}