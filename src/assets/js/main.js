//TODO github ci actions to remove comments, lint...

// dark/light theme manager
// bg and text colors variables are stored in 2 SCSS classes .theme-light and .theme-dark
// apply one class to the <html> element to set the theme
const theme = {
  // element : ball moving right left to mask sun or moon in the switch
  ball : null,
  // initialize : 
  init : function() {
    this.ball = document.querySelector('#switch-container .switch .ball');
    this.set(localStorage.getItem('theme'));
    },
    /**
     * set the theme of the site
     * also store current theme name : 
     * @param {*} name 
     */
    set : function(name) {
      localStorage.setItem('theme', name);
      document.documentElement.className = name;
    },
    // switch theme
    toggle: function() {
      
      if (localStorage.getItem('theme') === 'theme-dark') {
        this.set('theme-light');
        this.ball.classList.remove('darkMode');
      } else {
        this.set('theme-dark');
        this.ball.classList.add('darkMode');
      }
    },
  }
  
// the whoami element (half of the home page about me)
// click on this element will toggle content between identity and profile
const whoami = {
  el : null,
  identityEl : null,
  profileEl : null,
  // initialize
  init : () => {
    this.el = document.querySelector('#home .whoami');
    this.identityEl = this.el.querySelector('.identity');
    this.profileEl = this.el.querySelector('.profile');
    // click on the element switch content : identity and profile
    this.el.addEventListener('click', (e) => {
      e.preventDefault();
      if (this.profileEl.style.display === 'block') {
        this.profileEl.style.display = 'none';
        this.identityEl.style.display = 'block';
      } else {
        this.identityEl.style.display = 'none'
        this.profileEl.style.display = 'block';
      }
    });
  }
}

const app = {
  page : null,
  init: function() {
    theme.init();
    this.page =  document.querySelector('.page').id;
    switch (this.page) {
      case 'home' :
        whoami.init();
        break;
    }
  }
}

app.init();
console.log('page name', app.page);


