import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);


    const onAddCount = (cantidad) => {
        setItemCount(cantidad);
        test.addToCart(item, cantidad);
        if (cantidad === 0) {
            alert("No hay activos por agregar");
        } else {
            alert(`Se agregó ${cantidad} al carrito`);
        }
    }

    return (
        <>
            {
                item && item.image
                ?
                <section id="activo">
                    <div className="imageDiv2">
                        <img className="image2" src={item.image} alt={item.title}/>
                    </div>
                    <div id="descriptionDiv">
                        <h1 className="description-title2">{item.title}</h1>
                        <div className="description-cost2">
                            <h2>US${item.cost}</h2>
                            <p>mint: {item.stock}</p>
                            <ItemCount stock={item.stock} initial={itemCount} onAddCount={onAddCount} />
                        </div>
                    </div>
                </section>
                : <p className='loading'>Cargando...</p>
            }
        </>
    );
}

export default ItemDetail;