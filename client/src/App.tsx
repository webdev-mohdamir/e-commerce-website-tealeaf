import { useEffect } from 'react';
import './App.css'
import TrendingProdcuts from './components/prodcuts/trending/trendingProdcuts';

function App() {

  useEffect(() => {
    document.title = 'Ranga Cha: Home';
  }, []);

  return (
    <>
      <header className='wrapper'>
        <div className='header-info'>
          <h1>Want to Drink <span> Organic </span> <br/>take matcha.</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sint minus enim esse, vitae</p>

          <a href="#" role='button' className='cta_btn'>shop now <i className='icon-handbag'></i></a>
        </div>
      </header>

      <TrendingProdcuts/>
    </>
  )
}

export default App
