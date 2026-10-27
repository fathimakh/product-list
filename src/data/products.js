// Mock product catalogue used by the product listing page.
// Every item follows the shape required by the assignment:
// { id, name, price, category, rating, image }
const IMAGE_BASE_URL = 'https://cdn.dummyjson.com/product-images'

const products = [
  // Electronics
  {
    id: 1,
    name: 'iPhone 13 Pro',
    price: 79999,
    category: 'Electronics',
    rating: 4.7,
    image: `${IMAGE_BASE_URL}/smartphones/iphone-13-pro/thumbnail.webp`,
  },
  {
    id: 2,
    name: 'Samsung Galaxy S10',
    price: 34999,
    category: 'Electronics',
    rating: 4.2,
    image: `${IMAGE_BASE_URL}/smartphones/samsung-galaxy-s10/thumbnail.webp`,
  },
  {
    id: 3,
    name: 'Apple MacBook Pro 14"',
    price: 169900,
    category: 'Electronics',
    rating: 4.8,
    image: `${IMAGE_BASE_URL}/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp`,
  },
  {
    id: 4,
    name: 'Samsung Galaxy Tab S8+',
    price: 59999,
    category: 'Electronics',
    rating: 4.4,
    image: `${IMAGE_BASE_URL}/tablets/samsung-galaxy-tab-s8-plus-grey/thumbnail.webp`,
  },

  // Accessories
  {
    id: 5,
    name: 'Apple AirPods',
    price: 12900,
    category: 'Accessories',
    rating: 4.5,
    image: `${IMAGE_BASE_URL}/mobile-accessories/apple-airpods/thumbnail.webp`,
  },
  {
    id: 6,
    name: 'Beats Flex Wireless Earphones',
    price: 3999,
    category: 'Accessories',
    rating: 4.1,
    image: `${IMAGE_BASE_URL}/mobile-accessories/beats-flex-wireless-earphones/thumbnail.webp`,
  },
  {
    id: 7,
    name: 'Apple MagSafe Battery Pack',
    price: 8900,
    category: 'Accessories',
    rating: 3.9,
    image: `${IMAGE_BASE_URL}/mobile-accessories/apple-magsafe-battery-pack/thumbnail.webp`,
  },
  {
    id: 8,
    name: 'Amazon Echo Plus',
    price: 7499,
    category: 'Accessories',
    rating: 4.3,
    image: `${IMAGE_BASE_URL}/mobile-accessories/amazon-echo-plus/thumbnail.webp`,
  },

  // Fashion
  {
    id: 9,
    name: 'Nike Air Jordan 1',
    price: 12795,
    category: 'Fashion',
    rating: 4.8,
    image: `${IMAGE_BASE_URL}/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp`,
  },
  {
    id: 10,
    name: 'Puma Future Rider Trainers',
    price: 5999,
    category: 'Fashion',
    rating: 4.4,
    image: `${IMAGE_BASE_URL}/mens-shoes/puma-future-rider-trainers/thumbnail.webp`,
  },
  {
    id: 11,
    name: 'Brown Leather Belt Watch',
    price: 3299,
    category: 'Fashion',
    rating: 4.0,
    image: `${IMAGE_BASE_URL}/mens-watches/brown-leather-belt-watch/thumbnail.webp`,
  },
  {
    id: 12,
    name: 'Classic Sunglasses',
    price: 1499,
    category: 'Fashion',
    rating: 3.8,
    image: `${IMAGE_BASE_URL}/sunglasses/classic-sun-glasses/thumbnail.webp`,
  },

  // Home & Kitchen
  {
    id: 13,
    name: 'Microwave Oven',
    price: 8990,
    category: 'Home & Kitchen',
    rating: 4.5,
    image: `${IMAGE_BASE_URL}/kitchen-accessories/microwave-oven/thumbnail.webp`,
  },
  {
    id: 14,
    name: 'Boxed Blender',
    price: 2799,
    category: 'Home & Kitchen',
    rating: 4.3,
    image: `${IMAGE_BASE_URL}/kitchen-accessories/boxed-blender/thumbnail.webp`,
  },
  {
    id: 15,
    name: 'Table Lamp',
    price: 1899,
    category: 'Home & Kitchen',
    rating: 3.7,
    image: `${IMAGE_BASE_URL}/home-decoration/table-lamp/thumbnail.webp`,
  },
  {
    id: 16,
    name: 'Executive Office Chair',
    price: 24999,
    category: 'Home & Kitchen',
    rating: 4.9,
    image: `${IMAGE_BASE_URL}/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp`,
  },

  // Sports
  {
    id: 17,
    name: 'Cricket Bat',
    price: 2499,
    category: 'Sports',
    rating: 4.6,
    image: `${IMAGE_BASE_URL}/sports-accessories/cricket-bat/thumbnail.webp`,
  },
  {
    id: 18,
    name: 'Basketball',
    price: 1299,
    category: 'Sports',
    rating: 4.4,
    image: `${IMAGE_BASE_URL}/sports-accessories/basketball/thumbnail.webp`,
  },
  {
    id: 19,
    name: 'Tennis Racket',
    price: 3499,
    category: 'Sports',
    rating: 4.1,
    image: `${IMAGE_BASE_URL}/sports-accessories/tennis-racket/thumbnail.webp`,
  },
  {
    id: 20,
    name: 'Cricket Helmet',
    price: 1999,
    category: 'Sports',
    rating: 4.0,
    image: `${IMAGE_BASE_URL}/sports-accessories/cricket-helmet/thumbnail.webp`,
  },

  // Beauty
  {
    id: 21,
    name: 'Calvin Klein CK One',
    price: 4499,
    category: 'Beauty',
    rating: 4.7,
    image: `${IMAGE_BASE_URL}/fragrances/calvin-klein-ck-one/thumbnail.webp`,
  },
  {
    id: 22,
    name: 'Red Lipstick',
    price: 599,
    category: 'Beauty',
    rating: 4.2,
    image: `${IMAGE_BASE_URL}/beauty/red-lipstick/thumbnail.webp`,
  },
  {
    id: 23,
    name: 'Eyeshadow Palette with Mirror',
    price: 1199,
    category: 'Beauty',
    rating: 3.6,
    image: `${IMAGE_BASE_URL}/beauty/eyeshadow-palette-with-mirror/thumbnail.webp`,
  },
  {
    id: 24,
    name: 'Powder Canister',
    price: 449,
    category: 'Beauty',
    rating: 3.5,
    image: `${IMAGE_BASE_URL}/beauty/powder-canister/thumbnail.webp`,
  },
]

export default products
