import { ContactCardContainer } from './style';


const CardContact = ({icon,title, children}) => (
        <ContactCardContainer className="container card d-flex flex-column align-items-center justify-content-center py-4 my-3" >
            {icon}
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <h6 className="card-title">{title}</h6>
            </div>
        </ContactCardContainer>
        
);

export default CardContact;

