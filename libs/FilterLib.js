'use strict'

const { data } = require('../datas/data') 

const FilterLib = (function () {
    /**
     * Filters data containing the filter param.
     * 
     * @param {sting} filter
     */
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
                name: dataItem.name,
                people
            }]

            return acc;
        }, [])

        // Remove empty key
        return filtredData.filter(data => {
            return data.people.length > 0
        })
    }

    /**
     * Counts People and Animals by adding the count of children in the name
     */
    const count = () => {
        return data.map((dataItem) => {
            const peopleCount = dataItem.people.length

            dataItem.name += ` [${peopleCount}]`

            const people = dataItem.people.map(peopleItem => {
                const animalCount = peopleItem.animals.length

                peopleItem.name += ` [${animalCount}]`

                return peopleItem
            })

            return dataItem;
        }, [])
    }

    return {
        filter,
        count,
    }
}())

module.exports = FilterLib
