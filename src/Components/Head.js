import React from "react";

export const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg"
        />
      </div>
      <div className="col-span-10 text-center ">
        <input type="text" className="w-1/2 border border-gray-400 p-2" />
        <button className="border border-gray-400 p-2">Search</button>
      </div>
      <div className="col-span-1">
        <img
          alt="user"
          className="h-8"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
        />
      </div>
    </div>
  );
};
