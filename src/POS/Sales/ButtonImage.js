import React from "react";
import { useState } from "react";
import ImageB from "./Image";
import { Link, Router } from "react-router-dom";

function ImageButton() {
    const [image, setImage] = useState('');
    return (
        <div className="w-[95%] h-[70%]">
            <div className="w-full h-full mt-8 overflow-auto hover:select-text ">
                {ImageB.map(({ title, imge, link }) => (
                    <Link to={link}>
                        <button className="w-[18%] h-[25%] ml-4 mt-2 border shadow-lg shadow-gray-500 rounded-lg
                        hover:border-spacing-1 transition hover:scale-110 "
                            onClick={() => setImage(image)}> 
                            <img src={imge} alt={title} className='w-full h-full rounded-lg'></img>
                            <span className="text-sm font-bold">{title}</span>
                        </button>
                    </Link>
                ))}

            </div>

        </div>
    )
}

export default ImageButton;