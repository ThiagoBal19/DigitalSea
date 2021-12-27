import { Link } from "react-router-dom";

const Item = ({id, title, stock, cost, picture}) => {
    return(
        <>
            <Link id="activos" to={`/item/${id}`}>
                <div className="imageDiv">
                    <img className="image" src={picture} alt={title}/>
                </div>
                <div id="description">
                    <h1 className="description-title">{title}</h1>
                    <h2 className="description-cost">${cost}</h2>
                </div>
                <div className="buttonDiv">
                    <p className="buttonComprar" type="button">Invertir</p>
                    <p className="description-stock">mint: {stock}</p>
                </div>
            </Link>
        </>
    );
}

export default Item;