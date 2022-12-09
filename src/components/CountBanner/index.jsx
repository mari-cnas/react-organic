import { BannerContainer } from './style';
/*import { Link } from "react-router-dom";*/


const CountBanner = () => (
    <BannerContainer className="d-flex justify-content-center align-items-center">
        <div className="row row-cols-2 row-cols-lg-4 container g-3">
            <div className="col">
                <h2>154</h2>
                <h3>HAPPY CLIENT</h3>
            </div>
            <div className="col">
                <h2>234</h2>
                <h3>PRODUCTS IN STORE</h3>
            </div>
            <div className="col">
                <h2 >32</h2>
                <h3>YEAR OF EXPERIENCE </h3>
            </div>
            <div className="col">
                <h2 >126</h2>
                <h3>RUNNING PROJECTS</h3>
            </div>                  
        </div>   
    </BannerContainer>
);


export default CountBanner;


