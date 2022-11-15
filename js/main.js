(() => {
  const app = {
    init () {
      console.log('1. Application Initialized!');
      // Variables
      // Call the function cacheElements
      this.cacheElements();
      // Call the function generateUI
      this.generateUI();
    },
    cacheElements () {
      console.log('2. Chache the elements!');
      this.$container = document.querySelector('.container__projecten');
    },
    generateUI () {
      console.log('3. Generate User Interface!');
      this.$container.innerHTML = this.generateHTMLForNavigation(navigation);
      this.$container.innerHTML += this.generateHTMLForEvents(events);
      this.$container.innerHTML += this.generateHTMLForContent(projecten);
      this.$container.innerHTML += this.generateHTMLForSocials(socials);
      this.$cards = document.querySelector('.project__cards');
      const $cards = this.$cards.querySelectorAll('.project__card');
      this.$details = document.querySelector('.project__cards-details');
      $cards.forEach(($card) => {
        $card.addEventListener('click', (ev) => {
          const id = ev.currentTarget.dataset.id;
          this.generateUIForProjectDetails(id);
          // Get the modal
          const modal = document.getElementById('myModal');

          const span = document.getElementsByClassName('close')[0];

          span.onclick = function () {
            modal.style.display = 'none';
          };
          modal.style.display = 'block';
        });
      });
      setInterval(() => {
        this.generateHTMLForAftelClock();
        this.generateHTMLForOptelClock();
      }, 1000);
      
    },
    generateHTMLForNavigation (navigation) {
      return `
      <header class="header">
        <nav class="navigation">
          <ul class="nav-menu">
            ${this.generateHTMLForMenuItem(navigation)}
          </ul>
        </nav>
      </header>
      `;
    },
    generateHTMLForMenuItem (navigation) {
      let tmpStr = '';
      let target = '';
      for (let i = 0; i < navigation.length; i++) {
        if (navigation[i].type === 'internal') {
          target = '__self';
        } else if (navigation[i].type === 'external') {
          target = '__blank';
        }
        tmpStr += `<li><a href="${navigation[i].link}" target="${target}">${navigation[i].name}</a></li>`;
      }
      return tmpStr;
    },
    generateHTMLForEvents (events) {
      return `
      <div class="project__events">
        <ul class="project__events-list">
          ${this.generateHTMLForEvent(events)}
        </ul>
      </div>
      `;
    },
    generateHTMLForEvent (events) {
      let tmpStr = '';
      for (let i = 0; i < events.length; i++) {
        tmpStr += `<li><a href="${events[i].link}">${events[i].title}</a></li>`;
      }
      return tmpStr;
    },
    generateHTMLForContent (projecten) {
      return `
      <main>
        <div class="project__optel-clock">
        </div>
        <div class="project__cards">
          ${this.generateHTMLForProjecten(projecten)}
        </div>
        <div class="project__cards-details">
        </div>
        <div class="project__aftel-clock">
        </div>
      </main>
      `;
    },
    generateHTMLForProjecten (projecten) {
      let tmpStr = '';
      for (let i = 0; i < projecten.length; i++) {
        tmpStr += `
        <div class="project__card" data-id=${projecten[i].id}>
          <picture class="project__card-picture">
            <img src="${projecten[i].screenshots[0]}">
          </picture>
          <p>${projecten[i].author.firstName} ${projecten[i].author.lastName}</p>
          <h3>${projecten[i].title}</h3>
          <ul>
            ${this.generateHTMLForTechnologies(projecten[i].technologies)}
          </ul> 
        </div>
        `;
      }
      return tmpStr;
    },
    generateHTMLForTechnologies (technologies) {
      let tmpStr = '';
      for (let i = 0; i < technologies.length; i++) {
        tmpStr += `<li>${technologies[i].name}</li>`;
      }
      return tmpStr;
    },
    generateHTMLForSocials (socials) {
      const date = new Date();
      const year = date.getFullYear();
      return `
      <footer class="project__footer">
        <ul>
          ${this.generateHTMLForMediaSocials(socials)}
        </ul>
        <p>Copyright ${year} @ Associate Degree in Computer Programming | Artvelede University of Applied Sciences | Disclaimer</p>
      </footer>
      `;
    },
    generateHTMLForMediaSocials (socials) {
      let tmpStr = '';
      for (let key in socials) {
        tmpStr += `<li><a href="${socials[key]}" target="__blank" rel="noreferrer nofollow" >${this.generateHTMLForSocialsIcons(key)}</i></a></li>`;
      }
      return tmpStr;
    },
    generateHTMLForSocialsIcons (key) {
      switch (key) {
        case 'website': default: return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
        </svg>`;
        case 'linkedin': return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
        </svg>`;
        case 'youtube': return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
        </svg>`;
        case 'facebook': return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg>`;
        case 'instagram': return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
        </svg>`;
      }
    },
    generateUIForProjectDetails (id) {
      const card = projecten.find((card) => card.id === id);
      this.$details.innerHTML = this.generateHTMLForProjectDetails(card);
    },
    generateHTMLForProjectDetails (card) {
      return `
      
      <div id="myModal" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
          <span class="close">&times;</span>
          <div class="project__details">
            <div class="project__details-picturebl">
            ${this.generateHTMLForProjectDetailsPicture(card.screenshots)}
            </div>
            <div class="project__details_text">
              <p>${card.author.firstName} ${card.author.lastName}</p>
              <p>${card.title}</p>
              <div class="project__details-technologies">
                ${this.generateHTMLForPRojectDetailsTechnologies(card.technologies)}
              </div>
              <p>${card.synopsis}</p>
            </div>
          </div>
        </div>

      </div>
      `;
    },
    generateHTMLForProjectDetailsPicture (card) {
      let tmpStr = '';
      for (let i = 0; i < card.length; i++) {
        console.log(card[i]);
        tmpStr += `
        <picture class="project__details-picture">
          <img src="${card[i]}">
        </picture>
        `;
      }
      return tmpStr;
    },
    generateHTMLForPRojectDetailsTechnologies (card) {
      let tmpStr = '';
      for (let i = 0; i < card.length; i++) {
        tmpStr += `
        <p>${card[i].name}</p>
        `;
      }
      return tmpStr;
    },
    generateHTMLForOptelClock () {
      let tmpStr = '';
      const startDate = new Date(1663569900000);
      const currentDate = new Date().getTime();
      const difference = currentDate - startDate;
      let d = Math.floor(difference / (1000 * 60 * 60 * 24));
      let h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let s = Math.floor((difference % (1000 * 60)) / 1000);
      if (String(d).length < 1) {
        d = this.toAmountOfDigits(d, 3);
      }
      h = this.toAmountOfDigits(h, 2);
      m = this.toAmountOfDigits(m, 2);
      s = this.toAmountOfDigits(s, 2);
      tmpStr = `
      <p class="optel__clock">0${d}days ${h}h ${m}m ${s}s</p>
      <p>running in current academic year 2023-24</p>
      `;
      document.querySelector('.project__optel-clock').innerHTML = tmpStr;
    },
    generateHTMLForAftelClock () {
      let tmpStr = '';
      const endDate = new Date(1695019500000);
      const currentDate = new Date().getTime();
      const difference = endDate - currentDate;
      let d = Math.floor(difference / (1000 * 60 * 60 * 24));
      let h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let s = Math.floor((difference % (1000 * 60)) / 1000);
      if (String(d).length > 1) {
        d = this.toAmountOfDigits(d, 3);
      }
      h = this.toAmountOfDigits(h, 2);
      m = this.toAmountOfDigits(m, 2);
      s = this.toAmountOfDigits(s, 2);
      tmpStr = `
      <p class="aftel__clock">0${d}days ${h}h ${m}m ${s}s</p>
      <p>till next academic year 2023-24</p>
      `;
      document.querySelector('.project__aftel-clock').innerHTML = tmpStr;
    },
    toAmountOfDigits (number, amount) {
      let str = String(number);
      while (str.length < amount) {
        str = `0${str}`;
      }
      return str;
    },
  };
  app.init();
})();
