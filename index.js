const d = document
const $ = d.querySelector.bind(d)
const $$ = d.querySelectorAll.bind(d)
NodeList.prototype.toArray = function () {
  return [...this]

}

const fav_color = $`#fav_color`

fav_color.addEventListener('change', () => {
  const newColor = fav_color.value === "Please select an option" ? '#999999' : fav_color.value
  document.body.style.setProperty('--border-color', newColor)
})



$$`label`.toArray().map(el => {
  const forAttrib = el.getAttribute('for')
  const forElement = $('#' + forAttrib)  
  if (forElement.type === "radio") {
    el.setAttribute('tabindex', '0')
    el.setAttribute('role', 'button')
    el.addEventListener('keydown', (e) => {
      if (e.keyCode === 13 || e.keyCode === 32) {
        forElement.checked = true
      }
    })
  }
})


window.addEventListener('keydown', function(e) {
  if (e.keyCode > 31 && e.target.nodeName === "BODY") {
    $`#first_name`.focus()
  }
})