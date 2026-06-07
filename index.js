const p1Display = $('#p1Display');
const p2Display = $('#p2Display');
const label = $('#playto');
const p1Button = $('#p1Button');
const p2Button = $('#p2Button');
const resetButton = $('#reset');
const selectMenu = $('<select class="rounded-full border border-gray-400 w-25 mx-4 px-4 py-2 outline-none"></select>');

for (let i = 3; i <= 11; i++) {
    $(`<option value="${i}">${i}</option>`).appendTo(selectMenu);
}
selectMenu.appendTo(label);

const styling = (num) => {
    const displays = { 1: p1Display, 2: p2Display };
    let targetDisplay = displays[num];

    let currentScore = parseInt(targetDisplay.text());
    currentScore++;
    targetDisplay.text(currentScore);

    const pointsTarget = parseInt(selectMenu.val());

    if (currentScore === pointsTarget) {
        if (num === 1) {
            p1Display.css('color', 'green');
            p2Display.css('color', 'red');
        } else {
            p1Display.css('color', 'red');
            p2Display.css('color', 'green');
        }

        p1Button.prop('disabled', true);
        p1Button.css('opacity', '0.5');
        p2Button.prop('disabled', true);
        p2Button.css('opacity', '0.5');
    }
}

p1Button.on('click', function () {
    styling(1)
});

p2Button.on('click', function () {
    styling(2);
});

resetButton.on('click', function () {
    p1Display.text('0');
    p2Display.text('0');
    p1Display.css('color', 'black');
    p2Display.css('color', 'black');

    p1Button.prop('disabled', false);
    p1Button.css('opacity', '1');
    p2Button.prop('disabled', false);
    p2Button.css('opacity', '1');
})