# Product List: Product Listing Page in React

**Assignment 10, Entri Elevate Full Stack Development (Module: React JS)**

A responsive product listing page built with React. Users can browse a grid of products, search by name, filter by category, sort by price or rating, open a product to see it larger, and add items to a cart. Clicking **Add to Cart** logs the product's name to the browser console.

**GitHub repository:** _add the repository link here after pushing_

---

## Features

| Requirement | How it is implemented |
| --- | --- |
| Product data | A mock array of 24 products in `src/data/products.js`, each shaped `{ id, name, price, category, rating, image }`, across 6 categories |
| Product grid | `ProductGrid` renders a `ProductCard` per product, showing the image, name, price, category and rating |
| Search | `SearchBar` filters products by name as you type. Matching ignores case and spaces at either end, and the × button clears the search |
| Category filter | `CategoryFilter` shows one button per category plus **All**. The selected button is highlighted |
| Sorting | `SortSelect` dropdown: **Featured**, **Price: Low to High**, **Price: High to Low**, **Rating: High to Low** |
| Add to Cart | Every **Add to Cart** button (`AddToCartButton`) calls `handleAddToCart` in `App.jsx`, which runs `console.log(product.name)` and adds the product to the cart. The button briefly shows **Added** and the navbar badge counts the items |
| Product details | Clicking anywhere on a product card opens `ProductDetails`, a dialog with a larger image, category, rating, price and its own **Add to Cart** button. It closes with ×, Esc or a click outside |
| Cart | The cart icon in the navbar opens `CartDrawer`, which lists each product with its quantity (− / +), a **Remove** link, line totals, the subtotal and **Clear cart**. The `useCart` hook keeps the cart and saves it in `localStorage`, so it survives a page reload |
| Combined filters | Search, category and sort work together. `ResultsBar` shows the current category and how many products match |
| Empty state | If nothing matches, `EmptyState` shows a "No products found" message with a **Clear filters** button |
| Navigation bar and header | A sticky `Navbar` (brand and a cart button with a count) and a `Header` banner with the page title |
| Responsive design | The grid shows 4 columns on desktop, 3 on tablet, 2 on phones and 1 on very narrow screens. On small screens the toolbar stacks and the category buttons wrap onto extra rows |
| Styling | Plain CSS. Each component has its own stylesheet, and shared design tokens live in `src/index.css` |

Additional details:

- If a product image fails to load, `ProductImage` shows a local placeholder image instead.
- Both dialogs use the native `<dialog>` element (through the reusable `Modal` component), so keyboard focus stays inside while they are open and returns to where it was when they close.
- The search box, sort dropdown, category buttons, cart button and star ratings have labels for screen readers, and every control shows a visible keyboard focus outline.

## Tech stack

