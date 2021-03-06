import { useContext } from "react";
import { CartContext } from "./CartContext";
import swal from "sweetalert";

const Cart = () => {

    const test = useContext(CartContext);

    let comprar = () =>{
        swal({
            title: "Compra Finalizada",
            text: "Su compra ha sido procesada y verificada",
            icon: "success",
            button: "Aceptar",
        });
    }
    
    return (
        <div id="cartStatus">
            <div id="carritoEncabezado">
                <h1>TU CARRITO</h1>
                <button className="button3" type="button" onClick={test.removeCartList}>Borrar Carrito</button>
            </div>
            <div>
                {
                    test.cartList.length > 0 ?
                    test.cartList.map(item =>
                        <div key={item.idItem}>
                            <section id="activo3">
                                <div className="imageDiv3">
                                    <img className="image3" src={item.pictureItem} alt={item.nameItem}/>
                                </div>
                                <div id="descriptionDiv2">
                                    <h1 className="description-title3">{item.nameItem}</h1>
                                    <div className="description-cost3">
                                        <p>{item.stockItem} item(s)</p>
                                        <h2>{item.costItem} c/u</h2>
                                        <h2>Total: US${test.totalCompraItem(item.idItem)}</h2>
                                    </div>
                                    <button className="button4" type="button" onClick={() => test.deleteCartList(item.idItem)}>Borrar Item</button>
                                </div>
                            </section>
                        </div>
                    )
                    : <p>Tu carrito está vacio</p>
                }
                <div>
                    {
                        test.cartList.length > 0 &&
                        <h1>Total: US${test.compraTotal()}</h1>
                    }
                    <button className="button5" type="button" onClick={comprar}>COMPRAR</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;