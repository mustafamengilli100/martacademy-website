import { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const PortfolyoRehberi = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Akademik', count: 0 },
    { name: 'Sanat', count: 0 },
    { name: 'Animasyon', count: 1 },
    { name: 'Portfolyo Hazırlama', count: 2 },
    { name: 'Dijital Tasarım', count: 3 },
  ];

  const articles = [
    {
      image: '/assets/asset_2.jpg',
      category: 'Dijital Tasarım',
      readTime: '1 dakikada okunur',
      timeAgo: '3 saat önce',
      title: 'Dijital Sanatçılar İçin Portfolyo Düzeni Önerileri Kopyası',
      description: 'Dijital sanatçılar için portfolyo düzen ve içerik önerilerini öğrenin.',
    },
    {
      image: '/assets/asset_3.jpg',
      category: 'Portfolyo Hazırlama',
      readTime: '1 dakikada okunur',
      timeAgo: '4 saat önce',
      title: 'Harika Bir Portfolyo Oluşturmak İçin 10 İpucu',
      description: 'Başarılı bir portfolyo hazırlamak için temel ipuçları ve stratejileri keşfedin.',
    },
    {
      image: '/assets/asset_4.jpg',
      category: 'Portfolyo Hazırlama',
      readTime: '1 dakikada okunur',
      timeAgo: '4 saat önce',
      title: 'Sanatçıların Bilmesi Gereken Portfolyo Hataları',
      description: 'Sanatçılar ve tasarımcılar tarafından sıkça yapılan portfolyo hatalarından kaçının.',
    },
    {
      image: '/assets/asset_5.jpg',
      category: 'Animasyon',
      readTime: '1 dakikada okunur',
      timeAgo: '4 saat önce',
      title: 'Animasyon Stüdyolarına Portfolyo Hazırlama İpuçları',
      description: 'Animasyon stüdyolarına başvururken etkileyici bir portfolyo oluşturma.',
    },
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Portfolyo Rehberi
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Sanat ve tasarım dünyasında öne çıkmak için portfolyonuzu geliştirmenize yardımcı olacak ipuçları, rehberler ve stratejiler
            </p>
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 w-full"
              />
            </div>
          </div>
          <div className="relative">
            <img
              src="/assets/asset_1.png"
              alt="Portfolyo Rehberi"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Articles */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Öne Çıkan Yazılar
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {filteredArticles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                      <span>{article.timeAgo}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <Badge className="bg-cyan-500 text-white mb-3">
                      {article.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {article.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-2 mt-8">
              <button className="p-2 text-gray-400 hover:text-cyan-500">
                <ChevronRight className="h-5 w-5 rotate-180" />
              </button>
              <span className="px-4 py-2 bg-cyan-500 text-white rounded-lg">1</span>
              <span className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">2</span>
              <button className="p-2 text-gray-400 hover:text-cyan-500">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Kategoriler
              </h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button className="flex items-center justify-between w-full text-gray-600 hover:text-cyan-600 transition-colors">
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="h-4 w-4 text-cyan-500" />
                        <span>{category.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">({category.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Bültene Abone Ol
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                En yeni rehberler, ipuçları ve güncel duyurulardan haberdar olmak için e-posta listemize katılın.
              </p>
              <Input
                type="email"
                placeholder="E-posta adresiniz"
                className="mb-3"
              />
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
                Abone Ol
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolyoRehberi;
