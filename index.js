var fs = require('fs');
var text2png = require('text2png');

const IMAGE_DIR = 'images'

try {
    fs.rmdirSync(IMAGE_DIR, { recursive: true });
    fs.mkdirSync(`./${IMAGE_DIR}`);
} catch (e) {
    console.error(e);
}

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

range(process.argv[2] || 1000000).forEach((item) => {
    console.log('Processing in ' + item)
    fs.writeFileSync(`images/image_${item}.png`, text2png(`${item}`, {
        font: '80px Futura',
        color: 'teal',
        backgroundColor: 'linen',
        lineSpacing: 10,
        padding: 20
    }));
})
