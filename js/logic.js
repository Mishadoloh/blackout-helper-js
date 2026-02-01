window.recipesData = [
    { 
        id: 1, 
        title: "Омлет по-королівськи", 
        ingredients: [
            { name: "Яйця фермерські", price: 60 },
            { name: "Молоко 2.5%", price: 35 },
            { name: "Сир Чеддер", price: 45 }
        ] 
    },
    { 
        id: 2, 
        title: "Веганський Кус-кус", 
        ingredients: [
            { name: "Кус-кус добірний", price: 80 },
            { name: "Нут в соусі", price: 55 },
            { name: "Чері", price: 40 }
        ] 
    }
];

window.appState = {
    cart: [],
    isLoggedIn: false,
    currentUser: null,
    totalPrice: 0,
    
    updateTotal: function() {
        this.totalPrice = this.cart.reduce((sum, item) => sum + item.price, 0);
        const counter = document.getElementById('cart-count');
        if (counter) counter.innerText = this.cart.length;
    }
};

window.handleLogin = function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    
    if (email && pass.length >= 4) {
        window.appState.isLoggedIn = true;
        window.AppRender.init();
    } else {
        alert("Помилка реєстрації: перевірте дані");
    }
};

window.addToCart = function(recipeId) {
    const recipe = window.recipesData.find(r => r.id === recipeId);
    if (recipe) {
        recipe.ingredients.forEach(ing => {
            window.appState.cart.push({
                ...ing,
                from: recipe.title,
                timestamp: Date.now()
            });
        });
        window.appState.updateTotal();
        alert(`Інгредієнти до "${recipe.title}" додано!`);
    }
};

window.confirmPayment = function() {
    if (window.appState.cart.length === 0) return alert("Кошик порожній!");
    
    const card = document.getElementById('card-num').value;
    if (card.length < 16) return alert("Введіть коректну карту");

    alert(`Оплата ${window.appState.totalPrice} ₴ пройшла успішно!`);
    window.appState.cart = [];
    window.appState.updateTotal();
    window.AppRender.showTab('recipes');
};
