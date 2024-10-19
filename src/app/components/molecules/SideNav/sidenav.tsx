"use client";

import { toggleSidebar } from "@/store/sidebarSlice/sidebarSlice";
import { RootState } from "@/store/store";
import React, { useEffect, useRef } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

export default function SideNav() {
  const dispatch = useDispatch();
  const openSidebar = useSelector(
    (state: RootState) => state.sidebar.openSidebar
  );

  const menuItems = [
    { name: "Pick a subject", href: "/pick-a-subject" },
    { name: "Past papers", href: "/papers" },
    { name: "Community", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Enter a Study Max code", href: "/login" },
    { name: "Pricing", href: "#" },
  ];
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Check if the click is outside the sidebar and if the sidebar is open
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        openSidebar
      ) {
        dispatch(toggleSidebar()); // Close the sidebar
      }
    }

    // Attach the event listener to detect clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSidebar, dispatch]);
  return (
    <div
      ref={sidebarRef}
      className={`fixed z-20 inset-y-0 left-0 w-64 bg-primary text-white transform ${
        openSidebar ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="text-white hover:text-gray-200 w-fit"
        >
          <IoMdCloseCircle size={24} />
        </button>
      </div>
      <nav className="mt-8">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="px-6 py-2 hover:bg-categoriesColor cursor-pointer"
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
        <button className="w-full py-2 px-4 bg-transparent border border-white text-white rounded hover:bg-white hover:text-teal-600 transition-colors duration-300">
          Sign in
        </button>
        <button className="w-full py-2 px-4 bg-white text-teal-600 rounded hover:bg-gray-100 transition-colors duration-300">
          Join for free
        </button>
      </div>
    </div>
  );
}
