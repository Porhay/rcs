/**
 * Лабораторна робота 2
 * Виконав студент гр. ІО-83 Мітячкін Д. Є.
 * Варіант 16
 */

const pObject = {
    p1: 0.75,
    p2: 0.10,
    p3: 0.87,
    p4: 0.55,
    p5: 0.60,
    p6: 0.28,
    p7: 0.36,
    p8: 0.76,
}

const calculate = (pObject) => {
    const {p1, p2, p3, p4, p5, p6, p7, p8} = pObject

    // Трикутник 123 - у зірку
    const p12 = 1 - (1 - p1) * (1 - p2)
    const p13 = 1 - (1 - p1) * (1 - p3)
    const p23 = 1 - (1 - p2) * (1 - p3)

    // Об'єднання послідовних p13 та p4, p23 та p5
    const p134 = p13 * p4
    const p235 = p23 * p5

    // Трикутник 678 - у зірку
    const p67 = 1 - (1 - p6) * (1 - p7)
    const p68 = 1 - (1 - p6) * (1 - p7)
    const p78 = 1 - (1 - p7) * (1 - p8)

    // Об'єднання послідовних p134 та p67, p235 та p68
    const p13467 = p134 * p67
    const p23568 = p235 * p68

    // Об'єднання паралельних p13467 та p23568
    const pParal = 1 - (1 - p13467) * (1 - p23568)

    // Сумарне p - об'єднання послідовних p12, pParal та p78
    const p = p12 * pParal * p78
    console.log(`Результуюча ймовірніть безвідмовної роботи: ${p}`)
    return p
}

calculate(pObject)
module.exports = {
    calculate,
    pObject
}
