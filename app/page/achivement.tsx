import React from 'react'
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { Award, TrendingUp, ThumbsUp } from "lucide-react"

const Achievement = () => {
  return (
    <section id="get-quote" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pencapaian</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-6 h-6 mr-2 text-red-500" />
                Anugerah Terbaik
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Diiktiraf sebagai Syarikat Takaful Terbaik tahun 2023 oleh Majalah Kewangan Islam.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-red-500" />
                Pertumbuhan Pesat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Mencapai pertumbuhan 30% dalam caruman Takaful pada tahun kewangan yang lalu.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ThumbsUp className="w-6 h-6 mr-2 text-red-500" />
                Kepuasan Pelanggan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Skor kepuasan pelanggan 95% berdasarkan kaji selidik bebas.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Achievement