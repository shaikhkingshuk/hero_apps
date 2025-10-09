import React from "react";
import { removeFromStore } from "../Apps/addToDB";

const LocalApps = ({ data, reloadData }) => {
  const handleUninstalled = (id) => {
    // removeFromStore(id);
    removeFromStore(id);
    reloadData();
  };
  return (
    <div className="bg-white h-[120px] w-full flex flex-row justify-center  rounded-sm mt-[10px] p-[10px] shadow-lg">
      <div className="w-1/11">
        <img src={data.image} className="w-full h-full"></img>
      </div>
      <div className="w-9/11 font-medium text-[20px] flex flex-col gap-[20px] ml-[20px] ">
        <h1>App : {data.title}</h1>
        <div className="flex flex-row gap-[5px]">
          <div className="flex items-center">
            <img src="../images/icon-downloads.png" className="h-[20px]"></img>
            <p className="font-normal ml-[5px]">{data.shortDownload}</p>
          </div>

          <div className="flex items-center">
            <img
              src="../images/icon-ratings.png"
              className="h-[20px] ml-[10px] flex items-center"
            ></img>
            <p className="font-normal ml-[5px]">{data.ratingAvg}</p>
          </div>

          <div>
            <p className="ml-[10px] font-normal">{data.size}M</p>
          </div>
        </div>
      </div>
      <div className="w-1/11 flex justify-center items-center">
        <button
          className="btn btn-success"
          onClick={() => handleUninstalled(data.id)}
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default LocalApps;
