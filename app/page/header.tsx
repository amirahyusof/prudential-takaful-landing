
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/ui/mobile-nav"


export default function Header() {
  return (
    <header className="fixed top-0 bg-[#8E1616] shadow-lg w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Image src="/prudential-logo.svg" alt="Prudential Takaful" width={200} height={50} className="rounded-full" />
        <nav>
          <ul className="hidden md:flex space-x-4 items-center">
            <li>
              <a href="#about" className="text-gray-200 hover:text-red-600">
                Utama
              </a>
            </li>
            <li>
              <a href="#products" className="text-gray-200 hover:text-red-600">
                Produk
              </a>
            </li>
            <li>
              <a href="#achivement" className="text-gray-200 hover:text-red-600">
                Pencapaian
              </a>
            </li>
            <li>
              <Button asChild variant="secondary" className="hover:bg-white hover:text-red-600">
                <a href="#contact">Hubungi Saya</a>
              </Button>
            </li>
          </ul>
          <MobileNav />
        </nav>
      </div> 
    </header>
  )
}



