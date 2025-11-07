'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Sparkles, Shield, TrendingUp, Users } from 'lucide-react'

const Home = () => {
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Islamic Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0 L75 25 L50 50 L25 25 Z M0 50 L25 75 L50 50 L25 25 Z M50 50 L75 75 L100 50 L75 25 Z M50 50 L75 25 L100 50 L75 75 Z" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1.5"
                    className="animate-pulse"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-pattern)"/>
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${15 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs with Mouse Parallax */}
      <div 
        className="absolute top-20 left-10 w-96 h-96 bg-[#86C232] rounded-full blur-3xl opacity-20 animate-pulse"
        style={{
          transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
        }}
      />
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#0BADA7] rounded-full blur-3xl opacity-20 animate-pulse"
        style={{
          transform: `translate(${-mousePos.x * 0.02}px, ${-mousePos.y * 0.02}px)`,
          animationDelay: '1s'
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className={`flex-1 text-center lg:text-left transform transition-all duration-1000 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6" style={{ animation: 'bounce-slow 3s ease-in-out infinite' }}>
              <Shield className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">100% Patuh Syariah</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Lindungi Masa Depan 
              <span className="block mt-2 bg-gradient-to-r from-white to-[#86C232] bg-clip-text text-transparent" style={{ backgroundSize: '200% auto', animation: 'gradient 3s ease infinite' }}>
                Dengan Prudential Takaful
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto lg:mx-0">
              Penyelesaian insurans patuh Syariah untuk anda dan keluarga anda
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto lg:mx-0">
              {[
                { icon: Users, label: '100+ Keluarga', value: 'Dilindungi' },
                { icon: Shield, label: 'Perlindungan', value: '24/7' },
                { icon: TrendingUp, label: 'Pelaburan', value: 'Terjamin' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 transform transition-all duration-500 hover:scale-105 hover:bg-white/20 ${
                    mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${idx * 200 + 400}ms` }}
                >
                  <stat.icon className="w-6 h-6 text-white mb-2 mx-auto lg:mx-0" />
                  <p className="text-xs text-white/70">{stat.label}</p>
                  <p className="text-sm font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            <a href="#contact">
              <button className="group relative inline-flex items-center gap-3 bg-white text-[#087E8B] px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#86C232] to-[#0BADA7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Sparkles className="w-5 h-5 relative z-10 group-hover:animate-spin" />
                <span className="relative z-10 group-hover:text-white transition-colors">
                  Dapatkan Sebut Harga Percuma
                </span>
              </button>
            </a>
          </div>

          {/* Right Content - Image */}
          <div className={`flex-1 max-w-md mx-auto lg:mx-0 transform transition-all duration-1000 ${
            mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="relative group">
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-2 border border-white/20 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#86C232] via-[#0BADA7] to-[#087E8B] opacity-50 blur-xl group-hover:opacity-75 transition-opacity" />
                
                <div className="relative rounded-2xl overflow-hidden">
                  <Image 
                    src="/image/portfolio-image.png"
                    alt="Ryzal - Prudential Takaful Agent"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#087E8B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-bold text-[#087E8B] text-lg">Ryzal</p>
                    <p className="text-sm text-gray-600">Perunding Takaful Bertauliah</p>
                    <div className="flex gap-2 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 fill-[#86C232]" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#86C232] rounded-full blur-2xl opacity-50 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#0BADA7] rounded-full blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          mounted ? 'opacity-100' : 'opacity-0' }`} style={{ transitionDelay: '1s' }}>
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-sm">Scroll ke bawah</span>
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Home