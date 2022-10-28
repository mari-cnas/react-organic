import Footer from "../../components/Footer";
import GeneralBanner from "../../components/GeneralBanner";
import Header from "../../components/Header";
import SquareCard from "../../components/SquareCard";
import brocolis from '../../assets/brocolis.png'
import salad from '../../assets/01.jpg'
import minisalad from '../../assets/salad-cart-01.jpg'
import networking from '../../assets/networking.png'
import GeneralButton from "../../components/GeneralButton";
import {AiFillHeart} from 'react-icons/ai'
import bgshop from '../../assets/bgshop.jpg'


const ShopDetail = () => (
<>
        <Header/>
        <GeneralBanner
        title1="Shop Detail"
        backgroundImage={bgshop}/>
        <main className="container">
            <div className="row mb-5">
                <div className=" col">
                    <div className="row">
                        <div className="col col-md-12"><img src={salad} alt="logo" className=" img-fluid px-3 w-100"/></div>
                        <div className="col"><img src={minisalad} alt="logo" className=" img-fluid px-3 w-100 border"/></div>
                        <div className="col"><img src={minisalad} alt="logo" className=" img-fluid px-3 w-100 border"/></div>
                        <div className="col"><img src={minisalad} alt="logo" className=" img-fluid px-3 w-100 border"/></div>
                    </div>
                </div>
                <div className="col">
                    <h2>Sald</h2>
                    <p>$2.00</p>
                    <hr />
                    <p>Duis vestibulum ante velit. Pellentesque orci felis, pharetra ut pharetra ut, interdum at mauris. Aenean efficitur aliquet libero sit amet scelerisque. Suspendisse efficitur mollis eleifend. Aliquam tortor nibh, venenatis quis sem dapibus, varius egestas lorem a sollicitudin.</p>
                    <div className="d-flex justify-content-between">
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item"><a class="page-link" href="#">-</a></li>
                            <li class="list-group-item"><a class="page-link" href="#">1</a></li>
                            <li class="list-group-item"><a class="page-link" href="#">+</a></li>
                        </ul>
                        <GeneralButton
                        title="ADD TO CART"/>
                        <GeneralButton><AiFillHeart/></GeneralButton>
                    </div>
                    <hr/>
                    <p>Categories: Food</p>
                    <p>Tags: Natural, Organic, Health, Green, Vegetable</p>
                    <p>ID: A203</p>
                    <img src={networking} alt="logo" className=" img-fluid "/>
                </div>
            </div>
            <div className="row">
                <div className=" col">
                    <p>Description</p>
                    <ul>
                        <li>Using energy and natural resources responsibly</li>
                        <li>Maintaining biodiversity</li>
                        <li>Respecting regional environmental balances</li>
                        <li>Enhancing soil fertility</li>
                        <li>Preserving water quality</li>
                        <li>Promoting animal health and welfare</li>
                        <li>Catering for animals' specific needs</li>
                    </ul>
                </div>
                <div className=" col">
                    <ul class="list-group">
                        <li class="d-flex list-group-item justify-content-between border-0">
                            <p>Description</p>
                            <div className="d-flex nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                </a>
                            </div>  
                        </li>
                        <hr/>   
                        <li class="d-flex list-group-item justify-content-between border-0">
                            <p>Additional Information</p>
                            <div className="d-flex nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                </a>
                            </div>  
                        </li>
                        <hr/> 
                        <li class="d-flex list-group-item justify-content-between border-0">
                            <p>Review (2)</p>
                            <div className="d-flex nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                </a>
                            </div>  
                        </li>
                        <hr/>                   
                    </ul>                    
                </div>        
            </div>   
            <h2>Related Products</h2>
            <div className="row mb-5">
                <div className="col">
                    <SquareCard
                    image={brocolis}
                    title="Brocolis"
                    price="$2.00"
                    backgroundColor="#d2ffea;"
                    align="center"
                    />
                </div>
                <div className="col">
                    <SquareCard
                    image={brocolis}
                    title="Brocolis"
                    price="$2.00"
                    backgroundColor="#d2ffea;"
                    align="center"
                    />
                </div>
                <div className="col">
                    <SquareCard
                    image={brocolis}
                    title="Brocolis"
                    price="$2.00"
                    backgroundColor="#d2ffea;"
                    align="center"
                    />
                </div>
                <div className="col">
                    <SquareCard
                    image={brocolis}
                    title="Brocolis"
                    price="$2.00"
                    backgroundColor="#d2ffea;"
                    align="center"
                    />
                </div>
            </div>
        </main>
        <Footer/>
        
            
    </>

);
    
    export default ShopDetail;