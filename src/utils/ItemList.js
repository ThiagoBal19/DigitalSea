import Activos from './Activos';
import Item from './Item';

const ItemList = () => {
    return (
        <div id="gridActivos">
            {Activos.map(a => <Item key={a.id} id={a.id} title={a.title} cost={a.cost} stock={a.stock} image={a.image} />)}
            <p>Cargando...</p>
        </div>
    )
}

export default ItemList;