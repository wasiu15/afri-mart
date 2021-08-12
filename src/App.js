import { useState } from "react";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import Header from "./Components/Header";
import Deal from "./Components/Deal";
import Contact from "./Components/Contact";
import Newsletter from "./Components/Newsletter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductContainer from "./Components/ProductDisplay/ProductContainer";
import { div } from "prelude-ls";
import ProductList from "./Components/ProductDisplay/ProductList";
import Navbar from "./Components/Navbar";
import ProductHeader from "./Components/ProductDisplay/ProductHeader";
import CartPage from "./Components/ProductDisplay/Cart/CartPage";

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
    <div>
      {/* <header>
        <Header />
        <Navbar />
      </header> */}
      <CartPage />
    </div>
    // <header>
    //   <Header />
    //   <ProductContainer products={productList} />
    // </header>

    // <div class="d-flex" id="wrapper">
    //   <!-- Page content wrapper-->
    //   <div id="page-content-wrapper">
    //     {/* <Navbar /> */}
    //     {/* root content */}
    //     {/* <ProductList products={productList} /> */}
    //   </div>
    // </div>
    // {/* <Products products={productList} /> */}
    // <Router>
    //   <Switch>
    //     <Route path="/">
    //       <Cart />
    //     </Route>
    //   </Switch>
    // </Router>
    // <Router>
    //   <div className="App">
    //     <Switch>
    //       <Route exact path="/">
    //         <HomeSection />
    //         <Categories categories={CategoryList} />
    //         <section className="product" id="product">
    //            <h1 className="heading">latest <span>products</span></h1>
    //            <Products products={productList} />
    //          </ section>
    //         <Deal />
    //         <Contact />
    //         <Newsletter />
    //       </Route>

    //       <Route path="/Compornent/Cart/ViewCart.js">
    //         <Cart />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
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
