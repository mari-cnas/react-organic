import Footer from "../../components/Footer";
import GeneralBanner from "../../components/GeneralBanner";
import GeneralButton from "../../components/GeneralButton";
import Header from "../../components/Header";
import bgcheck from '../../assets/bgcheck.jpg'
import { CheckContainer } from "./style";


const Checkout = () => (

    <>
        <Header/>
        <GeneralBanner
        title1="Checkout"
        backgroundImage={bgcheck}/>
        <div class="container">
            <CheckContainer>          
                <div className="mb-3">
                    <p >Returning customer? Click here to login</p>
                </div>    
                <div className="mb-5">
                    <p>Have a coupon? Click here to enter your code</p>
                </div>   
                <div class="col">
                    <h4 class="mb-3">Billing Details</h4>
                    <form class="needs-validation" novalidate/>
                    <div class="row g-3">
                        <div class="col-sm-6">
                            <label for="firstName" class="form-label">First name</label>
                            <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <label for="lastName" class="form-label">Last name</label>
                            <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
                            <div class="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="companyname" class="form-label">Company Name</label>
                            <input type="text" class="form-control" id="companyname" placeholder="" required/>
                            <div class="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                        <div class="col-6">
                            <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                            <input type="email" class="form-control" id="email" placeholder=""/>
                            <div class="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>
                        <div class="col-6">
                            <label for="phone" class="form-label">Phone <span class="text-muted">(Optional)</span></label>
                            <input type="text" class="form-control" id="phone" placeholder=""/>
                            <div class="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>
                        <div class="col-6">
                            <label for="country" class="form-label">Country</label>
                            <select class="form-select" id="country" required>
                                <option value="">Choose...</option>
                                <option>United States</option>
                            </select>
                            <div class="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </div>
                        <div class="col-6">
                            <label for="address" class="form-label">Address</label>
                            <input type="text" class="form-control" id="address" placeholder="" required/>
                            <div class="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                            </div>
                            <div class="col-12">
                            <label for="town" class="form-label">Town/City <span class="text-muted">(Optional)</span></label>
                            <input type="text" class="form-control" id="town" placeholder=""/>
                        </div>
                        <div class="col-6">
                            <label for="zip" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="zip" placeholder="" required/>
                            <div class="invalid-feedback">
                                Zip code required.
                            </div>
                        </div>
                        <div class="col-6">
                            <label for="state" class="form-label">State</label>
                            <select class="form-select" id="state" required>
                                <option value="">Choose...</option>
                                <option>California</option>
                            </select>
                            <div class="invalid-feedback">
                                Please provide a valid state.
                            </div>
                        </div>                        
                    </div>
                    <div class="form-check my-3">
                        <input type="checkbox" class="form-check-input" id="same-address"/>
                        <label class="form-check-label" for="same-address">Create an account?</label>
                    </div>
                    <div >
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span className="mb-4">Your order</span>
                        </h4>
                        <div class="row row-cols-2 border mb-3">
                            <div class="col">
                                <h6 class="my-0">Product name</h6>
                            </div>                            
                            <div class="col d-flex justify-content-between ">
                                <span class="text-muted">Total</span>
                            </div>
                            <div class="col">
                                <h6 class="my-0 text-muted">Salad x 1</h6>
                            </div>                            
                            <div class="col d-flex justify-content-between ">
                                <span class="text-muted">$2.26</span>
                            </div>
                            <div class="col">
                                <h6 class="my-0 text-muted">Apple x 1</h6>
                            </div>                            
                            <div class="col d-flex justify-content-between ">
                                <span class="text-muted">$4.05</span>
                            </div>
                            <div class="col">
                                <h6 class="my-0">Subtotal</h6>
                            </div>                            
                            <div class="col d-flex justify-content-between ">
                                <span class="text-muted">$6.31</span>
                            </div>
                            <div class="col">
                                <h6 class="my-0">Shipping</h6>
                            </div>                            
                            <div class="col d-flex justify-content-between ">
                                <span class="text-muted">Flat rate</span>
                            </div>
                            <div class="col">
                                <h6 class="my-0">Total</h6>
                            </div>                            
                            <div class="col d-flex justify-content-between ">
                                <span class="text-muted">$6.31</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-3">
                    <div class="form-check">
                    <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                    <label class="form-check-label" for="credit">Check payments</label>
                    </div>
                    <div class="form-check">
                    <input id="credit" name="paymentMethod" type="radio" class="form-check-input" required/>
                    <label class="form-check-label" for="credit">Paypal</label>
                    </div>
                </div>
                <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                <div className="mb-5">
                <GeneralButton
                title="PLACE ORDER"/>   
                </div>            
            </CheckContainer>
        </div>
        <Footer/>
        
            
    </>
);
    
    export default Checkout;