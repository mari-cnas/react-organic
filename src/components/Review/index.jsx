import review01 from '../../assets/review01.png'
import review02 from '../../assets/review02.png'

const Review = () => {
    
    return (
        <>
        <p>2 reviews for Salad Organic Shop</p>
        <div className="border px-3 py-3"> 
            <div className="d-flex mb-3 align-items-center">
                <img src={review01} alt="person" className="me-3 "  />
                <div className="w-75">
                    <p>Mark Hunt</p>
                    <p>15 March 2017</p>
                    <p>This is a test … Quisque ligulas ipsum, euismod atras vulputate iltricies etri elit.This is a test …</p>
                </div>             
            </div>
            <div className="d-flex align-items-center">
                <img src={review02} alt="person" className="me-3" />
                <div>
                    <p>Lori Peters</p>
                    <p>16 March 2017</p>
                    <p>This is a test … </p>
                </div>             
            </div>
        </div>
    </>
)
}
export default Review;