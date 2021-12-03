import brandWallpaper from '../components/assets/brandWallpaper.png';
import CartWidget from './CartWidget';

const Navbar = () => {
    return(
        <>
            <section id="encabezado">
                <div className="sub-encabezado">
                    <a href="x"><img src={brandWallpaper} alt="ilustración"/></a>
                    <ul className="listas">
                        <li>
                            <a href="x">HOME</a>
                        </li>
                        <li>
                            <a href="x">CARRITO</a>
                        </li>
                        <li>
                            <CartWidget/>
                        </li>
                    </ul>
                </div>
                
                <div className="sub-encabezado2">
                    <ul className="listas">
                        <li>
                            <a href="x">EXPLORAR</a>
                        </li>
                        <li>
                            <a href="x">NFT's</a>
                        </li>
                        <li>
                            <a href="x">ARTE</a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Navbar;