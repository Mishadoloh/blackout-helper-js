window.appState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isLoggedIn: !!localStorage.getItem('user'),
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    filters: {
        power: 'all',
        time: 'all'
    },
    save: function() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
        localStorage.setItem('user', JSON.stringify(this.user));
    },
    clear: function() {
        localStorage.clear();
        this.user = null;
        this.isLoggedIn = false;
        this.cart = [];
        this.favorites = [];
    }
};

window.Utils = {
    formatPrice: (amount) => `${amount} грн (демо)`,
    generateId: () => Math.random().toString(36).substr(2, 9),
    validateEmail: (email) => email.includes('@') && email.length > 5
};

console.log("Utils engine: Toolkit ready for action.");
console.log("State engine: Global state initialized.", window.appState);
