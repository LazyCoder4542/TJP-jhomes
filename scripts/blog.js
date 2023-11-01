class Tab {
  tabsContainer = []
  panelsContainer = []
  constructor(tabs, containerSelector = "body", defaultTab = 0) {
    this.container = document.querySelector(containerSelector)
    this.currentTab = null
    this.tabs = tabs

    this.tabs.forEach(el => {
      this.tabsContainer.push(this.container.querySelector(`#tab_${el}`))
      this.panelsContainer.push(this.container.querySelector(`#panel_${el}`))
    })
    this.switchTab(defaultTab)
  }
  hideAll(prev) {
    if (prev !== null) {
      this.panelsContainer[prev].classList.remove("active")
    }
    // this.panelsContainer.forEach((el, id) => {
    //   if (id !== this.currentTab) {
    //     el.classList.remove("active")
    //   }
    // })
  }
  clickHandler(e) {
    var el = e.target
    var id  = this.tabsContainer.findIndex(element => element == el)
    console.log("clicked")
    this.switchTab(id)
  }
  controlInit(prev) {
    this.tabsContainer.forEach((el, id) => {
      
      if (id === this.currentTab) {
        el.classList.add("active")
      }
      else {
        let oldEl = el
        let newEl = el.cloneNode(true)
        oldEl.parentNode.replaceChild(newEl, oldEl)
        el = newEl
        this.tabsContainer[id] = el

        el.classList.remove("active")
        el.addEventListener('click', this.clickHandler.bind(this), false)
      }
    })
  }
  switchTab(id) {
    let prev = this.currentTab
    this.currentTab = id
    //this.panelsContainer[id].style.display = "block"
    this.panelsContainer[id].classList.add("active")
    this.hideAll(prev)
    this.controlInit(prev)
    AOS.refresh()
  }
}
var prev_handler = window.onload
window.onload = function () {
  prev_handler && prev_handler()
  const articleTab = new Tab(["all", "recent", "previous"], "section#articles")
}