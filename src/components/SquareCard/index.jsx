import { ColoredDiv, IconContainer, SquareCardContainer } from "./style";
import { AiOutlineEye } from 'react-icons/ai'
import {AiOutlineShoppingCart } from 'react-icons/ai'
import { AiFillHeart} from 'react-icons/ai'


const SquareCard =({image,title,align='start',price,backgroundColor,children}) => (
    <SquareCardContainer className="my-4">
       
            <div className="card-body d-flex flex-column justify-content-center" id="scard">
                <img src={image} alt="logo" className=" img-fluid px-3 "/>
                <IconContainer className="d-flex justify-content-end" id="icons">
                    <span><AiOutlineEye/></span>
                    <span><AiOutlineShoppingCart/></span>
                    <span><AiFillHeart/></span>
                </IconContainer>
                <ColoredDiv backgroundColor={backgroundColor}>
                    <p className={`card-text px-3 text-${align}`} id="stitle">{title}</p>
                    <p className={`card-price px-3 text-${align}`} id="stext">{price}</p>
                </ColoredDiv>
            </div>
        
    </SquareCardContainer>

);

export default SquareCard;