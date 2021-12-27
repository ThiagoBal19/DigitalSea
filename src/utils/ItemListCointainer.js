import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from './ItemList';
import {firestoreFetch} from "./firestoreFetch";

const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams();

    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [idCategory]);

    return(
        <ItemList items={datos}/>
    );
}

export default ItemListContainer;