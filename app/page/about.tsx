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
        <h2 className="text-3xl font-bold text-center mb-12">Mengapa Memilih Prudential Takaful?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <Shield className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Patuh Syariah</h3>
            <p>Semua produk kami mematuhi prinsip Islam</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Jenama Dipercayai</h3>
            <p>Disokong oleh kepakaran global Prudential</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Berfokus Pelanggan</h3>
            <p>Penyelesaian yang disesuaikan untuk memenuhi keperluan anda</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Phone className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sokongan 24/7</h3>
            <p>Sentiasa ada apabila anda memerlukan kami</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About