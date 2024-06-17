import React from "react"
import './DescriptionBox.css'

const DescriptionBox = () => {
    return(

        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (86)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Am e-commerce website is an online platform that facilitate buying and selling products or services over the internet.
                   It serves as a virtual market place where businesses and individuals can showcase their products, intreact with the customers.
                   E-commerce have gained immense popularity due to their convenience, acceessibility, and the global reach their offer.       
                </p>
                <p> E-commerce website typically display products or services.Each product has its own dedicated page with relevent information.</p>
            </div>
        </div>

    )
}

export default DescriptionBox