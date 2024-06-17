import React from "react"
import './Breadcrums.css'
import arrow_ican from '../Assets/breadcrum_arrow.png'


const Breadcrum =(props) => {
      const {product} = props;
    return(
        <div className="breadcrum">
           HOME <img src ={arrow_ican} alt=""/> SHOP <img src ={arrow_ican} alt=""/> {product.category} <img src ={arrow_ican} alt=""/> {product.name}
           
        </div>

    )
}

export default Breadcrum