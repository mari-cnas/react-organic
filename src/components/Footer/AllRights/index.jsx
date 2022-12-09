import { RightsContainer } from "./style";
import cc1 from '../../../assets/creadit-card-01.png'
import cc2 from '../../../assets/creadit-card-02.png'
import cc3 from '../../../assets/creadit-card-03.png'
import cc4 from '../../../assets/creadit-card-04.png'

/*&copy*/
const Allrights = () => (
    <RightsContainer>
    <div className="container">
            <footer className="d-flex flex-column flex-lg-row justify-content-between align-items-center "> 
            <ul className="nav justify-content-center justify-content-lg-end list-unstyled d-flex order-1 order-lg-2">
                <li className="ms-3"> <img src={cc1} alt="logo" className=" img-fluid px-1 "/></li>
                <li className="ms-3"> <img src={cc2} alt="logo" className=" img-fluid px-1 "/></li>
                <li className="ms-3"> <img src={cc3} alt="logo" className=" img-fluid px-1 "/></li>
                <li className="ms-3"> <img src={cc4} alt="logo" className=" img-fluid px-1 "/></li>
            </ul>        
            <span className="mb-3 mb-md-0 order-2 order-lg-1"> Copyright © 2017 Designed by AuThemes. All rights reserved.</span>
        </footer>
    </div>
    </RightsContainer>
);



export default Allrights;