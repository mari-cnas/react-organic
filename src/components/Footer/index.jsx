import { EmailBox, FooterContainer } from './style';
import { BsTelephone } from 'react-icons/bs'
import { FiMapPin } from 'react-icons/fi'
import { AiOutlineMail} from 'react-icons/ai'
import logo from '../../assets/logo.png'
import Allrights from './AllRights';
import { Link } from "react-router-dom";

const Footer = () => (
    <FooterContainer>
        <section className="d-flex container ">
            <div className=" row flex-column flex-lg-row my-5 w-100 justify-content-between">
                <div className="col col-12 col-lg-4">
                    <ul className=" list px-0">
                        <li className="pb-2"><Link to="/"><img src={logo} alt="logo" /></Link></li>
                        <li className="pb-2"><FiMapPin className="me-4"/> 379 5th Ave New York, NYC 10018</li>
                        <li className="pb-2"><BsTelephone className="me-4"/> (+1) 96 716 6879</li>
                        <li className="pb-2"><AiOutlineMail className="me-4"/>contact@site.com</li>
                    </ul>
                </div>
                <div className="col d-flex flex-column flex-lg-row col-12 col-lg-5">
                <div className=" mx-lg-4">
                <h5>SHOP</h5>
                    <ul className="d-flex flex-lg-column list px-0">
                        <li className="me-4"><Link to="#" >Food</Link></li>
                        <li className="me-4"><Link to="#" >Farm</Link></li>
                        <li className="me-4"><Link to="#" >Health</Link></li>
                        <li className="me-4"><Link to="#" >Organic</Link></li>
                        </ul> 
                    </div>      
                    <div className=" mx-lg-4">
                    <h5>SUPPORT</h5>
                    <ul className="d-flex flex-lg-column list px-0">
                        <li className="me-4"><Link to="#" >Contact Us</Link></li>
                        <li className="me-4"><Link to="#" >FAQ</Link></li>
                        <li className="me-4"><Link to="#" >Privacy Policy</Link></li>
                        <li className="me-4"><Link to="#" >Blog</Link></li>
                        </ul>
                        </div>  
                        <div className=" mx-lg-4">
                    <h5>MY ACCOUNT</h5>
                    <ul className="d-flex flex-lg-column list px-0 flex-wrap">
                        <li className="me-4"><Link to="#" >Sign In</Link></li>
                        <li className="me-4"><Link to="#" >My Cart</Link></li>
                        <li className="me-4"><Link to="#" >My Wishlist</Link></li>
                        <li className="me-4"><Link to="#" >Check Out</Link></li>
                    </ul>   
                    </div>  
                    </div>
                <div className="col col-12 col-md-7 col-lg-3">
                    <ul className="list px-0">
                        <h5>NEWSLETTER</h5> 
                        <p>Subscribe now to get daily updates</p>
                        <EmailBox className="form-group d-flex ">
                            <input type="text" placeholder={"Your email"} aria-label="Recipient's username" aria-describedby="button-addon2" className=' w-100 '/>
                            <button><AiOutlineMail/></button>
                        </EmailBox>
                    </ul>  
                </div>
            </div>
        </section>
        <Allrights/>
    </FooterContainer>
        
);

export default Footer;