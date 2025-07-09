// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("chal jayega");
//     },3000)
// })
// p1.then(
//     (res)=>console.log(res)
// ).then(()=>{
//     setTimeout(()=>{
//         console.log("kaise hai app log")
//     },4000)
// }).then(()=>{
//     setTimeout(()=>{
//         console.log("bdiya bhai jaan")
//     },2000)
// })
// .catch((err)=>console.log(err))


//--------------------------------------------------------------------------------------


// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Heeeeelo");
//   }, 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hiiiiiii- 2nd");
//   }, 4000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Huhhhhhhh- 3rd");
//   }, 2000);
// });

// p1.then((res1) => {
//     console.log(res1); 
//     return p2;
//   })
//   .then((res2) => {
//     console.log(res2);
//     return p3;
//   })
//   .then((res3) => {
//     console.log(res3); 
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });



//------------------------------------------------------------------------------------

// // Promise APIs
// const p1 = new Promise((resolve) => 
//     setTimeout(() => resolve("P1 done"), 1000));
// const p2 = new Promise((resolve) => 
//     setTimeout(() => resolve("P2 done"), 2000));
// const p3 = new Promise((reject) => 
//     setTimeout(() => reject("P3 failed"), 1500));
// const p4 = new Promise((resolve) => 
//     setTimeout(() => resolve("P4 done"), 500));

// Promise.all([p1,p2,p3,p4])
// .then((results)=> console.log("Result of All is-> ", results))
// .catch((err)=> console.log("Error-> ",err));


// Promise.allSettled([p1,p2,p3,p4])
// .then((results)=> console.log("Result of allSettled is-> ", results))
// .catch((err)=> console.log("Error-> ",err));

// Promise.race([p1,p2,p3,p4])
// .then((results)=> console.log("Result of race is-> ", results))
// .catch((err)=> console.log("Error-> ",err));

// Promise.any([p1,p2,p3,p4])
// .then((results)=> console.log("Result of any is-> ", results))
// .catch((err)=> console.log("Error-> ",err));



////////////////////////////////////////////////////////////////////


//call()

