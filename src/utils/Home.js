import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import ItemListContainer from './ItemListCointainer';
import ItemDetailContainer from './ItemDetailContainer';

const Home = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/category/:nameCategory" element={<ItemListContainer/>} />
                <Route path="/activo/:idActivo" element={<ItemDetailContainer/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Home;