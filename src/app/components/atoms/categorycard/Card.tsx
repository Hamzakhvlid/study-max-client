"use client";
import { useState } from "react";

export default function CategoriesCard({ title }: CategoriesCardProps) {
  const [clicked, setClicked] = useState(false);
  return (
    <div onClick={() => {setClicked(true)}} className="flex justify-between items-center border-2 border-black hover:border-buttonBg rounded-xl pt-5 py-10 text-2xl font-poppins_semibold px-10 cursor-pointer text-black hover:text-white hover:bg-buttonBg">
      {title}
      {clicked && (
        <>
          <div className="h-[40px] w-[40px] rounded-full bg-[#6C62F3] flex justify-center items-center">
            <img src="/images/tail-right-black.svg" alt="" />
          </div>
        </>
      )}
    </div>
  );
}
