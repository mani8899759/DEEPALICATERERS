export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Offerings' },
  { id: 'royal-hyderabadi', label: 'Royal Hyderabadi' },
  { id: 'north-indian', label: 'North Indian Feast' },
  { id: 'south-indian', label: 'South Indian Classics' },
  { id: 'live-counters', label: 'Live Chef Stations' },
  { id: 'desserts', label: 'Royal Desserts & Beverages' }
];

export const DIETARY_FILTERS = [
  { id: 'all', label: 'All Dietary' },
  { id: 'veg', label: 'Pure Vegetarian' },
  { id: 'non-veg', label: 'Non-Vegetarian' },
  { id: 'jain', label: 'Jain Special' }
];

export const MENU_ITEMS = [
  // Royal Hyderabadi
  {
    id: 'h-1',
    name: 'Hyderabadi Shahi Zafrani Mutton Biryani',
    category: 'royal-hyderabadi',
    dietary: 'non-veg',
    price: 480,
    unit: 'per plate',
    description: 'Slow dum-cooked tender mutton marinated in saffron, caramelized onions, mint, and aged basmati rice.',
    tags: ['Bestseller', 'Chef Special', 'Royal Signature'],
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Prime Mutton', 'Kashmiri Saffron', 'Aged Basmati', 'Pure Ghee', 'Handground Spices']
  },
  {
    id: 'h-2',
    name: 'Dum Pukht Hyderabadi Veg Biryani',
    category: 'royal-hyderabadi',
    dietary: 'veg',
    price: 360,
    unit: 'per plate',
    description: 'Seasonal garden vegetables, paneer cubes, and aromatic rice seal-cooked in hand-drawn clay handi.',
    tags: ['Pure Veg', 'Traditional'],
    image: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Fresh Vegetables', 'Malai Paneer', 'Basmati', 'Saffron', 'Whole Spices']
  },
  {
    id: 'h-3',
    name: 'Mirchi Ka Salan & Double Raita',
    category: 'royal-hyderabadi',
    dietary: 'veg',
    price: 120,
    unit: 'per portion',
    description: 'Classic Bhavnagri chillies cooked in sesame, peanut, and coconut gravy alongside rich pomegranate mint raita.',
    tags: ['Essential Side', 'Traditional'],
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Bhavnagri Chillies', 'White Sesame', 'Peanuts', 'Desiccated Coconut', 'Curd']
  },
  {
    id: 'h-4',
    name: 'Nizami Shikampuri Kebab',
    category: 'royal-hyderabadi',
    dietary: 'non-veg',
    price: 380,
    unit: 'per portion (4 pcs)',
    description: 'Velvety minced lamb kebabs stuffed with hung curd, green chillies, and fried mint leaves, grilled over charcoal.',
    tags: ['Royal Starter', 'Chef Special'],
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Fine Lamb Mince', 'Hung Curd', 'Mint', 'Green Chillies', 'Nizami Masala']
  },

  // North Indian
  {
    id: 'ni-1',
    name: 'Dal Deewan-e-Khas (24-Hour Dum Dal)',
    category: 'north-indian',
    dietary: 'veg',
    price: 290,
    unit: 'per portion',
    description: 'Black lentils slow-cooked overnight over tandoor embers, finished with white butter and fresh cream.',
    tags: ['Signature Veg', 'Comfort Classic'],
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Urad Dal', 'White Butter', 'Tomato Puree', 'Kasturi Methi', 'Fresh Cream']
  },
  {
    id: 'ni-2',
    name: 'Paneer Makhani Saffron Gravy',
    category: 'north-indian',
    dietary: 'veg',
    price: 340,
    unit: 'per portion',
    description: 'Char-grilled cottage cheese cubes simmered in a silky tomato butter gravy laced with Kashmiri chilli.',
    tags: ['Crowd Favorite', 'Pure Veg'],
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Farm Fresh Paneer', 'Honey', 'Ripe Tomatoes', 'Kasuri Methi', 'Butter']
  },
  {
    id: 'ni-3',
    name: 'Murg Angara Tikka',
    category: 'north-indian',
    dietary: 'non-veg',
    price: 420,
    unit: 'per portion (6 pcs)',
    description: 'Smoked chicken morsels marinated in mustard oil, red chilli paste, and roasted garlic.',
    tags: ['Tandoor Special'],
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Chicken Thighs', 'Mustard Oil', 'Mathania Chilli', 'Garlic', 'Charcoal Smoke']
  },

  // South Indian Classics
  {
    id: 'si-1',
    name: 'Guntur Telangana Chilly Royyala Fry (Prawns)',
    category: 'south-indian',
    dietary: 'non-veg',
    price: 520,
    unit: 'per portion',
    description: 'Juicy tiger prawns tossed with Guntur red chillies, curry leaves, and freshly cracked black pepper.',
    tags: ['Spicy Coastal', 'Seafood Special'],
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Tiger Prawns', 'Guntur Chillies', 'Curry Leaves', 'Pepper', 'Shallots']
  },
  {
    id: 'si-2',
    name: 'Classic Avakai & Curd Rice Station',
    category: 'south-indian',
    dietary: 'veg',
    price: 180,
    unit: 'per portion',
    description: 'Comforting tempered curd rice with pomegranates, green chillies, served alongside 5 heritage pickles.',
    tags: ['Heritage Essential', 'Comfort'],
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Sona Masoori Rice', 'Fresh Milk Curd', 'Mustard Seeds', 'Pomegranate', 'Avakai Mango Pickle']
  },

  // Live Counters
  {
    id: 'lc-1',
    name: 'Live Chat Chatpati Counter',
    category: 'live-counters',
    dietary: 'veg',
    price: 250,
    unit: 'per guest',
    description: 'Live interactive counter offering Pani Puri (5 flavored waters), Dahi Puri, Sev Puri, and Warm Aloo Tikki Chat.',
    tags: ['Live Chef Station', 'Interactive'],
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Puri', 'Mint Water', 'Hing Water', 'Tamarind Chutney', 'Sprouted Moong']
  },
  {
    id: 'lc-2',
    name: 'Live Nizam Flambé Kebab Bar',
    category: 'live-counters',
    dietary: 'non-veg',
    price: 450,
    unit: 'per guest',
    description: 'Live charcoal grill & flambé setup featuring Galouti Kebabs, Boti Kebabs, and Malai Tikka with rum flambé show.',
    tags: ['Live Showpiece', 'Luxury Station'],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Mutton Galouti', 'Chicken Malai', 'Charcoal', 'Sheermal Bread', 'Mint Chutney']
  },

  // Desserts
  {
    id: 'd-1',
    name: 'Shahi Tukda & Warm Rabri',
    category: 'desserts',
    dietary: 'veg',
    price: 220,
    unit: 'per serving',
    description: 'Ghee-crisped brioche soaked in saffron cardamom syrup, topped with thick reduced pistachios rabri and silver leaf.',
    tags: ['Nizami Royal Dessert'],
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Brioche', 'Pure Ghee', 'Cardamom', 'Condensed Rabri', 'Silver Leaf (Vark)', 'Pistachio']
  },
  {
    id: 'd-2',
    name: 'Hyderabadi Khubani Ka Meetha',
    category: 'desserts',
    dietary: 'veg',
    price: 200,
    unit: 'per serving',
    description: 'Traditional stewed Turkish apricots infused with rosewater, served with fresh clotted malai cream.',
    tags: ['Heritage Dessert'],
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Dried Apricots', 'Apricot Kernels', 'Rose Water', 'Fresh Malai']
  }
];
