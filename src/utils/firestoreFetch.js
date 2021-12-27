import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import db from './FirebaseConfig';

export const firestoreFetch = async (idCategory) => {
    let a;
    if (idCategory) {
        a = query(collection(db, "Activos"), where("categoryId", "==", idCategory));
    } else {
        a = query(collection(db, "Activos"));
    }
    const querySnapshot = await getDocs(a);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "Activos", (idItem));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    } else {
        alert("No se econtró un documento!!");
    }
}