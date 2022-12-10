import React from 'react'
import "./css/crosel.css"

export default function Card() {
    return (
        <div>
            <div style={{ display: "flex" }}>
                <div className="card mx-4">
                    <h4 className='my-3 mx-2'>Gaming accessories</h4>
                    <div style={{ display: "flex" }}>
                        <div className='mx-2 my-3'>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg " class="cardImg" alt="..." />
                            <a href="/" style={{ textDecoration: "none", color: "black" }}>Headsets</a>
                        </div>
                        <div className='mx-1 my-3'>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg" class="cardImg" alt="..." />
                            <a href="/" style={{ textDecoration: "none", color: "black" }}>Keyboards</a>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div className='mx-2'>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg" class="cardImg" alt="..." />
                            <a href="/" style={{ textDecoration: "none", color: "black" }}>Mouse</a>
                        </div>
                        <div className='mx-1'>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg" class="cardImg" alt="..." />
                            <a href="/" style={{ textDecoration: "none", color: "black" }}>Chairs</a>
                        </div>
                    </div>
                    <a href="/" className='link my-3 mx-2'>See More</a>
                </div>
                <div className='card'>
                    <h4 className='my-3 mx-2'>Shop by Category</h4>
                    <div style={{ display: "flex" }}>
                        <div className='mx-2 my-3'>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg" class="cardImg" alt="..." />
                            <a href="/" style={{ textDecoration: "none", color: "black" }}>Computers</a>
                        </div>
                        <div className='mx-1 my-3'>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg" class="cardImg" alt="..." />
                            <a href="/" style={{ textDecoration: "none", color: "black" }}>Video Games</a>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div className='mx-2'>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg" class="cardImg" alt="..." />
                            <a href="/" style={{ textDecoration: "none", color: "black" }}>Baby</a>
                        </div>
                        <div className='mx-1'>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg" class="cardImg" alt="..." />
                            <a href="/" style={{ textDecoration: "none", color: "black" }}>Toys</a>
                        </div>
                    </div>
                    <a href="/" className='link  mx-2' style={{ marginTop: "40px" }}>Shop Now</a>
                </div>
                <div className="card mx-4">
                    <h4 className='my-3 mx-2'>Health & Personal Care</h4>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg" className='mx-3' alt="" />
                    <a href="/" className='link  mx-2' style={{ marginTop: "40px" }}>Shop Now</a>
                </div>
                <div className="card" style={{ width: "20.6rem", height: "10rem", textAlign: "center" }}>
                    <h5 className='my-3 mx-2'>Sign in for the best experience</h5>
                    <button className='signinBtn btn-warning'>Sign in securely</button>
                </div>
            </div>
            <div className='phaltu'>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg" className='mx-3' alt="" />
            </div>
            <div style={{ display: "flex" }}>
                <div className="card mx-4 card2">
                    <h4 className='my-3 mx-2'>Dresses</h4>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg" className='mx-3' alt="" />
                    <a href="/" className='link  mx-2' style={{ marginTop: "40px" }}>Shop Now</a>
                </div>
                <div className="card card2">
                    <h4 className='my-3 mx-2'>Computers & Accessories </h4>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg" className='mx-3' alt="" />
                    <a href="/" className='link  mx-2' style={{ marginTop: "40px" }}>Shop Now</a>
                </div>
                <div className="card mx-4 card2">
                    <h4 className='my-3 mx-2'>Toys Under $30</h4>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944_.jpg" className='mx-3' alt="" />
                    <a href="/" className='link  mx-2' style={{ marginTop: "40px" }}>Shop Now</a>
                </div>
                <div className="card card2" style={{width:"20.6rem"}}>
                    <h4 className='my-3 mx-2'>Electronics</h4>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg" className='mx-3' alt="" />
                    <a href="/" className='link  mx-2' style={{ marginTop: "40px" }}>See more</a>
                </div>
            </div>
        </div>
    )
}
