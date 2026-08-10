import React, { useState, useEffect } from 'react';
import { Sparkles, Code2, Terminal, Database, Wrench, CheckCircle2 } from 'lucide-react';
import { skills as defaultSkills } from '../../data/skills';
import * as LucideIcons from 'lucide-react';
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiJavascript, SiTypescript, SiGit, SiFigma, SiVite } from 'react-icons/si';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../bacakgrounds/RadialGradientBackground';

const iconMap = {
  'React.js': <SiReact className="text-[#61DAFB]" />,
  'JavaScript': <SiJavascript className="text-[#F7DF1E]" />,
  'JavaScript (ES6+)': <SiJavascript className="text-[#F7DF1E]" />,
  'Tailwind CSS': <SiTailwindcss className="text-[#38BDF8]" />,
  'TypeScript': <SiTypescript className="text-[#3178C6]" />,
  'Node.js': <SiNodedotjs className="text-[#339933]" />,
  'Node.js & Express': <SiNodedotjs className="text-[#339933]" />,
  'MongoDB': <SiMongodb className="text-[#47A248]" />,
  'MongoDB & SQL': <SiMongodb className="text-[#47A248]" />,
  'Git & GitHub': <SiGit className="text-[#F05032]" />,
  'Git & Github': <SiGit className="text-[#F05032]" />,
  'Figma': <SiFigma className="text-[#F24E1E]" />,
  'Figma to Code': <SiFigma className="text-[#F24E1E]" />,
  'Vite': <SiVite className="text-[#646CFF]" />,
  'Vite & Build Tools': <SiVite className="text-[#646CFF]" />,
};

const Skills = () => {
  const [apiSkills, setApiSkills] = useState([]);

  useEffect(() => {
    fetch('/api/skills')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setApiSkills(data);
        }
      })
      .catch((err) => {
        console.log('Using default skills data:', err);
      });
  }, []);

  const displaySkills = apiSkills.length > 0 ? apiSkills : defaultSkills;

  const categories = {
    'Frontend Development': displaySkills.filter(
      (s) => s.category === 'Frontend' || ['React.js', 'JavaScript', 'Tailwind CSS', 'TypeScript'].includes(s.name)
    ),
    'Backend & APIs': displaySkills.filter(
      (s) => s.category === 'Backend & APIs' || ['Node.js', 'REST APIs', 'MongoDB', 'Node.js & Express', 'RESTful APIs', 'MongoDB & SQL'].includes(s.name)
    ),
    'Tools & Architecture': displaySkills.filter(
      (s) => s.category === 'Tools & DevOps' || s.category === 'Design' || ['Git & GitHub', 'Git & Github', 'Responsive Design', 'Figma', 'Vite', 'Vite & Build Tools', 'Figma to Code'].includes(s.name)
    )
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'text-[#8DFF69] bg-[#8DFF69]/10 border-[#8DFF69]/30';
      case 'Advanced':
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';
      case 'Intermediate':
      default:
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30';
    }
  };

  const getProgressPercentage = (skill) => {
    if (skill.percentage) return skill.percentage;
    switch (skill.level) {
      case 'Expert':
        return 92;
      case 'Advanced':
        return 82;
      case 'Intermediate':
      default:
        return 70;
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-black overflow-hidden border-t border-white/5">
      <RadialGradientBackground variant="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2.5 px-[18px] py-[9px] mb-5 bg-primary/10 border border-primary/20 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                Technical Mastery
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
              Skills & Expertise
            </h2>
            <p className="text-base md:text-lg text-white/60">
              A comprehensive overview of my tech stack, frameworks, and modern web software development proficiency.
            </p>
          </FadeIn>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(categories).map(([category, categorySkills], idx) => (
            <FadeIn key={category} delay={idx * 150}>
              <div className="h-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(141,255,105,0.05)]">
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                      {idx === 0 ? (
                        <Code2 className="w-6 h-6" />
                      ) : idx === 1 ? (
                        <Database className="w-6 h-6" />
                      ) : (
                        <Wrench className="w-6 h-6" />
                      )}
                    </div>
                    <h3 className="text-xl font-medium text-white">{category}</h3>
                  </div>

                  <div className="space-y-5">
                    {categorySkills.map((skill) => {
                      const IconComponent =
                        iconMap[skill.name] ||
                        (skill.icon && LucideIcons[skill.icon] ? (
                          React.createElement(LucideIcons[skill.icon], { className: 'w-5 h-5 text-primary' })
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        ));

                      const percent = getProgressPercentage(skill);

                      return (
                        <div key={skill.name || skill.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <span className="text-xl">{IconComponent}</span>
                              <span className="text-sm font-medium text-white/90">
                                {skill.name}
                              </span>
                            </div>
                            <span
                              className={`text-xs px-2.5 py-0.5 rounded-full border ${getLevelColor(
                                skill.level
                              )}`}
                            >
                              {skill.level}
                            </span>
                          </div>

                          {/* Progress bar */}
                          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${percent}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
