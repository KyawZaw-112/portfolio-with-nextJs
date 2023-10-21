"use client"
import React, { useState } from "react";
import Link from "next/link";
type Props = {};



const NavigatorButtonGroup = (props: Props) => {

	return (
		<div>
			<Link href="/">
				<button className="profile-btn mx-3 ">
					About
				</button>
			</Link>
			<Link
				href={{
					pathname: "/skills",
				}}
			>
				<button className="profile-btn mx-3">
					Skills
				</button>
			</Link>
			<Link href="#projects">
				<button className="profile-btn mx-3" onClick={()=>console.log('hello')}>
					Projects
				</button>
			</Link>
		</div>
	);
};

export default NavigatorButtonGroup;
