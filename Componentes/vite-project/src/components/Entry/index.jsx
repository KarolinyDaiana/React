import './Entry.css';
import { useState } from 'react';

const Entry = () => {

    const [mostrarTexto, setMostrarTexto] = useState(true);
    const [contador, setContador] = useState(0);

    return (
        <div className='entry'>
            <div className='entry-banner'>
                <div>
                    {mostrarTexto && <p>Texto sendo exibido!</p>}
                    <button onClick={() => setMostrarTexto(!mostrarTexto)}>
                        Alternar Texto
                    </button>
                    <p>Contador: {contador}</p>
                    <button onClick={() => setContador(contador + 1)}>Incrementar</button>
                    <button onClick={() => setContador(contador - 1)}>Decrementar</button>
                    <button onClick={() => setContador(0)}>Resetar</button>
                </div>
                <div className='entry-banner-text'>
                    <h5>New Arrival</h5>
                    <h1>Discover Our <br />New Collection</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                </div>

                <a>BUY NOW</a>
            </div>
        </div>
    );
}

export default Entry;