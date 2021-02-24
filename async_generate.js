var fs = require("graceful-fs");
var text2png = require("text2png");
const { performance } = require("perf_hooks");
var { range, msToTime, setUp } = require("./helper");

const IMAGE_DIR = "images_2";
setUp(IMAGE_DIR);

var t0 = performance.now();

range(process.argv[2] || 1000000).forEach((item) => {
    console.log("Processing in " + item);
    fs.writeFileSync(
        `${IMAGE_DIR}/image_${item}.png`,
        text2png(`${item}`, {
            font: "80px Futura",
            color: "teal",
            backgroundColor: "linen",
            lineSpacing: 10,
            padding: 20,
        })
    );
});
var t1 = performance.now();
console.log(
    "Async generate images took " + msToTime(t1 - t0) + " milliseconds."
);
