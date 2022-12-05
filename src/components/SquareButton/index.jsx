import { ButtonContainer } from './style';



const SquareButton = ({title,children}) => (
        
        <ButtonContainer type="button" className="viewMorebtn">{children}{title}</ButtonContainer>            
    
);


export default SquareButton;