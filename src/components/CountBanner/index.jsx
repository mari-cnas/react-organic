import { BannerContainer } from './style';


const CountBanner = () => (
    <BannerContainer className="d-flex justify-content-center align-items-center py-4">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 container g-3">
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


