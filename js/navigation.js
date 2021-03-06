'use strict;'

// Assign forEach to NodeList prototype from Array prototype For IE support
if (!('forEach' in NodeList.prototype)) {
  NodeList.prototype.forEach = Array.prototype.forEach
}

document.addEventListener('DOMContentLoaded', function () {
  var pages = document.querySelectorAll('.page')
  var links = document.querySelectorAll('.navigation__link')
  var nav = document.querySelector('.navigation')

  var navigateTo = function (hash) {
    if (hash === '#' || hash === '') {
      hash = '#' + pages[0].id
    }

    ga('send', {
      hitType: 'event',
      eventCategory: 'Navigation',
      eventAction: 'navigate to',
      eventLabel: hash
    })

    pages.forEach(function (page) {
      if (('#' + page.id) === hash) {
        page.removeAttribute('hidden')
      } else {
        page.setAttribute('hidden', '')
      }
    })

    links.forEach(function (link) {
      if (link.hash === hash) {
        link.classList.add('navigation__link--active')
      } else {
        link.classList.remove('navigation__link--active')
      }
    })
  }

  var linkClickListener = function (event) {
    if ('hash' in event.target) {
      navigateTo(event.target.hash)
    }

    nav.classList.toggle('open')
  }

  links.forEach(function (link) {
    link.addEventListener('click', linkClickListener)
  })

  navigateTo(document.location.hash)
})
