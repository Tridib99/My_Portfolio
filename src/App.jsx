import React from 'react';
import Navbar from './componentes/layout/Navbar';
import Hero from './componentes/sections/Hero';
import About from './componentes/sections/About';
import Skills from './componentes/sections/Skills';
import Projects from './componentes/sections/Projects';
import Contact from './componentes/sections/Contact';
import Footer from './componentes/layout/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
