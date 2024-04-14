// callback(), callbackhell, pyramid of doom
// asynchornous programming


//(*)
// in callback-demo.html 
// 1 helloworld ko remove  krky 1 second bad mujhy likhna hy heading 1
//2 helloworld ko mujhy remove krky 1 second bad likhna hy  heading 2
//  we can use setTimeout() function
// 


// ab ma chahta ho ky ab 2nd hello world bhe 1st heading ky bad wo bhe 2nd heading ma convert hojaye 
// const heading2 = document.querySelector(".heading2");
// setTimeout(()=>{heading2.textContent = "heading2";heading2.style.color = "violet";},3000);
// lkin is tareeqy sy yeh dono aik saath ho rahay hain lkin ma chahta ho ky pehly 1st hello world -> heading1 ma convert ho then usky bad 2nd hello world heading2 ma convert hooo
// ma agar 1st hello world 1second ky bad change ho  raha to ma 2nd helloworld ky setTimeout ma time ko 2 second set krdoooonghaaa to is sy wo 1st helloworld ky bad hi change hoga
// lkin agar mene assy hi sab ky liyay krnaho to yeh approach sahi nahi hay

// for example agar hum kuch data fetch krna chahty hain agar hum check krna chahty hain user ny jo passowrd dala wo sahi hy ya nahi hy 
// to isky liyay humy user ka data pehly fetch krna hoga usky bad check krna ghy usky username or password ko
// so we need to maintain the order


//(*)
// the efficient way to update the headings we dont need to set setTimeout  separate for everyone heading
// I have to put setTimeout  inside the Heading1 of setTimeout.
// this is called callback hell
// const heading1= document.querySelector(".heading1");
// const heading2= document.querySelector(".heading2");
// const heading3= document.querySelector(".heading3");
// const heading4= document.querySelector(".heading4");
// const heading5= document.querySelector(".heading5");
// const heading6= document.querySelector(".heading6");
// const heading7= document.querySelector(".heading7");
// setTimeout(()=>{heading1.textContent = "one";heading1.style.color = "violet";
// setTimeout(()=>{heading2.textContent = "two";heading2.style.color = "purple";
// setTimeout(()=>{heading3.textContent = "three";heading3.style.color = "red";
// setTimeout(()=>{heading4.textContent = "four";heading4.style.color = "pink";
// setTimeout(()=>{heading5.textContent = "five";heading5.style.color = "green";
// setTimeout(()=>{heading6.textContent = "six";heading6.style.color = "blue"; 
// setTimeout(()=>{heading7.textContent = "seven";heading7.style.color = "brown"; 

// },1000);
// },3000);
// },2000);
// },1000);
// },2000);
// },2000);
// },1000);
// we call this method callback hell
// this is looking confusing because there are too much nested callbacks.
// for removing the nesting we can use promises. 
// when there was no concept of promises then those time people use callback.
// before diving into the promises first i do this with the help of function.
// so lets try

//(*)
const heading1= document.querySelector(".heading1");
const heading2= document.querySelector(".heading2");
const heading3= document.querySelector(".heading3");
const heading4= document.querySelector(".heading4");
const heading5= document.querySelector(".heading5");
const heading6= document.querySelector(".heading6");
const heading7= document.querySelector(".heading7");
function changeText(element,text,color ,time, onSuccessCallback, onFailure)
{
setTimeout(()=>{
  if(element)
  {

    element.textContent = text;
    element.style.color = color;
    if(onSuccessCallback)
    {
  onSuccessCallback();
    }
  }
  else{
    if(onFailure)
    {
      onFailure();
    }
    console.log("your element does not exist");
  }
},time)
}
// changeText(heading1, "one" , "violet",1000, onSuccess(),onFailure() );
// changeText(heading1,"one","violet",1000,()=>{
//   changeText(heading2,"two","red",2000)
// });
changeText(heading1,"one","violet",1000,()=>{
  changeText(heading2,"two","red",2000,()=>{
    changeText(heaind3, "three",1000,()=>{

    })
  },()=>{
  console.log("Heading 2 does not exist")
  });
},()=>{console.log("Heading 1 does not exist")});