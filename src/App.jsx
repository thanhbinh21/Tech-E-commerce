import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavigationBar/NavBar";
import Home from "./pages/Home/Home";
import Information from "./pages/Information/Information";

import Product from "./pages/Product/Product";
import Partner from "./pages/Partner/Partner";
import Advertise from "./pages/Advertise/Advertise";
import Guide from "./pages/Guide/Guide";
import CartPage from "./pages/CartPage/CartPage";
import Contact from "./pages/Contact/Contact";
import SubPage1 from "./components/SubPageInformation/SubPage1";
import SubPage2 from "./components/SubPageInformation/SubPage2";
import SubPage3 from "./components/SubPageInformation/SubPage3";
import SubPage4 from "./components/SubPageInformation/SubPage4";
import PostPage from "./components/SubPageInPartner/SubPartner1";
import PostPage2 from "./components/SubPageInPartner/SubPartner2";
import PostPage3 from "./components/SubPageInPartner/SubPartner3";
import PostPage4 from "./components/SubPageInPartner/SubPartner4";
import PostPage5 from "./components/SubPageInPartner/SubPartner5";
import PostPage6 from "./components/SubPageInPartner/SubPartner6";
import Pay from "./pages/Pay/Pay";
import InfoPay from "./pages/Pay/InfoPay";
import PayMoney from "./pages/Pay/PayMoney";
import EndPay from "./pages/Pay/EndPay";
import SearchPage from "./pages/SearchPage/SearchPage"; // Import trang tìm kiếm
import Login from "./pages/Login/Login";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import DetailAdvertise from "./pages/DetailAdvertisePost/DetailAdvertisePost";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import { UserProvider } from "./context/UserContect";
import ScrollToTop from "./components/ScrollOnTop/ScrollOnTop";
import ProductDetail from "./pages/Product/ProductDetail";
import ProductFillter from "./pages/Product/ProductFillter";


function App() {
  return (
    <>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <ScrollToTop></ScrollToTop>
            <Header></Header>
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<Home></Home>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Pay" element={<Pay />} />
              <Route path="/InfoPay" element={<InfoPay />} />
              <Route path="/PayMoney" element={<PayMoney />} />
              <Route path="/EndPay" element={<EndPay />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/information/subpage1" element={<SubPage1 />} />
              <Route path="/information/subpage2" element={<SubPage2 />} />
              <Route path="/information/subpage3" element={<SubPage3 />} />
              <Route path="/information/subpage4" element={<SubPage4 />} />
              <Route path="/partner/subpage1" element={<PostPage />} />
              <Route path="/partner/subpage2" element={<PostPage2 />} />
              <Route path="/partner/subpage3" element={<PostPage3 />} />
              <Route path="/partner/subpage4" element={<PostPage4 />} />
              <Route path="/partner/subpage5" element={<PostPage5 />} />
              <Route path="/partner/subpage6" element={<PostPage6 />} />
              <Route path="/product" element={<Product></Product>}></Route>
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/productfillter" element={<ProductFillter />} />
              <Route
                path="/information"
                element={<Information></Information>}
              ></Route>
              <Route path="/partner" element={<Partner></Partner>}></Route>
              <Route
                path="/advertise"
                element={<Advertise></Advertise>}
              ></Route>
              <Route path="/guide" element={<Guide></Guide>}></Route>
              <Route path="/cart" element={<CartPage></CartPage>}></Route>

              <Route path="/login" element={<Login></Login>}></Route>
              <Route
                path="/createaccount"
                element={<CreateAccount></CreateAccount>}
              ></Route>
              <Route
                path="/detailadvertise"
                element={<DetailAdvertise></DetailAdvertise>}
              ></Route>
            </Routes>
            <Footer />
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </>
  );
}

export default App;
