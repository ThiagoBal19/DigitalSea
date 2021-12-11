import Item from './Item';

const ItemList = (props) => {
    return (
        <div id="gridActivos">
            {
                props.items.length > 0
                ?
                
                props.items.map(item => <Item key={item.id} id={item.id} title={item.title} cost={item.cost} stock={item.stock} picture={item.image} />)
                
                : <p className='loading'>Cargando...</p>
            }
        </div>
    );
}

export default ItemList;