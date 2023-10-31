import './Explore.css';

const Explore = () => {
    return (
        <div>
            <div className='explore'>
                <div className='explore-text'>
                    <div>
                        <h1>50+ Beautiful rooms inspiration</h1>
                        <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                    </div>
                    <div><a href='#'>Explore more</a></div>
                </div>

                <div className='explore-imgs'>
                    <img className='explore-img1' src='./imgs/bedroom2.png'/>
                    <img className='explore-img2' src='./imgs/casa.png' />  
                </div>
            </div>
{/* 
            <div className='explore-bts'>
                <img src='./imgs/buttons.png' />
            </div> */}
        </div>
        
    );
}
export default Explore;