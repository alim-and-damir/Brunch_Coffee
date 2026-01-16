
import { Category, Product, User } from '../types';

export const MOCK_USER: User = {
  id: 123456,
  name: "Алексей Смирнов",
  avatarUrl: "https://picsum.photos/id/64/200/200",
  points: 340,
  lifetimePoints: 420, // Прогресс за все время
  level: "Бариста-Шеф", // Исправлено для соответствия списку
  nextLevelPoints: 500,
  referralCode: "COFFEE123"
};

export const CATEGORIES: Category[] = [
  { id: 'leaf_tea', name: 'ЛИСТОВОЙ ЧАЙ' },
  { id: 'homemade_tea', name: 'ДОМАШНИЙ ЧАЙ' },
  { id: 'cold_coffee', name: 'КОФЕ #colddrinks' },
  { id: 'fresh', name: 'ФРЕШИ' },
  { id: 'milkshakes', name: 'МИЛКШЕЙКИ' },
  { id: 'lemonades', name: 'ЛИМОНАДЫ' },
  { id: 'smoothies', name: 'СМУЗИ' },
  { id: 'hot_coffee', name: 'КОФЕ #hotdrinks' },
  { id: 'dessert_drinks', name: 'ДЕСЕРТНЫЕ' },
];

export const PRODUCTS: Product[] = [
  // --- ЛИСТОВОЙ ЧАЙ ---
  {
    id: 1,
    name: "Ассам",
    description: "Классический индийский чай с насыщенным вкусом",
    price: 200,
    categoryId: "leaf_tea",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      sizes: [{ id: 's', name: '200мл', price: 0 }, { id: 'l', name: '240мл', price: 40 }]
    }
  },
  {
    id: 2,
    name: "Ера грей",
    description: "Чай с бергамотом и цветами лаванды",
    price: 200,
    categoryId: "leaf_tea",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      sizes: [{ id: 's', name: '200мл', price: 0 }, { id: 'l', name: '240мл', price: 40 }]
    }
  },
  {
    id: 3,
    name: "Чабрец",
    description: "Травяной чай с чабрецом",
    price: 200,
    categoryId: "leaf_tea",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      sizes: [{ id: 's', name: '200мл', price: 0 }, { id: 'l', name: '240мл', price: 40 }]
    }
  },
  {
    id: 4,
    name: "Айва персик",
    description: "Фруктовый чай с вкусом айвы и персика",
    price: 200,
    categoryId: "leaf_tea",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      sizes: [{ id: 's', name: '200мл', price: 0 }, { id: 'l', name: '240мл', price: 40 }]
    }
  },
  {
    id: 5,
    name: "Вишневый пуэр",
    description: "Пуэр с вишней",
    price: 200,
    categoryId: "leaf_tea",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      sizes: [{ id: 's', name: '200мл', price: 0 }, { id: 'l', name: '240мл', price: 40 }]
    }
  },
  {
    id: 6,
    name: "Жасмин",
    description: "Зеленый чай с жасмином",
    price: 200,
    categoryId: "leaf_tea",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      sizes: [{ id: 's', name: '200мл', price: 0 }, { id: 'l', name: '240мл', price: 40 }]
    }
  },
  {
    id: 7,
    name: "Молочный улун",
    description: "Улун с молочным ароматом",
    price: 200,
    categoryId: "leaf_tea",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      sizes: [{ id: 's', name: '200мл', price: 0 }, { id: 'l', name: '240мл', price: 40 }]
    }
  },

  // --- ДОМАШНИЙ ЧАЙ ---
  {
    id: 8,
    name: "Имбирный апельсин",
    description: "Домашний чай с имбирем и апельсином",
    price: 240,
    categoryId: "homemade_tea",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      sizes: [{ id: 's', name: '240мл', price: 0 }, { id: 'l', name: '300мл', price: 60 }],
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 9,
    name: "Облепиховый",
    description: "Домашний чай с облепихой",
    price: 240,
    categoryId: "homemade_tea",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      sizes: [{ id: 's', name: '240мл', price: 0 }, { id: 'l', name: '300мл', price: 60 }],
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 10,
    name: "Абло кини",
    description: "Домашний чай с аблосом и киви",
    price: 240,
    categoryId: "homemade_tea",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      sizes: [{ id: 's', name: '240мл', price: 0 }, { id: 'l', name: '300мл', price: 60 }],
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 11,
    name: "Личи гранат",
    description: "Домашний чай с личи и гранатом",
    price: 240,
    categoryId: "homemade_tea",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      sizes: [{ id: 's', name: '240мл', price: 0 }, { id: 'l', name: '300мл', price: 60 }],
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },

  // --- КОФЕ #colddrinks ---
  {
    id: 12,
    name: "Айс латте",
    description: "Холодный латте со льдом",
    price: 240,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 13,
    name: "Фраппе",
    description: "Ледяной кофейный коктейль",
    price: 270,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 14,
    name: "Фраппе милка",
    description: "Фраппе с милкой",
    price: 290,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 15,
    name: "Кофейно-банановый смузи",
    description: "Смузи из кофе и банана",
    price: 290,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 16,
    name: "Бамбл апельсин",
    description: "Кофе с апельсином",
    price: 260,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 17,
    name: "Бамбл грейпфрут",
    description: "Кофе с грейпфрутом",
    price: 260,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 18,
    name: "Бамбл гранат",
    description: "Кофе с гранатом",
    price: 260,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 19,
    name: "Бамбл вишня",
    description: "Кофе с вишней",
    price: 260,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 20,
    name: "Бамбл на фреше апельсин",
    description: "Кофе на свежевыжатом апельсиновом соке",
    price: 420,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 21,
    name: "Бамбл на фреше грейпфрут",
    description: "Кофе на свежевыжатом грейпфрутовом соке",
    price: 420,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 22,
    name: "Эспрессо тоник",
    description: "Эспрессо с тоником",
    price: 260,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 23,
    name: "Айс матча",
    description: "Холодная матча",
    price: 250,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 24,
    name: "Кола брио классик",
    description: "Кола с классическим вкусом",
    price: 250,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png"
  },
  {
    id: 25,
    name: "Кола брио гранат",
    description: "Кола с гранатом",
    price: 250,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png"
  },
  {
    id: 26,
    name: "Кола брио вишня",
    description: "Кола с вишней",
    price: 250,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png"
  },
  {
    id: 27,
    name: "Кола брио кола",
    description: "Кола брио кола",
    price: 300,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png"
  },

  // --- ФРЕШИ ---
  {
    id: 28,
    name: "Апельсиновый",
    description: "Свежевыжатый апельсиновый сок",
    price: 300,
    categoryId: "fresh",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png"
  },
  {
    id: 29,
    name: "Грейпфрутовый",
    description: "Свежевыжатый грейпфрутовый сок",
    price: 300,
    categoryId: "fresh",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png"
  },

  // --- МИЛКШЕЙКИ ---
  {
    id: 30,
    name: "Банановый",
    description: "Милкшейк с бананом",
    price: 250,
    categoryId: "milkshakes",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 31,
    name: "Вишня шоколад",
    description: "Милкшейк с вишней и шоколадом",
    price: 250,
    categoryId: "milkshakes",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 32,
    name: "Соленый крекер",
    description: "Милкшейк со вкусом соленого крекера",
    price: 250,
    categoryId: "milkshakes",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 33,
    name: "Ванильный",
    description: "Ванильный милкшейк",
    price: 250,
    categoryId: "milkshakes",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 34,
    name: "Шоколадный",
    description: "Шоколадный милкшейк",
    price: 250,
    categoryId: "milkshakes",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 35,
    name: "Какао банан",
    description: "Милкшейк с какао и бананом",
    price: 250,
    categoryId: "milkshakes",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },

  // --- ЛИМОНАДЫ ---
  {
    id: 36,
    name: "Мохито",
    description: "Лимонад мохито",
    price: 250,
    categoryId: "lemonades",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png"
  },
  {
    id: 37,
    name: "Мохито клубничный",
    description: "Клубничный мохито",
    price: 250,
    categoryId: "lemonades",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png"
  },
  {
    id: 38,
    name: "Киви яблоко",
    description: "Лимонад с киви и яблоком",
    price: 250,
    categoryId: "lemonades",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png"
  },
  {
    id: 39,
    name: "Вишня питахайя",
    description: "Лимонад с вишней и питахайей",
    price: 250,
    categoryId: "lemonades",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png"
  },
  {
    id: 40,
    name: "Манго личи",
    description: "Лимонад с манго и личи",
    price: 250,
    categoryId: "lemonades",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png"
  },
  {
    id: 41,
    name: "Грейпфрут каюбинка",
    description: "Лимонад с грейпфрутом",
    price: 250,
    categoryId: "lemonades",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png"
  },

  // --- СМУЗИ ---
  {
    id: 42,
    name: "Ягодный",
    description: "Ягодный смузи",
    price: 280,
    categoryId: "smoothies",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 43,
    name: "Финиковый",
    description: "Смузи с финиками",
    price: 280,
    categoryId: "smoothies",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 44,
    name: "Вишня дайм",
    description: "Смузи с вишней и дайм",
    price: 280,
    categoryId: "smoothies",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 45,
    name: "Гранат малина",
    description: "Смузи с гранатом и малиной",
    price: 280,
    categoryId: "smoothies",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },

  // --- КОФЕ #hotdrinks ---
  {
    id: 46,
    name: "Эспрессо",
    description: "Классический эспрессо",
    price: 180,
    categoryId: "hot_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png"
  },
  {
    id: 47,
    name: "Флэт",
    description: "Флэт уайт",
    price: 200,
    categoryId: "hot_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 48,
    name: "Флэт гранат",
    description: "Флэт уайт с гранатом",
    price: 240,
    categoryId: "hot_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 49,
    name: "Американо",
    description: "Американо",
    price: 180,
    categoryId: "hot_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png"
  },
  {
    id: 50,
    name: "Капучино",
    description: "Классическое капучино",
    price: 220,
    categoryId: "hot_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      sizes: [{ id: 's', name: '220мл', price: 0 }, { id: 'l', name: '240мл', price: 20 }],
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 51,
    name: "Флэт уайт",
    description: "Флэт уайт",
    price: 220,
    categoryId: "hot_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 52,
    name: "Латте",
    description: "Классический латте",
    price: 240,
    categoryId: "hot_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 53,
    name: "Матча латте",
    description: "Латте с матчей",
    price: 240,
    categoryId: "hot_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 54,
    name: "Раф",
    description: "Кофе раф",
    price: 290,
    categoryId: "hot_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },

  // --- ДЕСЕРТНЫЕ ---
  {
    id: 55,
    name: "Раф угрен",
    description: "Раф с угреном",
    price: 350,
    categoryId: "dessert_drinks",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 56,
    name: "Кубинский мокко",
    description: "Кофе кубинский мокко",
    price: 250,
    categoryId: "dessert_drinks",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 57,
    name: "Бельгийский какао",
    description: "Горячий бельгийский какао",
    price: 250,
    categoryId: "dessert_drinks",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 58,
    name: "Горячий шоколад",
    description: "Классический горячий шоколад",
    price: 250,
    categoryId: "dessert_drinks",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  }
];
