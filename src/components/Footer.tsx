import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Eğitimler', path: '/egitimler' },
    { name: 'Portfolyo Rehberi', path: '/portfolyo-rehberi' },
    { name: 'Workshop', path: '/workshop' },
    { name: 'Galeri', path: '/basvuru' },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center space-x-1 mb-4">
              <span className="text-2xl font-bold">
                <span className="text-gray-900">M</span>
                <span className="text-cyan-500">Art</span>
              </span>
              <span className="text-gray-600 text-sm font-medium">Academy</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Portfolyo odaklı sanat, tasarım ve animasyon eğitimleri ile kariyerinizi şekillendirin.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-cyan-600 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-cyan-500" />
                <span className="text-gray-600 text-sm">+90 505 006 36 10</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-cyan-500" />
                <span className="text-gray-600 text-sm">info@martacademy.art</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-cyan-500" />
                <span className="text-gray-600 text-sm">İstanbul, Türkiye</span>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Mart Academy Online. Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
