import { Calendar, Play, Lightbulb, Monitor, Wifi, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Temeller = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Canlı Dersler',
      description: 'Deneyimli eğitmenlerimizle canlı ve etkileşimli dersler',
      badge: '#27',
    },
    {
      icon: Play,
      title: 'Kayıtlı Videolar',
      description: 'Kaçırdığınız dersleri tekrar izlemek için ders kayıtlarımız',
    },
    {
      icon: Lightbulb,
      title: 'Geri Bildirim',
      description: 'Çalışmalarınıza özel geri bildirim ve mentörlük hizmetleri',
    },
  ];

  const materials = [
    {
      icon: Monitor,
      title: 'Grafik Tablet',
    },
    {
      icon: Monitor,
      title: 'Laptop / PC',
    },
    {
      icon: Wifi,
      title: 'İnternet Bağlantısı',
    },
    {
      icon: Package,
      title: 'Gerekli Materyaller',
    },
  ];

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Online Eğitim Nasıl Yapılır?
            </h1>
            <p className="text-gray-600 text-lg">
              Online derslerimiz nasıl işleniyor, nelere ihtiyacınız var, öğrenin.
            </p>
          </div>
          <div className="relative">
            <img
              src="/assets/asset_1.png"
              alt="Online Eğitim"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Online Eğitimin Temelleri */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="h-px w-16 bg-gray-300" />
            <h2 className="text-2xl font-bold text-gray-900">
              Online Eğitimin Temelleri
            </h2>
            <div className="h-px w-16 bg-gray-300" />
          </div>
          <p className="text-gray-600">
            Mart Akademi'de online eğitimler nasıl işleniyor?
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-cyan-50 rounded-2xl flex items-center justify-center relative">
                <feature.icon className="h-8 w-8 text-cyan-500" />
                {feature.badge && (
                  <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {feature.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Gerekli Malzemeler */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Gerekli Malzemeler
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {materials.map((material, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-2xl flex items-center justify-center">
                <material.icon className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900">
                {material.title}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8">
            Workshoplara ve Eğitimlere Katılın
          </Button>
        </div>

        {/* Workshop Example */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Örnek Bir Workshop
            </h3>
            <p className="text-gray-600 mb-6">
              Alanında uzman bir eğitmen tarafından örnek bir workshop ders kaydına göz atın ve süreç hakkında fikir edinin.
            </p>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold">
              <Play className="mr-2 h-5 w-5" />
              Videoyu İzle
            </Button>
          </div>
          <div className="relative">
            <img
              src="/assets/asset_6.png"
              alt="Workshop Example"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temeller;
