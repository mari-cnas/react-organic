import { ButtonContainer } from './style';



const GeneralButton = ({title,children,backgroundColor='#97ae76', color='white'}) => (
        
        <ButtonContainer type="button" className="viewMorebtn" backgroundColor={backgroundColor} color={color}>{children}{title}</ButtonContainer>            
    
);


export default GeneralButton;