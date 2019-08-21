// document.querySelector('.drum').addEventListener('click', handleClick);

// function handleClick() {
//    alert('just clicked');
// }

// document.querySelectorAll('.drum')[1].addEventListener('click', function() {
//    alert('just clicked');
// });

var numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (var i = 0; i < numberOfDrumButtons; i++) {
   document.querySelectorAll('.drum')[i].addEventListener('click', function() {
      alert('just clicked');
   });
}
