import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Youtube, MessageCircle } from 'lucide-react';

const Basvuru = () => {
  const [activeFilter, setActiveFilter] = useState('Tümü');

  const filters = ['Tümü', 'Çizim', 'Animasyon', 'Dijital Tasarım', 'Öncesi & Sonrası'];

  const galleryItems = [
    {
      image: '/assets/asset_2.jpg',
      category: 'Çizim',
      title: 'Akademik Çizim',
    },
    {
      image: '/assets/asset_3.jpg',
      category: 'Animasyon',
      title: 'Karakter Tasarımı',
    },
    {
      image: '/assets/asset_4.jpg',
      category: 'Dijital Tasarım',
      title: 'Dijital İllüstrasyon',
    },
    {
      image: '/assets/asset_5.jpg',
      category: 'Öncesi & Sonrası',
      title: 'Portfolyo Çalışması',
    },
    {
      image: '/assets/asset_6.jpg',
      category: 'Çizim',
      title: 'Konsept Art',
    },
    {
      image: '/assets/asset_7.jpg',
      category: 'Animasyon',
      title: '3D Modelleme',
    },
  ];

  const filteredGallery = activeFilter === 'Tümü' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Başvuru & İletişim
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Bize başvurarak ve iletişime geçerek sanat eğitimi yolculuğunuza hemen başlayın.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/basvuru">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8">
                  Başvuru Yap
                </Button>
              </Link>
              <Link to="/workshop">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8">
                  Tüm Workshoqlar
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/assets/asset_1.png"
              alt="Başvuru"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Gallery Filters */}
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

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredGallery.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-cyan-500 text-white">
                  {item.category}
                </Badge>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media CTA */}
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-r from-cyan-500/10 to-yellow-400/10 rounded-2xl p-8 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sosyal Medyada Bizi Takip Edin!
            </h2>
            <p className="text-gray-600 mb-6">
              Eğitimlerimiz ve öğrenci çalışmalarıyla ilgili en güncel haberleri almak için sosyal medya hesaplarımızı takip edin.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-cyan-500 hover:shadow-md transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-cyan-500 hover:shadow-md transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-cyan-500 hover:shadow-md transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-cyan-500 hover:shadow-md transition-all">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/asset_6.png"
              alt="Social Media"
              className="w-48 h-auto"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bize Ulaşın
            </h2>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Adınız
                  </label>
                  <Input type="text" placeholder="Adınız" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Soyadınız
                  </label>
                  <Input type="text" placeholder="Soyadınız" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-posta
                </label>
                <Input type="email" placeholder="E-posta adresiniz" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <Input type="tel" placeholder="Telefon numaranız" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mesajınız
                </label>
                <Textarea placeholder="Mesajınızı yazın..." rows={4} />
              </div>
              <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-6">
                Gönder
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                İletişim Bilgileri
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefon</p>
                    <p className="text-gray-900 font-medium">+90 505 006 36 10</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">E-posta</p>
                    <p className="text-gray-900 font-medium">info@martacademy.art</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Adres</p>
                    <p className="text-gray-900 font-medium">İstanbul, Türkiye</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-yellow-400 rounded-2xl p-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="h-7 w-7 text-yellow-500" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">WhatsApp Destek</p>
                  <p className="text-gray-800 text-sm">Hemen bize ulaşın</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basvuru;
