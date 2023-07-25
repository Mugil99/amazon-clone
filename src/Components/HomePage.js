import React from 'react';
import '../Styles/HomePage.css';
import HomePageFooter from './HomePageFooter';
import CarousalComponent from './CarousalComponent';
import HomePageCards from './HomePageCards';
import { CardTravelSharp } from '@mui/icons-material';

// displaying carousal(image slider), product cards, scrollbars and footer

function HomePage(){
    return(
        <div>
        <div className='home'>
          <CarousalComponent />
          <HomePageCards />
        </div>
        <HomePageFooter />
      </div>
    )
}
export default HomePage;
