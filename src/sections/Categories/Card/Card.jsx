import './Card.css';
import { FaShoppingCart } from "react-icons/fa";
const Card = (props) => {
    return (
        <div className='card-wrapper'>
            <img src={props.img} alt=""/>
            <div className="text" type={props.category}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <span className='price'>{props.price}<small>$</small></span>
            </div>
            <button>Buy Now</button>
            <FaShoppingCart className='cart-icon' />
        </div>
    )
}

export default Card;