import React, { useState } from "react";

const CalculateForm = ({ onFormSubmit }) => {
  const [enteredCurrentSavings, setEnteredCurrentSavings] = useState("");
  const [enteredYearSavings, setEnteredYearSavings] = useState("");
  const [enteredExpected, setEnteredExpected] = useState("");
  const [enteredDuration, setEnteredDuration] = useState("");

  const CurrentSavingsHandler = (e) => {
    setEnteredCurrentSavings(e.target.value);
  };
  const YearSavingsHandler = (e) => {
    setEnteredYearSavings(e.target.value);
  };
  const ExpectedHandler = (e) => {
    setEnteredExpected(e.target.value);
  };
  const DurationHandler = (e) => {
    setEnteredDuration(e.target.value);
  };

  const FormResetHandler = () => {
    setEnteredCurrentSavings("");
    setEnteredYearSavings("");
    setEnteredExpected("");
    setEnteredDuration("");

    onFormSubmit([]);
  };

  const FormSubmitHandler = (e) => {
    e.preventDefault();

    let currentSavings = +enteredCurrentSavings;
    const initialCapital = +enteredCurrentSavings;
    const yearSavings = +enteredYearSavings;
    const expected = enteredExpected / 100;
    const duration = +enteredDuration;
    let totalInterest = 0; // 누적 이자

    const calculatedData = [];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expected;
      totalInterest += yearlyInterest; // 누적 이자 계산
      currentSavings += yearlyInterest + yearSavings;

      calculatedData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearSavings,
        totalInterest: totalInterest, // 누적 이자 추가
        initialCapital: initialCapital,
      });
    }

    onFormSubmit(calculatedData);
  };

  return (
    <form className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" value={enteredCurrentSavings} id="current-savings" onChange={CurrentSavingsHandler} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" value={enteredYearSavings} id="yearly-contribution" onChange={YearSavingsHandler} />
        </p>
        <p>
          <label htmlFor="expected-return">Expected Interest (%, per year)</label>
          <input type="number" value={enteredExpected} id="expected-return" onChange={ExpectedHandler} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" value={enteredDuration} id="duration" onChange={DurationHandler} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={FormResetHandler}>
          Reset
        </button>
        <button type="submit" className="button" onClick={FormSubmitHandler}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculateForm;
