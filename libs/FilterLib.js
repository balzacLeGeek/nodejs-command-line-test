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
                name: data.name,
                people
            }]

            return acc;
        }, [])

        const removedEmptyDatas = filtredData.filter(data => {
            return data.people.length > 0
        })
        
        return removedEmptyDatas;
    }

    const count = () => {
        const updatedDatas = data.map((dataItem) => {
            let updatedData = [];

            const peopleCount = dataItem.people.length

            dataItem.name += `[${peopleCount}]`

            const people = dataItem.people.map(peopleItem => {
                const animalCount = peopleItem.animals.length

                peopleItem.name += `[${animalCount}]`

                return peopleItem
            })

            return dataItem;
        }, [])

        return updatedDatas;
    }

    return {
        filter,
        count,
    }
}())

module.exports = FilterLib
