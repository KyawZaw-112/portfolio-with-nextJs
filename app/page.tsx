import Header from "@/components/header";
import NavigatorButtonGroup from "@/components/navigatorButtonGroup";
import Profile from "@/components/profile";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<div className="bg-[#364f6b] text-[#f0f0f0] h-screen z-0 overflow-hidden">
			<Header />
			<section id="profile" className="snap-center">
				<Profile />
			</section>
		</div>
	);
};

export default Home;
