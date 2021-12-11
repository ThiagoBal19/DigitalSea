import brandWallpaper from '../components/assets/brandWallpaper.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <>
            <section id="encabezado">
                <div className="sub-encabezado">
                    <Link to='/'><img src={brandWallpaper} alt="ilustración"/></Link>
                    <ul className="listas">
                        <li>
                            <Link to='/'>HOME</Link>
                        </li>
                        <li>
                            <Link to='/'>CARRITO</Link>
                        </li>
                        <li>
                            <CartWidget/>
                        </li>
                    </ul>
                </div>
                
                <div className="sub-encabezado2">
                    <ul className="listas">
                        <li>
                            <Link to='/'>EXPLORAR</Link>
                        </li>
                        <li>
                            <Link to='/category/40'>NFT's</Link>
                        </li>
                        <li>
                            <Link to='/category/30'>ARTE</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Navbar;