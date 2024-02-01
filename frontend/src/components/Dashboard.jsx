import React from "react";
import GreetingsComponent from "./GreetingsComponent";
import GraphComponent from "./GraphComponent";
import PieChartComponent from "./PieChartComponent";
import TableComponent from "./TableComponent";
import ProfileComponent from "./ProfileComponent";
import img from "../../../UI/Assets/Rectangle10.png";

const Dashboard = () => {
  return (
    <div className=" ">
      <div className=" flex justify-between items-start mb-2">
        <GreetingsComponent />
        <div className="flex bg-white w-fit p-2 rounded-2xl h-14  items-start justify-center">
          <div className="">
            <p>Jane Joe</p>
            <span className="text-sm">jane@gmail.com</span>
          </div>

          <img src={img} alt="img" className="rounded" />
        </div>
      </div>
      <div className="flex justify-evenly items-center">
        <div className="">
          {" "}
          <GraphComponent />
        </div>

        <div>
          <PieChartComponent />
        </div>
      </div>
      <div className="flex mt-1">
        <TableComponent />
        <ProfileComponent />
      </div>
    </div>
  );
};

export default Dashboard;
