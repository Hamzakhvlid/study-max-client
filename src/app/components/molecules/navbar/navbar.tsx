"use client"
import { useDispatch } from "react-redux";
import Button from "../../atoms/button";
import "./navbar.scss";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { toggleSidebar } from "@/store/sidebarSlice/sidebarSlice";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const dispatch = useDispatch()
  const router = useRouter()
  return (
    <header className="nav-header">
      <div className="nav-header-logo">
      <HiOutlineMenuAlt2 onClick={() => dispatch(toggleSidebar())} color="#6d31ed" size={24} className="cursor-pointer" />
        <img src="/images/logo.svg" alt="" />
        <h1 className="text-xl font-poppins_semibold">Exam Click</h1>
        <nav className="nav-items">
          <li className="nav-item">Home</li>
          <li className="nav-item">Past Papers</li>
          <li className="nav-item">About us</li>
          <li className="nav-item">Search</li>
        </nav>
      </div>

      <Button
        text="Enter Key"
        typeofButton="button"
        borderRadius="rounded-lg"
        backgroundColor="bg-buttonBg"
        width="w-fit"
        padding="px-[2rem] py-[0.5rem]"
        onClick={() => router.push('/login')}
      />
    </header>
  );
}
