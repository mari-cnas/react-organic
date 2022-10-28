import { BlogCardContainer } from "./style";
import { IoChatbubbleOutline } from "react-icons/io5";

const BlogCardTop =({image,imgposition, title,description,children}) => (
    <BlogCardContainer>
        <div className="card" id="bcard">
            <img src={image} className={`card-img-${imgposition}`} alt="..."/>
            <div className="card-body py-5 px-5" >
                <h5 className="card-title">{title}</h5>
                <div className="d-flex justify-content-between">
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <p className="card-text"><small className="text-muted">0<IoChatbubbleOutline/></small></p>
                </div>
                <p className="card-text">{description}</p>
            </div>
        </div>
    </BlogCardContainer>

);

export default BlogCardTop;

