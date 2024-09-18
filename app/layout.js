import "./globals.css";

export const metadata = {
	title: "Vessel",
	description: "Locul unde studiul Biblic întâlnește socializarea.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
