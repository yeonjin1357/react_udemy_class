import React, { useState } from "react";

import TabButton from "../UI/TabButton";
import TabContent from "./TabContent";
import { EXAMPLES } from "../../data";
import classes from "./Examples.module.css";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState("components");

  const ExamplesList = ["Components", "JSX", "Props", "State"];

  const handleSelect = (selectedButton) => {
    console.log(selectedButton);
    setSelectedTopic(selectedButton.toLowerCase());
  };

  return (
    <section className={classes.examples}>
      <h2>Examples</h2>
      <menu>
        {ExamplesList.map((item, index) => (
          <TabButton key={index} onSelect={() => handleSelect(item)} title={item}></TabButton>
        ))}
      </menu>
      <TabContent title={EXAMPLES[selectedTopic].title} description={EXAMPLES[selectedTopic].description} code={EXAMPLES[selectedTopic].code}></TabContent>
    </section>
  );
};

export default Examples;
