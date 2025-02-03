import Image from "next/image";
import Home from "./page/home";
import About from "./page/about";
import Products from "./page/products";
import Contact from "./page/contact";
import Achievement from "./page/achivement";
import Link from "next/link";

export default function Main() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#1D1616] to-[#8E1616] text-white">
      <header className="bg-[#1D1616] shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Image
            src="/prudential-logo.svg"
            alt="Prudential Takaful"
            width={200}
            height={50}
            className="rounded-full"
          />
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="text-gray-100 hover:text-red-600">Tentang Saya</a>
              </li>
              <li>
                <a href="#products" className="text-gray-100 hover:text-red-600">Produk</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-100 hover:text-red-600">Hubungi Saya</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Home />
        <About />
        <Achievement />
        <Products />
        <Contact />
      </main>

      <footer className="bg-[#1D1616] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <Image src="/prudential-logo-white.svg" alt="Prudential Takaful" width={150} height={40} />
              <p className="mt-4">Melindungi masa depan anda, cara Syariah.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Pautan Pantas</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#produk">Produk</Link>
                </li>
                <li>
                  <Link href="#tentang">Tentang Saya</Link>
                </li>
                <li>
                  <Link href="#pencapaian">Pencapaian</Link>
                </li>
                <li>
                  <Link href="#hubungi">Hubungi Saya</Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-4">Ikuti Saya</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-blue-400">
                  Facebook
                </Link>
                <Link href="#" className="hover:text-blue-400">
                  Instagram
                </Link>
                <Link href="#" className="hover:text-blue-400">
                  Tiktok
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} Ayu Suhada | Prudential Takaful. Hak cipta terpelihara.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
