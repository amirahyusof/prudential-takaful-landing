import React from 'react'
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'

const Products = () => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Takaful Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Family Takaful</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Protect your loved ones with our comprehensive family Takaful plan.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Health Takaful</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ensure your health and well-being with our Sharia-compliant health coverage.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Investment Takaful</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Grow your wealth while staying protected with our investment-linked Takaful plans.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Products