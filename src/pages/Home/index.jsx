
import { Banner1, BannerContainer, HomeContainer } from "./style";
import Footer from "../../components/Footer";
import SquareCard from "../../components/SquareCard";
import RoundCard from "../../components/RoundCard";
import ViewBanner from "../../components/ViewBanner";
import FollowBanner from "../../components/FollowBanner";
import vegetable from '../../assets/green.png'
import fruit from '../../assets/orange.png'
import meat from '../../assets/meat.png'
import brocolis from '../../assets/brocolis.png'
import basil from '../../assets/brasil.jpg'
import lemon from '../../assets/lemon.jpg'
import apple from '../../assets/apple.jpg'
import onion from '../../assets/onion.jpg'
import bean from '../../assets/bean.jpg'
import temperos from '../../assets/temperos.jpg'
import sopa from '../../assets/sopa.jpg'
import verdes from '../../assets/verdes.jpg'
import BlogCardTop from "../../components/BlogCardTop";
import BlogCardBottom from "../../components/BlogCardBottom";
import GeneralButton from "../../components/GeneralButton";
import { AiOutlineInstagram } from 'react-icons/ai'
import useTitle from "../../hooks/useTitle";
import { useEffect } from "react";
import Header from "../../components/Header";
import folhas from '../../assets/folhas.png'



const Home = () =>{

const setTitle = useTitle()

useEffect(() => {
    setTitle();
}, [setTitle]);
    
    return (
        <>
            
        <BannerContainer className="h-100"><Header className="h-100" /> </BannerContainer>
        <main >
            <HomeContainer className="container"> 
            <div className="row row-cols-1 row-cols-md-3 my-5">
                <div className="col">
                    <RoundCard
                    title="Vegetable"
                    image={vegetable}
                    />
                </div>
                <div className="col">
                    <RoundCard
                    title="Fruit"
                    image={fruit}
                    />
                </div>
                <div className="col">
                    <RoundCard
                    title="Meat"
                    image={meat}
                    />
                </div>
            </div>
            <div className="divisiont">
                <h2 className="my-5">Our Products</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-5 g-4">
                <div className="col d-flex">
                    <SquareCard
                    image={brocolis}
                    title="Brocolis"
                    price="$2.00"
                        backgroundColor="white"
                        align="start"
                    />
                </div>
                <div className="col d-flex">
                    <SquareCard
                     image={bean}
                     title="Bean"
                     price="$1.10"
                     backgroundColor="white"
                     />
                </div>
                <div className="col d-flex">
                    <SquareCard
                     image={apple}
                     title="Apple"
                     price="$4.05"
                     backgroundColor="white"
                     />
                </div>
                <div className="col d-flex">
                    <SquareCard
                     image={lemon}
                     title="Lemon"
                     price="$3.10"
                     backgroundColor="white"
                     />
                </div>
                <div className="col d-flex">
                    <SquareCard
                     image={onion}
                     title="Onion"
                     price="$2.00"
                     backgroundColor="white"
                     />
                </div>
                <div className="col d-flex">
                    <SquareCard
                     image={basil}
                     title="Basil"
                     price="$1.55"
                     backgroundColor="white"
                     />
                </div>
            </div>
            </HomeContainer>
        <ViewBanner/>
        <HomeContainer className="container">
            <h2 className="my-5">The Blog</h2>
            <div className="row row-cols-1 row-cols-lg-3 my-5">
                <div className="col d-flex">
                    <BlogCardTop
                    image={temperos}
                    title="Beauty With Organic Products"
                    description="Etiam at varius diam, id blandit erat. Suspendisse eget volutpat risus, id venenatis justo. Fusce elementum ligula elit. Duis ultricies ultrices nibh, a tincidunt risus pretium eleifend."
                    />
                </div>
                <div className="col d-flex ">
                    <BlogCardBottom
                     image={verdes}
                     title="Green Vegetables Are Good For Healthy"
                     description="Vivamus consectetur nulla mattis lorem ultricies, ac congue tellus consectetur. Vivamus sed purus volutpat, varius mauris id, tempus augue. Nuefd ans congue liquam."
                     />
                </div>
                <div className="col d-flex ">
                    <BlogCardTop image={sopa}
                    title="Refreshing Green Smoothie Recipe"
                    description="Praesent efficitur felis eu luctus vestibulum. In hac habitasse platea dictumst. Nam egestas eu nisl ac pellentesque. Duis congue suscipit lorem vel congue."
                    />
                </div>
            </div>
            </HomeContainer>
        </main>
        <FollowBanner/>
            <Banner1 className="d-sm-block d-md-none">
                <div className="d-flex  justify-content-center align-items-center h-100">
                <GeneralButton 
                title="FOLLOW US">
                    <AiOutlineInstagram />
                    </GeneralButton></div> </Banner1>  
                    
        <Footer/>            
    
    </> 
);
}
export default Home;