import React, { useState } from "react";

import "./UserInfoForm.css";

const UserInfoForm = ({ onAddUserInfo }) => {
  const [enteredUsernameValue, setEnteredUsernameValue] = useState("");
  const [enteredAgeValue, setEnteredAgeValue] = useState("");

  const userNameInputChangeHandler = (event) => {
    setEnteredUsernameValue(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setEnteredAgeValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredAgeValue < 0) {
      alert("Please enter your age properly");
      return;
    }

    const userInfoArray = {
      username: enteredUsernameValue,
      age: enteredAgeValue,
    };

    onAddUserInfo(userInfoArray);
    console.log(userInfoArray);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Username</label>
        <input type="text" onChange={userNameInputChangeHandler} />
      </div>
      <div className="form-control">
        <label>Age (Years)</label>
        <input type="number" onChange={ageInputChangeHandler} />
      </div>
      <button className="button" type="submit" onClick={formSubmitHandler}>
        Add Goal
      </button>
    </form>
  );
};

export default UserInfoForm;
