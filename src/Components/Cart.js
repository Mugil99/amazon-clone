import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import StarIcon from '@mui/icons-material/StarOutline';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import '../Styles/Cart.css';
import { useSelector,useDispatch } from "react-redux";
import { removeFromCart, setToZero } from "../Redux/cartSlice";


function Cart(){

    //reading cart data from the store
    const cartItems = useSelector((state) => state.cart.cart)
    const qty = cartItems.length

    // calculating total price and rounding to 2 decimal
    const price = cartItems.reduce((sum, item) => sum = sum + item.price, 0).toFixed(2);

    const dispatch = useDispatch()
    const navigate = useNavigate();

    //razorPay
    function handlePay(e){
       e.preventDefault();
       var options={
        key: "rzp_test_PV1oQ0oMtgXOsq",  // Enter the Key ID generated from the Dashboard
        amount: price * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "MyShop Checkout",
        description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        theme: {
          color: "#000",
        },
        image:
          "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
       }

       var pay=new window.Razorpay(options);
       pay.open();
       dispatch(setToZero())
    }

    // scrolling to top on the load of the page
    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }, [])

     // if cart is empty -> displays cart is empty,
    // and shows continue shopping button which navigates to homepage
    // if cart contains products -> diplays product details and total price,
    // and also (remove from cart) button which on click removes the respective product from the cart in the store 
    
    return(
        (qty === 0)
        ?
        <div className='cart__page'>
            <div className='container-fluid w-100'>
                <div className='row'>
                    <div className='col-md-9 mt-4'>
                        <div className='cart__sec1 p-3'>
                            <div className=''>
                                <h3 className='mb-0'><b>Your Amazon Cart is empty</b></h3>
                                <p className='price_small_ text-secondary m-0 text-end d-none d-md-block'>Price</p>
                                <hr className='mt-1' />
                            </div>
                            <p className='text-secondary ms-3 me-3' style={{ "fontSize": "90%" }}>Your cart is empty. Explore and add items to your cart.</p>
                            <hr />
                            <div className='text-end'>
                                Subtotal ({qty} items): <strong>₹{price}</strong>
                            </div>
                        </div>
                        <p className='text-secondary mt-2 d-none d-md-block' style={{ "fontSize": "75%" }}>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
                    </div>
                    <div className='checkout__box col-md-3 mt-4'>
                        <div className='checkout__card p-3'>
                            <h5><b>Your cart is empty!</b></h5>
                            <small>
                                Explore and add items to your cart
                            </small>
                            <div className='mt-3'>
                                <button className='checkout__button form-control btn btn-sm btn-warning' onClick={() => { navigate('/') }}>
                                    Continue shopping
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        :
        <div className='cart__page container-fluid w-100 d-flex' >
            <div className='row'>
                <div className='col-md-9 mt-4'>
                    <div className='cart__sec1 p-3'>
                        <div className=''>
                            <h3 className='mb-0'><b>Shopping cart</b></h3>
                            <p className='price_small_ text-secondary m-0 text-end d-none d-md-block'>Price</p>
                            <hr className='mt-1' />
                        </div>
                        <div className='product__info'>
                            {cartItems && cartItems.map((ele) =>
                                <div>
                                    <div key={ele.id} className="rounded-0 h-100">
                                        <div className='row g-0'>
                                            <div className='col-sm-2'>
                                                <img className='cart__image' src={ele.image1} alt='' />
                                            </div>
                                            <div className='col-sm-10'>
                                                <div className='cart__content'>
                                                    <div className='cart__title'>
                                                        {ele.brand} {ele.title}<br />
                                                    </div>
                                                    <div className='text-md-end'>
                                                        <strong>₹{ele.price}</strong>
                                                    </div>
                                                    <p className='in__stock text-success m-0 p-0'>In stock</p>
                                                    <img src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png' alt='' />
                                                    <div className='pr__rating p-0 m-0'>
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
                                                    <p className='m-1' style={{ "fontSize": "80%" }}>
                                                        <span className="text-secondary" style={{ "textDecoration": "line-through" }}>₹{ele.prevPrice}</span>
                                                        <span className="space_after text-success">({ele.deal}% off)</span>
                                                    </p>
                                                    <div className='remove__div'>
                                                        <button className='btn btn-sm btn-warning remove__button'
                                                            onClick={() => dispatch(removeFromCart(ele))}>
                                                            Remove from cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            )}
                        </div>
                        <div className='text-end'>
                            Subtotal ({qty} items): <strong>₹{price}</strong>
                        </div>
                    </div>
                    <p className='text-secondary mt-2 d-none d-md-block' style={{ "fontSize": "75%" }}>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
                </div>
                <div className='checkout__box col-md-3 mt-4'>
                    <div className='checkout__card p-3'>
                        <div className='mb-1'>
                            Subtotal ({qty} items): <strong>₹{price}</strong>
                        </div>
                        <small>
                            <div className="form-check d-flex">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label ms-1" htmlFor="flexCheckDefault">
                                    This order contains a gift
                                </label>
                            </div>
                        </small>
                        <div className='mt-3'>
                            <button className='checkout__button form-control btn btn-sm btn-warning' onClick={handlePay}>
                                Proceed to buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Cart;