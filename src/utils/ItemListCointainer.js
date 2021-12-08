import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import CustomFetch from "./CustomFetch";
import Activos from './Activos';

const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams();

    useEffect(() => {
        CustomFetch(2000, Activos.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos, idCategory]);

    return(
        <>
            <div>
                <ItemList items={datos}/>
            </div>
        </>
    );
}

export default ItemListContainer;