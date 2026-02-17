import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Egitimler from './pages/Egitimler';
import Hakkimizda from './pages/Hakkimizda';
import Testimonial from './pages/Testimonial';
import Temeller from './pages/Temeller';
import PortfolyoRehberi from './pages/PortfolyoRehberi';
import Workshop from './pages/Workshop';
import Basvuru from './pages/Basvuru';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="egitimler" element={<Egitimler />} />
          <Route path="hakkimizda" element={<Hakkimizda />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="temeller" element={<Temeller />} />
          <Route path="portfolyo-rehberi" element={<PortfolyoRehberi />} />
          <Route path="workshop" element={<Workshop />} />
          <Route path="basvuru" element={<Basvuru />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
