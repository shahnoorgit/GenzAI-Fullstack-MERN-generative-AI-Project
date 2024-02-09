import React from "react";
import { download } from "../assets";
import { DownloadImg } from "../Utils";

const Card = ({ _id, name, prompt, picture }) => {
  return (
    <div className="rounded-xl relative group shadow-card card hover:translate-y-[0.5rem] hover:shadow-cardhover">
      <img
        className="w-full h-auto rounded-xl object-cover"
        src={picture}
        alt={prompt}
      />
      <div className="group-hover:flex flex-col m-h[94.5%] hidden absolute bottom-0 right-0 left-0 m-2 p-4 rounded-md bg-[#10131f]">
        <p className="text-white text-md overflow-y-auto">{prompt}</p>
        <div className="flex mt-5 justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="text-xs font-bold flex bg-green-700 rounded-full justify-center items-center w-7 h-7">
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button
            className="bg-transparent outline-none border-none"
            type="button"
            onClick={() => DownloadImg(_id, picture)}
          >
            <img
              className="object-contain invert w-6 h-6"
              src={download}
              alt="Download"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
