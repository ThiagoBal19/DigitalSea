import { useContext, useState } from 'react';
import swal from 'sweetalert';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);


    const onAddCount = (cantidad) => {
        setItemCount(cantidad);
        test.addToCart(item, cantidad);
        if (cantidad === 0) {
            swal({
                title: "No hay nada para agregar",
                text: "Selecciona la cantidad que quieres comprar",
                icon: "warning",
                button: "Aceptar",
            });
        } else {
            swal({
                title: `Acabas de agregar ${cantidad} al carrito`,
                text: "Para ver tu compra selecciona el icono del carrito",
                icon: "success",
                button: "Aceptar",
            });
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
                : <div class="loading spinner-border text-light" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
            }
        </>
    );
}

export default ItemDetail;