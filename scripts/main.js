const handleClick = () => {
  console.log("clicked!!")
  if (menu.getAttribute('open') != null) menu.removeAttribute('open')
  else menu.setAttribute("open", '')

}
const menu = document.querySelector('#header_menu')
console.log(menu.querySelector('.hamburger'))
menu.querySelector('.hamburger').addEventListener("click", handleClick)