window.renderFoodSection = function(container, data) {
    container.innerHTML = `
        <div class="search-box">
            <input type="text" id="foodSearch" placeholder=" Що хочеш знайти? (напр. гречка)" oninput="runFoodLogic()">
        </div>
        <div class="filter-group">
            <button class="f-btn active" onclick="setFoodFilter('all')">Все</button>
            <button class="f-btn" onclick="setFoodFilter('cold')"> Без плити/тепла</button>
            <button class="f-btn" onclick="setFoodFilter('fast')"> Швидко (5 хв)</button>
        </div>
        <div id="food-results"></div>
    `;
    window.allRecipes = data.items;
    runFoodLogic();
};

let currentFilter = 'all';

window.setFoodFilter = function(filter) {
    currentFilter = filter;
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    runFoodLogic();
};

window.runFoodLogic = function() {
    const query = document.getElementById('foodSearch').value.toLowerCase();
    const results = document.getElementById('food-results');
    
    const filtered = window.allRecipes.filter(item => {
        const matchesSearch = item.toLowerCase().includes(query);
        const isCold = item.toLowerCase().includes("холод") || item.toLowerCase().includes("без") || item.toLowerCase().includes("термос");
        const isFast = item.toLowerCase().includes("5") || item.toLowerCase().includes("хв");

        if (currentFilter === 'cold') return matchesSearch && isCold;
        if (currentFilter === 'fast') return matchesSearch && isFast;
        return matchesSearch;
    });

    results.innerHTML = filtered.map(item => `<div class="recipe-card fade-item">${item}</div>`).join('');
};
