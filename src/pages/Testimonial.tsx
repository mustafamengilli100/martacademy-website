import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Testimonial = () => {
  const testimonials = [
    {
      image: '/assets/asset_1.png',
      name: 'Anıl Ö.',
      role: 'Konsept Art Öğrencisi',
      rating: 5,
      text: '"Mart Akademi\'ye katılmak, portfolyomu güçlendirip oyun sektörüne adım atmamı sağladı. Eğitmenler çok destekleyici ve bilgiliydi."',
    },
    {
      image: '/assets/asset_2.png',
      name: 'İdil Ç.',
      role: 'Konsept Art Öğrencisi',
      rating: 5,
      text: '"Eğitimler gerçekten etkileyici ve motivasyon doluydu. Çizim becerilerimi ciddi şekilde ilerlettim ve portföyümde büyük bir gelişme oldu."',
    },
    {
      image: '/assets/asset_3.png',
      name: 'Selin T.',
      role: 'Konsept Art Öğrencisi',
      rating: 5,
      text: '"Eğitimler gerçekten etkileyici ve motivasyon doluydu. Çizim becerilerimi ciddi şekilde ilerlettim ve portföyümde büyük bir gelişme oldu."',
    },
  ];

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Testimonial
            </h1>
            <p className="text-gray-600 text-lg">
              Mart Akademi'de eğitim almış öğrencilerimizden gelen yorumlar
            </p>
          </div>
          <div className="relative">
            <img
              src="/assets/asset_4.png"
              alt="Testimonial"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Mutlu Öğrencilerimiz */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="h-px w-16 bg-gray-300" />
            <h2 className="text-2xl font-bold text-gray-900">
              Mutlu Öğrencilerimiz
            </h2>
            <div className="h-px w-16 bg-gray-300" />
          </div>
          <p className="text-gray-600">
            Öğrencilerimiz Mart Akademi hakkında neler söylüyor?
          </p>
          <div className="flex justify-center mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/basvuru">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8">
              Başvuru Yap ve Katıl
            </Button>
          </Link>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-r from-cyan-50 to-yellow-50 rounded-2xl p-8">
          <div>
            <p className="text-gray-700 text-lg">
              Mart Akademi'de eğitim almış öğrencilerimizden <span className="font-semibold text-cyan-600">gelen yorumlar</span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/asset_4.png"
              alt="Student"
              className="w-48 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
