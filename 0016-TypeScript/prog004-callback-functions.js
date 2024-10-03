"use strict";
function fun(callback) {
    setTimeout(callback, 1000);
}
function passedFn() {
    console.log("Hello from Callback");
}
fun(passedFn);
