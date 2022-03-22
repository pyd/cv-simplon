// dark/light theme manager
// bg and text colors are stored in 2 CSS classes : .theme-light and .theme-dark
// theme is set by adding one class to the <html> element
const theme = {
  // click on the switch triggers the ball translation
  ballEl : null,
  // current theme key in local storage
  key : 'theme',
  // stored value for dark theme
  darkValue : 'theme-dark',
  // stored value for light theme
  lightValue : 'theme-light',
  init : function() {
    this.ballEl = document.querySelector('#switch-container .switch .ball');
    // set theme according to its stored name or default to light
    const currentTheme = localStorage.getItem('theme');
    currentTheme === null ? this.set(this.lightValue) : this.set(currentTheme);
  },
  // set theme : store theme name and update CSS
  set : function(name) {
    localStorage.setItem('theme', name);
    document.documentElement.className = name;
  },
  // current stored theme is the dark one
  isDark : function() {
    return localStorage.getItem('theme') === this.darkValue;
  },
  toggle: function() {
    this.isDark() ? this.set(this.lightValue) : this.set(this.darkValue);
    this.ballEl.classList.toggle('darkMode');
  }
}
  
// the whoami element
// when clicked toggles between identity and profile content
const whoami = {
  el : null,
  identityEl : null,
  profileEl : null,
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


