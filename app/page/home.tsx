import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AnimatedButton from '@/components/ui/shimmerButton';

const Home = () => {
  return (
    <section className="text-white py-20 grid gap-8 md:grid-cols-2 items-center">
      <div className="container mx-auto px-4 text-center ">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Lindungi Masa Depan Anda dengan Prudential Takaful</h1>
        <p className="text-xl mb-8">Penyelesaian insurans patuh Syariah untuk anda dan keluarga anda</p>
        <AnimatedButton className='bg-red-700'>
          <Link href="#" className='text-xl font-bold'>
            Dapatkan Quote Percuma
          </Link>
        </AnimatedButton>
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