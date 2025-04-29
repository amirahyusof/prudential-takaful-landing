import React from 'react'
import { 
  CheckCircle, 
  Shield, 
  Users, 
  Phone 
} from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="bg-[#EEEEEE] py-20 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Kenapa Pilih Saya?</h2>
        <p className='mb-6 text-center'>Sebagai Perunding Takaful berdaftar bersama Prudential BSN Takaful, misi saya adalah untuk membantu anda membina masa depan kewangan yang lebih terjamin, 
           sambil mematuhi prinsip-prinsip Syariah.
           <br></br>
          Saya percaya bahawa perlindungan takaful bukan sekadar pilihan, tetapi satu keperluan untuk diri dan keluarga tercinta.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <Shield className="w-12 h-12 text-[#086972]  mb-4" />
            <h3 className="text-xl font-semibold mb-2">100% Patuh Syariah</h3>
            <p>Semua produk yang saya tawarkan mematuhi prinsip Syariah sepenuhnya</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-12 h-12 text-[#086972] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Perkhidmatan Peribadi</h3>
            <p>Saya akan bantu anda dari A-Z termasuk urusan tuntutan</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="w-12 h-12 text-[#086972] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nasihat Profesional</h3>
            <p>Pelan yang dicadangkan sesuai dengan keperluan dan bajet anda</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Phone className="w-12 h-12 text-[#086972] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Respon Pantas</h3>
            <p>Saya sentiasa ada untuk anda bila-bila masa diperlukan</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About