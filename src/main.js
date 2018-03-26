const { exec } = require('child_process');

function setupVoicelog({logger = console.log, voice = "Samantha", maxQueue = 10} = {}) {
    let isWorking = false;
    let queue = [];

    function done() {
        isWorking = false;
        if (queue.length > 0) {
            voicelog(queue.shift());
        }
    }

    function voicelog(...args) {
        if (isWorking) {
            if (queue.length < maxQueue) {
                return queue.push(...args);
            } else {
                return;
            }
        }
        isWorking = true;
        const dangerousChars = /"|`|;|{|}/g;
        const text = args.join(' ').replace(dangerousChars, ' ');

        exec(`say -v "${voice}" "${text}"`, done);
        if (logger) {
            logger(...args);
        }
    };

    return voicelog
}

module.exports = setupVoicelog;