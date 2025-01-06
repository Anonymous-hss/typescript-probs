function delayedCall(fn: () => void) {
  setTimeout(fn, 5000);
}

delayedCall(function () {
  console.log("Hello");
});
