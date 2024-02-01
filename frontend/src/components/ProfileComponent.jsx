import React from "react";
import media from "../../../UI/Assets/media.png";
import facebook from "../../../UI/Assets/facebook.png";
import twitter from "../../../UI/Assets/twitter.png";
import instagram from "../../../UI/Assets/instagram.png";

const ProfileComponent = () => {
  return (
    <div className="mt-2 bg-slate-100 rounded-lg shadow-xl flex flex-col justify-center items-center space-y-1 ">
      <img src={media} alt="media" />
      <h3 className="text-black font-medium">JANE JOE</h3>
      <span className="font-mono font-light text-gray-500">CEO</span>
      <div className="flex p-2 justify-evenly w-full items-center">
        <img src={facebook} alt="facebook" className="h-5" />
        <img src={twitter} alt="twitter" className="h-5" />
        <img src={instagram} alt="instagram" className="h-5" />
      </div>
    </div>
  );
};

export default ProfileComponent;
