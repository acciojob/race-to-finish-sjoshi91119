window.promises = [
	const promise 1 = new Promise((resolve) => setTimeout()=> (resolve(1) Math.random()*5000+1000));
	const promise 2 = new Promise((resolve) => setTimeout() => (resolve(2) Math.random() *5000 + 1000));
	const promise 3 = new Promise((resolve) => setTimeout() => (resolve(3) Math.random() *5000 + 1000));
	const promise 4 = new Promise((resolve) => setTimeout() => (resolve(4) Math.random() *5000 + 1000));
	const promise 5 = new Promise((resolve) => setTimeout() => (resolve(5) Math.random() *5000 + 1000));
];

promise.any(promises)
.then((result){
	 document.getElementById('output').innerHTML = `${result}`;
});
.catch((error) => {
    console.error(error);
  });
// Do not change the code above this
// add your promises to the array `promises`
