import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "./CustomFetch";
import ItemDetail from "./ItemDetail";
import Activos  from "./Activos";

const ItemDetailContainer = () => {

    const [dato, setDato] = useState({});
    const {idItem} = useParams();

    useEffect(() => {
        customFetch(2000, Activos.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [idItem]);

    return(
        <>
            <div>
                <ItemDetail item={dato}/>
            </div>
        </>
    )
}

export default ItemDetailContainer;