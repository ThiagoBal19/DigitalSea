import { useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

    const [itemCount, setItemCount] = useState(0);

    const onAdd = (cantidad) => {
        alert("Haz comprado " + cantidad + " activos.");
        setItemCount(cantidad);
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
                        <h2>{item.cost}</h2>
                        <p>mint: {item.stock}</p>
                        <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                    </div>
                </div>
            </section>
            : <p className='loading'>Cargando...</p>
        }
        </>
    )
}

export default ItemDetail;