
import { Category, Product, User } from '../types';

export const MOCK_USER: User = {
  id: 123456,
  name: "Алексей Смирнов",
  avatarUrl: "https://picsum.photos/id/64/200/200",
  points: 340,
  lifetimePoints: 420,
  level: "Бариста-Шеф",
  nextLevelPoints: 500,
  referralCode: "COFFEE123"
};

export const CATEGORIES: Category[] = [
  { id: 'cold_coffee', name: 'Холодный кофе' },
  { id: 'lemonades', name: 'Лимонады' },
  { id: 'homemade_tea', name: 'Домашний чай' },
  { id: 'milkshakes', name: 'Милкшейки' },
  { id: 'smoothies', name: 'Смузи' },
  { id: 'fresh_juices', name: 'Свежевыжатые соки' },
];

export const PRODUCTS: Product[] = [
  // --- ЛИМОНАДЫ ---
  {
    id: 1,
    name: "Мохито классический",
    description: "Освежающий лимонад классический",
    price: 240,
    categoryId: "lemonades",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 2,
    name: "Вишня питахайя",
    description: "Лимонад с вишней и питахайей",
    price: 240,
    categoryId: "lemonades",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 3,
    name: "Мохито клубничный",
    description: "Лимонад с клубникой",
    price: 240,
    categoryId: "lemonades",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 4,
    name: "Манго личи",
    description: "Лимонад с манго и личи",
    price: 240,
    categoryId: "lemonades",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 5,
    name: "Киви яблоко",
    description: "Лимонад с киви и яблоком",
    price: 240,
    categoryId: "lemonades",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 6,
    name: "Грейпфрут клубника",
    description: "Лимонад с грейпфрутом и клубникой",
    price: 240,
    categoryId: "lemonades",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },

  // --- ХОЛОДНЫЙ КОФЕ ---
  {
    id: 7,
    name: "Айс Латте",
    description: "Холодный латте со льдом",
    price: 220,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 8,
    name: "Бамбл апельсин",
    description: "Кофе с апельсином",
    price: 250,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 9,
    name: "Бамбл грейпфрут",
    description: "Кофе с грейпфрутом",
    price: 250,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 10,
    name: "Эспрессо тоник",
    description: "Эспрессо с тоником",
    price: 250,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 11,
    name: "Айс Матча",
    description: "Холодная матча",
    price: 250,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 12,
    name: "Фраппе Милка",
    description: "Фраппе с милкой",
    price: 270,
    categoryId: "cold_coffee",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },

  // --- ДОМАШНИЙ ЧАЙ ---
  {
    id: 13,
    name: "Облепиховый",
    description: "Домашний чай с облепихой",
    price: 220,
    categoryId: "homemade_tea",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 14,
    name: "Алое киви",
    description: "Домашний чай с алоэ и киви",
    price: 220,
    categoryId: "homemade_tea",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 15,
    name: "Личи гранат",
    description: "Домашний чай с личи и гранатом",
    price: 220,
    categoryId: "homemade_tea",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 16,
    name: "Витаминный заряд",
    description: "Домашний чай витаминами",
    price: 220,
    categoryId: "homemade_tea",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },

  // --- МИЛКШЕЙКИ ---
  {
    id: 17,
    name: "Ванильный",
    description: "Ванильный милкшейк",
    price: 240,
    categoryId: "milkshakes",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 18,
    name: "Шоколадный",
    description: "Шоколадный милкшейк",
    price: 240,
    categoryId: "milkshakes",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 19,
    name: "Какао банан",
    description: "Милкшейк с какао и бананом",
    price: 240,
    categoryId: "milkshakes",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },

  // --- СМУЗИ ---
  {
    id: 20,
    name: "Смузи Гранат малина",
    description: "Смузи с гранатом и малиной",
    price: 280,
    categoryId: "smoothies",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 21,
    name: "Смузи Финиковый",
    description: "Смузи с финиками",
    price: 280,
    categoryId: "smoothies",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 22,
    name: "Облако ягод",
    description: "Ягодный смузи",
    price: 280,
    categoryId: "smoothies",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },

  // --- СВЕЖЕВЫЖАТЫЕ СОКИ ---
  {
    id: 23,
    name: "Апельсиновый фреш",
    description: "Свежевыжатый апельсиновый сок",
    price: 300,
    categoryId: "fresh_juices",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 24,
    name: "Грейпфрутовый фреш",
    description: "Свежевыжатый грейпфрутовый сок",
    price: 300,
    categoryId: "fresh_juices",
    imageUrl: "https://i.postimg.cc/jqLBqZM1/Branc-Photoroom.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
];
