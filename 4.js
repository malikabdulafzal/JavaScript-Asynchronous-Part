// understand callbacks

// first we understand callback in context of synchronous programming
// function myfunc(callback)
// {
//   console.log("function is doing  task1");
//   callback();
// }
// function myfunc2()
// {
//   console.log("function is doing  task2");
// }
// myfunc(myfunc2);

//(*)
//hum function ky arguments ma bhe function ko define kr skty hain
// function myfunc(callback)
// {
//   console.log("function is doing task1");
//   callback();
// }
//  myfunc(()=>{
//   console.log("function is doing task2");
// }
// );

//(*)
// one more example about callback() function 
// function gettwonumbersAndadd(number1, number2,onSuccess,onFailure)
// {
// if(typeof number1==="number" && typeof number2 ==="number"){

//   onSuccess(number1,number2);
// }
// else 
// {
//   onFailure();
// }


// }

// gettwonumbersAndadd("4","5",(num1,num2)=>{console.log( num1+num2)},()=>{console.log("Wrong data type");
// console.log("please pass numbers only")});
