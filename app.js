// Soal 1 (Common JS)
const kalkulator = require("./kalkulator.js");

console.log(kalkulator.kali(4, 5));
console.log(kalkulator.bagi(10, 2));

// Soal 2 (ES Modules)
import {_kali, _bagi} from "./kalkulator2.mjs";

console.log(_kali(4, 5));
console.log(_bagi(10, 2));