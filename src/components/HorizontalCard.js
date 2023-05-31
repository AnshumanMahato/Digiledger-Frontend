import React from "react";

const HorizontalCard = ({ name, date, time, amount }) => {
  return (
    <div className="rounded-lg p-4 flex">
      <div className=" whitespace-nowrap">
        <p className="text-lg font-bold">{name}</p>
        <p className="text-sm text-gray-500">{`${date} ${time}`}</p>
      </div>
      <div className="flex-grow ml-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </div>
      <div className="flex justify-center items-center ml-10">
        <p className="text-lg font-bold">{amount}</p>
      </div>
      <div className="flex justify-center items-center ml-10">
        <p className="text-lg font-bold">{amount}</p>
      </div>
    </div>
  );
};

export default HorizontalCard;
