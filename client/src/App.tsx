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

      {/*  Banner */}
      <section className='banner'>
        <div className="banner_info">
          <h2>We Provide Organic Green Tea For You</h2>
          <p>Lorem ipsum dolor sit amet, consectetu adipisicing elit sedeiu tempor inci ut labore et dolore magna aliqua.</p>
          <a href="#" role='button' className='cta_btn'>Read more <span>&gt;&gt;</span></a>
        </div>
      </section>
      {/* END Banner */}
    </>
  )
}

export default App
