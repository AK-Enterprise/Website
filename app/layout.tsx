import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
export const metadata: Metadata = {
  title: "AK Enterprises",
  description:
    "AK Enterprise is a furniture company known for its high-quality and stylish furniture designs. Specializing in both modern and affordable furniture, AK Enterprise focuses on creating durable and aesthetically pleasing pieces for homes and offices.",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
