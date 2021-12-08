import { Link } from "react-router-dom";

const Item = ({id, title, stock, cost, picture}) => {
    return(
        <>
            <section id="activos">
                <div className="imageDiv">
                    <img className="image" src={picture} alt={title}/>
                </div>
                <div id="description">
                    <h1 className="description-title">{title}</h1>
                    <h2 className="description-cost">{cost}</h2>
                </div>
                <div className="buttonDiv">
                    <Link className="buttonComprar" to={`/item/${id}`}>Invertir</Link>
                    <p className="description-stock">mint: {stock}</p>
                </div>
            </section>
        </>
    )
}

export default Item;