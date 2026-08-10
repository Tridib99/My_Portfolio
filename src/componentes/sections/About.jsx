import React, { useState } from "react";
import { Download, Code2, Sparkles } from "lucide-react";
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb , SiJavascript , SiTypescript } from "react-icons/si";
import { PERSONAL_INFO } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../bacakgrounds/RadialGradientBackground";

const About = () => {
  const skills = [
    { name: "React.js", icon: <SiReact color="#61DAFB" /> },
    { name: "Tailwind css", icon: <SiTailwindcss color="#38BDF8" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "Javascript", icon: <SiJavascript color="F5DA27" /> },
    { name: "Typescript", icon: <SiTypescript color="4763F5" /> },
  ];

  return (
    <section id="about" className="relative py-20 bg-black overflow-hidden">
      <RadialGradientBackground variant="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <FadeIn delay={60}>
                <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-5 border border-primary/20 rounded-full">
                  <Code2 className="w-5 h-5 text-primary" />
                  <span className="text-sm text-primary font-medium">
                    Full-Stack Developer
                  </span>
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight">
                  Passionate Software Engineer
                </h2>
              </FadeIn>

              <FadeIn delay={200}>
                <p className="flex flex-col gap-4">
                  {PERSONAL_INFO.bio.map((paragraph, index) => (
                    <span
                      key={index}
                      className="text-base text-white/70 leading-relaxed"
                    >
                      {paragraph}
                      <br />
                      <br />
                    </span>
                  ))}
                </p>
              </FadeIn>

              <FadeIn delay={300}>
                <button
                  onClick={() => window.open(PERSONAL_INFO.resume, "_blank")}
                  className="inline-flex items-center gap-2 px-[18px] py-[11px] mt-6 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                  <span className="text-sm font-medium">Download Resume</span>
                </button>
              </FadeIn>
            </div>
          </div>
          {/* Right */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 relative group">
                <div className="absolute inset-0 bg-linear-to-b from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Code2 className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Skills & Technologies
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {" "}
                        Specialized in modern web development tools and
                        frameworks{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-b from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all duration-300">
                  
                    <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4">
                        <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">
                      Clean Code
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {" "}
                      Committed to writing maintainable and efficient code
                      following best practices{" "}
                    </p>
                </div>
              </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-linear-to-b from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"> </div>
                    <div className="relative bg-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all duration-300">
                      <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4">
                        <Download className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-base font-semibold text-white mb-2">Performance</h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {" "}
                        Committed to writing maintainable and efficient code
                      following best practices {" "}
                      </p>
                    </div>
                  </div>
                </div>
              
          </FadeIn>
        </div>

          <FadeIn delay={500}>
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-center">
                <h3 className="text-2xl font-normal text-white mb-2">Tech Stack & Expertise</h3>
                {/* <p className="text-sm text-white/60 ">
                  Tecnologies I work with to build amazing webpages
                </p> */}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl">
                {skills.map((skill,index)=>(
                  <div key={index}
                  className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105" 
                  >
                   <div className="text-4xl">
                    {skill.icon}
                    </div>
                    <div className="text-white font-medium">
                      {skill.name}
                      </div>
                      <div className=""></div>
                    </div>
                ))}
                  </div>
            </div>  
                    

          </FadeIn>

        </div>
    </section>
  );
};

export default About;
