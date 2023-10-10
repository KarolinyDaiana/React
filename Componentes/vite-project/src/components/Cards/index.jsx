import './Cards.css';

const Cards = (props) => {
    return (
        <div className='card'>
            <img src={props.fonte}/>

            <p>{props.cardsTxt}</p>
        </div>
    );
}

export default Cards;