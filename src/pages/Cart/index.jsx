import Footer from "../../components/Footer";
import GeneralBanner from "../../components/GeneralBanner";
import Header from "../../components/Header";
import { CartContainer } from "./style";
import salad from '../../assets/salad-cart-01.jpg'
import apple from '../../assets/apple-cart-02.jpg'
import GeneralButton from "../../components/GeneralButton";
import RoundButton from "../../components/RoundButton";
import bgcart from '../../assets/bgcart.jpg'


const Cart = () => (

    <>
        <Header/>
        <GeneralBanner
        title1="Shop Cart"
        backgroundImage={bgcart}/>
        <CartContainer>
            <div className="container">
                <div className="table-responsive-md">
                    <table className="table border mb-5 align-middle">
                        <thead>
                            <tr>
                                <th scope="col" className="color">Product</th>
                                <th className="color"></th>
                                <th scope="col" className="color text-center">Weight</th>
                                <th scope="col" className="color">Quantity</th>
                                <th scope="col" className="color">Price</th>
                                <th scope="col" className="color">Total</th>
                                <th className="color"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> <img src={salad} alt="logo" className=" img-fluid border px-3 "/></td>
                                <td>Salad</td>
                                <td className="text-center">0.4kg</td>
                                <td><input type="text" placeholder={"1"} aria-label="Recipient's username" aria-describedby="button-addon2" className="flex-grow-1"/></td>
                                <td>$2.26</td>
                                <td>$2.26</td>
                                <td className="text-center"><RoundButton title="x"/></td>
                            </tr>
                            <tr>
                                <td> <img src={apple} alt="logo" className=" img-fluid border px-3 "/></td>
                                <td>Apple</td>
                                <td className="text-center">0.4kg</td>
                                <td><input type="text" placeholder={"1"} aria-label="Recipient's username" aria-describedby="button-addon2" className="flex-grow-1"/></td>
                                <td>$2.26</td>
                                <td>$2.26</td>
                                <td className="text-center"><RoundButton title="x"/></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2"><GeneralButton title="Coupon Code"/></td>
                                <td><GeneralButton title="APPLY COUPON"/></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="text-center"><GeneralButton title="UPDATE CART"/></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <h2>Cart Total</h2>
                <div className="col-md-5 col-lg-7 order-md-last mb-5 py-5" id="cart-total">
                <div className="row row-cols-2 border mb-3">
                    <div className="col border"><p>Subtotal</p></div>
                    <div className="col border"><p>$6.31</p></div>
                    <div className="col border"><p>Total</p></div>
                    <div className="col border"><p>$6.31</p></div>
                </div>
                <GeneralButton
                title="PROCEED TO CHECKOUT"/>
                </div>
            </div>
        </CartContainer>
        <Footer/>
        
            
    </>

);
    
    export default Cart;