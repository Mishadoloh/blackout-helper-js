window.recipesData = [
    {
        id: 1,
        title: "Гречка з тунцем та огірком",
        category: "dinner",
        power: "no-electric",
        time: 15,
        difficulty: "easy",
        image: "https://via.placeholder.com/300x200?text=Grechka",
        ingredients: [
            { name: "Гречка (ядриця)", defaultAmount: 1, unit: "уп" },
            { name: "Тунець консервований", defaultAmount: 1, unit: "банка" },
            { name: "Огірок свіжий", defaultAmount: 2, unit: "шт" }
        ],
        instructions: "Залийте гречку окропом у термосі на 30 хв. Додайте тунець та нарізаний огірок."
    },
    {
        id: 2,
        title: "Омлет з овочами",
        category: "breakfast",
        power: "electric",
        time: 15,
        difficulty: "easy",
        image: "https://via.placeholder.com/300x200?text=Omlet",
        ingredients: [
            { name: "Яйця курячі", defaultAmount: 3, unit: "шт" },
            { name: "Молоко", defaultAmount: 0.5, unit: "л" },
            { name: "Помідори", defaultAmount: 2, unit: "шт" }
        ],
        instructions: "Збийте яйця з молоком. Смажте на розігрітій пательні з томатами."
    },
    {
        id: 3,
        title: "Кус-кус з нутом (Швидкий)",
        category: "lunch",
        power: "no-electric",
        time: 15,
        difficulty: "easy",
        image: "https://via.placeholder.com/300x200?text=Couscous",
        ingredients: [
            { name: "Кус-кус", defaultAmount: 1, unit: "уп" },
            { name: "Нут консервований", defaultAmount: 1, unit: "банка" },
            { name: "Олія оливкова", defaultAmount: 1, unit: "пляшка" }
        ],
        instructions: "Залийте кус-кус окропом на 5 хв. Додайте нут та олію."
    }
];

console.log("Database Status: Recipes loaded. Ready for filtering.");
