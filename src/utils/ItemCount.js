import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const ItemCount = ({stock=0, initial=1, onAddCount}) => {

    const [cantidad, setCantidad] = useState(0);

    const test = useContext(CartContext);
    console.log("ItemCount: ", test);

    useEffect(() => {
        setCantidad(initial);
    }, [initial])

    const Increment = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }
    const Decrement = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    return(
        <>
            <div id="counter">
                <button className="botonRestar" onClick={Decrement}>-</button>
                <p className="cantidadSeleccionada">{cantidad}</p>
                <button className="botonSumar" onClick={Increment}>+</button>
                <div>
                    <button className="botonAgregar" onClick={() => onAddCount(cantidad)}>Agregar</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;