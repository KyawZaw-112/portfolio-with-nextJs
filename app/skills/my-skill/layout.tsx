import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: `My PortFolio | Skill`,
	description: "For My Application",
};

export default function SkillLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>{children}</section>
	);
}
