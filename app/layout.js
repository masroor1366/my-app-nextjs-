import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./layuots/sidbar/sidebar";
import Navbar from "./layuots/Navbar/Navbar"

 
import "@/public/assets/css/bootstrap.min.css"
import "@/public/assets/fontawesome/css/all.css"
import "@/public/assets/css/style.css"
 

 
 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "masroor1366.ir",
  description: "سایت رسمی مهندس محمدعلی مسرور",
};

export default function RootLayout({ children }) {
 
  return (
    <>
    <Navbar/>
    <Sidebar/>
  
     </>
   );
}
