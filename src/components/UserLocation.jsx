import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

const UserLocation = ({ userData }) => {
  return (
    <div className="mt-4 text-xs md:flex justify-between items-center border p-1 rounded-2xl">
      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <IoLocationOutline className="size-6" />{" "}
        <span>
          {userData.location ? userData.location.split(" "[0]) : "Location"}
        </span>
      </div>

      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <CiUser className="size-6" />{" "}
        <span>{userData.company ? userData.company : "Company"}</span>
      </div>

      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <CiCircleList className="size-6" />{" "}
        <span>{userData.followers ? userData.followers : "Followers"}</span>
      </div>

      <div className="flex items-center gap-1 p-3 justify-center rounded-2xl">
        <CiCirclePlus className="size-6" />{" "}
        <span>{userData.following ? userData.following : "Following"}</span>
      </div>
    </div>
  );
};

export default UserLocation;
