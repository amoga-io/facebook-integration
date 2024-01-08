import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch, BiEdit } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import FriendRequests from "./FriendRequests";
import Contact from "./Contact";

const indianNamesArray = [
  { name: 'Aarav Singh', id: 1, value: 'aaravSingh', profilePhoto: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: 'Aanya Kapoor', id: 2, value: 'aanyaKapoor', profilePhoto: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { name: 'Advait Sharma', id: 3, value: 'advaitSharma', profilePhoto: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { name: 'Ananya Patel', id: 4, value: 'ananyaPatel', profilePhoto: 'https://randomuser.me/api/portraits/men/4.jpg' },
  { name: 'Arjun Kumar', id: 5, value: 'arjunKumar', profilePhoto: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { name: 'Arya Gupta', id: 6, value: 'aryaGupta', profilePhoto: 'https://randomuser.me/api/portraits/men/6.jpg' },
  { name: 'Dhruv Verma', id: 7, value: 'dhruvVerma', profilePhoto: 'https://randomuser.me/api/portraits/men/7.jpg' },
  { name: 'Ishaan Singhania', id: 8, value: 'ishaanSinghania', profilePhoto: 'https://randomuser.me/api/portraits/men/8.jpg' },
  { name: 'Kavya Sharma', id: 9, value: 'kavyaSharma', profilePhoto: 'https://randomuser.me/api/portraits/men/9.jpg' },
  { name: 'Kiara Jain', id: 10, value: 'kiaraJain', profilePhoto: 'https://randomuser.me/api/portraits/men/10.jpg' },
  { name: 'Krishna Reddy', id: 11, value: 'krishnaReddy', profilePhoto: 'https://randomuser.me/api/portraits/men/11.jpg' },
  { name: 'Mira Kapoor', id: 12, value: 'miraKapoor', profilePhoto: 'https://randomuser.me/api/portraits/men/12.jpg' },
  { name: 'Neha Gupta', id: 13, value: 'nehaGupta', profilePhoto: 'https://randomuser.me/api/portraits/men/13.jpg' },
  { name: 'Prisha Sharma', id: 14, value: 'prishaSharma', profilePhoto: 'https://randomuser.me/api/portraits/men/14.jpg' },
  { name: 'Rohan Kumar', id: 15, value: 'rohanKumar', profilePhoto: 'https://randomuser.me/api/portraits/men/15.jpg' },
  { name: 'Saisha Verma', id: 16, value: 'saishaVerma', profilePhoto: 'https://randomuser.me/api/portraits/men/16.jpg' },
  { name: 'Samaira Singh', id: 17, value: 'samairaSingh', profilePhoto: 'https://randomuser.me/api/portraits/men/17.jpg' },
  { name: 'Tanvi Patel', id: 18, value: 'tanviPatel', profilePhoto: 'https://randomuser.me/api/portraits/men/18.jpg' },
  { name: 'Vihaan Sharma', id: 19, value: 'vihaanSharma', profilePhoto: 'https://randomuser.me/api/portraits/men/19.jpg' },
  { name: 'Zara Khan', id: 20, value: 'zaraKhan', profilePhoto: 'https://randomuser.me/api/portraits/men/20.jpg' }
];

console.log(indianNamesArray);


const RightSidebar = () => {
  return (
    <div className="fixed hidden xl:block top-16 right-0 w-[300px] mt-6 px-4 h-screen overflow-y-scroll">
      <div>
        <div className="flex justify-between">
          <h1 className="font-semibold text-gray-600 text-[18px]">
            Friend requests
          </h1>
          <p className="text-primary">See All</p>
        </div>

        <div className="mt-4">
          <FriendRequests />

          <div className="h-[2px] bg-gray-300 my-5"></div>

          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600 text-[18px]">Contact</h1>
            <div className="flex gap-4">
              <RiVideoAddFill className="text-gray-600" />
              <BiSearch />
              <BsThreeDots />
            </div>
          </div>

          {
            indianNamesArray.map(item => <Contact item={item} />)
          }



          <div className="bg-gray-300 h-[44px] w-[44px] grid place-items-center text-[26px] rounded-full fixed right-0 bottom-0 mr-8 mb-8">
            <BiEdit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
