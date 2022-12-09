import Footer from "../../components/Footer";
import GeneralBanner from "../../components/GeneralBanner";
import Header from "../../components/Header";
import { BigTable, CartContainer, SmallTable } from "./style";
import salad from '../../assets/salad-cart-01.jpg'
import apple from '../../assets/apple-cart-02.jpg'
import GeneralButton from "../../components/GeneralButton";
import RoundButton from "../../components/RoundButton";
import bgcart from '../../assets/bgcart.jpg'
import { Link } from "react-router-dom";


const Cart = () => (

    <>
        <Header/>
        <GeneralBanner
        title1="Shop Cart"
        backgroundImage={bgcart}/>
        <CartContainer>
            <div className="container">
                <BigTable className="table border mb-5 align-middle d-none d-lg-table text-center">
                    <thead >
                        <tr>
                            <th scope="col" colspan="2" className="color text-start px-5">Product</th>
                            <th scope="col" className="color ">Weight</th>
                            <th scope="col" className="color">Quantity</th>
                            <th scope="col" className="color">Price</th>
                            <th scope="col" className="color">Total</th>
                            <th className="color"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> <img src={salad} alt="logo" className=" img-fluid border my-4"/></td>
                            <td>Salad</td>
                            <td className="text-center">0.4kg</td>
                            <td><input type="text" placeholder={"1"} aria-label="Recipient's username" aria-describedby="button-addon2"/></td>
                            <td>$2.26</td>
                            <td>$2.26</td>
                            <td className="text-center"><RoundButton title="x"/></td>
                        </tr>
                        <tr>
                            <td> <img src={apple} alt="logo" className=" img-fluid border my-4"/></td>
                            <td>Apple</td>
                            <td className="text-center">0.4kg</td>
                            <td><input type="text" placeholder={"1"} aria-label="Recipient's username" aria-describedby="button-addon2" /></td>
                            <td>$2.26</td>
                            <td>$2.26</td>
                            <td className="text-center"><RoundButton title="x"/></td>
                        </tr>
                    </tbody>
                    <tfoot >
                        <tr >
                            <td colspan="2"><GeneralButton title="Coupon Code" backgroundColor="transparent" color="#97ae76"/></td>
                            <td className="py-3"><GeneralButton title="APPLY COUPON"/></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="text-center"><GeneralButton title="UPDATE CART" backgroundColor="transparent" color="#97ae76"/></td>
                        </tr>
                    </tfoot>
                </BigTable>
                <SmallTable className="table border align-middle table-striped table-light d-table d-lg-none mb-0">
                    <tbody>
                        <tr >
                            <th scope="row" >Product</th>
                            <td class="product" >Apple</td>
                        </tr>
                        <tr>
                            <th scope="row" >Weight</th>
                            <td >0.4kg</td>
                        </tr>
                        <tr>
                            <th scope="row" >Quantity</th>
                            <td><input type="text" placeholder={"1"} aria-label="Recipient's username" aria-describedby="button-addon2" /></td>
                        </tr>
                        <tr>
                            <th scope="row" >Price</th>
                            <td>$2.26</td>
                        </tr>
                        <tr>
                            <th scope="row" >Total</th>
                            <td>$2.26</td>
                        </tr>
                        <tr>
                            <th scope="row" ></th>
                            <td ><RoundButton title="x"/></td>
                        </tr>
                        <tr>
                            <th scope="row" >Product</th>
                            <td class="product" >Salad</td>
                        </tr>
                        <tr>
                            <th scope="row" >Weight</th>
                            <td >0.4kg</td>
                        </tr>
                        <tr>
                            <th scope="row" >Quantity</th>
                            <td><input type="text" placeholder={"1"} aria-label="Recipient's username" aria-describedby="button-addon2" /></td>
                        </tr>
                        <tr>
                            <th scope="row" >Price</th>
                            <td>$2.26</td>
                        </tr>
                        <tr>
                            <th scope="row" >Total</th>
                            <td>$2.26</td>
                        </tr>
                        <tr>
                            <th scope="row" ></th>
                            <td ><RoundButton title="x"/></td>
                        </tr>
                    </tbody>                 
                </SmallTable>
                <div className="border mb-5 px-4 py-3 d-block d-lg-none">
                    <div className="d-flex mb-3 ">
                        <button className="whitebtn w-100 px-0 py-2 me-4" >Coupon Code</button>
                        <button className="greenbtn w-100 px-0 py-2 ">APPLY COUPON</button>
                    </div>
                    <div className="d-flex">
                    <button  className="whitebtn w-100 px-0 py-2">UPDATE CART</button>
                    </div>
                </div>
                <h2>Cart Total</h2>
                <div className="col-md-5 col-lg-7 mb-5 py-5 d-none d-lg-block" id="cart-total">
                    <div className="row row-cols-2 mb-3 mx-0 ">
                        <div className="col border "><p className="mb-0 py-2">Subtotal</p></div>
                        <div className="col border"><p className="mb-0 py-2">$6.31</p></div>
                        <div className="col border"><p className="mb-0 py-2">Total</p></div>
                        <div className="col border"><p className="mb-0 py-2">$6.31</p></div>
                    </div>
                    <Link to="/checkout" className="mx-0 px-0"><GeneralButton title="PROCEED TO CHECKOUT"/></Link>
                </div>
                <div className="col-md-5 col-lg-7 mb-5 py-5 d-block d-lg-none w-100" id="cart-total">
                    <div className=" mb-3 ">
                        <div className="d-flex border justify-content-between px-3"><p className="mb-0 py-2">Subtotal</p><p className="mb-0 py-2">$6.31</p></div>
                        <div className="d-flex border justify-content-between px-3"><p className="mb-0 py-2">Total</p><p className="mb-0 py-2">$6.31</p></div>
                    </div>
                    <Link to="/checkout" className="mx-0 px-0"><GeneralButton title="PROCEED TO CHECKOUT"/></Link>
                </div>
            </div>
        </CartContainer>
        <Footer/>
        
            
    </>

);
    
    export default Cart;