 
import Sidebar from "@/public/assets/components/sidebar/sidebar"
import Navbar from "@/public/assets/components/Navbar/Navbar"
 

import '@/public/assets/css/bootstrap.min.css'
import '@/public/assets/fontawesome/css/all.css'
import '@/public/assets/css/style.css'
 
 
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
  
    <html lang="en">
    
    <body>
     
    
   
    <Sidebar/>
    <Navbar/>
    {children}
    </body>
  </html>
    
    
  )
}
