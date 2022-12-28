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
        exp={exp}
        /* No need to pass props in 1 by 1 like below; Better to pass in an instance of an object (exp in example above) to the card component. 
         Another way would be to use the spread operator to pass an instance of an object into a component. For example, {...exp}.
        */
        // img={exp.coverImg}
        // rating={exp.stats.rating}
        // reviewCount={exp.stats.reviewCount}
        // location={exp.location}
        // title={exp.title}
        // price={exp.price}
        // openSpots={exp.openSpots}
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
