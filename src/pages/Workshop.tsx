import { useState } from 'react';
import { Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Workshop = () => {
  const [activeFilter, setActiveFilter] = useState('Tümü');

  const filters = ['Tümü', 'Portfolyo', 'Çizim', 'Animasyon', 'Dijital'];

  const workshops = [
    {
      image: '/assets/asset_2.jpg',
      category: 'Ücretsiz Workshop',
      duration: '00:07:00',
      title: 'Harika Bir Portfolyo Oluşturmak İçin 10 İpucu',
      date: '24 Nisan 2024',
      badge: 'Çizim',
    },
    {
      image: '/assets/asset_3.jpg',
      category: 'Ücretsiz Workshop',
      duration: '00:11:00',
      title: 'Sanatçıların Bilmesi Gereken Portfolyo Hataları',
      date: '24 Nisan 2024',
      badge: 'Animasyon',
    },
    {
      image: '/assets/asset_4.jpg',
      category: 'Animasyon',
      duration: '00:13:00',
      title: 'Çizgi Film Stüdyosuna Portfolyo Hazırlama İpuçları',
      date: '26 Nisan 2024',
      badge: 'Çizim',
    },
    {
      image: '/assets/asset_5.jpg',
      category: 'Dijital',
      duration: '00:08:00',
      title: 'Dijital Sanatçılar için Portfolyo Düzen Önerileri',
      date: '17 Nisan 2024',
      badge: 'Dijital',
    },
  ];

  const filteredWorkshops = activeFilter === 'Tümü' 
    ? workshops 
    : workshops.filter(workshop => workshop.badge === activeFilter || workshop.category === activeFilter);

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Workshop
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Ücretsiz online atölyelerimize katılarak eğitim stilimizi deneyimleyin ve sanat, tasarım ve animasyon dünyasına hızlı bir başlangıç yapın.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8">
                Ücretsiz Katılın
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8">
                Tüm Workshoqlar
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/assets/asset_6.png"
              alt="Workshop"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Workshop Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredWorkshops.map((workshop, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-cyan-500 text-white">
                    {workshop.badge}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{workshop.duration}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <Badge variant="outline" className="border-cyan-500 text-cyan-600 mb-3">
                  {workshop.category}
                </Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {workshop.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{workshop.date}</span>
                  </div>
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
                    Kayıt Ol
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-r from-cyan-500/10 to-yellow-400/10 rounded-2xl p-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ücretsiz danışmanlık alın ve seviyenize uygun eğitimleri keşfedin
            </h2>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8">
              Ücretsiz Danışmanlık
            </Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/asset_6.png"
              alt="Consulting"
              className="w-48 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
