import React from 'react';

function App() {
  return (
    <main className="font-poppins scroll-smooth">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-purple-200 to-white px-4">
        <h1 className="text-5xl font-extrabold text-primary mb-4">Waleed Majbour</h1>
        <p className="text-xl text-gray-700 mb-4">Hi. My name is Waleed. I’m a recent software engineering graduate with a variety of skills.</p>
        <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-primary-dark transition">Contact Me</a>

        {/* Icons Section */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-10 max-w-5xl">
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
      </section>

      {/* Work Experience Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-primary mb-12">Work Experience</h2>
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="bg-purple-50 rounded-lg shadow-lg p-6 hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-xl font-semibold text-gray-800">Software Developer @ Beamra</h3>
            <p className="text-sm text-gray-500 mb-2">Sept 2022 – Apr 2024 (Internship)</p>
            <ul className="text-left list-disc list-inside text-gray-700 space-y-1">
              <li>Developed a scalable web application ensuring high performance.</li>
              <li>Built reusable UI components in <strong>TypeScript</strong>.</li>
              <li>Integrated <strong>RESTful APIs</strong> for real-time KPIs.</li>
              <li>Improved load times by 30% via lazy loading and advanced state management.</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg shadow-lg p-6 hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-xl font-semibold text-gray-800">Specialist @ Apple</h3>
            <p className="text-sm text-gray-500 mb-2">May 2022 - Present</p>
            <ul className="text-left list-disc list-inside text-gray-700 space-y-1">
              <li>Provided expert support for <strong>macOS</strong> and <strong>iOS</strong> devices.</li>
              <li>Helped enterprise clients optimize tech setups and workflows.</li>
              <li>Utilized data to improve inventory management processes.</li>
            </ul>
          </div>
        </div>
      </section>
        
      {/* Projects Section */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold text-primary mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Project 1 */}
          <div className="bg-purple-50 shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Password Enforcement Tool</h3>
            <p className="text-sm text-gray-700 mb-4">
              A security tool built in Python to validate password strength with real-time feedback and admin audit logs.
            </p>
            <div className="text-sm text-gray-500 mb-2">Tech: Python</div>
            <a href="https://github.com/wmajbour/password-tool" className="text-primary hover:underline" target="_blank">View Code</a>
          </div>

          {/* Project 2 */}
          <div className="bg-purple-50 shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Survey Web App</h3>
            <p className="text-sm text-gray-700 mb-4">
              A full-stack survey platform built with cloud hosting, optimized for reliability and usability.
            </p>
            <div className="text-sm text-gray-500 mb-2">Tech: React, Azure, Node.js</div>
            <a href="https://github.com/wmajbour/survey-app" className="text-primary hover:underline" target="_blank">View Code</a>
          </div>

          {/* Project 3 */}
          <div className="bg-purple-50 shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Embedded TI MSP System</h3>
            <p className="text-sm text-gray-700 mb-4">
              Developed embedded applications using MSP430 microcontrollers with real-time control.
            </p>
            <div className="text-sm text-gray-500 mb-2">Tech: C, TI MSP430, RTOS</div>
            <a href="https://github.com/wmajbour/embedded-ti" className="text-primary hover:underline" target="_blank">View Code</a>
          </div>

        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-purple-50 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Get In Touch</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded" />
          <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded h-32"></textarea>
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark">Send</button>
        </form>
      </section>
    </main>
  );
}

export default App;
