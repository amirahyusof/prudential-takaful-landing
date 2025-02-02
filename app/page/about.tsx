import React from 'react'
import { 
  CheckCircle, 
  Shield, 
  Users, 
  Phone 
} from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Prudential Takaful?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center">
          <Shield className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Sharia-Compliant</h3>
          <p>All our products adhere to Islamic principles</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Trusted Brand</h3>
          <p>Backed by Prudential's global expertise</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Users className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Customer-Centric</h3>
          <p>Tailored solutions to meet your needs</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Phone className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p>Always here when you need us</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About