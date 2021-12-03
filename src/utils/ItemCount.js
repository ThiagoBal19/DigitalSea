import { useEffect, useState } from "react";

const ItemCount = ({stock=0, initial=1}) => {

    const [cantidad, setCantidad] = useState(0);

    useEffect(() => {
        setCantidad(initial);
    }, [initial])

    const Increment = () => {
        if (cantidad > stock) {
            setCantidad(cantidad + 1);
            console.log("SUMAR")
        }
    }
    const Decrement = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
            console.log("RESTAR")
        }
    }
    const Agregar = () => {
        if (cantidad === 0) {
            console.log("No hay activos por agregar");
        } else {
            alert(`Se agregó ${cantidad} al carrito`);
            console.log(`Se agregó ${cantidad} al carrito`);
        }
    }

    return(
        <>
            <div>
                <button className="botonRestar" onClick={Decrement}>-</button>
                {cantidad}
                <button className="botonSumar" onClick={Increment}>+</button>
            </div>
            <div>
                <button className="botonAgregar" onClick={Agregar}>Agregar</button>
            </div>
        </>
    )
}

export default ItemCount;