import Footer from "../../components/Footer";
import GeneralBanner from "../../components/GeneralBanner";
import Header from "../../components/Header";
import SquareCard from "../../components/SquareCard";
import brocolis from '../../assets/brocolis.png'
import salad from '../../assets/01.jpg'
import onion from '../../assets/onion.jpg'
import bean from '../../assets/bean.jpg'
import lemon from '../../assets/lemon.jpg'
import minisalad from '../../assets/salad-cart-01.jpg'
import networking from '../../assets/networking.png'
import SquareButton from "../../components/SquareButton";
import {AiFillHeart} from 'react-icons/ai'
import bgshop from '../../assets/bgshop.jpg'
import { AddBtn, HeartBtn, LessBtn, ShopContainer, ShopTitle } from "./style";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useCallback, useEffect, useState } from "react";
import SelectedProduct from "../../components/SelectedProduct";
import ProductDescription from "../../components/ProductDescription";
import ProductInfos from "../../components/ProductInfos";
import Review from "../../components/Review";


const ShopDetail = () => {
    const setTitle = useTitle()
    
    useEffect(() => {
        window.scrollTo(0,0)
        setTitle('Salad');
    }, [setTitle]);
    
    const [selectedImage, setSelectedImage] = useState(salad);
    const [showDescription, setShowDescription] = useState(true);
    const [showInfo, setShowInfo] = useState(false);
    const [showReview, setShowReview] = useState(false);
    const [productQuantity, setProductQuantity] = useState(1);
    const handleInputChange = useCallback((value) => {
        const quantity = value < 0 ? 0 : value;
        setProductQuantity(quantity);
    }, []);
    
    return (

        <>
            <Header />
            <GeneralBanner
                title1="Shop Detail"
                backgroundImage={bgshop}
            />
            <ShopContainer className="container">
                <div className="row flex-column flex-lg-row mb-5">
                    <div className=" col">
                        <div className="row">
                            <div className="col col-md-12"><img src={selectedImage} alt="logo" className=" img-fluid w-100 mb-3" /></div>
                        </div>
                        <div className="row">
                            <div className="col"><SelectedProduct onClick={() => setSelectedImage(salad)} image={salad} alt="salad" className=" img-fluid w-100 border py-1" /></div>
                            <div className="col"><SelectedProduct onClick={() => setSelectedImage(onion)} image={onion} alt="onion" className=" img-fluid w-100 border" /></div>
                            <div className="col"><SelectedProduct onClick={() => setSelectedImage(bean)} image={bean} alt="bean" className=" img-fluid w-100 border" /></div>
                        </div>
                    </div>
                    <div className="col">
                        <ShopTitle className="d-flex align-self-start" >Salad</ShopTitle>
                        <p>$2.00</p>
                        <hr />
                        <p>Duis vestibulum ante velit. Pellentesque orci felis, pharetra ut pharetra ut, interdum at mauris. Aenean efficitur aliquet libero sit amet scelerisque. Suspendisse efficitur mollis eleifend. Aliquam tortor nibh, venenatis quis sem dapibus, varius egestas lorem a sollicitudin.</p>
                        <div className="d-flex flex-column flex-md-row justify-content-start justify-content-md-between ">
                            <ul className="list-group list-group-horizontal my-1">
                                <LessBtn disabled={productQuantity === 1} onClick={() => handleInputChange(productQuantity - 1)}>-</LessBtn>
                                <input type="number" onChange={(e) => handleInputChange(e.nativeEvent.target.value)} value={productQuantity}/>
                                <AddBtn onClick={() => handleInputChange(productQuantity + 1)}>+</AddBtn>
                            </ul>
                           
                            <Link to="/cart" className="d-flex my-1"><SquareButton
                                title="ADD TO CART" /></Link>
                            <HeartBtn className=" my-1"><AiFillHeart size={22} /></HeartBtn>
                          
                        </div>
                        <hr />
                        <p>Categories: <a href="#">Food</a></p>
                        <p>Tags: <a href="#">Natural</a>, <a href="#">Organic</a>, <a href="#">Health</a>, <a href="#">Green</a>, <a href="#">Vegetable</a></p>
                        <p>ID: <a href="#">A203</a></p>
                        <img src={networking} alt="logo" className=" img-fluid " />
                    </div>
                </div>
                <div className="row flex-column flex-lg-row">
                    <div className=" col mb-5">
                    { showDescription ? <ProductDescription /> : null }
                    {showInfo ? <ProductInfos /> : null}
                    { showReview ? <Review/> : null }                         
                    </div>
                    <div className=" col ">
                        <ul className="list-group">
                            <li className="d-flex list-group-item justify-content-between border-0" onClick={() => setShowDescription(true) & setShowReview(false) & setShowInfo(false) } >
                                <p>Description</p>
                                <div className="d-flex nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    </a>
                                </div>
                            </li>
                            <hr />
                            <li className="d-flex list-group-item justify-content-between border-0 " onClick={() => setShowInfo(true) & setShowDescription(false) & setShowReview(false)} >
                                <p>Additional Information</p>
                                <div className="d-flex nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    </a>
                                </div>
                            </li>
                            <hr />
                            <li className="d-flex list-group-item justify-content-between border-0" onClick={() => setShowReview(true) & setShowInfo(false) & setShowDescription(false) } >
                                <p>Review (2)</p>
                                <div className="d-flex nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    </a>
                                </div>
                            </li>
                            <hr />
                        </ul>
                    </div>
                </div>
                <h2 className="my-5">Related Products</h2>
                <div className="row row-cols-2 row-cols-md-4 mb-5 g-2">
                    <div className="col">
                            <SquareCard
                                image={salad}
                                title="Salad"
                                price="$3.20"
                                backgroundColor="#d2ffea;"
                                align="center"
                            />
                    </div>
                    <div className="col">                       
                            <SquareCard
                                image={onion}
                                title="Onion"
                                price="$3.20"
                                backgroundColor="#d2ffea;"
                                align="center"
                            />                    
                    </div>
                    <div className="col">
                            <SquareCard
                                image={bean}
                                title="Bean"
                                price="$3.50"
                                backgroundColor="#d2ffea;"
                                align="center"
                            />
                    </div>
                    <div className="col">
                            <SquareCard
                                image={lemon}
                                title="Lemon"
                                price="$1.08"
                                backgroundColor="#d2ffea;"
                                align="center"
                            />
                    </div>
                </div>
            </ShopContainer>
            <Footer />
        
            
        </>

    );
}  
    export default ShopDetail;