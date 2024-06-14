"use strict";
function setup() {
    var upButtons = document.querySelectorAll('.upButton');
    var downButtons = document.querySelectorAll('.downButton');
    upButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var li = button.parentElement;
            var prevLi = li.previousElementSibling;
            if (prevLi) {
                li.parentElement.insertBefore(li, prevLi);
            }
        });
    });
    downButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var li = button.parentElement;
            var nextLi = li.nextElementSibling;
            if (nextLi) {
                li.parentElement.insertBefore(nextLi, li);
            }
        });
    });
}
setup();
