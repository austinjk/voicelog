# Voicelog for Node.js 🤖️
Funny module to Text-to-Speech your `console.log!`

*MacOS only.*

---

## Install
    $ npm i voicelog

## Usage
    const voicelog = require('voicelog')()

    voicelog('hello, computer speaking');

if voicelog is called again at a time when the computer hasn't finished its previous voicelog, it will put it in a queue and say it when it's finished.

### Config (optional)

**config** is an object to setup voicelog that  take those following properties by default:

    

    const config = {
        voice: "Alex",
        logger: console.log,
        maxQueue: 10
    }

    const voicelog = require('voicelog')(config)
    
> __voice__ : name of the voice you want voicelog to use

> __logger__ : logging function (put null if you don't want to print to console)

> __queue__ : if queue is full, voicelog will discard the following calls until there's room in the queue



