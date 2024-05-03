import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Shared/Header/Header";
import Footer from "@/components/Shared/Footer/Footer";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dragon News | Home",
  description: "Journalism Without Fear or Favour",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
       <Container className="min-h-screen">
       {children}
       </Container>
        <Footer/>
        </body>
    </html>
  );
}
