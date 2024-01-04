import CoreConceptList from "./CoreConceptList";
import CORE_CONCEPTS from "../../data.js";
import classes from "./CoreConcept.module.css";

const CoreConcept = () => {
  return (
    <section className={classes.core_concepts}>
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item, index) => (
          <CoreConceptList key={index} title={item.title} description={item.description} image={item.image}></CoreConceptList>
        ))}
      </ul>
    </section>
  );
};

export default CoreConcept;
