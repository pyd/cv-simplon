// dark/light theme manager
const theme = {
    // set theme : keep theme name in storage and set <html> class
    set : (name) => {
        localStorage.setItem('theme', name);
        document.documentElement.className = name;
    },
    // switch theme
    toggle: () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            this.set('theme-light');
        } else {
            this.set('theme-dark');
        }
    },
}