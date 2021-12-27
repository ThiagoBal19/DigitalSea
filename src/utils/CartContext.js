import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addToCart = (item, cantidad) => {
        let found = cartList.find(product => product.idItem === item.id)
        if ( found === undefined) {
                setCartList([
                    ...cartList,
                    {
                        idItem: item.id,
                        pictureItem: item.image,
                        nameItem: item.title,
                        costItem: item.cost,
                        stockItem: cantidad
                    }
                ]);
            } else {
                found.stockItem += cantidad;
                setCartList([...cartList]);
            }
        }

    const removeCartList = () => {
        setCartList([]);
    }

    const deleteCartList = (id) => {
        let result = cartList.filter(item => item.idItem !== id);
        setCartList(result);
    }

    const totalCompraItem = (idItem) => {
        let totalItem = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[totalItem].costItem * cartList[totalItem].stockItem;
    }

    const compraTotal = () => {
        let total = cartList.map(item => totalCompraItem(item.idItem));
        return total.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcularCantidadItems = () => {
        let cantidades = cartList.map(item => item.stockItem);
        return cantidades.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return(
        <>
            <CartContext.Provider value={{cartList, addToCart, removeCartList, deleteCartList, totalCompraItem, compraTotal, calcularCantidadItems}}>
                { children }
            </CartContext.Provider>
        </>
    );
}

export default CartContextProvider;