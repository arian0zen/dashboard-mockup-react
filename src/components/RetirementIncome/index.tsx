import React from "react";

type Props = {};

let goalItems = [
  {
    amount: "59%",
    description: "Goal Acheived",
  },
  {
    amount: "$300",
    description: "Est. Monthly Income",
  },
];

const RetirementIncomeComponent = (props: Props) => {
  return (
    <div className="h-fit px-6 sm:px-14 sm:py-12 bg-white text-gray-800 flex flex-col gap-8 ">
      <div className="year-details justify-start">
        <p className="text-indigo-600 text-sm font-semibold font-sans">
          Retirement Income
        </p>
        <p className="text-xl font-semibold font-sans mb-8">
          Starting Year 2056
        </p>
        <div className="flex gap-4 sm:gap-20 flex-wrap ">
          <div className="w-full sm:w-fit flex flex-col border-b border-indigo-600 pb-3">
            <p className="text-2xl font-semibold font-sans">$300,000</p>
            <p className="text-xs text-gray-400 font-medium">My Goal</p>
          </div>
          <div className="sm:w-fit flex flex-col border-b border-indigo-600 pb-3">
            <p className="text-2xl font-semibold font-sans">59%</p>
            <p className="text-xs text-gray-400 font-medium">Goal Acheived</p>
          </div>
          <div className=" sm:w-fit flex flex-col border-b border-indigo-600 pb-3">
            <p className="text-2xl font-semibold font-sans">$300</p>
            <p className="text-xs text-gray-400 font-medium">Est. Monthly Income</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetirementIncomeComponent;
