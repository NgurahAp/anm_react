import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Landing from "../pages/LandingPage";
import { ProductDetail } from "../pages/detailProduct";
import { BinderDetail } from "../pages/detailProduct/binder";
import { MemmertDetail } from "../pages/detailProduct/memert";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/detailProduct/:productName"
            element={<ProductDetail />}
          />
          <Route path="/binderDetail/:slug" element={<BinderDetail />} />
          <Route path="/memmertDetail/:slug" element={<MemmertDetail />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
