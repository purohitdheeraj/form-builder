import type { Metadata } from "next";
import { Toaster } from 'react-hot-toast';

import "./globals.css";

export const metadata: Metadata = {
  title: "Form Builder",
  description: "A form builder for the web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`antialiased relative overflow-auto min-h-screen h-full `}
      >
        <div className="mx-auto flex flex-col max-w-[620px] h-[100%] bg-background">
          {children}
        </div>
        <Toaster 
          position="bottom-right"
          toastOptions={{
            className:'w-max mx-auto min-w-[320px] max-w-[320px] mob:max-w-[400px] flex items-center justify-between py-2 pl-2 px-4 rounded-xl font-normal bg-gray-1k dark:bg-gray-1k text-gray-00 overflow-hidden logo-drop-shadow h-full mr-10'
          }} 
        />
      </body>
    </html>
  );
}
