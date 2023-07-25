import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../Styles/HomePageCards.css';
import CreateCard from './CreateCard';
import CreateCard2 from './CreateCard2';
import homeDecoration from '../JSON/homeDecoration.json';
import menSection from '../JSON/menSection.json';
import toolSection from '../JSON/toolSection.json';
import womenSection from '../JSON/womenSection.json';
import electronicDevices from '../JSON/electronicDevices.json';
import homeAppliances from '../JSON/homeAppliances.json';
import kitchenScrollmenu from '../JSON/kitchenScrollmenu.json';
import electronicsScrollmenu from '../JSON/electronicsScrollmenu.json';

function HomePageCards(){
    const navigate=useNavigate();

     // if user is not logged in, shows signIn card in home page
     const user = useSelector((state) => state.cart.user)

      // For every card column, json file and necessary details are passed to CreateCard component
    // and that component returns a card designed for it
    // On clicking every card, navigates to respective pages
    return(
        <div>
        <div className='mx-auto' style={{ "maxWidth": "97%" }}>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-4'>
                <div className='col' onClick={() => { navigate('/men') }}>
                    <CreateCard jsonFile={menSection} cardTitle="Up to 60% off | Styles for Men" linkCaption="See all offers" />
                </div>
                <div className='col' onClick={() => { navigate('/decoration') }}>
                    <CreateCard jsonFile={homeDecoration} cardTitle="Revamp your home in style" linkCaption="Explore all" />
                </div>
                <div className='col' onClick={() => { navigate('/women') }}>
                    <CreateCard jsonFile={womenSection} cardTitle="Up to 60% off | Styles for Women" linkCaption="See all offers" />
                </div>
                <div className='col' id='signInCard'>
                    <div>
                        <div className='card border-0 rounded-0 p-2 mt-2'>
                            <h5 className="card-title card__title p-2 pb-0" style={{ "height": "60px" }}>
                                {user ? "Deals of the day" : "Sign in for your best experience"}
                            </h5>
                            {user ?
                                <button className='btn btn-warning btn-sm m-2 mt-0 rounded-3'
                                    onClick={() => navigate('/deals')}>
                                    Explore now
                                </button>
                                :
                                <button className='btn btn-warning btn-sm m-2 mt-0 rounded-3'
                                    onClick={() => navigate('/login')}>
                                    Sign in securely
                                </button>
                            }
                        </div>
                    </div>
                    <div>
                        <img className="card__image3 p-2 pt-4 pb-0" onClick={() => { navigate('/women') }}
                            src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/WAWRS22/P0Sportsbrands/WA-Brand-4_01._CB635054653_.jpg" alt="" />
                        <p className='m-0 p-0 text-end'
                            style={{ "fontSize": "79%", "color": "rgb(155, 155, 155)" }}>
                            Sponsored <span className='badge rounded-pill m-0 my-auto'
                                style={{ "fontSize": "65%", "backgroundColor": "rgb(155, 155, 155)" }}>i</span>
                        </p>
                    </div>
                </div>
                <div className='col' onClick={() => { navigate('/tools') }}>
                    <CreateCard jsonFile={toolSection} cardTitle="Professional tools & testing" linkCaption="See more" />
                </div>
                <div className='col' onClick={() => { navigate('/kids') }}>
                    <CreateCard2 cardTitle="Shop for your baby" linkCaption="See more"
                        image="https://m.media-amazon.com/images/I/610dzzFZ78S._SX522_.jpg" />
                </div>
                <div className='col' onClick={() => { navigate('/electronics') }}>
                    <CreateCard jsonFile={electronicDevices} cardTitle="Electronics devices for home office" linkCaption="See more" />
                </div>
                <div className='col' onClick={() => { navigate('/appliances') }}>
                    <CreateCard jsonFile={homeAppliances} cardTitle="Top picks for your home" linkCaption="See more" />
                </div>
            </div>
            <div className='mt-2 p-3' style={{ "backgroundColor": "white" }}>
                <h5 className='card__title' style={{ "height": "60px" }}>
                    Up to 60% off | Shop for kitchen essentials
                    <Link className='scrollmenu__text' >See more</Link>
                </h5>
                <div className='scrollmenu' onClick={() => { navigate('/kitchen') }}>
                    {kitchenScrollmenu.map((ele, i) => {
                        return <img src={ele.image} alt='' id='scrollImage' />
                    })}
                </div>
            </div>
            <div className='mt-2 p-3' style={{ "backgroundColor": "white" }}>
                <h5 className='card__title' style={{ "height": "50px" }}>
                    Today’s Deals
                    <Link className='scrollmenu__text' >See all deals</Link>
                </h5>
                <div className='scrollmenu'>
                    {electronicsScrollmenu.map((ele, i) => {
                        return (
                            <div className='scrollBlock' onClick={() => { navigate('/deals') }}>
                                <img src={ele.image} alt='' id='scrollImage2' />
                                <p className='offer mt-1'>
                                    <span className='bg-danger text-light p-1 rounded-1'>Up to {ele.offer}% off</span>
                                    <span className='text-danger p-1' style={{ "fontWeight": "700" }}>Deal of the day</span>
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
    )
}
export default HomePageCards;

