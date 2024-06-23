'use strict'

function setup() {
  const upButtons = document.querySelectorAll('.upButton')
  const downButtons = document.querySelectorAll('.downButton')
  upButtons.forEach((button) => {
    button.addEventListener('click', function () {
      var _a
      const li = button.parentElement
      const prevLi = li.previousElementSibling
      if (prevLi) {
        ;(_a = li.parentElement) === null || _a === void 0
          ? void 0
          : _a.insertBefore(li, prevLi)
      }
    })
  })
  downButtons.forEach((button) => {
    button.addEventListener('click', function () {
      var _a
      const li = button.parentElement
      const nextLi = li.nextElementSibling
      if (nextLi) {
        ;(_a = li.parentElement) === null || _a === void 0
          ? void 0
          : _a.insertBefore(nextLi, li)
      }
    })
  })
}
setup()
