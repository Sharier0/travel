// ------- Nav Position Sticky start-------------
let main_menu = document.querySelector('.main_menu');

window.addEventListener('scroll',function(){

    let scrolling = this.scrollY

if(scrolling > 100){
    main_menu.classList.add('sticky')
}
else{
    main_menu.classList.remove('sticky')
}

})

// ++++++++ Nav Position Sticky End +++++++++++++
// ------- Top Button Js start-------------
let top_button  =document.querySelector(".top_button")
window.addEventListener("scroll", ()=>{
  let scrolling  = this.scrollY;
  console.log(scrolling)
  if(scrolling >100){
    top_button.classList.add("go_top");
  }
  else{
    top_button.classList.remove("go_top");
  }
})
top_button.addEventListener('click',function(){
  window.scrollTo({
    top:0,
    behavior:"smooth",
  })
})

// ++++++++ Top Button Js End +++++++++++++

// ------- Nav Position Sticky start-------------


// ++++++++ Nav Position Sticky End +++++++++++++

// ------- Nav Position Sticky start-------------


// ++++++++ Nav Position Sticky End +++++++++++++