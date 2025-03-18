import React from "react";
import { IoMdClose } from "react-icons/io";

type cookieProps = {
  title: string;
  desc: string;
  closeCookie: () => void;
};

const Cookie: React.FC<cookieProps> = ({ title, desc, closeCookie }) => {
  return (
    <div className="w-full h-full bg-black/20 flex justify-center items-center absolute">
      <div
        //   style={{ height: `${h}px`, width: `${w}px` }}
        className="bg-white shadow-2xl flex flex-col justify-between items-center select-none rounded-xl px-10 py-5 gap-5 w-[550px]"
      >
        <div className="w-full flex justify-between items-center text-3xl font-light">
          <span className="font-bold">{title}</span>
          <span
            className="hover:text-red-500 tr cursor-pointer"
            onClick={() => closeCookie()}
          >
            <IoMdClose />
          </span>
        </div>
        <div className="w-full flex justify-center items-center">
          <span>{desc}</span>
        </div>
        <div className="w-full flex justify-start items-center gap-5 font-bold">
          <button
            className="bg-[#242444] text-white py-3 px-5 rounded-lg shadow-xl hover:bg-[#000000] tr cursor-pointer"
            onClick={() => closeCookie()}
          >
            Aceptar
          </button>
          <button
            className="hover:bg-red-700 hover:text-white py-3 px-5 rounded-lg shadow-xl bg-zinc-300 text-[#1A1A33] tr cursor-pointer"
            onClick={() => closeCookie()}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookie;
