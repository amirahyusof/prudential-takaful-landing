"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative md:hidden">
      <Button className="text-white bg-black/50 hover:bg-red-700" onClick={() => setOpen(!open)}>
        <Menu className="h-10 w-10" />
      </Button>
      {open && (
      <div className="absolute top-[60px] left-[-180px] w-[250px] bg-[#8E1616] z-50">
        <nav className="flex flex-col space-y-4 mt-2 p-4">
        <Link href="#home" className="text-gray-200 hover:text-red-600 text-lg" onClick={() => setOpen(false)}>
          Utama
        </Link>
        <Link href="#products" className="text-gray-200 hover:text-red-600 text-lg" onClick={() => setOpen(false)}>
          Produk
        </Link>
        <Link
          href="#achivement"
          className="text-gray-200 hover:text-red-600 text-lg"
          onClick={() => setOpen(false)}
        >
          Pencapaian
        </Link>
        <Button className="text-gray-200 hover:text-red-600 hover:bg-white w-full" onClick={() => setOpen(false)}>
          Hubungi Saya
        </Button>
        </nav>
      </div>
      )}
    </div>
  )
}