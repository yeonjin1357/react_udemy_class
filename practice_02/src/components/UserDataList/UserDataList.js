import React from "react";

import "./UserDataList.css";

const UserDataList = ({ data, onDeleteUserInfo }) => {
  return (
    <ul className="user-list">
      {data.map((userInfo, index) => (
        <li key={index} className="list-item" onClick={() => onDeleteUserInfo(index)}>
          {userInfo.username} ({userInfo.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default UserDataList;
