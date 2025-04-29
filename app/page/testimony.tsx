import React from 'react'
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export default function Testimony(){
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-[#086972] via-[#0BADA7] to-[#86C232]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Apa Kata Pelanggan Saya</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="relative">
            <CardContent className="pt-10">
              <div className="absolute top-0 left-0 transform -translate-y-1/2 bg-[#086972] rounded-full p-2">
                <Quote className="h-6 w-6 text-white" />
              </div>
              <p className="italic mb-6">
                "Saya sangat berpuas hati dengan khidmat nasihat yang diberikan. Perunding ini sangat profesional
                dan memahami keperluan kewangan keluarga saya. Terima kasih kerana membantu kami mendapatkan
                perlindungan yang sesuai."
              </p>
              <div className="flex items-center mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#0BADA7] flex items-center justify-center text-white font-bold">
                  AZ
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Ahmad Zulkifli</p>
                  <p className="text-sm text-gray-500">Pelanggan PruBSN Warisan Plus</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative">
            <CardContent className="pt-10">
              <div className="absolute top-0 left-0 transform -translate-y-1/2 bg-[#086972] rounded-full p-2">
                <Quote className="h-6 w-6 text-white" />
              </div>
              <p className="italic mb-6">
                "Proses permohonan sangat mudah dan cepat. Perunding ini telah menjelaskan semua manfaat dengan
                terperinci dan membantu saya memilih pelan yang paling sesuai dengan bajet saya. Sangat
                mengesyorkan!"
              </p>
              <div className="flex items-center mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#0BADA7] flex items-center justify-center text-white font-bold">
                  SR
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Siti Rahayu</p>
                  <p className="text-sm text-gray-500">Pelanggan i-Lindung</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative">
            <CardContent className="pt-10">
              <div className="absolute top-0 left-0 transform -translate-y-1/2 bg-[#086972] rounded-full p-2">
                <Quote className="h-6 w-6 text-white" />
              </div>
              <p className="italic mb-6">
                "Apabila saya dimasukkan ke hospital tahun lepas, perunding ini telah membantu saya dengan proses
                tuntutan dari A hingga Z. Saya tidak perlu risau tentang kertas kerja dan prosedur yang rumit.
                Perkhidmatan yang sangat baik!"
              </p>
              <div className="flex items-center mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#0BADA7] flex items-center justify-center text-white font-bold">
                  MR
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Mohd Razali</p>
                  <p className="text-sm text-gray-500">Pelanggan Pelan Kesihatan PruBSN</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

