import { ColoredDiv, SquareCardContainer, VegetableImg } from "./style";
import { AiOutlineEye } from 'react-icons/ai'
import {AiOutlineShoppingCart } from 'react-icons/ai'
import { AiFillHeart} from 'react-icons/ai'


const SquareCard =({image,title,align='start',price,backgroundColor,children}) => (
    <SquareCardContainer className="my-4">      
            <div className="card-body d-flex flex-column justify-content-center" id="scard">
                <VegetableImg image={image}>
                    <AiOutlineEye size={22}/>
                    <AiOutlineShoppingCart size={22}/>
                    <AiFillHeart size={22}/>
                </VegetableImg>
                <ColoredDiv backgroundColor={backgroundColor} className="d-flex flex-column justify-content-center py-4">
                    <p className={`card-text px-3 text-${align} mb-0 `} id="stitle">{title}</p>
                    <p className={`card-price px-3 text-${align} mb-0`} id="stext">{price}</p>
                </ColoredDiv>
            </div>
        
    </SquareCardContainer>

);

export default SquareCard;