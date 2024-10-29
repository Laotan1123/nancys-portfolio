import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <section className="py-20 bg-gray-900">
        <div className="px-4 md:px-8 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Eco Haven Complex"
              description="Sustainable residential complex with integrated green spaces"
              image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
              year="2023"
            />
            <ProjectCard
              title="Urban Oasis Tower"
              description="Mixed-use skyscraper with vertical gardens"
              image="https://images.unsplash.com/photo-1577493340887-b7bfff550145?auto=format&fit=crop&q=80&w=800"
              year="2022"
            />
            <ProjectCard
              title="Cultural Arts Center"
              description="Contemporary museum and performance space"
              image="https://images.unsplash.com/photo-1506422748879-887454f9cdff?auto=format&fit=crop&q=80&w=800"
              year="2021"
            />
            <ProjectCard
              title="Waterfront Pavilion"
              description="Public space connecting city and sea"
              image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
              year="2020"
            />
          </div>
        </div>
      </section>
    </div>
  );
}