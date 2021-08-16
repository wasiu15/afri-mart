import { Fragment, useState } from "react";
import React from "react";
import "./App.css";
import ProductsPage from "./Components/ProductPage/Products.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage/Home.jsx";
import CartPage from "./Components/ProductPage/Components/SideCart/CartPage.jsx";

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
          productCurrentPrice: "$45.24",
          productOldPrice: "$105.38",
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
          productCurrentPrice: "$30.27",
          productOldPrice: "$45.24",
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
          productCurrentPrice: "$53.92",
          productOldPrice: "$53.99",
          productDiscount: "50%",
          productImage: "./images/category-2.png",
        },
        {
          productId: 4,
          productName: "prod-name",
          productCurrentPrice: "$42.02",
          productOldPrice: "$93.22",
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
