import { BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import ShopDetail from "../pages/ShopDetail";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";



const Router = () => (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/quem-somos" element={<About/>}/>
            <Route path="/produtos" element={<Shop/>}/>
            <Route path="/produtos/*" element={<ShopDetail/>}/>
            <Route path="/carrinho" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/contact" element={<Contact/>}/> 
            <Route path="/*" element={<NotFound />}/> 
        </Routes>
    </BrowserRouter>
);

export default Router;

/*<Route path="/produtos" element={<Shop/>}/>
            <Route path="/produtos/*" element={<ShopDetail/>}/>
            <Route path="/carrinho" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/contact" element={<Contact/>}/>*/