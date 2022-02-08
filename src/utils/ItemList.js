import Item from './Item';

const ItemList = (props) => {
    return (
        <div id="gridActivos">
            {
                props.items.length > 0
                ?
                
                props.items.map(item => <Item key={item.id} id={item.id} title={item.title} cost={item.cost} stock={item.stock} picture={item.image} />)
                
                : <div className="loading spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
            }
        </div>
    );
}

export default ItemList;