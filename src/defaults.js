export default {
	/**
	 * slides scrolled at once
	 * @type {Number}
	 */
	slidesToScroll: 1,

	/**
	 * time in milliseconds for the animation of a valid slide attempt
	 * @type {number}
	 */
	slideSpeed: 300,

	/**
	 * time in milliseconds for the animation of the rewind after the last slide
	 * @type {number}
	 */
	rewindSpeed: 600,

	/**
	 * time in ms for the snapBack of the slider if the slide attempt was not valid
	 * @type {number}
	 */
	snapBackSpeed: 200,

	/**
	 * Basic easing functions: https://developer.mozilla.org/de/docs/Web/CSS/transition-timing-function
	 * cubic bezier easing functions: http://easings.net/de
	 * @type {string}
	 */
	ease: "ease",

	/**
	 * if slider reached the last slide, with next click the slider goes back to the startindex.
	 * use infinite or rewind, not both
	 * @type {boolean}
	 */
	rewind: false,

	/**
	 * number of visible slides or false
	 * use infinite or rewind, not both
	 * @type {number | false}
	 */
	infinite: false,

	/**
	 * the slide index to show when the slider is initialized.
	 * @type {number}
	 */
	initialIndex: 0,

	/**
	 * class name for slider frame
	 * @type {string}
	 */
	classNameFrame: "js_frame",

	/**
	 * class name for slides container
	 * @type {string}
	 */
	classNameSlideContainer: "js_slides",

	/**
	 * class name for slider prev control
	 * @type {string}
	 */
	classNamePrevCtrl: "js_prev",

	/**
	 * class name for slider next control
	 * @type {string}
	 */
	classNameNextCtrl: "js_next",

	/**
	 * class name for current active slide
	 * if emptyString then no class is set
	 * @type {string}
	 */
	classNameActiveSlide: "active",

	/**
	 * enables mouse events for swiping on desktop devices
	 * @type {boolean}
	 */
	enableMouseEvents: false,

	/**
	 * window instance. undefined when SSRing
	 * @type {?Window}
	 */
	window: typeof window !== "undefined" ? window : null,

	/**
	 * If false, slides lory to the first slide on window resize.
	 * @type {boolean}
	 */
	rewindOnResize: true,
};
