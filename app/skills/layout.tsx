import type { Metadata } from "next";
export const metadata: Metadata = {
	title: `My PortFolio | Skills`,
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
