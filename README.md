# React Product Store

This is a simple React application that displays products on the home page using React Router.

## 🛠️ Features

- Product listing on the home page (`/`)
- React Router integration for navigation
- Layout component for consistent UI structure

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/Muneeb152/react-product-store
cd react-product-store
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Start the Development Server

```sh
npm start
```

The app will be available at `http://localhost:3000/`

---

## 📂 Project Structure

```
/src
  ├── components
  │     ├── Layout.js      (Global Layout with Drawer)
  │     ├── ProductList.js (Component to fetch & display products)
  │     ├── ProductCard.js (Component for a single product)
  │
  ├── pages
  │     ├── Home.js        (Home page displaying products)
  │
  ├── App.js               (Entry point)
  ├── index.js             (Main entry point to render React app)
  ├── README.md            (Project documentation)
```

---

## 🏗️ How It Works

1. The `App.js` file sets up React Router and wraps all routes inside a `Layout` component.
2. The `Layout.js` file provides a consistent UI and Sidebar.
3. The `Home.js` page fetches and displays a list of products using `ProductList.js`.

---

## 📦 Building for Production

To create an optimized build of the project, run:

```sh
npm run build
```

This will generate a `build/` folder containing minified production-ready assets.

---

## ❓ Troubleshooting

If you encounter issues while running the app:

1. Ensure you have the latest stable version of **Node.js** and **npm** installed.
2. Run `npm install` again to check for missing dependencies.
3. Check the console for errors and troubleshoot accordingly.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
