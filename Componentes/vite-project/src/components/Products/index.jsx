import './Products.css';

const Products = (props) => {
    return (
        <div className='product'>
            <div className='img-product'>
                <img src={props.source} />
            </div>

            <div className='names'>
                <h3>{props.tittle}</h3>
                <h4>{props.subtittle}</h4>

                <div className='price'>
                    <p>{props.price}</p>
                    <p className='old-price'>{props.discount}</p>
                </div>
            </div>
        </div>
    );
}

export default Products;