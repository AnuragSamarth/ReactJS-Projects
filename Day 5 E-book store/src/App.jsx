import { register } from 'swiper/element/bundle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TopSellingBooks from './components/TopSellingBooks';
// register Swiper custom elements
register();

function App() {
 
  return (
    <>
        <Navbar/>
        <Hero/>
        <TopSellingBooks/>
    </>
  )
}

export default App
