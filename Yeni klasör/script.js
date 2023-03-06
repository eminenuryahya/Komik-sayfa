const button2 = document.getElementById('buton2');
let left = 60;
button2.addEventListener('mouseover', function() {
    if(left == 60){
      left = 70;
    }else{
      left = 60;
    }
    this.style.left = left + '%';
  });
  document.getElementById('buton1').addEventListener('click', function() {
    alert('Üzülme belki buluruz :(');
    });