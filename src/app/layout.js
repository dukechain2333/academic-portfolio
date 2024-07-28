import {Inter} from "next/font/google";
import "./globals.css";
import personalInfo from '../../data/personalInfo.json';

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: personalInfo.name + "'s Portfolio",
    description: personalInfo.site_description,
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${inter.className}`}>{children}</body>
        </html>
    );
}
