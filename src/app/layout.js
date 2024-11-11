"use client"
import { useEffect } from "react";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'aos/dist/aos.css';
// import AOS from 'aos';
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    // AOS.init();
  }, []);
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

