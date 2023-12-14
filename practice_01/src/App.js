import React, { useState } from "react";

import Header from "./components/Header/Header";
import CalculateForm from "./components/CalculateForm/CalculateForm";
import CalculationTable from "./components/CalculationTable/CalculationTable";

function App() {
  const [calculationResults, setCalculationResults] = useState([]);

  const handleFormData = (calculatedData) => {
    setCalculationResults(calculatedData);
  };

  return (
    <div>
      <Header></Header>
      <CalculateForm onFormSubmit={handleFormData}></CalculateForm>
      <CalculationTable results={calculationResults}></CalculationTable>
    </div>
  );
}

export default App;
