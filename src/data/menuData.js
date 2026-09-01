export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Specialties' },
  { id: 'royal-hyderabadi', label: 'Royal Hyderabadi' },
  { id: 'tandoor-starters', label: 'Live Tandoor & Kebabs' },
  { id: 'satvik-veg', label: 'Satvik Vegetarian' },
  { id: 'north-curries', label: 'North Indian Curries' },
  { id: 'sweets-desserts', label: 'Heritage Desserts' },
];

export const DIETARY_FILTERS = [
  { id: 'all', label: 'All Diets' },
  { id: 'veg', label: 'Pure Veg' },
  { id: 'non-veg', label: 'Non-Veg' },
  { id: 'jain', label: 'Jain Friendly' },
];

export const MENU_ITEMS = [
  {
    id: 'dish-1',
    name: 'Hyderabadi Shahi Zafrani Mutton Biryani',
    category: 'royal-hyderabadi',
    dietary: 'non-veg',
    price: 480,
    unit: 'per plate',
    image: '/assets/images/hero_biryani.jpg',
    description: 'Aged long-grain basmati rice, Kashmiri saffron, and tender prime mutton slow-cooked in handis under sealed dough crusts over charcoal.',
    tags: ['Best Seller', 'Royal Recipe', 'Charcoal Dum'],
    ingredients: ['Prime Mutton', 'Kashmiri Saffron', '2-Year Basmati', 'Pure Desi Ghee', 'Fresh Mint']
  },
  {
    id: 'dish-2',
    name: 'Nizami Shikampuri Mutton Kebab',
    category: 'tandoor-starters',
    dietary: 'non-veg',
    price: 380,
    unit: 'portion (4 pcs)',
    image: '/assets/images/kebab_starter.jpg',
    description: 'Pan-fried melt-in-mouth spiced mutton patties stuffed with tangy yogurt, green chilies, and fresh coriander.',
    tags: ['Chef Special', 'Starters'],
    ingredients: ['Minced Mutton', 'Hung Curd', 'Green Chili', 'Shahi Garam Masala']
  },
  {
    id: 'dish-3',
    name: 'Paneer Makhani Deewan-e-Khas',
    category: 'satvik-veg',
    dietary: 'veg',
    price: 340,
    unit: 'portion',
    image: '/assets/images/veg_specialty.jpg',
    description: 'Cottage cheese cubes simmered in a velvet tomato, cashew, and white butter gravy with subtle kasuri methi aromatics.',
    tags: ['Satvik Veg', 'Mild Spiced'],
    ingredients: ['Fresh Cottage Cheese', 'Cashew Paste', 'White Butter', 'Dried Fenugreek']
  },
  {
    id: 'dish-4',
    name: 'Shahi Tukda & Warm Saffron Rabri',
    category: 'sweets-desserts',
    dietary: 'veg',
    price: 220,
    unit: 'serving',
    image: '/assets/images/royal_dessert.jpg',
    description: 'Ghee-crisped bread slices soaked in cardamom syrup and topped with thick rabri, silver foil, and stewed Turkish apricots.',
    tags: ['Heritage Dessert', 'Sweet'],
    ingredients: ['Full Cream Milk', 'Saffron', 'Turkish Apricots', 'Chironji Nuts']
  },
  {
    id: 'dish-5',
    name: 'Hyderabadi Dum Chicken Biryani',
    category: 'royal-hyderabadi',
    dietary: 'non-veg',
    price: 390,
    unit: 'per plate',
    image: '/assets/images/menu_chicken_biryani.jpg',
    description: 'Succulent chicken marinated overnight in fried onions, green herbs, and spices, slow-cooked with basmati rice.',
    tags: ['Popular Choice'],
    ingredients: ['Farm Chicken', 'Long Basmati', 'Biryani Masala', 'Golden Shallots']
  },
  {
    id: 'dish-6',
    name: 'Dal Makhani Saffron Handi',
    category: 'north-curries',
    dietary: 'veg',
    price: 290,
    unit: 'portion',
    image: '/assets/images/menu_dal_makhani.jpg',
    description: 'Black lentils slow-cooked overnight over live coals, finished with fresh butter and farm cream.',
    tags: ['Comfort Food', 'Classic'],
    ingredients: ['Black Urad Dal', 'Butter', 'Fresh Tomato Puree', 'Cream']
  },
  {
    id: 'dish-7',
    name: 'Tandoori Angara Paneer Tikka',
    category: 'tandoor-starters',
    dietary: 'veg',
    price: 320,
    unit: 'portion',
    image: '/assets/images/menu_paneer_tikka.jpg',
    description: 'Char-grilled cottage cheese marinated in mustard oil, roasted cumin, and hung curd.',
    tags: ['Live Counter', 'Tandoor'],
    ingredients: ['Malai Paneer', 'Mustard Oil', 'Bell Peppers', 'Carom Seeds']
  },
  {
    id: 'dish-8',
    name: 'Khubani Ka Meetha with Clotted Malai',
    category: 'sweets-desserts',
    dietary: 'veg',
    price: 210,
    unit: 'serving',
    image: '/assets/images/menu_apricot_delight.jpg',
    description: 'Authentic Nizam-style stewed apricots garnished with almond kernels and fresh clotted malai.',
    tags: ['Hyderabadi Icon'],
    ingredients: ['Imported Apricots', 'Clotted Cream', 'Almond Seeds']
  },
  {
    id: 'dish-9',
    name: 'South Indian Satvik Banana Leaf Thali',
    category: 'satvik-veg',
    dietary: 'jain',
    price: 360,
    unit: 'per leaf thali',
    image: '/assets/images/menu_south_thali.jpg',
    description: 'Complete 12-item Satvik lunch spread featuring Sambar, Rasam, Avial, Kootu, and Payasam on fresh banana leaf.',
    tags: ['Jain Option', 'Traditional'],
    ingredients: ['Steamed Sona Masuri', 'Drumstick Sambar', 'Pepper Rasam', 'Elaneer Payasam']
  }
];
