import React from 'react'
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardFooter
} from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Products = () => {
  return (
    <section id="products" className="bg-[#EEEEEE] py-16 md:py-20 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Pelan Takaful untuk Setiap Keperluan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-t-4 border-t-[#086972]">
            <CardHeader>
              <CardTitle>PruBSN Warisan Plus</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Perlindungan hayat & pelaburan untuk masa depan keluarga anda. Nikmati manfaat perlindungan sambil
                mengumpul nilai tunai.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="text-[#086972] border-[#086972] hover:bg-[#086972] hover:text-white"
              >
                Ketahui Lebih Lanjut <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="border-t-4 border-t-[#086972]">
            <CardHeader>
              <CardTitle>PruBSN Anugerah Plus</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Perlindungan penyakit kritikal komprehensif yang melindungi anda daripada 45 jenis penyakit kritikal
                dengan bayaran manfaat sekaligus.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="text-[#086972] border-[#086972] hover:bg-[#086972] hover:text-white"
              >
                Ketahui Lebih Lanjut <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="border-t-4 border-t-[#086972]">
            <CardHeader>
              <CardTitle>i-Lindung</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Beli pelan hayat dan perubatan dalam talian dengan mudah. Perlindungan segera dengan proses
                permohonan yang ringkas.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="text-[#086972] border-[#086972] hover:bg-[#086972] hover:text-white"
              >
                Ketahui Lebih Lanjut <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="border-t-4 border-t-[#086972]">
            <CardHeader>
              <CardTitle>Pelan Kesihatan PruBSN</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Rawatan hospital & penyakit kritikal dengan perlindungan menyeluruh untuk kesihatan anda dan
                keluarga.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="text-[#086972] border-[#086972] hover:bg-[#086972] hover:text-white"
              >
                Ketahui Lebih Lanjut <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Products