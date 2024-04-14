// setInterval 
const body = document.body;
const button = document.querySelector("button");
console.log(body);
const intervalId= setInterval(()=>{
  const red = Math.floor(Math.random()*126);
  const green= Math.floor(Math.random()*126);
  const blue = Math.floor(Math.random()*126);
  const rgb = `rgb(${red},${green},${blue})`;
  body.style.backgroundColor = rgb;
  console.log(rgb);
},1000);
button.addEventListener("click",()=>{
  clearInterval(intervalId);
  button.textContent = body.style.backgroundColor;
})
 
// clearTimeout(intervalId);
// mujhy bhe isy rookna hy o setInterval bhe Id deta hy 