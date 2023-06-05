document.getElementById("open-popup").addEventListener("click", function() {
    document.getElementById("popup").classList.add("open")
})

document.getElementById("anyquestion-button").addEventListener("click", function() {
    document.getElementById("popup").classList.add("open")
})

document.getElementById("menu-open-popup").addEventListener("click", function() {
  document.getElementById("popup").classList.add("open")
})






// Закрыть модальное окно при нажатии на Esc
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.getElementById("popup").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#popup .callme__container").addEventListener("click", event => {
    event._isClickWithInModal = true;
});
document.getElementById("popup").addEventListener("click", event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
});

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }
  
  burgerMenu('.burger-menu');