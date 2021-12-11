import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import ItemListContainer from './ItemListCointainer';
import ItemDetailContainer from './ItemDetailContainer';
import Footer from './Footer';

const Home = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/category/:idCategory' element={<ItemListContainer/>} />
                <Route path='/item/:idItem' element={<ItemDetailContainer/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Home;