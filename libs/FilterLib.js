'use strict'

const { data } = require('../datas/data') 

const FilterLib = (function () {
    const filter = (filter) => {
        // var filterRegex = new RegExp(filter, "g");

        const filtredData = data.reduce((acc, dataItem) => {
            const people = dataItem.people.filter(peopleItem => {
                for (let animal of peopleItem.animals) {
                    if (animal.name.indexOf(filter) !== -1) {
                        return true;
                    }
                }
            })

            acc = [...acc, {
                ville: data.name,
                people
            }]

            return acc;
        }, [])

        const removedEmptyDatas = filtredData.filter(data => {
            return data.people.length > 0
        })
        
        return removedEmptyDatas;
    }

    return {
        filter,
    }
}())

module.exports = FilterLib
