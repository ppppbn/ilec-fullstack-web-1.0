// 

// Truoc khi co Promise, xai callback


// Router
//              ||
//              ||
// Service cb
//              ||
//              ||  
// Repository => .find().exec(cb); 


// Sau khi co Promise


// Router => Promise.then(res.json);


// Service => Promise


// Repository => Promise(data);


// function fetchData() {
//   let newPromise = new Promise(function(resolve) {
//     resolve(3);
//   });

//   let anotherPromise = new Promise(function(resolve) {
//     resolve(5);
//   })
  
//   return newPromise
//   .then(function(value) {
//     console.log('value', value);
//     return anotherPromise;
//   })
//   .then(function(anotherValue) {
//     console.log('anotherValue', anotherValue);
//   })
//   .then(function() {
//     return 1;
//   });
// }

// fetchData().then(function(value) {
//   console.log(value);
// });



// fetchData()
// .then(function(data) {
//   // Print
//   console.log(data);
// })
// .catch(function (error) {
//   console.log(error);
// })



// Async - Await

async function fetchData() {
  let anotherPromise = new Promise(function (resolve, reject) {
    resolve(5);
  });

  try {
    await anotherPromise;
  } catch (error) {
    console.log('error', error);
  }
}

fetchData().then().catch();

async function callFetchData() {
  await fetchData();
}

callFetchData();
