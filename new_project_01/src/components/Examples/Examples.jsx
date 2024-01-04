import TabButton from "../UI/TabButton";
import classes from "./Examples.module.css";

const Examples = () => {
  const ExamplesList = ["Components", "JSX", "Props", "State"];

  return (
    <section className={classes.examples}>
      <h2>Examples</h2>
      <menu>
        {ExamplesList.map((item) => (
          <TabButton title={item}></TabButton>
        ))}
      </menu>
    </section>
  );
};

export default Examples;
