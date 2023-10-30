import Header from './components/Header';
import SectionCards from './components/SectionCards';
import ProductsRow from './components/ProductsRow';
import Explore from './components/Explore';
import Footer from './components/Footer';

import "./App.css"

const App = () => {

  return (
    <div className='body'>
      <Header/>
      <img className='imagem-capa' src='./public/imgs/capa.png' />

      <SectionCards />

      <h1 className='tittle-products'>Our products</h1>

      <div>
          <ProductsRow 
            source1={'./imgs/Imageslytherin.png'}
            tittle1="Slitherine"
            subtittle1="Stylish cafe chair"
            price1="Rp 2.500.000"
            discount1="Rp 3.500.000"

            source2={'./imgs/cadeira.png'}
            tittle2="Leviosa"
            subtittle2="Stylish cafe chair"
            price2="Rp 2.500.000"

            source3={'./imgs/sofa.png'}
            tittle3="Lolito"
            subtittle3="Luxury big sofa"
            price3="Rp 7.000.000"
            discount3="Rp 14.000.000"

            source4={'./imgs/mesinha.png'}
            tittle4="Respira"
            subtittle4="utdoor table and stool"
            price4="Rp 500.000"
          />
          
          <ProductsRow 
            source1={'./imgs/lamp.png'}
            tittle1="Grifo"
            subtittle1="Night lamp"
            price1="Rp 1.500.000"

            source2={'./imgs/sofa2.png'}
            tittle2="Muggo"
            subtittle2="Small mug"
            price2="Rp 150.000"
            discount2="R$25000"

            source3={'./imgs/sofa3.png'}
            tittle3="Pingky"
            subtittle3="Cute bed set"
            price3="Rp 7.000.000"
            discount3="Rp 14.000.000"

            source4={'./imgs/sofa4.png'}
            tittle4="Potty"
            subtittle4="Minimalist flower pot"
            price4="R$20000"
            discount4="R$25000"
          />
      </div>

      <div className='bt-bottom'><a href="#" className='bt-show-more'>Show more</a></div>

      <Explore/>

      <Footer />

    </div>
  )
}

export default App;