import React from 'react'
import { Button } from '@/components/ui/button'

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-24  bg-gray-100 text-black"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Bersedia untuk Melangkah?</h2>
        <div className='flex flex-col md:flex-row space-around'>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg mb-4">
              Saya sedia membantu anda memilih pelan terbaik mengikut keperluan dan bajet anda.
            </p>
            <p className="text-xl font-semibold mb-8">📞 WhatsApp saya hari ini untuk sesi konsultasi PERCUMA!</p>
            <Button size="lg" className="bg-white text-[#086972] hover:bg-[#86C232] hover:text-white">
              <span className='text-xl font-bold'>Hubungi Saya</span>
            </Button>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-lg p-6 text-black mt-12 md:mt-0">
            <h3 className="text-xl font-semibold mb-4 text-[#086972]">Tinggalkan Maklumat</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Nama Penuh" className="w-full p-2 border rounded" required />
              <input type="tel" placeholder="No. Telefon" className="w-full p-2 border rounded" required />
              <input type="email" placeholder="E-mel" className="w-full p-2 border rounded" required />
              <select className="w-full p-2 border rounded" required>
                <option value="">Pilih Produk Yang Diminati</option>
                <option value="warisan">PruBSN Warisan Plus</option>
                <option value="anugerah">PruBSN Anugerah Plus</option>
                <option value="ilindung">i-Lindung</option>
                <option value="kesihatan">Pelan Kesihatan PruBSN</option>
              </select>
              <Button type="submit" className="w-full bg-[#086972] hover:bg-[#0BADA7]">
                Hantar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact