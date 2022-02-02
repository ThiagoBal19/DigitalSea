import './App.css';
import './scss/styles.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './utils/Navbar';
import ItemListContainer from './utils/ItemListCointainer';
import ItemDetailContainer from './utils/ItemDetailContainer';
import Footer from './utils/Footer';
import Cart from './utils/Cart';
import CartContextProvider from './utils/CartContext';
import {Helmet} from "react-helmet";


const App = () => {
    return (
        <CartContextProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Digital Sea</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Buy NFT's and make profit with it" />
            </Helmet>
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