addEventListener("load", ()=>{
    const  sounds = document.querySelectorAll(".sound");
   const  pads = document.querySelectorAll(".pads div");
   const visual = document.querySelector(".visual");
   const colors = [
       "#FF59C3",
      " rgb(201,84,255)",
        "rgb(0,117,255)",
        "rgb(157,235,49)",
        "#FFC26F",
        "#FE6D6D"


   ];


   //adding sounds here
   pads.forEach( (pad, index) => {
       pad.addEventListener("click", function(){
           sounds[index].currentTime = 0;
           sounds[index].play();

           create_bubbles (index); 

       });
   });

   //Create a function that makes bubbles
   const create_bubbles = (index) => {
       const bubble = document.createElement("div");
       visual.appendChild(bubble);
       bubble.style.backgroundColor =  colors[index];
       bubble.style.animation = 'jump 1 ease';
       bubble.addEventListener('animationend', function(){
          visual.removeChild(this); 

       });

   }; 


});
