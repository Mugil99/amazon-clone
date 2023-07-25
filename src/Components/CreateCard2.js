import React from "react";
import { Link } from "react-router-dom";
import '../Styles/HomePageCards.css';

function CreateCard(props){
    // creating single image card using json data and other necessary details received through props
     return(
        <div>
        <div className='card border-0 rounded-0 p-2 mt-2'>
            <h5 className="card-title card__title p-2 pb-0" style={{ "height": "60px" }}>{props.cardTitle}</h5>
            <div className='row row-cols-1 g-0'>
                <div className='col p-2 pt-0 rounded-0'>
                    <Link className='card__link'>
                        <div className="card border-0 rounded-0">
                            <img className="card__image2" src={props.image} alt="" />
                            <p className="card-text card__text" style={{ "height": "35px" }}></p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='p-2 pt-0 card-footer card__footer border-0' style={{ "backgroundColor": "white", "height": "35px" }}>
                <Link className='card__footer__text'>{props.linkCaption}</Link>
            </div>
        </div>
    </div>
     )
}
export default CreateCard;