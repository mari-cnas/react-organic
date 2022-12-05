import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import GeneralBanner from "../../components/GeneralBanner";
import Header from "../../components/Header";
import SquareCard from "../../components/SquareCard";
import salad from '../../assets/salad.jpg'
import onion from '../../assets/onion.jpg'
import bean from '../../assets/bean.jpg'
import lemon from '../../assets/lemon.jpg'
import spinach from '../../assets/spinach.jpg'
import apple from '../../assets/apple.jpg'
import broccoli from '../../assets/brocolis.png'
import brasil from '../../assets/brasil.jpg'
import pear from '../../assets/pear.jpg'
import tomanto from '../../assets/tomanto.jpg'
import melon from '../../assets/melon.jpg'
import cucumber from '../../assets/cucumber.jpg'
import bgshop from '../../assets/bgshop.jpg'
import { Select } from "./style";


const Shop = () => (

<>
        <Header/>
        <GeneralBanner
        title1="Shop"
        backgroundImage={bgshop}/>
        <main>
            <div className="container mb-5">
                <div className="d-flex divisionb justify-content-between">
                    <p>Showing 1 - 12 of 30 results</p>
                    <Select name="sort">
                            <option value="Default sorting">Default sorting</option>
                            <option value="Sort by popularity">Sort by popularity</option>
                            <option value="Sort by average rating">Sort by average rating</option>
                            <option value="Sort by newness">Sort by newness</option>
                            <option value="Sort by price: low to high">Sort by price: low to high</option>
                            <option value="Sort by price: high to low">Sort by price: high to low</option>
                        </Select> 
                </div>
                <div className="row mt-5">
                    <div className="col d-flex">
                        <Link to="/produtos/*" className="px-4 w-100">
                        <SquareCard
                        image={salad}
                        title="Salad"
                        price="$3.20"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                    <div className="col d-flex">
                        <Link to="/produtos/*" className="px-4 w-100">
                        <SquareCard
                        image={onion}
                        title="Onion"
                        price="$3.20"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                    <div className="col d-flex ">
                        <Link to="/produtos/*" className="px-4 w-100">
                        <SquareCard
                        image={bean}
                        title="Bean"
                        price="$3.50"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                    <div className="col d-flex">
                        <Link to="/produtos/*" className="px-4 w-100">
                        <SquareCard
                        image={lemon}
                        title="Lemon"
                        price="$1.08"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                </div>
                <div className="row">
                <div className="col d-flex">
                        <Link to="/produtos/*" className="px-4 w-100">
                        <SquareCard
                        image={spinach}
                        title="Spinach"
                        price="$2.26"
                        backgroundColor="#d2ffea;"
                        align="center"
                                
                        />
                        </Link>
                    </div>
                    <div className="col d-flex">
                        <Link to="/produtos/*" className="px-4 w-100">
                        <SquareCard
                        image={apple}
                        title="Apple"
                        price="$4.05"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                    <div className="col d-flex">
                        <Link to="/produtos/*" className="px-4 w-100">
                        <SquareCard
                        image={broccoli}
                        title="Broccoli"
                        price="$3.88"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                    <div className="col d-flex">
                        <Link to="/produtos/*" className="px-4 w-100">
                        <SquareCard
                        image={brasil}
                        title="Brasil"
                        price="$1.55"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                </div>
                <div className="row">
                <div className="col d-flex">
                        <Link to="/produtos/*" className="px-4 w-100">
                        <SquareCard
                        image={pear}
                        title="Pear"
                        price="$4.80"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                    <div className="col d-flex">
                        <Link to="/produtos/*" className="px-4 w-100">
                        <SquareCard
                        image={tomanto}
                        title="Tomanto"
                        price="$2.32"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                    <div className="col d-flex">
                        <Link to="/produtos/*" className="px-4 w-100">
                        <SquareCard
                        image={melon}
                        title="Bitter Melon"
                        price="$5.20"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                    <div className="col d-flex">
                        <Link to="/produtos/*" className="px-4 w-100">
                        <SquareCard
                        image={cucumber}
                        title="Cucumber"
                        price="$3.45"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                </div>
                <div className="py-5">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end">
                            <li className="page-item">
                            <a className="page-link border-0" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                            </li>
                            <li className="page-item"><a className="page-link border-0" href="#">1</a></li>
                            <li className="page-item"><a className="page-link border-0" href="#">2</a></li>
                            <li className="page-item"><a className="page-link border-0" href="#">3</a></li>
                            <li className="page-item">
                            <a className="page-link border-0" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </main>
        <Footer/>
        
            
    </>

);
    
    export default Shop;