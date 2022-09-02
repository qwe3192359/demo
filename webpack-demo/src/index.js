//import _ from 'lodash';
import './style.css';

import data from './data.json';
console.log(data)


// import printMe from './print.js';



function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // lodash 在当前 script 中使用 import 引入
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = 'Hello webpack 11111';
    element.classList.add('hello');


    btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
    element.appendChild(btn);



    return element;
}

document.body.appendChild(component());