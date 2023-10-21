"use client";
import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
type Props = {};

export default function Header({}: Props) {
	return (
		<header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className=" flex flex-row items-center"
			>
				<div className="tooltip tooltip-bottom" data-tip="facebook">
					<SocialIcon
						url="https://www.facebook.com/ho.leo.716"
						fgColor="#f0f0f0"
						bgColor="transparent"
					/>
				</div>
				<div className=" tooltip tooltip-bottom" data-tip= "github">
				<SocialIcon
					url="https://github.com/KyawZaw-112/"
					fgColor="#f0f0f0"
					bgColor="transparent"
				/>
				</div>
				.
				<SocialIcon
					url="https://www.linkedin.com/in/kyaw-zaw-win-4a69ba247/"
					fgColor="#f0f0f0"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.instagram.com/holeo_kyaw_zaw/"
					fgColor="#f0f0f0"
					bgColor="transparent"
				/>
			</motion.div>
			<motion.div
				initial={{ x: 500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center text-gray-300 cursor-pointer"
			>
				<SocialIcon
					className="cursor-pointer"
					network="email"
					fgColor="#f0f0f0"
					bgColor="transparent"
				/>
				<p className="hidden uppercase md:inline-flex text-sm text-[#f0f0f0]">
					Get in touch
				</p>
			</motion.div>
		</header>
	);
}
