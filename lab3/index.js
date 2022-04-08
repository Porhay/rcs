/**
 * Лабораторна робота 3
 * Виконав студент гр. ІО-83 Мітячкін Д. Є.
 * Варіант 16
 */

const {calculate, p, factorial, pReserve} = require('../helpers')

// Сталі величини
const time = 2403, k1 = 1, k2 = 1

// Базова
const pSystem = calculate(p)
const qSystem = 1 - pSystem
const tSystem = -1 * time / Math.log(pSystem)

// Система з навантаженим загальним резервуванням
const qReservedSystem = qSystem / factorial(k1 + 1)
const pReservedSystem = 1 - qReservedSystem
const tReservedSystem = -1 * time / Math.log(pReservedSystem)

// Виграш системи з навантаженим загальним резервуванням
const gQ = qReservedSystem / qSystem
const gP = pReservedSystem / pSystem
const gT = tReservedSystem / tSystem

// Резервування
const pReserved = pReserve(p, k2)

// Система з навантаженим розподіленим резервуванням
const pAllReservedSystem = calculate(pReserved)
const qAllReservedSystem = 1 - pAllReservedSystem
const tAllReservedSystem = -1 * time / Math.log(pAllReservedSystem)

// Виграш системи з навантаженим розподіленим резервуванням
const gAllQ = qAllReservedSystem / qSystem
const gAllP = pAllReservedSystem / pSystem
const gAllT = tAllReservedSystem / tSystem


console.log(`
Базова імовірність безвідмовної роботи = ${pSystem}
Базова імовірність відмови = ${qSystem}
Базовий середній наробіток на відмову = ${tSystem}

Імовірність безвідмовної роботи системи з навантаженим загальним резервуванням = ${pReservedSystem}
Імовірність відмови системи з навантаженим загальним резервуванням = ${qReservedSystem}
Середній час роботи системи з навантаженим загальним резервуванням = ${tReservedSystem}

Виграш системи з навантаженим загальним резервуванням по імовірності безвідмовної роботи = ${gP}
Виграш системи з навантаженим загальним резервуванням по імовірності відмови = ${gQ}
Виграш системи з навантаженим загальним резервуванням по середньому часу роботи = ${gT}

Імовірність безвідмовної роботи системи з навантаженим розподіленим резервуванням = ${pAllReservedSystem}
Імовірність відмови системи з навантаженим розподіленим резервуванням = ${qAllReservedSystem}
Середній час роботи системи з навантаженим розподіленим резервуванням = ${tAllReservedSystem}

Виграш системи з навантаженим розподіленим резервуванням по імовірності безвідмовної роботи = ${gAllP}
Виграш системи з навантаженим розподіленим резервуванням по імовірності відмови = ${gAllQ}
Виграш системи з навантаженим розподіленим резервуванням по середньому часу роботи = ${gAllT}
`)

