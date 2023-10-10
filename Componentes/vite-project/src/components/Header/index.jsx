import './Header.css'

const Header = () => {
    return (
        <div className='header'>

            <div className='section-h'>
                <img className='logo' src='./imgs/logo.png'/>
                <h3>Furniro</h3>
            </div>
            
            <div className='section-h'>
                <a>Home</a>
                <a>Shop</a>
                <a>About</a>
                <a>Contact</a>
            </div>

            <div className='section-h'>
                <a><img src='./imgs/profile.png'/></a>
                <a><img src='./imgs/search.png'/></a>
                <a><img src='./imgs/favourites.png'/></a>
                <a><img src='./imgs/cart.png'/></a>
            </div>
        </div>
    )
}
export default Header;