import React from 'react'
import "./style.css"
import Logo from "./images/logo.png"
import Location from "./images/location.png"
import Flag from "./images/flag.png"
import Cart from "./images/cart.png"
import Search from "./images/search.png"

export default function Navbar() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="https://www.amazon.com/">
                            <img src={Logo} alt="logo" id='logoImg' />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <img src={Location} alt="" id='locationImg' />
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/" style={{ fontSize: "15px", width: "80px" }}>
                                        <div>Deliver to</div>
                                        <div><strong>India </strong> </div>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        All
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/">All Department</a></li>
                                        <li><a className="dropdown-item" href="/">Art & craft</a></li>
                                        <li><a className="dropdown-item" href="/">Baby</a></li>
                                        <li><a className="dropdown-item" href="/">Books</a></li>
                                        <li><a className="dropdown-item" href="/">Beauty & Personal Care</a></li>
                                        <li><a className="dropdown-item" href="/">Boy's fashion</a></li>
                                        <li><a className="dropdown-item" href="/">Computers</a></li>
                                    </ul>
                                </li>
                            </ul>
                            {/* <form className="d-flex"> */}
                            <input className="form-control me-2" id='searchBar' type="search" placeholder="Search" aria-label="Search" />
                            <button><img src={Search} alt="" className='searchImg'/></button>
                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                            {/* </form> */}
                            <img src={Flag} alt="" id='flagImage' />
                            <div class="dropdown">
                                <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    EN
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="/">English</a></li>
                                    <li><a class="dropdown-item" href="/">Hindi</a></li>
                                    <li><a class="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/" style={{ fontSize: "12px", width: "130px", marginLeft: "-5px" }}>
                                        <div>Hello, sign in</div>
                                        <div><strong>Account & Lists </strong></div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/" style={{ fontSize: "12px", width: "70px", marginLeft: "-30px" }}>
                                        <div>Returns</div>
                                        <div><strong>& orders</strong></div>
                                    </a>
                                </li>

                                <li className="nav-item cart">
                                    <a className="nav-link active" aria-current="page" href="/" style={{ fontSize: "12px", width: "80px", marginLeft: "-3px",display:"flex" }}>
                                        <div> <img src={Cart} alt="" style={{height:"44px", width:"60px"}}/></div>
                                        {/* <div><strong>Cart</strong></div> */}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
