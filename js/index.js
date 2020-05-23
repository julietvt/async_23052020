'use strict';

/*
const request = new XMLHttpRequest();
request.onloadend = function (){
  console.log(this);
};
request.open("GET","./users.json");
request.send();
//console.log(request.responseText);
*/

/*
const store = {
    users: null,
    isFetching: false,
    error: null,
};
const request = new XMLHttpRequest();
const button = document.getElementById("loadButton");
button.onclick = function () {
    request.open("GET","./users.json");
    request.send();
};
request.onloadstart = function(){
    store.isFetching = true;
    //console.log(store);
}
request.onloadend = function(){
    store.isFetching = false;
    if(this.status >= 200 && this.status<300){
        store.users = JSON.parse(this.responseText);
    }
    else{
        store.error = new Error(`${this.status}:${this.statusText}`);
    }
};
*/

// промис
const request = new XMLHttpRequest();
const loadUsersPromise = new Promise(
    function (resolve, reject) {
        request.onload = () => {
            resolve(JSON.parse(request.responseText))
        };
        request.onerror = () => {
            reject(new Error(`${request.status}:${request.statusText}`));
        }
        request.open("GET","./users.json");
        request.send();
});
loadUsersPromise
    .then(function (users) {
        console.log(users);
    })
    .catch(function (error) {
        console.log(error);
    });





/*
// Promise - обещание
//  pending - ожидание, fulfilled(resolve) - решен, rejected - отклонен
const isEnoughMoney = true;

const willBuyNewCar = new Promise(
    (resolve, reject) => {
        if(isEnoughMoney){
            const car = {
                model: "Ford",
                color: "black",
                year: 1969,
                price: 60000,
            };
            resolve(car);
        } else{
            const reason = new Error("Unfortunately, amounts is not sufficient");
            reject(reason);
        }
    }
);

async function show(car) {
    return new Promise(
        (resolve, reject) => {
            const msg = "I have" + car.model;
            resolve(msg);
        }
    );
}

async function BuyCar() {
    try{
        let mycar = await willBuyNewCar;
        let msg = await show(mycar);
        console.log(msg);

    } catch(error){
        console.log(error.message);
    }

}

(async ()=>{
    await BuyCar();
}) ();

//BuyCar();

 */

/*
// ES 6
const BuyCar = function() {
willBuyNewCar
.then (show)
.then(fulfilled => console.log(fulfilled))
.catch(error = > console.log(error.message));
};
 */
/*
// 1 способ
const promise1 = new Promise(
    function(resolve, reject){
        console.log("done");
    });
// 2 способ
const promise2 = new Promise(funExecutor);
function funExecutor(resolve, reject) {
    console.log("done");
}
*/
/*
// Задача получить случайное число и проверить больше ли оно 5
const getNumBiggerThan5 = new Promise(funEx);
function  funEx(resolve, reject) {
    const number = Math.random()*10;
    console.log(number);
    if(number > 5) {
        resolve(number);
    }
    else{
        reject(new Error("number isn't bigger than 5 ,number="+number));
    }
}
*/


