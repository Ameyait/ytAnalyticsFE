import "./globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],

  weight: [
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
});

export const metadata = {
  title: "Youtube Analysis",
  description:
    "Professional Youtube Analytics Dashboard",
};

export default function RootLayout({
  children,
}) {

  return (

    <html lang="en">

      <body
        className={`${poppins.className} antialiased`}
      >

        {children}

      </body>

    </html>

  );
}