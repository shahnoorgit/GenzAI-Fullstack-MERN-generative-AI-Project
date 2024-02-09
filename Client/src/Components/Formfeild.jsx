import React from "react";

const Formfeild = ({
  LabelName,
  name,
  type,
  placeholder,
  handleIsSupriseME,
  value,
  IsSupriseME,
  handleChange,
}) => {
  return (
    <div>
      {" "}
      <div className=" flex items-center gap-2 mb-2">
        <label
          className=" block text-sm font-medium text-[#f5d0cc]"
          htmlFor={name}
        >
          {LabelName}
        </label>

        {IsSupriseME && (
          <button
            onClick={handleIsSupriseME}
            className=" text-semibold text-sm bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
          >
            Suprise Me
          </button>
        )}
      </div>
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        required
        className=" bg-[#333333] border border-[#fbfdf6] text-white text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
      />
    </div>
  );
};

export default Formfeild;
