import React from "react";
import profileImage from "../../assets/profile-picture.jpeg"; // Update the path as necessary
import Button from "../UI/Button";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
type Props = {};

let recentTransactions = [
  {
    date: "2020-08-07",
    description: "Withdrawal Transfer to Bank-XXX11",
  },
  {
    date: "2020-07-21",
    description: "Withdrawal Transfer to Bank-XXX12",
  },
  {
    date: "2020-07-16",
    description: "Withdrawal Transfer to Bank-XXX13",
  },
];

const ProfileComponent = (props: Props) => {
  return (
    <div className="h-screen px-6 sm:px-14 py-12 sm:bg-gray-100 bg-white text-gray-800 flex flex-col gap-8 w-screen sm:w-auto overflow-auto">
      <div className="px-4 profile flex flex-col justify-center gap-2 rounded-md">
        <div className="relative block sm:hidden ml-auto">
          <span className="absolute rounded-full h-3 w-3 bg-blue-500 border-2 border-white -top-2 -right-1"></span>
          <BsBell size={18} />
        </div>
        <div className="profile-section flex items-center gap-4">
          <div className="profile-picture w-20 h-20">
            <img
              src={profileImage}
              alt=""
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="profile-details">
            <h1 className="text-2xl font-semibold">Hi Arian,</h1>
            <p className="text-sm text-gray-600">welcome back !</p>
          </div>
        </div>
      </div>
      <div className="p-4 profile-balance flex justify-center-center gap-4 flex-col bg-gray-100 sm:bg-inherit rounded-3xl">
        <p className="text-lg font-semibold">Today</p>
        <div className="today-balance flex flex-col justify-center gap-2">
          <p className="text-4xl sm:text-3xl font-semibold">$19,892</p>
          <p className="text-sm text-gray-400 font-medium">Account Balance</p>
        </div>
        <div className="flex flex-row sm:flex-col gap-4">
          <div className="yearly-balance flex flex-col justify-center sm:gap-2">
            <p className="text-xl font-semibold">$4,000</p>
            <p className="text-sm text-gray-400 font-medium max-w-[50%] overflow-ellipsis">
              Yearly Contribution
            </p>
          </div>
          <div className="total-balance flex flex-col justify-center sm:gap-2">
            <p className="text-xl font-semibold flex items-center gap-2">
              $1,892{" "}
              <span>
                <BiSolidUpArrow size={15} className="text-green-600" />
              </span>
            </p>
            <p className="text-sm text-gray-400 font-medium">Total Interest</p>
          </div>
        </div>
        <Button
          content={
            <p className="flex gap-2 items-center">
              I want to{" "}
              <span>
                <BiSolidDownArrow size={10} />
              </span>
            </p>
          }
          showDropDown={true}
          wFull={true}
        />
      </div>
      <div className="profile-transaction p-4 profile-balance flex justify-center-center gap-4 flex-col bg-gray-100 sm:bg-inherit rounded-3xl mb-[60px] sm:mb-0">
        <p className="text-lg font-semibold">Recent Transactions</p>
        {recentTransactions.map((item: any, index: number) => {
          return (
            <div
              className="today-balance flex flex-col justify-center gap-2 pb-4 border-b border-gray-300"
              key={index}
            >
              <p className="text-sm text-gray-400 font-medium">{item.date}</p>
              <p className="text-sm font-semibold">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileComponent;
