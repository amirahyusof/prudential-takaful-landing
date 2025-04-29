
import React from 'react'
import Image from 'next/image';
import SparkleButton from '@/components/ui/SparkleButton';

const Home = () => {
  return (
    <section id='home' className="relative text-white py-24 ">
      <div className='container flex flex-col md:flex-row items-center'>
        <div className="px-10 md:px-40 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Lindungi Masa Depan Anda dengan Prudential Takaful</h1>
          <p className="text-xl mb-8">Penyelesaian insurans patuh Syariah untuk anda dan keluarga anda</p>
          <SparkleButton />
        </div>
        <div className='relative  w-full max-w-xs md:max-w-sm lg:max-w-md rounded-xl shadow-xl border-white overflow-hidden z-0 mt-10 md:mt-0'>
          <Image 
            src="/image/portfolio-image.png"
            alt="Portfolio Image"
            width={500}
            height={500}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  )
}

export default Home