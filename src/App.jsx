import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Project({ title, description, tech, link, image, reverse }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });



  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6 py-5">
      <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-8 max-w-6xl mx-auto`}>
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

function SectionHeader({ text }) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
  return (
    <motion.h2
      ref={ref}
      className="text-4xl font-bold text-center text-primary mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {text}
    </motion.h2>
  );
}

function ExperienceItem({ title, date, details, delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="absolute -left-4 top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-gray-900" />
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-3">{date}</p>
      <ul className="list-disc list-outside pl-5 text-gray-700 dark:text-gray-300 space-y-1">
        {details.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </motion.div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [projectRef, projectsInView] = useInView({ threshold: 0.3 });

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
    }
  ];

  const experiences = [
    {
      title: "Software Developer Intern @ Beamra",
      date: "Sept 2022 – Apr 2024",
      details: [
        "Built scalable full-stack web apps and dashboards for business clients",
        "Used TypeScript and modern frameworks for UI components",
        "Integrated REST APIs and real-time KPI charts",
        "Optimized performance with state management & lazy loading"
      ]
    },
    {
      title: "Specialist @ Apple",
      date: "May 2022 – Present",
      details: [
        "Provided technical support for iOS/macOS devices and software",
        "Assisted enterprise clients with system setup and troubleshooting",
        "Streamlined inventory workflows through internal tools"
      ]
    }
  ];

  return (
    <main className="scroll-smooth font-poppins bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 relative">
      <nav className="fixed w-full top-0 left-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <div className="relative max-w-7xl mx-auto h-16 flex items-center justify-center">

          {/* Center - Dark Mode Toggle */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={toggleDarkMode}
              className="bg-gray-200 dark:bg-gray-800 text-sm px-4 py-2 rounded-full shadow hover:scale-105 transition"
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>

          {/* Left - Navigation Links */}
          <div className="absolute left-6 flex items-center space-x-6">
            <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">Experience</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">Projects</a>
            <a href="#resume" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">Resume</a>

          </div>

          {/* Right - LinkedIn Icon */}
          <div className="absolute right-6">
            <a
              href="https://www.linkedin.com/in/waleed-majbour-63a99418b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark transition"
              title="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 
            5v14c0 2.761 2.239 5 5 5h14c2.762 0 
            5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 
            19h-3v-10h3v10zm-1.5-11.268c-.966 
            0-1.75-.804-1.75-1.732s.784-1.732 
            1.75-1.732 1.75.804 
            1.75 1.732-.784 1.732-1.75 
            1.732zm13.5 11.268h-3v-5.604c0-3.368-4-3.117-4 
            0v5.604h-3v-10h3v1.604c1.396-2.586 
            7-2.777 7 2.476v5.92z"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>



      <header className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-purple-200 to-white dark:from-purple-900 dark:to-gray-900 px-4 pt-24">
        <motion.h1
          className="text-5xl font-extrabold text-primary mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi. I'm Waleed.
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 dark:text-gray-300 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I'm a recent software engineering graduate with a variety of skills.
        </motion.p>

        {/* Tech Icons */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 max-w-5xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
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
        </motion.div>
      </header>

      <section id="experience" className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 px-6 py-6">
        <SectionHeader text="Work Experience" />
        <div className="flex justify-center">
          <div className="relative border-l-4 border-primary pl-6 space-y-16 max-w-2xl">
            {experiences.map((exp, idx) => (
              <ExperienceItem key={idx} {...exp} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" ref={projectRef}>
        <SectionHeader text="Projects" />
        {projects.map((project, i) => (
          <div id={`project-${i}`} key={i}>
            <Project {...project} reverse={i % 2 !== 0} />
          </div>
        ))}
      </section>


      <AnimatePresence>
        {projectsInView && (
          <motion.div
            className="fixed top-1/2 right-6 transform -translate-y-1/2 z-40 hidden md:flex flex-col gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {projects.map((_, i) => (
              <a
                key={i}
                href={`#project-${i}`}
                className="w-3 h-3 rounded-full bg-gray-400 hover:bg-primary transition"
                title={`Project ${i + 1}`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>


      {/* Resume Section */}
      <section id="resume" className="pt-20 pb-96 px-6 bg-white dark:bg-gray-900 text-center"
        style={{ paddingBottom: '500' }}>
        <SectionHeader text="I am currently seeking a full-time position!" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            Check out my resume for a detailed overview of my skills, education, and work experience.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
          >
            View Resume
          </a>
        </motion.div>
      </section>
      <div className="h-32 bg-gradient-to-b from-transparent to-white dark:to-gray-900"></div>
    </main>
  );
}

export default App;
