
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/ui/mobile-nav"


export default function Header() {
  return (
    <header className="fixed top-0 bg-gradient-to-r from-[#0BADA7] to-[#86C232] shadow-lg w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1>
          <a href="#home" className="text-white text-2xl font-bold hover:text-[#087E8B]">
            Ryzal          
          </a>
        </h1>
        <nav>
          <ul className="hidden md:flex space-x-4 items-center">
            <li>
              <a href="#about" className="text-gray-200 hover:text-[#087E8B]">
                Utama
              </a>
            </li>
            <li>
              <a href="#products" className="text-gray-200 hover:text-[#087E8B]">
                Produk
              </a>
            </li>
            <li>
              <a href="#achivement" className="text-gray-200 hover:text-[#087E8B]">
                Pencapaian
              </a>
            </li>
            <li>
              <Button asChild variant="secondary" className="bg-white hover:bg-[#087E8B] hover:text-[#86C232]">
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



