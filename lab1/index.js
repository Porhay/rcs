/**
 * Лабораторна робота 1
 * Мітячкін Денис, гр. ІО-83, вар. 16
 *
 * Завдання за варіантом:
 * 1. Середній наробіток до відмови Tср,
 * 2. γ-відсотковий наробіток на відмову Tγ при γ = 0.62,
 * 3. ймовірність безвідмовної роботи на час 275 годин,
 * 4. інтенсивність відмов на час 648 годин
 */

// Вхідна вибірка наробітків до відмови (у годинах)
const hourTable = [
    233, 303, 81, 129, 200, 82, 115, 228, 64, 17,
    67, 648, 29, 39, 210, 10, 94, 465, 135, 312,
    606, 698, 15, 764, 32, 45, 54, 13, 116, 24,
    477, 16, 841, 95, 3, 79, 118, 208, 9, 59, 171,
    295, 78, 67, 38, 57, 91, 18, 39, 324, 416,
    270, 114, 25, 675, 287, 374, 119, 227, 5,
    109, 94, 171, 226, 183, 350, 27, 64, 433, 88,
    167, 152, 159, 319, 8, 162, 36, 488, 65, 77,
    307, 522, 140, 65, 355, 482, 180, 29, 342,
    233, 117, 182, 184, 113, 86, 630, 476, 136,
    397, 66
]

const gamma = 0.62, time1 = 275, time2 = 648

let intervalLen = 0
let tenIntervals = []
let statDensities = []
let pList = []
let sortedTable = hourTable.sort((a,b)=>a-b)


const getTcp = (table) => {
    const tableSum = table.reduce((previous, current) => previous + current, 0)
    const tableLen = table.length
    return tableSum / tableLen
}

const getT = (gamma) => {
    intervalLen = (sortedTable[sortedTable.length - 1] - sortedTable[0]) / 10

    for (let i=0; i<=10; i++) {
        tenIntervals.push(sortedTable.filter((a) => a >= i * intervalLen && a<=(i+1)*intervalLen))
    }


    for (let interval of tenIntervals) {
        statDensities.push(interval.length / (sortedTable.length * intervalLen))
    }


    let areaSum = 1
    for (let i=0; i<10; i++) {
        pList.push(areaSum)
        areaSum -= statDensities[i] * intervalLen
    }


    let less = pList.filter(p => p < gamma)
    let more = pList.filter(p => p > gamma)


    const pLess = Math.max(...less)
    const pMore = Math.min(...more)


    const indexMore = pList.indexOf(pMore)


    const d = (pMore - gamma) / (pMore - pLess)
    return indexMore + intervalLen * d   // t

}

const pUnfail = (time) => {
    let sum = 1
    const wholeIntervals = Math.floor(time / intervalLen)
    for (let i=0; i<wholeIntervals; i++) {
        sum -= statDensities[i] * intervalLen
    }
    sum -= statDensities[wholeIntervals] * (time % intervalLen)
    return sum
}

const failFreq = (time) => {
    const wholeIntervals = parseInt(time / intervalLen)
    const f = statDensities[wholeIntervals]
    const p = pUnfail(time)
    return f / p
}


console.log(`Середній наробіток до відмови Tср: ${getTcp(hourTable)}`)
console.log(`γ-відсотковий наробіток на відмову Tγ при γ = 0.62: ${getT(gamma)}`)
console.log(`ймовірність безвідмовної роботи на час 275 годин: ${pUnfail(time1)}`)
console.log(`інтенсивність відмов на час 648 годин: ${failFreq(time2)}`)

