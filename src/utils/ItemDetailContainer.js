import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CustomFetch from "./CustomFetch";
import ItemDetail from "./ItemDetail";
import Activos  from "./Activos";

const ItemDetailContainer = () => {

    const [dato, setDato] = useState({});
    const {idItem} = useParams();

    useEffect(() => {
        CustomFetch(2000, Activos.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [idItem]);

    return(
        <>
            <ItemDetail item={dato}/>
        </>
    )
}

export default ItemDetailContainer;