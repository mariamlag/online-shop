import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./components/Shop";
import { useState } from "react";
import data from "./data/products.json";
import Item from "./components/Item";
import Footer from "./components/Footer";
import Information from "./components/Information";
import Contact from "./components/contacts/Contact";

function App() {
  const [items, setItems] = useState(data);
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/item/:id"
            element={<Item items={items} setItems={setItems} />}
          />

          <Route
            path="/shop"
            element={<Shop items={items} setItems={undefined} />}
          />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<Information />}></Route>
        </Routes>
        <Footer></Footer>
      </>
    </Router>
  );
}

export default App;
