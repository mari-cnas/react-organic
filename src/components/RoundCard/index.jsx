import { RoundCardContainer, RoundImg } from "./style";


const RoundCard =({image,title,description,children}) => (
    <RoundCardContainer>
        <div className="card px-lg-4" id="rcard">
            <div className="card-body d-flex flex-column align-items-center ">
                <RoundImg src={image} alt="logo" className="card-img-top img-fluid px-lg-5 py-lg-5 py-sm-1"/>
                <h3 className="card-text">{title}</h3>
                <h4 className="card-text">{description}</h4>
            </div>
        </div>
    </RoundCardContainer>

);

export default RoundCard;