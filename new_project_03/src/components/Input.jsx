const Input = ({ inputArray, changeHandler }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        {inputArray.map(({ label, name }, index) => (
          <p key={index}>
            <label htmlFor={name}>{label}</label>
            <input type="number" id={name} name={name} onChange={changeHandler} />
          </p>
        ))}
      </div>
    </div>
  );
};

export default Input;
