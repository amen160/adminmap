import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

localStorage.setItem('sv', "https://maps.beta.qup.vn");
// var sv = getQueryVariable("sv")
// console.log(localStorage.getItem('sv'))
// if (sv === "aws"){
// 	localStorage.setItem('sv', "https://maps.qupworld.com");
// }else
// if (sv === "sea"){
// 	localStorage.setItem('sv', "https://maps-sea.qupworld.com");
// }
// else
// if (sv === "avis"){
// 	localStorage.setItem('sv', "https://maps-avis.qupworld.com");
// }
// else
// if (sv === "asap"){
// 	localStorage.setItem('sv', "https://maps-vn.qupworld.com");
// }
// else
// if (sv === "beta"){
// 	localStorage.setItem('sv', "https://maps.beta.qup.vn");
// }
// else
// if (sv === "lab"){
// 	localStorage.setItem('sv', "https://maps.lab.qup.vn");
// }
// else
// if (sv === "dev"){
// 	localStorage.setItem('sv', "http://192.168.2.85:1333");
// }
// else
// if (sv === "local"){
// 	localStorage.setItem('sv', "http://localhost:1333");
// }
console.log(localStorage.getItem('sv'))
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
