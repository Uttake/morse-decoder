const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(put) {
    let result = []
    let splitArr = []
    for(let i = 0; i < put.length; i++) {
        if(i % 10 === 0) {
            splitArr.push([])
        }
    splitArr[splitArr.length - 1].push(put[i])
    } 
    for(let i = 0; i < splitArr.length; i++) {
     result[i] = decoder(splitArr[i].join(''))
    }
    return result.join('')
}

function decoder(put) {
    if(put === '**********') {
        return ' '
    }
    let dots = put.replace(/10/g, ".")
    let doshs = dots.replace(/11/g, "-")
    let result = []
    for(let i = 0; i < doshs.length; i++) {
        if(doshs[i] !== '0') {
            result += doshs[i]
        }
    }
    return MORSE_TABLE[result]
}

module.exports = {
    decode
}