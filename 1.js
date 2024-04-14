// synchronous programming vs asynchornous programming

//(*)
// synchronous programming
// javascript is synchronous programming single threaded language
// console.log("script start");
//  for(let i=0 ; i<10000;i++)
//  {
//   console.log("inside loop");
//  }
//  console.log("script end");
 // synchronous programming yeh hy kyy jab script start wali line run nhi hogi tab tak us sy agly waly code run nahi hogaa
 // ab app sochain loop yaha py time ly rha or uski wajah sy further code nahi chl raha kiuky jab loop complee hoga tab agli lines run hogi 

 // for exmaple
 // humein website ma backend sy data chayay hota hum website ma saray ky saray user fetch krny hain to usma thora time lgta or jab tak wo fetch nahi hogy hmara web page load nahi hoga 
 // kya hoga wo blocking event ban jayeengha  that called synchronous programming
 // javascript aik synchronous programming language hy matlb javascript ma single thread hain hmaray pass or wo thread hmary code ko execute krti hy



 //(*)
 // for the understanding of asynchornous we will take the example for setTimeout()

//  console.log("script start");
//  function hello()
//  {
//   console.log("inside setTimeout");
//  }
 // yaha pr setTimeout as a input lygha aik function  or aik time ky apko kitni dair bad function ko run krna hyy
 //ma chahta ho hello function ko kam sy kam 1 second ky bad call kro 
//  setTimeout(hello,1000); // 1000 mean 1000 mili second
//  console.log("script end");

 //(*)
 // hum setTimeout ander bhe arrow function likh skty 
//  console.log("script start");
//  setTimeout(()=>{
//   console.log("inside setTimeout")
//  },1000 );
// console.log("script end");


//(*)
// we put the 0 milisecond in the setTimeout 
// let see what happen
// console.log("script start");
// setTimeout(()=>{
//  console.log("inside setTimeout")
// },0 );
// for(let i=0;i<1000;i++)
// {
//   console.log(".....");
// }
// console.log("script end");

 
//(*)
// with the help of setTimeout , there is no blocking 
//hum code ma daikh skty wo loop ky bad waly ko code ko block nahi kr rha
// setTimeout return ma humy aik ID deta hyy
// for exmaple hmara irada badal gaya jo humny function setTimeout browser ko deya tha hum nahi ab chahty ky wo run hoo 
// ma us Id ko kisi variable ma store krleta hoo 
// console.log("script start");
// const Id = setTimeout(()=>{
//  console.log("inside setTimeout")
// },0 );
// for(let i=0;i<1000;i++)
// {
//   console.log(".....");
// }
// console.log("setTimeout Id is", Id);
// clearTimeout(Id);// humny browser ko bta deya ky jo setTimeout jiski Id 1 thi wo ab humy run nahi krna wo mujhy ab nahi dijiyay
// // isliye wo run nahi hoga 
// console.log("script end");