import { BlogCardContainer } from "./style";
import { IoChatbubbleOutline } from "react-icons/io5";

const BlogCardTop =({image, title,description,children}) => (
    <BlogCardContainer className="w-100 d-flex flex-lg-column">
        <div className="row">
        <img src={image} className="col col-4 col-lg-12 img-fluid "  alt="..." />
        <div className= "col col-6 col-lg-12 card-body py-5 px-4" >
            <h5 className="card-title mb-2">{title}</h5>
            <div className="d-flex justify-content-between">
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <p className="card-text"><small className="text-muted">0 <IoChatbubbleOutline/></small></p>
            </div>
            <p className="card-text">{description}</p>
            </div>
        </div>
    </BlogCardContainer>

);

export default BlogCardTop;

