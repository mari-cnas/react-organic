import { BlogCardContainer, CardImg } from "./style";


const WhoWeCard2 =({image, title,description,children}) => (
    <BlogCardContainer className="w-100">
        <div className="card border-0 " id="bcard">
            <div className="row g-0 align-items-center justify-content-center">
                <div className="col-6">
                    <div className="d-flex flex-column card-body px-4">
                        <h5 className="card-title d-flex align-self-end top-and-bottom">{title}</h5>
                        <p className="card-text text-end mt-5">{description}</p>
                    </div>
                </div>
                {/* <CardImg className="col-6" backgroundImage={image} /> */}
                <img src={image} className="col-6" alt="..."/>
            </div>
        </div>
    </BlogCardContainer>

);

export default WhoWeCard2;

