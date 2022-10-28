import { ButtonContainer } from './style';



const RoundButton = ({title,children}) => (
        
        <ButtonContainer type="button" className="viewMorebtn">{children}{title}</ButtonContainer>            
    
);


export default RoundButton;