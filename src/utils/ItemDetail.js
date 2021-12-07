import ItemCount from './ItemCount';

const ItemDetail = (title, stock, cost, image) => {

    const onAdd = (cantidad) => {
        alert("Haz comprado " + cantidad + " activos.");
    }

    return (
        <>
            <section id="activo">
                <div className="imageDiv2">
                    <img className="image2" src={image} alt={title}/>
                </div>
                <div id="descriptionDiv">
                    <h1 className="description-title2">{title}</h1>
                    <h2 className="description-cost2">{cost}</h2>
                </div>
                <div className="buttonDiv2">
                    <p className="description-stock2">mint: {stock}</p>
                </div>
                <div>
                    <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                </div>
            </section>
        </>
    )
}

export default ItemDetail;