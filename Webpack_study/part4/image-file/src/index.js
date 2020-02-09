import pic from './images/animal.jpg';

window.addEventListener('DOMContentLoaded', function(){
    let img = new Image();
    img.src = pic;
    document.body.appendChild(img);
  }, false);
  