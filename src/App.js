import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "../src/data";

function App() {
  const Experiences = data.map((exp) => {
    return (
      <Card
        key={exp.id}
        img={exp.coverImg}
        rating={exp.stats.rating}
        reviewCount={exp.stats.reviewCount}
        location={exp.location}
        title={exp.title}
        price={exp.price}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{Experiences}</section>
    </>
  );
}

/* <Card 
      img={KatieFlores}
      rating={5.0}
      reviewCount={6}
      country="USA"
      title="Life Lessons with Katie Zaferes"
      price={136}
      /> 
      */

export default App;
