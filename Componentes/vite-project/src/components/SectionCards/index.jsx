import './SectionCards.css';
import Cards from '../Cards';

const SectionCards = () => {

    return ( 
        <div className='section-cards-first'>
            <div className='text-cards-first'>
                <h2>Browse The Range</h2>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            </div>

            <div className='cards-first'>
                <Cards cardsTxt="Dining" fonte={'./imgs/livingroom.png'}/>
                <Cards cardsTxt="Living" fonte={'./imgs/dining.png'}/>
                <Cards cardsTxt="Bedroom" fonte={'./imgs/bedroom.png'}/>
            </div>
        </div>
    )
}

export default SectionCards;