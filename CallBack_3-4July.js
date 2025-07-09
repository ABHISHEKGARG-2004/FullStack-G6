// // var a = 200;
// // console.log(a);

// // function abc(){
// //     console.log("THIS IS ABC FUNCTION");
// //     function def(){
// //         console.log("THIS IS DEF FUCNTION");
// //         function ghi(){
// //             console.log("THIS IS GHI");
// //         }
// //         ghi();
// //     }
// //     def();
// // }
// // abc();

// function checkMenu(cb) {
//     console.log("Checking menu");
//     setTimeout(cb,2000);
// }

// function orderPlace(cb) {
//     console.log("Placing Order");
//     setTimeout(cb,3000);
// }

// function orderServing(cb) {
//     console.log("Serving Order");
//     setTimeout(cb,2000);
// }

// function orderEating(cb) {
//     console.log("Eating order");
//     setTimeout(cb,7000);
// }

// function BillPay(cb) {
//     console.log("Paying bill");
//     setTimeout(cb,3000);
// }


// function exitRes() {
//     console.log("Exiting Restraunt");

// }

// checkMenu(()=>{
//     orderPlace(()=>{
//         orderServing(()=>{
//             orderEating(()=>{
//                 BillPay(() => {
//                     exitRes();
//                 })
//             })
//         })
//     })
// })


