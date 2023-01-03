

window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(technologies)
  activateMenuAtCurrentSection(cases)
  activateMenuAtCurrentSection(about)
}


//   Menu ativo conforme a seção visivel na página

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a secao passou da linha
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop


  // verificar se a base esta abaixo da linha alvo
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine


  // limites da secao
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}





const toggleMenu = () => {
  document.body.classList.toggle("open");
};


//   Initialize Swiper
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



function showNavOnScroll() {
  if (scrollY > 0) {
    navigatio.classList.add('scroll')
  } else {
    navigatio.classList.remove('scroll')
  }
}



//  Abrir e fecha menu expanded
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}


//  Botão voltar para o topo
function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}


//  ScrollReveal: Mostrar elementos quando der scroll na página
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home .banner-one,
#home .button,
#services .col-a,
#services .card,
#technologies .col-a,
#technologies .col-b,
#technologies .card-tittle,
#cases .wrapper,
#cases .swiper-wrapper,
#cases .image-cases img,
#about .content-about .col-a,
#about .content-about .subtitle,
#about .about, 
#footer,
#footer .button,
#footer p,
#footer .baseboard ul li
`)

ScrollReveal({
  origin: 'left',
  distance: '40px',
  duration: 700
}).reveal(`
#technologies img,
`)



