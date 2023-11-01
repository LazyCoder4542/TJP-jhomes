var prev_handler_before_main = window.onload
window.onload = function () {
  prev_handler_before_main && prev_handler_before_main()
}
window.onresize = function (){
  AOS.refresh()
}
const aos = AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'load', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
const handleClick = () => {
  console.log("clicked!!")
  if (menu.getAttribute('open') != null) menu.removeAttribute('open')
  else menu.setAttribute("open", '')

}
const menu = document.querySelector('#header_menu')
console.log(menu.querySelector('.hamburger'))
menu.querySelector('.hamburger').addEventListener("click", handleClick)