let title=document.querySelector("#title");
let name=document.querySelector("#namefield");
let signup=document.querySelector("#signupbtn");
let signin=document.querySelector("#signinbtn");
signin.addEventListener("click",()=>{
   name.style.maxHeight="0";
   title.innerText="Sign in";
   signin.classList.remove("disable");
   signup.classList.add("disable");
  
})
signup.addEventListener("click",()=>{
    name.style.maxHeight="65px";
    title.innerText="Sign up";
    signup.classList.remove("disable");
    signin.classList.add("disable");
    
    
 })