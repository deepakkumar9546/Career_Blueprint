import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Deepak Kumar | Java Full Stack Developer",
  description:
    "Portfolio of Deepak Kumar — Java Full Stack Developer skilled in Java, Spring Boot, React, PostgreSQL and REST APIs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}