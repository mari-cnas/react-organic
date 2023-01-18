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
            <div className=" row flex-column flex-lg-row my-5 w-100 ">
                <div className="col col-12 col-lg-3 me-5">
                    <ul className=" list px-0">
                        <li className="pb-2"><Link to="/"><img src={logo} alt="logo" /></Link></li>
                        <li className="pb-2 "><FiMapPin className="me-2"/> 379 5th Ave New York, NYC 10018</li>
                        <li className="pb-2 "><BsTelephone className="me-2"/> (+1) 96 716 6879</li>
                        <li className="pb-2 "><AiOutlineMail className="me-2"/>contact@site.com</li>
                    </ul>
                </div>
                <div className="col d-flex flex-column flex-lg-row col-12 col-lg-5 justify-content-between me-4">
                    <div >
                    <h5>SHOP</h5>
                    <ul className="d-flex flex-lg-column list px-0 ">
                        <li ><Link to="#" className="me-4">Food</Link></li>
                        <li ><Link to="#" className="me-4">Farm</Link></li>
                        <li ><Link to="#" className="me-4">Health</Link></li>
                        <li ><Link to="#" className="me-4">Organic</Link></li>
                        </ul> 
                    </div>      
                    <div >
                    <h5>SUPPORT</h5>
                    <ul className="d-flex flex-lg-column list px-0 ">
                        <li ><Link to="#" className="me-4">Contact Us</Link></li>
                        <li ><Link to="#" className="me-4">FAQ</Link></li>
                        <li ><Link to="#" className="me-4">Privacy Policy</Link></li>
                        <li ><Link to="#" className="me-4">Blog</Link></li>
                        </ul>
                        </div>  
                        <div >
                    <h5>MY ACCOUNT</h5>
                    <ul className="d-flex flex-lg-column list px-0 flex-wrap ">
                        <li ><Link to="#" className="me-4">Sign In</Link></li>
                        <li ><Link to="#" className="me-4">My Cart</Link></li>
                        <li ><Link to="#" className="me-4">My Wishlist</Link></li>
                        <li ><Link to="#" className="me-4">Check Out</Link></li>
                    </ul>   
                    </div>  
                    </div>
                <div className="col col-12 col-sm-9 col-lg-3 ">
                    <ul className="list px-0">
                        <h5>NEWSLETTER</h5> 
                        <p>Subscribe now to get daily updates</p>
                        <EmailBox className="form-group d-flex justify-content-between">
                            <input type="text" placeholder={"Your email"} aria-label="Recipient's username" aria-describedby="button-addon2" />
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