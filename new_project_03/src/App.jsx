import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Input from "./components/Input";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";

const inputArray = [
  { label: "INITIAL INVESTMENT", name: "initial" },
  { label: "ANNUAL INVESTMENT", name: "annual" },
  { label: "EXPECTED RETURN", name: "expected" },
  { label: "DURATION", name: "duration" },
];

function App() {
  const [initial, setInitial] = useState("");
  const [annual, setAnnual] = useState("");
  const [expected, setExpected] = useState("");
  const [duration, setDuration] = useState("");
  const [results, setResults] = useState([]);

  const InputChangeHandler = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "initial":
        setInitial(value);
        break;
      case "annual":
        setAnnual(value);
        break;
      case "expected":
        setExpected(value);
        break;
      case "duration":
        setDuration(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const results = calculateInvestmentResults({
      initialInvestment: parseFloat(initial),
      annualInvestment: parseFloat(annual),
      expectedReturn: parseInt(expected),
      duration: parseInt(duration, 10),
    });
    setResults(results);
  }, [initial, annual, expected, duration]);

  return (
    <>
      <Header></Header>
      <Input inputArray={inputArray} changeHandler={InputChangeHandler}></Input>
      <Result calculateData={results}></Result>
    </>
  );
}

export default App;
