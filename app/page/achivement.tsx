import React from 'react'
import { 
  Card, 
  CardContent, 
} from '@/components/ui/card'
import { Shield, 
  CheckCircle, 
  Users2, 
  Award
} from "lucide-react"

const Achievement = () => {
  return (
    <section id="achivement" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Pencapaian Saya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Award className="w-12 h-12 text-[#086972] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Anugerah Ejen Terbaik 2023</h3>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users2 className="w-12 h-12 text-[#086972] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">100+ Keluarga telah dilindungi</h3>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Shield className="w-12 h-12 text-[#086972] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pakar dalam Pelan i-Lindung & PruBSN Warisan Plus</h3>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <CheckCircle className="w-12 h-12 text-[#086972] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Perunding dengan Sentuhan Peribadi dan Profesionalisme</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Achievement