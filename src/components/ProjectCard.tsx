import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  year: string;
}

export default function ProjectCard({ title, description, image, year }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg"
    >
      <img
        src={image}
        alt={title}
        className="h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm mt-2">{description}</p>
        <span className="text-sm mt-2 text-gray-300">{year}</span>
      </div>
    </motion.div>
  );
}