import Carousel from 'react-bootstrap/Carousel'
import '../Styles/HomePage.css';
import { Link } from 'react-router-dom';

function CarousalComponent(){
    // returns image slider which on clicking navigates to different pages
    return(
        <Carousel id='home__image'>
        <Carousel.Item>
            <Link to='/electronics'>
                <img
                    className="d-block w-100 carousal__image"
                    src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
                    alt="First slide"
                />
            </Link>
        </Carousel.Item>
        <Carousel.Item>
            <Link to='/men'>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/618NVCzzxVL._SX3000_.jpg"
                    alt="Second slide"
                />
            </Link>
        </Carousel.Item>
        <Carousel.Item>
            <Link to='/decoration'>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/81hg4Zrf2+L._SX3000_.jpg"
                    alt="Third slide"
                />
            </Link>
        </Carousel.Item>
        <Carousel.Item>
            <Link to='/checkout'>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/61UrRx+3LLL._SX3000_.jpg"
                    alt="Fourth slide"
                />
            </Link>
        </Carousel.Item>
        <Carousel.Item>
            <Link to='/women'>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/8160RuRhSUL._SX3000_.jpg"
                    alt="Fifth slide"
                />
            </Link>
        </Carousel.Item>
        <Carousel.Item>
            <Link onClick={() => { window.location.assign("https://www.primevideo.com/") }}>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/71MF+gutPsL._SX3000_.jpg"
                    alt="Sixth slide"
                />
            </Link>
        </Carousel.Item>
        <Carousel.Item>
            <Link to='/kids'>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/613-gA49v1L._SX3000_.jpg"
                    alt="Seventh slide"
                />
            </Link>
        </Carousel.Item>
        <Carousel.Item>
            <Link to='/kitchen'>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/71cp9PVuTfL._SX3000_.jpg"
                    alt="Eight slide"
                />
            </Link>
        </Carousel.Item>
        <Carousel.Item>
            <Link to='/tools'>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/71WPH7bcN2L._SX3000_.jpg"
                    alt="Ninth slide"
                />
            </Link>
        </Carousel.Item>
    </Carousel>
    );
}

export default CarousalComponent;