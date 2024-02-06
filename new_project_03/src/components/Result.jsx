import { formatter } from "../util/investment";

const Result = ({ calculateData, initialInvestment }) => {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculateData.map((data, index) => (
          <tr key={index}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(index === 0 ? data.interest : calculateData.slice(0, index + 1).reduce((acc, curr) => acc + curr.interest, 0))}</td>
            <td>{formatter.format(data.annualInvestment * (index + 1) + data.initialInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Result;
