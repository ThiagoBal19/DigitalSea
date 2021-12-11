import brandWallpaper from '../components/assets/brandWallpaper.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div id='footer'>
                <div>
                    <Link to='/'><img src={brandWallpaper} alt="ilustración"/></Link>
                    <p className='copyright'>© 2021 Digital Sea</p>
                </div>
                <div>
                    <h1>Marketplace</h1>
                    <ul id='footerExtras'>
                        <li><Link to='/'>Explorar</Link></li>
                        <li><Link to='/category/40'>NFT's</Link></li>
                        <li><Link to='/category/30'>Arte</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;