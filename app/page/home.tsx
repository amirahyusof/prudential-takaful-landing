
import React from 'react'
import Image from 'next/image';
import SparkleButton from '@/components/ui/SparkleButton';

const Home = () => {
  return (
    <section className="text-white py-20 grid gap-8 md:grid-cols-2 items-center">
      <div className="container mx-auto px-4 text-center ">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Lindungi Masa Depan Anda dengan Prudential Takaful</h1>
        <p className="text-xl mb-8">Penyelesaian insurans patuh Syariah untuk anda dan keluarga anda</p>
        <SparkleButton />
      </div>
      <div className='relative bg-gray-600 border-2 mx-6 md:mx-2 border-white overflow-hidden'>
        <Image 
          src="/placeholder.svg?height=500&width=500&text=Image+Placeholder"
          alt="Ayu Suhada"
          width={400}
          height={500}
        />
      </div>
    </section>
  )
}

export default Home