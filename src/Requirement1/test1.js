

import { isLeapYear } from './dateUtil.js';

const leapYear = 2020;
const nonLeapYear = 2021;

console.log(`${leapYear} is a leap year: ${isLeapYear(leapYear)}`);
console.log(`${nonLeapYear} is a leap year: ${isLeapYear(nonLeapYear)}`);
