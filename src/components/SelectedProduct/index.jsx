import { ProductImage } from "./style";

const SelectedProduct = ({onClick, image, alt}) => (
    <div className="col">
        <ProductImage onClick={onClick} className="img-fluid border" src={image} alt={alt} />
    </div>
);

export default SelectedProduct;