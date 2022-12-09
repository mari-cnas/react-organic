import GeneralButton from '../GeneralButton';
import { BannerContainer } from './style';



const ViewBanner = () => (
    <BannerContainer className="d-flex flex-column justify-content-center align-items-center">
            <h3 className="my-1">Organic Food</h3>
            <h2 className=" mb-lg-5 my-4">Healthy - Fresh - Delicious</h2>
            <GeneralButton
            title="VIEW MORE"/>       
    </BannerContainer>
);


export default ViewBanner;