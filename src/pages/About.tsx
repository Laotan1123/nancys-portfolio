import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              With over a decade of experience in architectural design, I specialize in creating sustainable, 
              modern spaces that harmoniously blend with their surroundings. My approach combines innovative 
              technology with timeless design principles to create buildings that inspire and endure.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800"
              alt="Nancy Undonsak"
              className="rounded-lg shadow-xl"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}