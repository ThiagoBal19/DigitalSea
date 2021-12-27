import './App.css';
import './scss/styles.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './utils/Navbar';
import ItemListContainer from './utils/ItemListCointainer';
import ItemDetailContainer from './utils/ItemDetailContainer';
import Footer from './utils/Footer';
import Cart from './utils/Cart';
import CartContextProvider from './utils/CartContext';

const App = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer/>} />
                    <Route path='/category/:idCategory' element={<ItemListContainer/>} />
                    <Route path='/item/:idItem' element={<ItemDetailContainer/>} />
                    <Route path='/cart' element={<Cart/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;