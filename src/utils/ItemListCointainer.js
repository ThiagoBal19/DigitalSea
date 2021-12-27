import ItemList from "./ItemList";
import CustomFetch from "./CustomFetch";
import Activos from './Activos';
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams();

    useEffect(() => {
        CustomFetch(1000, Activos.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idCategory]);

    return(
        <>
            <ItemList items={datos}/>
        </>
    );
}

export default ItemListContainer;