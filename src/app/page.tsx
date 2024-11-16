
import Navbar from "./components/molecules/navbar/navbar";
import Hero from "./components/molecules/hero/hero";
import Categories from "./components/molecules/categories/Categories";
import Footer from "./components/molecules/footer";
import CommentsSection from "./components/molecules/comments/Comments";
import SideNav from "./components/molecules/SideNav/sidenav";

export default function Home() {
  return (
    <>
    <SideNav />
    <Navbar />
    <Hero />
    <Categories />
    {/* <CommentsSection /> */}
    <Footer />
    </>
  );
}
