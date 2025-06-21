
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Project({ title, description, tech, link, image, reverse }) {
  const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: false });

  return (
    <section ref={ref} className="h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: reverse ? 100 : -100, scale: 0.9 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: reverse ? 100 : -100, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="md:w-1/2 text-left"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300 my-4">{description}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Tech: {tech}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            View Code →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reverse ? -100 : 100, scale: 0.9 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: reverse ? -100 : 100, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="md:w-1/2"
        >
          <img
            src={image}
            alt={title}
            className="rounded-xl shadow-xl w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

    </section>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const projects = [
    {
      title: "Password Enforcement Tool",
      description: "A security tool built in Python to validate password strength with real-time feedback and admin audit logs.",
      tech: "Python",
      link: "https://github.com/wmajbour/password-tool",
      image: "https://placehold.co/1200x800?text=Password+Tool"
    },
    {
      title: "Survey Web App",
      description: "A full-stack survey platform built with cloud hosting, optimized for reliability and usability.",
      tech: "React, Azure, Node.js",
      link: "https://github.com/wmajbour/survey-app",
      image: "https://placehold.co/1200x800?text=Survey+App"
    },
    {
      title: "Embedded TI MSP System",
      description: "Developed embedded applications using MSP430 microcontrollers with real-time control.",
      tech: "C, TI MSP430, RTOS",
      link: "https://github.com/wmajbour/embedded-ti",
      image: "https://placehold.co/1200x800?text=Embedded+System"
    },
    {
      title: "Embedded TI MSP System",
      description: "Developed embedded applications using MSP430 microcontrollers with real-time control.",
      tech: "C, TI MSP430, RTOS",
      link: "https://github.com/wmajbour/embedded-ti",
      image: "https://placehold.co/1200x800?text=Embedded+System"
    }
  ];

  return (
    <main className="font-poppins bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 relative">
      {/* Dark mode toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-800 text-sm px-4 py-2 rounded-full shadow-lg hover:scale-105 transition"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Projects fullscreen scroll-reactive section */}
      <header className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-purple-200 to-white dark:from-purple-900 dark:to-gray-900 px-4">
        <h1 className="text-5xl font-extrabold text-primary mb-4">Hi. I'm Waleed.</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
          I'm a recent software engineering graduate with a variety of skills.
        </p>
        {/* Icons Section */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-50 max-w-5xl">
          {[
            ['python', 'python-original'],
            ['java', 'java-original'],
            ['javascript', 'javascript-original'],
            ['c', 'c-original'],
            ['cplusplus', 'cplusplus-original'],
            ['typescript', 'typescript-original'],
            ['html5', 'html5-original'],
            ['css3', 'css3-original'],
            ['nodejs', 'nodejs-original'],
            ['angularjs', 'angularjs-original'],
            ['react', 'react-original'],
            ['spring', 'spring-original'],
            ['mysql', 'mysql-original'],
            ['docker', 'docker-original'],
            ['kubernetes', 'kubernetes-plain'],
            ['googlecloud', 'googlecloud-original'],
            ['git', 'git-original'],
            ['github', 'github-original'],
            ['linux', 'linux-original'],
            ['bash', 'bash-original'],
            ['ubuntu', 'ubuntu-plain'],
          ].map(([name, icon]) => (
            <img
              key={name}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${icon}.svg`}
              alt={name}
              className="w-12 h-12 hover:scale-125 transition-transform duration-300"
              title={name}
            />
          ))}
        </div>

      </header>

      {projects.map((project, i) => (
        <Project key={i} {...project} reverse={i % 2 !== 0} />
      ))}

      {/* Contact section */}
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-purple-50 dark:bg-gray-800 text-center px-6">
        <h2 className="text-3xl font-bold text-primary mb-6">Get In Touch</h2>
        <form className="max-w-md w-full space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded text-black dark:text-white" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded text-black dark:text-white" />
          <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded h-32 text-black dark:text-white"></textarea>
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark">Send</button>
        </form>
      </section>
    </main>
  );
}

export default App;
