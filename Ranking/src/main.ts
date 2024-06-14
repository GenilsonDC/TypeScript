function setup(): void {
    const upButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.upButton');
    const downButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.downButton');

    upButtons.forEach(button => {
        button.addEventListener('click', function () {
            const li = button.parentElement as HTMLLIElement;
            const prevLi = li.previousElementSibling as HTMLLIElement;
            if (prevLi) {
                li.parentElement?.insertBefore(li, prevLi);
            }
        });
    });

    downButtons.forEach(button => {
        button.addEventListener('click', function () {
            const li = button.parentElement as HTMLLIElement;
            const nextLi = li.nextElementSibling as HTMLLIElement;
            if (nextLi) {
                li.parentElement?.insertBefore(nextLi, li);
            }
        });
    });
}

setup();
