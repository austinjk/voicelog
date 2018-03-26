const chai = require('chai')
const setupVoicelog = require('../src/main.js');
const voicelog = setupVoicelog();

describe('voicelog', function() {
    it('should say something', function() {
        voicelog('dude chill');
        voicelog('another one another one another one');
        voicelog('its me again!');
    })
})