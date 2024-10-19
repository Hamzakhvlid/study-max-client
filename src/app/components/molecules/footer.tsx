import Button from "../atoms/button";
import "./footer.scss";
export default function Footer() {
  return (
    <footer className="bg-footerbackground w-[100%] flex flex-col text-white items-center py-20">
      <h1 className="text-xl font-poppins">Subcribe to our newsletter</h1>
      <div className="flex">
        <div
          id="email"
          className={`flex items-center py-3 p-2 space-x-2 w-full rounded-l-full border-2 border-white `}
        >
          <img src="/images/Mail.svg" />
          <input
            className="bg-transparent focus:outline-none w-full"
            type="email"
            placeholder="Input your email"
          />
        </div>
        <Button
          text="Subscribe"
          typeofButton="button"
          backgroundColor="bg-buttonBg"
          padding="py-3 p-2"
          borderRadius="rounded-r-full"
          width="w-fit"
        />
      </div>
      <div className="flex justify-between items-center mt-10 w-[80%]">
        <div className="flex items-center">
          <img src="/images/logo.svg" alt="" />
          <h1 className="text-xl font-poppins_semibold">Study Max</h1>
        </div>
        <nav className="footer-items">
          <li className="footer-item">Pricing</li>
          <li className="footer-item"><a href="/about-us">About us</a></li>
          <li className="footer-item">Features</li>

          <li className="footer-item">Help Center</li>
          <li className="footer-item">Contact Us</li>
          <li className="footer-item">FAQ's</li>
          <li className="footer-item">Careers</li>
        </nav>
      </div>
      <div className="h-[0.05rem] w-[80%] bg-white mt-5"></div>
      <div className="flex justify-between items-center mt-5 w-[80%]">
        <select
          name="laguage"
          id="language"
          className="text-white px-3 py-1 bg-footerbackground border-white border-[0.5px] rounded-md"
        >
          <option id="english" itemID="english">
            English
          </option>
        </select>
        <h1 className="text-sm">
          © 2024 Study Max, Inc. • Privacy • Terms • Sitemap
        </h1>
        <div className="flex justify-around items-center gap-5">
          <img src="/images/x.svg" alt="" />
          <img src="/images/fb.svg" alt="" />
          <img src="/images/ln.svg" alt="" />
          <img src="/images/yt.svg" alt="" />
        </div>
      </div>
    </footer>
  );
}
