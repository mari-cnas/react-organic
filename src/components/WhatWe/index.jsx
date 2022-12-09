import { BlogCardContainer, CardImg } from "./style";


const WhatWeCard =({image, title,description,children}) => (
    <BlogCardContainer >
        <div className="row g-0 align-items-center justify-content-center">
            <div className="col col-6">
                <div className="d-flex flex-column card-body px-4">
                    <h5 className="card-title d-flex align-self-end top-and-bottom">{title}</h5>
                    <p className="card-text text-end mt-5">{description}</p>
                </div>
            </div>              
            <div className="d-flex col col-6">
                <CardImg image={image} className="w-100 " alt="..." /> 
            </div>    
        </div>
    </BlogCardContainer>

);

export default WhatWeCard;

