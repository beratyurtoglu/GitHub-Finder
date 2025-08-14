import React from "react";
import UserText from "./UserText";
import UserLocation from "./UserLocation";
import UserSocials from "./UserSocials";

const UserInfo = ({ userData }) => {
  return (
    <div className="bg-white w-full rounded-2xl p-10">
      <UserText userData={userData} />
      <UserLocation userData={userData} />
      <UserSocials userData={userData} />
    </div>
  );
};

export default UserInfo;
