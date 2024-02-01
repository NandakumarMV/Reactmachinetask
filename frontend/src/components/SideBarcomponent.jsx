import React, { useState } from "react";
import Dashboard from "./Dashboard";
import BriefCaseimg from "../../../UI/Assets/Briefcase.png";
import puzzle from "../../../UI/Assets/Puzzle.png";
import help from "../../../UI/Assets/Help.png";
import support from "../../../UI/Assets/Support.png";
import menu from "../../../UI/Assets/CircledMenu.png";
import shutdown from "../../../UI/Assets/shutdown.png";

const SideBarcomponent = () => {
  const [content, setContent] = useState("Dashboard");
  const [activeMenuItem, setActiveMenuItem] = useState("Dashboard");

  const changeContent = (newContent) => {
    setActiveMenuItem(newContent);
    setContent(newContent);
  };
  return (
    <>
      <div className="  flex flex-col ">
        <div className="flex  ">
          <div className="w-[14%] bg-gray-800 h-screen flex flex-col justify-center items-center relative">
            <div className="h-16 w-16 absolute top-9 flex flex-col items-center">
              <img src={BriefCaseimg} alt="Brietcase" />
              <h3 className="text-white font-serif font-semibold">STATBOARD</h3>
            </div>
            <div className="p-4 text-white  w-full  ">
              <ul className="mt-4 space-y-10 flex flex-col items-center  w-full absolute top-60 -right-3">
                <li
                  className={` h-12 w-40 flex justify-evenly items-center  rounded-l-xl ${
                    activeMenuItem === "Dashboard"
                      ? "bg-slate-100 text-black"
                      : "bg-slate-900"
                  }   `}
                  onClick={() => changeContent("Dashboard")}
                >
                  <img src={menu} alt="menu" className="" /> DashBoard
                </li>
                <li
                  className={` h-12 w-40 flex justify-evenly items-center  rounded-l-xl ${
                    activeMenuItem === "support"
                      ? "bg-slate-100 text-black"
                      : "bg-slate-900"
                  }   `}
                  onClick={() => changeContent("support")}
                >
                  <img src={support} alt="support" className="" />
                  Support
                </li>
                <li
                  className={` h-12 w-40 flex justify-evenly items-center  rounded-l-xl ${
                    activeMenuItem === "plugins"
                      ? "bg-slate-100 text-black"
                      : "bg-slate-900"
                  }   `}
                  onClick={() => changeContent("plugins")}
                >
                  {" "}
                  <img src={puzzle} alt="puzzle" className="" />
                  Plugins
                </li>
                <li
                  className={` h-12 w-40 flex justify-evenly items-center  rounded-l-xl ${
                    activeMenuItem === "help"
                      ? "bg-slate-100 text-black"
                      : "bg-slate-900"
                  }   `}
                  onClick={() => changeContent("help")}
                >
                  {" "}
                  <img src={help} alt="help" className="" />
                  Help
                </li>
              </ul>
            </div>
            <div className="w-full bg-slate-50 p-4 flex justify-center items-center absolute bottom-0">
              <p className="text-red-500 font-mono font-medium text-lg ">
                Logout
              </p>
              <img src={shutdown} alt="shutdown" />
            </div>
          </div>
          <div className="w-full bg-blue-100 ">
            <div className="p-4">
              {content === "Dashboard" && <Dashboard />}
              {content === "support" && <h1>Support Page</h1>}
              {content === "plugins" && <h1>Plugins Page</h1>}
              {content === "help" && <h1>Help Page</h1>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarcomponent;
