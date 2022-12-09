import { ColoredDiv, SquareCardContainer, VegetableImg } from "./style";
import { AiOutlineEye } from 'react-icons/ai'
import {AiOutlineShoppingCart } from 'react-icons/ai'
import { AiFillHeart} from 'react-icons/ai'


const SquareCard =({image,title,align='start',price,backgroundColor,children}) => (
    <SquareCardContainer className=" w-100">      
            <div className="card-body d-flex flex-column align-items-center ">
                <VegetableImg image={image} >
                    <div className="d-flex justify-content-end pe-3">
                            <AiOutlineEye size={22}/>
                            <AiOutlineShoppingCart size={22}/>
                            <AiFillHeart size={22} />
                    </div>
                </VegetableImg>               
             </div>   
            <ColoredDiv backgroundColor={backgroundColor} className="d-flex flex-column ps-2 pb-4">
                    <p className={`card-text px-3 text-${align} mb-0 `} id="stitle">{title}</p>
                    <p className={`card-price px-3 text-${align} mb-0`} id="stext">{price}</p>
                </ColoredDiv>
    </SquareCardContainer>

);

export default SquareCard;