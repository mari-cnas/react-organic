import {NavContainer } from './style';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'


const Navbar =() => (
        <NavContainer >
            <div className="container" >
                <div className=" navbar navbar-expand-lg">
                    <img src={logo} alt="logo" className="px-3"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
                        <div className="d-flex justify-content-between">
                            <div className="navbar-nav d-flex me-5">
                                <Link to="/" className="px-4">HOME</Link>
                                <Link to="/quem-somos" className="px-4">ABOUT</Link>
                                <Link to="/produtos" className="px-4">SHOP</Link>
                                <Link to="/checkout" className="px-4">CHECKOUT</Link>
                                <Link to="/contact" className="px-4">CONTACT</Link>
                            </div>
                            <div className="d-flex ">
                                <aside className="d-flex px-4">
                                    <div className="d-flex nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            USD
                                        </a>
                                        <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-divider">|</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>   
                                    <Link to="/carrinho" className="ps-4 ms-4"><AiOutlineShoppingCart /></Link>           
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NavContainer>
    

);

export default Navbar;