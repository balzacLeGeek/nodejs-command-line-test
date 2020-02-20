var FilterLib = require('./libs/FilterLib')
var ArgumentParserLib = require('./libs/ArgumentParserLib')

const arguments = process.argv;
const argument = ArgumentParserLib.parse(arguments.slice(2))

if (argument !== null) {
    const { option, value } = argument

    let result = null;

    if (option === '--filter') {
        result = FilterLib.filter(value);
    }

    if (option === '--count') {
        result = FilterLib.count();
    }

    if(result !== null) {
        console.log(JSON.stringify(result, null, 4));

        return true;
    }
}

console.log('This command option is not supported. Please use --filter=VALUE or --count')