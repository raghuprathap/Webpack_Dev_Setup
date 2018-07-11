import bar from './bar';
import { area, perimetr } from './square'
import circleArea from './circle';
const cube = require('./cube.js');
import './css/styles.css';
bar();
console.log(`Cube of 10 ${cube(10)}`);
console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
console.log(area(4));
console.log(perimetr(5));
console.log('Circle Area', circleArea(9));