
import { SmallTable } from "./style";

const ProductDetails = ({text}) => (
    <>
        <p>Additional Information</p>
         <SmallTable className="table border align-middle table-striped table-light d-table mb-0 ">
            <tbody>
                <tr >
                    <th scope="row " >Country</th>
                    <td class="product" >England, London</td>
                </tr>
                <tr>
                    <th scope="row" >Weight</th>
                    <td >3.5kg</td>
                </tr>
                <tr>
                    <th scope="row" >Next Day Delivery Available</th>
                    <td>Yes</td>
                </tr>
                
            </tbody>
        </SmallTable>
    </>
);

export default ProductDetails;

//<span><RiArrowDownSLine /></span>