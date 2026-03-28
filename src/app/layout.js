
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";





export const metadata = {
  title: "AOS IMPACT SOLUTIONS",
  description: "Professional Credit Restoration",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
     
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
