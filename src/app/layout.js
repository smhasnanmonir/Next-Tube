import { Inter } from "next/font/google";
import "./globals.css";
import NavBarComp from "@/components/NavBarComp/NavBarComp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Js Youtube",
  description: "A website to stream ad free youtube",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:w-[80%] mx-auto md:px-0 px-[5%]">
          <NavBarComp></NavBarComp>
          {children}
        </div>
      </body>
    </html>
  );
}
