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
  title: "Satendra | Full Stack Developer & MERN Expert |portfolio - satendra",
  description:
    "Discover the portfolio of Satendra, a skilled Full Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js). Passionate about coding, problem-solving, and building scalable web applications. Open to collaborations and always eager to learn new technologies.",
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
