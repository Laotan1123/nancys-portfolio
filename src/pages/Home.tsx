import { motion } from 'framer-motion';
import Scene3D from '../components/Scene3D';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Scene3D />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-white mb-4"
          >
            Nancy Udonsak
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Innovative Architect
            <br></br><br></br>
            Welcome to my Portfolio SIte
          </motion.p>
        </div>
      </header>
      
      <section className="container mx-auto px-4 py-16">
        <div className="aspect-w-16 aspect-h-10 w-full max-w-3xl mx-auto">
          <iframe 
            src="https://www.yumpu.com/en/embed/view/dKzNc9YBRgjxUmVs" 
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen={true}
            allow="fullscreen"
          />
        </div>
        <div className="text-center mt-4">
          <a 
            href="https://www.yumpu.com/en/document/view/67937929/slum-revitalization-a-look-into-makoko"
            className="text-blue-400 hover:text-blue-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            SLUM REVITALIZATION- A look into Makoko
          </a>
        </div>
      </section>
    </div>
  );
}