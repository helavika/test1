'use strict'

var row = 'qwertyuiop[]';
var row1 = 'asdfghjkl;\'';
var row2 = 'zxcvbnm,./';

var allRows = (row + row1 + row2);

console.log(`${allRows}`);

console.log(`${row.length}, ${row1.length}, ${row2.length}`);

console.log(`${row.charAt(0)}, ${row.charAt(row.length -1)}, ${row1.charAt(0)}, ${row1.charAt(row1.length -1)}, ${row2.charAt(0)}, ${row2.charAt(row2.length -1)}`);

console.log(`${allRows.indexOf('[')}, ${allRows.indexOf(']')}`);