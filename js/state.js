window.appState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isLoggedIn: !!localStorage.getItem('user'),
    lang: localStorage.getItem('appLang') || 'uk',
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    
    setLang: function(newLang) {
        this.lang = newLang;
        localStorage.setItem('appLang', newLang);
        AppRender.init();
    },
    
    login: function(userData) {
        this.user = userData;
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(userData));
        AppRender.init();
    },
    
    logout: function() {
        localStorage.removeItem('user');
        this.user = null;
        this.isLoggedIn = false;
        AppRender.init();
    }
};
