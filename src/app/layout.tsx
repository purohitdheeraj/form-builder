import type { Metadata } from "next";
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
        className={`antialiased`}
      >
        <div className="mx-auto max-w-[620px] min-h-svh bg-background h-full">
        {children}
        </div>
      </body>
    </html>
  );
}
