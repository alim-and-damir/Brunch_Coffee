
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
  { id: 'desserts', name: 'Десерты' },
];

export const PRODUCTS: Product[] = [
  // --- ЛИМОНАДЫ ---
  {
    id: 1,
    name: "Мохито классический",
    description: "Освежающий лимонад классический",
    price: 240,
    categoryId: "lemonades",
    imageUrl: "/images/mohito-classic.jpg",
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
    imageUrl: "/images/cherry-pitahaya.jpg",
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
    imageUrl: "/images/mohito-strawberry.jpg",
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
    imageUrl: "/images/mango-lichi.jpg",
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
    imageUrl: "/images/kiwi-apple.jpg",
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
    imageUrl: "/images/grapefruit-strawberry.jpg",
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
    imageUrl: "/images/ice-latte.jpg",
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
    imageUrl: "/images/bumble-orange.jpg",
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
    imageUrl: "/images/bumble-grapefruit.jpg",
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
    imageUrl: "/images/espresso-tonic.jpg",
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
    imageUrl: "/images/ice-matcha.jpg",
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
    imageUrl: "/images/frappe-milka.jpg",
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
    imageUrl: "/images/sea-buckthorn.jpg",
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
    imageUrl: "/images/aloe-kiwi.jpg",
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
    imageUrl: "/images/lichi-pomegranate.jpg",
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
    imageUrl: "/images/vitamin-charge.jpg",
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
    imageUrl: "/images/vanilla.jpg",
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
    imageUrl: "/images/chocolate.jpg",
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
    imageUrl: "/images/cocoa-banana.jpg",
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
    imageUrl: "/images/smoothie-pomegranate-raspberry.jpg",
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
    imageUrl: "/images/smoothie-date.jpg",
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
    imageUrl: "/images/berry-cloud.jpg",
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
    imageUrl: "/images/orange-fresh.jpg",
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
    imageUrl: "/images/grapefruit-fresh.jpg",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },

  // --- ДЕСЕРТЫ ---
  {
    id: 25,
    name: "Шоколадный чизкейк",
    description: "Нежный шоколадный чизкейк",
    price: 350,
    categoryId: "desserts",
    imageUrl: "/images/chocolate-cheesecake.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 26,
    name: "Медовик",
    description: "Классический медовый торт",
    price: 350,
    categoryId: "desserts",
    imageUrl: "/images/honey-cake.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 27,
    name: "Банановый кекс",
    description: "Сладкий банановый кекс",
    price: 350,
    categoryId: "desserts",
    imageUrl: "/images/banana-cake.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 28,
    name: "Карамельный эклер",
    description: "Эклер с карамельной начинкой",
    price: 250,
    categoryId: "desserts",
    imageUrl: "/images/caramel-eclair.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 29,
    name: "Лимонный чизкейк",
    description: "Освежающий лимонный чизкейк",
    price: 300,
    categoryId: "desserts",
    imageUrl: "/images/lemon-cheesecake.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
  {
    id: 30,
    name: "Шоколадно-арахисовое печенье",
    description: "Печенье с шоколадом и арахисом",
    price: 200,
    categoryId: "desserts",
    imageUrl: "/images/chocolate-peanut-cookie.png",
    modifiers: {
      milks: [{ id: 'reg', name: 'Обычное', price: 0 }, { id: 'alt', name: 'Альтернативное молоко', price: 60 }]
    }
  },
];
