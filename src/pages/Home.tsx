import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageCircle, Monitor, Users, FolderOpen, ArrowRight, CheckCircle } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Eğitimler',
      description: 'Çizim, animasyon ve tasarım konularında kapsamlı ders programları',
    },
    {
      icon: Users,
      title: 'Mentörlük',
      description: 'Uzman mentörler eşliğinde birebir geri bildirim ve yönlendirme',
    },
    {
      icon: FolderOpen,
      title: 'Portfolyo Hazırlama',
      description: 'Alanında yetkin bir portfolyo hazırlamak için rehberlik ve değerlendirme',
    },
  ];

  const studentWorks = [
    {
      image: '/assets/asset_2.jpg',
      title: 'Akademik Çizim Teknikleri',
    },
    {
      image: '/assets/asset_3.jpg',
      title: '2D ve 3D Animasyon',
    },
    {
      image: '/assets/asset_4.jpg',
      title: 'Dijital Tasarım',
    },
    {
      image: '/assets/asset_5.jpg',
      title: 'Karakter Tasarımı',
    },
  ];

  const processSteps = [
    {
      icon: CheckCircle,
      title: 'Başvuru & Değerlendirme',
      description: 'Öğrencinin seviyesini ve hedeflerini analiz ediyoruz.',
    },
    {
      icon: CheckCircle,
      title: 'Programa Kabul',
      description: 'Uygun programa yönlendirme yapıyoruz.',
    },
    {
      icon: CheckCircle,
      title: 'Sertifika & Rapor',
      description: 'Süreç sonunda sertifika ve gelişim raporu veriyoruz.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Portfolyo Odaklı Sanat, Tasarım ve Animasyon Eğitimleri
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Öne çıkan portfolyolar hazırlamak için online sanat, tasarım ve animasyon eğitimleri ile rehberlik ve mentörlük sağlıyoruz.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/basvuru">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-6 text-base">
                    Başvuru Yap
                  </Button>
                </Link>
                <Link to="/basvuru">
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-base">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Ücretsiz Danışmanlık
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/assets/asset_1.png"
                  alt="MArt Academy Hero"
                  className="w-full h-auto max-w-lg mx-auto"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Ne Sunuyoruz Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ne Sunuyoruz?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Portfolyo odaklı sanat, tasarım ve animasyon eğitimleriyle öğrenme sürecinizi baştan sona destekliyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-cyan-50 rounded-2xl flex items-center justify-center">
                  <service.icon className="h-10 w-10 text-cyan-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/egitimler">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8">
                Tüm Eğitimleri Gör
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Öğrenci İşleri Section */}
      <section className="py-16 lg:py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Öğrenci İşleri
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentWorks.map((work, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    {work.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/egitimler">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8">
                Tüm Eğitimleri Gör
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolyo Geliştirme Süreci */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Portfolyo Geliştirme Süreci
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-cyan-500/10 to-yellow-400/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ücretsiz danışmanlık alın ve seviyenize uygun eğitimleri keşfedin
          </h2>
          <Link to="/basvuru">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-6 text-base">
              Ücretsiz Danışmanlık
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
