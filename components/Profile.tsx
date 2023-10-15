"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Bona_Nova } from "next/font/google";
import BackGroundProfile from "./BackGroundProfile";
import Image from "next/image";
import profile from "./../app/public/profile-pic.jpg";

const bonaNova = Bona_Nova({
	subsets: ["greek"],
	weight: "700",
});

type Props = {};

const Profile = ({}: Props) => {
	const [text, count] = useTypewriter({
		words: [
			"Hi, My name is Kyaw Zaw Win",
			"I am Developer",
			"I live in Yangon",
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackGroundProfile />
			<Image
				src={profile}
				alt={"Profile-Picture"}
				width={400}
				height={400}
				className=" relative rounded-full h-32 w-32 mx-auto object-cover"
			/>
			<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
			<h1>
				<span className={`mr-4 ${bonaNova.className}`}>{text}</span>
				<Cursor cursorColor="#fc5185" cursorStyle="_" />
			</h1>
		</div>
	);
};

export default Profile;
