import { Fragment, useState } from "react";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Categories from "./Components/Categories";
import ProductsPage from "./Components/ProductPage/Products";
import Header from "./Components/General/Header";
import Deal from "./Components/Deal";
import Contact from "./Components/Contact";
import Newsletter from "./Components/Newsletter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { div } from "prelude-ls";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage/Home";
import Footer from "./Components/General/Footer";
import Cart from "./Components/ProductPage/Components/SideCart/CartPage";
import CartPage from "./Components/ProductPage/Components/SideCart/CartPage";

function App() {
  const [categories, setCategories] = useState([
    {
      categoryId: 1,
      categoryName: "Vegitables",
      categoryDiscount: "50%",
      categoryImage: "./images/category-1.png",
      products: [
        {
          productId: 1,
          productName: "Vegetable",
          productCurrentPrice: "prod-price",
          productOldPrice: "prod-price-discount",
          productDiscount: "50%",
          productImage: "./images/category-1.png",
        },
      ],
    },
    {
      categoryId: 2,
      categoryName: "Juice",
      categoryDiscount: "44%",
      categoryImage: "./images/category-1.png",
      products: [
        {
          productId: 2,
          productName: "prod-name",
          productCurrentPrice: "prod-price",
          productOldPrice: "prod-price-discount",
          productDiscount: "50%",
          productImage: "./images/category-2.png",
        },
      ],
    },
    {
      categoryId: 3,
      categoryName: "Meat",
      categoryDiscount: "35%",
      categoryImage: "./images/category-1.png",
      products: [
        {
          productId: 3,
          productName: "prod-name",
          productCurrentPrice: "prod-price",
          productOldPrice: "prod-price-discount",
          productDiscount: "50%",
          productImage: "./images/category-2.png",
        },
        {
          productId: 4,
          productName: "prod-name",
          productCurrentPrice: "prod-price",
          productOldPrice: "prod-price-discount",
          productDiscount: "50%",
          productImage: "./images/category-2.png",
        },
      ],
    },
    {
      categoryId: 1,
      categoryName: "Vegitables",
      categoryDiscount: "50%",
      categoryImage: "./images/category-1.png",
      products: [
        {
          productId: 1,
          productName: "Vegetable",
          productCurrentPrice: "prod-price",
          productOldPrice: "prod-price-discount",
          productDiscount: "50%",
          productImage: "./images/category-1.png",
        },
      ],
    },
    {
      categoryId: 2,
      categoryName: "Juice",
      categoryDiscount: "44%",
      categoryImage: "./images/category-1.png",
      products: [
        {
          productId: 2,
          productName: "prod-name",
          productCurrentPrice: "prod-price",
          productOldPrice: "prod-price-discount",
          productDiscount: "50%",
          productImage: "./images/category-2.png",
        },
      ],
    },
    {
      categoryId: 3,
      categoryName: "Meat",
      categoryDiscount: "35%",
      categoryImage: "./images/category-1.png",
      products: [
        {
          productId: 3,
          productName: "prod-name",
          productCurrentPrice: "prod-price",
          productOldPrice: "prod-price-discount",
          productDiscount: "50%",
          productImage: "./images/category-2.png",
        },
        {
          productId: 4,
          productName: "prod-name",
          productCurrentPrice: "prod-price",
          productOldPrice: "prod-price-discount",
          productDiscount: "50%",
          productImage: "./images/category-2.png",
        },
      ],
    },
    {
      categoryId: 1,
      categoryName: "Vegitables",
      categoryDiscount: "50%",
      categoryImage: "./images/category-1.png",
      products: [
        {
          productId: 1,
          productName: "Vegetable",
          productCurrentPrice: "prod-price",
          productOldPrice: "prod-price-discount",
          productDiscount: "50%",
          productImage: "./images/category-1.png",
        },
      ],
    },
    {
      categoryId: 2,
      categoryName: "Juice",
      categoryDiscount: "44%",
      categoryImage: "./images/category-1.png",
      products: [
        {
          productId: 2,
          productName: "prod-name",
          productCurrentPrice: "prod-price",
          productOldPrice: "prod-price-discount",
          productDiscount: "50%",
          productImage: "./images/category-2.png",
        },
      ],
    },
    {
      categoryId: 3,
      categoryName: "Meat",
      categoryDiscount: "35%",
      categoryImage: "./images/category-1.png",
      products: [
        {
          productId: 3,
          productName: "prod-name",
          productCurrentPrice: "prod-price",
          productOldPrice: "prod-price-discount",
          productDiscount: "50%",
          productImage: "./images/category-2.png",
        },
        {
          productId: 4,
          productName: "prod-name",
          productCurrentPrice: "prod-price",
          productOldPrice: "prod-price-discount",
          productDiscount: "50%",
          productImage: "./images/category-2.png",
        },
      ],
    },
    {
      categoryId: 1,
      categoryName: "Vegitables",
      categoryDiscount: "50%",
      categoryImage: "./images/category-1.png",
      products: [
        {
          productId: 1,
          productName: "Vegetable",
          productCurrentPrice: "prod-price",
          productOldPrice: "prod-price-discount",
          productDiscount: "50%",
          productImage: "./images/category-1.png",
        },
      ],
    },
    {
      categoryId: 2,
      categoryName: "Juice",
      categoryDiscount: "44%",
      categoryImage: "./images/category-1.png",
      products: [
        {
          productId: 2,
          productName: "prod-name",
          productCurrentPrice: "prod-price",
          productOldPrice: "prod-price-discount",
          productDiscount: "50%",
          productImage: "./images/category-2.png",
        },
      ],
    },
    {
      categoryId: 3,
      categoryName: "Meat",
      categoryDiscount: "35%",
      categoryImage: "./images/category-1.png",
      products: [
        {
          productId: 3,
          productName: "prod-name",
          productCurrentPrice: "prod-price",
          productOldPrice: "prod-price-discount",
          productDiscount: "50%",
          productImage: "./images/category-2.png",
        },
        {
          productId: 4,
          productName: "prod-name",
          productCurrentPrice: "prod-price",
          productOldPrice: "prod-price-discount",
          productDiscount: "50%",
          productImage: "./images/category-2.png",
        },
      ],
    },
  ]);

  //this.state = {categories: [], products: []};
  const [productList, setProductList] = useState([]);
  const [CategoryList, setCategoryList] = useState([]);
  GetAllProducts();

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/products">
            <ProductsPage products={productList} />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );

  function GetAllProducts() {
    categories.map(
      (category) => (
        CategoryList.push(category),
        category.products.map((product) => productList.push(product))
      )
    );
  }
}

export default App;
