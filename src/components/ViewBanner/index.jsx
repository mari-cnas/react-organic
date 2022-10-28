import GeneralButton from '../GeneralButton';
import { BannerContainer } from './style';



const ViewBanner = () => (
    <BannerContainer className="d-flex flex-column justify-content-center align-items-center">
            <h3 id="txtbanner1">Organic Food</h3>
            <h2 id="txtbanner2" className="mb-5">Healthy - Fresh - Delicious</h2>
            <GeneralButton
            title="VIEW MORE"/>       
    </BannerContainer>
);


export default ViewBanner;