import { BannerContainer } from './style';
import { AiOutlineInstagram } from 'react-icons/ai'
import GeneralButton from '../GeneralButton';


const FollowBanner = () => (
    <BannerContainer className=" d-flex justify-content-center align-items-center" >
            <GeneralButton
            title="FOLLOW US">
                <AiOutlineInstagram className="me-2 my-3"/>
            </GeneralButton>           
    </BannerContainer>
);


export default FollowBanner;