'use strict'

const { supportedOptions } = require('../config/config')

const ArgumentParserLib = (function () {
    const parse = (args) => {

        const filteredOption = supportedOptions.filter(optionKey => {
            return args[0].indexOf(optionKey) !== -1;
        });

        const option = filteredOption.length ? filteredOption[0] : null

        if (option && optionIsSupported(option) === true) {
            if (option === '--count') {
                return {
                    option: option,
                    value: null,
                };
            }

            // --filter
            if (option === '--filter') {
                var optionString = `${option}=`;
                var regex = new RegExp(optionString, "g");
        
                if (Array.isArray(args) && args[0].indexOf(option) !== -1) {
                    const value = args[0].replace(regex, "")

                    return value.indexOf(option) === -1 ? {
                        option: option,
                        value: value,
                    } : null;
                }
            }
        }

        return null;
    }

    /**
     * Checks if the given command option is supported
     */
    const optionIsSupported = option => {
        return supportedOptions.includes(option)
    }

    return {
        parse,
    }
}())

module.exports = ArgumentParserLib
