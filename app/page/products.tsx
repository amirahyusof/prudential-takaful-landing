import React from 'react'
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'

const Products = () => {
  return (
    <section id="products" className="bg-[#EEEEEE] py-20 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Produk Takaful</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Takaful Keluarga</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Lindungi orang tersayang anda dengan pelan Takaful keluarga komprehensif kami.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Takaful Kesihatan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Pastikan kesihatan dan kesejahteraan anda dengan perlindungan kesihatan patuh Syariah kami.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Takaful Pelaburan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Kembangkan kekayaan anda sambil dilindungi dengan pelan Takaful berkaitan pelaburan kami.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Products