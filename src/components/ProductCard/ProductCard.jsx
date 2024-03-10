import React from "react";
import './productcardstyle.css';

export const ProductCard = ({productname, price, image}) => {
    return <div className="background">
       <img className="productImg" src={image}></img>
       <p>{productname}</p>
       <p>{price}</p>
    </div>
}