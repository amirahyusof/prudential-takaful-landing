import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Protect Your Future with Prudential Takaful</h1>
        <p className="text-xl mb-8">Sharia-compliant insurance solutions for you and your family</p>
        <Button size="lg" asChild>
          <Link href="#get-quote">Get a Free Quote</Link>
        </Button>
      </div>
    </section>
  )
}

export default Home