import Image from "next/image";
import Home from "./page/home";
import About from "./page/about";
import Products from "./page/products";
import Contact from "./page/contact";
import Quote from "./page/get-quote";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Prudential Takaful Insurance | Protect Your Future',
  description: 'Discover Prudential Takaful insurance solutions. Sharia-compliant protection for you and your family. Get a quote today!',
  openGraph: {
    title: 'Prudential Takaful Insurance | Protect Your Future',
    description: 'Discover Prudential Takaful insurance solutions. Sharia-compliant protection for you and your family. Get a quote today!',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Prudential Takaful Insurance' }],
  },
}

export default function Main() {
  return (
    <div className="flex flex-col min-h-screen">
     <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Image
          src="/prudential-logo.svg"
          alt="Ayu Suhada"
          width={200}
          height={50}
          className="rounded-full"
        />
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="text-gray-800 hover:text-gray-600">About</a>
            </li>
            <li>
              <a href="#products" className="text-gray-800 hover:text-gray-600">Products</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-800 hover:text-gray-600">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main className="flex-grow">
      <Home />
      <About />
      <Products />
      <Quote />
      <Contact />
    </main>

    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <Image src="/prudential-logo-white.svg" alt="Prudential Takaful" width={150} height={40} />
              <p className="mt-4">Protecting your future, the Sharia way.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#products">Products</Link></li>
                <li><Link href="#about">About Us</Link></li>
                <li><Link href="#get-quote">Get a Quote</Link></li>
                <li><Link href="#contact">Contact</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-blue-400">Facebook</Link>
                <Link href="#" className="hover:text-blue-400">Instagram</Link>
                <Link href="#" className="hover:text-blue-400">Tiktok</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} Prudential Takaful. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
