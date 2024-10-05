import {Chakra_Petch} from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "ASACAM",
  description: "Empowering video monitoring through AI-driven insights",
}

const font = Chakra_Petch({ subsets: ["latin"], weight: ["400"]})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
