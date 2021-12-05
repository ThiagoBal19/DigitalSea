import ItemCount from './ItemCount';

const Item = ({title, stock, cost, image}) => {
    return(
        <>
            <section id="activos">
                <div className="imageDiv">
                    <img className="image" src={image} alt={title}/>
                </div>
                <div id="description">
                    <h1 className="description-title">{title}</h1>
                    <h2 className="description-cost">{cost}</h2>
                </div>
                <div className="buttonComprar">
                    <button>Comprar</button>
                    <p className="description-stock">{stock}</p>
                </div>
            </section>
        </>
    )
}

export default Item;