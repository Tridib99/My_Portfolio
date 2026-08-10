import React from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { title, description, image, category, technologies, link, github } = project;

  return (
    <div className="group relative bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full hover:shadow-[0_10px_30px_rgba(141,255,105,0.08)]">
      {/* Project Image Container */}
      <div className="relative aspect-video overflow-hidden bg-black/40">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Category Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/15 rounded-full text-xs font-medium text-primary">
            <Layers className="w-3 h-3" />
            {category}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>
        </div>

        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies &&
              technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/80 font-mono"
                >
                  {tech}
                </span>
              ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-black font-medium text-xs rounded-xl hover:bg-primary/90 transition-all duration-300"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white font-medium text-xs rounded-xl hover:bg-white/20 border border-white/10 transition-all duration-300"
              >
                <FaGithub className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
