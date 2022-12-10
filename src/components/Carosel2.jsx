import React from 'react'
import "./css/crosel.css"

export default function Carosel2() {
    return (
        <div>
            <div className="book">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                <h3 className='mx-4'style={{marginTop:"20px"}}>Top Sellers in Books for you</h3>
                        <div className="carousel-item active" style={{ display: "flex"}}>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/81OwcfWEX4L._AC_SY200_.jpg" className="d-block w-10 mx-4" alt="..." /> </a>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/61IcQYuujuL._AC_SY200_.jpg" className="d-block w-10 mx-1" alt="..." /> </a>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/51AKmx64TTL._AC_SY200_.jpg" className="d-block w-10 mx-4" alt="..." /> </a>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/61vtC5JG+nL._AC_SY200_.jpg" className="d-block w-10 mx-1" alt="..." /> </a>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/61edFLi6pwL._AC_SY200_.jpg" className="d-block w-10 mx-4" alt="..." /> </a>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/61QKy5PZKHL._AC_SY200_.jpg" className="d-block w-10 mx-1" alt="..." /> </a>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/61xT0GosPTL._AC_SY200_.jpg" className="d-block w-10 mx-4" alt="..." /> </a>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/61hzygiGyOL._AC_SY200_.jpg" className="d-block w-10 mx-1" alt="..." /> </a>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/711KirYPfTL._AC_SY200_.jpg" className="d-block w-10 mx-4" alt="..." /> </a>

                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div style={{ display: "flex" }}>
                <div className="card mx-4 card2">
                    <h4 className='my-3 mx-2'>Create with strip lights</h4>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg" className='mx-3' alt="" />
                    <a href="/" className='link  mx-2' style={{ marginTop: "40px" }}>Shop Now</a>
                </div>
                <div className="card card2">
                    <h4 className='my-3 mx-2'>For your Fitness Needs </h4>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg" className='mx-3' alt="" />
                    <a href="/" className='link  mx-2' style={{ marginTop: "40px" }}>Shop Now</a>
                </div>
                <div className="card mx-4 card2">
                    <h4 className='my-3 mx-2'>New arrivals in Toys</h4>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg" className='mx-3' alt="" />
                    <a href="/" className='link  mx-2' style={{ marginTop: "40px" }}>Shop Now</a>
                </div>
                <div className="card card2" style={{width:"20.6rem"}}>
                    <h4 className='my-3 mx-2'>Home & Kitchen Under $30</h4>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469391_2584745_379x304_1X_en_US._SY304_CB609304299_.jpg" className='mx-3' alt="" />
                    <a href="/" className='link  mx-2' style={{ marginTop: "40px" }}>Shop now</a>
                </div>
            </div>
            <div className="book my-4">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                <h3 className='mx-4'style={{marginTop:"20px"}}>Stuffed Animals & Toys under $10 <a href="#" className='link' style={{fontSize:"18px"}}>Shop now</a></h3>
                        <div className="carousel-item active" style={{ display: "flex"}}>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/81-RlWFdRrL._AC_SY200_.jpg" className="d-block w-10 mx-4" alt="..." /> </a>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/81ZB62prn-L._AC_SY200_.jpg" className="d-block w-10 mx-3" alt="..." /> </a> 
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/71KUNPdl7dL._AC_SY200_.jpg" className="d-block w-10 mx-4" alt="..." /> </a>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/51TQ4+rSd7L._AC_SY200_.jpg" className="d-block w-10 mx-3" alt="..." /> </a>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/813iofM+8lL._AC_SY200_.jpg" className="d-block w-10 mx-4" alt="..." /> </a>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/71msxzqxUbL._AC_SY200_.jpg" className="d-block w-10 mx-3" alt="..." /> </a>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/71qeNzidkkL._AC_SY200_.jpg" className="d-block w-10 mx-4" alt="..." /> </a>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/81n4ilutaJL._AC_SY200_.jpg" className="d-block w-10 mx-3" alt="..." /> </a>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="book">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                <h3 className='mx-4'style={{marginTop:"20px"}}>Home Décor Under $20 <a href="#" className='link' style={{fontSize:"18px"}}>Shop now</a></h3>
                        <div className="carousel-item active" style={{ display: "flex"}}>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/613+CG1dP1L._AC_SY200_.jpg" className="d-block w-16 mx-4" alt="..." /> </a>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/71iArV-kskL._AC_SY200_.jpg" className="d-block w-16 mx-3" alt="..." /> </a> 
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/61XYX1tzoTL._AC_SY200_.jpg" className="d-block w-16 mx-4" alt="..." /> </a>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/41d1tq6oesL._AC_SY200_.jpg" className="d-block w-16 mx-3" alt="..." /> </a>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/81AOpcqJfHL._AC_SY200_.jpg" className="d-block w-16 mx-4" alt="..." /> </a>
                            <a href="/"> <img src="https://m.media-amazon.com/images/I/71FGSz-g+BL._AC_SY200_.jpg" className="d-block w-16 mx-3" alt="..." /> </a>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div style={{ display: "flex" }}>
                <div className="card mx-4 card2">
                    <h4 className='my-3 mx-2'>Decorate for Halloween</h4>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/home/kariep/Halloween21/Handmade-379x304._SY304_CB609394695_.jpg" className='mx-3' alt="" />
                    <a href="/" className='link  mx-2' style={{ marginTop: "40px" }}>See more</a>
                </div>
                <div className="card card2">
                    <h4 className='my-3 mx-2'>Statement boots for you </h4>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/WIN_22/GW/PWPS/DCC_JAN_PS_W_01_1x._SY304_CB649620864_.jpg" className='mx-3' alt="" />
                    <a href="/" className='link  mx-2' style={{ marginTop: "40px" }}>Browse more</a>
                </div>
                <div className="card mx-4 card2">
                    <h4 className='my-3 mx-2'>Fashion favorites for Fall</h4>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/WIN_22/GW/PWPS/DCC_FEB_PS_M_02_1x._SY304_CB647593327_.jpg" className='mx-3' alt="" />
                    <a href="/" className='link  mx-2' style={{ marginTop: "40px" }}>Discover your style</a>
                </div>
                <div className="card card2" style={{width:"20.6rem"}}>
                    <h4 className='my-3 mx-2'>All Halloween</h4>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/home/kariep/Halloween21/Handmade-379x304._SY304_CB609394695_.jpg" className='mx-3' alt="" />
                    <a href="/" className='link  mx-2' style={{ marginTop: "40px" }}>Discover more</a>
                </div>
            </div>
        </div>
    )
}
