import "./index.css"
import Product from "../Product/product"

let productDetails = [
    {
        id:1,
        img:"https://i.postimg.cc/QVGbzmWt/Avocado-Hass-1.jpg",
        name:"chicken breast fillets, Boneless matuu maMarinated 6 Ounce Row, Invivid",
        brand: "Hormel Black Labelmany",
        price: "60.67/6HLB",
        quantity:"0X6+1LB",
        total:0
    },
    {
        id:2,
        name:"chicken breast fillets, Boneless matuu maMarinated 6 Ounce Row, Invivid",
        brand: "Hormel Black Labelmany",
        img:"https://i.postimg.cc/QVGbzmWt/Avocado-Hass-1.jpg",
        price: "60.67/6HLB",
        quantity:"0X6+1LB",
        total:0
    },
    {
        id:3,
        name:"chicken breast fillets, Boneless matuu maMarinated 6 Ounce Row, Invivid",
        brand: "Hormel Black Labelmany",
        price: "60.67/6HLB",
        img:"https://i.postimg.cc/QVGbzmWt/Avocado-Hass-1.jpg",
        quantity:"0X6+1LB",
        total:0
    },
    {
        id:4,
        name:"chicken breast fillets, Boneless matuu maMarinated 6 Ounce Row, Invivid",
        brand: "Hormel Black Labelmany",
        price: "60.67/6HLB",
        quantity:"0X6+1LB",
        img:"https://i.postimg.cc/QVGbzmWt/Avocado-Hass-1.jpg",
        total:0
    },
    {
        id:5,
        name:"chicken breast fillets, Boneless matuu maMarinated 6 Ounce Row, Invivid",
        brand: "Hormel Black Labelmany",
        img:"https://i.postimg.cc/QVGbzmWt/Avocado-Hass-1.jpg",
        price: "60.67/6HLB",
        quantity:"0X6+1LB",
        total:0
    }
]
const ProductsContainer = () => {
    return (
        <div>
        <div className="productTrack row">
        <div className="col-md-2">
            <p>Supplier</p>
            <p>East coast fruits & vegetables</p>
        </div>
        <div className="col-md-2">
            <p>
               Shipping date
            </p>
            <p>Sun, Nov 25</p>
        </div>
        <div className="col-md-2">
            <p>Total</p>
            <p>$ 10,000.32</p>
        </div>
        <div className="col-md-2">
            <p>
                Category
            </p>
            <p>

            </p>
        </div>
        <div className="col-md-2">
            <p>Department</p>
            <p>773-005-590</p>
        </div>
        <div className="col-md-2">
            <p>Status</p>
            <p>Awaiting for Approval</p>
        </div>
        </div>
        <div className="productHistoryContianer">
           
            <div className="searchContainer">
                <div>
                    <input type="search" placeholder="Search..." className="searchBox"/>
                </div>
                <div>
                    <button className="addItemBtn">Add item</button>
                </div>
            </div>
            <div className="productContainer row">
                <p className="col-md-1"></p>
                <p className="col-md-2">Product name</p>
                <p className="col-md-2">Brand</p>
                <p className="col-md-1">Price</p>
                <p className="col-md-1">Quantity</p>
                <p className="col-md-1">Total</p>
                <p className="col-md-2">Status</p>
                <p className="col-md-2"></p>
            </div>
            {
                productDetails.map((eachProduct)=>{
                   return  <Product product={eachProduct} key={eachProduct.id}/>
                })
            }
        </div>
        </div>
    )
}
export default ProductsContainer;