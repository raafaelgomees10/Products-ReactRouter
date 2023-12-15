import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as S from "./styles.js";
import "./App.css";

import Products from "./components/products";
import Header from "./components/header";
import Footer from "./components/footer";
import Contact from "./components/contact/index.js";
import Product from "./components/product/index.js";

function App() {
  return (
    <S.Container>
      <BrowserRouter>
        <Header />
        <S.Content>
          <Routes>
            <Route path="" element={<Products />}></Route>
            <Route path="/produto/:id" element={<Product />}></Route>
            <Route path="/contato" element={<Contact />}></Route>
          </Routes>
        </S.Content>
        <Footer />
      </BrowserRouter>
    </S.Container>
  );
}

export default App;
