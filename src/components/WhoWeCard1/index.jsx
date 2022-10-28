import { BlogCardContainer } from "./style";


const WhoWeCard1 =({image, title,description,children}) => (
    <BlogCardContainer className="d-flex container">
        <div className="d-flex ">
            <div className="d-flex card border-0 " id="bcard">
                <div className="row g-0 align-items-center justify-content-center">
                    <div className="col-md-5">
                        <img src={image} className="img-fluid" alt="..."/>
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BlogCardContainer>

);

export default WhoWeCard1;

