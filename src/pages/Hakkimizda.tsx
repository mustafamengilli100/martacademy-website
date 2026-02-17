import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hakkimizda = () => {
  const instructors = [
    {
      image: '/assets/asset_2.png',
      name: 'Mustafa Mengilli',
      role: '2D & Konsept Art',
      socials: ['facebook', 'twitter', 'linkedin'],
    },
    {
      image: '/assets/asset_3.png',
      name: 'Derya Mengilli',
      role: 'Akademik Çizim',
      socials: ['facebook', 'twitter', 'linkedin'],
    },
  ];

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Hakkımızda
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Mart Akademi'nin sanat, tasarım ve animasyon eğitim dünyasındaki yerini ve uzman eğitmen kadromuzu yakından tanıyın.
            </p>
          </div>
          <div className="relative">
            <img
              src="/assets/asset_1.png"
              alt="Hakkımızda"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Biz Kimiz Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Biz Kimiz?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              2017 yılında kurulan Mart Akademi, sanat, tasarım ve animasyon alanlarında üstün kaliteli online eğitim veren öncül bir platformdur. Amacımız, her yetenek seviyesinden öğrencinin güçlü ve etkileyici portfolyolar hazırlamasına yardımcı olmaktır. Eğitimlerimiz, öğrencilere akademik sanat portfolyoları oluşturma, yaratıcı düşünceyi geliştirme ve mesleki becerilerini ilerletme fırsatları sunar.
            </p>
          </div>
          
          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-cyan-600" />
                </div>
                <span className="text-gray-700">+90 505 006 36 10</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-cyan-600" />
                </div>
                <span className="text-gray-700">info@martacademy.art</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-cyan-600" />
                </div>
                <span className="text-gray-700">İstanbul, Türkiye</span>
              </li>
            </ul>
            <Button className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
              info@martacademy.art
            </Button>
          </div>
        </div>

        {/* Eğitmenlerimiz Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Eğitmenlerimiz
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Deneyimli ve uzman eğitmen kadromuz, Mart Akademi öğrencilerine ilham verici ve kaliteli bir eğitim deneyimi sunuyor.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {instructor.name}
                  </h3>
                  <Badge className="bg-yellow-400 text-gray-900 mb-4">
                    {instructor.role}
                  </Badge>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hakkimizda;
