const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    const strArray = str.split('');
    const otherStrArray = strArray.map((text) => makeOtherCase(text));
    
    console.log(otherStrArray.join(''))
});

function toLowerCase (text) {
    return text === text.toLowerCase();
}

function makeOtherCase (text) {
    return toLowerCase(text) ? text.toUpperCase() : text.toLowerCase();
}