import { Link } from "react-router-dom";

const Item = ({id, title, stock, cost, image}) => {
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
                <div className="buttonDiv">
                    <Link className="buttonComprar" to={`/activo/${id}`}>Invertir</Link>
                    <p className="description-stock">mint: {stock}</p>
                </div>
            </section>
        </>
    )
}

export default Item;