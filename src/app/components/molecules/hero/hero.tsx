import Link from "next/link";
import Button from "../../atoms/button";

export default function Hero(){
    return (
        <section className="hero-section relative bg-[#F0FBF3]">
            <img className="w-full h-full absolute top-0 left-0 right-0 bottom-0 -z-0" src="/images/wave 1.png" alt="" />
            <img className="absolute right-0 bottom-0 " src="/images/Oval.png" alt="" />
            <div className="flex flex-col lg:flex-row justify-around px-10 z-10 relative py-10">
                <div className="flex flex-col justify-start items-center w-full lg:w-[50%] relative">
                    <h1 className="text-[60px] font-poppins_semibold">Get Ready for Your Exams with Past & Mock Papers</h1>
                    <Link href={"/pick-a-subject"} className="rounded-full border-l-2 border-white shadow-lg text-[1.2rem] w-fit py-[0.5rem] px-[1.1rem] mt-[3rem] bg-primary text-white">Pick a Subject</Link>
                    <img className="hidden xs:inline-block absolute  right-0 bottom-0 lg:bottom-52" src="/images/Fill 1.png" alt="" />
                </div>
                <div>
                    <img draggable={false} src="/images/hero.png" alt="" />
                </div>
            </div>
        </section>
    )
}