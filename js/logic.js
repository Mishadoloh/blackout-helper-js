

"use strict";

const DIFFICULTY_LEVELS = {
    1: "Easy (Без світла)",
    2: "Medium (Потрібен газ)",
    3: "Hard (Повний шеф-кухар)"
};

window.recipesData = [
    { 
        id: 1, 
        title: "Омлет Survival", 
        difficulty: 1, 
        speed: 10, 
        ingredients: [
            { name: "Яйця", price: 65 },
            { name: "Молоко", price: 35 },
            { name: "Масло", price: 40 }
        ] 
    },
    { 
        id: 2, 
        title: "Паста Карбонара", 
        difficulty: 2, 
        speed: 25, 
        ingredients: [
            { name: "Спагеті", price: 70 },
            { name: "Бекон", price: 150 },
            { name: "Сир", price: 120 },
            { name: "Вершки", price: 60 }
        ] 
    },
    { 
        id: 3, 
        title: "Борщ Домашній", 
        difficulty: 3, 
        speed: 120, 
        ingredients: [
            { name: "Яловичина", price: 280 },
            { name: "Буряк", price: 25 },
            { name: "Картопля", price: 30 },
            { name: "Капуста", price: 20 },
            { name: "Сметана", price: 45 }
        ] 
    },
    { 
        id: 4, 
        title: "Кус-кус з овочами", 
        difficulty: 1, 
        speed: 5, 
        ingredients: [
            { name: "Кус-кус", price: 85 },
            { name: "Олія", price: 60 },
            { name: "Спеції", price: 15 }
        ] 
    }
];

window.appState = {
    isLoggedIn: false,
    currentUser: null,
    cart: [],
    sortBy: 'default',
    
    signIn: function(email, password) {
        console.log(`Attempting login for: ${email}`);
        if (email.length > 5 && password.length >= 4) {
            this.isLoggedIn = true;
            this.currentUser = email.split('@')[0];
            return true;
        }
        return false;
    },

    signOut: function() {
        this.isLoggedIn = false;
        this.cart = [];
        window.location.reload();
    },

    getSortedRecipes: function() {
        let sorted = [...window.recipesData];
        
        const strategy = {
            'difficulty': (a, b) => a.difficulty - b.difficulty,
            'speed': (a, b) => a.speed - b.speed,
            'price': (a, b) => this.calculateRecipePrice(a) - this.calculateRecipePrice(b),
            'default': (a, b) => a.id - b.id
        };

        return sorted.sort(strategy[this.sortBy] || strategy['default']);
    },

    addIngredientsToCart: function(recipeId) {
        const recipe = window.recipesData.find(r => r.id === recipeId);
        
        if (!recipe) {
            console.error("Critical: Recipe not found!");
            return;
        }

        const itemsToAdd = recipe.ingredients.map(ing => ({
            ...ing,
            id: Date.now() + Math.random(),
            from: recipe.title
        }));

        this.cart = [...this.cart, ...itemsToAdd];
        
        if (window.AppRender) {
            window.AppRender.updateCartCounter();
            console.log(`Added ${itemsToAdd.length} items to cart.`);
        }
    },


    addUserIngredient: function(name, price) {
        const cleanName = name.trim();
        const numericPrice = parseFloat(price);

        if (!cleanName || isNaN(numericPrice) || numericPrice <= 0) {
            alert("Помилка: Введіть коректні дані (назва та ціна > 0)");
            return;
        }

        const userItem = {
            id: Date.now(),
            name: cleanName,
            price: numericPrice,
            from: "Власний вибір"
        };

        this.cart.push(userItem);
        
        if (window.AppRender) {
            window.AppRender.updateCartCounter();
            window.AppRender.showTab('cart');
        }
    },

    removeFromCart: function(uniqueId) {
        this.cart = this.cart.filter(item => item.id !== uniqueId);
        if (window.AppRender) {
            window.AppRender.updateCartCounter();
            window.AppRender.showTab('cart');
        }
    },

    calculateRecipePrice: function(recipe) {
        return recipe.ingredients.reduce((total, ing) => total + ing.price, 0);
    },

    getTotalCartPrice: function() {
        return this.cart.reduce((total, item) => total + item.price, 0);
    }
};

window.handleSort = function(criteria) {
    console.log(`Sorting triggered: ${criteria}`);
    window.appState.sortBy = criteria;
    if (window.AppRender) {
        window.AppRender.showTab('recipes');
    }
};

console.log("Logic Engine v6.2 loaded successfully. Status: Ready.");
