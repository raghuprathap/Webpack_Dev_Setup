import bar from './bar';
import { area, perimetr } from './square'
import circleArea from './circle';
const cube = require('./cube.js');
bar();
console.log(`Cube of 10 ${cube(10)}`);
console.log(area(4));
console.log(perimetr(5));
console.log(circleArea(9));