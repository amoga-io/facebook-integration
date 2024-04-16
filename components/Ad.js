import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { TfiComment } from "react-icons/tfi";
import { useSession } from "next-auth/react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import Modal from './Modal'
const Post = ({ data, id }) => {
    const [open, setOpen] = React.useState(false);


    const session = {
        user: {
            image: "https://randomuser.me/api/portraits/men/50.jpg"
        }
    }


    const isAdmin = (post_data_id, session_id) => {
        if (post_data_id === session_id) return true;
        else if (session_id === "103122479951529079566") return true;

        return false;
    };

    return (
        <div className="py-4 bg-white rounded-[17px] shadow-md mt-5">
            <div className="px-4 flex justify-between items-center">
                <div className="flex gap-2">
                    <img
                        className="w-[44px] h-[44px] object-cover rounded-full"
                        src={"https://cdn.amoga.io/default/favicon.png"}

                        alt="dp"
                    />
                    <div>
                        <h1 className="text-[16px] font-semibold">Sales CRM</h1>
                        <div className="text-gray-500 flex items-center gap-2">
                            <p>1 d</p>
                            <p>·</p>
                            <FaGlobeAmericas />
                        </div>
                    </div>
                </div>

                <div className="text-gray-500 text-[26px] flex gap-4">
                    <FiMoreHorizontal className="cursor-pointer" />

                </div>
            </div>

            <p className="px-4 mt-[15px] text-gray-800 font-normal">For professionals and teams to streamline sales processes & optimize sales performance

                Manage tasks, projects, and processes to fuel collaboration and efficiency at scale.</p>

            <div className="mt-[15px]">
                {<img
                    src={"https://www.amoga.io/wp-content/uploads/2024/02/Sales-CRM-2-2048x1207.png"}
                    alt="post pic" />}
            </div>

            <div className="mt-[-4]  bg-gray-300 flex justify-end">
                <p onClick={() => {
                    setOpen(true)
                }} style={{ cursor: "pointer" }} className="p-2 text-gray-800 font-normal cursor-pointer">
                    <a href="#" class="bg-blue-500 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        <span>Know More</span>
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a></p>
            </div>

            <div className="flex mt-[7px] text-gray-500">
                <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-[10px] hover:bg-gray-200 cursor-pointer">
                    <AiOutlineLike className="text-[26px]" />
                    <p className="font-medium">Like</p>
                </div>
                <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-[10px] hover:bg-gray-200 cursor-pointer">
                    <TfiComment className="text-[20px] translate-y-[4px]" />
                    <p className="font-medium">Comment</p>
                </div>
            </div>

            <Modal open={open} setOpen={setOpen} />
        </div>
    );
};

export default Post;
