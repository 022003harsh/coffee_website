let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchFrom.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchFrom=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchFrom.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem=document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick=()=>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchFrom.classList.remove('active');
}

window.onscroll=()=>{
    navbar.classList.remove('active');
    searchFrom.classList.remove('active');
    cartItem.classList.remove('active');
}




display();
// let webtask=localStorage.getItem("userinput")
//   if(localStorage.getItem("userinput") == null)
//   {
//     let choose=document.getElementsByClassName("btn_choose_items")[0]
//     choose.style.display="block";
//     let buy=document.getElementsByClassName("buy_now")[0]
//     buy.style.display="none";
//   }
//   else{
//     let choose=document.getElementsByClassName("btn_choose_items")[0]
//     choose.style.display="none";
//     let buy=document.getElementsByClassName("buy_now")[0]
//     buy.style.display="block";
//   }
let btn1 = document.getElementsByClassName("btn1");
for (let i = 0; i < btn1.length; i++) {
  btn1[i].addEventListener("click",function(e)
  {
    e.preventDefault();

let head = document.getElementsByClassName("box1")[i].getElementsByTagName("h3")[0].innerText;
let price = document.getElementsByClassName("box1")[i].getElementsByTagName("span")[0].innerText;
let webtask=localStorage.getItem("userinput")
if(webtask==null)
    {
        taskobj=[];
    }
    else{
        taskobj=JSON.parse(webtask)  
    }
taskobj.push(head)
localStorage.setItem("userinput",JSON.stringify(taskobj));
display();
  });
}


function display()
{
  let webtask=localStorage.getItem("userinput")

if(webtask===null)
    {
    // let choose=document.getElementsByClassName("btn_choose_items")[0]
    // choose.style.display="block";
    // let buy=document.getElementsByClassName("buy_now")[0]
    // buy.style.display="none";
    taskobj=[];
    }
    else{
    taskobj=JSON.parse(webtask)
    // let choose=document.getElementsByClassName("btn_choose_items")[0]
    // choose.style.display="none";
    // let buy=document.getElementsByClassName("buy_now")[0]
    // buy.style.display="block";
    }

  // if(JSON.parse(webtask)==null)
  // {
  //   let choose=document.getElementsByClassName("btn_choose_items")[0]
  //   choose.style.display="block";
  //   let buy=document.getElementsByClassName("buy_now")[0]
  //   buy.style.display="none";
  // }
  // else{
  //   let choose=document.getElementsByClassName("btn_choose_items")[0]
  //   choose.style.display="none";
  //   let buy=document.getElementsByClassName("buy_now")[0]
  //   buy.style.display="block";
  // }

  if (webtask === null) {
    let choose=document.getElementsByClassName("btn_choose_items")[0]
    choose.style.display="block";
    let buy=document.getElementsByClassName("buy_now")[0]
    buy.style.display="none";
} else {
  let choose=document.getElementsByClassName("btn_choose_items")[0]
  choose.style.display="none";
  let buy=document.getElementsByClassName("buy_now")[0]
  buy.style.display="block";
}


let html=``;
  taskobj.forEach((item,index) => {
    html=html+`<div class="cart-items">
    <span class="fas fa-times" onclick="deleted(${index})"></span>
    <img src="image/espresso.com.png" alt="">
    <div class="content">
        <h3>${index+1}.${item}</h3>
        <div class="price">Rs-15.99/-</div>
    </div>
</div>`
});
let showarea=document.getElementsByClassName("cont")[0];
showarea.innerHTML =html;
}


function deleted(index)
{
  let webtask=localStorage.getItem("userinput")
  taskobj=JSON.parse(webtask)  
  taskobj.splice(index,1);
  localStorage.setItem("userinput",JSON.stringify(taskobj));
  display();
}






// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });