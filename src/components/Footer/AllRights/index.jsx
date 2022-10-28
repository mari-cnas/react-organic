import { RightsContainer } from "./style";
import cc1 from '../../../assets/creadit-card-01.png'
import cc2 from '../../../assets/creadit-card-02.png'
import cc3 from '../../../assets/creadit-card-03.png'
import cc4 from '../../../assets/creadit-card-04.png'

/*&copy*/
const Allrights = () => (
    <RightsContainer>
    <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center ">      
            <span className="mb-3 mb-md-0 "> Copyright © 2017 Designed by AuThemes. All rights reserved.</span>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"> <img src={cc1} alt="logo" className=" img-fluid px-1 "/></li>
                <li className="ms-3"> <img src={cc2} alt="logo" className=" img-fluid px-1 "/></li>
                <li className="ms-3"> <img src={cc3} alt="logo" className=" img-fluid px-1 "/></li>
                <li className="ms-3"> <img src={cc4} alt="logo" className=" img-fluid px-1 "/></li>
            </ul>
        </footer>
    </div>
    </RightsContainer>
);



export default Allrights;