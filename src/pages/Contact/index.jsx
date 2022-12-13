import CardContact from "../../components/CardContact";
import Footer from "../../components/Footer";
import GeneralBanner from "../../components/GeneralBanner";
import Header from "../../components/Header";
import { FiMapPin } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import GeneralButton from "../../components/GeneralButton";
import { CardContainer, FrameContainer, MapContainer } from "./style";
import bgcontact from '../../assets/bgcontact.jpg'



const Contact = () => (

    <>
        <Header/>
        <GeneralBanner
        title1="Blog detail"
        backgroundImage={bgcontact}/>
        <main className="container mb-5">
            <CardContainer className="row row-cols-1 row-cols-lg-3 ">
                <div className="col">
                    <CardContact
                    icon={<FiMapPin size={60}/>}
                    title="12/2th Quincy St, NYC 12018"/>
                </div>
                <div className="col">
                    <CardContact
                    icon={<BsFillTelephoneFill size={60}/>}
                    title="(+1) 11 321 4567"/>
                </div>
                <div className="col">
                    <CardContact
                    icon={<AiOutlineMail size={60}/>}
                    title="contact@site.com"/>
                </div>
            </CardContainer>
            <MapContainer className="my-5">
            <FrameContainer src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5233185770817!2d-49.22926658542683!3d-25.454195483777273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5d8060fa22f%3A0x774af39fbc85160b!2sMr.%20Hoppy%20-%20Jardim%20das%20Am%C3%A9ricas!5e0!3m2!1spt-BR!2sbr!4v1657951628480!5m2!1spt-BR!2sbr" width="600" height="450"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="mb-5"></FrameContainer>
            </MapContainer>
            <div className="row g-3">
            <div className="col-12">
                    <textarea cols="50" rows="7" className="form-control" id="firstName" placeholder="Your message"  required/>
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <div className="col-sm-6">
                    <input type="text" className="form-control" id="firstName" placeholder="Your name" required/>
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <div className="col-sm-6">
                    <input type="email" className="form-control" id="email" placeholder="Your email"/>
                    <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                    </div>
                </div>
                <div className="col-12">
                    <input type="text" className="form-control" id="phone" placeholder="Phone number" required/>
                    <div className="invalid-feedback">
                        Please enter your shipping address.
                    </div>
                </div>
            </div>
            <div className="my-5">
            <GeneralButton
                title="SEND EMAIL"/>
            </div>
        </main>
        <Footer/>
        
            
    </>

);
    
    export default Contact;