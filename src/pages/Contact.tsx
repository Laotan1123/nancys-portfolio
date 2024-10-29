import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Get in Touch</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:nudonsak@gmail.com"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg"
          >
            <Mail className="w-8 h-8 mb-4 text-gray-300" />
            <span className="text-gray-300">nudonsak@gmail.com</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="tel:+2348172066824"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg"
          >
            <Phone className="w-8 h-8 mb-4 text-gray-300" />
            <span className="text-gray-300">+234 817 206 6824</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.linkedin.com/in/edidiong-udonsak-b36647163?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg"
          >
            <Linkedin className="w-8 h-8 mb-4 text-gray-300" />
            <span className="text-gray-300">LinkedIn</span>
          </motion.a>
        </div>
      </section>
    </div>
  );
}