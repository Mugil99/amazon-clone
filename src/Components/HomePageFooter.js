import React from "react";
import '../Styles/HomePageFooter.css';
import { Link } from "react-router-dom";
function HomePageFooter() {
     //scrolls to top on clicking the specified div
    // redirects to respective pages on clicking links
    return(
        <div>
        <div className="container-fluid text-light backToTopContainer"
            onClick={() => document.body.scrollTop = document.documentElement.scrollTop = 0}>
            <p className="backToTop text-center m-2 mb-0 p-3">Back to top</p>
        </div>
        <div className="container-fluid text-light sections">
            <div className="mx-auto">
                <div className="row row-cols-1 row-cols-sm-2 pt-3">
                    <div className="col">
                        <h6 className="section__title"><b>Looking for</b></h6>
                        <div className="mt-3">
                            <Link to='/men' className="link">
                                <p className="sec">Men</p>
                            </Link>
                            <Link to='/women' className="link">
                                <p className="sec">Women</p>
                            </Link>
                            <Link to='/kids' className="link">
                                <p className="sec">Kids</p>
                            </Link>
                            <Link to='/appliances' className="link">
                                <p className="sec">Appliances</p>
                            </Link>
                            <Link to='/kitchen' className="link">
                                <p className="sec">Kitchen</p>
                            </Link>
                            <Link to='/electronics' className="link">
                                <p className="sec">Electronics</p>
                            </Link>
                            <Link to='/decoration' className="link">
                                <p className="sec"> Decoration</p>
                            </Link>
                            <Link to='/tools' className="link">
                                <p className="sec">Tools</p>
                            </Link>
                            <Link to='/deals' className="link">
                                <p className="sec">More offers</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <h6 className="section__title"><b>Connect with us</b></h6>
                        <div className="mt-3">
                            <Link className="link">
                                <p className="sec" onClick={() => { window.location.assign("https://www.facebook.com/") }}> Facebook</p>
                            </Link>
                            <Link className="link">
                                <p className="sec" onClick={() => { window.location.assign("https://twitter.com/i/flow/login") }}>Twitter</p>
                            </Link>
                            <Link className="link">
                                <p className="sec" onClick={() => { window.location.assign("https://www.instagram.com/") }}>Instagram</p>
                            </Link>
                            <Link className="link">
                                <p className="sec" onClick={() => { window.location.assign("https://www.linkedin.com/in/bharathi-vikas") }}>LinkedIn</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid text-light bg-dark">
            <div className='p-3 pb-0'>
                <div className='d-flex mx-auto text-center' id='helpp'>
                    <div>Conditions of Use & Sale</div>
                    <div>Privacy Notice</div>
                    <div>Interest based ads</div>
                </div>
            </div>
            <div className='text-center pb-3' id='copyright'>
                © 1996-2022, Amazon.com, Inc. or its affiliates
            </div>
        </div>
    </div>
    )
}
export default HomePageFooter;