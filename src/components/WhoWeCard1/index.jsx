import { BlogCardContainer, CardImg } from "./style";


const WhoWeCard1 =({image, title,description,backgroundImage,children}) => (
    <BlogCardContainer className=" w-100">     
            <div className="card border-0 " id="bcard">
                <div className="row g-0 align-items-center justify-content-center">
                {/* <CardImg className="col-6" backgroundImage={image} /> */}
                <img src={image} className="col-6" alt="..."/>
                    <div className="col-6">
                        <div className="card-body px-4">
                            <h5 className="card-title top-and-bottom">{title}</h5>
                            <p className="card-text mt-5">{description}</p>
                        </div>
                    </div>
                </div>
            </div>      
    </BlogCardContainer>

);

export default WhoWeCard1;

