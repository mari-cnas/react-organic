import { ButtonContainer } from './style';



const GeneralButton = ({title,children}) => (
        
        <ButtonContainer type="button" className="viewMorebtn">{children}{title}</ButtonContainer>            
    
);


export default GeneralButton;