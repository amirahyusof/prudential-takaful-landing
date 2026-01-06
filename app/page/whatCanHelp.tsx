"use client"

import React from 'react'
import { 
  Lightbulb, 
  Wallet, 
  Heart, 
  MessageSquare 
} from 'lucide-react'

interface ServiceItem {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const WhatCanHelp = () => {
  const services: ServiceItem[] = [
    {
      id: 1,
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Penjelasan Sederhana",
      description: "Membantu anda faham keperluan perlindungan tanpa istilah rumit yang membingungkan",
      color: "from-teal-50 to-teal-100"
    },
    {
      id: 2,
      icon: <Wallet className="w-12 h-12" />,
      title: "Pelan Fleksibel",
      description: "Mencadangkan pelan ikut kemampuan anda, bukan paksaan yang memberatkan",
      color: "from-teal-50 to-teal-100"
    },
    {
      id: 3,
      icon: <Heart className="w-12 h-12" />,
      title: "Perlindungan Keluarga",
      description: "Menerangkan hibah, perubatan & perlindungan keluarga dengan jelas dan terperinci",
      color: "from-teal-50 to-teal-100"
    },
    {
      id: 4,
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Sokongan 24/7",
      description: "Saya sentiasa ada untuk anda bila-bila masa diperlukan dengan respons cepat",
      color: "from-teal-50 to-teal-100"
    }
  ]

  return (
    <section id="about" className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-24 text-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#086972]">
            Apa yang saya bantu sebagai ejen takaful?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Saya berkomitmen memberikan layanan terbaik untuk keperluan perlindungan kewangan anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card with gradient background */}
              <div className={`h-full bg-gradient-to-br ${service.color} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 hover:border-white backdrop-blur-sm hover:-translate-y-2 cursor-pointer`}>
                {/* Icon Container */}
                <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}>
                  <div className="text-[#086972]">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#086972] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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

export default WhatCanHelp