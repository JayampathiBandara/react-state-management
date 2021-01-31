import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
//import productsData from "./services/products.data";
//import * as productApi from "./services/productService";
import useFetch from "./services/useFetch";
import Spinner from "./Spinner";

export default function App() {
  const [size, setSize] = useState("");

  // use fetch return "data", it is aliase with "products"
  const { data: products, error, loading } = useFetch(
    "products?category=shoes"
  );

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <a href="/">
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </a>
      </div>
    );
  }

  const fiteredProducts = size
    ? products.filter((p) => p.skus.find((s) => s.size === parseInt(size)))
    : products;

  if (error) throw error;

  if (loading)
    return (
      <>
        <Spinner />
      </>
    );
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <section id="filters">
            <label htmlFor="size">Filter by Size:</label>{" "}
            <select
              id="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="">All sizes</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </section>
          <span>{size && <h2>found {fiteredProducts.length} items</h2>}</span>
          <section id="products">{fiteredProducts.map(renderProduct)}</section>
        </main>
      </div>
      <Footer />
    </>
  );
}
