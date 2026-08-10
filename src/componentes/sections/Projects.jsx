import React, { useState, useEffect } from 'react';
import { Sparkles, Code2 } from 'lucide-react';
import { projects as defaultProjects, categories as defaultCategories } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../bacakgrounds/RadialGradientBackground';

const Projects = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProjectsList(data);
        }
      })
      .catch((err) => {
        console.log('Using default project dataset:', err);
      });
  }, []);

  const displayProjects = projectsList.length > 0 ? projectsList : defaultProjects;

  const categories = defaultCategories.length > 0 ? defaultCategories : ['All', 'Web Apps', 'Full Stack', 'UI Components'];

  const filteredProjects =
    activeCategory === 'All'
      ? displayProjects
      : displayProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 bg-black overflow-hidden border-t border-white/5">
      <RadialGradientBackground variant="projects" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2.5 px-[18px] py-[9px] mb-5 bg-primary/10 border border-primary/20 rounded-full">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                Featured Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
              Selected Projects
            </h2>
            <p className="text-base md:text-lg text-white/60">
              A collection of modern web applications, scalable APIs, and interactive full-stack software built with precision.
            </p>
          </FadeIn>
        </div>

        {/* Filter Categories */}
        <FadeIn delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary text-black font-semibold shadow-[0_0_20px_rgba(141,255,105,0.3)]'
                    : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 150}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
