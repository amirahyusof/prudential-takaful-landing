"use client"

import React from 'react'
import { 
  Building2,
  Users,
  Briefcase,
  Target
} from 'lucide-react'

interface TargetItem {
  id: number
  icon: React.ReactNode
  title: string
  description: string
}

const WhoContactMe = () => {
  const targetAudience: TargetItem[] = [
    {
      id: 1,
      icon: <Building2 className="w-12 h-12" />,
      title: "Individu & Keluarga Muda",
      description: "Individu atau keluarga yang mahu sediakan perlindungan awal untuk masa depan yang lebih selamat"
    },
    {
      id: 2,
      icon: <Users className="w-12 h-12" />,
      title: "Pencari Pengetahuan",
      description: "Mereka yang ingin faham takaful sebelum membuat keputusan penting untuk kewangan keluarga"
    },
    {
      id: 3,
      icon: <Briefcase className="w-12 h-12" />,
      title: "Profesional Muda",
      description: "Pekerja yang mahukan ejen yang membantu pelan perlindungan sesuai gaji dan keperluan"
    },
    {
      id: 4,
      icon: <Target className="w-12 h-12" />,
      title: "Mereka yang Puas Hati",
      description: "Sesiapa yang mahukan ejen jujur yang menerangkan produk dengan tenang tanpa tekanan jualan"
    }
  ]

  return (
    <section id="who-contact-me" className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-24 text-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#86C232] rounded-full mix-blend-multiply filter blur-3xl opacity-15 -z-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0BADA7] rounded-full mix-blend-multiply filter blur-3xl opacity-15 -z-10 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#086972]">
            Siapa yang sesuai berbincang dengan saya?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Sebagai Perunding Takaful berdaftar bersama Prudential Takaful, saya siap membantu anda membina masa depan kewangan yang terjamin sambil mematuhi prinsip-prinsip Syariah.
          </p>
        </div>

        {/* Target Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {targetAudience.map((item, index) => (
            <div
              key={item.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card with gradient background */}
              <div className="h-full bg-gradient-to-br from-[#086972] to-[#0BADA7] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40 hover:-translate-y-2 overflow-hidden">
                {/* Icon Container */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 border border-white/30">
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-white/90 leading-relaxed text-sm">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#086972] to-[#0BADA7] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}

export default WhoContactMe