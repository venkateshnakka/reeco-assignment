import "./index.css"
const OrderId = () => {
    return(
        <div className="orderId">
            <div>
                <p>Orders > <span>Order32457ABC</span></p>
                <h3>Order32457ABC</h3>
            </div>
            <div className="orderBtns">
                <button className="themeBtnOne">Back</button>
                <button className="themeBtnTwo">Approve order</button>
            </div>
        </div>
    )
}
export default OrderId;