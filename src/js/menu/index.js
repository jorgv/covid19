import navTemplate from './template.js'

class CAGOVOverlayNav extends window.HTMLElement {
  connectedCallback () {
    this.menuContentFile = this.dataset.json;
    fetch(this.menuContentFile)
      .then(response => response.json())
      .then(data => {
        this.innerHTML = navTemplate(data);
        this.querySelector(".open-menu").addEventListener('click', this.toggleMainMenu.bind(this));
        this.querySelector(".expanded-menu-close-mobile").addEventListener('click', this.toggleMainMenu.bind(this));
        this.expansionListeners();
      });
  }
  toggleMainMenu(){
    if(this.querySelector(".hamburger").classList.contains("is-active")){
      this.classList.remove("display-menu");
      this.classList.remove("reveal-items");
      this.querySelector(".hamburger").classList.remove("is-active");
      // what should we apply aria-expanded to?
      this.querySelector("#main-menu").setAttribute("aria-hidden", "true");
    } else {
      this.classList.add("display-menu");
      this.querySelector(".hamburger").classList.add("is-active");
      this.querySelector("#main-menu").setAttribute("aria-hidden", "false");
      setTimeout(
        function(){
          this.classList.add("reveal-items");
          this.querySelector("#search-site").focus();
        }.bind(this),
        300
      );
    }
  }
  expansionListeners() {
    this.querySelectorAll('.expanded-menu-section-header-arrow').forEach(menu => {
      menu.addEventListener('click', function(event) {
        if(window.innerWidth < 1024){
          event.preventDefault();
          this.closest('.expanded-menu-section').classList.toggle('expanded');
        }
      })
    })
  }
}
window.customElements.define('cagov-navoverlay', CAGOVOverlayNav);