import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import productsData from "./services/products.data";

export default function App() {
  const [size, setSize] = useState("");

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
          <span>Selected Size {size}</span>
          <section id="products">{productsData.map(renderProduct)}</section>
        </main>
      </div>
      <Footer />
    </>
  );
}
