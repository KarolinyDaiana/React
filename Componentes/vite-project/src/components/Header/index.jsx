import './Header.css'

const Header = () => {
    return (
        <div className='header'>

            <div className='section-h'>
                <img src='./imgs/logo.png'/>
            </div>
            
            <div className='section-a'>
                <a>Home</a>
                <a>Shop</a>
                <a>About</a>
                <a>Contact</a>
            </div>

            <div className='section-icons'>
                <a><img src='./imgs/profile.png'/></a>
                <a><img src='./imgs/search.png'/></a>
                <a><img src='./imgs/favourites.png'/></a>
                <a><img src='./imgs/cart.png'/></a>
            </div>
        </div>
    )
}
export default Header;