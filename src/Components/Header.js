import React from "react";
import '../Styles/Header.css';
import { Link , useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector,useDispatch } from "react-redux";
import { updateUser } from "../Redux/cartSlice";
import { auth } from "../Firebase/firebase-config";
import {signOut} from '@firebase/auth'


function Header(){

     // reading cart and user data from the store
     const cart = useSelector((state) => state.cart.cart)
     const user = useSelector((state) => state.cart.user)
     const qty = cart.length;

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // updating user value back to null after logging out
    // and navigate to login page
    const logout = async () => {
        signOut(auth)
            .then(() => {
                console.log('the user signed out')
                dispatch(updateUser(null))
                navigate('/login')
            })
            .catch((err) => {
                console.log(err.message)
            })
    }


     // displaying header with signIn/logout, searchbar, username 
    // and number of products in the cart
    // if user is present -> displays username and logout button
    // else -> displays signIn

    return(
        <div className="header__navbarTop">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/' className='navbar-brand' id='amazon__logo'>
                    <img width="80px" src='https://clipartcraft.com/images/amazon-smile-logo-transparent-background-7.png' alt='' />
                </Link>
                <div class="nav-item header__link__dup ms-auto">
                    <Link to='/checkout' className='header__link'>
                        <div className="header__option__cart">
                            <ShoppingCartIcon />
                            <span className='header__optionLineTwo' style={{ "color": "rgb(244, 179, 27)" }}>{qty}</span>
                        </div>
                    </Link>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="nav-item flex-grow-1 mb-1 mt-1">
                        <div className="header__search d-flex">
                            <input className='header__searchInput form-control rounded-0'
                                type="search" placeholder="Search" />
                            <Link>
                                <SearchIcon className='header__searchIcon me-2'
                                    sx={{ padding: "5px", fontSize: 38, backgroundColor: "#cd9042" }} />
                            </Link>
                        </div>
                    </div>
                    <ul class="navbar-nav ms-auto">
                        <div class="nav-item header__link">
                            {user ? (
                                <Link className='header__link'>
                                    <div className='header__option' onClick={logout}>
                                        <span className='header__optionLineOne'>Hello {user}</span>
                                        <span className='header__optionLineTwo'>Logout</span>
                                    </div>
                                </Link>
                            ) :
                                <Link to='/login' className='header__link'>
                                    <div className='header__option'>
                                        <span className='header__optionLineOne'>Hello!</span>
                                        <span className='header__optionLineTwo'>Sign In</span>
                                    </div>
                                </Link>
                            }
                        </div>
                        <li className="nav-item header__link">
                            <Link className='header__link'>
                                <div className='header__option'>
                                    <span className='header__optionLineOne'>Returns</span>
                                    <span className='header__optionLineTwo'>& Orders</span>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item header__link">
                            <Link className='header__link' onClick={() => { window.location.assign("https://www.primevideo.com/") }}>
                                <div className='header__option'>
                                    <span className='header__optionLineOne'>Your</span>
                                    <span className='header__optionLineTwo'>Prime</span>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item header__link" id="cart__icon">
                            <Link to='/checkout' className='header__link'>
                                <div className="header__option__cart">
                                    <ShoppingCartIcon />
                                    <span className='header__optionLineTwo' style={{ "color": "rgb(244, 179, 27)" }}>{qty}</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
}
export default Header;