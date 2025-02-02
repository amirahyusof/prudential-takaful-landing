import React from 'react'
import { Button } from '@/components/ui/button';

const Quote = () => {
  return (
    <section id="get-quote" className="py-20">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8">Get a Free Quote</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" required />
          <input type="email" placeholder="Email Address" className="w-full p-2 border rounded" required />
          <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" required />
          <select className="w-full p-2 border rounded" required>
            <option value="">Select Product</option>
            <option value="family">Family Takaful</option>
            <option value="health">Health Takaful</option>
            <option value="investment">Investment Takaful</option>
          </select>
          <Button type="submit" className="w-full">Request Quote</Button>
        </form>
      </div>
  </section>
  )
}

export default Quote