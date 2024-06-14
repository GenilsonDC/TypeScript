"use strict";
function initialize() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', event => {
            const currentDiv = button.parentElement;
            const currentDivIndex = Array.from(currentDiv.parentElement.children).indexOf(currentDiv);

            if (button.classList.contains('downButton')) {
                if (currentDivIndex < currentDiv.parentElement.children.length - 1) {
                    const nextDiv = currentDiv.parentElement.children[currentDivIndex + 1];

                    const currentTitle = currentDiv.querySelector('span');
                    const nextTitle = nextDiv.querySelector('span');

                    const nextTitleText = nextTitle.textContent;
                    nextTitle.textContent = currentTitle.textContent;
                    currentTitle.textContent = nextTitleText;

                    const nextChildren = Array.from(nextTitle.children);
                    const currentChildren = Array.from(currentTitle.children);
                    nextTitle.innerHTML;
                    currentTitle.innerHTML;
                    nextChildren.forEach(child => currentTitle.appendChild(child));
                    currentChildren.forEach(child => nextTitle.appendChild(child));
                }
            } else if (button.classList.contains('upButton')) {
                if (currentDivIndex > 0) {
                    const previousDiv = currentDiv.parentElement.children[currentDivIndex - 1];

                    const currentTitle = currentDiv.querySelector('span');
                    const previousTitle = previousDiv.querySelector('span');

                    const previousTitleText = previousTitle.textContent;
                    previousTitle.textContent = currentTitle.textContent;
                    currentTitle.textContent = previousTitleText;

                    const previousChildren = Array.from(previousTitle.children);
                    const currentChildren = Array.from(currentTitle.children);
                    previousTitle.innerHTML;
                    currentTitle.innerHTML;
                    previousChildren.forEach(child => currentTitle.appendChild(child));
                    currentChildren.forEach(child => previousTitle.appendChild(child));
                }
            }
        });
    });
}
initialize();
document.querySelectorAll("button")[0].click();
document.querySelectorAll("button")[3].click();
document.querySelectorAll("button")[1].click();
console.log(document.body.innerHTML);
