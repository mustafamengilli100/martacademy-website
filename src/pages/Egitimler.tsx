import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Egitimler = () => {
  const [activeFilter, setActiveFilter] = useState('Tümü');

  const filters = ['Tümü', 'Animasyon', 'Dijital Tasarım', 'Konsept Tasarım', 'Portfolyo', 'Çizim'];

  const courses = [
    {
      image: '/assets/asset_2.jpg',
      category: 'Portfolyo',
      title: 'Akademik Portfolyo',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
    },
    {
      image: '/assets/asset_3.jpg',
      category: 'Çizim',
      title: 'Akademik Çizim Teknikleri',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
    },
    {
      image: '/assets/asset_4.jpg',
      category: 'Animasyon',
      title: 'Dijital İllüstrasyon',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
    },
    {
      image: '/assets/asset_5.jpg',
      category: 'Dijital Tasarım',
      title: '2D Animasyon',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
    },
    {
      image: '/assets/asset_6.jpg',
      category: 'Konsept Tasarım',
      title: '3D Animasyon',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
    },
    {
      image: '/assets/asset_7.jpg',
      category: 'Animasyon',
      title: 'Konsept Tasarım',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
    },
  ];

  const filteredCourses = activeFilter === 'Tümü' 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Eğitimler
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sanat, tasarım ve animasyon odaklı kapsamlı eğitim programlarımızla portfolyonuzu bir üst seviyeye taşıyın.
          </p>
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

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-cyan-500 text-white">
                  {course.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {course.description}
                </p>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
                  Başvuru Yap
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Egitimler;
