import { BlogCardContainer, CardImg } from "./style";


const WhoWeCard =({image, title,description,children}) => (
    <BlogCardContainer>     
        <div className="row g-0 align-items-center justify-content-center">
        <div className="d-flex col col-6">
            <CardImg image={image} className="w-100" alt="..." /> 
        </div>   
        <div className="col col-6">
            <div className="card-body px-4">
                <h5 className="card-title top-and-bottom">{title}</h5>
                <p className="card-text mt-5">{description}</p>
            </div>
        </div>
        </div>        
    </BlogCardContainer>

);

export default WhoWeCard;

