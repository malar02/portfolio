import Scene from "../models/Scene";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative min-h-screen bg-[#050816] overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Scene />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-screen pt-16">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-20">
          <div className="max-w-3xl">

            {/* Greeting */}
            <p className="text-cyan-400 text-xl md:text-2xl font-medium mb-5">
              👋 Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-white">
              TamilMalar
            </h1>

            {/* Title */}
            <h2 className="mt-8 text-2xl md:text-4xl font-semibold text-gray-200 leading-tight max-w-4xl">
              AI Engineer • Machine Learning •{" "}
              <span className="whitespace-nowrap">
                Full Stack Developer
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 text-lg md:text-xl text-gray-400 leading-9 max-w-xl">
              Passionate Computer Science graduate specializing in Artificial
              Intelligence, Deep Learning, Computer Vision, and modern web
              development. I build intelligent AI applications that solve
              real-world problems.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap items-center gap-6">

              {/* View Projects */}
              <Link
                to="/projects"
                className="px-8 py-4 rounded-full border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black hover:scale-105 transition-all duration-300"
              >
                View Projects
              </Link>

              {/* Resume */}
              <a
                href="/TamilMalar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black hover:scale-105 transition-all duration-300"
              >
                Download Resume
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/malar02"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center text-2xl text-white hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all duration-300"
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tamilmalar-r-998925328/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center text-2xl text-white hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <Link
        to="/skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20"
      >
        <div className="w-7 h-12 rounded-full border-2 border-cyan-400 flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
        </div>
      </Link>
    </section>
  );
}

export default Hero;