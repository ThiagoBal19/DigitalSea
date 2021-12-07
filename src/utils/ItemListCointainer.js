import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import CustomFetch from "./CustomFetch";
import Activos from './Activos';

const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const {nameCategory} = useParams();

    console.log(nameCategory);

    useEffect(() => {
        CustomFetch(2000, Activos.filter(item => {
            if (nameCategory === undefined) return item;
            return item.categoryName === parseInt(nameCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos, nameCategory]);

    return(
        <>
            <div>
                <ItemList items={datos}/>
            </div>
        </>
    );
}

export default ItemListContainer;