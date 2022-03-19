// dark/light theme manager
const theme = {
    // element : ball moving back ad forth when switch is clicked
    ball : null,

    init : function() {
        // console.log('theme is ', localStorage.setItem('theme', name));
        this.ball = document.querySelector('#switch-container .switch .ball');
    },
    // set theme : keep theme name in storage and set <html> class
    set : function(name) {
        localStorage.setItem('theme', name);
        document.documentElement.className = name;
    },
    // switch theme
    toggle: function() {

        if (localStorage.getItem('theme') === 'theme-dark') {
            // console.log('stored theme is dark');
            this.set('theme-light');
            this.ball.classList.remove('darkMode');
        } else {
            // console.log('stored theme is light');
            this.set('theme-dark');
            this.ball.classList.add('darkMode');
        }
    },
}

theme.init();


