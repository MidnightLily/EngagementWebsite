const hamburger = document.querySelector(".hamburger-icon");
const navbarUl = document.querySelector(".mobile ul");

hamburger.addEventListener('click', function(){
  if(navbarUl.style.display === 'none'){
    navbarUl.style.display = 'flex';
  } else{
    navbarUl.style.display = 'none';
  }
});