"use client";
import "./login.scss";
import Button from "@/app/components/atoms/button";
import axios from "axios";
import { useState } from "react";
export default function login() {
  const [value, setValue] =useState("")
  
  return (
    <section className="flex w-full items-center min-h-screen overflow-hidden">
      <h1 className="login-nav z-10">Exam Click</h1>
      <img className="login-left-arrow z-10" src="/images/Arrow Left.svg" alt="left arrow" />
      <div className="half-main-container">
        <img className="login-hero" src="/images/login.png" alt="login" />
        
      </div>
      <div className="half-main-container-2">
        <h1 className="login-heading">Acess Key</h1>
        <form
    className="w-[50%] h-[50%] flex flex-col gap-y-5 justify-stretch"
      onSubmit={async (event: any) => {
        event.preventDefault();
        const response = await axios.post(`${process.env.STUDY_MAX_BACKEND_URL}/api/accessKeys`, {value})
        console.log(response)
        console.log(value);
      }}
    >
      <div className="my-3">
      <label className="text-sm" htmlFor={"key"}>
        Access Key
      </label>
      <div
        id={"key"}
        className={`flex items-center py-3 p-2 space-x-2 w-full border-b-2 border-b-secondary`}
      >
        <img src="/images/input.svg" />
        <input
          className="bg-transparent focus:outline-none w-full"
          type={"text"}
          placeholder={"Enter Access Key"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
      <Button
        text="Submit"
        typeofButton={"submit"}
        backgroundColor="bg-secondary"
      />
    </form>
      </div>
    </section>
  );
}
