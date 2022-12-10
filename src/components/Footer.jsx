import React from 'react'
import Logo from "./images/logo2.png"
import Flag from "./images/flag.png"
import "./css/footer.css"

export default function Footer() {
    return (
        <div>
            <div className="container footPart" style={{ marginBottom: "29px" }}>
                <p style={{ marginTop: "35px", marginBottom: "10px" }}>See personalized recommendations</p>
                <button className='btn-warning inBtn'>Sign in</button>
                <p style={{ marginTop: "10px" }}>New customer <a href="/" className='link' style={{ fontSize: "14px" }}>Start here</a></p>
            </div>
            <hr />
            <button className='btt'><a href="Back to top" style={{ color: "#FFFFFF", textDecoration: "none" }}>Back to top</a></button>
            <div className='footer'>
                <div class="container">
                    <footer class="py-5">
                        <div class="row">
                            <div class="col-2">
                                <h6>Get to Know Us</h6>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Careers</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Blogs</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">About Amazon</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Investor Relations</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Amazon Devices</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Amazon Science</a></li>
                                </ul>
                            </div>
                            <div class="col-2">
                                <h6>Make Money with Us</h6>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Sell products on Amazon</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Sell on Amazon Business</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Sell apps on Amazon</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Become an Affiliate</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Advertise Your Products</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Self-Publish with Us</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Host an Amazon Hub</a></li>
                                </ul>
                            </div>
                            <div class="col-2">
                                <h6>Amazon Payment Products</h6>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Amazon Business Card</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Shop with Points</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Reload Your Balance</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Amazon Currency Converter</a></li>
                                </ul>
                            </div>
                            <div class="col-2">
                                <h6>Let Us Help You</h6>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Amazon and COVID-19</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Your Account</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Your Orders</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Shipping Rates & Policies</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Returns & Replacements</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Manage Your Content and Devices</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Amazon Assistant</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Help</a></li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>
                <hr />
                <div className="last" style={{ display: "flex", textAlign: "center"}}>
                    <div><img src={Logo} alt="" /></div>
                    <div><button className='box'><i class="fa-sharp fa-solid fa-globe"></i> English </button></div>
                    <div><button className='box'>USD-U.S Dollar</button></div>
                    <div><button className='box'><img src={Flag} alt="" style={{ height: "15px", width: "20px", marginBottom: "2px" }} /> United states </button></div>
                </div>
            </div>
            <div className="lastFoot">
                <div className="container">
                    <div style={{ display: "flex", marginLeft: "10vw" }}>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Amazon Advertising</strong><p>Find , attract and engage customer</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Amazon Drive</strong><p>Cloud storage from amazon</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>6pm</strong><p>Score deal with fashion brand</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Amazon Ignite</strong><p>Sell your educational details record</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Amazon web services</strong><p>Scalable cloud computing Services</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Home Services</strong><p>Experience pros happiness</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Home Services</strong><p>Experience pros happiness</p></div></a>
                    </div>
                    <div style={{ display: "flex", marginLeft: "10vw" }}>   
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Amazon Advertising</strong><p>Find , attract and engage customer</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Amazon Drive</strong><p>Cloud storage from amazon</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>6pm</strong><p>Score deal with fashion brand</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>AbeBooks</strong><p>Books, arts an collection</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Sell on amazon</strong><p>starts selling accounts</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>ACX</strong><p>Audio book publishing made easy</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>ACX</strong><p>Audio book publishing made easy</p></div></a>
                    </div>
                    <div style={{ display: "flex", marginLeft: "10vw" }}>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Amazon Advertising</strong><p>Find , attract and engage customer</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Amazon Drive</strong><p>Cloud storage from amazon</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>6pm</strong><p>Score deal with fashion brand</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Amazon Music</strong><p>Stream million of songs</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Amazon Music</strong><p>Stream million of songs</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Amazon Music</strong><p>Stream million of songs</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Amazon Music</strong><p>Stream million of songs</p></div></a>
                    </div>
                    <div style={{ display: "flex", marginLeft: "10vw" }}>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Amazon Advertising</strong><p>Find , attract and engage customer</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Amazon Drive</strong><p>Cloud storage from amazon</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>6pm</strong><p>Score deal with fashion brand</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Amazon Music</strong><p>Stream million of songs</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Amazon Music</strong><p>Stream million of songs</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Amazon Music</strong><p>Stream million of songs</p></div></a>
                        <a href="/" style={{color:"white", textDecoration:"none"}}><div className="words" ><strong>Amazon Music</strong><p>Stream million of songs</p></div></a>
                    </div>
                </div>
                <div style={{textAlign:"center", paddingTop:"2vw"}}>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <a href="" className='words' style={{fontSize:"13px", color:"#FFFFFF", width:"7vw", textDecoration:"none",marginLeft:"-1px"}}>Conditions of use</a>
                        <a href="" className='words' style={{fontSize:"13px", color:"#FFFFFF", width:"7vw", textDecoration:"none",marginLeft:"10px"}}>Privacy Notice</a>
                        <a href="" className='words' style={{fontSize:"13px", color:"#FFFFFF", width:"8vw", textDecoration:"none",marginLeft:"-10px"}}>Interest-Based Ads</a>
                    </div>
                    <p style={{fontSize:"15px", paddingBottom:"2vw"}}>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>
        </div>
    )
}
