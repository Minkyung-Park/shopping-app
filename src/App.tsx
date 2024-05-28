import { Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductItemPage from "./pages/ProductItemPage";
import PurchasePage from "./pages/PurchasePage";
import CreatePage from "./pages/CreatePage";
import ModifyPage from "./pages/ModifyPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/common/Layout";
import CartPage from "./pages/CartPage";
import Responsive from "./components/common/Responsive";
import styled from "@emotion/styled";

function App() {
  return (
    <Responsive width="100%">
      <Layout>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/product" element={<ProductListPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:productId" element={<ProductItemPage />} />
          <Route path="/purchase/:productId" element={<PurchasePage />} />
          <Route path="/modify/:productId" element={<ModifyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Responsive>
  );
}

export default App;
