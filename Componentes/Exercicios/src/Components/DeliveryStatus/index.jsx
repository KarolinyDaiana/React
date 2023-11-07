import { useState } from 'react';
import './DeliveryStatus.css';

function DeliveryStatus() {

    const [estado, setEstado] = useState("SEM INFORMAÇÕES")

  return (
    <div className='status'>
        <h3>Seu pacote está....</h3>

        <p>{estado}</p>

        <div>
            <button onClick={setEstado("PENDENTE")}>PENDENTE</button>
            <button onClick={setEstado("EM TRÂNSITO")}>EM TRÂNSITO</button>
            <button onClick={setEstado("ENTREGUE")}>ENTREGUE</button>
        </div>
    </div>
  );
}

export default DeliveryStatus;