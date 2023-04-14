window.promises = [
  new Promise((resolve) => setTimeout(() => resolve(Math.floor(Math.random() * 5000 + 1000)), Math.floor(Math.random() * 5000 + 1000))),
  new Promise((resolve) => setTimeout(() => resolve(Math.floor(Math.random() * 5000 + 1000)), Math.floor(Math.random() * 5000 + 1000))),
  new Promise((resolve) => setTimeout(() => resolve(Math.floor(Math.random() * 5000 + 1000)), Math.floor(Math.random() * 5000 + 1000))),
  new Promise((resolve) => setTimeout(() => resolve(Math.floor(Math.random() * 5000 + 1000)), Math.floor(Math.random() * 5000 + 1000))),
  new Promise((resolve) => setTimeout(() => resolve(Math.floor(Math.random() * 5000 + 1000)), Math.floor(Math.random() * 5000 + 1000))),
];

Promise.any(promises)
  .then((result) => {
    document.getElementById('output').innerHTML = `${result}`;
  })
  .catch((error) => {
    console.error(error);
  });
