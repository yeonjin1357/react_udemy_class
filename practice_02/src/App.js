import React, { useState } from "react";

import UserDataList from "./components/UserDataList/UserDataList";
import UserInfoForm from "./components/UserInfoForm/UserInfoForm";
import "./App.css";

const App = () => {
  const [userInfo, setUserInfo] = useState([]);

  const handleUserInfo = (newUserInfo) => {
    setUserInfo((prevUserInfo) => [...prevUserInfo, newUserInfo]);
  };

  const deleteUserInfo = (userInfoIndex) => {
    setUserInfo((prevUserInfo) => prevUserInfo.filter((v, index) => index !== userInfoIndex));
  };

  return (
    <div>
      <section id="user-form">
        <UserInfoForm onAddUserInfo={handleUserInfo} />
      </section>
      {userInfo.length > 0 ? (
        <section id="list">
          <UserDataList data={userInfo} onDeleteUserInfo={deleteUserInfo}></UserDataList>
        </section>
      ) : (
        <p className="notice">There is no list.</p>
      )}
    </div>
  );
};

export default App;
