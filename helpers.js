
const p = [
    p1 = 0.75,
    p2 = 0.10,
    p3 = 0.87,
    p4 = 0.55,
    p5 = 0.60,
    p6 = 0.28,
    p7 = 0.36,
    p8 = 0.76,
]

const calculate = (p) => {
    // Трикутник 123 - у зірку
    const p12 = 1 - (1 - p[0]) * (1 - p[1])
    const p13 = 1 - (1 - p[0]) * (1 - p[2])
    const p23 = 1 - (1 - p[1]) * (1 - p[2])

    // Об'єднання послідовних p13 та p4, p23 та p5
    const p134 = p13 * p[3]
    const p235 = p23 * p[4]

    // Трикутник 678 - у зірку
    const p67 = 1 - (1 - p[5]) * (1 - p[6])
    const p68 = 1 - (1 - p[5]) * (1 - p[6])
    const p78 = 1 - (1 - p[6]) * (1 - p[7])

    // Об'єднання послідовних p134 та p67, p235 та p68
    const p13467 = p134 * p67
    const p23568 = p235 * p68

    // Об'єднання паралельних p13467 та p23568
    const pParal = 1 - (1 - p13467) * (1 - p23568)

    // Сумарне p - об'єднання послідовних p12, pParal та p78
    return p12 * pParal * p78
}

const pReserve = (arr, k) => {
    let pReserved = []
    for (let i=0; i<arr.length; i++) {
        const q = (1 - arr[i])**(k + 1) // k2
        pReserved.push(1-q)
    }
    return pReserved
}

const factorial = (n) =>{
    let j = 1
    for(let i=1; i<=n; i++){
        j = j * i
    }
    return j
}

module.exports = {
    calculate,
    factorial,
    pReserve,
    p
}
