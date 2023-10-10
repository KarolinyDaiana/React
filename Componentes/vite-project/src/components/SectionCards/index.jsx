import './SectionCards.css';
import Cards from '../Cards';

const SectionCards = () => {

    return ( 
        <div className='section'>
            <div className='text'>
                <h2>Browse The Range</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className='cards'>
                <Cards cardsTxt="Dining" fonte={'./imgs/livingroom.png'}/>
                <Cards cardsTxt="Living" fonte={'./imgs/dining.png'}/>
                <Cards cardsTxt="Bedroom" fonte={'./imgs/bedroom.png'}/>
            </div>
        </div>
    )
}

export default SectionCards;