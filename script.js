// script.js

$(document).ready(function() {
    // Generate floating numbers
    for (let i = 0; i < 50; i++) {
        createFloatingNumber();
    }
});

function createFloatingNumber() {
    const number = Math.floor(Math.random() * 10);
    const xPos = Math.random() * window.innerWidth;
    const duration = Math.random() * 10 + 5;

    const $floatingNumber = $('<div>', {
        class: 'floating-number',
        text: number
    }).css({
        left: xPos,
        animation: `float ${duration}s linear infinite`
    });

    $('.floating-numbers').append($floatingNumber);
}
