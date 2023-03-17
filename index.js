
function buttonAudio(letter){
  switch (letter) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
  }
}

function buttonAnimation(letter){
  document.querySelector("." + letter).classList.add("changed-color");
  setTimeout(function(){
    document.querySelector("." + letter).classList.remove("changed-color");
  }, 100);

  document.querySelector("." + letter).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("." + letter).classList.remove("pressed");
  }, 100);
}

var numberOfDrums = document.querySelectorAll(".drum").length;
for(var i = 0; i < numberOfDrums; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function (){
    // this.classList.toggle("changed-color");
    buttonAudio(this.textContent);
    buttonAnimation(this.textContent);
  });
}

document.addEventListener("keydown", function(event){
  buttonAudio(event.key);
  buttonAnimation(event.key);
});



// document.querySelector("button.w").addEventListener("click", function handleClick(){
//   alert("W got clicked!");
// });

// var numberOfDrums = document.querySelectorAll(".drum").length;
// for(var i = 0; i < numberOfDrums; i++){
//   document.querySelectorAll("button")[i].addEventListener("click", function (){
//     this.classList.toggle("changed-color");
//     switch (this.textContent) {
//       case "w":
//         var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();
//         break;
//       case "a":
//         var audio = new Audio("sounds/tom-2.mp3");
//         audio.play();
//         break;
//       case "s":
//         var audio = new Audio("sounds/tom-3.mp3");
//         audio.play();
//         break;
//       case "d":
//         var audio = new Audio("sounds/tom-4.mp3");
//         audio.play();
//         break;
//       case "j":
//         var audio = new Audio("sounds/crash.mp3");
//         audio.play();
//         break;
//       case "k":
//         var audio = new Audio("sounds/kick-bass.mp3");
//         audio.play();
//         break;
//       case "l":
//         var audio = new Audio("sounds/snare.mp3");
//         audio.play();
//         break;
//       // default:
//
//     }
//   });
// }
//
// document.addEventListener("keydown", function(event){
//   // console.log(event);
//   // console.log(event.key);
//   console.log(event.key);
//   console.log(event.code);
//   switch(event.code){
//
//     case "KeyW":
//       var audio = new Audio("sounds/tom-1.mp3");
//       audio.play();
//       break;
//     case "KeyA":
//       var audio = new Audio("sounds/tom-2.mp3");
//       audio.play();
//       break;
//     case "KeyS":
//       var audio = new Audio("sounds/tom-3.mp3");
//       audio.play();
//       break;
//     case "KeyD":
//       var audio = new Audio("sounds/tom-4.mp3");
//       audio.play();
//       break;
//     case "KeyJ":
//       var audio = new Audio("sounds/crash.mp3");
//       audio.play();
//       break;
//     case "KeyK":
//       var audio = new Audio("sounds/kick-bass.mp3");
//       audio.play();
//       break;
//     case "KeyL":
//       var audio = new Audio("sounds/snare.mp3");
//       audio.play();
//       break;
//     }
// });
