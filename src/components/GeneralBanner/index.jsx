import { BannerContainer } from './style';
/*import { Link } from "react-router-dom";*/


const GeneralBanner = ({title1,title2,backgroundImage,children}) => (
    <BannerContainer backgroundImage={backgroundImage}
    className="d-flex flex-column justify-content-center align-items-center mb-5">
        <section>
            <h3>{title1}</h3>
            <h2>{title2}</h2>        
        </section>
    </BannerContainer>
);


export default GeneralBanner;

/*<img src={image} alt="logo" className=" img-fluid px-3 "/>
<button type="button" class="viewMorebtn">{btntxt}</button>*/