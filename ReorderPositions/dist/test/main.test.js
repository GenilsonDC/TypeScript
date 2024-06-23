"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
const main_1 = require("../src/main");
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Reorder Positions</title>
</head>
<body>
    <div class="displayed">
        <div class="container">
            <ol>
                <li><button class="upButton" type="button">up!</button>Swift (iOS)<button class="downButton" type="button">Down!</button></li>
                <li><button class="upButton" type="button">up!</button>JavaScript (React Native)<button class="downButton" type="button">Down!</button></li>
                <li><button class="upButton" type="button">up!</button>Dart (Flutter)<button class="downButton" type="button">Down!</button></li>
                <li><button class="upButton" type="button">up!</button>Kotlin (Android)<button class="downButton" type="button">Down!</button></li>
                <li><button class="upButton" type="button">up!</button>Java (Android)<button class="downButton" type="button">Down!</button></li>
            </ol>
        </div>
        <span class="developer">Genilson do Carmo</span>
    </div>
    <script src="dist/main.js"></script>
</body>
</html>
`;
describe('setup', () => {
    let dom;
    beforeEach(() => {
        dom = new jsdom_1.JSDOM(html, { runScripts: 'dangerously' });
        global.document = dom.window.document;
        (0, main_1.setup)();
    });
    test('up button should move item up', () => {
        const upButtons = dom.window.document.querySelectorAll('.upButton');
        const ol = dom.window.document.querySelector('ol');
        const firstLi = ol.children[0];
        const secondLi = ol.children[1];
        upButtons[1].dispatchEvent(new dom.window.Event('click'));
        expect(ol.children[0]).toBe(secondLi);
        expect(ol.children[1]).toBe(firstLi);
    });
    test('down button should move item down', () => {
        const downButtons = dom.window.document.querySelectorAll('.downButton');
        const ol = dom.window.document.querySelector('ol');
        const secondLi = ol.children[1];
        const thirdLi = ol.children[2];
        downButtons[1].dispatchEvent(new dom.window.Event('click'));
        expect(ol.children[1]).toBe(thirdLi);
        expect(ol.children[2]).toBe(secondLi);
    });
});
