"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { AlignRightIcon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger } from "@/components/ui/sidebar"

const items = [
  {
    name: "Utama",
    href: "#about",
  },
  {
    name: "Produk",
    href: "#products",
  },
  {
    name: "Pencapaian",
    href: "#achivement",
  },
  {
    name: "Hubungi Saya",
    href: "#contact",
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    if (href) {
      window.location.hash = href
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky bg-[#8E1616] shadow-lg w-full">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
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

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger>
                <Button variant="ghost" size="icon" className="text-white">
                  <AlignRightIcon className="h-10 w-10" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] h-full sm:w-[300px]">
                <SheetTitle>Menu</SheetTitle>
                <nav className="flex flex-col space-y-4 mt-4">
                  <ul className="space-y-2">
                    <li>
                      <a href="#about" className="text-red-600 hover:text-gray-200">
                        Utama
                      </a>
                    </li>
                    <li>
                      <a href="#products" className="text-red-600 hover:text-gray-200" >
                        Produk
                      </a>
                    </li>
                    <li>
                      <a href="#achivement" className="text-red-600 hover:text-gray-200">
                        Pencapaian
                      </a>
                    </li>
                    <li>
                      <Button className="w-full">
                        <a href="#contact" onClick={handleLinkClick}>Hubungi Saya</a>
                      </Button>
                    </li>
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}



