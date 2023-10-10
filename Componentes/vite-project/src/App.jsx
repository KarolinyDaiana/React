import Header from './components/Header';
import SectionCards from './components/SectionCards';

import "./App.css"

const App = () => {

  return (
    <div className='body'>
      <Header/>
      <img src='./public/imgs/capa.png' />

      <SectionCards />
    </div>
  )
}

export default App;