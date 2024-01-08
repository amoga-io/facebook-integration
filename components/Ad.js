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
                        src={"https://scontent-maa2-2.xx.fbcdn.net/v/t39.30808-1/407718237_122096687438142211_9223320405286086648_n.png?stp=c0.5000x0.5000f_dst-webp_e15_p420x420_q70_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=0&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent-maa2-2.xx&_nc_cat=101&_nc_ohc=HzVbxO_SkJcAX8voJNa&ccb=1-7&_nc_sid=4da83f&oh=00_AfDi1hOebRyrmtT73ZbrEpKyP2515FXDItsyyWSPx3zwcQ&oe=65A15D69"}

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

            <p className="px-4 mt-[15px] text-gray-800 font-normal">No Brokerage Posted Owner
                2bhk Independent Apartment for sale near @ITPL Whitefield Main Road, Bangalore East
                BDA and RERA approved project.
                100% Vaastu Compliant</p>

            <div className="mt-[15px]">
                {<img src={"https://scontent-maa2-2.xx.fbcdn.net/v/t39.30808-6/415059069_796035112538286_1800866195671143881_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=vsJceBkobL0AX_-hlIb&_nc_ht=scontent-maa2-2.xx&oh=00_AfAKL298MMz17e8B7_YXpAQiD_9n33SdVzY0Vbii7HsWSg&oe=65A03591"} alt="post pic" />}
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
