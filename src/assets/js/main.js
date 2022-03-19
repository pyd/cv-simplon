//TODO create app namespace

// dark/light theme manager
const theme = {
  // element : ball moving right left to mask sun or moon in the switch
  ball : null,
  // initialize : 
  init : function() {
    this.ball = document.querySelector('#switch-container .switch .ball');
    },
    /**
     * set the theme of the site
     * //TODO FIX theme name not stored !
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
        this.set('themee-light');
        this.ball.classList.remove('darkMode');
      } else {
        this.set('theme-dark');
        this.ball.classList.add('darkMode');
      }
    },
  }
  
  theme.init();

// the whoami element (half of the home page about me)
// click on this element will toggle content between identity and profile
const whoami = {
  el : null,
  identityEl : null,
  profileEl : null,
  // initialize
  init : function() {
    this.el = document.querySelector('#home .whoami');
    this.identityEl = this.el.querySelector('.identity');
    this.profileEl = this.el.querySelector('.profile');
    this.el.addEventListener('click', (e) => {
      e.preventDefault();
      // console.log('clicked');
      // this.switchContent();
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

whoami.init();


