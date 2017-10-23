document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.menu-btn')
  var nav = document.querySelector('.navigation')

  if (!btn) return

  btn.addEventListener('click', function (event) {
    nav.classList.toggle('open')
  })
})
