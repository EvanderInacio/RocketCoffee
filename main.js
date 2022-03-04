

const navMenu = document.getElementById('menu-mobile');

function toggleMenu(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}


//remover ao clicar em algum "A" do menu mobile
const links = document.querySelectorAll('nav ul li a');

for(const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('active');
  })
}


navMenu.addEventListener('click', toggleMenu);
