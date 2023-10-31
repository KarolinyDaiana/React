import './Quality.css';

const Quality = () => {
    return (
        <div className='quality'>
            <div className='quality-card'>
                <img src='./imgs/trophy.png' />
                <div>
                    <h3>High Quality</h3>
                    <p>crafted from top materials</p>
                </div>
            </div>

            <div className='quality-card'>
                <img src='./imgs/guarantee.png' />
                <div>
                    <h3>Warranty Protection</h3>
                    <p>Over 2 years</p>
                </div>
            </div>

            <div className='quality-card'>
                <img src='./imgs/shipping.png' />
                <div>
                    <h3>Free Shipping</h3>
                    <p>Order over 150 $</p>
                </div>
            </div>

            <div className='quality-card'>
                <img src='./imgs/customer-support.png' />
                <div>
                    <h3>24 / 7 Support</h3>
                    <p>Dedicated support</p>
                </div>
            </div>

        </div>
    );
}

export default Quality;