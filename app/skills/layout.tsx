import type { Metadata } from "next";
export const metadata: Metadata = {
	title: `My PortFolio | Education`,
	description: "For My Application",
};

export default function EducationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>{children}</section>
	);
}
