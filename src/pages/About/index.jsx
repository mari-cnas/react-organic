import Footer from "../../components/Footer";
import Header from "../../components/Header";
import p1 from '../../assets/pessoa01.jpg'
import p2 from '../../assets/pessoa02.jpg'
import p3 from '../../assets/pessoa03.jpg'
import RoundCard from "../../components/RoundCard";
import { AboutContainer } from "./style";
import handsare from '../../assets/handsare.jpg'
import handsdo from '../../assets/handsdo.jpg'
import GeneralBanner from "../../components/GeneralBanner";
import CountBanner from "../../components/CountBanner";
import WhoWeCard from "../../components/WhoWeCard";
import WhatWeCard from "../../components/WhatWe";
import leaves from '../../assets/folhas2.jpg'


const About = () => (
    <AboutContainer>
        <Header/>
        <main > 
            <GeneralBanner className="mb-5 pb-5"
            title1 ="About Us"
            backgroundImage={leaves}
            />   
            <div className="container">
                <div className="row row-cols-1 ">
                    <div className="d-flex col col-md-12">
                        <WhoWeCard
                        className="w-100"
                        image={handsare}
                        title="Who We Are"
                        description="We are a manufacturing base of organic food produced on our farm. We are a family health care production team, created by today's need for clean and safe food, driven by the desire to build meaningful and meaningful experiences. Vivamus et enim accumsan, tempus dui non, pretium libero. Vivamus vitae justo non metus malesuada finibus. Pellentesque vehicula porttitor eleifend. Proin eget velit in arcu consectetur tempor. Sed pulvinar, purus sed efficitur elementum, risus risus tincidunt massa, a iaculis risus turpis id sapien. Pellentesque a metus urna. Integer placerat et ante quis pharetra. Nulla facilisi. Donec egestas tortor non ante pulvinar, sit amet sollicitudin nisl auctor. Vestibulum aliquet finibus consectetur. Nullam faucibus vehicula est nec pulvinar."
                        />
                    </div>
                    <div className="d-flex col col-md-12 mb-5">
                        <WhatWeCard
                        className="w-100"
                        image={handsdo}
                        title="What We Do"
                        description="We provide all kinds of organic products. Produced on our farm, the products are always fresh, multi-vitamins, rich variety for your family. With our organic food will bring delicious meals to your family.
                        Vestibulum eu nisl vitae tortor feugiat aliquet finibus in libero. Vivamus et enim accumsan, tempus dui non, pretium libero. Vivamus vitae justo non metus malesuada finibus. Pellentesque vehicula porttitor eleifend. Proin eget velit in arcu consectetur tempor. Sed pulvinar, purus sed efficitur elementum, risus risus tincidunt massa, a iaculis risus turpis id sapien diam pellentesque ullamcorper."
                        />
                    </div>
                </div>
            </div>
            <CountBanner/>   
            <div className="container">
                <h2 className="my-5">Our Team</h2>
                <div className="row row-cols-md-3 my-5">
                    <div className="col">
                        <RoundCard
                        title="Billy Ray"
                        image={p1}
                        description="Leader"
                        />
                    </div>
                    <div className="col">
                        <RoundCard
                        title="Danielle Reed"
                        image={p2}
                        description="Farmer"
                        />
                    </div>
                    <div className="col">
                        <RoundCard
                        title="Peter Castro"
                        image={p3}
                        description="Farmer"
                        />
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        
            
    </AboutContainer>

);
    
export default About;

