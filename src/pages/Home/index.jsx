
import { HomeContainer } from "./style";
import MainBanner from "../../components/MainBanner";
import Footer from "../../components/Footer";
import SquareCard from "../../components/SquareCard";
import RoundCard from "../../components/RoundCard";
import ViewBanner from "../../components/ViewBanner";
import FollowBanner from "../../components/FollowBanner";
import vegetable from '../../assets/green.png'
import fruit from '../../assets/orange.png'
import meat from '../../assets/meat.png'
import brocolis from '../../assets/brocolis.png'
import lemon from '../../assets/lemon.jpg'
import spinach from '../../assets/spinach.jpg'
import onion from '../../assets/onion.jpg'
import bean from '../../assets/bean.jpg'
import temperos from '../../assets/temperos.jpg'
import sopa from '../../assets/sopa.jpg'
import verdes from '../../assets/verdes.jpg'
import BlogCardTop from "../../components/BlogCardTop";
import BlogCardBottom from "../../components/BlogCardBottom";



const Home = () => (
    <HomeContainer>
       <MainBanner/>
        <main className="container flex-grow-1">
            <div className="row row-cols-md-3 my-5">
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
            <div className="row row-cols-md-3 flex-wrap">
                <div className="col my-4 px-5">
                    <SquareCard
                    image={brocolis}
                    title="Brocolis"
                    price="$2.00"
                    backgroundColor="white"
                    />
                </div>
                <div className="col my-4 px-5">
                    <SquareCard
                     image={bean}
                     title="Bean"
                     price="$1.10"
                     backgroundColor="white"
                     />
                </div>
                <div className="col my-4 px-5">
                    <SquareCard
                     image={spinach}
                     title="Spinach"
                     price="$3.20"
                     backgroundColor="white"
                     />
                </div>
                <div className="col my-4 px-5">
                    <SquareCard
                     image={lemon}
                     title="Lemon"
                     price="$3.10"
                     backgroundColor="white"
                     />
                </div>
                <div className="col my-4 px-5">
                    <SquareCard
                     image={onion}
                     title="Onion"
                     price="$2.00"
                     backgroundColor="white"
                     />
                </div>
                <div className="col my-4 px-5">
                    <SquareCard
                     image={onion}
                     title="Onion"
                     price="$2.00"
                     backgroundColor="white"
                     />
                </div>
            </div>
        </main>
            <ViewBanner/>
        <main className="container flex-grow-1">
            <h2 className="my-5">The Blog</h2>
            <div className="row row-cols-md-3 my-5">
                <div className="col">
                    <BlogCardTop
                    image={temperos}
                    imgposition="top"
                    title="Beauty With Organic Products"
                    description="Etiam at varius diam, id blandit erat. Suspendisse eget volutpat risus, id venenatis justo. Fusce elementum ligula elit. Duis ultricies ultrices nibh, a tincidunt risus pretium eleifend."
                    />
                </div>
                <div className="col">
                    <BlogCardBottom
                     image={verdes}
                     imgposition="bottom"
                     title="Green Vegetables Are Good For Healthy"
                     description="Vivamus consectetur nulla mattis lorem ultricies, ac congue tellus consectetur. Vivamus sed purus volutpat, varius mauris id, tempus augue. Nuefd ans congue liquam."
                     />
                </div>
                <div className="col">
                    <BlogCardTop image={sopa}
                    imgposition="top"
                    title="Refreshing Green Smoothie Recipe"
                    description="Praesent efficitur felis eu luctus vestibulum. In hac habitasse platea dictumst. Nam egestas eu nisl ac pellentesque. Duis congue suscipit lorem vel congue."
                    />
                </div>
            </div>
            
        </main>
        <FollowBanner/>
        <Footer/>            
    </HomeContainer>
    
);

export default Home;