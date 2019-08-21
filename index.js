// document.querySelector('.drum').addEventListener('click', handleClick);

// function handleClick() {
//    alert('just clicked');
// }

// document.querySelectorAll('.drum')[1].addEventListener('click', function() {
//    alert('just clicked');
// });

var numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (var i = 0; i < numberOfDrumButtons; i++) {
   document.querySelectorAll('.drum')[i].addEventListener('click', function(e) {
      //alert('just clicked');
      console.log(this.innerHTML);
      this.style.color = 'white';
      console.log(e);
   });
}

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
