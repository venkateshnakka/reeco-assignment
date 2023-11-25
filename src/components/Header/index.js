import { PiShoppingCartThin } from "react-icons/pi";
import "./styles.css"
const Header = () =>{
    return (
        <div className="header">
            <div className="navItems container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWj0qKrdSzaZ5_N0hcJQ7wR2x2ExZcHNY6Vqi2tzq8PP2AGNIkV-CCHlFW7Q&s" alt="Reeco Icon" className="reeco-icon"/>
                <p>
                    Store
                </p>
                <p>
                    Orders
                </p>
                <p>
                    Analytics
                </p>
            </div>
            <div className="userSection">
                <PiShoppingCartThin className="cartIcon"/>
                <p>Hello, venky</p>
            </div>
        </div>
    )
}
export default Header