import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NASA or Not",
  description:
    "An app challenging users to identify the real NASA Picture of the Day and spot the AI-generated imposter. Developed by Trevor Brown",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
