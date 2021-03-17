(() => {
  console.log(this)
})()

(function hello() {
  console.log(this)
}())