import React from "react"
import ReactDOM from "react-dom/client"
import { useState } from "react"
import { RxCross2 } from "react-icons/rx";
import { VscCheck } from "react-icons/vsc";
import "./product.css"

const Product = props => {
    const [status, setStatus] = useState("")
    const{id, name, img, brand, price, quantity,total}=props.product
    const handleRightClick = () => {
        setStatus('approved');
      };
      const handleCrossClick = () => {
        const isUrgent = window.confirm('Is the project urgent?');
        setStatus(isUrgent ? 'missing-urgent' : 'missing');
      };
      const handleEditClick = () => {
    
        const newPrice = prompt('Enter new price:');
        const newQuantity = prompt('Enter new quantity:');
    
        if (newPrice && newQuantity) {
          setStatus('price and quantity updated');
        } else if (newPrice) {
          setStatus('price updated');
        } else if (newQuantity) {
          setStatus('quantity updated');
        }
      };

    return(
        <div className="productCard row">
            <img src={img} className="productImg col-md-1"/>
            <p className="productName col-md-2">{name}</p>
            <p className="col-md-2">{brand}</p>
            <p className="col-md-1">{price}</p>
            <p className="col-md-1">{quantity}</p>
            <p className="col-md-1">{total}</p>
            <p className="col-md-2 statusTest" id="status">{status}</p>
            <div className="col-md-2 statusIcons">
                <VscCheck onClick={handleRightClick}/>
                <RxCross2 onClick={handleCrossClick}/>
                <p onClick={handleEditClick}>Edit</p>
            </div>
        </div>
    )
}
export default Product;