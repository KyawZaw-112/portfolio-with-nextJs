import type { Metadata } from "next";
export const metadata: Metadata = {
	title: `My PortFolio | Skills`,
	description: "For My Application",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="h-screen overflow-hidden bg-black">{children}</body>
		</html>
	);
}
