function delayedCall(fn) {
    setTimeout(fn, 5000);
}
delayedCall(function () {
    console.log("Hello");
});
