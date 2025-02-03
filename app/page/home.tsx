"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { motion, useTime, useTransform } from "framer-motion";
import ParticleButton from '@/components/ui/shimmerButton';

const Home = () => {
  const time = useTime();
  const rotate = useTransform(time, [0,3000], [0,360], {
    clamp:false
  });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, black 0%, white 0%, #f00 50%, #f00 100%)`;
  });
  return (
    <section className="text-white py-20 grid gap-8 md:grid-cols-2 items-center">
      <div className="container mx-auto px-4 text-center ">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Lindungi Masa Depan Anda dengan Prudential Takaful</h1>
        <p className="text-xl mb-8">Penyelesaian insurans patuh Syariah untuk anda dan keluarga anda</p>
        <ParticleButton />
      </div>
      <div className='relative bg-mute '>
        <Image 
          src="/placeholder.svg?height=500&width=500&text=Image+Placeholder"
          alt="Ayu Suhada"
          width={500}
          height={500}
        />
      </div>
    </section>
  )
}

export default Home