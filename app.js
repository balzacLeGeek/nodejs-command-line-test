var FilterLib = require('./libs/FilterLib')
var ArgumentParserLib = require('./libs/ArgumentParserLib')

const arguments = process.argv;
const argument = ArgumentParserLib.parse(arguments.slice(2))

if (argument !== null) {
    const { option, value } = argument

    // console.log(`Option: ${ option } - Value: ${ value }`)

    let result = null;

    if (option === '--filter') {
        result = FilterLib.filter(value);
    }

    if(result !== null) {
        console.log(JSON.stringify(result, null, 4));
    }
}