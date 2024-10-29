import { motion } from 'framer-motion';

export default function Thesis() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <section className="py-20 bg-gray-900">
        <div className="px-4 md:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">My Thesis</h2>
            <p className="text-gray-300 mb-8">
              "Sustainable Urban Integration: Bridging Nature and Architecture in Modern Cities"
            </p>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"
                alt="Thesis Project"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}