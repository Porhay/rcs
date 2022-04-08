const {calculate, pObject} = require('../lab2')

const time = 2403
const k1 = 1, k2 = 1


const pSystem = calculate(pObject)
const qSystem = 1 - pSystem
const tSystem = -time / Math.log(pSystem, e)

const qReservedSystem = qSystem / factorial(k1 + 1)
const pReservedSystem = 1 - qReservedSystem
const tReservedSystem = -time / log(pReservedSystem, e)
const gQ = qReservedSystem / qSystem
const gP = pReservedSystem / pSystem
const gT = tReservedSystem / tSystem

const qReserved1 = (1 - p1)**(k2 + 1)
const qReserved2 = (1 - p2)**(k2 + 1)
const qReserved3 = (1 - p3)**(k2 + 1)
const qReserved4 = (1 - p4)**(k2 + 1)
const qReserved5 = (1 - p5)**(k2 + 1)
const qReserved6 = (1 - p6)**(k2 + 1)
const qReserved7 = (1 - p7)**(k2 + 1)
const qReserved8 = (1 - p8)**(k2 + 1)

const pReserved1 = 1 - qReserved1
const pReserved2 = 1 - qReserved2
const pReserved3 = 1 - qReserved3
const pReserved4 = 1 - qReserved4
const pReserved5 = 1 - qReserved5
const pReserved6 = 1 - qReserved6
const pReserved7 = 1 - qReserved7
const pReserved8 = 1 - qReserved8

const pAllReservedSystem = calc(pReserved1, pReserved2, pReserved3, pReserved4, pReserved5, pReserved6, pReserved7, pReserved8)
const qAllReservedSystem = 1 - pAllReservedSystem
const tAllReservedSystem = -time / log(pAllReservedSystem, e)
const gAllQ = qAllReservedSystem / qSystem
const gAllP = pAllReservedSystem / pSystem
const gAllT = tAllReservedSystem / tSystem

console.log("Базова імовірність безвідмовної роботи = {}\n"
"Базова імовірність відмови = {}\n"
"Базовий середній наробіток на відмову = {}\n".format(pSystem, qSystem, tSystem))

console.log("Імовірність безвідмовної роботи системи з навантаженим загальним резервуванням = {}\n"
"Імовірність відмови системи з навантаженим загальним резервуванням = {}\n"
"Середній час роботи системи з навантаженим загальним резервуванням = {}".format(pReservedSystem,
    qReservedSystem, tReservedSystem))
console.log("Виграш системи з навантаженим загальним резервуванням по імовірності безвідмовної роботи = {}\n"
"Виграш системи з навантаженим загальним резервуванням по імовірності відмови = {}\n"
"Виграш системи з навантаженим загальним резервуванням по середньому часу роботи = {}\n".format(gP, gQ, gT))

console.log("Імовірність безвідмовної роботи системи з навантаженим розподіленим резервуванням = {}\n"
"Імовірність відмови системи з навантаженим розподіленим резервуванням = {}\n"
"Середній час роботи системи з навантаженим розподіленим резервуванням = {}".format(pAllReservedSystem,
    qAllReservedSystem, tAllReservedSystem))
console.log("Виграш системи з навантаженим розподіленим резервуванням по імовірності безвідмовної роботи = {}\n"
"Виграш системи з навантаженим розподіленим резервуванням по імовірності відмови = {}\n"
"Виграш системи з навантаженим розподіленим резервуванням по середньому часу роботи = {}\n".format(gAllP,
    gAllQ, gAllT))



