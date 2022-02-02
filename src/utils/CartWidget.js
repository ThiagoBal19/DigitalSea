import { useContext } from 'react';
import { CartContext } from './CartContext';
import cart from '../components/assets/cart.png';

const CartWidget = () => {

    const test = useContext(CartContext);

    return(
        <>
        <div id='carrito'>
            <img className="cart" src={cart} alt="carrito" />
            <h1 className='cartQuantity'>{test.calcularCantidadItems()}</h1>
        </div>
        </>
    )
}

export default CartWidget;