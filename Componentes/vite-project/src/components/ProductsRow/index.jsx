import './ProductsRow.css';
import Products from '../products';

const ProductsRow = (props) => {
    return (
        <div className='row-products'>
            <div>
                <Products 
                    source={props.source1}
                    tittle={props.tittle1}
                    subtittle={props.subtittle1}
                    price={props.price1}
                    discount={props.discount1}
                />
            </div>

            <div>
                <Products 
                    source={props.source2}
                    tittle={props.tittle2}
                    subtittle={props.subtittle2}
                    price={props.price2}
                    discount={props.discount2}
                />
            </div>

            <div>
                <Products 
                    source={props.source3}
                    tittle={props.tittle3}
                    subtittle={props.subtittle3}
                    price={props.price3}
                    discount={props.discount3}
                />
            </div>

            <div>
                <Products 
                    source={props.source4}
                    tittle={props.tittle4}
                    subtittle={props.subtittle4}
                    price={props.price4}
                    discount={props.discount4}
                />
            </div>
        </div>
    );
}

export default ProductsRow;