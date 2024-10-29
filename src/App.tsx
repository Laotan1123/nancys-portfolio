import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Thesis from './pages/Thesis';
import Projects from './pages/Projects';
import Freelance from './pages/Freelance';
import Contact from './pages/Contact';
import { Building2 } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/thesis" element={<Thesis />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Footer */}
        <footer className="bg-zinc-950/50 text-white py-8 border-t border-zinc-800/50">
          <div className="px-4 md:px-8 max-w-6xl mx-auto text-center">
            <Building2 className="w-8 h-8 mx-auto mb-4 text-zinc-400" />
            <p className="text-zinc-400">© 2024 Nancy Udonsak. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;