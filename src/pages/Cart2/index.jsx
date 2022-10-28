import Footer from "../../components/Footer";
import GeneralBanner from "../../components/GeneralBanner";
import Header from "../../components/Header";
import { CartContainer } from "./style";
import salad from '../../assets/salad-cart-01.jpg'
import apple from '../../assets/apple-cart-02.jpg'
import GeneralButton from "../../components/GeneralButton";
import RoundButton from "../../components/RoundButton";


const Cart2 = () => (

    <>
        <Header/>
        <GeneralBanner
        title1="Shop Cart"/>
        <CartContainer>
            <div className="container">
                <div className="row row-cols-md-6 row-cols-sm-2 border mb-5">  
                    <div className="col-2 color">
                        <h4>Product</h4>
                    </div>
                    <div className="col color">
                        <h4>Weight</h4>
                    </div>
                    <div className="col color">
                        <h4>Quantity</h4>
                    </div>
                    <div className="col color">
                        <h4>Price</h4>
                    </div>
                    <div className="col color">
                        <h4>Total</h4>
                    </div>
                    <div className="col color">
                    
                    </div>                      

                    <div className="col d-flex">
                        <img src={salad} alt="logo" className=" img-fluid border px-3 "/>
                        <p>Salad</p>
                    </div>
                    <div className="col">
                        <p>0.4kg</p>
                    </div>
                    <div className="col">
                        <input type="text" placeholder={"1"} aria-label="Recipient's username" aria-describedby="button-addon2" className="flex-grow-1"/>
                    </div>
                    <div className="col">
                        <p>$2.26</p>
                    </div>
                    <div className="col">
                        <p>2.26</p>
                    </div>
                    <div className="col">
                    <RoundButton title="x"/> 
                    </div>

                    <div className="col d-flex">
                        <img src={apple} alt="logo" className=" img-fluid border px-3 "/>
                        <p>Apple</p>
                    </div>
                    <div className="col">
                        <p>0.4kg</p>
                    </div>
                    <div className="col">
                        <input type="text" placeholder={"1"} aria-label="Recipient's username" aria-describedby="button-addon2" className="flex-grow-1"/>
                    </div>
                    <div className="col">
                        <p>$2.26</p>
                    </div>
                    <div className="col">
                        <p>2.26</p>
                    </div>
                    <div className="col">
                    <RoundButton title="x"/> 
                    </div>
                    <div className="col">
                    <GeneralButton                   
                    title="Coupon Code"/>
                    </div>
                    <div className="col">
                    <GeneralButton
                    title="APPLY COUPON"/>
                    </div>
                    <div className="col">
                    
                    </div>    
                    <div className="col">
                    
                    </div>    
                    <div className="col">
                    
                    </div>    
                    <div className="col">
                    <GeneralButton
                    title="UPDATE CART"/>
                    </div>
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
    
    export default Cart2;