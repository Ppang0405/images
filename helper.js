var fs = require("fs");

module.exports = {
    msToTime: function (s) {
        // Pad to 2 or 3 digits, default is 2
        function pad(n, z) {
            z = z || 2;
            return ("00" + n).slice(-z);
        }

        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;

        return pad(hrs) + ":" + pad(mins) + ":" + pad(secs) + "." + pad(ms, 3);
    },
    range: function (start, stop, step) {
        if (typeof stop == "undefined") {
            // one param defined
            stop = start;
            start = 0;
        }

        if (typeof step == "undefined") {
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
    },
    setUp: function (IMAGE_DIR) {
        try {
            if (fs.existsSync(`./${IMAGE_DIR}`)) {
                fs.rmdirSync(IMAGE_DIR, { recursive: true });
            }
            fs.mkdirSync(`./${IMAGE_DIR}`);
        } catch (e) {
            console.error(e);
        }
    },
};
