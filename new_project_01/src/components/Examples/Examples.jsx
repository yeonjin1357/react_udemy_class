import React, { useState } from "react";

import TabButton from "../UI/TabButton";
import TabContent from "./TabContent";
import { EXAMPLES } from "../../data";
import classes from "./Examples.module.css";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

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
          <TabButton key={index} onSelect={() => handleSelect(item)} title={item} isActive={selectedTopic === item.toLowerCase()}></TabButton>
        ))}
      </menu>
      {selectedTopic && EXAMPLES[selectedTopic] ? <TabContent selectedTopic={selectedTopic} title={EXAMPLES[selectedTopic].title} description={EXAMPLES[selectedTopic].description} code={EXAMPLES[selectedTopic].code}></TabContent> : <p>Please select a topic.</p>}
    </section>
  );
};

export default Examples;
