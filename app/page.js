'use client'
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* SEO Meta Tags for Search Ranking */}
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Satendra" />
        <meta name="keywords" content="satendra, snboy, mern stack developer, full stack developer, react developer, node.js developer, javascript expert, web developer, mongodb, express.js, next.js, software engineer, portfolio website, snboy developer, mern stack expert, web app developer, frontend backend developer" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
      </Head>

      <NextSeo
        title="Satendra | Full Stack Developer & MERN Stack Expert"
        description="Explore Satendra's portfolio, a highly skilled MERN stack developer specializing in MongoDB, Express.js, React, and Node.js. Passionate about building scalable, high-performance web applications. Available for collaborations!"
        canonical="https://satendra.vercel.app/"
        openGraph={{
          url: 'https://satendra.vercel.app/',
          title: 'Satendra | MERN Stack Developer & Full Stack Expert',
          description: 'Satendra is a professional MERN stack developer specializing in React, Node.js, and scalable web applications.',
          images: [
            {
              url: 'https://satendra.vercel.app/_next/image?url=%2Fadmin.jpg&w=640&q=75',
              width: 1200,
              height: 630,
              alt: 'Satendra Portfolio Banner',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Satendra | MERN Stack Developer',
        }}
        twitter={{
          handle: '@snboy',
          site: '@snboy',
          cardType: 'summary_large_image',
        }}
      />

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
