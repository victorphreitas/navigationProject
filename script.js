  const menuBars = document.querySelector(".menu-bars");
  const overlay = document.querySelector("#overlay");
  const bar = document.querySelectorAll(".menu-bar");
  const navsLi = document.querySelectorAll("nav ul li");

  const links = document.querySelectorAll("ul a");
  links.forEach(link => {
    console.log(link)
    link.addEventListener("click", function(event) {
      overlay.classList.remove("overlay-slide-right");
      menuBars.classList.toggle("change") 
      
      if (event.target.textContent === "home") {
        window.location.href = "#home"
        
      } else if (event.target.textContent === "about") {
        window.location.href = "#about"
        
      } else if (event.target.textContent === "skills") {
        window.location.href = "#skills"
        
      } else if (event.target.textContent === "projects") {
        window.location.href = "#projects"
        
      } else if (event.target.textContent === "contacts") {
        window.location.href = "#contacts"

      }
      event.preventDefault();
    })
  })

  function toggleNav(event) {

    overlay.classList.toggle("overlay-slide-right")
    menuBars.classList.toggle("change") 

    navsLi.forEach((nav,index) => {
      nav.classList.toggle(`slide-in-${index+1}`)
    })
    event.preventDefault()
  }

  menuBars.addEventListener("click", toggleNav);
