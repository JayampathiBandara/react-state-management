import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Cart";
import Detail from "./Detail";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";

export default function App() {
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Products />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
