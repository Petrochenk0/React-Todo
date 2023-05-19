import React from "react";
import {FaCheck} from "react-icons/fa";

const Chek = ({isBool}) => {
    return (
        <div className={`
        items-center
        justify-center
        w-7 h-7
        border-2 border-pink-400
        ${isBool?'bg-pink-400':''}
        rounded-lg
        mr-5
        flex items-center
        justify-center
        `}>
            {isBool && <FaCheck size={20}/>}
        </div>
    )
}

export default Chek