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
            const people = dataItem.people.reduce((previousPeople, peopleItem) => {
                const animals = peopleItem.animals.filter(animal => {
                    return (animal.name.indexOf(filter) !== -1)
                })

                previousPeople = [...previousPeople, {
                    name: peopleItem.name,
                    animals
                }]

                return previousPeople;
            }, [])

            const filtredPeople = people.filter(peopleItem => {
                return peopleItem.animals.length > 0
            })

            acc = [...acc, {
                name: dataItem.name,
                people: filtredPeople
            }]

            return acc;
        }, [])

        // Remove element that has empty people
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
