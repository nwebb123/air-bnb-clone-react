
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import KatieFlores from "../src/imgs/katie-zaferes-swimmer.png";

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Card 
      img={KatieFlores}
      rating={5.0}
      reviewCount={6}
      country="USA"
      title="Life Lessons with Katie Zaferes"
      price={136}

      
      
      />
    </>
    

  );
}

export default App;
