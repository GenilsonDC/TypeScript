function initialize(): void {
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', (event: MouseEvent) => {
            const currentDiv: HTMLDivElement = button.parentElement as HTMLDivElement;
            const currentDivIndex: number = Array.from(currentDiv.parentElement!.children).indexOf(currentDiv);

            if (button.classList.contains('downButton')) {
                // Move current div down
                if (currentDivIndex < currentDiv.parentElement!.children.length - 1) {
                    const nextDiv: HTMLDivElement = currentDiv.parentElement!.children[currentDivIndex + 1] as HTMLDivElement;

                    const currentTitle: HTMLSpanElement = currentDiv.querySelector('span') as HTMLSpanElement;
                    const nextTitle: HTMLSpanElement = nextDiv.querySelector('span') as HTMLSpanElement;

                    // Swap the text content of spans
                    const nextTitleText: string = nextTitle.textContent!;
                    nextTitle.textContent = currentTitle.textContent!;
                    currentTitle.textContent = nextTitleText;

                    // Swap the child elements of the spans
                    const nextChildren: Node[] = Array.from(nextTitle.children);
                    const currentChildren: Node[] = Array.from(currentTitle.children);
                    nextTitle.innerHTML = '';
                    currentTitle.innerHTML = '';
                    nextChildren.forEach(child => currentTitle.appendChild(child));
                    currentChildren.forEach(child => nextTitle.appendChild(child));
                }
            } else if (button.classList.contains('upButton')) {
                // Move current div up
                if (currentDivIndex > 0) {
                    const previousDiv: HTMLDivElement = currentDiv.parentElement!.children[currentDivIndex - 1] as HTMLDivElement;

                    const currentTitle: HTMLSpanElement = currentDiv.querySelector('span') as HTMLSpanElement;
                    const previousTitle: HTMLSpanElement = previousDiv.querySelector('span') as HTMLSpanElement;

                    // Swap the text content of spans
                    const previousTitleText: string = previousTitle.textContent!;
                    previousTitle.textContent = currentTitle.textContent!;
                    currentTitle.textContent = previousTitleText;

                    // Swap the child elements of the spans
                    const previousChildren: Node[] = Array.from(previousTitle.children);
                    const currentChildren: Node[] = Array.from(currentTitle.children);
                    previousTitle.innerHTML = '';
                    currentTitle.innerHTML = '';
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
