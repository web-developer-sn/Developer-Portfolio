'use client'
import Head from "next/head";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default function Home() {
  return (
    <>
     
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Satendra" />
        <meta name="keywords" content="satendra, snboy, mern stack developer, full stack developer, react developer, node.js developer, javascript expert, web developer, mongodb, express.js, next.js, software engineer, portfolio website, snboy developer, mern stack expert, web app developer, frontend backend developer" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
      </Head>

      <div suppressHydrationWarning>
        <HeroSection />
        <AboutSection />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <ContactSection />
      </div>
    </>
  );
}
