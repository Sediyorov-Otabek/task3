import React from "react";

const Skeleton = () => {
  return (
    <div className="w-full p-4 border">
      {" "}
      <div className="w-full h-64  bg-slate-200"></div>
      <div className="h-4 bg-slate-200 w-full mt-3 rounded"></div>{" "}
      <div className="w-[200px] h-4 bg-slate-200 rounded mt-3"></div>{" "}
      <div className="w-[150px] h-4 bg-slate-200 mt-3 rounded"></div>
    </div>
  );
};

export default Skeleton;
