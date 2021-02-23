var fs = require('fs');
var text2png = require('text2png');

const IMAGE_DIR = 'images'

fs.rmdir(IMAGE_DIR, { recursive: true }, (err) => { console.error('remove folder error: ' + err) });
fs.mkdir(`./${IMAGE_DIR}`, (err) => { console.error('mkdir folder error: ' + err) });

// copy of range python func implementation in js
function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};

range(1000000).forEach((item) => {
    fs.writeFile(`images/image_${item}.png`, text2png(`${item}`, {
        font: '80px Futura',
        color: 'teal',
        backgroundColor: 'linen',
        lineSpacing: 10,
        padding: 20
    }), (err) => {
        console.log(err);
    });
})


