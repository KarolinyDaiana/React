import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-col1'>
                <h3>Furniro.</h3>

                <p>400 University Drive Suite 200 Coral <br/>Gables,<br/> FL 33134 USA</p>
            </div>

            <div className='footer-col2'>
                <h4>Links</h4>

                <p>Home</p>
                <p>Shop</p>
                <p>About</p>
                <p>Contact</p>
            </div>

            <div className='footer-col3'>
                <h4>Help</h4>

                <p>Payment options</p>
                <p>Returns</p>
                <p>Privacy policies</p>
                <p>Contact</p>
            </div>

            <div className='footer-col4'>
                <h4>Newsletter</h4>

                <div className='footer-newsletter'>
                    <input placeholder='Enter your email address' />

                    <a>SUBSCRIBE</a>
                </div>      
            </div>
        </div>
    );
}

export default Footer;