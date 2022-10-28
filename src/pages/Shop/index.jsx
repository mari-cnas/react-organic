import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import GeneralBanner from "../../components/GeneralBanner";
import Header from "../../components/Header";
import SquareCard from "../../components/SquareCard";
import brocolis from '../../assets/brocolis.png'
import bgshop from '../../assets/bgshop.jpg'


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
                    <div className="d-flex nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Default sorting
                        </a>
                        <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-divider">|</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>   
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <Link to="/produtos/*" className="px-4">
                        <SquareCard
                        image={brocolis}
                        title="Brocolis"
                        price="$2.00"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/produtos/*" className="px-4">
                        <SquareCard
                        image={brocolis}
                        title="Brocolis"
                        price="$2.00"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/produtos/*" className="px-4">
                        <SquareCard
                        image={brocolis}
                        title="Brocolis"
                        price="$2.00"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/produtos/*" className="px-4">
                        <SquareCard
                        image={brocolis}
                        title="Brocolis"
                        price="$2.00"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                </div>
                <div className="row">
                <div className="col">
                        <Link to="/produtos/*" className="px-4">
                        <SquareCard
                        image={brocolis}
                        title="Brocolis"
                        price="$2.00"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/produtos/*" className="px-4">
                        <SquareCard
                        image={brocolis}
                        title="Brocolis"
                        price="$2.00"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/produtos/*" className="px-4">
                        <SquareCard
                        image={brocolis}
                        title="Brocolis"
                        price="$2.00"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/produtos/*" className="px-4">
                        <SquareCard
                        image={brocolis}
                        title="Brocolis"
                        price="$2.00"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                </div>
                <div className="row">
                <div className="col">
                        <Link to="/produtos/*" className="px-4">
                        <SquareCard
                        image={brocolis}
                        title="Brocolis"
                        price="$2.00"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/produtos/*" className="px-4">
                        <SquareCard
                        image={brocolis}
                        title="Brocolis"
                        price="$2.00"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/produtos/*" className="px-4">
                        <SquareCard
                        image={brocolis}
                        title="Brocolis"
                        price="$2.00"
                        backgroundColor="#d2ffea;"
                        align="center"
                        />
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/produtos/*" className="px-4">
                        <SquareCard
                        image={brocolis}
                        title="Brocolis"
                        price="$2.00"
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