import React from "react";

const UserText = ({ userData }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5 justify-between sm:justify-around md:justify-start">
        <div className="w-32 h-32">
          <img
            src={
              userData.avatar_url
                ? userData.avatar_url
                : "https://placehold.co/200x200"
            }
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold">
            {userData.name ? userData.name : "Name"}
          </h2>
          <span className="text-xs italic font-semibold">
            @{userData.login ? userData.login : "@username"}
          </span>
          <p className="text-sm mt-2">
            {userData.bio
              ? userData.bio
              : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime facilis odio molestiae autem culpa esse at vitae quos tempore! Sapiente in praesentium recusandae sequi quae numquam? Doloremque cupiditate porro exercitationem!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserText;
