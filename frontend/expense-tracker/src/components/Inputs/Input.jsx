import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, placeholder, label, type }) => {
  const [showPassword, setShowPasssword] = useState(false);

  const toggleShowPassword = () => setShowPasssword(!showPassword);

  return (
    <div className="mb-4">
      <label className="text-[13px] text-slate-800 block mb-1">{label}</label>
      <div className="input-box relative">
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none border border-slate-300 px-3 py-2 rounded"
          value={value}
          onChange={onChange}
        />
        {type === 'password' && (
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-slate-500"
            onClick={toggleShowPassword}
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        )}
        {type === "password" && (
            showPassword ? (
                <FaRegEye
                    size={22}
                    className="text-primary cursor-pointer"
                    onClick={toggleShowPassword}
                />
            ) : (
                <FaRegEyeSlash
                    size={22}
                    className="text-slate-400 cursor-pointer"
                    onClick={toggleShowPassword}
                />
            )
        )}
      </div>
    </div>
  );
};

export default Input;
