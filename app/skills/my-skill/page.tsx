"use client";
import React, { useState } from "react";
import { FaBootstrap, FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Progress } from "@/components/ui/progress"

const SkillPage = () => {
	return (
		<div className="flex items-center z-50 flex-wrap">
			<div className=" border gap-4 w-52 flex flex-col justify-center items-center border-[#fc5185] h-28">
				<FaHtml5 className=" text-[#E35327] text-5xl" />
				<p className="text-[#f0f0f0] font-bold">HTML 5</p>
				<Progress value={20} className=" w-40" />

			</div>
			<div  className=" border gap-4 w-52 flex flex-col justify-center items-center border-[#fc5185] h-28">
				<FaCss3 className="text-[#2862E9] text-5xl" />
				<p className="text-[#f0f0f0] font-bold">Css3</p>
			</div>
			<div  className=" border gap-4 w-52 flex flex-col justify-center items-center border-[#fc5185] h-28">
				<SiJavascript className="text-[#EFD81D] text-5xl" />
				<p className="text-[#f0f0f0] font-bold">JavaScript</p>
			</div>
			<div  className=" border gap-4 w-52 flex flex-col justify-center items-center border-[#fc5185] h-28">
				<FaReact className="text-[#5ED3F3] text-5xl" />
				<p className="text-[#f0f0f0] font-bold">React</p>
			</div>
			<div  className=" border gap-4 w-52 flex flex-col justify-center items-center border-[#fc5185] h-28">
				<SiNextdotjs className="text[#000000] text-5xl" />
				<p className="text-[#f0f0f0] font-bold">NextJs</p>
			</div>
			<div  className=" border gap-4 w-52 flex flex-col justify-center items-center border-[#fc5185] h-28">
				<SiTailwindcss className="text-[#36B7F0] text-5xl" />
				<p className="text-[#f0f0f0] font-bold">Tailwind css</p>
			</div>
			<div  className=" border gap-4 w-52 flex flex-col justify-center items-center border-[#fc5185] h-28">
				<FaBootstrap className="text-[#8412FA] text-5xl" />
				<p className="text-[#f0f0f0] font-bold">Bootstrap</p>
			</div>
		</div>
	);
};

export default SkillPage;
