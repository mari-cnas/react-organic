import { BlogCardContainer, ImgBox } from "./style";
import { IoChatbubbleOutline } from "react-icons/io5";

const BlogCardBottom =({image,imgposition, title,description,children}) => (
    <BlogCardContainer className="w-100 d-flex flex-column flex-md-row flex-lg-column mb-5 px-0">
            <div className=" card-body py-5 px-4 order-first " >
                <h5 className="card-title ">{title}</h5>
                <div className="d-flex justify-content-between">
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <p className="card-text"><small className="text-muted">0<IoChatbubbleOutline/></small></p>
                </div>
                <p className="card-text">{description}</p>
        </div>
        <div className=" order-last ratio ratio-1x1">
        <ImgBox image={image}   alt="..." />
        </div>
            
    </BlogCardContainer>

);

export default BlogCardBottom;
