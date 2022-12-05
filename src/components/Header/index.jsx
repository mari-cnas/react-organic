import Navbar from '../Navbar';
import { HeaderBg } from './style';


const Header =() => (
    <HeaderBg className="d-flex justify-content-center py-3 " >
      <Navbar/>
    </HeaderBg>

);

export default Header;