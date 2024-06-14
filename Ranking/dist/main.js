"use strict";
function setup() {
    var upButtons = document.querySelectorAll('.upButton');
    var downButtons = document.querySelectorAll('.downButton');
    upButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var _a;
            var li = button.parentElement;
            var prevLi = li.previousElementSibling;
            if (prevLi) {
                (_a = li.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(li, prevLi);
            }
        });
    });
    downButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var _a;
            var li = button.parentElement;
            var nextLi = li.nextElementSibling;
            if (nextLi) {
                (_a = li.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(nextLi, li);
            }
        });
    });
}
setup();
