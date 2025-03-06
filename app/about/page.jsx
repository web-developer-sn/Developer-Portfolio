'use client';
import * as React from 'react'
import Head from 'next/head';

 function About() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>About Me - SNBOY | Satendra - Portfolio</title>
        <meta
          name="description"
          content="Learn more about SNBOY, a MERN Stack Developer specializing in JavaScript, React, Next.js, Node.js, and MongoDB."
        />
        <meta
          name="keywords"
          content="MERN Stack Developer, JavaScript, React, Next.js, Node.js, MongoDB, Full Stack Developer"
        />
        <meta name="author" content="SNBOY" />
      </Head>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Who Am I?</h2>
          <p className="text-lg leading-relaxed">
            I&apos;m <strong>SNBOY</strong>, a passionate{' '}
            <span className="text-blue-600 font-semibold">MERN Stack Developer</span> with
            expertise in **JavaScript, React, Next.js, Node.js, and MongoDB**. I love
            building **scalable web applications** and optimizing user experiences.
          </p>
          <h3 className="text-2xl font-semibold mt-6">My Mission</h3>
          <p className="text-lg leading-relaxed">
            My goal is to create <strong>efficient, high-performing web applications</strong> that
            enhance user experiences.
          </p>
        </section>

        {/* Skills & Technologies */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Skills & Technologies</h2>

          <h3 className="text-2xl font-semibold mb-3">Core Skills</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {['JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Express.js'].map((skill) => (
              <li key={skill} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-md text-center font-medium">
                {skill}
              </li>
            ))}
          </ul>

          <h4 className="text-xl font-semibold mt-6">Additional Skills</h4>
          <ul className="list-disc pl-6">
            {['Bootstrap', 'Material UI', 'SQL (Basic)', 'AG Grid'].map((skill) => (
              <li key={skill} className="text-lg">{skill}</li>
            ))}
          </ul>
        </section>

        {/* Experience Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">My Experience</h2>

          <h3 className="text-2xl font-semibold mb-3">Projects & Work</h3>
          <p className="text-lg leading-relaxed">
            I have built <strong>dynamic web applications</strong> and <strong>backend APIs</strong> with
            a focus on **scalability and performance**.
          </p>

          <h4 className="text-xl font-semibold mt-4">Key Areas of Work</h4>
          <ul className="list-disc pl-6">
            <li className="text-lg">Full-Stack Web Development</li>
            <li className="text-lg">API Design & Integration</li>
            <li className="text-lg">UI/UX Optimization</li>
          </ul>

          <h5 className="text-lg font-semibold mt-6">Technologies Used</h5>
          <p className="text-base">
            I work with <strong>React, Next.js, Node.js, MongoDB</strong>, and more to deliver
            high-quality software solutions.
          </p>
        </section>

        {/* Contact Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Let&apos;s Connect</h2>
          <p className="text-lg leading-relaxed">
            Whether you need a developer or just want to discuss tech, feel free to reach out!
          </p>
          <h6 className="text-base font-semibold mt-4">
            Available for Freelance & Full-Time Opportunities
          </h6>
          <a
            href="/contact"
            className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </section>
      </main>
    </>
  );
}
const Page=()=>{
    return(
        <About/>
    )
}
export default React.memo(Page)