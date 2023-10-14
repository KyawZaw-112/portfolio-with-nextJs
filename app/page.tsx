import Header from "@/components/Header";
import Profile from "@/components/Profile";
import { NextPage } from "next";

const Home:NextPage = () => {
  return (
    <div className="bg-[#364f6b] text-[#f0f0f0] h-screen snap-y snap snap-mandatory overflow-scroll z-0">
      <Header/>
      <section id="profile" className="snap-center">
        <Profile />
      </section>
    </div>
  )
}

export default Home;