- [React 19](https://react.dev/) with hooks (`useState`, `useReducer`, `useMemo`, `useEffect`, `useRef`, `useId`)
- [Vite 8](https://vite.dev/) for development and production builds
- Plain CSS (no UI library)
- [oxlint](https://oxc.rs/) for linting

## Folder structure

```
product-list/
├── public/
│   └── favicon.svg
├── screenshots/                 # Screenshots of every section of the app
├── src/
│   ├── assets/
│   │   └── image-placeholder.svg   # Shown when a product image fails to load
│   ├── components/
│   │   ├── AddToCartButton.jsx / .css
│   │   ├── CartDrawer.jsx / .css
│   │   ├── CategoryFilter.jsx / .css
│   │   ├── EmptyState.jsx / .css
│   │   ├── Header.jsx / .css
│   │   ├── Icons.jsx               # Shared inline SVG icons
│   │   ├── Modal.jsx / .css        # Reusable dialog used by the cart and product details
│   │   ├── Navbar.jsx / .css
│   │   ├── ProductCard.jsx / .css
│   │   ├── ProductDetails.jsx / .css
│   │   ├── ProductGrid.jsx / .css
│   │   ├── ProductImage.jsx        # Product photo with a fallback image
│   │   ├── RatingStars.jsx / .css
│   │   ├── ResultsBar.jsx / .css
│   │   ├── SearchBar.jsx / .css
│   │   └── SortSelect.jsx / .css
│   ├── data/
│   │   └── products.js             # Mock product array
│   ├── hooks/
│   │   └── useCart.js              # Cart state: add, change quantity, remove, clear
│   ├── utils/
│   │   └── productUtils.js         # Filtering, sorting and price formatting helpers
│   ├── App.jsx                     # Holds the page state and puts the components together
│   ├── App.css
│   ├── index.css                   # Design tokens and global styles
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

### How the components fit together

```
App  (state: searchTerm, category, sortBy, selectedProduct, isCartOpen; cart from useCart)
├── Navbar          brand, cartCount, onCartClick
├── Header          title, subtitle
├── main
│   ├── SearchBar        value, onChange
│   ├── SortSelect       value, onChange, options
│   ├── CategoryFilter   categories, selected, onSelect
│   ├── ResultsBar       title, shown, total, searchTerm, onClear
│   ├── ProductGrid      products, onAddToCart, onViewDetails
│   │   └── ProductCard  product, onAddToCart, onViewDetails
│   │       ├── ProductImage, RatingStars
│   │       └── AddToCartButton  onAdd
│   └── EmptyState       title, message, actionLabel, onAction
├── ProductDetails  product, onClose, onAddToCart      (inside Modal)
└── CartDrawer      open, items, count, total, onChangeQuantity, onRemove, onClear, onClose   (inside Modal)
```

`App` is the only component with page-level state. It computes the visible products with `useMemo` by passing `filterAndSortProducts()` the current search term, category and sort option. Each child component receives data and callbacks through props, so any of them can be reused on another page.

## Getting started

**Requirements:** Node.js 20.19+ or 22.12+ (required by Vite 8), and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
# then open the URL printed in the terminal (usually http://localhost:5173)

# 3. Build for production and preview the build
npm run build
npm run preview

# 4. Lint the code
npm run lint
```

To see the **Add to Cart** output, open the browser's developer tools (F12, or Cmd + Option + J on macOS), switch to the **Console** tab and click **Add to Cart** on any product.

## Screenshots

### Navigation bar and header
![Navigation bar and header](screenshots/01-navbar-header.png)

### Product grid (all 24 products)
![Product grid](screenshots/02-product-grid.png)

### Search by name ("apple")
![Search](screenshots/03-search.png)

### Category filter ("Sports")
![Category filter](screenshots/04-category-filter.png)

### Sort: price low to high
![Sort by price, low to high](screenshots/05-sort-price-low-to-high.png)

### Sort: price high to low
![Sort by price, high to low](screenshots/06-sort-price-high-to-low.png)

### Sort: rating high to low
![Sort by rating](screenshots/07-sort-rating.png)

### Combined: "samsung" + Electronics + price high to low
![Combined filters](screenshots/08-combined-filters.png)

### Empty state
![Empty state](screenshots/09-empty-state.png)

### Add to Cart: product names logged in the console
The app is shown above the Chrome DevTools Console. Each click logged the product's name, the clicked buttons show **Added**, and the cart badge shows 3.

![Add to Cart with console output](screenshots/10-add-to-cart-console.png)

### Responsive: tablet and mobile
| Tablet (768px) | Mobile (375px) | Mobile, filtered |
| --- | --- | --- |
| ![Tablet view](screenshots/11-tablet-view.png) | ![Mobile view](screenshots/12-mobile-view.png) | ![Mobile filtered view](screenshots/13-mobile-filtered.png) |

### Product details (click any product)
![Product details](screenshots/14-product-details.png)

### Cart (click the cart icon)
![Cart](screenshots/15-cart.png)

### Cart on a phone
<img src="screenshots/16-cart-mobile.png" alt="Cart on a phone" width="375">

## Credits

Product images come from the free [DummyJSON](https://dummyjson.com/) product image CDN. The assignment's sample data used `via.placeholder.com`, which has been shut down, so working image URLs are used instead.
