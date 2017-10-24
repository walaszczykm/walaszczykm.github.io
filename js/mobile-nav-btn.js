document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.menu-btn')
  var nav = document.querySelector('.navigation')

  if (!btn) return

  btn.addEventListener('click', function (event) {
    nav.classList.toggle('open')

    ga('send', {
      hitType: 'event',
      eventCategory: 'Navigation',
      eventAction: 'mobile nav menu triggered'
    })
  })

  if (window.performance) {
    var timeSincePageLoad = Math.round(window.performance.now())
    ga('send', {
      hitType: 'event',
      eventCategory: 'Timing',
      eventAction: 'page loaded',
      eventValue: timeSincePageLoad
    })
  }
})
