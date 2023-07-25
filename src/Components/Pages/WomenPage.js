import React, { useEffect } from "react";
import "../../Styles/MenPage.css";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import womenPage from "../../JSON/womenPage.json"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/cartSlice'

function WomenPage() {

    const dispatch = useDispatch()

    // scrolling to top on the load of the page
    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }, [])

    // returns product cards of women products
    // contains (add to cart) button which on click add respective products to cart state in the store
    return (
        <div>
            <div className='mx-auto' style={{ "maxWidth": "97%" }}>
                <div className="mt-3">
                    <h5><b>RESULTS</b></h5>
                </div>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5'>
                    {womenPage.map((ele) => {
                        return (
                            <div className="col mt-2">
                                <div className="card">
                                    <div style={{ "position": "relative", "display": "inline" }}>
                                        <img className="men__image1 border-bottom rounded-3" src={ele.image1} alt="" />
                                        <img className="men__image2 border-bottom" src={ele.image2} alt="" />
                                    </div>
                                    <div className="card-body text-center pt-1 pb-1">
                                        <p className="p-0 m-0"><b>{ele.brand}</b></p>
                                        <p className="p-0 m-0" style={{ "height": "75px" }}>{ele.title}</p>
                                    </div>
                                    <div className='pr__rating text-center p-0 m-0'>
                                        <svg width={0} height={0}>
                                            <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                                                <stop offset={0} stopColor="rgb(253, 226, 168)" />
                                                <stop offset={1} stopColor="rgb(245, 172, 0)" />
                                            </linearGradient>
                                        </svg>
                                        {Array(ele.rating)
                                            .fill()
                                            .map((_) => (
                                                <StarIcon className='pr__icon p-0 m-0' sx={{ fill: "url(#linearColors)" }} />
                                            ))
                                        }
                                        {Array(5 - (ele.rating))
                                            .fill()
                                            .map((_) => (
                                                <StarOutlineIcon className='pr__icon p-0 m-0' sx={{ fill: "url(#linearColors)" }} />
                                            ))
                                        }
                                    </div>
                                    <div className="text-center">
                                        <p className="" style={{ "height": "60px" }}>
                                            <span className="" style={{ "fontSize": "90%", "verticalAlign": "super" }}>₹</span>
                                            <span className="" style={{ "fontSize": "150%" }}>{ele.price} </span>
                                            <span className="text-secondary" style={{ "fontSize": "80%", "textDecoration": "line-through" }}>₹{ele.prevPrice}</span>
                                            <span className="space_after">({ele.deal}% off)</span>
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <button className='btn btn-warning btn-sm rounded-5 mx-auto d-grid col-10'
                                            onClick={() => dispatch(addToCart(ele))}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default WomenPage;