import { Banner1, Banner2, Banner3, Banner4, BannerContainer } from './style';
import { AiOutlineInstagram } from 'react-icons/ai'
import GeneralButton from '../GeneralButton';


const FollowBanner = () => (
    <BannerContainer className="d-flex">
    <Banner1 className="w-100"/>
        <Banner2 className="w-100 d-flex justify-content-center align-items-center">
        <GeneralButton 
            title="FOLLOW US">
                <AiOutlineInstagram />
            </GeneralButton>  
        </Banner2>
         
    <Banner3 className="w-100" />
    </BannerContainer>
);


export default FollowBanner;

            