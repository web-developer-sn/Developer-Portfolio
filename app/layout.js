import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });
import QueryClientProvider from './utils/ReactQueryProvider'
export const metadata = {
  title: "Satendra | Full Stack Developer & MERN Expert",
  description:
    "Discover the portfolio of Satendra, a skilled Full Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js). Passionate about coding, problem-solving, and building scalable web applications. Open to collaborations and always eager to learn new technologies.",
  keywords: [
    "satendra",
    "snboy",
    "mern stack developer satendra",
    "full stack developer satendra",
    "react developer satendra",
    "node.js developer satendra",
    "mongodb expert satendra",
    "express.js developer satendra",
    "web developer portfolio satendra",
    "javascript developer satendra",
    "frontend developer satendra",
    "backend developer satendra",
    "satendra mern expert",
    "snboy developer",
    "snboy portfolio",
    "mern stack expert",
    "mern developer snboy",
    "full stack engineer satendra",
    "software engineer satendra",
    "next.js developer satendra",
    "satendra js developer",
  ],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <QueryClientProvider>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
       
          <Navbar />
          {children}
          <ScrollToTop />
         
        </main>

        <Footer />
        </QueryClientProvider>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}