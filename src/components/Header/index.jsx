import { HeaderBg, MenuMobile, MenuOverlay, NavSection } from './style';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import logor from '../../assets/logor.png'
import { AiOutlineShoppingCart,AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';



const Header = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    return (
    <HeaderBg className="d-flex justify-content-center py-3" >
            <MenuOverlay isMenuOpened={isMenuOpened} onClick={() => setIsMenuOpened(false)} className="d-flex d-md-none position-fixed h-100 w-100" />
            <div className="container d-flex align-items-center justify-content-between w-100 d-block d-md-none">
                <Link to="/"><img src={logor} alt="logo" className="img-fluid mx-3 mt-2" style={{ height: '30px' }} /></Link>  
                <div className="d-flex align-items-end justify-content-between mx-3">
                    <Link to="/cart" className="me-2"><AiOutlineShoppingCart size={18}/></Link> 
                    <GiHamburgerMenu type="button" onClick={() => setIsMenuOpened(true)} size={18}  />
                </div>
            </div>
            <MenuMobile isMenuOpened={isMenuOpened} className="d-flex flex-column d-md-none position-fixed bg-white">        
            <NavSection className="container w-100">               
                    <div className=" d-flex flex-column justify-content-center mb-3">     
                            <AiOutlineClose type="button" onClick={() => setIsMenuOpened(false)} className="align-self-end"/>
                            <Link to="/"><img src={logor} alt="logo" className="align-self-start" style={{height:'30px'}}/></Link>                           
                        </div>                           
                        <div className="d-flex flex-column w-100">                                         
                        <Link to="/" className="mb-2">HOME</Link>
                        <Link to="/about" className="mb-2">ABOUT</Link>
                        <Link to="/shop" className="mb-2">SHOP</Link>
                        <Link to="/contact" className=" mb-2">CONTACT</Link> 
                    </div>
            </NavSection>              
            </MenuMobile>
            <NavSection className="w-100 d-none d-md-flex">     
                <div className="container d-flex">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <div>
                        <Link to="/"><img src={logo} alt="logo" className="me-2 me-lg-5"/></Link>  
                        <Link to="/" className="px-4">HOME</Link>
                        <Link to="/about" className="px-4">ABOUT</Link>
                        <Link to="/shop" className="px-4">SHOP</Link>
                        <Link to="/contact" className="px-4">CONTACT</Link> 
                        </div>
                        <Link to="/cart"><AiOutlineShoppingCart size={18}/></Link> 
                    </div>
                </div>
            </NavSection>
    </HeaderBg>
)
}
export default Header;