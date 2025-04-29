import Image from "next/image";
import Home from "./page/home";
import About from "./page/about";
import Products from "./page/products";
import Contact from "./page/contact";
import Achievement from "./page/achivement";
import Testimony from "./page/testimony";
import Header from "./page/header";

export default function Main() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#087E8B] to-[#86C232] text-white">
      <Header />

      <main className="flex-grow">
        <Home />
        <About />
        <Achievement />
        <Products />
        <Testimony />
        <Contact />
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          
          <div className="mt-4 text-center">
            <p>&copy; {new Date().getFullYear()} Ryzal | Perunding Prudential Takaful Bertauliah. Hak cipta terpelihara.</p>
            <p className="text-sm text-gray-400 mt-1">Prudential Takaful Berhad adalah syarikat takaful berlesen</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
