// import { useState } from 'react';
// import './ToDoList.css';

// const ToDoList = () => {

//     const [tarefas, setTarefas] = useState([]);
//     const [tarefa, setTarefa] = useState("");

//     const salvar = () => {
//         setTarefas([...tarefas, tarefa]);
//         setTarefa("");
//     }
//     return (
//         <div className='lista'>
//             <div>
//                 <h1>Minha lista de tarefas!</h1>
//                 <p>Adicione o item desejado à lista escrevendo no campo abaixo e clicando no botão Salvar.</p>
//             </div>

//             <div>
//                 <input 
//                     type="text"
//                     className='input-item' 
//                     value={tarefa} 
//                     placeholder='Tarefa...'
//                     onChange={setTarefa}
//                 />

//                 <button onClick={salvar} className='bt-salvar'>Salvar</button>

//                 <ul>
//                     {tarefas.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>

//             </div>
//         </div>
//     );
// }

// export default ToDoList;

import { useState } from 'react';
import './ToDoList.css';
function ToDoList() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const handleTarefaChange = (event) => {
    setTarefa(event.target.value);
  };

  const handleAddTarefa = () => {
    if (tarefa !== '') {
      setTarefas([...tarefas, tarefa]);
      setTarefa('');
    }
  };

  return (
    <div className='lista'>
      <h1>Minha lista de Tarefas</h1>
      <div className='entrada'>
        <input
          type="text"
          placeholder="Tarefa..."
          value={tarefa}
          onChange={handleTarefaChange}
          className="input"
        />
        <button onClick={handleAddTarefa}>Salvar</button>
       </div>

      <ul className='items'>
        {tarefas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default ToDoList;

