import Activos from './Activos';
import Item from './Item';

const ItemList = () => {
    return (
        <div id="gridActivos">
            {
                Activos.length > 0
                ?

                Activos.map(item => <Item key={item.id} id={item.id} title={item.title} cost={item.cost} stock={item.stock} picture={item.image} />)

                : <p>Cargando...</p>
            }
        </div>
    );
}

export default ItemList;