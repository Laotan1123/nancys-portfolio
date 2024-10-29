import { motion } from 'framer-motion';

export default function Freelance() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <section className="py-20 bg-gray-900">
        <div className="px-4 md:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-white">Freelance Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-800 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-white">Residential Design</h3>
                <p className="text-gray-300">Custom home designs tailored to your lifestyle and preferences</p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-white">Commercial Projects</h3>
                <p className="text-gray-300">Modern office spaces and retail environments</p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-white">Consultation</h3>
                <p className="text-gray-300">Expert advice on architectural planning and sustainability</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}