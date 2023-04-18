//navbar
const navLinks = document.querySelectorAll('.nav-link');

const removeActives = () => {
  navLinks.forEach(navLink => {
    navLink.classList.remove('active');
  });
};
  
const links =
  [
    'home', 'about', 'works', 'contact'
  ];

window.addEventListener('scroll', () => {
  let positionOnScreen = 0;

  // console.log(window.pageYOffset);
  links.forEach(link => {
    const elementDOM = document.getElementById(link);

    if (!elementDOM) {
      return;
    }
    
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const elementHeight = elementDOM.getBoundingClientRect().height;
    // console.log(link, positionOnScreen);
    const elementOffset = positionOnScreen + elementHeight;

    if (scrollPosition >= positionOnScreen && scrollPosition < elementOffset) {
      const menuDOM = document.getElementById(`menu-${link}`);
      removeActives();
      menuDOM.classList.add('active');
    }

    positionOnScreen = elementOffset;
  })
})

//navbar hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").
  forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }));

