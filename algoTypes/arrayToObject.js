let array = [
    { key: 1, value: 'blank', condition: true },
    { key: 3, value: 'blank2', condition: false },
    { key: 7, value: 'blank3', condition: true },
    { key: 12, value: 'blank4', condition: false }
]
let array2 = [1,2,3,4,5,6,7]

const arrayToObject1 = (arr, key) => {
    return arr.reduce((obj, item) => {
        obj[item[key]] = item
        return obj
    }, {})
}