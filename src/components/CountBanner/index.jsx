import { BannerContainer } from './style';
/*import { Link } from "react-router-dom";*/


const CountBanner = () => (
    <BannerContainer className="d-flex justify-content-center align-items-center">
        <div className="row container ">
            <div className="col-3">
                <h2 className="py-3">154</h2>
                <h3>HAPPY CLIENT</h3>
            </div>
            <div className="col-3">
                <h2 className="py-3">234</h2>
                <h3>PRODUCTS IN STORE</h3>
            </div>
            <div className="col-3">
                <h2 className="py-3">32</h2>
                <h3>YEAR OF EXPERIENCE </h3>
            </div>
            <div className="col-3">
                <h2 className="py-3">126</h2>
                <h3>RUNNING PROJECTS</h3>
            </div>                  
        </div>   
    </BannerContainer>
);


export default CountBanner;


